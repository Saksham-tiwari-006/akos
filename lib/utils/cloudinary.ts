import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryUploadResult {
  success: boolean;
  url?: string;
  publicId?: string;
  error?: string;
  fileName?: string;
  fileSize?: number;
}

/**
 * Upload file buffer to Cloudinary
 */
export async function uploadToCloudinary(
  fileBuffer: Buffer,
  fileName: string,
  folder: string = 'akos-uploads'
): Promise<CloudinaryUploadResult> {
  try {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder,
          resource_type: 'auto',
          public_id: `${Date.now()}-${fileName}`,
          use_filename: true,
          unique_filename: true,
        },
        (error, result) => {
          if (error) {
            reject({
              success: false,
              error: error.message || 'Failed to upload to Cloudinary',
            });
          } else if (result) {
            resolve({
              success: true,
              url: result.secure_url,
              publicId: result.public_id,
              fileName: result.original_filename || fileName,
              fileSize: result.bytes,
            });
          }
        }
      );

      uploadStream.end(fileBuffer);
    });
  } catch (error: any) {
    console.error('Cloudinary upload error:', error);
    return {
      success: false,
      error: error.message || 'Failed to upload to Cloudinary',
    };
  }
}

/**
 * Upload file from base64 string to Cloudinary
 */
export async function uploadBase64ToCloudinary(
  base64Data: string,
  folder: string = 'akos-uploads'
): Promise<CloudinaryUploadResult> {
  try {
    const result = await cloudinary.uploader.upload(base64Data, {
      folder,
      resource_type: 'auto',
      use_filename: true,
      unique_filename: true,
    });

    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
      fileName: result.original_filename,
      fileSize: result.bytes,
    };
  } catch (error: any) {
    console.error('Cloudinary upload error:', error);
    return {
      success: false,
      error: error.message || 'Failed to upload to Cloudinary',
    };
  }
}

/**
 * Delete file from Cloudinary
 */
export async function deleteFromCloudinary(publicId: string): Promise<boolean> {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result.result === 'ok';
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    return false;
  }
}

/**
 * Get Cloudinary URL with transformations
 */
export function getCloudinaryUrl(
  publicId: string,
  options?: {
    width?: number;
    height?: number;
    crop?: string;
    quality?: string | number;
  }
): string {
  return cloudinary.url(publicId, {
    transformation: [
      {
        width: options?.width,
        height: options?.height,
        crop: options?.crop || 'fill',
        quality: options?.quality || 'auto',
      },
    ],
  });
}

/**
 * Check if Cloudinary is configured
 */
export function isCloudinaryConfigured(): boolean {
  return !!(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
}
