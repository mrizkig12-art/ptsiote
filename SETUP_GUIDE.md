# PT Smart IoT Education Website - Setup & Customization Guide

## ✅ Instalasi Selesai!

Proyek React + Tailwind CSS untuk PT Smart IoT Education telah berhasil dibuat dengan struktur yang rapi dan komponen reusable.

## 🚀 Memulai

### Development Server
```bash
npm run dev
```
Akses website di: **http://localhost:5173**

### Production Build
```bash
npm run build
```

---

## 📝 Checklist Customization

### 1️⃣ **Data Kontak & Informasi Perusahaan**
- [ ] Ganti nomor WhatsApp `62xxxxxxxxxxxx` dengan nomor bisnis Anda
  - Lokasi: `src/components/Navbar.jsx`
  - Lokasi: `src/sections/Hero.jsx`
  - Lokasi: `src/sections/Products.jsx`
  - Lokasi: `src/sections/Contact.jsx`

- [ ] Update email perusahaan dari `info@smartiot.id` ke email real
  - Lokasi: `src/components/Footer.jsx`
  - Lokasi: `src/sections/Contact.jsx`

- [ ] Ubah alamat perusahaan
  - Edit di: `src/components/Footer.jsx` dan `src/sections/Contact.jsx`

### 2️⃣ **Konten Halaman**
- [ ] **Hero Section** (`src/sections/Hero.jsx`)
  - Ubah judul utama jika diperlukan
  - Edit subjudul
  - Tambah/hapus statistics di bagian bawah

- [ ] **About Section** (`src/sections/About.jsx`)
  - Update deskripsi misi dan visi
  - Edit keunggulan perusahaan
  - Tambah/ubah teknologi focus

- [ ] **Products Section** (`src/sections/Products.jsx`)
  - Tambah/hapus produk sesuai kebutuhan
  - Edit nama, deskripsi, dan icon untuk setiap produk

- [ ] **Portfolio Section** (`src/sections/Portfolio.jsx`)
  - Update contoh project dengan data real
  - Ganti emoji dengan gambar real project

- [ ] **Testimonials Section** (`src/sections/Testimonials.jsx`)
  - Edit atau tambah testimonial klien
  - Update nama dan role klien

- [ ] **Contact Section** (`src/sections/Contact.jsx`)
  - Update informasi kontak lengkap
  - Customize form fields jika diperlukan

### 3️⃣ **Design & Branding**
- [ ] **Warna** (edit `tailwind.config.js`)
  - Primary color: Dark Blue (saat ini `#001a4d`)
  - Secondary color: Green (saat ini `#10b981`)
  - Sesuaikan dengan brand color Anda

- [ ] **Typography**
  - Pastikan font yang digunakan sesuai brand
  - Tailwind menggunakan default font stack

- [ ] **Logo**
  - Klik icon Zap di navbar untuk link ke homepage
  - Ganti text "SmartIoT" dengan nama perusahaan
  - Lokasi: `src/components/Navbar.jsx`

### 4️⃣ **Media & Assets**
- [ ] Ganti placeholder images dengan real images
  - About section image placeholder: `src/sections/About.jsx`
  - Portfolio project images: `src/sections/Portfolio.jsx`
  - Testimonial avatars: `src/sections/Testimonials.jsx`

- [ ] Tambah logo perusahaan (opsional)
- [ ] Update favicon di `index.html`

### 5️⃣ **Deployment**
- [ ] Build project: `npm run build`
- [ ] Test build: `npm run preview`
- [ ] Deploy ke platform pilihan (Vercel, Netlify, or Traditional Hosting)

---

## 📂 File Structure Penting

### Components (Reusable)
- `src/components/Navbar.jsx` - Navigation bar dengan mobile menu
- `src/components/Footer.jsx` - Footer dengan contact info
- `src/components/Card.jsx` - Card component untuk produk/portfolio
- `src/components/Button.jsx` - Button dengan berbagai variants
- `src/components/SectionHeader.jsx` - Header untuk setiap section

### Sections (Main Pages)
- `src/sections/Hero.jsx` - Landing section dengan CTA
- `src/sections/About.jsx` - Tentang perusahaan
- `src/sections/Products.jsx` - Produk & layanan
- `src/sections/Portfolio.jsx` - Portfolio project
- `src/sections/Testimonials.jsx` - Testimoni klien
- `src/sections/Contact.jsx` - Form kontak

### Styling
- `src/index.css` - Custom CSS + Tailwind imports
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration

---

## 🎨 Animations & Effects

Website sudah dilengkapi dengan modern animations:
- ✨ Fade-in animations saat page load
- 🎯 Hover card scaling dan shadow effects
- 📱 Smooth scroll behavior
- 🌊 Section fade-in saat di-scroll
- 💫 Button glow effects
- ⚡ Loading animations

---

## 🔍 Saran Improvement

1. **Tambah Analytics**
   - Google Analytics
   - Facebook Pixel

2. **SEO Optimization**
   - Add meta tags
   - Create sitemap.xml
   - Add robots.txt

3. **Email Integration**
   - Integrasi dengan email service (FormSubmit, Mailgun, etc)

4. **Live Chat**
   - Tambah Tawk.to atau Zendesk untuk live chat

5. **Blog Section**
   - Tambah blog untuk content marketing

6. **CMS Integration**
   - Pertimbangkan CMS untuk content management

---

## 📞 Support

Untuk masalah teknis atau pertanyaan:
- Baca dokumentasi: README.md
- Check console browser untuk error messages
- Verify semua dependencies terinstall: `npm ls`

---

## 🎯 Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Maintenance
npm install              # Install dependencies
npm audit                # Check for vulnerabilities
npm update               # Update packages
```

---

**Status:** ✅ SIAP UNTUK CUSTOMIZATION & DEPLOYMENT

**Last Updated:** April 27, 2026
