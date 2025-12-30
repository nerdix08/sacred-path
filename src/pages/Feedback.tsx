import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  ArrowLeft, Mail, Phone, MessageCircle, AlertTriangle, 
  Heart, Send, CheckCircle, Info, BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Feedback = () => {
  const [reportType, setReportType] = useState<'mistake' | 'suggestion' | 'bug' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Report Submitted",
        description: "Thank you for your feedback. We will review it soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setReportType(null);
      setIsSubmitting(false);
    }, 1000);
  };

  const knownIssues = [
    {
      issue: "Some images may not accurately represent the exact scenes described",
      status: "improving",
      note: "We are continuously generating more accurate artwork"
    },
    {
      issue: "Multi-language translations may have minor inaccuracies",
      status: "reviewing",
      note: "Native speakers are reviewing all translations"
    },
    {
      issue: "Some chapters lack detailed scene-by-scene content",
      status: "in-progress",
      note: "We are adding detailed content for all 7 Kandas and 18 Parvas"
    },
    {
      issue: "Text-to-speech pronunciation for Sanskrit words",
      status: "known",
      note: "Browser TTS has limitations with Sanskrit pronunciation"
    }
  ];

  return (
    <AppLayout title="Feedback & Support" showStreak={false}>
      <div className="min-h-screen pb-20">
        {/* Header */}
        <div className="relative px-4 py-6 border-b border-border bg-gradient-to-br from-primary/10 via-gold/5 to-transparent">
          <Link to="/profile" className="inline-flex items-center gap-1 text-sm text-muted-foreground mb-3 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Profile
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-gold flex items-center justify-center shadow-lg">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Feedback & Support</h1>
              <p className="text-sm text-muted-foreground">Report issues, suggestions & contact us</p>
            </div>
          </div>
        </div>

        <div className="px-4 py-6 space-y-6">
          {/* Apologies Section */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground mb-2">Our Sincere Apologies 🙏</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We humbly apologize for any inaccuracies or mistakes you may find in our content. 
                  The sacred texts of Ramayana, Mahabharata, and Bhagavad Gita deserve the utmost 
                  accuracy and respect. We are continuously working to improve the content, translations, 
                  and imagery to better serve your spiritual journey.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  If you find any errors in the stories, verses, translations, or images, please report 
                  them using the form below. Your feedback helps us maintain the sanctity of these 
                  sacred scriptures.
                </p>
                <p className="text-sm font-medium text-amber-600 mt-3">
                  — Team Gita Saar 🙏
                </p>
              </div>
            </div>
          </div>

          {/* Known Issues */}
          <div className="p-4 rounded-xl bg-card border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              Known Issues We Are Working On
            </h3>
            <div className="space-y-3">
              {knownIssues.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-secondary/50">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{item.issue}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.note}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      item.status === 'improving' ? 'bg-green-500/20 text-green-600' :
                      item.status === 'reviewing' ? 'bg-blue-500/20 text-blue-600' :
                      item.status === 'in-progress' ? 'bg-amber-500/20 text-amber-600' :
                      'bg-gray-500/20 text-gray-600'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-gold/10 border border-primary/20">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              Contact Us Directly
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:thotakurayaswanth104@gmail.com" 
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-foreground">thotakurayaswanth104@gmail.com</p>
                </div>
              </a>
              <a 
                href="tel:+918019628820" 
                className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone / WhatsApp</p>
                  <p className="text-sm font-medium text-foreground">+91 8019628820</p>
                </div>
              </a>
            </div>
          </div>

          {/* Report Type Selection */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">What would you like to report?</h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setReportType('mistake')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  reportType === 'mistake' 
                    ? 'bg-red-500/10 border-red-500/30 text-red-600' 
                    : 'bg-card border-border hover:border-primary/30'
                }`}
              >
                <AlertTriangle className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-medium">Content Mistake</span>
              </button>
              <button
                onClick={() => setReportType('suggestion')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  reportType === 'suggestion' 
                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-600' 
                    : 'bg-card border-border hover:border-primary/30'
                }`}
              >
                <BookOpen className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-medium">Suggestion</span>
              </button>
              <button
                onClick={() => setReportType('bug')}
                className={`p-3 rounded-xl border text-center transition-all ${
                  reportType === 'bug' 
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-600' 
                    : 'bg-card border-border hover:border-primary/30'
                }`}
              >
                <MessageCircle className="w-5 h-5 mx-auto mb-1" />
                <span className="text-xs font-medium">App Bug</span>
              </button>
            </div>
          </div>

          {/* Report Form */}
          {reportType && (
            <form onSubmit={handleSubmit} className="p-4 rounded-xl bg-card border border-border space-y-4 animate-fade-in">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Send className="w-4 h-4 text-primary" />
                Submit Your {reportType === 'mistake' ? 'Mistake Report' : reportType === 'suggestion' ? 'Suggestion' : 'Bug Report'}
              </h3>
              
              <div className="space-y-3">
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  placeholder="Subject (e.g., Wrong verse in Chapter 2)"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
                <Textarea
                  placeholder={
                    reportType === 'mistake' 
                      ? "Please describe the mistake in detail. Include the chapter, verse, or story name where you found the error..."
                      : reportType === 'suggestion'
                      ? "Share your suggestion for improving the app..."
                      : "Describe the bug you encountered..."
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>Submitting...</>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Submit Report
                  </>
                )}
              </Button>
            </form>
          )}

          {/* Sources Section */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-gold/5 border border-primary/20">
            <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-primary" />
              Sources & References
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-card border border-border">
                <h4 className="text-xs font-semibold text-primary mb-1">Ramayana</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>• Valmiki Ramayana - Public Domain translations</li>
                  <li>• Sacred-Texts.com Hindu Section</li>
                  <li>• Wikimedia Commons (Public Domain Images)</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border">
                <h4 className="text-xs font-semibold text-primary mb-1">Mahabharata</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>• Kisari Mohan Ganguli Translation (Public Domain)</li>
                  <li>• Project Gutenberg</li>
                  <li>• Wikisource Mahabharata Collection</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border">
                <h4 className="text-xs font-semibold text-primary mb-1">Bhagavad Gita</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>• Bhagavad Gita As It Is - A.C. Bhaktivedanta Swami Prabhupada</li>
                  <li>• Gita Supersite (IIT Kanpur)</li>
                  <li>• Sanskrit documents collection</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-card border border-border">
                <h4 className="text-xs font-semibold text-primary mb-1">Images</h4>
                <ul className="text-[11px] text-muted-foreground space-y-1">
                  <li>• AI-Generated artistic interpretations</li>
                  <li>• Wikimedia Commons Public Domain artwork</li>
                  <li>• Raja Ravi Varma paintings (Public Domain)</li>
                </ul>
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground mt-3 italic">
              We strive to use only public domain or properly attributed content. If you find any attribution issues, please contact us.
            </p>
          </div>

          {/* Disclaimer */}
          <div className="p-4 rounded-xl bg-secondary/50 border border-border">
            <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              Our Commitment
            </h3>
            <ul className="text-xs text-muted-foreground space-y-1.5">
              <li>• We treat all sacred texts with utmost respect and reverence</li>
              <li>• All content is sourced from authentic scriptures and scholarly works</li>
              <li>• We continuously improve accuracy based on user feedback</li>
              <li>• Images are generated as artistic interpretations of the stories</li>
              <li>• Translations are reviewed by scholars in Sanskrit and regional languages</li>
            </ul>
          </div>

          {/* Version Info */}
          <div className="text-center pt-4">
            <p className="text-xs text-muted-foreground">Gita Saar App v1.0.0</p>
            <p className="text-[10px] text-muted-foreground/60 mt-1">
              Made with 🙏 for spiritual seekers worldwide
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Feedback;
