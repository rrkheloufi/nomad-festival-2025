import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

interface MenuItem {
  name: string;
  path?: string;
  submenu?: {
    name: string;
    path: string;
  }[];
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { themeMode } = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomePage && !isScrolled && !isOpen;

  const menuItems: MenuItem[] = [
    { name: "Programme 2026", path: "/program" },
    {
      name: "Le Festival",
      submenu: [
        { name: "Billetterie", path: "/tickets" },
        { name: "FAQ", path: "/faq" },
        { name: "Covoiturage", path: "/covoiturage" },
      ],
    },
    {
      name: "Editions",
      submenu: [
        { name: "Nomad 2025", path: "/editions/2025" },
        { name: "Nomad 2024", path: "/editions/2024" },
        { name: "Nomad 2023", path: "/editions/2023" },
        { name: "Nomad 2022", path: "/edition-2022" },
      ],
    },
    { name: "Association", path: "/about" },
    { name: "Boutique", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (
    path?: string,
    submenu?: { name: string; path: string }[]
  ) => {
    if (path) return location.pathname === path;
    if (submenu) return submenu.some((item) => location.pathname === item.path);
    return false;
  };

  const isSubItemActive = (path: string) => location.pathname === path;

  const navBg = isTransparent
    ? "transparent"
    : "rgba(var(--color-background-rgb), 0.95)";
  const navBackdrop = isTransparent ? "none" : "blur(10px)";
  const navBorder = isTransparent
    ? "none"
    : "1px solid rgba(var(--color-primary-rgb), 0.15)";

  return (
    <nav
      className="fixed w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: navBg,
        backdropFilter: navBackdrop,
        borderBottom: navBorder,
        boxShadow: isTransparent
          ? "none"
          : "0 2px 16px rgba(0,0,0,0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-opacity hover:opacity-80">
            <motion.img
              src={
                themeMode === "dark"
                  ? "/logos/logo_navbar_dark.svg"
                  : "/logos/logo_navbar_light.svg"
              }
              alt="Nomad Festival"
              className="h-7"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center flex-grow">
            <div className="flex items-center space-x-1">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.path ? (
                    <Link
                      to={item.path}
                      className="nav-link rounded-md transition-all duration-200"
                      style={{
                        color: isActive(item.path)
                          ? "var(--color-primary)"
                          : isTransparent
                          ? "rgba(var(--color-light-rgb, 250, 230, 235), 0.95)"
                          : "var(--color-text)",
                        fontWeight: isActive(item.path) ? 700 : 600,
                        fontSize: "0.8rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <span className="uppercase">{item.name}</span>
                    </Link>
                  ) : (
                    <button
                      className="nav-link rounded-md transition-all duration-200 cursor-pointer bg-transparent border-none"
                      style={{
                        color: isActive(undefined, item.submenu)
                          ? "var(--color-primary)"
                          : isTransparent
                          ? "rgba(var(--color-light-rgb, 250, 230, 235), 0.95)"
                          : "var(--color-text)",
                        fontWeight: isActive(undefined, item.submenu) ? 700 : 600,
                        fontSize: "0.8rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      <span className="uppercase">{item.name}</span>
                      <span className="ml-1 text-xs opacity-60">▾</span>
                    </button>
                  )}
                  {item.submenu && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[160px] rounded-xl shadow-xl py-2 mt-1"
                      style={{
                        backgroundColor: "rgba(var(--color-background-rgb), 0.98)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(var(--color-primary-rgb), 0.2)",
                      }}
                    >
                      {item.submenu.map((subItem, idx) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm transition-all duration-150 hover:pl-5"
                          style={{
                            color: isSubItemActive(subItem.path)
                              ? "var(--color-primary)"
                              : "var(--color-text)",
                            fontWeight: isSubItemActive(subItem.path) ? 700 : 500,
                            borderTop:
                              idx > 0
                                ? "1px solid rgba(var(--color-primary-rgb), 0.1)"
                                : "none",
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="ml-auto mr-3">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              style={{ color: "var(--color-text)" }}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden"
          style={{
            backgroundColor: "rgba(var(--color-background-rgb), 0.98)",
            borderTop: "1px solid rgba(var(--color-primary-rgb), 0.15)",
          }}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-sm font-semibold uppercase tracking-wide transition-all duration-200"
                    style={{
                      color: isActive(item.path)
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div
                    className="block px-3 py-2 text-sm font-semibold uppercase tracking-wide"
                    style={{
                      color: isActive(undefined, item.submenu)
                        ? "var(--color-primary)"
                        : "var(--color-text)",
                      opacity: 0.7,
                    }}
                  >
                    {item.name}
                  </div>
                )}
                {item.submenu && (
                  <div
                    className="ml-4 border-l-2 pl-3 mb-1"
                    style={{ borderColor: "rgba(var(--color-primary-rgb), 0.3)" }}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-2 py-1.5 text-sm transition-all duration-150"
                        style={{
                          color: isSubItemActive(subItem.path)
                            ? "var(--color-primary)"
                            : "var(--color-text)",
                          fontWeight: isSubItemActive(subItem.path) ? 700 : 400,
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
