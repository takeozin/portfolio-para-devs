"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site.config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10, 22, 40, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-navy-700)"
          : "1px solid transparent",
      }}
    >
      <nav
        className="container-custom flex items-center justify-between h-16 px-6"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="font-bold text-lg tracking-tight transition-colors hover:text-amber-400"
          style={{ color: "var(--color-slate-100)" }}
        >
          <span style={{ color: "var(--color-amber-500)" }}>
            {siteConfig.name.split(" ")[0]}
          </span>
          <span className="opacity-60">.</span>
        </a>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {siteConfig.nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-amber-400"
                style={{ color: "var(--color-slate-400)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={siteConfig.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105 hover:brightness-110"
          style={{
            backgroundColor: "var(--color-amber-500)",
            color: "var(--color-navy-900)",
          }}
        >
          LinkedIn
        </a>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors hover:text-amber-400"
          style={{ color: "var(--color-slate-300)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t px-6 py-4 flex flex-col gap-2"
          style={{
            backgroundColor: "var(--color-navy-900)",
            borderColor: "var(--color-navy-700)",
          }}
        >
          {siteConfig.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 px-3 rounded-lg text-sm font-medium transition-colors hover:text-amber-400"
              style={{ color: "var(--color-slate-300)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 py-2 px-3 rounded-lg text-sm font-semibold text-center hover:brightness-110 transition-all"
            style={{
              backgroundColor: "var(--color-amber-500)",
              color: "var(--color-navy-900)",
            }}
          >
            LinkedIn
          </a>
        </div>
      )}
    </header>
  );
}
