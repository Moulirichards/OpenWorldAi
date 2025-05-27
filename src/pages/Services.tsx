
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Cloud, Cpu, Shield, Database, Smartphone, Globe, Zap, Users, Code, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const mainServices = [
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions, chatbots, and intelligent automation for your business",
      icon: <Cpu className="h-12 w-12" />,
      features: ["Custom AI Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      color: "bg-blue-600"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions, migration services, and infrastructure management",
      icon: <Cloud className="h-12 w-12" />,
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps Automation", "Monitoring & Security"],
      color: "bg-purple-600"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="h-12 w-12" />,
      features: ["React Native", "Flutter", "Native Development", "UI/UX Design"],
      color: "bg-green-600"
    },
    {
      title: "Web Development",
      description: "Modern web applications using latest technologies and frameworks",
      icon: <Code className="h-12 w-12" />,
      features: ["React/Angular/Vue", "Node.js/Python", "E-commerce Solutions", "CMS Development"],
      color: "bg-orange-600"
    }
  ];

  const additionalServices = [
    { title: "DevOps & Automation", icon: <Zap className="h-8 w-8" />, color: "bg-yellow-500" },
    { title: "Cybersecurity", icon: <Shield className="h-8 w-8" />, color: "bg-red-500" },
    { title: "Data Analytics", icon: <Database className="h-8 w-8" />, color: "bg-indigo-500" },
    { title: "Global Consulting", icon: <Globe className="h-8 w-8" />, color: "bg-teal-500" },
    { title: "Team Augmentation", icon: <Users className="h-8 w-8" />, color: "bg-pink-500" },
    { title: "Project Management", icon: <Briefcase className="h-8 w-8" />, color: "bg-cyan-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Global IT Services</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions delivered by our international team of experts
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-full">
            Get Free Consultation
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Core Services</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                <div className={`${service.color} text-white p-8`}>
                  <div className="flex items-center mb-4">
                    {service.icon}
                    <h3 className="text-2xl font-bold ml-4">{service.title}</h3>
                  </div>
                  <p className="text-blue-100 text-lg">{service.description}</p>
                </div>
                <div className="p-8">
                  <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Learn More
                    </Button>
                    <Button variant="outline" className="w-full">
                      Request Quote
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Services Grid */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className={`${service.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3`}>
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-900 text-sm">{service.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", desc: "Understanding your business needs and challenges" },
              { step: "2", title: "Planning", desc: "Creating detailed project roadmap and timeline" },
              { step: "3", title: "Development", desc: "Building your solution with agile methodology" },
              { step: "4", title: "Support", desc: "Ongoing maintenance and optimization" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation with our experts and discover how we can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg rounded-full">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
