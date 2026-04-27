# PT Smart IoT Education - Website Profesional

Website company profile profesional untuk PT Smart IoT Education yang menampilkan produk trainer kit, layanan IoT, dan pelatihan berbasis Industri 4.0.

## 🚀 Fitur

- ✨ **Design Modern & Responsif** - Tampilan profesional yang optimal di semua perangkat (mobile, tablet, desktop)
- 🎨 **Tema Teknologi IoT** - Warna biru tua, hijau, putih, dan hitam dengan animasi futuristik
- ⚡ **Animasi Smooth** - Fade-in, hover effects, dan scroll animations untuk pengalaman pengguna yang engaging
- 📱 **Mobile-First** - Dioptimalkan untuk pengalaman tampilan di smartphone
- 🔧 **Komponen Reusable** - Struktur modular yang mudah dikustomisasi
- 🎯 **CTA Buttons** - Tombol call-to-action yang prominent untuk WhatsApp dan konsultasi
- 📊 **Portfolio & Testimonial** - Menampilkan portfolio proyek dan testimoni klien

## 📁 Struktur Proyek

```
PT SIOTE\WEBSITE/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigasi sticky dengan mobile menu
│   │   ├── Footer.jsx           # Footer profesional
│   │   ├── Card.jsx             # Komponen card reusable
│   │   ├── Button.jsx           # Komponen button dengan variants
│   │   └── SectionHeader.jsx    # Header untuk setiap section
│   ├── sections/
│   │   ├── Hero.jsx             # Section hero dengan animasi
│   │   ├── About.jsx            # Tentang perusahaan
│   │   ├── Products.jsx         # Produk & layanan
│   │   ├── Portfolio.jsx        # Portfolio proyek
│   │   ├── Testimonials.jsx     # Testimoni klien
│   │   └── Contact.jsx          # Form kontak & info kontak
│   ├── App.jsx                  # Component utama
│   ├── main.jsx                 # Entry point React
│   └── index.css                # Custom CSS + Tailwind
├── index.html                   # HTML utama
├── package.json                 # Dependencies
├── vite.config.js               # Konfigurasi Vite
├── tailwind.config.js           # Konfigurasi Tailwind CSS
├── postcss.config.js            # Konfigurasi PostCSS
└── README.md                    # File ini

```

## 🛠️ Tech Stack

- **React 18** - Untuk UI components
- **Vite** - Build tool modern dan cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library profesional
- **PostCSS** - CSS processing

## 📦 Instalasi

1. **Prerequisites**
   - Node.js v16+ dan npm terpasang

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Development Server**
   ```bash
   npm run dev
   ```
   Website akan berjalan di `http://localhost:5173`

4. **Build Production**
   ```bash
   npm run build
   ```
   Output akan berada di folder `dist/`

5. **Preview Build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Warna
Edit `tailwind.config.js` untuk mengubah warna utama:
```javascript
colors: {
  primary: {
    900: '#001a4d',    // Dark blue
    600: '#0066cc',
  },
  secondary: {
    600: '#10b981',    // Green
  },
}
```

### Konten
- **Hero Section**: Edit `src/sections/Hero.jsx`
- **Produk**: Update array di `src/sections/Products.jsx`
- **Portfolio**: Modifikasi array proyek di `src/sections/Portfolio.jsx`
- **Testimonial**: Tambah/ubah testimoni di `src/sections/Testimonials.jsx`
- **Kontak**: Update data kontak di `src/sections/Contact.jsx`

### WhatsApp Link
Ganti `62xxxxxxxxxxxx` dengan nomor WhatsApp bisnis Anda di:
- `src/components/Navbar.jsx`
- `src/sections/Hero.jsx`
- `src/sections/Products.jsx`
- `src/sections/Testimonials.jsx`
- `src/sections/Contact.jsx`

### Email & Informasi Kontak
Update di `src/components/Footer.jsx` dan `src/sections/Contact.jsx`

## ✨ Fitur Highlight

### 1. Animated Hero Section
- Background dengan animated grid dan floating elements
- Smooth fade-in animations untuk konten
- CTA buttons dengan glow effect

### 2. Responsive Navigation
- Sticky navbar yang berubah styling saat di-scroll
- Mobile menu yang elegant
- Smooth scroll ke berbagai section

### 3. Scroll Animations
- Fade-in scroll animations untuk cards
- Intersection Observer untuk performance optimization
- Hover effects dengan scaling dan shadow

### 4. Modern Components
- Reusable Card component dengan gradient borders
- Button variants (primary, secondary, outline)
- Responsive grid layouts

### 5. Contact Form
- Form validation dasar
- Submit feedback ke user
- Multiple contact channels (WhatsApp, Email, Phone)

## 🎯 SEO & Performance

- Semantic HTML structure
- Meta tags untuk social sharing
- Optimized images (placeholder di-replace dengan real images)
- Fast loading dengan Vite
- Mobile-first responsive design

## 📝 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload folder 'dist/' ke Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload folder 'dist/' via FTP ke web server
```

## 🐛 Troubleshooting

**Port 5173 sudah terpakai?**
```bash
npm run dev -- --port 3000
```

**Tailwind CSS tidak apply?**
```bash
npm run build
# Pastikan file CSS sudah ter-import di index.html
```

**Icons tidak muncul?**
```bash
npm install lucide-react@latest
```

## 📞 Support & Contact

Untuk pertanyaan atau customization lebih lanjut:
- WhatsApp: +62 xxx xxxx xxxx
- Email: info@smartiot.id
- Website: www.smartiot.id

## 📄 License

Proprietary - PT Smart IoT Education

---

**Last Updated**: April 2026
