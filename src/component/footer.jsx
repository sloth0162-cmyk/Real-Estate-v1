function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white px-4 sm:px-8 pt-10 pb-4 text-center">
      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 text-center sm:text-left">
        {/* About Section */}
        <div>
          <h4 className="mb-3 text-lg sm:text-xl font-semibold">About Real EaseLand</h4>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
            We are your trusted partner in land transactions, providing seamless
            buying and selling experiences with transparency and professionalism.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-lg sm:text-xl font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="text-white/80 hover:text-white transition">Home</a></li>
            <li><a href="#about" className="text-white/80 hover:text-white transition">About Us</a></li>
            <li><a href="#contact" className="text-white/80 hover:text-white transition">Contact</a></li>
            <li><a href="#sell" className="text-white/80 hover:text-white transition">Sell Land</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="mb-3 text-lg sm:text-xl font-semibold">Contact Info</h4>
          <ul className="space-y-1 text-sm">
            <li>📞 +91 98765 43210</li>
            <li>📧 info@realeaseland.com</li>
            <li>📍 Hyderabad, Telangana</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 pt-4 mt-6 text-xs text-white/80">
        <p>
          &copy; 2025 Real EaseLand. All rights reserved. | Designed with modern UX principles
        </p>
      </div>
    </footer>
  );
}
export default Footer;
