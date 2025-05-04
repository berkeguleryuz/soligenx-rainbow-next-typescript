"use server";

interface CreditResponse {
  error: null | string;
  success: boolean;
  data: {
    image_generation_count: number;
    max_image_generation_count: number;
    model_training_count: number;
    max_model_training_count: number;
    post_generation_count: number;
    max_post_generation_count: number;
  } | null;
}

export async function getCredits(): Promise<CreditResponse> {
  // Instead of fetching from database, we'll return mock unlimited credits
  return {
    error: null,
    success: true,
    data: {
      image_generation_count: 999,
      max_image_generation_count: 999,
      model_training_count: 999,
      max_model_training_count: 999,
      post_generation_count: 999,
      max_post_generation_count: 999
    }
  };
}
