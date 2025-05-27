
import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VoiceButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onVoiceStart?: () => void;
  onVoiceStop?: () => void;
}

const VoiceButton = ({ size = 'md', className = '', onVoiceStart, onVoiceStop }: VoiceButtonProps) => {
  const [isListening, setIsListening] = useState(false);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  const iconSizes = {
    sm: 'h-5 w-5',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      onVoiceStop?.();
    } else {
      setIsListening(true);
      onVoiceStart?.();
    }
  };

  return (
    <Button
      onClick={toggleListening}
      className={`
        ${sizeClasses[size]} 
        rounded-full 
        transition-all 
        duration-300 
        ${isListening 
          ? 'bg-red-500 hover:bg-red-600 animate-pulse shadow-lg shadow-red-200' 
          : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-200'
        }
        ${className}
      `}
    >
      {isListening ? (
        <MicOff className={`${iconSizes[size]} text-white`} />
      ) : (
        <Mic className={`${iconSizes[size]} text-white`} />
      )}
    </Button>
  );
};

export default VoiceButton;
