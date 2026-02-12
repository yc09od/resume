'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function DynamicTitle() {
  const { language, t } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title = t.metadata.title;

    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language, t]);

  return null;
}
