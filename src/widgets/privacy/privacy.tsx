import { Typography } from "@ingamigo/design";

export const Privacy = () => {
  return (
    <section className="w-full border-b border-(--neutral-300) bg-white px-6 py-20 sm:px-8 md:py-28">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-12 md:flex-row md:gap-16">
        <header className="flex max-w-xl flex-1 flex-col items-start gap-4 text-left">
          <Typography
            variant="display3"
            weight="light"
            align="left"
          >
            Конфиденциальность и безопасность
          </Typography>

          <Typography
            variant="bodyLg"
            color="secondary"
            weight="light"
            align="left"
          >
            Номер телефона специалиста скрыт от заказчиков.
            Он становится доступен только тому заказчику,
            чей заказ специалист принял.
          </Typography>
        </header>

        <div className="flex w-full flex-1 flex-col justify-center gap-5 md:pl-4">
          <Typography
            variant="bodySm"
            color="secondary"
            weight="light"
          >
            Номер телефона специалиста
          </Typography>

          <Typography
            variant="display3"
            weight="light"
            align="left"
          >
            +7 ••• •••-••-••
          </Typography>

          <div className="flex items-center gap-2 border-t border-(--neutral-300) pt-4">
            <span className="size-2 shrink-0 rounded-full bg-green-500" />

            <Typography
              variant="bodySm"
              color="secondary"
              weight="light"
            >
              Скрыт до принятия заказа
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};