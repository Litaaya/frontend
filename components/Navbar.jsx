import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-pastelwhite shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dẫn về Home */}
        <Link
          href="/"
          className="text-2xl font-playfair text-primary"
        >
          Vistyl
        </Link>

        {/* Menu desktop */}
        <ul className="flex space-x-8 text-secondary font-medium">
          <li>
            <Link
              href="/learn"
              className="hover:text-pastelaccent transition"
            >
              General Information
            </Link>
          </li>
          <li>
            <Link
              href="/fashion-analyze"
              className="hover:text-pastelaccent transition"
            >
              Fashion analyze
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-pastelaccent transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
