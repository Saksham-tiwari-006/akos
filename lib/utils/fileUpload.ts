import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export interface UploadedFile {
  name: string;
  url: string;
  size: number;
  type: string;
  uploadedAt: Date;
}

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

// Validate file
export function validateFile(file: File): { valid: boolean; error?: string } {
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

// Generate unique filename
export function generateUniqueFilename(originalName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(7);
  const extension = originalName.split('.').pop();
  const nameWithoutExt = originalName.split('.').slice(0, -1).join('.');
  const sanitizedName = nameWithoutExt.replace(/[^a-zA-Z0-9]/g, '-').substring(0, 50);

  return `${sanitizedName}-${timestamp}-${random}.${extension}`;
}

// Save file to local storage
export async function saveFileLocally(
  file: File,
  folder: string = 'uploads'
): Promise<UploadedFile> {
  // Validate file
  const validation = validateFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // Create upload directory
  const uploadDir = join(process.cwd(), 'public', folder);
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }

  // Generate unique filename
  const filename = generateUniqueFilename(file.name);
  const filePath = join(uploadDir, filename);

  // Save file
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await writeFile(filePath, buffer);

  return {
    name: file.name,
    url: `/${folder}/${filename}`,
    size: file.size,
    type: file.type,
    uploadedAt: new Date(),
  };
}

// Process multiple files
export async function saveMultipleFiles(
  files: File[],
  folder: string = 'uploads'
): Promise<UploadedFile[]> {
  const uploadPromises = files.map(file => saveFileLocally(file, folder));
  return Promise.all(uploadPromises);
}

// Delete file (for future implementation)
export async function deleteFile(url: string): Promise<boolean> {
  // TODO: Implement file deletion
  // For local storage, you'd use fs.unlink
  // For cloud storage (Cloudinary), use their delete API
  return true;
}

// Cloudinary upload (optional - if credentials are provided)
export async function uploadToCloudinary(file: File): Promise<UploadedFile> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary credentials not configured');
  }

  // Validate file
  const validation = validateFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'akos_uploads'); // You'll need to create this in Cloudinary

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to upload to Cloudinary');
  }

  const data = await response.json();

  return {
    name: file.name,
    url: data.secure_url,
    size: file.size,
    type: file.type,
    uploadedAt: new Date(),
  };
}
