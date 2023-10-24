'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';
import { IconType } from 'react-icons/lib';

interface NavbarItemProps {
  href: string;
  label?: string;
  icon?: IconType;
}

const NavbarItem = ({ href, label, icon: Icon }: NavbarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = useMemo(
    () =>
      (pathname === '/' && href === '/') ||
      pathname === href ||
      pathname?.startsWith(`${href}/`),
    [href, pathname]
  );

  const onClick = useCallback(() => {
    router.push(href);
  }, [href, router]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'hover:text-orange-700 transition duration-500 ease-in-out',
        isActive && 'text-orange-700'
      )}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default NavbarItem;
