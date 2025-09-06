import React from 'react';
import Link from 'next/link';
import { IconArrowRight, IconTool, IconHeart, IconStar, IconPhone, IconMail, IconMapPin } from '@tabler/icons-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';
import Carousel from '@/components/ui/carousel';
import carouselData from '@/data/carousel.json';

export default function HomePage() {
  const services = [
    {
      id: '1',
      title: 'Tam Protez',
      description: 'Tüm dişlerin eksik olduğu durumlar için tam protez çözümleri',
      icon: IconTool,
      color: '#f0a0a0',
      price: '₺2,500',
      features: ['Doğal görünüm', 'Rahat kullanım', 'Uzun ömürlü']
    },
    {
      id: '2',
      title: 'Kısmi Protez',
      description: 'Bazı dişlerin eksik olduğu durumlar için kısmi protezler',
      icon: IconTool,
      color: '#0ea5e9',
      price: '₺1,800',
      features: ['Mevcut dişlerle uyumlu', 'Çıkarılabilir tasarım', 'Hafif ve rahat']
    },
    {
      id: '3',
      title: 'İmplant Üstü Protez',
      description: 'İmplant destekli modern protez çözümleri',
      icon: IconTool,
      color: '#10b981',
      price: '₺4,200',
      features: ['İmplant destekli', 'Sabit protez', 'Maksimum stabilite']
    }
  ];

  const popularPosts = [
    {
      id: '1',
      title: 'Diş Protezlerinde Modern Teknolojiler',
      description: 'Modern diş protez teknolojileri ve CAD/CAM sistemleri hakkında detaylı bilgi.',
      author: 'Şeval Duygu Barutçu',
      date: '15 Ocak 2024',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'TEKNOLOJİ',
      tags: ['CAD/CAM', 'Modern Teknoloji', 'Protez'],
      isPopular: true,
      slug: 'dis-protezlerinde-modern-teknolojiler'
    },
    {
      id: '2',
      title: 'Protez Bakımı ve Temizliği',
      description: 'Diş protezlerinizin uzun ömürlü olması için bakım ve temizlik önerileri.',
      author: 'Şeval Duygu Barutçu',
      date: '10 Ocak 2024',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      category: 'BAKIM',
      tags: ['Bakım', 'Temizlik', 'Ömür'],
      isPopular: false,
      slug: 'protez-bakimi-ve-temizligi'
    },
    {
      id: '3',
      title: 'Protez Malzemeleri ve Özellikleri',
      description: 'Farklı protez malzemelerinin özellikleri ve kullanım alanları.',
      author: 'Şeval Duygu Barutçu',
      date: '5 Ocak 2024',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'MALZEME',
      tags: ['Malzeme', 'Özellikler', 'Kalite'],
      isPopular: true,
      slug: 'protez-malzemeleri-ve-ozellikleri'
    }
  ];
  
  const testimonials = [
    {
      id: '1',
      name: 'Ayşe Yılmaz',
      text: 'Çok memnun kaldım, protezim çok rahat ve doğal görünüyor.',
      rating: 5
    },
    {
      id: '2',
      name: 'Mehmet Demir',
      text: 'Profesyonel hizmet ve kaliteli işçilik. Kesinlikle tavsiye ederim.',
      rating: 5
    },
    {
      id: '3',
      name: 'Fatma Kaya',
      text: 'Uzun yıllardır protez kullanıyorum, en iyi sonucu burada aldım.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Carousel */}
        <section>
          <Carousel slides={carouselData} />
        </section>

        {/* Ürün Tanıtım Kartları */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ürünlerimiz</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Modern teknoloji ve uzmanlıkla üretilen kaliteli diş protezi çözümleri
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="h-full hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div 
                      className="p-6 rounded-full"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon 
                        className="h-12 w-12"
                        style={{ color: service.color }}
                      />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                    </div>
                    
                    <ul className="space-y-2 grid grid-cols-3">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/hizmetler/${service.id}`}>
                      <Button className="w-full" variant="secondary">
                        Detaylı Bilgi
                        <IconArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* En Popüler İçerikler */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="container">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                ÖNE ÇIKAN YAZILAR
              </div>
              <h2 className="text-3xl font-bold mb-4">En Popüler İçerikler</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Diş protez teknolojisi alanındaki en çok okunan ve değerli yazılar
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {popularPosts.map((post) => (
                <Card
                  key={post.id}
                  className="h-full hover:shadow-lg transition-shadow overflow-hidden bg-white flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden p-4 pt-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-7 left-7">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    {post.isPopular && (
                      <div className="absolute top-7 right-7">
                        <span className="inline-block bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                          POPÜLER
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm">
                      {post.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <Button className="w-full bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 hover:text-blue-800">
                        Devamını Oku →
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Hakkımda Özet */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Uzman Diş Protez Teknikeri</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Merhaba, ben Şeval Duygu Barutçu. Marmara Üniversitesi Diş Protezi Bölümü'nden mezun oldum. 
                  2021 yılında doğdum ve 11 Kasım doğumluyum. Modern teknoloji ve geleneksel teknikleri 
                  birleştirerek kaliteli diş protezi çözümleri sunuyorum.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <IconStar className="h-5 w-5 text-yellow-500" />
                    <span>Marmara Üniversitesi Diş Protezi Bölümü Mezunu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IconStar className="h-5 w-5 text-yellow-500" />
                    <span>Modern Protez Teknolojileri Uzmanı</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <IconStar className="h-5 w-5 text-yellow-500" />
                    <span>Kişiye Özel Protez Tasarımları</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/hakkimda">
                    <Button size="lg">
                      Daha Fazla Bilgi
                      <IconArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                  alt="Diş Protezi Laboratuvarı"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Müşteri Yorumları */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Müşteri Yorumları</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hastalarımızın deneyimleri ve memnuniyetleri
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="h-full text-center"
                >
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <IconStar key={i} className="h-5 w-5 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section className="py-16 px-4 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">İletişim</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Diş protez hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-2">
                <IconPhone className="h-8 w-8" />
                <span>Telefon</span>
                <span className="text-sm">+90 555 123 45 67</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <IconMail className="h-8 w-8" />
                <span>E-posta</span>
                <span className="text-sm">info@duyguma.com</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <IconMapPin className="h-8 w-8" />
                <span>Adres</span>
                <span className="text-sm">İstanbul, Türkiye</span>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/iletisim">
                <Button variant="secondary" size="lg">
                  İletişime Geç
                  <IconArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
