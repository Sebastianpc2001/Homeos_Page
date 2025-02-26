
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";

const Vision = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Vision</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8">
                Conventional medical care is reactive—treating symptoms only after they appear, making health management costly, stressful, and often too late.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                At HOMEOS, we believe health is a non-negotiable right. Everyone deserves access to high-quality tools that enable proactive health management, helping people take control of their well-being before problems arise.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                We envision a future where understanding your health is as simple as checking the weather—where biological insights are accessible, clear, and actionable, empowering individuals to make informed choices that prevent disease and enhance longevity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8">Where We're Headed</h2>
            <div className="space-y-8">
              {[
                { time: "Now", content: "We are building reliable and accessible solutions to measure and manage biological stress, making preventive care easier and more precise." },
                { time: "5 Years", content: "HOMEOS will be a trusted name in preventive medicine, with early adopters—doctors and individuals—using our system to track and optimize health outcomes." },
                { time: "10 Years", content: "Our technology will be widely integrated into healthcare systems, transforming personalized health tracking into a standard practice." },
                { time: "15 Years", content: "HOMEOS will set the industry benchmark for proactive health management, making accessible, science-backed health insights a fundamental part of everyday life." }
              ].map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-24 font-bold text-primary">{item.time}</div>
                  <div className="flex-grow">{item.content}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto space-y-16"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Aspiration</h2>
              <p className="text-lg text-muted-foreground">
                To be the most insightful and accessible system for managing biological stress, turning complex health data into clear, actionable knowledge.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Because healthcare should not be a privilege—it should be a proactive, empowering experience.
              </p>
              <p className="text-lg text-muted-foreground">
                We challenge the outdated, one-size-fits-all approach that reacts to illness instead of preventing it. We create solutions that simplify health insights, so you and your doctor can take action before problems begin.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Ideal Future</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A world where proactive health management is the norm, where people feel empowered, not lost when it comes to their well-being.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span>No more guessing.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span>No more late interventions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span>Just clarity, confidence, and control over your health.</span>
                </li>
              </ul>
              <p className="text-lg font-medium">
                Join us in reshaping the future of health—because understanding is the key to well-being.
              </p>
            </div>

            <div className="text-center">
              <a
                href="#waitlist"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
