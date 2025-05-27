
import React from 'react';
import { Globe, Mic, Volume2, Heart } from 'lucide-react';

const Footer = () => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Accessibility Banner */}
      <div className="bg-blue-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Volume2 className="h-6 w-6" />
                <span className="font-semibold">Voice Enabled</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mic className="h-6 w-6" />
                <span className="font-semibold">Speech Recognition</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6" />
                <span className="font-semibold">100+ Languages</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-400" />
              <span className="text-sm">Designed for accessibility</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-2 mr-3">
                <span className="text-xl font-bold">OW</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Open World AI</h3>
                <p className="text-gray-400">AI for All: Empowering Every Voice, Everywhere</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Breaking down barriers to technology access through voice-first AI solutions. 
              We believe everyone deserves access to AI assistance, regardless of literacy level or technical expertise.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition-colors">
                🎤 Start Talking
              </button>
              <button className="border border-gray-600 hover:border-gray-500 px-6 py-2 rounded-full transition-colors">
                📞 Contact Us
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Access</h4>
            <ul className="space-y-3">
              <li><a href="/learn" className="text-gray-300 hover:text-white transition-colors">🎓 Learn with AI</a></li>
              <li><a href="/talk" className="text-gray-300 hover:text-white transition-colors">💬 Talk to AI</a></li>
              <li><a href="/translate" className="text-gray-300 hover:text-white transition-colors">🌐 Translate</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">⚙️ IT Services</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-white transition-colors">💼 Careers</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">ℹ️ About Us</a></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Languages Supported</h4>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className="text-left p-2 rounded hover:bg-gray-800 transition-colors text-sm"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-3">+ 92 more languages</p>
          </div>
        </div>

        {/* Global Presence */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Global Presence</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span>🇺🇸 United States</span>
              <span>🇬🇧 United Kingdom</span>
              <span>🇮🇳 India</span>
              <span>🇩🇪 Germany</span>
              <span>🇫🇷 France</span>
              <span>🇧🇷 Brazil</span>
              <span>🇯🇵 Japan</span>
              <span>🇦🇺 Australia</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Open World AI. Connecting the World, One Voice at a Time.</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
            <a href="/help" className="hover:text-white transition-colors">Help Center</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
