import React from 'react';
import { IconStar, IconSchool, IconCalendar, IconMapPin, IconHeart } from '@tabler/icons-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Button from '@/components/ui/button';
import Link from 'next/link';

export default function AboutPage() {
  const skills = [
    'Tam Protez Yapımı',
    'Kısmi Protez Tasarımı',
    'İmplant Üstü Protezler',
    'Estetik Protezler',
    'CAD/CAM Teknolojisi',
    'Dijital Protez Tasarımı'
  ];

  const education = [
    {
      degree: 'Diş Protezi Teknikerliği',
      school: 'Marmara Üniversitesi',
      year: '2021-2024',
      description: 'Diş protezi yapımı ve tasarımı konusunda kapsamlı eğitim'
    }
  ];

  const experiences = [
    {
      title: 'Diş Protezi Teknikeri',
      company: 'Özel Diş Laboratuvarı',
      period: '2024 - Günümüz',
      description: 'Modern teknoloji ile kaliteli diş protezi üretimi'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Şeval Duygu <span className="text-primary font-bold">Barutçu</span>
                </h1>
                <p className="text-xl">
                  Marmara Üniversitesi Diş Protezi Bölümü mezunu, modern teknoloji ve 
                  geleneksel teknikleri birleştirerek kaliteli diş protezi çözümleri sunan 
                  uzman diş protez teknikeri.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/iletisim">
                    <Button size="lg">
                      İletişime Geç
                    </Button>
                  </Link>
                  <Link href="/hizmetler">
                    <Button variant="outline" size="lg">
                      Hizmetlerimiz
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
                  alt="Şeval Duygu Barutçu"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kişisel Bilgiler */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <IconCalendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Doğum Tarihi</h3>
                <p className="text-muted-foreground">11 Kasım 2021</p>
              </div>
              <div className="text-center">
                <IconMapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Konum</h3>
                <p className="text-muted-foreground">İstanbul, Türkiye</p>
              </div>
              <div className="text-center">
                <IconHeart className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Uzmanlık</h3>
                <p className="text-muted-foreground">Diş Protezi Teknikeri</p>
              </div>
            </div>
          </div>
        </section>

        {/* Eğitim */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Eğitim</h2>
            <div className="max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-background rounded-lg shadow-sm">
                  <div className="flex-shrink-0">
                    <IconSchool className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-lg text-muted-foreground mb-2">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Deneyim */}
        <section className="py-16 px-4">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Deneyim</h2>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-muted/30 rounded-lg mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <IconStar className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-lg text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Yetenekler */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Uzmanlık Alanları</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <div key={index} className="bg-background p-6 rounded-lg shadow-sm text-center">
                  <IconStar className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold">{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Misyon ve Vizyon */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Misyonum</h3>
                <p className="text-muted-foreground">
                  Modern teknoloji ve geleneksel teknikleri birleştirerek, 
                  her hastanın ihtiyacına uygun kaliteli ve estetik diş protezi 
                  çözümleri sunmak.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Vizyonum</h3>
                <p className="text-muted-foreground">
                  Diş protezi alanında öncü teknolojileri kullanarak, 
                  hastaların yaşam kalitesini artıran yenilikçi çözümler 
                  geliştirmek ve sektörde güvenilir bir marka olmak.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Diş Protezi Hizmetlerimiz</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Kaliteli ve estetik diş protezi çözümleri için bizimle iletişime geçin
            </p>
            <Link href="/iletisim">
              <Button variant="secondary" size="lg">
                İletişime Geç
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
