import type { FooterColumn } from "./types";

export const DEFAULT_COLUMNS: FooterColumn[] = [
  {
    title: "Сервис",
    links: [
      { label: "О сервисе", to: "/about" },
      { label: "Возможности", to: "/features" },
      { label: "Как это работает", to: "/how-it-works" },
      { label: "Частые вопросы", to: "/faq" },
    ],
  },
  {
    title: "Специалистам",
    links: [
      { label: "Стать специалистом", to: "/become-a-specialist" },
      { label: "Условия работы", to: "/terms" },
      { label: "Выплаты", to: "/payouts" },
      { label: "Поддержка", to: "/support" },
    ],
  },
  {
    title: "Документы",
    links: [
      { label: "Пользовательское соглашение", to: "/terms-of-use" },
      { label: "Политика конфиденциальности", to: "/privacy" },
      { label: "Оферта", to: "/offer" },
    ],
  },
];

export const FOOTER_TAGLINE = "Современный способ решать бытовые и профессиональные задачи";
export const FOOTER_NOTE = "Сделано с заботой о специалистах и клиентах";