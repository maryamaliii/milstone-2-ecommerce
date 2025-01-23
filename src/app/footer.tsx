import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white font-serif p-6 sm:p-10">
      <div className="flex flex-wrap justify-between items-start">
        {/* Brand Name */}
        <div className="mb-6 sm:mb-0">
          <h1 className="text-4xl font-bold">Celestial Beauty</h1>
        </div>

        {/* Social Links */}
        <div className="mb-6 sm:mb-0">
          <h2 className="text-2xl mb-3 font-medium">Follow Us</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-gray-400 transition"
              >
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-2xl mb-3 font-medium">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-400 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Celestial Beauty. All rights reserved.
      </div>
    </footer>
  );
}
