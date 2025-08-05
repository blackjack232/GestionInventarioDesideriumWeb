'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Desiderium</div>

        {/* Botón hamburguesa móvil */}
        <button
          onClick={toggleMenu}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menú escritorio */}
        <nav className="hidden lg:flex gap-6">
          <Link href="/" className="hover:text-blue-400">Inicio</Link>
          <Link href="/productos" className="hover:text-blue-400">Productos</Link>
          <Link href="/inventario" className="hover:text-blue-400">Inventario</Link>
          <Link href="/contacto" className="hover:text-blue-400">Contacto</Link>
        </nav>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <nav className="lg:hidden px-4 pb-4 flex flex-col gap-4 bg-slate-700 text-white">
          <Link href="/" className="hover:text-blue-300" onClick={toggleMenu}>Inicio</Link>
          <Link href="/productos" className="hover:text-blue-300" onClick={toggleMenu}>Productos</Link>
          <Link href="/inventario" className="hover:text-blue-300" onClick={toggleMenu}>Inventario</Link>
          <Link href="/contacto" className="hover:text-blue-300" onClick={toggleMenu}>Contacto</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
