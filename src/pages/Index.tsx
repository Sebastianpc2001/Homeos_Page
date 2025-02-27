
import { useState } from "react";
import { motion } from "framer-motion";
import { ChartLine, Brain, HeartPulse, Users, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const features = [
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: t("features.stressBiomarkers.title"),
      description: t("features.stressBiomarkers.description"),
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: t("features.holisticAnalysis.title"),
      description: t("features.holisticAnalysis.description"),
    },
    {
      icon: <ChartLine className="w-6 h-6" />,
      title: t("features.dataIntegration.title"),
      description: t("features.dataIntegration.description"),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("features.professionalFocus.title"),
      description: t("features.professionalFocus.description"),
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    console.log("Submitting email:", email);

    try {
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      console.log("Supabase response:", { data, error });

      if (error) {
        if (error.code === '23505') {
          toast.info("You're already on our waitlist!");
        } else {
          console.error("Error submitting email:", error);
          toast.error("There was an error submitting your email. Please try again.");
        }
      } else {
        toast.success("Thanks for joining our waitlist!");
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("There was an error submitting your email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden pt-16">
      <Navigation />
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background z-0" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              {t("launchingSoon")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              {t("advancedStressAnalysis")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("description")}
            </p>
            <a 
              href="#waitlist" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
            >
              {t("getEarlyAccess")}
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("comprehensiveHealthMonitoring")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("platformDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link to="/features" key={feature.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-xl cursor-pointer hover:shadow-lg transition-all"
                  onMouseEnter={() => setIsHovered(feature.title)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    isHovered === feature.title ? "bg-primary text-white" : "bg-secondary text-primary"
                  } transition-colors duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="waitlist" className="py-20 px-4 bg-secondary scroll-mt-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("readyToTransform")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("joinEarlyAccess")}
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder={t("enterEmail")}
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("submitting") : t("getEarlyAccess")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
