
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import DomainSection from './DomainSection';
import LanguageSection from './LanguageSection';
import DSASection from './DSASection';

const TabSection = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const tabs = [
    { 
      id: 'domains', 
      label: 'Explore by Domain', 
      description: 'Choose your career path',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      id: 'languages', 
      label: 'Explore by Language', 
      description: 'Pick your coding language',
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      id: 'dsa', 
      label: 'DSA Learning Path', 
      description: 'Master problem solving',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="px-4 py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select any option below to start your personalized tech journey
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(activeTab === tab.id ? null : tab.id)}
              className={`group relative px-8 py-6 text-left h-auto flex-col items-start transition-all duration-500 transform hover:scale-105 ${
                activeTab === tab.id
                  ? `bg-gradient-to-r ${tab.gradient} text-white shadow-2xl scale-105`
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white border border-gray-200/50 shadow-lg'
              }`}
            >
              <span className="font-bold text-xl mb-1">{tab.label}</span>
              <span className="text-sm opacity-90">{tab.description}</span>
              {activeTab === tab.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-md"></div>
              )}
            </Button>
          ))}
        </div>

        {/* Tab Content with smooth transitions */}
        <div className="min-h-[400px]">
          {activeTab === 'domains' && (
            <div className="animate-fade-in">
              <DomainSection />
            </div>
          )}
          {activeTab === 'languages' && (
            <div className="animate-fade-in">
              <LanguageSection />
            </div>
          )}
          {activeTab === 'dsa' && (
            <div className="animate-fade-in">
              <DSASection />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TabSection;
