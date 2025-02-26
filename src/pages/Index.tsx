
import { useState } from "react";
import { motion } from "framer-motion";
import { ChartLine, Brain, HeartPulse, Users, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [isHovered, setIsHovered] = useState("");

  const features = [
    {
      icon: <HeartPulse className="w-6 h-6" />,
      title: "Stress Biomarkers",
      description: "Revolutionary cell-free DNA measurement for accurate stress level assessment",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Holistic Analysis",
      description: "Comprehensive evaluation of biochemical, physical, and psychological stress",
    },
    {
      icon: <ChartLine className="w-6 h-6" />,
      title: "Data Integration",
      description: "Unified platform bringing all health metrics into one accessible dashboard",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Focus",
      description: "Tailored solutions for medical professionals and HR departments",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden pt-16">
      <Navigation />
      
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
              Launching Soon
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Revolutionizing Health Monitoring Through Advanced Stress Analysis
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              HOMEOS measures and analyzes stress and inflammation using patented biomarker technology to help prevent health issues before they arise.
            </p>
            <button 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              onClick={() => console.log("Contact button clicked")}
            >
              Get Early Access
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Health Monitoring
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge biomarker analysis with holistic health assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-xl"
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Health Monitoring?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our waitlist to be among the first to access our revolutionary platform
            </p>
            <form className="max-w-md mx-auto px-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary w-full"
                />
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Join Waitlist
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
