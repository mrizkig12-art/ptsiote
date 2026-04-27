// Company Configuration - Edit file ini untuk customize data perusahaan
// Change this file to customize company information

export const companyConfig = {
  // Basic Info
  name: 'PT Smart IoT Education',
  shortName: 'SmartIoT',
  tagline: 'Solusi Smart IoT & Edukasi Teknologi Masa Depan',
  description: 'Trainer Kit, Sistem IoT, dan Pelatihan Berbasis Industri 4.0',

  // Contact Information
  contact: {
    phone: '+62 xxx xxxx xxxx',
    whatsapp: 'https://wa.me/62xxxxxxxxxxxx',
    email: 'info@smartiot.id',
    address: 'Jakarta Selatan, Indonesia',
  },

  // Social Media
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
    twitter: '#',
  },

  // Navigation Links
  navigation: [
    { label: 'Tentang', href: '#about' },
    { label: 'Produk', href: '#products' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Kontak', href: '#contact' },
  ],

  // Hero Section Stats
  stats: [
    { value: '500+', label: 'Klien Puas' },
    { value: '50+', label: 'Produk Aktif' },
    { value: '10+', label: 'Tahun Pengalaman' },
  ],

  // About Section
  about: {
    mission: 'Memberikan solusi teknologi IoT yang inovatif, terjangkau, dan mudah diakses untuk mendukung transformasi digital di sektor pendidikan dan industri.',
    vision: 'Menjadi pemimpin pasar dalam penyediaan solusi IoT dan pelatihan teknologi di Asia Tenggara.',
    technologies: ['IoT', 'PLC', 'SCADA', 'Arduino', 'ESP8266', 'Cloud'],
  },

  // Products/Services
  products: [
    {
      id: 1,
      title: 'Trainer Kit PLC',
      description: 'Perangkat latihan PLC profesional dengan antarmuka user-friendly, dilengkapi dengan sensor dan aktuator untuk pembelajaran praktis Industri 4.0.',
      icon: 'Cpu',
      button: 'Detail Produk',
    },
    {
      id: 2,
      title: 'Trainer IoT (ESP8266)',
      description: 'Kit pembelajaran IoT berbasis mikrokontroler ESP8266 dengan berbagai sensor. Cocok untuk pemula hingga tingkat lanjut.',
      icon: 'Wifi',
      button: 'Pelajari Lebih',
    },
    {
      id: 3,
      title: 'Jasa Instalasi IoT',
      description: 'Layanan instalasi sistem IoT komprehensif untuk industri manufaktur, pertanian, dan smart building dengan teknologi terkini.',
      icon: 'Settings',
      button: 'Konsultasi',
    },
    {
      id: 4,
      title: 'Sistem Monitoring',
      description: 'Platform monitoring real-time berbasis cloud untuk mengawasi seluruh sistem IoT Anda dari mana saja dengan dashboard interaktif.',
      icon: 'TrendingUp',
      button: 'Coba Demo',
    },
    {
      id: 5,
      title: 'Pelatihan Arduino',
      description: 'Program pelatihan intensif Arduino untuk pengembang pemula. Materi komprehensif dengan praktek langsung di laboratorium.',
      icon: 'BookOpen',
      button: 'Daftar Sekarang',
    },
    {
      id: 6,
      title: 'Training PLC & Automation',
      description: 'Pelatihan mendalam tentang programmable logic controller dan sistem otomasi industri sesuai standar nasional dan internasional.',
      icon: 'Zap',
      button: 'Info Jadwal',
    },
  ],

  // Portfolio Projects
  portfolio: [
    {
      id: 1,
      title: 'Smart Aquarium Monitoring System',
      client: 'PT Aquaculture Indonesia',
      location: 'Surabaya, Indonesia',
      description: 'Sistem monitoring suhu air, pH, dan oksigen terlarut secara real-time dengan kontrol otomatis untuk optimalisasi hasil panen.',
      image: '📊',
      tags: ['IoT', 'Monitoring', 'Aquaculture'],
      result: 'Peningkatan produktivitas 35%',
    },
    {
      id: 2,
      title: 'IoT Monitoring System - Smart Building',
      client: 'Gedung Perkantoran Modern',
      location: 'Jakarta Selatan',
      description: 'Solusi IoT komprehensif untuk monitoring energi, keamanan, dan kenyamanan di gedung 20 lantai dengan 500+ sensor.',
      image: '🏢',
      tags: ['Smart Building', 'Energy', 'Security'],
      result: 'Efisiensi energi 40%',
    },
    {
      id: 3,
      title: 'Trainer Kit untuk Sekolah Menengah Kejuruan',
      client: 'SMK Teknologi Terpadu',
      location: 'Bandung',
      description: 'Implementasi 50 unit trainer kit IoT dan PLC untuk program pembelajaran Teknik Otomasi Industri dengan sertifikasi BNSP.',
      image: '🎓',
      tags: ['Edukasi', 'Trainer', 'PLC'],
      result: '500+ siswa terlatih',
    },
  ],

  // Testimonials
  testimonials: [
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
  ],

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} PT Smart IoT Education. All rights reserved.`,
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
}

export default companyConfig
