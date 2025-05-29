
import React, { useState } from 'react';
import { Mic, MicOff, Search, Menu, X, Brain, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice functionality would be implemented here
  };

  const moreMenuItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Support', path: '/support' },
    { name: 'Community', path: '/community/forum' },
    { name: 'Resources', path: '/resources/downloads' },
    { name: 'Tools', path: '/tools/calculator' }
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-lg border-b border-purple-500/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-3 mr-4">
              <div className="bg-white/20 rounded-lg p-2">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">
                  Open World AI
                </h1>
                <p className="text-xs text-blue-200 hidden sm:block">
                  AI for Everyone
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white/90 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Home</Link>
            <Link to="/about" className="text-white/90 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">About</Link>
            <Link to="/services" className="text-white/90 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Services</Link>
            <Link to="/learn" className="text-white/90 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Learn</Link>
            <Link to="/careers" className="text-white/90 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Careers</Link>
            <Link to="/contact" className="text-white/90 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10">Contact</Link>
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="text-white/90 hover:text-white font-medium transition-colors px-3 py-2 rounded-lg hover:bg-white/10 flex items-center"
              >
                More
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
            <select className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-white/50">
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
                  ? 'bg-red-500 hover:bg-red-600 border-red-300' 
                  : 'bg-white/20 hover:bg-white/30 border-white/30'
              }`}
              size="sm"
            >
              {isListening ? (
                <MicOff className="h-5 w-5 text-white" />
              ) : (
                <Mic className="h-5 w-5 text-white" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors border border-white/30"
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
          <div className="lg:hidden border-t border-white/20 py-4 bg-white/10 rounded-b-lg">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Home</Link>
              <Link to="/about" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">About</Link>
              <Link to="/services" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Services</Link>
              <Link to="/learn" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Learn</Link>
              <Link to="/careers" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Careers</Link>
              <Link to="/contact" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Contact</Link>
              <hr className="border-white/20 my-2" />
              <div className="text-white/70 text-sm font-medium px-4 py-1">More Options</div>
              {moreMenuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20"
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
