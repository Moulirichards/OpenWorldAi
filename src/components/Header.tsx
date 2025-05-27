
import React, { useState } from 'react';
import { Mic, MicOff, Search, Menu, X, Waves, Zap, Brain, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const toggleVoice = () => {
    setIsListening(!isListening);
    // Voice functionality would be implemented here
  };

  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-2xl border-b border-purple-500/30 sticky top-0 z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Super Interactive Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              {/* Main Logo Container */}
              <div className="relative bg-gradient-to-br from-white via-blue-50 to-purple-100 text-transparent bg-clip-text rounded-2xl p-3 mr-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent transform rotate-45 translate-x-full group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                
                {/* Logo Icons */}
                <div className="relative flex items-center space-x-2">
                  <div className="relative">
                    <Brain className="h-8 w-8 text-blue-400 animate-pulse group-hover:text-purple-400 transition-colors duration-300" />
                    <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-400 animate-ping" />
                  </div>
                  <Zap className="h-6 w-6 text-purple-500 group-hover:text-pink-500 animate-bounce" />
                  <div className="relative">
                    <Waves className="h-5 w-5 text-indigo-400 animate-pulse group-hover:animate-bounce transition-all duration-300" />
                  </div>
                </div>
                
                {/* Floating Particles */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-1/2 -left-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-80"></div>
              </div>
            </div>
            
            {/* Dynamic Text Logo */}
            <div className="group-hover:scale-105 transition-transform duration-300">
              <h1 className="text-xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg group-hover:from-yellow-200 group-hover:via-pink-200 group-hover:to-blue-200 transition-all duration-500">
                Open World AI
              </h1>
              <p className="text-xs bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent hidden sm:block group-hover:from-pink-200 group-hover:to-yellow-200 transition-all duration-500">
                ✨ AI for Everyone ✨
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg">Home</a>
            <a href="/learn" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg">Learn</a>
            <a href="/services" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg">Services</a>
            <a href="/about" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg">About</a>
            <a href="/careers" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg">Careers</a>
            <a href="/contact" className="text-white/90 hover:text-white font-medium transition-all duration-200 hover:scale-105 px-3 py-2 rounded-lg hover:bg-white/10 hover:shadow-lg">Contact</a>
          </nav>

          {/* Voice & Language Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Selector */}
            <select className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-3 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/30 hover:bg-white/25 transition-all duration-200">
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
                  : 'bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm shadow-lg hover:shadow-xl'
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
              className="md:hidden p-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors border border-white/30 backdrop-blur-sm"
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
          <div className="md:hidden border-t border-white/20 py-4 bg-white/10 backdrop-blur-sm rounded-b-lg">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Home</a>
              <a href="/learn" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Learn</a>
              <a href="/services" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Services</a>
              <a href="/about" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">About</a>
              <a href="/careers" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Careers</a>
              <a href="/contact" className="text-white/90 hover:text-white font-medium py-2 transition-colors px-4 rounded-lg hover:bg-white/20">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
