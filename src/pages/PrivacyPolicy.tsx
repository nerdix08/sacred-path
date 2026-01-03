import { AppLayout } from "@/components/layout/AppLayout";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Mail, Building2, User, Calendar } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <AppLayout title="Privacy Policy" showStreak={false}>
      <div className="px-4 py-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Privacy Policy for Sacred Path</h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Calendar className="w-4 h-4" />
            <span>Last Updated: January 4, 2026</span>
          </div>
        </div>

        <ScrollArea className="h-auto">
          <div className="prose prose-sm max-w-none text-foreground/90 space-y-6">
            {/* Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sacred Path ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Sacred Path (the "App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Information We Collect</h2>
              
              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Information You Provide to Us</h3>
              <p className="text-muted-foreground mb-2">
                <strong>Personal Data:</strong> We may collect personally identifiable information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Create an account (if applicable)</li>
                <li>Save your reading preferences</li>
                <li>Bookmark content</li>
                <li>Subscribe to notifications</li>
                <li>Contact us for support</li>
              </ul>
              
              <p className="text-muted-foreground mt-4 mb-2">This may include:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Name or username</li>
                <li>Email address</li>
                <li>Language preferences</li>
                <li>Reading history and bookmarks</li>
                <li>Device information</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-2">When you use the App, we may automatically collect certain information, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Device type and operating system version</li>
                <li>Unique device identifiers</li>
                <li>IP address</li>
                <li>App usage data and analytics</li>
                <li>Crash reports and performance data</li>
                <li>Language preference</li>
                <li>Time zone and locale settings</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-2">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Provide, maintain, and improve the App</li>
                <li>Personalize your experience with content recommendations</li>
                <li>Save your reading progress and preferences</li>
                <li>Send you daily shlokas and devotional content (if opted in)</li>
                <li>Provide customer support</li>
                <li>Monitor and analyze usage patterns</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Ensure the App's security and integrity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Storage and Security */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Data Storage and Security</h2>
              
              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Supabase Backend</h3>
              <p className="text-muted-foreground leading-relaxed">
                Sacred Path uses Supabase as our backend service provider. Your data is stored securely on Supabase servers with industry-standard encryption. For more information about Supabase's security practices, please visit: <a href="https://supabase.com/security" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://supabase.com/security</a>
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Data Security Measures</h3>
              <p className="text-muted-foreground mb-2">We implement appropriate technical and organizational security measures to protect your personal information, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure authentication protocols</li>
                <li>Regular security assessments</li>
                <li>Access controls and monitoring</li>
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Service Providers</h3>
              <p className="text-muted-foreground mb-2">We may share information with third-party service providers who perform services on our behalf, including:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>Supabase:</strong> For data storage and backend services</li>
                <li><strong>Analytics providers:</strong> For app usage analytics (if applicable)</li>
                <li><strong>Cloud hosting services:</strong> For app infrastructure</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Legal Requirements</h3>
              <p className="text-muted-foreground mb-2">We may disclose your information if required to do so by law or in response to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Court orders or legal processes</li>
                <li>Government or regulatory requests</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Enforcement of our terms and conditions</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Business Transfers</h3>
              <p className="text-muted-foreground leading-relaxed">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">You have the following rights regarding your personal information:</p>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Access and Correction</h3>
              <p className="text-muted-foreground">You can access and update your personal information within the App settings.</p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Data Deletion</h3>
              <p className="text-muted-foreground mb-2">You can request deletion of your account and personal data by:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Using the in-app account deletion feature (if available)</li>
                <li>Contacting us at thotakurayaswanth104@gmail.com</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Opt-Out of Communications</h3>
              <p className="text-muted-foreground mb-2">You can opt out of receiving notifications by:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Adjusting notification settings in the App</li>
                <li>Disabling notifications in your device settings</li>
              </ul>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Data Portability</h3>
              <p className="text-muted-foreground">You may request a copy of your personal data in a structured, commonly used format.</p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground mb-2 leading-relaxed">
                Sacred Path is designed for users of all ages, including children. We do not knowingly collect personal information from children under 13 without parental consent. The App contains:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Educational content about Hindu mythology and culture</li>
                <li>No advertisements</li>
                <li>No in-app purchases</li>
                <li>No sharing features that expose children to external users</li>
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                If you believe we have collected information from a child under 13 without proper consent, please contact us immediately, and we will delete such information.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Third-Party Services</h2>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Supabase</h3>
              <p className="text-muted-foreground">
                Our App uses Supabase for backend services and data storage. Supabase's privacy policy is available at: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://supabase.com/privacy</a>
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">YouTube Embedded Videos</h3>
              <p className="text-muted-foreground">
                The App may display embedded YouTube videos. When you watch these videos, YouTube's privacy policy applies: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a>
              </p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">Internet Connection</h3>
              <p className="text-muted-foreground mb-2">The App requires an internet connection to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Fetch updated content from our servers</li>
                <li>Stream videos</li>
                <li>Download new stories and scriptures</li>
                <li>Sync your reading progress across devices</li>
              </ul>
              <p className="text-muted-foreground mt-2">We do not track your browsing activity outside of the App.</p>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Data Retention</h2>
              <p className="text-muted-foreground mb-2">We retain your personal information for as long as necessary to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Provide you with the App's services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
                <li>Enforce our agreements</li>
              </ul>
              <p className="text-muted-foreground mt-2">You may request deletion of your data at any time by contacting us.</p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using the App, you consent to such transfers.
              </p>
            </section>

            {/* Offline Mode */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Offline Mode</h2>
              <p className="text-muted-foreground mb-2">Sacred Path offers offline reading functionality. When you download content for offline use:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Content is stored locally on your device</li>
                <li>No personal data is transmitted while offline</li>
                <li>Your reading progress is synced when you reconnect to the internet</li>
              </ul>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-2">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Posting the new Privacy Policy in the App</li>
                <li>Updating the "Last Updated" date</li>
                <li>Sending you a notification (if you've provided contact information)</li>
              </ul>
              <p className="text-muted-foreground mt-2">Your continued use of the App after changes are posted constitutes acceptance of those changes.</p>
            </section>

            {/* Content Sources */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Content Sources</h2>

              <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Third-Party Content</h3>
              <p className="text-muted-foreground mb-2">The App displays:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Educational videos from YouTube</li>
                <li>Public domain religious texts and scriptures</li>
                <li>User-generated content (if applicable)</li>
              </ul>
              <p className="text-muted-foreground mt-2">We are not responsible for the privacy practices of third-party content providers.</p>

              <h3 className="text-lg font-medium text-foreground mt-6 mb-2">User Contributions</h3>
              <p className="text-muted-foreground mb-2">If the App allows you to post notes, reviews, or comments:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>You are responsible for the content you post</li>
                <li>Posted content may be visible to other users</li>
                <li>We reserve the right to remove inappropriate content</li>
              </ul>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-2">Sacred Path may use cookies and similar tracking technologies to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Remember your preferences</li>
                <li>Analyze app performance</li>
                <li>Improve user experience</li>
              </ul>
              <p className="text-muted-foreground mt-2">You can control cookie preferences through your device settings.</p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
              
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-foreground">thotakurayaswanth104@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Vidya</span>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Yeshwanth</span>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                This Privacy Policy is governed by the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            {/* Consent */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Your Consent</h2>
              <p className="text-muted-foreground">
                By using Sacred Path, you consent to this Privacy Policy and agree to its terms.
              </p>
            </section>

            {/* Compliance */}
            <section>
              <h2 className="text-xl font-semibold text-foreground border-b border-border pb-2 mb-4">Compliance</h2>
              <p className="text-muted-foreground mb-2">This Privacy Policy complies with:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Google Play Store requirements</li>
                <li>Information Technology Act, 2000 (India)</li>
                <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                <li>General Data Protection Regulation (GDPR) - for EU users</li>
                <li>Children's Online Privacy Protection Act (COPPA) - for US users under 13</li>
              </ul>
            </section>

            {/* Footer Note */}
            <section className="mt-8 pt-6 border-t border-border">
              <div className="bg-primary/5 rounded-lg p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>For Google Play Store Submission:</strong> This privacy policy covers all data collection, usage, and sharing practices of the Sacred Path mobile application. We are committed to transparency and protecting user privacy.
                </p>
              </div>
            </section>
          </div>
        </ScrollArea>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;
