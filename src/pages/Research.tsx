
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Brain, Heart, ChartLine, Timer, Activity, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useTranslation } from "react-i18next";

const Research = () => {
  const { t } = useTranslation();
  
  const categories = [
    {
      title: "Cardiovascular Inflammation",
      icon: <Heart className="w-6 h-6 text-[#1E3A8A]" />,
      papers: [
        {
          title: "Cell free DNA as a diagnostic and prognostic marker for cardiovascular diseases",
          authors: "Johansson et al., 2019",
          journal: "Clinica Chimica Acta",
          abstract: "Comprehensive review of cell-free DNA as biomarkers in cardiovascular diseases...",
          link: "https://pubmed.ncbi.nlm.nih.gov/31978408/"
        }
      ]
    },
    {
      title: "Aging Research",
      icon: <Timer className="w-6 h-6" />,
      papers: [
        {
          title: "Cell‐free DNA as a biomarker of aging",
          authors: "Teo et al., 2019",
          journal: "Aging Cell",
          abstract: "Investigation into cell-free DNA as a potential biomarker for biological aging...",
          link: "https://doi.org/10.1111/acel.12890"
        }
      ]
    },
    {
      title: "Stress & Inflammation",
      icon: <Activity className="w-6 h-6" />,
      papers: [
        {
          title: "Circulating Cell-Free DNA Differentiates Severity of Inflammation",
          authors: "Heightman et al., 2016",
          journal: "Biological Research for Nursing",
          abstract: "Study on the relationship between cell-free DNA levels and inflammation severity...",
          link: "https://doi.org/10.1177/1099800416642571"
        },
        {
          title: "Cell-free DNA release following psychosocial and physical stress in women and men",
          authors: "Smith et al., 2023",
          journal: "Nature Scientific Reports",
          abstract: "Investigation of stress-induced changes in cell-free DNA levels across genders...",
          link: "https://doi.org/10.1038/s41398-025-03242-5"
        }
      ]
    },
    {
      title: "Cancer Research",
      icon: <ChartLine className="w-6 h-6" />,
      papers: [
        {
          title: "The origin of highly elevated cell-free DNA in healthy individuals and patients with pancreatic, colorectal, lung, or ovarian cancer",
          authors: "Bronkhorst et al., 2022",
          journal: "Cancer Discovery",
          abstract: "Analysis of cell-free DNA origins in cancer patients and healthy individuals...",
          link: "https://doi.org/10.1158/2159-8290.CD-21-1252"
        }
      ]
    },
    {
      title: "Neurodegenerative Disease",
      icon: <Brain className="w-6 h-6" />,
      papers: [
        {
          title: "Distinctive cell-free DNA methylation characterizes presymptomatic genetic frontotemporal dementia",
          authors: "Ferrari et al., 2023",
          journal: "Annals of Clinical and Translational Neurology",
          abstract: "Study of cell-free DNA methylation patterns in frontotemporal dementia...",
          link: "https://doi.org/10.1002/acn3.51997"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-16">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
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
          className="text-4xl font-bold mb-8 text-[#1E3A8A]"
        >
          Research Papers
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="p-2 bg-[#1E3A8A]/10 rounded-lg">
                  {category.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E3A8A] break-words hyphens-auto">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.papers.map((paper) => (
                  <motion.div
                    key={paper.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-white/5 rounded-lg shadow-sm border border-[#1E3A8A]/10"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#1E3A8A] mt-1 flex-shrink-0" />
                      <div>
                        <a 
                          href={paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block font-semibold mb-1 text-[#1E3A8A] hover:text-[#1E3A8A]/80 transition-colors"
                        >
                          {paper.title}
                        </a>
                        <p className="text-sm text-gray-600 mb-2">
                          {paper.authors} - {paper.journal}
                        </p>
                        <p className="text-sm text-gray-500">{paper.abstract}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/#waitlist"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            {t("earlyAccess")}
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Research;
