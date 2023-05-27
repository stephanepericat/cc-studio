export const supportedLanguages = [
  { id: 'en', title: 'English', isDefault: true },
  { id: 'fr', title: 'French' },
  { id: 'pt', title: 'Portuguese' },
  { id: 'es', title: 'Spanish' },
];

export const baseLanguage = supportedLanguages.find(l => l.isDefault);
