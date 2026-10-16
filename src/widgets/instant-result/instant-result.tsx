
import { Typography } from "@ingamigo/design";
import { MatchingDiagram } from "@/shared/ui";

export interface InstantResultsProps {
  title?: string;
  description?: string;
}

export const InstantResults = ({
  title = "Мгновенный результат",
  description = "Больше не нужно часами ждать откликов, дозваниваться по объявлениям или бесконечно обновлять страницы сайтов. IngAmigo помогает подобрать подходящих специалистов под вашу задачу.",
}: InstantResultsProps) => {
  return (
    <section className="w-full border-b border-(--neutral-300) bg-white px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-12 md:flex-row md:gap-16">
        <header className="flex max-w-xl flex-1 flex-col items-start gap-4 text-left">
          <Typography variant="display3" weight="light" align="left">
            {title}
          </Typography>

          <Typography
            variant="bodyLg"
            color="secondary"
            weight="light"
            align="left"
          >
            {description}
          </Typography>
        </header>

        <div className="flex w-full flex-1 justify-center">
          <MatchingDiagram />
        </div>
      </div>
    </section>
  );
};
