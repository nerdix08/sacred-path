import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Send, Sparkles, BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

const suggestedQuestions = [
  "What does the Gita say about handling fear?",
  "How to find inner peace according to Krishna?",
  "What is the meaning of karma yoga?",
  "How to overcome attachment?",
];

const AskVidya = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setIsAsking(true);
    // AI integration would happen here with Lovable Cloud
    setTimeout(() => setIsAsking(false), 2000);
  };

  return (
    <AppLayout title="Ask Vidya" showStreak={false}>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b border-border">
          <Button 
            variant="ghost" 
            size="sm" 
            className="-ml-2 text-muted-foreground"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 py-6 space-y-6">
          {/* Welcome */}
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Ask Vidya</h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
              Get explanations and guidance grounded in the Bhagavad Gita. 
              All answers reference specific verses.
            </p>
          </div>

          {/* Note */}
          <div className="p-4 rounded-xl bg-secondary/50 border border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">
                Vidya only answers from authentic scripture. Responses always cite chapter and verse numbers. 
                This is not a general chatbot.
              </p>
            </div>
          </div>

          {/* Suggested Questions */}
          <div className="space-y-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <p className="text-sm text-muted-foreground">Try asking:</p>
            <div className="space-y-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => setQuestion(q)}
                  className={cn(
                    "w-full text-left p-3 rounded-xl bg-card border border-border",
                    "hover:border-primary/30 transition-colors text-sm text-foreground"
                  )}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="sticky bottom-16 px-4 py-4 bg-background border-t border-border">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Ask a question about the Gita..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className={cn(
                "flex-1 h-12 px-4 rounded-xl",
                "bg-card border border-border",
                "text-foreground placeholder:text-muted-foreground",
                "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                "transition-all duration-200"
              )}
            />
            <Button 
              variant="saffron" 
              size="icon" 
              className="w-12 h-12"
              onClick={handleAsk}
              disabled={!question.trim() || isAsking}
            >
              <Send className={cn("w-5 h-5", isAsking && "animate-pulse")} />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-2">
            Connect Lovable Cloud to enable AI responses
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default AskVidya;
