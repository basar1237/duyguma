import React from 'react';
import Link from 'next/link';
import { IconHeart, IconBrandGithub, IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Hizmetler': [
      { name: 'Ana Sayfa', href: '/' },
      { name: 'Tam Protez', href: '/hizmetler/tam-protez' },
      { name: 'Kısmi Protez', href: '/hizmetler/kismi-protez' },
      { name: 'İmplant Üstü Protez', href: '/hizmetler/implant-protez' },
    ],
    'Sayfalar': [
      { name: 'Hakkımda', href: '/hakkimda' },
      { name: 'İletişim', href: '/iletisim' },
      { name: 'Gizlilik Politikası', href: '/gizlilik' },
      { name: 'Kullanım Şartları', href: '/kullanim-sartlari' },
    ],
    'Sosyal': [
      { name: 'GitHub', href: 'https://github.com', icon: IconBrandGithub },
      { name: 'Twitter', href: 'https://twitter.com', icon: IconBrandTwitter },
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: IconBrandLinkedin },
    ],
  };

  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-primary to-accent" />
              <span className="text-xl font-bold gradient-text">Duyguma</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Modern web teknolojileri, tasarım ve programlama hakkında güncel yazılar ve öğreticiler.
            </p>
          </div>

                     {/* Hizmetler Links */}
           <div>
             <h3 className="font-semibold mb-4">Hizmetler</h3>
             <ul className="space-y-2">
               {footerLinks['Hizmetler'].map((link) => (
                 <li key={link.name}>
                   <Link
                     href={link.href}
                     className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                   >
                     {link.name}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>

          {/* Pages Links */}
          <div>
            <h3 className="font-semibold mb-4">Sayfalar</h3>
            <ul className="space-y-2">
              {footerLinks['Sayfalar'].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Sosyal Medya</h3>
            <ul className="space-y-2">
              {footerLinks['Sosyal'].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Duyguma Blog. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-muted-foreground flex items-center space-x-1">
            <span>Made with</span>
            <IconHeart className="h-4 w-4 text-red-500" />
            <span>by Lidya Teknoloji</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
