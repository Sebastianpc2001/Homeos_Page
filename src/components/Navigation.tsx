
import { BookOpen, Eye, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();
  
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold text-primary">HOMEOS</Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-3 md:gap-6">
            <Link 
              to="/research" 
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:border-primary/20 bg-white/50 hover:bg-primary/5 text-gray-600 hover:text-primary transition-all md:w-auto md:h-auto md:bg-transparent md:border-0 md:hover:bg-transparent"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline ml-2">{t("research")}</span>
            </Link>
            <Link 
              to="/vision" 
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:border-primary/20 bg-white/50 hover:bg-primary/5 text-gray-600 hover:text-primary transition-all md:w-auto md:h-auto md:bg-transparent md:border-0 md:hover:bg-transparent"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden md:inline ml-2">{t("vision")}</span>
            </Link>
            <a 
              href="#waitlist" 
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary hover:bg-primary/90 text-white transition-all md:w-auto md:h-auto md:px-4 md:py-2"
            >
              <ClipboardList className="w-4 h-4" />
              <span className="hidden md:inline ml-2">{t("earlyAccess")}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
