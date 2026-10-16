import { NavLink } from "react-router";
import { Typography } from "@ingamigo/design";
import { navigation } from "../model/navigation";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      id="mobile-menu"
      aria-hidden={!isOpen}
      className={[
        "overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 md:hidden",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
      ].join(" ")}
    >
      <nav
        aria-label="Мобильная навигация"
        className="flex flex-col gap-1 px-5 py-3 sm:px-8"
      >
        {navigation.map(({ label, to, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onClose}
            className="rounded-md px-2 py-2.5 transition-opacity hover:opacity-70"
          >
            {({ isActive }) => (
              <Typography
                as="span"
                variant="body"
                color="inverse"
                weight={isActive ? "semibold" : "regular"}
              >
                {label}
              </Typography>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};