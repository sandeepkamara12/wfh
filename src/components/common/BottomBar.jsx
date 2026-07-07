import { Link, useLocation } from "react-router-dom";
import { LogOut, Settings } from "lucide-react";

const BottomBar = ({ links, handleLogout }) => {
  const { pathname } = useLocation();
   

  return (
    <div className="fixed bottom-0 left-0 w-full bg-navy border-t border-navy flex justify-around items-center py-4 z-50">
      {
      links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname.startsWith(link.path);

        return (
          <Link
            key={link.id}
            to={link.path}
            className={`flex flex-col items-center text-xs ${
              isActive ? "text-orange" : "text-white"
            }`}
          >
            <Icon className="size-5 shrink-0 mb-1" />
            {link.label}
          </Link>
        );
      })}

      {/* Logout */}
      {/* <button
        onClick={handleLogout}
        className="flex flex-col items-center text-xs text-white"
      >
        <Settings className="size-5 mb-1" />
        Settings
      </button> */}
    </div>
  );
};

export default BottomBar;