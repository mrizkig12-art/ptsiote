# Deployment Guide - PT Smart IoT Education Website

## 🚀 Panduan Deploy ke Production

Website telah siap untuk di-deploy. Pilih salah satu platform yang sesuai dengan kebutuhan Anda.

---

## 📋 Pre-Deployment Checklist

Sebelum deploy, pastikan:
- [ ] Semua data di-customize (kontak, produk, testimonial, dll)
- [ ] WhatsApp number sudah diganti dengan nomor real
- [ ] Email ada yang benar
- [ ] Build berhasil tanpa error: `npm run build`
- [ ] Test build locally: `npm run preview`
- [ ] Tidak ada console errors di browser
- [ ] Responsive terlihat baik di mobile

---

## 🌐 Opsi Deployment

### 1. **VERCEL** (Recommended - Fastest)

**Keuntungan:**
- Gratis untuk project statik
- Deploy otomatis dari GitHub
- Ultra-fast CDN global
- Custom domain gratis

**Setup:**
```bash
# 1. Push ke GitHub
git init
git add .
git commit -m "Initial commit"
git push -u origin main

# 2. Install Vercel CLI
npm install -g vercel

# 3. Deploy
vercel

# 4. Follow prompts, link dengan GitHub account
```

**Via Web:**
1. Buka https://vercel.com
2. Click "Add New" → "Project"
3. Import GitHub repository
4. Click "Deploy"
5. Selesai!

---

### 2. **NETLIFY** (Simple Alternative)

**Keuntungan:**
- Easy setup
- Gratis untuk projects kecil
- Form handling built-in
- Custom domain

**Setup:**
```bash
# 1. Build project
npm run build

# 2. Drag & drop folder 'dist/' ke Netlify
# Atau gunakan Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Via Web:**
1. Buka https://netlify.com
2. Click "Add new site" → "Deploy manually"
3. Drag & drop folder `dist/`
4. Custom domain di Site settings
5. Selesai!

---

### 3. **GITHUB PAGES** (Free but Limited)

**Setup:**
```bash
# 1. Update vite.config.js
// vite.config.js
export default {
  base: '/website/',  // jika repo bukan root
  // ... rest of config
}

# 2. Build
npm run build

# 3. Upload ke GitHub
git add dist/
git commit -m "Deploy to production"
git push
```

Akses di: `username.github.io/website`

---

### 4. **SHARED HOSTING / TRADITIONAL SERVER**

Jika menggunakan hosting tradisional (cPanel, Plesk, dll):

```bash
# 1. Build project
npm run build

# 2. Upload folder 'dist/' ke public_html via FTP
# Struktur:
# public_html/
#   ├── index.html
#   ├── assets/
#   └── (file-file lainnya dari dist/)

# 3. Konfigurasi redirect untuk SPA
# Buat .htaccess di public_html:
```

**.htaccess untuk Apache:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

### 5. **CLOUDFLARE PAGES**

**Setup:**
```bash
# Connect GitHub ke Cloudflare Pages
# Build command: npm run build
# Build output directory: dist
```

---

## 🔒 SSL/HTTPS

- Vercel & Netlify: Otomatis
- GitHub Pages: Otomatis
- Traditional Hosting: Tergantung provider (biasanya gratis dengan Let's Encrypt)

---

## 📊 Custom Domain

### Vercel
1. Project Settings → Domains
2. Add custom domain
3. Follow DNS instructions

### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Update DNS at registrar

### Hosting Tradisional
1. Update DNS records ke hosting provider
2. Tunggu propagasi (biasanya 24 jam)

---

## 🚨 Environment Variables

Jika ada sensitive data (API keys, etc), gunakan `.env`:

```bash
# .env file
VITE_API_URL=https://api.example.com
VITE_GOOGLE_ANALYTICS_ID=xxx
```

Akses di component:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📈 Post-Deploy Checklist

Setelah deploy:
- [ ] Verifikasi website berjalan di domain
- [ ] Test semua link dan button
- [ ] Test responsivitas di mobile
- [ ] Test WhatsApp button
- [ ] Test contact form
- [ ] Check console untuk errors
- [ ] Setup analytics (Google Analytics, Metabase)
- [ ] Setup email notifications dari contact form
- [ ] Test performance: https://pagespeed.web.dev

---

## 🔍 Analytics & Monitoring

### Google Analytics
```html
<!-- Add to index.html sebelum </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 💌 Form Submissions

Untuk email notifications dari contact form, gunakan salah satu:

### Option 1: Formspree (Recommended)
```javascript
// Update Contact.jsx
const handleSubmit = async (e) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  // Handle response
}
```

### Option 2: EmailJS
```bash
npm install @emailjs/browser
```

### Option 3: Netlify Forms
```html
<!-- Di contact form -->
<form name="contact" method="POST" netlify>
  <!-- form fields -->
</form>
```

---

## ⚡ Performance Tips

1. **Optimize Images**
   ```bash
   npm install sharp
   # Compress images sebelum upload
   ```

2. **Enable Compression**
   - Vercel & Netlify: Otomatis
   - Traditional: Enable gzip di server

3. **CDN**
   - Gunakan Cloudflare (free tier tersedia)

4. **Caching**
   - Set cache headers appropriately
   - Vercel & Netlify handle ini otomatis

---

## 🐛 Troubleshooting Deployment

### "Blank Page Setelah Deploy"
- Check console untuk errors
- Pastikan build sukses: `npm run build`
- Verify base URL di vite.config.js

### "Responsive Tidak Bekerja"
- Clear browser cache
- Open DevTools → check viewport settings
- Verify CSS loaded correctly

### "WhatsApp Button Tidak Berfungsi"
- Check nomor di `src/sections/Hero.jsx`
- Test format: `https://wa.me/62xxxxxxxxxx`

### "Contact Form Tidak Bekerja"
- Implement form backend (Formspree, etc)
- Check browser console untuk errors
- Test di localhost dulu

---

## 📞 Support

Jika ada masalah:
1. Check console browser (F12)
2. Run: `npm run build` di local
3. Check network tab untuk failed requests
4. Lihat deployment logs dari provider

---

**Status:** ✅ READY FOR PRODUCTION

**Last Updated:** April 27, 2026
