
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Send, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LiveChat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'support', text: 'Hello! How can I help you today?' }
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, { sender: 'user', text: message }]);
      setMessage('');
      // Simulate support response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { sender: 'support', text: 'Thank you for your message. A support agent will assist you shortly.' }]);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/support">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Help Center
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <MessageCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Live Chat Support</h1>
          <p className="text-gray-600">Get instant help from our support team</p>
        </div>
        
        <Card className="h-96 flex flex-col">
          <div className="flex-1 p-4 overflow-y-auto">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`mb-4 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <div className={`inline-block p-3 rounded-lg max-w-xs ${
                  msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t flex space-x-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1"
            />
            <Button onClick={sendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default LiveChat;
