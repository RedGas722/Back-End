import { GoogleGenerativeAI } from '@google/generative-ai';
import { API_KEY_GEMINI, GENERATION_CONFIG } from '../config/config-IA';

const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const obtenerDiagnostico = async (input: string): Promise<string> => {
  const prompt = `
  Eres un experto en diagnósticos técnicos de electrodomésticos como estufas, calentadores y hornos (gasodomésticos).
  Dado el siguiente input del usuario, responde solo con un objeto JSON válido que contenga:
  - El campo "input" con el texto original
  - Una "etiqueta" entre: "Instalación", "Reparación", "Mantenimiento", "Consulta"
  - Un arreglo "posibles_soluciones" con soluciones posibles
  - Solo devuelve las soluciones más probables
  - Si son más de 5, devuelve solo las 5 más probables
  - No incluyas ningún texto adicional, solo el JSON
  - No respondas nada que sea un tema fuera de los gasodomésticos
  - Si es un tema fuera de los gasodomésticos, responde con un JSON vacío

  Entrada del usuario:
  "${input}"
    `;

  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: GENERATION_CONFIG,
  });

  const response = await result.response;
  return response.text(); // Es texto JSON
};
