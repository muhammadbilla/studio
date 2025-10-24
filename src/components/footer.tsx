import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Clock } from "lucide-react";

const categories = [
  { name: "Informatique", href: "#" },
  { name: "Téléphonie", href: "#" },
  { name: "Gaming", href: "#" },
  { name: "Image & Son", href: "#" },
  { name: "Wearables", href: "#" },
];

const infoLinks = [
  { name: "À propos", href: "#" },
  { name: "Livraison", href: "#" },
  { name: "Retours", href: "#" },
  { name: "Garanties", href: "#" },
  { name: "FAQ", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold font-headline">Achètechapchap</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Boutique high-tech de référence au Burkina Faso. Produits authentiques, livraison rapide, service premium.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-headline mb-4">Catégories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link href={cat.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-headline mb-4">Informations</h4>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold font-headline mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span>Avenue Kwame Nkrumah, Ouagadougou</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span>contact@techstore.bf</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent flex-shrink-0" />
                <span>+226 00 00 00 00</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-accent flex-shrink-0" />
                <span>Lun-Sam: 8h-20h, Dim: 10h-18h</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Achètechapchap. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Conditions d'utilisation</Link>
            <Link href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
