
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, Send, Bot, User } from 'lucide-react';

const Assistant = () => {
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! I\'m your AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', text: input }]);
      setInput('');
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: 'Thank you for your message. I\'m processing your request...' }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">AI Assistant</h1>
        
        <Card className="h-96 p-6 mb-6">
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-start space-x-3 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                  {msg.type === 'bot' && <Bot className="h-6 w-6 text-blue-600 mt-1" />}
                  <div className={`p-3 rounded-lg max-w-xs ${msg.type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
                    {msg.text}
                  </div>
                  {msg.type === 'user' && <User className="h-6 w-6 text-gray-600 mt-1" />}
                </div>
              ))}
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 p-3 border rounded-lg"
              />
              <Button onClick={handleSend}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center">
            <h3 className="font-bold mb-2">Quick Help</h3>
            <p className="text-gray-600 mb-4">Get instant answers to common questions</p>
            <Button variant="outline">Start Chat</Button>
          </Card>
          
          <Card className="p-6 text-center">
            <h3 className="font-bold mb-2">Voice Chat</h3>
            <p className="text-gray-600 mb-4">Speak directly with AI assistant</p>
            <Button variant="outline">Voice Mode</Button>
          </Card>
          
          <Card className="p-6 text-center">
            <h3 className="font-bold mb-2">Help Center</h3>
            <p className="text-gray-600 mb-4">Browse frequently asked questions</p>
            <Button variant="outline">View FAQ</Button>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Assistant;
