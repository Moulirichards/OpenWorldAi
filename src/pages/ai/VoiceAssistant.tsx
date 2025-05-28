
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VoiceButton from '@/components/VoiceButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/assistant">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to AI Assistant
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <Mic className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Voice Assistant</h1>
          <p className="text-gray-600">Speak naturally and get instant responses</p>
        </div>
        
        <Card className="p-8 text-center">
          <VoiceButton size="lg" className="mb-6" />
          <h2 className="text-2xl font-bold mb-4">Voice Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <h3 className="font-bold mb-2">Basic Commands:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• "What's the weather?"</li>
                <li>• "Set a reminder"</li>
                <li>• "Tell me a joke"</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-2">Learning Commands:</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• "Start a lesson"</li>
                <li>• "Help with technology"</li>
                <li>• "Practice English"</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default VoiceAssistant;
