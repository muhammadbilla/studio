"use client";

import Link from "next/link";
import {
  Search,
  User,
  Heart,
  Menu,
  ChevronDown,
  Smartphone,
  Laptop,
  Gamepad2,
  Tv,
  Camera,
  Watch,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "#boutique", label: "Boutique" },
  { href: "#promotions", label: "Promotions" },
  { href: "#contact", label: "Contact" },
];

const categories = [
    { name: "Toutes catégories" },
    { name: "Informatique" },
    { name: "Téléphonie" },
    { name: "Gaming" },
    { name: "Image & Son" },
    { name: "Photo & Vidéo" },
    { name: "Wearables" },
    { name: "Maison connectée" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base font-medium">
            N°1 des meilleurs prix au Burkina Faso
          </p>
        </div>
      </div>
      <nav className="bg-card shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold font-headline text-foreground">
                Achètechapchap
              </Link>
            </div>

            <div className="hidden md:flex flex-1 mx-8 max-w-2xl">
              <div className="flex w-full border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-ring">
                <Select defaultValue="all">
                  <SelectTrigger className="hidden lg:flex w-auto bg-muted text-foreground border-none rounded-r-none focus:ring-0">
                    <SelectValue placeholder="Catégories" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.name} value={cat.name.toLowerCase().replace(' ', '-')}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  type="text"
                  placeholder="Rechercher un produit..."
                  className="flex-1 px-4 border-none focus:ring-0 rounded-l-none"
                />
                <Button className="px-4 bg-accent text-accent-foreground rounded-l-none hover:bg-accent/90">
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-foreground hover:text-accent font-medium transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
               <Button variant="ghost" size="icon" className="md:hidden">
                 <Search className="h-6 w-6 text-foreground" />
               </Button>
               <Button variant="ghost" size="icon" className="hidden md:inline-flex">
                 <User className="h-6 w-6 text-foreground" />
               </Button>
               <Button variant="ghost" size="icon" className="relative hidden md:inline-flex">
                  <Heart className="h-6 w-6 text-foreground" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
               </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6 text-foreground" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 pt-8">
                    {navLinks.map((link) => (
                      <SheetClose key={link.label} asChild>
                        <Link
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-accent"
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
