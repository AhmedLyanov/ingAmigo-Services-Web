import { Logo, Typography } from "@ingamigo/design";
import { Link } from "react-router";
import {
  DEFAULT_COLUMNS,
  FOOTER_NOTE,
  FOOTER_TAGLINE,
  type FooterProps,
} from "./model";

export const Footer = ({
  columns = DEFAULT_COLUMNS,
  copyright = `© ${new Date().getFullYear()} IngAmigo. Все права защищены.`,
}: FooterProps) => {
  return (
    <footer className="w-full bg-(--footer-bg) px-6 py-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col items-start gap-3">
            <Logo size="medium" />
            <Typography
              variant="bodySm"
              color="secondary"
              weight="light"
              align="left"
            >
              {FOOTER_TAGLINE}
            </Typography>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12">
            {columns.map((column) => (
              <div key={column.title} className="flex flex-col gap-3">
                <Typography variant="label" weight="semibold" align="left">
                  {column.title}
                </Typography>

                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="transition-opacity hover:opacity-70"
                      >
                        <Typography
                          as="span"
                          variant="bodySm"
                          color="secondary"
                          weight="regular"
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-(--border-default) pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Typography
            variant="caption"
            color="tertiary"
            weight="regular"
            align="left"
          >
            {copyright}
          </Typography>

          <Typography
            variant="caption"
            color="tertiary"
            weight="regular"
            align="left"
          >
            {FOOTER_NOTE}
          </Typography>
        </div>
      </div>
    </footer>
  );
};
