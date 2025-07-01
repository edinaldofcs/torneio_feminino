"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { label: "Cadastro", href: "/cadastro" },
    { label: "Histórico", href: "/historico" },
    { label: "Sorteio", href: "/" },
  ];

  return (
    <header className="bg-pink-50 border-b-2 border-pink-400 text-black p-4 flex items-center justify-between font-sans z-8">
      {/* Imagem à esquerda com margem */}
      <div className="ml-4">
        <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
      </div>

      {/* Links centralizados */}
      <nav className="flex space-x-8 justify-center flex-1 text-pink-500">
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`hover:underline ${
              pathname === href ? "font-bold underline" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
