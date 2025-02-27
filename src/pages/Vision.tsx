
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
                Today's healthcare only treats problems <strong>after</strong> you get sick. This makes staying healthy expensive, stressful, and often too late.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                At HOMEOS, we believe <strong>good health is a right for everyone</strong>. You deserve tools that help you take control of your health before problems start.
              </p>
              <p className="text-lg text-muted-foreground mb-12">
                We want a future where checking your health is as easy as checking the weather. A world where health information is <strong>simple to understand and use</strong>, helping you make better choices to stay healthy and live longer.
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
                { time: "Now", content: "We're creating <strong>easy-to-use tools</strong> to measure and manage your body's stress levels, making it simpler to stay healthy." },
                { time: "5 Years", content: "HOMEOS will be known for helping people track and improve their health. Doctors and individuals will use our system to <strong>get better results</strong>." },
                { time: "10 Years", content: "Our technology will be used in hospitals and clinics everywhere, making <strong>personalized health tracking normal</strong> for everyone." },
                { time: "15 Years", content: "HOMEOS will set the standard for health management. <strong>Science-based health insights</strong> will be a normal part of everyday life." }
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
                  <div className="flex-grow" dangerouslySetInnerHTML={{ __html: item.content }}></div>
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
              <h2 className="text-3xl font-bold mb-6">Our Goal</h2>
              <p className="text-lg text-muted-foreground">
                To build the <strong>most helpful and easy-to-use system</strong> for managing body stress, turning complex health data into clear, useful information.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Why We Exist</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Because healthcare should be <strong>for everyone</strong> and should help you <strong>prevent problems</strong>, not just treat them.
              </p>
              <p className="text-lg text-muted-foreground">
                We're challenging the old way of thinking that only deals with sickness after it happens. We create tools that make health information easy to understand, so you and your doctor can take action <strong>before problems start</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Our Dream Future</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A world where <strong>staying healthy is normal</strong>, where people feel confident, not confused, about their health.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span><strong>No more guessing</strong> about your health.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span><strong>No more treating problems too late</strong>.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span>Just <strong>clear understanding and control</strong> over your health.</span>
                </li>
              </ul>
              <p className="text-lg font-medium">
                Join us in creating a better future for health—because <strong>understanding your body is the key to staying well</strong>.
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
