import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
        Ошибка 404
      </span>

      <h1 className="text-5xl font-bold tracking-tight">
        Страница не найдена
      </h1>

      <p className="max-w-md text-gray-600">
        Похоже, такой страницы не существует или её переместили.
      </p>

      <Link
        to="/"
        className="rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        На главную
      </Link>
    </section>
  );
}