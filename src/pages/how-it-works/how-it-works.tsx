import { Logo, Typography } from "@ingamigo/design";
import { Link } from "react-router";

const STEPS = [
  {
    number: "01",
    title: "Опишите задачу",
    text: "Расскажите, что нужно сделать: соберите заказ за пару минут, укажите детали, сроки и бюджет.",
  },
  {
    number: "02",
    title: "Получите отклики",
    text: "Специалисты рядом откликнутся на ваш заказ. Сравните предложения, рейтинги и отзывы.",
  },
  {
    number: "03",
    title: "Выберите исполнителя",
    text: "Договоритесь об условиях прямо в чате, уточните детали и подтвердите заказ.",
  },
  {
    number: "04",
    title: "Оцените результат",
    text: "Оплатите после выполнения, оставьте отзыв и помогите другим выбрать лучшего специалиста.",
  },
];

const FOR_CLIENTS = [
  "Быстрый поиск проверенных специалистов",
  "Прозрачные цены и отзывы",
  "Безопасная оплата после выполнения",
  "Поддержка на каждом этапе",
];

const FOR_SPECIALISTS = [
  "Свободный график и поток заказов",
  "Честные выплаты без задержек",
  "Понятные условия и правила",
  "Инструменты для роста и репутации",
];

const FAQ = [
  {
    q: "Сколько стоит размещение заказа?",
    a: "Размещение заказа для клиентов бесплатно. Вы платите только за выполненную работу.",
  },
  {
    q: "Как проверяются специалисты?",
    a: "Мы проверяем документы, портфолио и отзывы. Рейтинг формируется по реальным заказам.",
  },
  {
    q: "Что если что-то пойдёт не так?",
    a: "Служба поддержки помогает решить спорные ситуации и защищает обе стороны сделки.",
  },
  {
    q: "Как происходит оплата?",
    a: "Средства резервируются и переводятся исполнителю только после подтверждения выполнения.",
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
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 transition-opacity hover:opacity-80";

  const variants: Record<string, string> = {
    primary: "bg-(--accent-primary) text-white",
    secondary: "border border-(--border-default) text-(--text-primary)",
    inverse: "bg-white text-(--text-primary)",
  };

  return (
    <Link to={to} className={`${base} ${variants[variant]}`}>
      <Typography as="span" variant="bodySm" weight="medium">
        {children}
      </Typography>
    </Link>
  );
};

const HowItWorks = () => {
  return (
    <main className="flex flex-col">
      <section className="relative -mx-6 -mt-8 bg-(--neutral-300) px-6 py-16 sm:-mx-8 sm:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Logo size="large" color="inverse" />
          <Typography variant="display2" color="inverse" weight="light">
            Как работает сервис
          </Typography>
          <Typography
            variant="bodyLg"
            color="inverse"
            weight="light"
            className="max-w-2xl opacity-80"
          >
            Простой способ найти специалиста или получить заказы — от первого
            сообщения до готового результата.
          </Typography>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Typography variant="display3" weight="light">
            Четыре шага
          </Typography>
          <Typography variant="bodyLg" color="secondary" weight="light">
            От заявки до результата — быстро и без лишних действий
          </Typography>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col gap-4 rounded-2xl border border-(--border-default) p-6"
            >
              <span className="text-4xl font-light text-(--neutral-500)">
                {step.number}
              </span>
              <Typography variant="heading1" weight="semibold">
                {step.title}
              </Typography>
              <Typography variant="bodySm" color="secondary" weight="light">
                {step.text}
              </Typography>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-(--neutral-100) px-6 py-20 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-6">
            <Typography variant="display3" weight="light">
              Клиентам
            </Typography>
            <Typography variant="bodyLg" color="secondary" weight="light">
              Найдите исполнителя под свою задачу и бюджет — без долгих поисков.
            </Typography>
            <ul className="flex flex-col gap-3">
              {FOR_CLIENTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent-primary)" />
                  <Typography variant="bodySm" weight="light">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <ActionLink to="/create-order">Разместить заказ</ActionLink>
          </div>

          <div className="flex flex-col items-start gap-6">
            <Typography variant="display3" weight="light">
              Специалистам
            </Typography>
            <Typography variant="bodyLg" color="secondary" weight="light">
              Получайте заказы, растите в рейтинге и работайте на своих условиях.
            </Typography>
            <ul className="flex flex-col gap-3">
              {FOR_SPECIALISTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent-primary)" />
                  <Typography variant="bodyLg" weight="light">
                    {item}
                  </Typography>
                </li>
              ))}
            </ul>
            <ActionLink to="/become-a-specialist" variant="secondary">
              Стать специалистом
            </ActionLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-20 sm:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <Typography variant="display3" weight="light">
            Частые вопросы
          </Typography>
          <Typography variant="bodyLg" color="secondary" weight="light">
            Коротко о главном
          </Typography>
        </div>

        <div className="mt-12 flex flex-col divide-y divide-(--border-default) border-y border-(--border-default)">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <Typography variant="heading1" weight="medium">
                  {item.q}
                </Typography>
                <span className="text-2xl font-light transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <Typography
                variant="bodySm"
                color="secondary"
                weight="light"
                className="mt-3 max-w-3xl"
              >
                {item.a}
              </Typography>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-(--neutral-300) px-6 py-16 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Typography variant="display3" color="inverse" weight="light">
            Готовы начать?
          </Typography>
          <Typography
            variant="bodyLg"
            color="inverse"
            weight="light"
            className="opacity-80"
          >
            Разместите заказ или станьте специалистом — это займёт пару минут.
          </Typography>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ActionLink to="/create-order" variant="inverse">
              Разместить заказ
            </ActionLink>
            <ActionLink to="/become-a-specialist" variant="secondary">
              Стать специалистом
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;