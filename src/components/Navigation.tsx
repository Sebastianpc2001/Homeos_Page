
import { BookOpen, Eye, LogIn, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-white/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link to="/" className="text-xl font-bold text-white">HOMEOS</Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-3 md:gap-6">
            <Link 
              to="/research" 
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all md:w-auto md:h-auto md:bg-transparent md:border-0 md:hover:bg-transparent"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden md:inline ml-2">Research</span>
            </Link>
            <a 
              href="#vision" 
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all md:w-auto md:h-auto md:bg-transparent md:border-0 md:hover:bg-transparent"
            >
              <Eye className="w-4 h-4" />
              <span className="hidden md:inline ml-2">Vision</span>
            </a>
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all md:w-auto md:h-auto md:bg-transparent md:border-0 md:hover:bg-transparent"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden md:inline ml-2">Log in</span>
            </button>
            <button 
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-white hover:bg-white/90 text-background transition-all md:w-auto md:h-auto md:px-4 md:py-2"
            >
              <ClipboardList className="w-4 h-4" />
              <span className="hidden md:inline ml-2">Waiting List</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
