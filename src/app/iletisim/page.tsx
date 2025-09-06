'use client';

import React, { useState } from 'react';
import { IconPhone, IconMail, IconMapPin, IconClock, IconSend } from '@tabler/icons-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Button from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simüle edilmiş form gönderimi
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: IconPhone,
      title: 'Telefon',
      value: '+90 555 123 45 67',
      description: 'Hafta içi 09:00-18:00'
    },
    {
      icon: IconMail,
      title: 'E-posta',
      value: 'info@duyguma.com',
      description: '7/24 e-posta desteği'
    },
    {
      icon: IconMapPin,
      title: 'Adres',
      value: 'İstanbul, Türkiye',
      description: 'Merkezi konum'
    },
    {
      icon: IconClock,
      title: 'Çalışma Saatleri',
      value: 'Pazartesi - Cuma',
      description: '09:00 - 18:00'
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
              İletişim
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Diş protezi hizmetlerimiz hakkında bilgi almak veya randevu oluşturmak için 
              bizimle iletişime geçin.
            </p>
          </div>
        </section>

        {/* İletişim Bilgileri */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-6 bg-muted/30 rounded-lg">
                  <info.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-lg font-medium mb-2">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* İletişim Formu ve Harita */}
        <section className="py-16 px-4">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* İletişim Formu */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Mesaj Gönderin</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="+90 555 123 45 67"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Konu *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Konu seçin</option>
                        <option value="tam-protez">Tam Protez</option>
                        <option value="kismi-protez">Kısmi Protez</option>
                        <option value="implant-protez">İmplant Üstü Protez</option>
                        <option value="randevu">Randevu</option>
                        <option value="bilgi">Genel Bilgi</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full"
                  >
                    <IconSend className="mr-2 h-4 w-4" />
                    Mesaj Gönder
                  </Button>
                </form>
              </div>

              {/* Harita ve Ek Bilgiler */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Konum</h2>
                <div className="bg-muted/30 rounded-lg p-6 mb-8">
                  <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-muted-foreground">Harita burada görüntülenecek</p>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Adres</h3>
                      <p className="text-muted-foreground">
                        İstanbul, Türkiye<br />
                        Merkezi konumda hizmet veriyoruz
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Ulaşım</h3>
                      <p className="text-muted-foreground">
                        Toplu taşıma araçları ile kolayca ulaşabilirsiniz.<br />
                        Otopark imkanı mevcuttur.
                      </p>
                    </div>
                  </div>
                </div>

                {/* SSS */}
                <div>
                  <h3 className="text-xl font-bold mb-4">Sık Sorulan Sorular</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Protez yapımı ne kadar sürer?</h4>
                      <p className="text-sm text-muted-foreground">
                        Protez türüne göre 1-3 hafta arasında değişmektedir.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Randevu nasıl alabilirim?</h4>
                      <p className="text-sm text-muted-foreground">
                        Telefon veya e-posta ile randevu alabilirsiniz.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Ödeme seçenekleri nelerdir?</h4>
                      <p className="text-sm text-muted-foreground">
                        Nakit, kredi kartı ve taksit seçenekleri mevcuttur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Hemen İletişime Geçin</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Diş protezi hizmetlerimiz hakkında detaylı bilgi almak için 
              bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+905551234567" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition-colors">
                <IconPhone className="mr-2 h-4 w-4" />
                Hemen Ara
              </a>
              <a href="mailto:info@duyguma.com" className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-primary transition-colors">
                <IconMail className="mr-2 h-4 w-4" />
                E-posta Gönder
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
