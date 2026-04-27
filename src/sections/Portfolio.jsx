import { ExternalLink, MapPin } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Smart Aquarium Monitoring System',
      client: 'PT Aquaculture Indonesia',
      location: 'Surabaya, Indonesia',
      description:
        'Sistem monitoring suhu air, pH, dan oksigen terlarut secara real-time dengan kontrol otomatis untuk optimalisasi hasil panen.',
      image: '📊',
      tags: ['IoT', 'Monitoring', 'Aquaculture'],
      result: 'Peningkatan produktivitas 35%',
    },
    {
      id: 2,
      title: 'IoT Monitoring System - Smart Building',
      client: 'Gedung Perkantoran Modern',
      location: 'Jakarta Selatan',
      description:
        'Solusi IoT komprehensif untuk monitoring energi, keamanan, dan kenyamanan di gedung 20 lantai dengan 500+ sensor.',
      image: '🏢',
      tags: ['Smart Building', 'Energy', 'Security'],
      result: 'Efisiensi energi 40%',
    },
    {
      id: 3,
      title: 'Trainer Kit untuk Sekolah Menengah Kejuruan',
      client: 'SMK Teknologi Terpadu',
      location: 'Bandung',
      description:
        'Implementasi 50 unit trainer kit IoT dan PLC untuk program pembelajaran Teknik Otomasi Industri dengan sertifikasi BNSP.',
      image: '🎓',
      tags: ['Edukasi', 'Trainer', 'PLC'],
      result: '500+ siswa terlatih',
    },
  ]

  return (
    <section id="portfolio" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Portfolio Proyek"
          subtitle="Sejumlah proyek sukses yang telah kami selesaikan untuk klien di berbagai industri"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="scroll-fade-in group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:border-primary-600"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform overflow-hidden cursor-pointer">
                <span className="text-5xl">{project.image}</span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Client & Location */}
                <p className="text-sm font-semibold text-primary-600 mb-2">
                  {project.client}
                </p>
                <div className="flex items-center space-x-1 text-gray-500 text-xs mb-3">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Result */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-sm font-semibold text-green-700">
                    ✓ {project.result}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-primary-100 text-gray-900 hover:text-primary-600 rounded-lg font-semibold transition-all group/btn">
                  <span>Lihat Detail</span>
                  <ExternalLink
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects */}
        <div className="mt-12 text-center scroll-fade-in">
          <p className="text-gray-600 mb-6">
            Kami juga telah menyelesaikan 50+ proyek lainnya di berbagai industri
          </p>
          <a
            href="https://wa.me/62xxxxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary-600/50 hover:scale-105 transition-all"
          >
            Lihat Lebih Banyak Proyek
          </a>
        </div>
      </div>
    </section>
  )
}
