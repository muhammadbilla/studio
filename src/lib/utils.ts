import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD") // Normalise les caractères pour séparer les accents
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .replace(/\s+/g, '-') // Remplace les espaces par -
    .replace(/[^\w-]+/g, '') // Supprime les caractères non-alphanumériques
    .replace(/--+/g, '-') // Remplace plusieurs - par un seul
    .replace(/^-+/, '') // Supprime - au début
    .replace(/-+$/, ''); // Supprime - à la fin
}

export function unslugify(slug: string) {
    const result = slug.replace(/-/g, " ");
    return result.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
