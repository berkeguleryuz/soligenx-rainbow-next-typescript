/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { imageGenerationFormSchema } from "@/components/image-generation/ImageUserInput";
import { z } from "zod";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  useFileOutput: false,
});

interface ImageResponse {
  error: string | null;
  success: boolean;
  data: any | null;
}

export async function generateImageAction(
  input: z.infer<typeof imageGenerationFormSchema>,
): Promise<ImageResponse> {
  if (!process.env.REPLICATE_API_TOKEN) {
    return {
      error: "REPLICATE_API_TOKEN is not set",
      success: false,
      data: null,
    };
  }

  // Calculate dimensions based on aspect ratio
  let width = 1024;
  let height = 1024;
  
  if (input.aspect_ratio === "16:9") {
    width = 1280;
    height = 720;
  } else if (input.aspect_ratio === "9:16") {
    width = 720;
    height = 1280;
  } else if (input.aspect_ratio === "4:3") {
    width = 1024;
    height = 768;
  } else if (input.aspect_ratio === "3:4") {
    width = 768;
    height = 1024;
  }

  // Format model input based on all form fields
  const modelInput = {
    prompt: input.prompt,
    width: width,
    height: height,
    guidance_scale: Number(input.guidance),
    num_inference_steps: Number(input.num_inference_steps),
    output_format: input.output_format,
    num_outputs: input.num_outputs || 1,
    output_quality: input.output_quality || 80,
  };

  try {
    const modelToUse = input.model || "lucataco/sdxl-lcm:fb9c5cafb87e2c01d06a4c24e20ccd3b866e05e8e19586683a095c9641c78b12";
    console.log("Using model:", modelToUse);
    console.log("With input:", modelInput);

    const output = await replicate.run(modelToUse as `${string}/${string}`, {
      input: modelInput,
    });

    console.log("Generated Image Output:", output);

    return {
      error: null,
      success: true,
      data: output,
    };
  } catch (error: any) {
    console.error("Image generation error:", error);
    return {
      error: error.message || "Failed to generate image",
      success: false,
      data: null,
    };
  }
}

// Simplified storage function that just returns the images
export async function storeImages(images: {url: string, prompt: string, [key: string]: any}[]) {
  console.log("Images generated:", images);
  // No actual storage, just return images as is
  return {
    error: null,
    success: true,
    data: images,
  };
}

// Return empty array since we're not storing images
export async function getImages() {
  return {
    error: null,
    success: true,
    data: [],
  };
}

// Mock function for image deletion
export async function deleteImage(id: number) {
  return {
    error: null,
    success: true,
    data: { id },
  };
}
