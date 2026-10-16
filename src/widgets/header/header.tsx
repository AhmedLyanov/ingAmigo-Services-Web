import { useState } from "react";
import { NavLink } from "react-router";
import { Typography } from "@ingamigo/design";
import { BurgerButton } from "./ui/burger-button";
import { MobileMenu } from "./ui/mobile-menu";
import { navigation } from "./model//navigation";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="border-b border-white/10 bg-(--neutral-300)">
      <div className="mx-auto flex h-14 w-full items-center justify-between px-5 sm:px-8 md:justify-center">
        <nav
          aria-label="Основная навигация"
          className="hidden items-center justify-center gap-8 md:flex"
        >
          {navigation.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className="shrink-0 transition-opacity hover:opacity-70"
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
        <BurgerButton isOpen={isMenuOpen} onClick={toggleMenu} />
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};