
import { Typography } from "@ingamigo/design";

export interface CareerProps {
  title?: string;
  description?: string;
}

export const Career = ({
  title = "Станьте специалистом IngAmigo",
  description = "IngAmigo — это не только заказ услуг. Если вы мастер, репетитор, курьер, юрист или специалист любой другой сферы — регистрируйтесь, получайте заказы рядом с домом и работайте в удобном для вас графике. Комиссия прозрачная, оплата защищена, заявки приходят от реальных клиентов.",
}: CareerProps) => {
  return (
    <section className="w-full border-b border-(--neutral-300) bg-(--surface-secondary) px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-12 md:flex-row md:gap-16">
        <div className="flex w-full flex-1 items-center justify-center">
          <img
            src="/src/shared/assets/images/career.png"
            alt="Рукопожатие и деловой портфель"
            className="h-auto w-full max-w-md object-contain"
          />
        </div>
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
      </div>
    </section>
  );
};
