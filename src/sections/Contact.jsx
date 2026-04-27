import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage(
        'Terima kasih! Pesan Anda telah terkirim. Kami akan menghubungi Anda segera.'
      )
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
      setIsSubmitting(false)

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      content: '+62 xxx xxxx xxxx',
      link: 'tel:+62xxxxxxxxxxxx',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@smartiot.id',
      link: 'mailto:info@smartiot.id',
    },
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Jakarta Selatan, Indonesia',
      link: '#',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+62 xxx xxxx xxxx',
      link: 'https://wa.me/62xxxxxxxxxxxx',
    },
  ]

  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Hubungi Kami"
          subtitle="Ada pertanyaan atau ingin konsultasi? Kami siap membantu Anda"
        />

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll-fade-in group bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-primary-600 rounded-xl p-6 transition-all duration-300 hover:shadow-lg cursor-pointer block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-primary-600 transition-colors">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="scroll-fade-in bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+62 xxxx xxxx xxx"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Perusahaan / Institusi
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nama perusahaan/sekolah"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tuliskan pertanyaan atau kebutuhan Anda di sini..."
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-glow w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-primary-600/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </span>
                </button>

                {/* Success Message */}
                {submitMessage && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
                    {submitMessage}
                  </div>
                )}
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-4">
                  Respons cepat melalui:
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/62xxxxxxxxxxxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:info@smartiot.id"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    <Mail size={18} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="scroll-fade-in bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-2xl h-80 border border-primary-600/30 flex items-center justify-center overflow-hidden">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <p className="text-gray-600 font-semibold">
              Lokasi Kami di Jakarta, Indonesia
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Klik untuk membuka di Google Maps
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
