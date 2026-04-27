import {
  Cpu,
  Wifi,
  Settings,
  TrendingUp,
  BookOpen,
  Zap,
} from 'lucide-react'
import Card from '../components/Card'
import SectionHeader from '../components/SectionHeader'

export default function Products() {
  const products = [
    {
      icon: Cpu,
      title: 'Trainer Kit PLC',
      description:
        'Perangkat latihan PLC profesional dengan antarmuka user-friendly, dilengkapi dengan sensor dan aktuator untuk pembelajaran praktis Industri 4.0.',
      button: 'Detail Produk',
    },
    {
      icon: Wifi,
      title: 'Trainer IoT (ESP8266)',
      description:
        'Kit pembelajaran IoT berbasis mikrokontroler ESP8266 dengan berbagai sensor. Cocok untuk pemula hingga tingkat lanjut.',
      button: 'Pelajari Lebih',
    },
    {
      icon: Settings,
      title: 'Jasa Instalasi IoT',
      description:
        'Layanan instalasi sistem IoT komprehensif untuk industri manufaktur, pertanian, dan smart building dengan teknologi terkini.',
      button: 'Konsultasi',
    },
    {
      icon: TrendingUp,
      title: 'Sistem Monitoring',
      description:
        'Platform monitoring real-time berbasis cloud untuk mengawasi seluruh sistem IoT Anda dari mana saja dengan dashboard interaktif.',
      button: 'Coba Demo',
    },
    {
      icon: BookOpen,
      title: 'Pelatihan Arduino',
      description:
        'Program pelatihan intensif Arduino untuk pengembang pemula. Materi komprehensif dengan praktek langsung di laboratorium.',
      button: 'Daftar Sekarang',
    },
    {
      icon: Zap,
      title: 'Training PLC & Automation',
      description:
        'Pelatihan mendalam tentang programmable logic controller dan sistem otomasi industri sesuai standar nasional dan internasional.',
      button: 'Info Jadwal',
    },
  ]

  return (
    <section id="products" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Produk & Layanan"
          subtitle="Solusi IoT lengkap untuk mendukung transformasi digital Anda"
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card
                icon={product.icon}
                title={product.title}
                description={product.description}
                button={product.button}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-12 text-center text-white scroll-fade-in">
          <h3 className="text-3xl font-bold mb-4">
            Tidak Menemukan Produk yang Sesuai?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Kami siap menyediakan solusi custom sesuai kebutuhan spesifik Anda
          </p>
          <a
            href="https://wa.me/62xxxxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
          >
            Hubungi Tim Kami
          </a>
        </div>
      </div>
    </section>
  )
}
