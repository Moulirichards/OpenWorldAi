
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VoiceButton from '@/components/VoiceButton';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, Type, Globe } from 'lucide-react';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = () => {
    if (question.trim()) {
      setAnswer('Thank you for your question. AI is processing your request and will provide an answer shortly...');
    }
  };

  const sampleQuestions = [
    "How do I apply for a job?",
    "What is healthy food?",
    "How to save money?",
    "How to use internet safely?",
    "What is diabetes?",
    "How to write a resume?"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Ask AI Anything</h1>
        
        <Card className="p-8 mb-8">
          <div className="text-center mb-6">
            <VoiceButton size="lg" className="mb-4" />
            <h2 className="text-2xl font-bold mb-2">Speak Your Question</h2>
            <p className="text-gray-600">Press the button and ask in any language</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Or type your question:</label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Type your question here..."
                className="w-full p-3 border rounded-lg h-24 resize-none"
              />
            </div>
            
            <Button onClick={handleAsk} className="w-full">
              <Type className="h-4 w-4 mr-2" />
              Ask Question
            </Button>
          </div>
          
          {answer && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2">AI Answer:</h3>
              <p>{answer}</p>
            </div>
          )}
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold mb-4">Popular Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sampleQuestions.map((q, index) => (
              <button
                key={index}
                onClick={() => setQuestion(q)}
                className="text-left p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AskQuestion;
