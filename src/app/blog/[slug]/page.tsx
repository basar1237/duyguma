import React from 'react';
import Link from 'next/link';
import { IconArrowLeft, IconUser, IconCalendar, IconArrowRight } from '@tabler/icons-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';

// Static blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'Diş Protezlerinde Modern Teknolojiler',
    excerpt: 'Modern diş protez teknolojileri ve CAD/CAM sistemleri hakkında detaylı bilgi.',
    content: `Modern diş protez teknolojileri, geleneksel yöntemlere göre çok daha hassas ve doğru sonuçlar veriyor. CAD/CAM sistemleri sayesinde dijital olarak tasarlanan protezler, bilgisayar kontrollü makineler tarafından üretiliyor.

Bu teknoloji sayesinde protezler daha uyumlu, daha dayanıklı ve daha estetik görünüyor. Dijital tarama sistemleri ile hastanın ağız yapısı milimetrik hassasiyetle ölçülüyor ve bu veriler bilgisayar ortamında işleniyor.

CAD/CAM teknolojisinin en büyük avantajlarından biri, protezlerin çok daha hızlı üretilebilmesi. Geleneksel yöntemlerde haftalar süren işlemler, modern teknoloji ile günler içinde tamamlanabiliyor.

Ayrıca bu teknoloji sayesinde protezlerin kalitesi de artıyor. Bilgisayar kontrollü üretim süreci, insan hatası riskini minimize ediyor ve her protezin aynı kalitede üretilmesini sağlıyor.`,
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
    content: `Protez bakımı ve temizliği, protezlerinizin uzun ömürlü olması için çok önemlidir. Günlük temizlik rutini, özel temizlik ürünleri kullanımı ve düzenli kontrol ziyaretleri ile protezlerinizi yıllarca kullanabilirsiniz.

Günlük bakım rutininizde protezlerinizi yumuşak bir fırça ile temizlemelisiniz. Sert fırçalar protez yüzeyinde çiziklere neden olabilir. Özel protez temizlik tabletleri kullanarak bakterilerden arındırabilirsiniz.

Protezlerinizi gece boyunca temiz suda bekletmek, malzemenin kurumasını önler ve şeklini korur. Ancak sıcak su kullanmaktan kaçının, çünkü protez malzemesi deforme olabilir.

Düzenli olarak diş hekiminizi ziyaret ederek protezlerinizin durumunu kontrol ettirmelisiniz. Gerekirse profesyonel temizlik yapılabilir ve ayarlamalar yapılabilir.`,
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
    content: `Protez üretiminde kullanılan malzemeler, protezin kalitesini ve kullanım süresini doğrudan etkiler. Akrilik, metal alaşımlar, porselen ve modern kompozit malzemeler gibi farklı seçenekler mevcuttur.

Akrilik malzemeler, protez üretiminde en yaygın kullanılan malzemelerdir. Hafif, dayanıklı ve renk uyumu açısından avantajlıdır. Ancak zamanla renk değişikliği gösterebilir ve kırılgan olabilir.

Metal alaşımlar, özellikle kısmi protezlerde kullanılır. Çok dayanıklıdır ve uzun ömürlüdür. Ancak estetik açıdan dezavantajlı olabilir ve alerjik reaksiyonlara neden olabilir.

Porselen malzemeler, en estetik görünümü sağlar ve doğal dişlere en yakın görünümü verir. Ancak daha kırılgan olabilir ve daha yüksek maliyetlidir.

Modern kompozit malzemeler, farklı malzemelerin avantajlarını birleştirir. Hem dayanıklı hem de estetik görünüm sağlar.`,
    author: 'Şeval Duygu Barutçu',
    published_at: '2024-01-05',
    featured_image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    category: 'MALZEME',
    tags: ['Malzeme', 'Özellikler', 'Kalite'],
    is_popular: true,
    slug: 'protez-malzemeleri-ve-ozellikleri'
  }
];

// Generate static params
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Yazı Bulunamadı</h1>
            <p className="text-muted-foreground mb-8">Aradığınız blog yazısı mevcut değil.</p>
            <Link href="/">
              <Button>
                <IconArrowLeft className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Blog Post Header */}
          <Card className="p-8">
            <div className="mb-6">
              <span className="inline-block bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {post.excerpt}
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
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
            
            {post.tags && post.tags.length > 0 && (
              <div>
                <span className="text-sm font-medium text-gray-700 mb-3 block">Etiketler:</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>

          {/* Blog Post Content */}
          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Author Info */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Yazar Hakkında</h3>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                <IconUser className="h-8 w-8 text-gray-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">{post.author}</h4>
                <p className="text-gray-600 mb-2">Diş Protez Teknikeri</p>
                <p className="text-gray-700">
                  15+ yıllık deneyime sahip diş protez teknikeri. Modern teknolojiler ve geleneksel yöntemleri harmanlayarak kaliteli çözümler üretiyor.
                </p>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link href="/blog">
              <Button variant="outline">
                <IconArrowLeft className="mr-2 h-4 w-4" />
                Blog'a Dön
              </Button>
            </Link>
            <Link href="/hakkimda">
              <Button>
                Hakkımda
                <IconArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
