import React from 'react';
import { IconTool, IconStar, IconCheck, IconArrowRight } from '@tabler/icons-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: '1',
      title: 'Tam Protez',
      description: 'Tüm dişlerin eksik olduğu durumlar için tam protez çözümleri',
      features: [
        'Doğal görünüm',
        'Rahat kullanım',
        'Uzun ömürlü malzeme',
        'Kişiye özel tasarım',
        'Estetik gülümseme'
      ],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      color: '#ec4899'
    },
    {
      id: '2',
      title: 'Kısmi Protez',
      description: 'Bazı dişlerin eksik olduğu durumlar için kısmi protezler',
      features: [
        'Mevcut dişlerle uyumlu',
        'Çıkarılabilir tasarım',
        'Hafif ve rahat',
        'Kolay temizlik',
        'Doğal görünüm'
      ],
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&h=400&fit=crop',
      color: '#3b82f6'
    },
    {
      id: '3',
      title: 'İmplant Üstü Protez',
      description: 'İmplant destekli modern protez çözümleri',
      features: [
        'İmplant destekli',
        'Sabit protez',
        'Maksimum stabilite',
        'Doğal his',
        'Uzun ömürlü'
      ],
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop',
      color: '#10b981'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'İlk Görüşme',
      description: 'Hastanın ihtiyaçlarının belirlenmesi ve tedavi planının oluşturulması'
    },
    {
      step: '2',
      title: 'Ölçü Alma',
      description: 'Hastanın ağız yapısının detaylı ölçülerinin alınması'
    },
    {
      step: '3',
      title: 'Tasarım',
      description: 'Kişiye özel protez tasarımının yapılması'
    },
    {
      step: '4',
      title: 'Üretim',
      description: 'Modern teknoloji ile protezin üretilmesi'
    },
    {
      step: '5',
      title: 'Uygulama',
      description: 'Protezin hastaya uygulanması ve ayarlanması'
    },
    {
      step: '6',
      title: 'Takip',
      description: 'Hastanın protez kullanımının takip edilmesi'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diş Protezi <span className="gradient-text">Hizmetlerimiz</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Modern teknoloji ve uzmanlıkla sunduğumuz kapsamlı diş protezi çözümleri. 
              Her hastanın ihtiyacına uygun özel tasarım protezler.
            </p>
          </div>
        </section>

        {/* Hizmetler */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="h-full hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div 
                      className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: service.color }}
                    >
                      <IconTool className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <IconCheck className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/hizmetler/${service.id}`}>
                      <Button className="w-full">
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

        {/* Süreç */}
        <section className="py-16 px-4 ">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Tedavi Süreci</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Neden Biz */}
        <section className="py-16 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Neden Bizi Seçmelisiniz?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <IconStar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Uzman Kadro</h3>
                <p className="text-muted-foreground">Marmara Üniversitesi mezunu deneyimli uzmanlar</p>
              </div>
              <div className="text-center">
                <IconStar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Modern Teknoloji</h3>
                <p className="text-muted-foreground">En son teknolojik cihazlar ve yöntemler</p>
              </div>
              <div className="text-center">
                <IconStar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Kişiye Özel</h3>
                <p className="text-muted-foreground">Her hastaya özel tasarım ve çözüm</p>
              </div>
              <div className="text-center">
                <IconStar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Kaliteli Malzeme</h3>
                <p className="text-muted-foreground">Yüksek kaliteli ve uzun ömürlü malzemeler</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary ">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Diş Protezi Hizmetlerimiz</h2>
            <p className="t mb-8 max-w-2xl mx-auto">
              Kaliteli ve estetik diş protezi çözümleri için bizimle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim">
                <Button variant="secondary" size="lg">
                  İletişime Geç
                </Button>
              </Link>
              <Link href="/hakkimda">
                <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground">
                  Hakkımızda
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
