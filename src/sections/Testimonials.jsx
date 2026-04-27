import { Star, Quote } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Kepala Program Studi Teknik Otomasi',
      company: 'SMK Teknologi Terpadu',
      image: '👨‍🏫',
      text: 'Produk trainer kit dari SmartIoT sangat membantu program pembelajaran kami. Siswa sangat antusias dan hasil ujian praktik meningkat signifikan. Kualitas produk juga sangat baik dan dukungan teknis responsif.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Dr. Siti Nurhaliza',
      role: 'Dosen Teknik Elektro',
      company: 'Universitas Teknologi Terkemuka',
      image: '👩‍🎓',
      text: 'Sistem IoT monitoring yang kami implementasikan untuk laboratorium kami sangat efisien. Dashboard-nya mudah digunakan dan data real-time membantu dalam pengajaran berbasis data. Sangat merekomendasikan layanan ini.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Ahmad Wijaya',
      role: 'Engineering Manager',
      company: 'Industri Manufaktur',
      image: '👨‍💼',
      text: 'Kami mempercayakan implementasi IoT monitoring untuk lini produksi kepada SmartIoT. Hasilnya luar biasa - efisiensi meningkat 40% dan downtime berkurang drastis. Tim mereka profesional dan responsif.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Testimoni Klien"
          subtitle="Apa kata mereka tentang produk dan layanan kami"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="scroll-fade-in group bg-white rounded-2xl border border-gray-200 hover:border-primary-600 shadow-md hover:shadow-xl p-8 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-primary-600/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    fill="#10b981"
                    className="w-5 h-5 text-green-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-200 pt-6">
                {/* Avatar & Info */}
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-primary-600 font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 rounded-2xl p-12 text-center text-white scroll-fade-in relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern
                  id="dots"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="2" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">
              Bergabunglah dengan Ratusan Klien Puas
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Dapatkan konsultasi gratis untuk mengetahui solusi IoT terbaik untuk
              bisnis Anda
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://wa.me/62xxxxxxxxxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:shadow-lg transition-all hover:scale-105"
              >
                Hubungi Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
