import { NextRequest } from 'next/server';
import { apiHandler, successResponse, errorResponse, checkRateLimit, getClientIp } from '@/lib/utils/api';
import { uploadToCloudinary, isCloudinaryConfigured } from '@/lib/utils/cloudinary';

// Allowed file types
const ALLOWED_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
];

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

function validateFile(file: File): { valid: boolean; error?: string } {
  if (!file) {
    return { valid: false, error: 'No file provided' };
  }

  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: 'File size exceeds 10MB limit' };
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return { valid: false, error: 'File type not allowed' };
  }

  return { valid: true };
}

// POST - Upload single or multiple files to Cloudinary
export const POST = apiHandler(async (request: NextRequest) => {
  // Rate limiting - 20 uploads per 15 minutes per IP
  const clientIp = getClientIp(request);
  if (!checkRateLimit(`upload:${clientIp}`, 20, 15 * 60 * 1000)) {
    return errorResponse('Too many uploads. Please try again later.', 429);
  }

  // Check if Cloudinary is configured
  if (!isCloudinaryConfigured()) {
    return errorResponse('File upload service is not configured', 500);
  }

  const formData = await request.formData();
  const files: File[] = [];

  // Collect all files from form data
  for (const [key, value] of formData.entries()) {
    if (value instanceof File) {
      // Validate each file
      const validation = validateFile(value);
      if (!validation.valid) {
        return errorResponse(`File "${value.name}": ${validation.error}`, 400);
      }
      files.push(value);
    }
  }

  if (files.length === 0) {
    return errorResponse('No files provided', 400);
  }

  // Check max files limit
  if (files.length > 10) {
    return errorResponse('Maximum 10 files allowed per upload', 400);
  }

  // Get optional folder parameter
  const folder = formData.get('folder')?.toString() || 'akos-uploads';

  try {
    // Upload files to Cloudinary
    const uploadPromises = files.map(async (file) => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return uploadToCloudinary(buffer, file.name, folder);
    });

    const results = await Promise.all(uploadPromises);

    // Check for failures
    const failures = results.filter((r) => !r.success);
    if (failures.length > 0) {
      return errorResponse(
        `Failed to upload ${failures.length} file(s): ${failures[0].error}`,
        500
      );
    }

    const uploadedFiles = results.map((r) => ({
      name: r.fileName,
      url: r.url,
      publicId: r.publicId,
      size: r.fileSize,
    }));

    return successResponse(
      {
        files: uploadedFiles,
        count: uploadedFiles.length,
      },
      files.length === 1
        ? 'File uploaded successfully to Cloudinary'
        : `${files.length} files uploaded successfully to Cloudinary`,
      201
    );
  } catch (error: any) {
    return errorResponse(error.message || 'Failed to upload files', 500);
  }
});
