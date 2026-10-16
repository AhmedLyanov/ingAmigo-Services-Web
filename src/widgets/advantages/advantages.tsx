import { Typography } from "@ingamigo/design";
import { Link } from "react-router";

export interface AdvantagesProps {
  title?: string;
  description?: string;
}

export const Advantages = ({
  title = "Начало использования",
  description = "Наш IngAmigo | Услуги, это не просто продукт, это - современный способ решать любые бытовые и профессиональные задачи без лишних посредников. Укажите где вам требуется услуга, мы найдем самого ближайшего и лучшего специалиста под ваши нужды.",
}: AdvantagesProps) => {
  return (
    <section className="w-full border-b border-(--neutral-300) bg-(--primary-bg) px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-12 text-center">
        <header className="flex flex-col items-center gap-4">
          <Typography variant="display3" weight="light" align="center">
            {title}
          </Typography>

          <Typography
            variant="bodyLg"
            color="secondary"
            weight="medium"
            align="center"
          >
            {description}
          </Typography>

          <Link to="/how-it-works">
            <Typography
              variant="label"
              color="primary"
              weight="medium"
              className="mt-2 transition-opacity hover:opacity-70"
            >
              Узнать подробнее →
            </Typography>
         </Link>
        </header>
      </div>
    </section>
  );
};