
import React from 'react';
import { Mic, Eye, Volume2, Upload, MessageCircle, BookOpen } from 'lucide-react';
import FeatureCard from './FeatureCard';
import VoiceButton from './VoiceButton';
import { Button } from '@/components/ui/button';

const AIForEveryoneSection = () => {
  const features = [
    {
      title: "Voice AI Assistant",
      description: "Speak in your language, get instant help with daily questions",
      icon: <Mic className="h-8 w-8 text-white" />,
      color: "bg-blue-500",
      hasVoice: true,
      hasAudio: true
    },
    {
      title: "Visual Learning",
      description: "Learn through pictures, videos, and interactive demonstrations",
      icon: <Eye className="h-8 w-8 text-white" />,
      color: "bg-green-500",
      hasAudio: true
    },
    {
      title: "Text to Speech",
      description: "Upload any text or image, hear it read in your language",
      icon: <Volume2 className="h-8 w-8 text-white" />,
      color: "bg-purple-500",
      hasVoice: true
    },
    {
      title: "Smart Translator",
      description: "Instant translation between 100+ languages with voice support",
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      color: "bg-orange-500",
      hasVoice: true,
      hasAudio: true
    }
  ];

  const learningTopics = [
    { title: "Health & Medicine", color: "bg-red-100 text-red-800", icon: "🏥" },
    { title: "Farming & Agriculture", color: "bg-green-100 text-green-800", icon: "🌱" },
    { title: "Job Skills", color: "bg-blue-100 text-blue-800", icon: "💼" },
    { title: "Financial Literacy", color: "bg-yellow-100 text-yellow-800", icon: "💰" },
    { title: "Technology Basics", color: "bg-purple-100 text-purple-800", icon: "📱" },
    { title: "Education", color: "bg-indigo-100 text-indigo-800", icon: "📚" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI for Everyone</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Breaking barriers through voice-first AI that speaks your language and understands your needs
          </p>
          
          {/* Main Voice Interface */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <VoiceButton size="lg" className="mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Start Speaking</h3>
              <p className="text-gray-600 mb-4">Ask anything in your language - AI will help you learn</p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-700 italic">
                  "How do I plant tomatoes?" • "What is diabetes?" • "How to write a resume?"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              color={feature.color}
              hasAudio={feature.hasAudio}
              hasVoice={feature.hasVoice}
            />
          ))}
        </div>

        {/* Visual Learning Modules */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Learn by Talking</h3>
            <p className="text-gray-600">Choose a topic and start learning through conversation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {learningTopics.map((topic, index) => (
              <div
                key={index}
                className={`${topic.color} rounded-xl p-4 text-center cursor-pointer hover:scale-105 transition-transform duration-200`}
              >
                <div className="text-3xl mb-2">{topic.icon}</div>
                <h4 className="font-semibold text-sm">{topic.title}</h4>
                <Button size="sm" className="mt-2 text-xs" variant="outline">
                  <Volume2 className="h-3 w-3 mr-1" />
                  Talk
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">See AI in Action</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Watch how AI helps real people learn new skills through voice and visual guidance
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-2">
                    <Mic className="h-5 w-5" />
                  </div>
                  <span>Speak naturally in any language</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-2">
                    <Eye className="h-5 w-5" />
                  </div>
                  <span>Learn through pictures and videos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-white bg-opacity-20 rounded-full p-2">
                    <Volume2 className="h-5 w-5" />
                  </div>
                  <span>Hear explanations in your language</span>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-bold mb-2">Try Now</h4>
                <p className="text-blue-100 mb-4">Upload a document or image</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Choose File
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIForEveryoneSection;
