
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import Features from "@/pages/Features";
import Research from "@/pages/Research";
import Vision from "@/pages/Vision";
import NotFound from "@/pages/NotFound";
import { Toaster } from "sonner";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import HomeosIcon from "@/components/HomeosIcon";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/research",
    element: <Research />,
  },
  {
    path: "/vision",
    element: <Vision />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <div className="fixed top-4 left-4 z-50">
        <HomeosIcon size={32} color="#0070f3" />
      </div>
      <LanguageSwitcher />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
