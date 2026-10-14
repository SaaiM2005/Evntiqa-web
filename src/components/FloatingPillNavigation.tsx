import React, { useState, startTransition, useEffect, useRef } from 'react';
import { motion, type Transition } from 'framer-motion';

export interface NavItem {
  label: string;
  href?: string;
  target?: '_self' | '_blank';
}

export interface FloatingPillNavigationProps {
  items: NavItem[];
  backgroundColor?: string;
  textColor?: string;
  activeBackgroundColor?: string;
  activeTextColor?: string;
  padding?: number | string;
  gap?: number | string;
  font?: React.CSSProperties;
  activeLink?: string;
  transition?: Transition;
  linkPadding?: string;
  className?: string;
  onItemClick?: (item: NavItem) => void;
}

/**
 * FloatingPillNavigation
 * Reusable animated pill navigation with spring motion layoutId indicator,
 * based on Framer's FloatingPillNavigation component specification.
 */
export const FloatingPillNavigation: React.FC<FloatingPillNavigationProps> = ({
  items,
  backgroundColor = '#EDE8DF',
  textColor = '#55534E',
  activeBackgroundColor = '#111111',
  activeTextColor = '#FFFFFF',
  padding = 5,
  gap = 2,
  font = {
    fontFamily: "'Inter', sans-serif",
    fontSize: '13px',
    fontWeight: 500,
    letterSpacing: '-0.01em',
  },
  activeLink = 'CISO Roundtables',
  transition = {
    type: 'spring',
    stiffness: 700,
    damping: 45,
    mass: 0.8,
  },
  linkPadding = '7px 14px',
  className = '',
  onItemClick,
}) => {
  const [internalActiveLink, setInternalActiveLink] = useState(activeLink);
  const navRef = useRef<HTMLElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const [navBorderRadius, setNavBorderRadius] = useState<number>(50);
  const [linkBorderRadius, setLinkBorderRadius] = useState<number>(25);

  // Sync internal state when activeLink prop changes
  useEffect(() => {
    startTransition(() => {
      setInternalActiveLink(activeLink);
    });
  }, [activeLink]);

  // Calculate pill border radii dynamically based on component heights
  useEffect(() => {
    const updateBorderRadii = () => {
      if (navRef.current) {
        const navHeight = navRef.current.offsetHeight;
        setNavBorderRadius(navHeight / 2);
      }
      if (linkRef.current) {
        const linkHeight = linkRef.current.offsetHeight;
        setLinkBorderRadius(linkHeight / 2);
      }
    };

    updateBorderRadii();

    const resizeObserver = new ResizeObserver(updateBorderRadii);
    if (navRef.current) resizeObserver.observe(navRef.current);
    if (linkRef.current) resizeObserver.observe(linkRef.current);

    return () => resizeObserver.disconnect();
  }, [linkPadding, font, items]);

  const handleClick = (item: NavItem) => {
    startTransition(() => {
      setInternalActiveLink(item.label);
    });

    if (onItemClick) {
      onItemClick(item);
    }

    const { href, target } = item;
    if (href && typeof window !== 'undefined') {
      let finalHref = href;
      if (!href.match(/^(https?:\/\/|mailto:|tel:|#|\/)/)) {
        finalHref = `https://${href}`;
      }

      if (target === '_blank') {
        window.open(finalHref, '_blank', 'noopener,noreferrer');
        return;
      }

      // Smooth scroll for internal hash anchors
      if (finalHref.startsWith('#')) {
        const targetElement = document.querySelector(finalHref);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          try {
            window.history.pushState(null, '', finalHref);
          } catch {
            // ignore state push if restricted
          }
        }
      } else {
        window.location.assign(finalHref);
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className={`inline-flex items-center select-none shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] border border-[#DDD7CB]/70 ${className}`}
      style={{
        backgroundColor,
        borderRadius: navBorderRadius,
        padding: typeof padding === 'number' ? `${padding}px` : padding,
        gap: typeof gap === 'number' ? `${gap}px` : gap,
        position: 'relative',
        width: 'max-content',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      aria-label="Primary Navigation"
    >
      {items.map((item, index) => {
        const isActive = item.label === internalActiveLink;
        return (
          <div
            key={item.label || index}
            ref={index === 0 ? linkRef : null}
            onClick={() => handleClick(item)}
            className="cursor-pointer transition-colors duration-200 whitespace-nowrap"
            style={{
              position: 'relative',
              padding: linkPadding,
              textDecoration: 'none',
              color: isActive ? activeTextColor : textColor,
              zIndex: 1,
              userSelect: 'none',
              WebkitUserSelect: 'none',
              ...font,
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick(item);
              }
            }}
            aria-current={isActive ? 'page' : undefined}
          >
            {isActive && (
              <motion.div
                layoutId="activeBackground"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: activeBackgroundColor,
                  borderRadius: linkBorderRadius,
                  zIndex: -1,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                }}
                transition={transition}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {item.label}
              {item.target === '_blank' && (
                <svg
                  className={`w-3 h-3 transition-opacity ${isActive ? 'text-white/80' : 'text-[#8E8A82]'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              )}
            </span>
          </div>
        );
      })}
    </nav>
  );
};

export default FloatingPillNavigation;
