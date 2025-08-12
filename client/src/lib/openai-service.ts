import { apiRequest } from "./queryClient";

export interface ChatResponse {
  response: string;
  fallback?: string;
}

export class OpenAIService {
  async sendMessage(message: string, context: any = {}): Promise<ChatResponse> {
    try {
      const response = await apiRequest("POST", "/api/ai-chat", {
        message,
        context,
      });
      return await response.json();
    } catch (error) {
      console.error("AI Chat error:", error);
      return {
        response: "",
        fallback: "Hi! I'm the DeliWer AI Concierge 🤖 I can help you calculate your iPhone trade-in value and start your hero journey. What iPhone model would you like to trade?"
      };
    }
  }
}

export const openAIService = new OpenAIService();
