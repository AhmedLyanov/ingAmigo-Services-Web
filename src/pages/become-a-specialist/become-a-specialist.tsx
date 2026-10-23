import { Logo, Typography } from "@ingamigo/design";
import { Link } from "react-router";

const SPECIALIST_STEPS = [
  {
    number: "01",
    title: "Заполните профиль",
    text: "В боте выберите «Стать специалистом» и укажите имя, номер телефона и город, в котором готовы выполнять заказы.",
  },
  {
    number: "02",
    title: "Расскажите о своих услугах",
    text: "Выберите специализацию из списка или укажите свою. Добавьте описание услуг — не менее 20 символов — чтобы бот мог точнее сопоставлять вас с заявками.",
  },
  {
    number: "03",
    title: "Проверьте данные и подтвердите",
    text: "Перед завершением регистрации бот покажет введённые сведения. Проверьте их и подтвердите создание профиля.",
  },
];

const BecomeASpecialist = () => (
  <main className="flex flex-col">
    <section className="relative -mx-6 -mt-8 bg-(--neutral-300) px-6 py-16 sm:-mx-8 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
        <Logo size="large" color="inverse" />
        <Typography variant="display2" color="inverse" weight="light">
          Работа специалистом в IngAmigo | Услуги
        </Typography>
        <Typography
          variant="bodyLg"
          color="inverse"
          weight="light"
          className="max-w-2xl opacity-80"
        >
          Создайте профиль в Telegram-боте, чтобы получать предложения по
          услугам, специальности и городу.
        </Typography>
      </div>
    </section>

    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 md:py-20">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <Typography variant="display3" weight="light">
          Как начать
        </Typography>
        <Typography variant="bodyLg" color="secondary" weight="light">
          Регистрация проходит прямо в боте.
        </Typography>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {SPECIALIST_STEPS.map((step) => (
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
            Управляйте доступностью
          </Typography>
          <Typography variant="bodySm" color="secondary" weight="light">
            В главном меню можно переключать статус «Активен» и «Не активен».
            Подходящие заявки ищутся среди активных специалистов вашего города.
          </Typography>
        </div>
        <div className="flex flex-col items-start gap-3">
          <Typography variant="heading1" weight="semibold">
            Решайте, принимать ли заказ
          </Typography>
          <Typography variant="bodySm" color="secondary" weight="light">
            Когда клиент выберет вас, бот пришлёт город, адрес и описание
            задачи. Вы можете принять предложение или отказаться. При принятии
            клиент получит ваше имя и номер телефона и свяжется с вами напрямую.
          </Typography>
        </div>
      </div>
    </section>

    <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-4 px-6 py-16 text-center sm:px-8 md:py-20">
      <Typography variant="display3" weight="light">
        Хотите узнать путь заказчика?
      </Typography>
      <Typography variant="bodyLg" color="secondary" weight="light">
        Посмотрите, как создаётся заявка и выбирается специалист.
      </Typography>
      <Link
        to="/how-it-works"
        className="inline-flex items-center justify-center rounded-full border border-(--border-default) px-6 py-3 transition-opacity hover:opacity-80"
      >
        <Typography as="span" variant="bodySm" weight="medium">
          Как работает сервис
        </Typography>
      </Link>
    </section>
  </main>
);

export default BecomeASpecialist;
