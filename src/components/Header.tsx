
import React, { useState } from 'react';
import { Mic, MicOff, Search, Menu, X, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice functionality would be implemented here
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 shadow-lg border-b border-blue-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Interactive Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative bg-gradient-to-br from-white to-blue-100 text-blue-600 rounded-xl p-2 mr-3 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
              <div className="flex items-center space-x-1">
                <Mic className="h-6 w-6" />
                <Waves className="h-4 w-4 animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <h1 className="text-xl font-bold text-white drop-shadow-sm">Open World AI</h1>
              <p className="text-xs text-blue-100 hidden sm:block">AI for Everyone</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Home</a>
            <a href="/learn" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Learn</a>
            <a href="/services" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Services</a>
            <a href="/about" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">About</a>
            <a href="/careers" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Careers</a>
            <a href="/contact" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10">Contact</a>
          </nav>

          {/* Voice & Language Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <select className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20">
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
              className={`p-3 rounded-full transition-all duration-300 border-2 ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse border-red-300 shadow-lg shadow-red-200' 
                  : 'bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm shadow-lg'
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
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
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
          <div className="md:hidden border-t border-white/20 py-4 bg-white/5 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/10">Home</a>
              <a href="/learn" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/10">Learn</a>
              <a href="/services" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/10">Services</a>
              <a href="/about" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/10">About</a>
              <a href="/careers" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/10">Careers</a>
              <a href="/contact" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/10">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
