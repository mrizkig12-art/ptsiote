import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary-600">
              SmartIoT Education
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solusi teknologi IoT terdepan untuk pendidikan dan industri.
              Produk berkualitas tinggi dengan dukungan profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a
                  href="#about"
                  className="hover:text-secondary-600 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-secondary-600 transition-colors"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-secondary-600 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-secondary-600 transition-colors"
                >
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-gray-300">
                <Phone size={16} />
                <span>+62 xxx xxxx xxxx</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail size={16} />
                <span>info@smartiot.id</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-300">
                <MapPin size={16} className="mt-1" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-secondary-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {currentYear} PT Smart IoT Education. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
