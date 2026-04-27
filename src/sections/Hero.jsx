import { ChevronRight, MessageCircle } from 'lucide-react'
import Button from '../components/Button'

export default function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/62xxxxxxxxxxxx', '_blank')
  }

  const handleScroll = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-black to-black" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-accent-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float animation-delay-4" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-600/20 border border-primary-600/50 rounded-full px-4 py-2 w-fit animate-fade-in">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-primary-200 text-sm font-medium">
                Solusi Teknologi IoT Terdepan
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-fade-in animation-delay-1">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Solusi Smart <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">IoT</span> & Edukasi Teknologi
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Trainer Kit, Sistem IoT, dan Pelatihan Berbasis Industri 4.0
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 animate-fade-in animation-delay-2">
              PT Smart IoT Education menyediakan solusi teknologi IoT lengkap
              untuk sekolah, universitas, dan industri. Produk berkualitas dengan
              dukungan pelatihan profesional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in animation-delay-3">
              <Button
                size="lg"
                onClick={handleScroll}
                className="group"
              >
                Lihat Produk
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleWhatsApp}
                className="border-2 border-white text-white hover:bg-white/10"
              >
                <MessageCircle className="mr-2" />
                Konsultasi WhatsApp
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in animation-delay-4">
              {[
                { value: '500+', label: 'Klien Puas' },
                { value: '50+', label: 'Produk Aktif' },
                { value: '10+', label: 'Tahun Pengalaman' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-secondary-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative h-96 md:h-full animate-slide-in-right">
            {/* Tech Card */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/40 to-secondary-600/40 rounded-3xl backdrop-blur-md border border-white/10" />

            {/* Content Inside */}
            <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-6">
              {/* Floating Icons */}
              <div className="grid grid-cols-2 gap-6 w-full">
                {[
                  { label: 'IoT', icon: '🌐' },
                  { label: 'PLC', icon: '⚙️' },
                  { label: 'SCADA', icon: '📊' },
                  { label: 'Arduino', icon: '🔌' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:border-primary-400 transition-all hover:scale-105 hover:bg-white/20 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl mb-2">{item.icon}</div>
                    <p className="text-white font-semibold text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Text */}
              <p className="text-gray-300 text-center text-sm">
                Teknologi terdepan untuk generasi masa depan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
