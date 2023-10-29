'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { IconType } from 'react-icons/lib';

import { cn } from '@/lib/utils';

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
        'flex gap-2 hover:text-orange-700 transition duration-500 ease-in-out',
        isActive && 'text-orange-700'
      )}
    >
      {Icon && <Icon aria-label={label} size={24} />}
      {label}
    </button>
  );
};

export default NavbarItem;
