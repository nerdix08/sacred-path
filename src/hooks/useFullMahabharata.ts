import { useMemo } from 'react';
import mahabharataFullJson from '@/data/mahabharata.json';
import mahabharataImagesJson from '@/data/mahabharata_images.json';
import { mahabharataParvasFromJson, MahabharataParva, MahabharataCharacter } from './useMahabharataData';

// Types for the full mahabharata.json content
export interface MahabharataSectionContent {
  text: string;
  images: string[];
  videos: any[];
}

export interface MahabharataSection {
  title: string;
  url: string;
  content: MahabharataSectionContent;
}

export interface GalleryImage {
  id: number;
  title: string;
  description: string;
  url: string;
  parva: string;
  theme: string;
}

export interface ParvaImageSet {
  main: string;
  scenes: string[];
}

// Pre-indexed maps for O(1) lookup
const sectionsByTitle = new Map<string, MahabharataSection>();
const sectionsByParva = new Map<string, MahabharataSection[]>();

// Index sections by parva name from title
const parvaKeywords: Record<string, string[]> = {
  'adi-parva': ['adi', 'beginning', 'birth', 'childhood', 'shakuntala', 'first'],
  'sabha-parva': ['sabha', 'assembly', 'dice', 'gambling', 'court'],
  'vana-parva': ['vana', 'forest', 'exile', 'aranyaka'],
  'virata-parva': ['virata', 'matsya', 'disguise', 'incognito'],
  'udyoga-parva': ['udyoga', 'effort', 'war preparation', 'embassy'],
  'bhishma-parva': ['bhishma', 'gita', 'battle begin'],
  'drona-parva': ['drona', 'abhimanyu', 'chakravyuha'],
  'karna-parva': ['karna', 'sun', 'charioteer'],
  'shalya-parva': ['shalya', 'final', 'mace duel'],
  'sauptika-parva': ['sauptika', 'night', 'ashwatthama'],
  'stri-parva': ['stri', 'women', 'gandhari', 'lament'],
  'shanti-parva': ['shanti', 'peace', 'governance', 'bhishma teachings'],
  'anushasana-parva': ['anushasana', 'instruction', 'dharma'],
  'ashvamedhika-parva': ['ashvamedhika', 'horse sacrifice'],
  'ashramavasika-parva': ['ashramavasika', 'hermitage', 'forest fire'],
  'mausala-parva': ['mausala', 'club', 'destruction'],
  'mahaprasthanika-parva': ['mahaprasthanika', 'great journey', 'final'],
  'svargarohana-parva': ['svargarohana', 'heaven', 'ascent']
};

// Build indexes on module load for fast access
(mahabharataFullJson as MahabharataSection[]).forEach((section, index) => {
  sectionsByTitle.set(section.title.toLowerCase(), section);
  
  // Determine which parva this section belongs to based on title/content
  const titleLower = section.title.toLowerCase();
  
  for (const [parvaId, keywords] of Object.entries(parvaKeywords)) {
    if (keywords.some(kw => titleLower.includes(kw))) {
      const existing = sectionsByParva.get(parvaId) || [];
      existing.push(section);
      sectionsByParva.set(parvaId, existing);
      break;
    }
  }
  
  // Also index by section number
  const sectionMatch = titleLower.match(/section\s+([ivxlcdm]+|[0-9]+)/i);
  if (sectionMatch && !sectionsByParva.has(`section-${index}`)) {
    // If no parva matched, add to general sections
    const general = sectionsByParva.get('general') || [];
    general.push(section);
    sectionsByParva.set('general', general);
  }
});

// Gallery images indexed by parva
const imagesByParva = new Map<string, GalleryImage[]>();
mahabharataImagesJson.gallery.images.forEach(img => {
  const existing = imagesByParva.get(img.parva) || [];
  existing.push(img);
  imagesByParva.set(img.parva, existing);
});

// Export direct data access
export const mahabharataFullSections = mahabharataFullJson as MahabharataSection[];
export const galleryImages = mahabharataImagesJson.gallery.images as GalleryImage[];
export const parvaImages = mahabharataImagesJson.parvaImages as Record<string, ParvaImageSet>;

// Fast lookup functions
export const getSectionsByParva = (parvaId: string): MahabharataSection[] => {
  return sectionsByParva.get(parvaId) || [];
};

export const getImagesForParva = (parvaId: string): GalleryImage[] => {
  return imagesByParva.get(parvaId) || [];
};

export const getParvaMainImage = (parvaId: string): string => {
  return parvaImages[parvaId]?.main || galleryImages[0]?.url || '';
};

export const getParvaSceneImages = (parvaId: string): string[] => {
  return parvaImages[parvaId]?.scenes || [];
};

// Get full text content for a parva from the detailed JSON
export const getParvaFullContent = (parvaId: string): string[] => {
  const sections = getSectionsByParva(parvaId);
  const allText: string[] = [];
  
  sections.forEach(section => {
    if (section.content?.text) {
      // Split text by paragraphs or sentences for better display
      const paragraphs = section.content.text.split(/\n\n|\n/).filter(p => p.trim());
      allText.push(...paragraphs);
    }
  });
  
  return allText;
};

// Hook for reactive data with memoization
export const useFullMahabharata = () => {
  const allSections = useMemo(() => mahabharataFullSections, []);
  const allImages = useMemo(() => galleryImages, []);
  const parvas = useMemo(() => mahabharataParvasFromJson, []);
  
  const getParvaData = useMemo(() => (parvaId: string) => {
    const parva = mahabharataParvasFromJson.find(p => p.id === parvaId);
    const sections = getSectionsByParva(parvaId);
    const images = getImagesForParva(parvaId);
    const mainImage = getParvaMainImage(parvaId);
    const sceneImages = getParvaSceneImages(parvaId);
    const fullContent = getParvaFullContent(parvaId);
    
    return {
      parva,
      sections,
      images,
      mainImage,
      sceneImages,
      fullContent,
    };
  }, []);

  const getAllGalleryImages = useMemo(() => () => galleryImages, []);
  
  return {
    allSections,
    allImages,
    parvas,
    totalSections: allSections.length,
    totalImages: allImages.length,
    getParvaData,
    getAllGalleryImages,
    getSectionsByParva,
    getImagesForParva,
    getParvaMainImage,
    getParvaSceneImages,
    getParvaFullContent,
  };
};

export default useFullMahabharata;
