
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from 'recharts';
import { TrendingUp, Users, Clock, Target, Filter, Calendar, Download } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const engagementData = [
    { date: '2024-01-01', sessions: 1240, duration: 185, satisfaction: 4.2 },
    { date: '2024-01-02', sessions: 1380, duration: 195, satisfaction: 4.3 },
    { date: '2024-01-03', sessions: 1520, duration: 205, satisfaction: 4.4 },
    { date: '2024-01-04', sessions: 1450, duration: 198, satisfaction: 4.3 },
    { date: '2024-01-05', sessions: 1680, duration: 220, satisfaction: 4.5 },
    { date: '2024-01-06', sessions: 1850, duration: 235, satisfaction: 4.6 },
    { date: '2024-01-07', sessions: 1920, duration: 245, satisfaction: 4.7 }
  ];

  const languageData = [
    { language: 'English', users: 45000, percentage: 42 },
    { language: 'Spanish', users: 28000, percentage: 26 },
    { language: 'Mandarin', users: 18000, percentage: 17 },
    { language: 'Hindi', users: 9000, percentage: 8 },
    { language: 'Arabic', users: 7000, percentage: 7 }
  ];

  const featureUsage = [
    { feature: 'Voice Learning', usage: 85, growth: 12 },
    { feature: 'AI Assistant', usage: 78, growth: 18 },
    { feature: 'Translation', usage: 65, growth: 8 },
    { feature: 'Text-to-Speech', usage: 58, growth: 15 },
    { feature: 'Document Scanner', usage: 42, growth: 22 }
  ];

  const metrics = [
    { title: "Daily Active Users", value: "87,432", change: "+15.3%", icon: <Users className="h-6 w-6" /> },
    { title: "Avg Session Duration", value: "8m 32s", change: "+2.1%", icon: <Clock className="h-6 w-6" /> },
    { title: "User Satisfaction", value: "4.6/5", change: "+0.2", icon: <Target className="h-6 w-6" /> },
    { title: "Feature Adoption", value: "73%", change: "+8.5%", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600">Deep insights into user behavior and platform performance</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md bg-white"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-600">
                  {metric.icon}
                </div>
                <span className="text-sm font-medium text-green-600">{metric.change}</span>
              </div>
              <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            </Card>
          ))}
        </div>

        {/* User Engagement Chart */}
        <Card className="p-6 mb-8 border-0 shadow-lg">
          <h3 className="text-lg font-semibold mb-4">User Engagement Trends</h3>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={engagementData}>
              <defs>
                <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="sessions" 
                stroke="#8884d8" 
                fillOpacity={1} 
                fill="url(#colorSessions)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Language Distribution */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Language Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={languageData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="language" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="users" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Satisfaction Scores */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">User Satisfaction Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={[3.5, 5]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="satisfaction" 
                  stroke="#ff7300" 
                  strokeWidth={3}
                  dot={{ fill: '#ff7300', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Feature Usage Analysis */}
        <Card className="p-6 border-0 shadow-lg">
          <h3 className="text-lg font-semibold mb-6">Feature Usage & Growth</h3>
          <div className="space-y-6">
            {featureUsage.map((feature, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{feature.feature}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-600">{feature.usage}% adoption</span>
                      <span className="text-sm font-medium text-green-600">+{feature.growth}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${feature.usage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Analytics;
