
import { Home } from "lucide-react";

export const HomeosIcon = ({ size = 24, color = "currentColor" }: { size?: number; color?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <Home size={size} color={color} />
    </div>
  );
};

export default HomeosIcon;
