import React from 'react';
import Link from 'next/link';
import { IconArrowRight, IconUser, IconCalendar } from '@tabler/icons-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';

export default function BlogPage() {
  const blogPosts = [
    {
      id: '1',
      title: 'Diş Protezlerinde Modern Teknolojiler',
      excerpt: 'Modern diş protez teknolojileri ve CAD/CAM sistemleri hakkında detaylı bilgi.',
      content: 'Modern diş protez teknolojileri, geleneksel yöntemlere göre çok daha hassas ve doğru sonuçlar veriyor. CAD/CAM sistemleri sayesinde dijital olarak tasarlanan protezler, bilgisayar kontrollü makineler tarafından üretiliyor. Bu teknoloji sayesinde protezler daha uyumlu, daha dayanıklı ve daha estetik görünüyor.',
      author: 'Şeval Duygu Barutçu',
      published_at: '2024-01-15',
      featured_image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'TEKNOLOJİ',
      tags: ['CAD/CAM', 'Modern Teknoloji', 'Protez'],
      is_popular: true,
      slug: 'dis-protezlerinde-modern-teknolojiler'
    },
    {
      id: '2',
      title: 'Protez Bakımı ve Temizliği',
      excerpt: 'Diş protezlerinizin uzun ömürlü olması için bakım ve temizlik önerileri.',
      content: 'Protez bakımı ve temizliği, protezlerinizin uzun ömürlü olması için çok önemlidir. Günlük temizlik rutini, özel temizlik ürünleri kullanımı ve düzenli kontrol ziyaretleri ile protezlerinizi yıllarca kullanabilirsiniz. Bu yazıda size detaylı bakım önerileri sunuyoruz.',
      author: 'Şeval Duygu Barutçu',
      published_at: '2024-01-10',
      featured_image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop',
      category: 'BAKIM',
      tags: ['Bakım', 'Temizlik', 'Ömür'],
      is_popular: false,
      slug: 'protez-bakimi-ve-temizligi'
    },
    {
      id: '3',
      title: 'Protez Malzemeleri ve Özellikleri',
      excerpt: 'Farklı protez malzemelerinin özellikleri ve kullanım alanları.',
      content: 'Protez üretiminde kullanılan malzemeler, protezin kalitesini ve kullanım süresini doğrudan etkiler. Akrilik, metal alaşımlar, porselen ve modern kompozit malzemeler gibi farklı seçenekler mevcuttur. Her malzemenin kendine özgü avantajları ve kullanım alanları vardır.',
      author: 'Şeval Duygu Barutçu',
      published_at: '2024-01-05',
      featured_image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      category: 'MALZEME',
      tags: ['Malzeme', 'Özellikler', 'Kalite'],
      is_popular: true,
      slug: 'protez-malzemeleri-ve-ozellikleri'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Blog Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diş protez teknolojisi alanındaki en güncel bilgiler, teknolojik gelişmeler ve uzman önerileri
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="h-full hover:shadow-lg transition-shadow overflow-hidden bg-white flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  {post.is_popular && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-block bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                        POPÜLER
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-2">
                      <IconUser className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <IconCalendar className="h-4 w-4" />
                      <span>
                        {new Date(post.published_at).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-800">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 text-sm flex-grow">
                    {post.excerpt}
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
                      Devamını Oku
                      <IconArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="p-8 text-center bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold mb-4">Güncel Kalın</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Diş protez teknolojisi alanındaki en son gelişmeler ve uzman önerileri için bültenimize abone olun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button>
                  Abone Ol
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
