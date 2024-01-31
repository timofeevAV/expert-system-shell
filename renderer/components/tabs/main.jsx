import { Flex, Button } from '@radix-ui/themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  {
    href: '/',
    name: 'Правила',
  },
  {
    href: '/variables',
    name: 'Переменные',
  },
  {
    href: '/domains',
    name: 'Домены',
  },
];

const MainTabs = () => {
  const router = useRouter();

  return (
    <Flex
      gap="3"
      wrap={'wrap'}
      align={'center'}>
      {links.map((link, idx) => (
        <Link
          href={link.href}
          key={idx}>
          <Button
            variant={router.pathname === link.href ? 'soft' : 'ghost'}
            radius="full"
            color="gray">
            {link.name}
          </Button>
        </Link>
      ))}
    </Flex>
  );
};

export {MainTabs};
