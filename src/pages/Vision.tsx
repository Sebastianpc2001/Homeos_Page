
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Vision = () => {
  const { t } = useTranslation();
  
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
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">{t("visionPage.title")}</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-8" dangerouslySetInnerHTML={{ __html: t("visionPage.intro1") }}></p>
              <p className="text-lg text-muted-foreground mb-8" dangerouslySetInnerHTML={{ __html: t("visionPage.intro2") }}></p>
              <p className="text-lg text-muted-foreground mb-12" dangerouslySetInnerHTML={{ __html: t("visionPage.intro3") }}></p>
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
            <h2 className="text-3xl font-bold mb-8">{t("visionPage.timeline")}</h2>
            <div className="space-y-8">
              {[
                { time: t("visionPage.now"), content: t("visionPage.nowContent") },
                { time: t("visionPage.fiveYears"), content: t("visionPage.fiveYearsContent") },
                { time: t("visionPage.tenYears"), content: t("visionPage.tenYearsContent") },
                { time: t("visionPage.fifteenYears"), content: t("visionPage.fifteenYearsContent") }
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
              <h2 className="text-3xl font-bold mb-6">{t("visionPage.goal")}</h2>
              <p className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: t("visionPage.goalContent") }}></p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t("visionPage.why")}</h2>
              <p className="text-lg text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: t("visionPage.whyContent1") }}></p>
              <p className="text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: t("visionPage.whyContent2") }}></p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">{t("visionPage.dreamFuture")}</h2>
              <p className="text-lg text-muted-foreground mb-6" dangerouslySetInnerHTML={{ __html: t("visionPage.dreamFutureContent") }}></p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span dangerouslySetInnerHTML={{ __html: t("visionPage.benefit1") }}></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span dangerouslySetInnerHTML={{ __html: t("visionPage.benefit2") }}></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">🔹</span>
                  <span dangerouslySetInnerHTML={{ __html: t("visionPage.benefit3") }}></span>
                </li>
              </ul>
              <p className="text-lg font-medium" dangerouslySetInnerHTML={{ __html: t("visionPage.conclusion") }}></p>
            </div>

            <div className="text-center">
              <a
                href="/#waitlist"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              >
                {t("earlyAccess")}
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
