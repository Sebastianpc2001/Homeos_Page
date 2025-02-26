
import { motion } from "framer-motion";
import { ArrowLeft, FileText, Brain, Heart, Virus, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Research = () => {
  const categories = [
    {
      title: "Cardiovascular Inflammation",
      icon: <Heart className="w-6 h-6" />,
      papers: [
        {
          title: "Novel Biomarkers in Cardiovascular Disease",
          authors: "Johnson et al., 2023",
          journal: "Nature Cardiovascular Research",
          abstract: "Recent advances in biomarker discovery for early detection of cardiovascular inflammation..."
        },
        {
          title: "Inflammatory Pathways in Heart Disease",
          authors: "Smith et al., 2023",
          journal: "Circulation Research",
          abstract: "Understanding the role of inflammatory mediators in cardiovascular disease progression..."
        }
      ]
    },
    {
      title: "Aging Research",
      icon: <Timer className="w-6 h-6" />,
      papers: [
        {
          title: "Cellular Aging and Stress Response",
          authors: "Williams et al., 2023",
          journal: "Aging Cell",
          abstract: "Investigation of cellular stress responses in aging and their impact on longevity..."
        },
        {
          title: "Biomarkers of Biological Aging",
          authors: "Brown et al., 2023",
          journal: "Nature Aging",
          abstract: "Identification and validation of novel biomarkers for biological age assessment..."
        }
      ]
    },
    {
      title: "Cancer Research",
      icon: <Virus className="w-6 h-6" />,
      papers: [
        {
          title: "Early Cancer Detection Using cfDNA",
          authors: "Zhang et al., 2023",
          journal: "Cancer Discovery",
          abstract: "Development of sensitive methods for early cancer detection using cell-free DNA..."
        },
        {
          title: "Stress-Induced Cancer Progression",
          authors: "Miller et al., 2023",
          journal: "Cancer Research",
          abstract: "Understanding the relationship between chronic stress and cancer progression..."
        }
      ]
    },
    {
      title: "Neurodegenerative Disease",
      icon: <Brain className="w-6 h-6" />,
      papers: [
        {
          title: "Biomarkers in Neurodegeneration",
          authors: "Davis et al., 2023",
          journal: "Neurology",
          abstract: "Novel approaches to detecting early signs of neurodegeneration using blood-based biomarkers..."
        },
        {
          title: "Stress and Cognitive Decline",
          authors: "Anderson et al., 2023",
          journal: "Nature Neuroscience",
          abstract: "Investigating the impact of chronic stress on cognitive function and neurodegeneration..."
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
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
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
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.papers.map((paper) => (
                  <motion.div
                    key={paper.title}
                    whileHover={{ scale: 1.02 }}
                    className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{paper.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {paper.authors} - {paper.journal}
                        </p>
                        <p className="text-sm text-gray-600">{paper.abstract}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
