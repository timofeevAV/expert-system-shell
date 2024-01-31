import { MainMenu } from "../menus";
import { MainTabs } from "../tabs";

const MainNavBar = () => {
  return (
    <header className="h-[65px] flex items-center px-[15px] justify-between">
      <MainMenu/>
      <nav>
        <MainTabs/>
      </nav>
    </header>
  );
};

export {MainNavBar};