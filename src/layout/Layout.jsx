import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-screen p-4">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
