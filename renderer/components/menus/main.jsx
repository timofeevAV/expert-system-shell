import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { IconButton, DropdownMenu } from '@radix-ui/themes';

const MainMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton
          variant="surface"
          color="gray">
          <HamburgerMenuIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content color="gray">
        <DropdownMenu.Item>Открыть</DropdownMenu.Item>
        <DropdownMenu.Item>Сохранить</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { MainMenu };
