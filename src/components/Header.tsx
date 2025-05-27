
import React, { useState } from 'react';
import { Mic, MicOff, Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice functionality would be implemented here
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-2 mr-3">
              <span className="text-xl font-bold">OW</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Open World AI</h1>
              <p className="text-xs text-gray-500 hidden sm:block">AI for Everyone</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="/learn" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Learn</a>
            <a href="/services" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="/careers" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Careers</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Voice & Language Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="en">🇺🇸 English</option>
              <option value="es">🇪🇸 Español</option>
              <option value="fr">🇫🇷 Français</option>
              <option value="hi">🇮🇳 हिंदी</option>
              <option value="ar">🇸🇦 العربية</option>
              <option value="zh">🇨🇳 中文</option>
            </select>

            {/* Voice Button */}
            <Button
              onClick={toggleVoice}
              className={`p-3 rounded-full transition-all duration-300 ${
                isListening 
                  ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                  : 'bg-blue-600 hover:bg-blue-700'
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
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors">Home</a>
              <a href="/learn" className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors">Learn</a>
              <a href="/services" className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors">Services</a>
              <a href="/about" className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors">About</a>
              <a href="/careers" className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors">Careers</a>
              <a href="/contact" className="text-gray-600 hover:text-blue-600 font-medium py-2 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
