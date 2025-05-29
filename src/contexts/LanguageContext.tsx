
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  currentLanguage: string;
  setCurrentLanguage: (language: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.learn': 'Learn',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.more': 'More',
    
    // Hero Section
    'hero.title': 'AI for All: Empowering Every Voice, Everywhere',
    'hero.tagline': '🌍 Connecting the World, One Voice at a Time ✨',
    'hero.talk': '🎤 Talk to AI Now',
    'hero.description': 'Press the button and speak in any language. AI will understand and help you immediately.',
    'hero.try': '✨ Try saying:',
    'hero.examples.job': '"How do I apply for a job?"',
    'hero.examples.learn': '"Teach me about computers"',
    'hero.examples.math': '"Help me with math"',
    'hero.examples.health': '"What is healthy food?"',
    
    // Quick Actions
    'action.learn': 'Learn',
    'action.learn.desc': 'Voice lessons',
    'action.assistant': 'AI Assistant',
    'action.assistant.desc': 'Get instant help',
    'action.ask': 'Ask Question',
    'action.ask.desc': 'Speak and get answers',
    'action.services': 'Services',
    'action.services.desc': 'Technology solutions',
    
    // CTA
    'cta.title': 'Ready to Start Your AI Journey?',
    'cta.description': 'Join millions of people worldwide who are already learning and growing with AI assistance',
    'cta.speak': '🎤 Start Speaking Now',
    'cta.download': '📱 Download App'
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.learn': 'Aprender',
    'nav.careers': 'Carreras',
    'nav.contact': 'Contacto',
    'nav.more': 'Más',
    
    // Hero Section
    'hero.title': 'IA para Todos: Empoderando Cada Voz, En Todas Partes',
    'hero.tagline': '🌍 Conectando el Mundo, Una Voz a la Vez ✨',
    'hero.talk': '🎤 Habla con IA Ahora',
    'hero.description': 'Presiona el botón y habla en cualquier idioma. La IA entenderá y te ayudará inmediatamente.',
    'hero.try': '✨ Intenta decir:',
    'hero.examples.job': '"¿Cómo solicito un trabajo?"',
    'hero.examples.learn': '"Enséñame sobre computadoras"',
    'hero.examples.math': '"Ayúdame con matemáticas"',
    'hero.examples.health': '"¿Qué es comida saludable?"',
    
    // Quick Actions
    'action.learn': 'Aprender',
    'action.learn.desc': 'Lecciones de voz',
    'action.assistant': 'Asistente IA',
    'action.assistant.desc': 'Obtén ayuda instantánea',
    'action.ask': 'Hacer Pregunta',
    'action.ask.desc': 'Habla y obtén respuestas',
    'action.services': 'Servicios',
    'action.services.desc': 'Soluciones tecnológicas',
    
    // CTA
    'cta.title': '¿Listo para Comenzar tu Viaje con IA?',
    'cta.description': 'Únete a millones de personas en todo el mundo que ya están aprendiendo y creciendo con asistencia de IA',
    'cta.speak': '🎤 Comienza a Hablar Ahora',
    'cta.download': '📱 Descargar App'
  },
  fr: {
    // Header
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.learn': 'Apprendre',
    'nav.careers': 'Carrières',
    'nav.contact': 'Contact',
    'nav.more': 'Plus',
    
    // Hero Section
    'hero.title': 'IA pour Tous: Donner du Pouvoir à Chaque Voix, Partout',
    'hero.tagline': '🌍 Connecter le Monde, Une Voix à la Fois ✨',
    'hero.talk': '🎤 Parlez à l\'IA Maintenant',
    'hero.description': 'Appuyez sur le bouton et parlez dans n\'importe quelle langue. L\'IA comprendra et vous aidera immédiatement.',
    'hero.try': '✨ Essayez de dire:',
    'hero.examples.job': '"Comment postuler pour un emploi?"',
    'hero.examples.learn': '"Apprenez-moi les ordinateurs"',
    'hero.examples.math': '"Aidez-moi avec les maths"',
    'hero.examples.health': '"Qu\'est-ce qu\'une alimentation saine?"',
    
    // Quick Actions
    'action.learn': 'Apprendre',
    'action.learn.desc': 'Leçons vocales',
    'action.assistant': 'Assistant IA',
    'action.assistant.desc': 'Obtenir de l\'aide instantanée',
    'action.ask': 'Poser Question',
    'action.ask.desc': 'Parlez et obtenez des réponses',
    'action.services': 'Services',
    'action.services.desc': 'Solutions technologiques',
    
    // CTA
    'cta.title': 'Prêt à Commencer Votre Voyage IA?',
    'cta.description': 'Rejoignez des millions de personnes dans le monde qui apprennent et grandissent déjà avec l\'assistance IA',
    'cta.speak': '🎤 Commencez à Parler Maintenant',
    'cta.download': '📱 Télécharger l\'App'
  },
  hi: {
    // Header
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएं',
    'nav.learn': 'सीखें',
    'nav.careers': 'करियर',
    'nav.contact': 'संपर्क',
    'nav.more': 'और',
    
    // Hero Section
    'hero.title': 'सभी के लिए AI: हर आवाज़ को सशक्त बनाना, हर जगह',
    'hero.tagline': '🌍 दुनिया को जोड़ना, एक आवाज़ एक समय में ✨',
    'hero.talk': '🎤 अब AI से बात करें',
    'hero.description': 'बटन दबाएं और किसी भी भाषा में बोलें। AI समझेगा और तुरंत आपकी मदद करेगा।',
    'hero.try': '✨ कहने की कोशिश करें:',
    'hero.examples.job': '"मैं नौकरी के लिए कैसे आवेदन करूं?"',
    'hero.examples.learn': '"मुझे कंप्यूटर के बारे में सिखाएं"',
    'hero.examples.math': '"गणित में मेरी मदद करें"',
    'hero.examples.health': '"स्वस्थ भोजन क्या है?"',
    
    // Quick Actions
    'action.learn': 'सीखें',
    'action.learn.desc': 'आवाज़ पाठ',
    'action.assistant': 'AI सहायक',
    'action.assistant.desc': 'तुरंत मदद पाएं',
    'action.ask': 'प्रश्न पूछें',
    'action.ask.desc': 'बोलें और उत्तर पाएं',
    'action.services': 'सेवाएं',
    'action.services.desc': 'तकनीकी समाधान',
    
    // CTA
    'cta.title': 'अपनी AI यात्रा शुरू करने के लिए तैयार हैं?',
    'cta.description': 'दुनियाभर के लाखों लोगों से जुड़ें जो पहले से ही AI सहायता के साथ सीख रहे हैं और बढ़ रहे हैं',
    'cta.speak': '🎤 अब बोलना शुरू करें',
    'cta.download': '📱 ऐप डाउनलोड करें'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'حول',
    'nav.services': 'الخدمات',
    'nav.learn': 'تعلم',
    'nav.careers': 'الوظائف',
    'nav.contact': 'اتصل',
    'nav.more': 'المزيد',
    
    // Hero Section
    'hero.title': 'الذكاء الاصطناعي للجميع: تمكين كل صوت، في كل مكان',
    'hero.tagline': '🌍 ربط العالم، صوت واحد في كل مرة ✨',
    'hero.talk': '🎤 تحدث مع الذكاء الاصطناعي الآن',
    'hero.description': 'اضغط على الزر وتحدث بأي لغة. سيفهم الذكاء الاصطناعي ويساعدك فوراً.',
    'hero.try': '✨ جرب قول:',
    'hero.examples.job': '"كيف أتقدم لوظيفة؟"',
    'hero.examples.learn': '"علمني عن الكمبيوتر"',
    'hero.examples.math': '"ساعدني في الرياضيات"',
    'hero.examples.health': '"ما هو الطعام الصحي؟"',
    
    // Quick Actions
    'action.learn': 'تعلم',
    'action.learn.desc': 'دروس صوتية',
    'action.assistant': 'مساعد الذكاء الاصطناعي',
    'action.assistant.desc': 'احصل على مساعدة فورية',
    'action.ask': 'اسأل سؤال',
    'action.ask.desc': 'تحدث واحصل على إجابات',
    'action.services': 'الخدمات',
    'action.services.desc': 'حلول تقنية',
    
    // CTA
    'cta.title': 'هل أنت مستعد لبدء رحلتك مع الذكاء الاصطناعي؟',
    'cta.description': 'انضم إلى ملايين الأشخاص حول العالم الذين يتعلمون وينمون بالفعل بمساعدة الذكاء الاصطناعي',
    'cta.speak': '🎤 ابدأ التحدث الآن',
    'cta.download': '📱 تحميل التطبيق'
  },
  zh: {
    // Header
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.services': '服务',
    'nav.learn': '学习',
    'nav.careers': '职业',
    'nav.contact': '联系',
    'nav.more': '更多',
    
    // Hero Section
    'hero.title': '人工智能为所有人：赋能每个声音，无处不在',
    'hero.tagline': '🌍 连接世界，一次一个声音 ✨',
    'hero.talk': '🎤 现在与AI对话',
    'hero.description': '按下按钮，用任何语言说话。AI会理解并立即帮助您。',
    'hero.try': '✨ 尝试说：',
    'hero.examples.job': '"我如何申请工作？"',
    'hero.examples.learn': '"教我关于计算机"',
    'hero.examples.math': '"帮我学数学"',
    'hero.examples.health': '"什么是健康食品？"',
    
    // Quick Actions
    'action.learn': '学习',
    'action.learn.desc': '语音课程',
    'action.assistant': 'AI助手',
    'action.assistant.desc': '获得即时帮助',
    'action.ask': '提问',
    'action.ask.desc': '说话并获得答案',
    'action.services': '服务',
    'action.services.desc': '技术解决方案',
    
    // CTA
    'cta.title': '准备开始您的AI之旅了吗？',
    'cta.description': '加入全世界数百万已经在AI协助下学习和成长的人们',
    'cta.speak': '🎤 现在开始说话',
    'cta.download': '📱 下载应用'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[currentLanguage as keyof typeof translations]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
