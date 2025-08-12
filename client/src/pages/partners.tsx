import { Handshake, Briefcase, Store, Phone, Mail, Users, TrendingUp, DollarSign, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface PartnerFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  location: string;
  experience: string;
}

export default function Partners() {
  const [isAffiliate, setIsAffiliate] = useState(true);
  const [formData, setFormData] = useState<PartnerFormData>({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    location: "",
    experience: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof PartnerFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours to discuss your partnership opportunity.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      businessType: "",
      location: "",
      experience: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4" data-testid="page-title">
            <Handshake className="inline w-8 h-8 text-amber-500 mr-3" />
            JOIN THE PLANET HERO ALLIANCE
          </h1>
          <p className="text-gray-300 text-lg">Become a certified partner and start earning immediately from AED 99 AquaCafe sales</p>
        </div>

        {/* Partnership Program Selection */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-2xl p-2 inline-flex">
            <button
              onClick={() => setIsAffiliate(true)}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                isAffiliate
                  ? "bg-amber-500 text-black"
                  : "text-gray-300 hover:text-white"
              }`}
              data-testid="button-affiliate-program"
            >
              <Briefcase className="inline w-5 h-5 mr-2" />
              Affiliate Program
            </button>
            <button
              onClick={() => setIsAffiliate(false)}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                !isAffiliate
                  ? "bg-hero-green-500 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
              data-testid="button-restaurant-program"
            >
              <Store className="inline w-5 h-5 mr-2" />
              Restaurant Partner
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Program Details */}
          <div className="glass rounded-2xl p-8 border border-slate-600" data-testid="program-details">
            {isAffiliate ? (
              <>
                {/* Affiliate Program */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-amber-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Affiliate Agent Program</h2>
                  <p className="text-gray-400">Build your own community network and earn commission on every trade-in</p>
                </div>

                <div className="space-y-4 mb-8" data-testid="affiliate-benefits">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Earn <strong className="text-amber-500">30%</strong> commission on every iPhone trade-in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Access to exclusive AquaCafe pricing & inventory</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Marketing support & training materials</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Build your own community network</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">AI marketing automation tools</span>
                  </div>
                </div>

                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-6" data-testid="affiliate-earnings">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Your potential monthly earnings:</div>
                    <div className="text-3xl font-bold text-amber-500 mb-2">AED 2,970+</div>
                    <div className="text-sm text-gray-400">Based on 10 sales/month at AED 99 each</div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Restaurant Partner Program */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-hero-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Store className="w-8 h-8 text-hero-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Restaurant Collection Partner</h2>
                  <p className="text-gray-400">Become a certified AquaCafe collection point and reward customers</p>
                </div>

                <div className="space-y-4 mb-8" data-testid="restaurant-benefits">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Become a certified AquaCafe collection point</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Offer loyalty points for every trade-in</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Increase foot traffic & customer engagement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Access to exclusive member offers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-hero-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-white">Co-branded marketing materials</span>
                  </div>
                </div>

                <div className="bg-hero-green-500/10 border border-hero-green-500/30 rounded-xl p-6 mb-6" data-testid="restaurant-benefits-stats">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Average partner benefits:</div>
                    <div className="text-3xl font-bold text-hero-green-500 mb-2">+40% Traffic</div>
                    <div className="text-sm text-gray-400">Increased customer visits & loyalty</div>
                  </div>
                </div>
              </>
            )}

            {/* Success Metrics */}
            <div className="grid grid-cols-3 gap-4 mb-8" data-testid="success-metrics">
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <Target className="w-6 h-6 text-dubai-blue-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">250+</div>
                <div className="text-xs text-gray-400">Active Partners</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <TrendingUp className="w-6 h-6 text-hero-green-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">95%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
              <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                <DollarSign className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">24hrs</div>
                <div className="text-xs text-gray-400">Avg Setup</div>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="glass rounded-2xl p-8 border border-slate-600" data-testid="application-form">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Apply to Become a {isAffiliate ? "Affiliate Agent" : "Restaurant Partner"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-dubai-blue-500 focus:outline-none"
                  placeholder="Enter your full name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-dubai-blue-500 focus:outline-none"
                  placeholder="Enter your email address"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-dubai-blue-500 focus:outline-none"
                  placeholder="+971 XX XXX XXXX"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  {isAffiliate ? "Business Type" : "Restaurant Type"} *
                </label>
                <select
                  required
                  value={formData.businessType}
                  onChange={(e) => handleInputChange('businessType', e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-dubai-blue-500 focus:outline-none"
                  data-testid="select-business-type"
                >
                  <option value="">Select type</option>
                  {isAffiliate ? (
                    <>
                      <option value="individual">Individual Entrepreneur</option>
                      <option value="small-business">Small Business Owner</option>
                      <option value="marketing-agency">Marketing Agency</option>
                      <option value="social-influencer">Social Media Influencer</option>
                      <option value="online-business">Online Business</option>
                    </>
                  ) : (
                    <>
                      <option value="casual-dining">Casual Dining</option>
                      <option value="quick-service">Quick Service Restaurant</option>
                      <option value="cafe">Café/Coffee Shop</option>
                      <option value="fine-dining">Fine Dining</option>
                      <option value="food-court">Food Court</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Location (Dubai Area) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-dubai-blue-500 focus:outline-none"
                  placeholder="e.g., Dubai Marina, Downtown, JLT"
                  data-testid="input-location"
                />
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Relevant Experience
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-dubai-blue-500 focus:outline-none h-24 resize-none"
                  placeholder={isAffiliate 
                    ? "Tell us about your sales/marketing experience..."
                    : "Tell us about your restaurant and customer base..."
                  }
                  data-testid="textarea-experience"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  isAffiliate
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black"
                    : "bg-gradient-to-r from-hero-green-500 to-hero-green-600 hover:from-hero-green-600 hover:to-hero-green-700 text-white"
                }`}
                data-testid="button-submit-application"
              >
                {isSubmitting ? (
                  "Submitting Application..."
                ) : (
                  <>
                    <Users className="mr-2 w-5 h-5" />
                    {isAffiliate ? "BECOME AN AGENT" : "PARTNER WITH US"}
                  </>
                )}
              </Button>
            </form>

            <div className="text-center mt-6 text-sm text-gray-400">
              <p>Applications are typically reviewed within 24-48 hours</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16" data-testid="contact-section">
          <h2 className="text-2xl font-bold text-white mb-6">Ready to start earning immediately?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+971523946311" 
              className="glass hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4 mr-2" />
              +971 52 394 6311
            </a>
            <a 
              href="mailto:partners@deliwer.com" 
              className="glass hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4 mr-2" />
              partners@deliwer.com
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 glass rounded-2xl p-8 border border-slate-600" data-testid="faq-section">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">How quickly can I start earning?</h4>
              <p className="text-gray-300 text-sm mb-4">Most partners start earning within 48 hours of approval. Our onboarding process is streamlined for immediate activation.</p>
              
              <h4 className="text-lg font-semibold text-white mb-2">What support do you provide?</h4>
              <p className="text-gray-300 text-sm mb-4">24/7 partner support, marketing materials, training resources, and dedicated account management.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Are there any upfront costs?</h4>
              <p className="text-gray-300 text-sm mb-4">No upfront fees! Our partnership programs are completely free to join with no hidden costs.</p>
              
              <h4 className="text-lg font-semibold text-white mb-2">How are commissions paid?</h4>
              <p className="text-gray-300 text-sm mb-4">Weekly payouts via bank transfer or digital wallet. Minimum payout threshold is AED 100.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
