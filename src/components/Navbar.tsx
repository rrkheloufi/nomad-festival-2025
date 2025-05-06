import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  const { themeMode } = useTheme();

  const menuItems: MenuItem[] = [
    {
      name: "Festival 2025",
      submenu: [
        { name: "Programmation", path: "/program" },
        { name: "Billetterie", path: "/tickets" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    { name: "Boutique", path: "/shop" },
    { name: "Association", path: "/about" },
    {
      name: "Éditions précédentes",
      submenu: [
        { name: "Nomad 2024", path: "/editions/2024" },
        { name: "Nomad 2023", path: "/editions/2023" },
        { name: "Nomad 2022", path: "/edition-2022" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed w-full z-50 transition-colors"
      style={{
        backgroundColor: "rgba(var(--color-background-rgb), 0.9)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Link to="/" className="transition-colors">
            <motion.img
              src={
                themeMode === "dark"
                  ? "/logos/logo_navbar_dark.svg"
                  : "/logos/logo_navbar_light.svg"
              }
              alt="Nomad Festival"
              className="h-7"
              style={{ color: "var(--color-text)" }}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center flex-grow">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.path ? (
                    <Link to={item.path} className="nav-link">
                      <strong className="uppercase">{item.name}</strong>
                    </Link>
                  ) : (
                    <div className="nav-link cursor-pointer">
                      <strong className="uppercase">{item.name}</strong>
                    </div>
                  )}
                  {item.submenu && (
                    <div
                      className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-48 rounded-md shadow-lg py-1 mt-2"
                      style={{
                        backgroundColor:
                          "rgba(var(--color-background-rgb), 0.9)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="nav-link block px-4 py-2 text-sm"
                        >
                          <strong className="uppercase">{subItem.name}</strong>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="ml-auto mr-4">
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.name}>
                {item.path ? (
                  <Link
                    to={item.path}
                    className="nav-link block px-3 py-2 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <div className="nav-link block px-3 py-2 text-base">
                    {item.name}
                  </div>
                )}
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="nav-link block px-3 py-2 text-sm"
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
