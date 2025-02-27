
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChartLine, Brain, HeartPulse, Users, ArrowRight, Lightbulb } from "lucide-react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

  // Network of dots configuration
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const heroSection = heroSectionRef.current;
    if (!heroSection) return;

    // Set canvas dimensions to match hero section
    const resizeCanvas = () => {
      const rect = heroSection.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle properties
    const particlesArray: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];
    const numberOfParticles = 80;
    const maxDistance = 150;

    // Create particles
    const createParticles = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update particles
      for (let i = 0; i < particlesArray.length; i++) {
        let p = particlesArray[i];
        
        // Move particles
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around screen edges
        if (p.x > canvas.width) p.x = 0;
        else if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        else if (p.y < 0) p.y = canvas.height;
        
        // Calculate distance to mouse
        const dx = p.x - mousePosition.x;
        const dy = p.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Adjust particle if near mouse
        if (distance < 80) {
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * 0.5;
          p.y += Math.sin(angle) * 0.5;
        }
        
        // Draw particles
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${p.opacity})`;
        ctx.fill();
      }
      
      // Connect particles with lines
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            // Make connections near mouse brighter
            const mouseDistanceI = Math.sqrt(
              Math.pow(particlesArray[i].x - mousePosition.x, 2) + 
              Math.pow(particlesArray[i].y - mousePosition.y, 2)
            );
            const mouseDistanceJ = Math.sqrt(
              Math.pow(particlesArray[j].x - mousePosition.x, 2) + 
              Math.pow(particlesArray[j].y - mousePosition.y, 2)
            );
            
            const mouseProximityEffect = 
              (mouseDistanceI < 100 || mouseDistanceJ < 100) ? 0.3 : 0;
            
            const opacity = (1 - distance / maxDistance) * 0.3 + mouseProximityEffect;
            
            ctx.strokeStyle = `rgba(14, 165, 233, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
      <section ref={heroSectionRef} className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Dynamic background */}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 z-0 bg-gradient-to-br from-secondary via-background to-background"
        />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              {t("launchingSoon")}
              <motion.div
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
                className="text-green-500 drop-shadow-[0_0_3px_rgba(34,197,94,0.7)]"
              >
                <Lightbulb className="w-4 h-4" />
              </motion.div>
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
                  className="glass-card p-6 rounded-xl cursor-pointer hover:shadow-lg transition-all h-full flex flex-col"
                  onMouseEnter={() => setIsHovered(feature.title)}
                  onMouseLeave={() => setIsHovered("")}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                      isHovered === feature.title ? "bg-primary text-white" : "bg-secondary text-primary"
                    } transition-colors duration-300`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground mt-auto">{feature.description}</p>
                  </div>
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
