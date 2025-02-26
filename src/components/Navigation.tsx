
import { BookOpen, Eye, LogIn, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
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
          <div className="flex items-center gap-6">
            <Link to="/research" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <BookOpen className="w-4 h-4" />
              <span>Research</span>
            </Link>
            <a href="#vision" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <Eye className="w-4 h-4" />
              <span>Vision</span>
            </a>
            <button className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
              <LogIn className="w-4 h-4" />
              <span>Log in</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors">
              <ClipboardList className="w-4 h-4" />
              <span>Waiting List</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
