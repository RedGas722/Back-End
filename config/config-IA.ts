import dotenv from 'dotenv';
dotenv.config();

export const API_KEY_GEMINI = process.env.KEY_GEMINI || '';

export const GENERATION_CONFIG = {
  stopSequences: ["red"],
  maxOutputTokens: 400,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};
