const MainLayout = ({ children }) => {
  return (
    <>
      <main className="absolute top-[65px] w-full">
        {children}
      </main>
    </>
  );
};

export { MainLayout };