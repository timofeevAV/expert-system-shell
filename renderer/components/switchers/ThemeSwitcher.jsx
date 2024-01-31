import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { IconButton, Tooltip } from '@radix-ui/themes';
import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton
        color="gray"
        radius="medium"
        className="fadeInOut"
        disabled={true}></IconButton>
    );
  }

  return (
    <Tooltip content="Сменить тему">
      <IconButton
        variant="ghost"
        color="gray">
        {theme === 'dark' ? (
          <MoonIcon
            onClick={() => setTheme('light')}
            width={18}
            height={18}
          />
        ) : (
          <SunIcon
            onClick={() => setTheme('dark')}
            width={18}
            height={18}
          />
        )}
      </IconButton>
    </Tooltip>
  );
};

export { ThemeSwitcher };
