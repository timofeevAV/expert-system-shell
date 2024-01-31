import { MainMenu } from "../menus";
import { MainTabs } from "../tabs";
import { ThemeSwitcher } from "../switchers/ThemeSwitcher";

const MainNavBar = () => {
  return (
    <header className="h-[65px] flex items-center px-[15px] justify-between">
      <MainMenu/>
      <nav>
        <MainTabs/>
      </nav>
      <ThemeSwitcher/>
    </header>
  );
};

export {MainNavBar};