
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VoiceButton from '@/components/VoiceButton';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [isVoiceEnabled, setIsVoiceEnabled] = useState(false);

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Market Street, San Francisco, CA 94102",
      phone: "+1 (555) 123-4567",
      email: "usa@openworldai.com",
      flag: "🇺🇸"
    },
    {
      city: "London",
      country: "UK",
      address: "456 Oxford Street, London W1A 1AB",
      phone: "+44 20 7946 0958",
      email: "uk@openworldai.com",
      flag: "🇬🇧"
    },
    {
      city: "Mumbai",
      country: "India",
      address: "789 Bandra Kurla Complex, Mumbai 400051",
      phone: "+91 22 6123 4567",
      email: "india@openworldai.com",
      flag: "🇮🇳"
    },
    {
      city: "São Paulo",
      country: "Brazil",
      address: "321 Avenida Paulista, São Paulo 01310-100",
      phone: "+55 11 3456 7890",
      email: "brazil@openworldai.com",
      flag: "🇧🇷"
    }
  ];

  const contactMethods = [
    {
      title: "Voice Support",
      description: "Speak with our AI assistant in your language",
      icon: <MessageCircle className="h-8 w-8" />,
      action: "Start Voice Chat",
      color: "bg-blue-500"
    },
    {
      title: "24/7 Help Center",
      description: "Get instant answers to common questions",
      icon: <Clock className="h-8 w-8" />,
      action: "Visit Help Center",
      color: "bg-green-500"
    },
    {
      title: "Enterprise Support",
      description: "Dedicated support for business customers",
      icon: <Phone className="h-8 w-8" />,
      action: "Contact Sales",
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're here to help you access AI technology in your language and on your terms
          </p>
          
          {/* Voice Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <VoiceButton size="lg" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Speak with Us Now</h3>
            <p className="text-blue-100">Press the button and tell us how we can help you</p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose Your Preferred Way to Connect</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className={`${method.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-6">{method.description}</p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  {method.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              {/* Voice Toggle */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Voice-Enabled Form</h3>
                    <p className="text-sm text-gray-600">Fill out the form by speaking</p>
                  </div>
                  <VoiceButton 
                    size="sm" 
                    onVoiceStart={() => setIsVoiceEnabled(true)}
                    onVoiceStop={() => setIsVoiceEnabled(false)}
                  />
                </div>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Your first name" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Your last name" className="w-full" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="What can we help you with?" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your question or how we can help..." 
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Language</label>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                    <option>English</option>
                    <option>Español</option>
                    <option>Français</option>
                    <option>हिंदी</option>
                    <option>العربية</option>
                    <option>中文</option>
                  </select>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Reach Us</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600">support@openworldai.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600">+1 (800) OPEN-AI</p>
                    <p className="text-sm text-gray-500">24/7 in 50+ languages</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-sm text-gray-500">All time zones supported</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-red-900 mb-2">Emergency Support</h3>
                <p className="text-red-700 text-sm mb-3">
                  For critical issues affecting accessibility or urgent support needs
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Emergency Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Global Offices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{office.flag}</div>
                  <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
                  <p className="text-gray-600">{office.country}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{office.email}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
