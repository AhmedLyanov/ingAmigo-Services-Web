export interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      onClick={onClick}
      className="relative flex size-10 shrink-0 items-center justify-center rounded-md transition-opacity hover:opacity-70 md:hidden"
    >
      <span className="sr-only">Меню</span>

      <span
        className={[
          "absolute h-0.5 w-6 rounded-full bg-white transition-transform duration-300",
          isOpen ? "translate-y-0 rotate-45" : "-translate-y-2",
        ].join(" ")}
      />
      <span
        className={[
          "absolute h-0.5 w-6 rounded-full bg-white transition-opacity duration-200",
          isOpen ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "absolute h-0.5 w-6 rounded-full bg-white transition-transform duration-300",
          isOpen ? "translate-y-0 -rotate-45" : "translate-y-2",
        ].join(" ")}
      />
    </button>
  );
};