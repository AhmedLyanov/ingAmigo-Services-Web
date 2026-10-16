export interface NavItem {
  label: string;
  to: string;
  end?: boolean;
}

export const navigation: NavItem[] = [
  { label: "Руководство", to: "/", end: true },
  { label: "О сервисе", to: "/about" },
  { label: "Возможности", to: "/features" },
  { label: "Как это работает", to: "/how-it-works" },
  { label: "Частые вопросы", to: "/faq" },
];