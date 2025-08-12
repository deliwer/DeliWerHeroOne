import { useState, useEffect, useRef } from "react";
import { Bot, Send, Calendar, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { openAIService } from "@/lib/openai-service";
import { DEVICE_OPTIONS } from "@/types/hero";
import type { ChatMessage } from "@/types/hero";

export function AIConcierge() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial AI greeting
    const initialMessage: ChatMessage = {
      id: "initial",
      content: "👋 Welcome, future Planet Hero! I'm here to help you transform your old iPhone into environmental superpowers. What iPhone model do you want to trade?",
      isUser: false,
      timestamp: new Date(),
      options: DEVICE_OPTIONS.slice(0, 4).map(d => d.model),
    };
    setMessages([initialMessage]);
  }, []);

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      content: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await openAIService.sendMessage(message, {
        phoneModels: DEVICE_OPTIONS.map(d => d.model),
        recentMessages: messages.slice(-3),
      });

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response.response || response.fallback || "I'm here to help with your iPhone trade-in!",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: "I'm temporarily unavailable, but I'll be back soon to help with your iPhone trade-in! 🤖",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickOption = (option: string) => {
    sendMessage(option);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputMessage);
    }
  };

  return (
    <section className="py-16 px-4 bg-slate-900/50" id="trade">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            <Bot className="inline w-8 h-8 text-dubai-blue-500 mr-3" />
            AI HERO CONCIERGE
          </h2>
          <p className="text-gray-300 text-lg">Get instant trade-in valuation and start your hero journey</p>
        </div>

        <div className="glass rounded-2xl border border-slate-600 overflow-hidden" data-testid="ai-concierge">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-dubai-blue-600 to-dubai-blue-500 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-dubai-blue-600" />
              </div>
              <div>
                <p className="text-white font-semibold">DeliWer AI Hero Concierge</p>
                <div className="flex items-center text-green-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Online & Ready to Help
                </div>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 h-96 overflow-y-auto space-y-4" data-testid="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'items-start space-x-3'}`}>
                {!message.isUser && (
                  <div className="w-8 h-8 bg-dubai-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                
                <div className={`rounded-lg p-3 max-w-md ${
                  message.isUser 
                    ? 'bg-dubai-blue-600 text-white ml-auto' 
                    : 'bg-slate-700 text-white'
                }`}>
                  <p>{message.content}</p>
                  
                  {message.options && !message.isUser && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {message.options.map((option, index) => (
                        <Button
                          key={index}
                          onClick={() => handleQuickOption(option)}
                          variant="secondary"
                          size="sm"
                          className="bg-dubai-blue-600 hover:bg-dubai-blue-700 text-white text-xs"
                          data-testid={`button-option-${index}`}
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-dubai-blue-500 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t border-slate-600 p-4">
            <div className="flex space-x-3">
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                className="flex-1 bg-slate-700 text-white border-slate-600 focus:border-dubai-blue-500"
                disabled={isLoading}
                data-testid="input-chat-message"
              />
              <Button
                onClick={() => sendMessage(inputMessage)}
                disabled={isLoading || !inputMessage.trim()}
                className="bg-dubai-blue-600 hover:bg-dubai-blue-700 text-white px-6"
                data-testid="button-send-message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">💡 Pro tip: Mention your phone's condition for more accurate valuation!</p>
            
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              <Button
                onClick={() => handleQuickOption("Book pickup for my iPhone")}
                variant="outline"
                size="sm"
                className="bg-hero-green-500 hover:bg-hero-green-600 text-white border-hero-green-500"
                data-testid="button-book-pickup"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Pickup
              </Button>
              <Button
                onClick={() => handleQuickOption("Order AquaCafe Starter Kit")}
                variant="outline"
                size="sm"
                className="bg-amber-500 hover:bg-amber-600 text-black border-amber-500"
                data-testid="button-order-aquacafe"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Order AquaCafe Kit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
