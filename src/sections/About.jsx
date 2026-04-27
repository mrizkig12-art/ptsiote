import { CheckCircle2, Zap, Shield, Lightbulb } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function About() {
  const advantages = [
    {
      icon: CheckCircle2,
      title: 'Berbasis Industri 4.0',
      description:
        'Produk dan layanan kami mengikuti standar industri terkini dan tren teknologi global.',
    },
    {
      icon: Zap,
      title: 'Trainer Kit Custom',
      description:
        'Kami menyediakan solusi trainer yang dapat disesuaikan dengan kebutuhan spesifik Anda.',
    },
    {
      icon: Shield,
      title: 'Kualitas Terjamin',
      description:
        'Semua produk telah melalui pengujian ketat untuk memastikan performa maksimal.',
    },
    {
      icon: Lightbulb,
      title: 'Cocok untuk Pendidikan',
      description:
        'Dirancang khusus untuk SMK, kampus, dan lembaga pelatihan profesional.',
    },
  ]

  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Tentang PT Smart IoT Education"
          subtitle="Kami adalah provider solusi teknologi IoT terpercaya dengan pengalaman lebih dari 10 tahun"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image Placeholder */}
          <div className="scroll-fade-in">
            <div className="bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-2xl p-8 border border-primary-600/30 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-600">
                  Teknologi IoT Terdepan untuk Indonesia
                </p>
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="scroll-fade-in space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Misi Kami
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Memberikan solusi teknologi IoT yang inovatif, terjangkau, dan
                mudah diakses untuk mendukung transformasi digital di sektor
                pendidikan dan industri.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Kami berkomitmen untuk mencetak generasi muda yang memahami dan
                siap menghadapi tantangan Industri 4.0.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Visi Kami
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi pemimpin pasar dalam penyediaan solusi IoT dan pelatihan
                teknologi di Asia Tenggara.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-gray-900 mb-3">
                Fokus Teknologi:
              </h4>
              <div className="flex flex-wrap gap-2">
                {['IoT', 'PLC', 'SCADA', 'Arduino', 'ESP8266', 'Cloud'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={index}
                className="scroll-fade-in group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <Icon size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
