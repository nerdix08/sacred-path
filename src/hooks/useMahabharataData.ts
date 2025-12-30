import { useMemo } from 'react';
import mahabharataJson from '@/data/mahabharataData.json';

export interface MahabharataCharacter {
  id: string;
  name: string;
  nameSanskrit: string;
  role: string;
  description: string;
  imageUrl: string;
  imageAttribution: string;
}

export interface MahabharataParva {
  id: string;
  number: number;
  name: string;
  nameSanskrit: string;
  meaning: string;
  chapters: number;
  summary: string;
  fullContent: string[];
  keyEvents: string[];
  moralTakeaways: string[];
  relatedGitaVerses: { chapter: number; verse: number; connection: string }[];
  imageUrl: string;
  imageAttribution: string;
}

// Pre-indexed parvas map for O(1) lookup
const parvasById = new Map<string, MahabharataParva>(
  (mahabharataJson.parvas as MahabharataParva[]).map(parva => [parva.id, parva])
);

// Export direct access for maximum speed
export const mahabharataData = mahabharataJson;
export const mahabharataParvasFromJson = mahabharataJson.parvas as MahabharataParva[];
export const mahabharataCharactersFromJson = mahabharataJson.characters as MahabharataCharacter[];

// Fast O(1) lookup function
export const getMahabharataParvaByIdFast = (id: string): MahabharataParva | undefined => {
  return parvasById.get(id);
};

// Hook for reactive data with memoization
export const useMahabharataData = () => {
  const parvas = useMemo(() => mahabharataParvasFromJson, []);
  const characters = useMemo(() => mahabharataCharactersFromJson, []);
  
  const getParvaById = useMemo(() => (id: string) => {
    return parvasById.get(id);
  }, []);

  return {
    title: mahabharataJson.title,
    titleSanskrit: mahabharataJson.titleSanskrit,
    author: mahabharataJson.author,
    description: mahabharataJson.description,
    totalParvas: mahabharataJson.totalParvas,
    parvas,
    characters,
    getParvaById,
  };
};

export default useMahabharataData;
