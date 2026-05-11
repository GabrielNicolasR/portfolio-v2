import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useI18n, type Language } from '@/lib/i18n';

export function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex items-center gap-2"
    >
      <div className="flex items-center gap-1 rounded-full border border-border/60 glass p-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
              language === lang.code
                ? 'bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            title={lang.name}
          >
            <span className="text-sm">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}
