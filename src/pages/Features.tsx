
import { motion } from "framer-motion";
import { ArrowLeft, HeartPulse, Brain, ChartLine, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: t("features.stressBiomarkers.title"),
      description: t("features.stressBiomarkers.description"),
      detailedDescription: t("features.stressBiomarkers.detailedDescription")
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: t("features.holisticAnalysis.title"),
      description: t("features.holisticAnalysis.description"),
      detailedDescription: t("features.holisticAnalysis.detailedDescription")
    },
    {
      icon: <ChartLine className="w-8 h-8" />,
      title: t("features.dataIntegration.title"),
      description: t("features.dataIntegration.description"),
      detailedDescription: t("features.dataIntegration.detailedDescription")
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("features.professionalFocus.title"),
      description: t("features.professionalFocus.description"),
      detailedDescription: t("features.professionalFocus.detailedDescription")
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-[#1E3A8A] hover:text-[#1E3A8A]/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("backToHome")}
          </Link>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-[#1E3A8A]"
        >
          {t("comprehensiveHealthMonitoring")}
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-[#1E3A8A]/10 rounded-full mb-4">
                  <div className="text-[#1E3A8A]">{feature.icon}</div>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-[#1E3A8A]">
                  {feature.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <p className="text-gray-700 text-sm">
                  {feature.detailedDescription}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
