
import { motion } from "framer-motion";
import { ArrowLeft, HeartPulse, Brain, ChartLine, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Features = () => {
  const features = [
    {
      icon: <HeartPulse className="w-8 h-8" />,
      title: "Stress Biomarkers",
      description: "Revolutionary cell-free DNA measurement for accurate stress level assessment",
      link: "#"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Holistic Analysis",
      description: "Comprehensive evaluation of biochemical, physical, and psychological stress",
      link: "#"
    },
    {
      icon: <ChartLine className="w-8 h-8" />,
      title: "Data Integration",
      description: "Unified platform bringing all health metrics into one accessible dashboard",
      link: "#"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Focus",
      description: "Tailored solutions for medical professionals and HR departments",
      link: "#"
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
            Back to Home
          </Link>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-center text-[#1E3A8A]"
        >
          Comprehensive Health Monitoring
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
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#1E3A8A] rounded-lg hover:bg-[#1E3A8A]/90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
