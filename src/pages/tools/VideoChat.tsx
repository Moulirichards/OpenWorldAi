
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Video, VideoOff, Mic, MicOff, Phone, Settings, Users, MessageCircle } from 'lucide-react';

const VideoChat = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isInCall, setIsInCall] = useState(false);

  const participants = [
    { name: "You", avatar: "photo-1472099645785-5658abf4ff4e" },
    { name: "Sarah Chen", avatar: "photo-1494790108755-2616b6b2082e" },
    { name: "Ahmed Hassan", avatar: "photo-1507003211169-0a1dd7228f2d" },
    { name: "Maria Rodriguez", avatar: "photo-1520813792240-56fc4a3765a7" }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Video Chat</h1>
          <p className="text-gray-300">Connect with people worldwide through high-quality video calls</p>
        </div>

        {!isInCall ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Start Call Section */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-gray-800 border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-6">Start a New Call</h2>
                <div className="space-y-4 mb-6">
                  <input 
                    type="text" 
                    placeholder="Enter meeting ID or participant email"
                    className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex gap-4">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => setIsInCall(true)}>
                      <Video className="h-4 w-4 mr-2" />
                      Start Video Call
                    </Button>
                    <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Audio Only
                    </Button>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      Join Meeting
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                      Schedule Call
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Contacts */}
            <div>
              <Card className="p-6 bg-gray-800 border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Contacts</h3>
                <div className="space-y-3">
                  {participants.slice(1).map((participant, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-700 rounded-lg cursor-pointer">
                      <img
                        src={`https://images.unsplash.com/${participant.avatar}?auto=format&fit=crop&w=40&q=80`}
                        alt={participant.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-white font-medium">{participant.name}</p>
                        <p className="text-gray-400 text-sm">Available</p>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Video className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        ) : (
          /* Video Call Interface */
          <div className="relative h-[600px] bg-black rounded-2xl overflow-hidden">
            {/* Main Video */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
              <div className="text-center text-white">
                <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-xl">Video Call in Progress</p>
              </div>
            </div>

            {/* Participants Grid */}
            <div className="absolute top-4 right-4 space-y-2">
              {participants.map((participant, index) => (
                <div key={index} className="w-32 h-24 bg-gray-800 rounded-lg relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${participant.avatar}?auto=format&fit=crop&w=128&q=80`}
                    alt={participant.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {participant.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
              <Button
                variant={isMicOn ? "default" : "destructive"}
                size="lg"
                className="rounded-full w-14 h-14"
                onClick={() => setIsMicOn(!isMicOn)}
              >
                {isMicOn ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
              </Button>
              
              <Button
                variant={isVideoOn ? "default" : "destructive"}
                size="lg"
                className="rounded-full w-14 h-14"
                onClick={() => setIsVideoOn(!isVideoOn)}
              >
                {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
              </Button>
              
              <Button
                variant="destructive"
                size="lg"
                className="rounded-full w-14 h-14"
                onClick={() => setIsInCall(false)}
              >
                <Phone className="h-6 w-6 rotate-135" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-14 h-14 border-gray-600"
              >
                <MessageCircle className="h-6 w-6" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-14 h-14 border-gray-600"
              >
                <Settings className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default VideoChat;
