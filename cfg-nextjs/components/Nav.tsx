'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/results', label: 'Results' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="nav-logo">
        <span className="nav-logo-main">
          Change For <span>Good</span> Consulting
        </span>
        <span className="nav-logo-sub">Strategies that transform. Results that endure.</span>
      </div>
      <div className="nav-links">
        {links.map(({ href, label }) => {
          const isActive =
            href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`nav-btn${isActive ? ' active' : ''}`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
