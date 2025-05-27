
import React from 'react';
import { Play, ArrowUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  hasAudio?: boolean;
  hasVoice?: boolean;
  onClick?: () => void;
}

const FeatureCard = ({ title, description, icon, color, hasAudio = false, hasVoice = false, onClick }: FeatureCardProps) => {
  return (
    <Card className="p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group border-0 shadow-lg" onClick={onClick}>
      <div className="flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div className={`p-4 rounded-full ${color} group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center space-x-2 mt-4">
          {hasAudio && (
            <Button size="sm" variant="outline" className="rounded-full">
              <Play className="h-4 w-4 mr-1" />
              Listen
            </Button>
          )}
          {hasVoice && (
            <Button size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700">
              <ArrowUp className="h-4 w-4 mr-1" />
              Speak
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;
