import { Logo, Typography } from "@ingamigo/design";
import { Link } from "react-router";

const CLIENT_STEPS = [
  {
    number: "01",
    title: "Опишите задачу",
    text: "В Telegram-боте нажмите «Создать заявку», коротко расскажите, какая услуга нужна, выберите город и укажите адрес.",
  },
  {
    number: "02",
    title: "Посмотрите предложение",
    text: "Бот подберёт активного специалиста и покажет его имя, специальность, рейтинг и описание профиля. Если вариант не подходит, нажмите «Пропустить» — бот продолжит поиск.",
  },
  {
    number: "03",
    title: "Предложите заказ",
    text: "Нажмите «Предложить», чтобы отправить заказ выбранному специалисту. Он получит описание задачи, город и адрес и сможет принять или отклонить предложение.",
  },
];

const ActionLink = ({
  to,
  children,
  variant = "primary",
}: {
  to: string;
  children: string;
  variant?: "primary" | "secondary" | "inverse";
}) => {
  const variants = {
    primary: "bg-(--accent-primary) text-white",
    secondary: "border border-(--border-default) text-(--text-primary)",
    inverse: "bg-white text-(--text-primary)",
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 transition-opacity hover:opacity-80 ${variants[variant]}`}
    >
      <Typography as="span" variant="bodySm" weight="medium">
        {children}
      </Typography>
    </Link>
  );
};

const HowItWorks = () => (
  <main className="flex flex-col">
    <section className="relative -mx-6 -mt-8 bg-(--neutral-300) px-6 py-16 sm:-mx-8 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Logo size="large" color="inverse" />
        <Typography variant="display2" color="inverse" weight="light">
          Как пользоваться IngAmigo | Услуги
        </Typography>
        <Typography
          variant="bodyLg"
          color="inverse"
          weight="light"
          className="max-w-2xl opacity-80"
        >
          Создайте заявку в Telegram-боте, выберите подходящего специалиста и
          отправьте ему предложение.
        </Typography>
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 md:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <Typography variant="display3" weight="light">
          Для заказчика
        </Typography>
        <Typography variant="bodyLg" color="secondary" weight="light">
          От описания задачи до связи со специалистом — всё по шагам.
        </Typography>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {CLIENT_STEPS.map((step) => (
          <article
            key={step.number}
            className="flex flex-col gap-4 rounded-2xl border border-(--border-default) p-6"
          >
            <span className="text-3xl font-light text-(--neutral-500)">
              {step.number}
            </span>
            <Typography variant="heading1" weight="semibold">
              {step.title}
            </Typography>
            <Typography variant="bodySm" color="secondary" weight="light">
              {step.text}
            </Typography>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-(--neutral-100) px-6 py-16 sm:px-8 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex flex-col items-start gap-3">
          <Typography variant="heading1" weight="semibold">
            Если специалист принимает заказ
          </Typography>
          <Typography variant="bodySm" color="secondary" weight="light">
            Бот отправит вам имя и номер телефона специалиста. Свяжитесь с ним,
            чтобы договориться о выполнении работы и деталях напрямую.
          </Typography>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Typography variant="heading1" weight="semibold">
            Если специалист отказывается
          </Typography>
          <Typography variant="bodySm" color="secondary" weight="light">
            Вы получите уведомление и кнопку «Повторить поиск». Нажмите её —
            IngAmigo подберёт другого специалиста для той же заявки. Заполнять
            её заново не нужно.
          </Typography>
        </div>
      </div>
    </section>

    <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 py-16 text-center sm:px-8 md:py-20">
      <Typography variant="display3" weight="light">
        Ищете заказы как специалист?
      </Typography>
      <Typography variant="bodyLg" color="secondary" weight="light">
        Посмотрите, как создать профиль и получать подходящие предложения.
      </Typography>
      <ActionLink to="/become-a-specialist" variant="secondary">
        Как стать специалистом
      </ActionLink>
    </section>
  </main>
);

export default HowItWorks;
