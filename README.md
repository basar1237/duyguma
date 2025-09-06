# Duyguma Blog

Modern web teknolojileri, tasarım ve programlama hakkında güncel yazılar ve öğreticiler sunan blog projesi.

## 🚀 Özellikler

- **Modern Teknoloji Stack**: Next.js 14, TypeScript, TailwindCSS
- **Responsive Tasarım**: Mobile-first yaklaşım
- **Dark/Light Mode**: Otomatik tema değiştirme
- **SEO Optimizasyonu**: Meta tags ve Open Graph
- **Performans**: Optimize edilmiş bundle boyutu
- **Erişilebilirlik**: WCAG standartlarına uygun
- **TypeScript**: Tam tip güvenliği
- **Modern UI**: Mantine UI ve Tabler Icons

## 🛠️ Teknolojiler

- **Framework**: Next.js 14 (App Router)
- **Dil**: TypeScript
- **Styling**: TailwindCSS
- **UI Library**: Mantine UI
- **Icons**: Tabler Icons
- **Form Management**: React Hook Form + Zod
- **Date Handling**: date-fns
- **Code Quality**: ESLint + Prettier

## 📦 Kurulum

1. **Projeyi klonlayın**
```bash
git clone https://github.com/your-username/duyguma-blog.git
cd duyguma-blog
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:3005
```

## 📁 Proje Yapısı

```
duyguma-blog/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Ana layout
│   │   └── page.tsx        # Ana sayfa
│   ├── components/         # React bileşenleri
│   │   ├── ui/            # Temel UI bileşenleri
│   │   └── layout/        # Layout bileşenleri
│   ├── data/              # JSON veri dosyaları
│   ├── lib/               # Utility kütüphaneleri
│   ├── styles/            # CSS dosyaları
│   ├── types/             # TypeScript tip tanımları
│   └── utils/             # Yardımcı fonksiyonlar
├── public/                # Statik dosyalar
├── docs/                  # Dokümantasyon
└── package.json
```

## 🎨 Tema Sistemi

Proje, dark/light mode destekli modern bir tema sistemi kullanır:

- **Light Mode**: Açık renkli, temiz tasarım
- **Dark Mode**: Koyu renkli, göz dostu
- **Otomatik Tema**: Sistem tercihine göre otomatik değişim
- **Local Storage**: Kullanıcı tercihi kaydedilir

## 📝 Blog Yazıları

Blog yazıları JSON formatında `src/data/posts.json` dosyasında saklanır:

```json
{
  "id": "1",
  "slug": "nextjs-ile-modern-web-uygulamalari",
  "title": "Next.js ile Modern Web Uygulamaları Geliştirme",
  "excerpt": "Next.js kullanarak performanslı ve SEO dostu web uygulamaları nasıl geliştirilir?",
  "content": "# Markdown içerik...",
  "author": "Lidya Teknoloji",
  "publishedAt": "2024-01-15T10:00:00Z",
  "category": "web-gelistirme",
  "tags": ["nextjs", "react", "typescript"],
  "featuredImage": "https://images.unsplash.com/...",
  "readingTime": 8,
  "views": 1250,
  "likes": 45
}
```

## 🏷️ Kategoriler

Kategoriler `src/data/categories.json` dosyasında tanımlanır:

```json
{
  "id": "1",
  "name": "Web Geliştirme",
  "slug": "web-gelistirme",
  "description": "Modern web teknolojileri ve geliştirme teknikleri",
  "color": "#ec4899",
  "icon": "IconCode",
  "postCount": 1,
  "isActive": true
}
```

## 🚀 Deployment

### Vercel (Önerilen)

1. **Vercel hesabı oluşturun**
2. **GitHub repository'nizi bağlayın**
3. **Otomatik deployment**

### Diğer Platformlar

```bash
# Build
npm run build

# Start production
npm start
```

## 📊 Performans

- **Lighthouse Score**: 95+
- **Bundle Size**: < 300KB
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s

## 🔧 Geliştirme

### Kod Kalitesi

```bash
# Linting
npm run lint

# Linting + Fix
npm run lint:fix

# Type checking
npm run type-check

# Formatting
npm run format
```

### Yeni Özellik Ekleme

1. **Feature branch oluşturun**
```bash
git checkout -b feature/yeni-ozellik
```

2. **Geliştirin ve test edin**
3. **Pull request oluşturun**

## 📚 Dokümantasyon

Detaylı dokümantasyon için `docs/` klasörünü inceleyin:

- [PRD Dokümanları](./docs/prd/)
- [RFC Dokümanları](./docs/rfc/)
- [API Dokümantasyonu](./docs/api/)

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

- **Website**: [duyguma.com](https://duyguma.com)
- **Email**: basary@lidyateknoloji.com
- **GitHub**: [@lidyateknoloji](https://github.com/lidyateknoloji)

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Mantine](https://mantine.dev/) - React components
- [Tabler Icons](https://tabler-icons.io/) - Icon library

---

**Lidya Teknoloji** tarafından ❤️ ile geliştirildi
