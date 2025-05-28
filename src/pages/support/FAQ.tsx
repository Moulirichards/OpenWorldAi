
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button and follow the simple registration process."
    },
    {
      question: "Is the platform free to use?",
      answer: "Yes, we offer many free courses and features. Premium features are available with a subscription."
    },
    {
      question: "Can I access content offline?",
      answer: "Some content can be downloaded for offline viewing. Look for the download icon next to lessons."
    },
    {
      question: "How do I reset my password?",
      answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email."
    },
    {
      question: "Are certificates available?",
      answer: "Yes, you can earn certificates upon completing courses successfully."
    },
    {
      question: "How do I contact support?",
      answer: "Use the live chat feature, send an email, or visit our help center for assistance."
    }
  ];

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
          <HelpCircle className="h-16 w-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-600">Find answers to common questions</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
