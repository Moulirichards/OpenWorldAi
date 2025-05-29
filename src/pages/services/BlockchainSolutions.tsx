
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Link, Shield, TrendingUp, Zap, Globe } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

const BlockchainSolutions = () => {
  const blockchainServices = [
    {
      title: "Smart Contract Development",
      description: "Custom smart contracts for automated business processes",
      icon: <Zap className="h-8 w-8" />,
      features: ["Ethereum", "Solana", "Polygon", "Automated execution"]
    },
    {
      title: "DeFi Applications",
      description: "Decentralized finance solutions for modern banking",
      icon: <TrendingUp className="h-8 w-8" />,
      features: ["Lending platforms", "DEX integration", "Yield farming", "Staking pools"]
    },
    {
      title: "NFT Marketplace",
      description: "Complete NFT ecosystem development and deployment",
      icon: <Link className="h-8 w-8" />,
      features: ["Minting platform", "Trading interface", "Royalty system", "Multi-chain support"]
    },
    {
      title: "Blockchain Security",
      description: "Comprehensive security audits and vulnerability assessments",
      icon: <Shield className="h-8 w-8" />,
      features: ["Smart contract audits", "Penetration testing", "Risk assessment", "Compliance"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <RouterLink to="/services">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Button>
        </RouterLink>
        
        <div className="text-center mb-12">
          <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Blockchain Solutions</h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            Build the future with decentralized applications, smart contracts, and blockchain infrastructure
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blockchainServices.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow border-0 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Get Quote
              </Button>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for Web3?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the blockchain revolution with our expert development team
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold">
            Start Your Blockchain Project
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlockchainSolutions;
