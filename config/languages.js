export const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'fr', title: 'French' },
  { id: 'es', title: 'Spanish' },
  { id: 'pt', title: 'Portuguese' },
];

export const baseLanguage = supportedLanguages.find(l => l.isDefault);
