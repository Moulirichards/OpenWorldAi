
import React, { useState } from 'react';
import { Mic, MicOff, Search, Menu, X, Brain, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { currentLanguage, setCurrentLanguage, t } = useLanguage();

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice functionality would be implemented here
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLanguage(e.target.value);
  };

  const moreMenuItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Support', path: '/support' },
    { name: 'Community', path: '/community/forum' },
    { name: 'Resources', path: '/resources/downloads' },
    { name: 'Tools', path: '/tools/calculator' }
  ];

  return (
    <header className="bg-black shadow-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center border border-gray-700">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <h1 className="text-xl font-bold text-white leading-tight">
                  openocean
                </h1>
                <p className="text-xs text-gray-300 hidden sm:block leading-tight">
                  AI for Everyone
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-800">{t('nav.home')}</Link>
            <Link to="/about" className="text-gray-300 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-800">{t('nav.about')}</Link>
            <Link to="/categories" className="text-gray-300 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-800">Categories</Link>
            <Link to="/contact" className="text-gray-300 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-800">{t('nav.contact')}</Link>
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-gray-300 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-gray-800 flex items-center"
              >
                {t('nav.more')}
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {isMoreOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {moreMenuItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setIsMoreOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Voice & Language Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <select 
              value={currentLanguage}
              onChange={handleLanguageChange}
              className="bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="en" className="text-gray-800">🇺🇸 English</option>
              <option value="es" className="text-gray-800">🇪🇸 Español</option>
              <option value="fr" className="text-gray-800">🇫🇷 Français</option>
              <option value="hi" className="text-gray-800">🇮🇳 हिंदी</option>
              <option value="ar" className="text-gray-800">🇸🇦 العربية</option>
              <option value="zh" className="text-gray-800">🇨🇳 中文</option>
            </select>

            {/* Voice Button */}
            <Button
              onClick={toggleVoice}
              className={`p-3 rounded-full transition-colors border-2 ${
                isListening 
                  ? 'bg-white text-black border-gray-300 hover:bg-gray-100' 
                  : 'bg-gray-800 hover:bg-gray-700 border-gray-600 text-white'
              }`}
              size="sm"
            >
              {isListening ? (
                <MicOff className="h-5 w-5" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-600"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4 bg-gray-900 rounded-b-lg">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-gray-800">{t('nav.home')}</Link>
              <Link to="/about" className="text-gray-300 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-gray-800">{t('nav.about')}</Link>
              <Link to="/categories" className="text-gray-300 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-gray-800">Categories</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-gray-800">{t('nav.contact')}</Link>
              <hr className="border-gray-700 my-2" />
              <div className="text-gray-400 text-sm font-medium px-4 py-1">More Options</div>
              {moreMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-300 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-gray-800"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
