"use client";
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<LinkProps & { className?: string }>;

export default function ActiveLink({ href, children, className, ...rest }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href || (typeof href === 'string' && pathname === href);
  return (
    <Link href={href} aria-current={isActive ? 'page' : undefined} className={className} {...rest}>
      {children}
    </Link>
  );
}




