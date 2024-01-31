import { MainNavBar } from "../navbars/main";

const MainLayout = ({ children }) => {
  return (
    <>
      <MainNavBar/>
      <main className="absolute top-[65px] w-full">
        {children}
      </main>
    </>
  );
};

export { MainLayout };