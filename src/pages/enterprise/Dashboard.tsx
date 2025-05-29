
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Users, TrendingUp, Globe, Shield, Download, Settings } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: "Active Users", value: "125,430", change: "+12%", icon: <Users className="h-8 w-8" /> },
    { title: "Revenue", value: "$2.4M", change: "+18%", icon: <TrendingUp className="h-8 w-8" /> },
    { title: "Global Reach", value: "45 Countries", change: "+3", icon: <Globe className="h-8 w-8" /> },
    { title: "Uptime", value: "99.9%", change: "Stable", icon: <Shield className="h-8 w-8" /> }
  ];

  const userGrowthData = [
    { month: 'Jan', users: 45000 },
    { month: 'Feb', users: 52000 },
    { month: 'Mar', users: 61000 },
    { month: 'Apr', users: 78000 },
    { month: 'May', users: 95000 },
    { month: 'Jun', users: 125430 }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 180000 },
    { month: 'Feb', revenue: 220000 },
    { month: 'Mar', revenue: 285000 },
    { month: 'Apr', revenue: 340000 },
    { month: 'May', revenue: 410000 },
    { month: 'Jun', revenue: 485000 }
  ];

  const regionData = [
    { name: 'North America', value: 35, color: '#8884d8' },
    { name: 'Europe', value: 28, color: '#82ca9d' },
    { name: 'Asia Pacific', value: 25, color: '#ffc658' },
    { name: 'Latin America', value: 8, color: '#ff7300' },
    { name: 'Others', value: 4, color: '#00ff88' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Enterprise Dashboard</h1>
            <p className="text-gray-600">Monitor your global AI deployment and user engagement</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                </div>
                <div className="text-blue-600">
                  {stat.icon}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* User Growth Chart */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Revenue Chart */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Revenue Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="revenue" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Regional Distribution */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Regional Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: "New user registration spike", time: "2 hours ago", type: "success" },
                { action: "Server maintenance completed", time: "4 hours ago", type: "info" },
                { action: "Security audit passed", time: "1 day ago", type: "success" },
                { action: "New feature deployed", time: "2 days ago", type: "info" },
                { action: "Performance optimization", time: "3 days ago", type: "success" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${activity.type === 'success' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6 border-0 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                Deploy New Model
              </Button>
              <Button className="w-full justify-start" variant="outline">
                User Management
              </Button>
              <Button className="w-full justify-start" variant="outline">
                API Configuration
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Security Settings
              </Button>
              <Button className="w-full justify-start" variant="outline">
                Billing & Usage
              </Button>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
