import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-gray-300 transition-colors">
            home
          </Link>
        </li>
        <li>
          <Link href="/fieldnotes" className="hover:text-gray-300 transition-colors">
            fieldnotes
          </Link>
        </li>
        {/* Other navigation items */}
      </ul>
    </nav>
  );
} 