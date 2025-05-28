
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Award, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Achievements = () => {
  const achievements = [
    { title: "First Steps", desc: "Completed your first lesson", earned: true, icon: "🎯" },
    { title: "Tech Savvy", desc: "Completed Computer Basics", earned: true, icon: "💻" },
    { title: "Email Master", desc: "Sent your first email", earned: true, icon: "📧" },
    { title: "Safety First", desc: "Learned internet safety", earned: false, icon: "🛡️" },
    { title: "Social Butterfly", desc: "Joined social media safely", earned: false, icon: "🦋" },
    { title: "Week Warrior", desc: "Learned for 7 days straight", earned: false, icon: "⚡" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/profile">
          <Button variant="outline" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Profile
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Achievements</h1>
          <p className="text-gray-600">Celebrate your learning milestones</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className={`p-6 ${achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-100'}`}>
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className={`font-bold text-lg ${achievement.earned ? 'text-yellow-800' : 'text-gray-500'}`}>
                    {achievement.title}
                  </h3>
                  <p className={achievement.earned ? 'text-yellow-700' : 'text-gray-500'}>
                    {achievement.desc}
                  </p>
                </div>
                {achievement.earned && <Star className="h-6 w-6 text-yellow-600" />}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Achievements;
