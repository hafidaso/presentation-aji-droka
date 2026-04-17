import { ReactNode } from 'react';

export interface SlideData {
  id: string;
  type: 'cover' | 'story' | 'content' | 'stats' | 'architecture' | 'dashboard' | 'tech' | 'conclusion';
  title?: string;
  subtitle?: string;
  content?: ReactNode;
  background?: string;
  footer?: string;
}

export interface PresentationProps {
  slides: SlideData[];
}
