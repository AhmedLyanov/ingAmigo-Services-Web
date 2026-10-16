import { Outlet } from "react-router";

import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

function DefaultLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-(--primary-bg)">
      <Header />

      <main className="flex-1 px-6 py-8 sm:px-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default DefaultLayout;
