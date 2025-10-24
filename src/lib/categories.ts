import {
    Smartphone,
    Headphones,
    Cable,
    Palette,
    Speaker,
    Laptop,
    Refrigerator,
  } from "lucide-react";
import type { Category } from "@/lib/types";
  
export const categories: Category[] = [
    { name: "Téléphonie", icon: Smartphone, gradient: "from-sky-400 to-sky-600" },
    { name: "Airpod", icon: Headphones, gradient: "from-blue-400 to-blue-600" },
    { name: "Câble", icon: Cable, gradient: "from-yellow-400 to-yellow-600" },
    { name: "Coque de téléphone", icon: Smartphone, gradient: "from-red-400 to-red-600" },
    { name: "Coque personnalisée", icon: Palette, gradient: "from-pink-400 to-pink-600" },
    { name: "Enceinte", icon: Speaker, gradient: "from-purple-400 to-purple-600" },
    { name: "PC", icon: Laptop, gradient: "from-indigo-400 to-indigo-600" },
    { name: "Electroménager", icon: Refrigerator, gradient: "from-gray-400 to-gray-600" },
];
