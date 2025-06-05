
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DomainSection = () => {
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);

  const domains = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      beginnerFriendly: true,
      jobDemand: 'High',
      salaryRange: '₹3-12 LPA',
      timeToLearn: '4-6 Months',
      remoteFriendly: true,
      companyTypes: ['Startups', 'Product Companies', 'Service Companies', 'E-commerce'],
      languages: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Angular', 'Svelte'],
      gradient: 'from-blue-500 to-cyan-500',
      howToLearn: [
        'Start with HTML, CSS, and JavaScript fundamentals',
        'Build responsive websites and interactive UIs',
        'Master modern frameworks like React or Vue',
        'Learn state management and API integration'
      ],
      whereToLearn: [
        'YouTube: "Complete Web Development by CodeWithHarry"',
        'FreeCodeCamp Frontend Certification',
        'Roadmap.sh Frontend Developer Path',
        'MDN Web Docs for references'
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      beginnerFriendly: true,
      jobDemand: 'High',
      salaryRange: '₹4-15 LPA',
      timeToLearn: '5-8 Months',
      remoteFriendly: true,
      companyTypes: ['All Companies', 'Tech Giants', 'Fintech', 'Healthcare'],
      languages: ['Node.js', 'Python', 'Java', 'Go', 'C#', 'PHP'],
      gradient: 'from-purple-500 to-pink-500',
      howToLearn: [
        'Learn server-side programming fundamentals',
        'Understand databases and API design',
        'Master cloud services and deployment',
        'Practice system design concepts'
      ],
      whereToLearn: [
        'YouTube: "Backend Development by Hitesh Choudhary"',
        'FreeCodeCamp Backend Certification',
        'Roadmap.sh Backend Developer Path',
        'AWS/Azure Documentation'
      ]
    },
    {
      id: 'datascience',
      name: 'Data Science',
      beginnerFriendly: false,
      jobDemand: 'High',
      salaryRange: '₹6-25 LPA',
      timeToLearn: '8-12 Months',
      remoteFriendly: true,
      companyTypes: ['MNCs', 'Tech Giants', 'Analytics Companies', 'Research Labs'],
      languages: ['Python', 'R', 'SQL', 'Scala', 'Julia', 'MATLAB'],
      gradient: 'from-green-500 to-emerald-500',
      howToLearn: [
        'Master statistics and mathematics foundations',
        'Learn data manipulation and visualization',
        'Build ML models and analyze real datasets',
        'Practice with real-world projects'
      ],
      whereToLearn: [
        'YouTube: "Data Science by Krish Naik"',
        'Kaggle Learn Courses',
        'Coursera Data Science Specializations',
        'Fast.ai Practical Deep Learning'
      ]
    },
    {
      id: 'devops',
      name: 'DevOps Engineering',
      beginnerFriendly: false,
      jobDemand: 'Very High',
      salaryRange: '₹6-20 LPA',
      timeToLearn: '6-10 Months',
      remoteFriendly: true,
      companyTypes: ['All Companies', 'Cloud Companies', 'Enterprises', 'Startups'],
      languages: ['Python', 'Bash', 'Go', 'YAML', 'PowerShell', 'Terraform'],
      gradient: 'from-orange-500 to-red-500',
      howToLearn: [
        'Understand Linux systems and networking',
        'Learn containerization and orchestration',
        'Master CI/CD pipelines and cloud platforms',
        'Practice infrastructure as code'
      ],
      whereToLearn: [
        'YouTube: "DevOps by Abhishek Veeramalla"',
        'KodeKloud DevOps Learning Path',
        'AWS/Azure Cloud Documentation',
        'Docker and Kubernetes Official Docs'
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      beginnerFriendly: true,
      jobDemand: 'High',
      salaryRange: '₹4-16 LPA',
      timeToLearn: '5-8 Months',
      remoteFriendly: true,
      companyTypes: ['Startups', 'Product Companies', 'Gaming Companies', 'E-commerce'],
      languages: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java', 'Dart'],
      gradient: 'from-indigo-500 to-purple-500',
      howToLearn: [
        'Choose between native or cross-platform development',
        'Build user-friendly mobile interfaces',
        'Learn app store optimization and deployment',
        'Understand mobile-specific patterns'
      ],
      whereToLearn: [
        'YouTube: "Flutter by Reso Coder"',
        'React Native Documentation',
        'Udemy Mobile Development Courses',
        'Official iOS/Android Developer Guides'
      ]
    },
    {
      id: 'web3',
      name: 'Web3 & Blockchain',
      beginnerFriendly: false,
      jobDemand: 'Average',
      salaryRange: '₹8-30 LPA',
      timeToLearn: '8-15 Months',
      remoteFriendly: true,
      companyTypes: ['Startups', 'Crypto Companies', 'DeFi Protocols', 'NFT Platforms'],
      languages: ['Solidity', 'JavaScript', 'Rust', 'Python', 'Go', 'Web3.js'],
      gradient: 'from-yellow-500 to-orange-500',
      howToLearn: [
        'Understand blockchain fundamentals and cryptography',
        'Learn smart contract development',
        'Build DApps and understand DeFi protocols',
        'Practice with testnets and real deployments'
      ],
      whereToLearn: [
        'YouTube: "Blockchain by Dapp University"',
        'Ethereum.org Documentation',
        'Buildspace Web3 Projects',
        'Solidity Documentation'
      ]
    }
  ];

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
          Explore by Domain
        </h3>
        <p className="text-gray-600 text-lg">
          Timeline based on <span className="font-semibold text-blue-600">2-3 hours of daily learning</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((domain) => (
          <Card 
            key={domain.id} 
            className={`cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border-0 shadow-lg ${
              expandedDomain === domain.id ? 'ring-2 ring-purple-400 shadow-2xl scale-[1.02]' : ''
            }`}
            onClick={() => setExpandedDomain(expandedDomain === domain.id ? null : domain.id)}
          >
            <CardHeader className="pb-3">
              <CardTitle className={`text-lg font-bold bg-gradient-to-r ${domain.gradient} bg-clip-text text-transparent`}>
                {domain.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Beginner Friendly:</span>
                  <Badge variant={domain.beginnerFriendly ? "default" : "secondary"} className="font-medium">
                    {domain.beginnerFriendly ? "Yes" : "No"}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Job Demand:</span>
                  <Badge variant={domain.jobDemand === 'High' || domain.jobDemand === 'Very High' ? "default" : "secondary"} className="font-medium">
                    {domain.jobDemand}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Salary Range:</span>
                  <span className="text-sm font-bold text-green-600">{domain.salaryRange}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Time to Learn:</span>
                  <span className="text-sm font-bold text-blue-600">{domain.timeToLearn}</span>
                </div>
              </div>

              {expandedDomain === domain.id && (
                <div className="mt-6 pt-4 border-t border-gray-200 space-y-5 animate-fade-in">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
                      Remote Friendly:
                    </h4>
                    <Badge variant={domain.remoteFriendly ? "default" : "secondary"} className="font-medium">
                      {domain.remoteFriendly ? "Yes" : "No"}
                    </Badge>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-2"></span>
                      Company Types:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {domain.companyTypes.map((type) => (
                        <Badge key={type} variant="outline" className="text-xs font-medium">
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2"></span>
                      Key Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {domain.languages.map((lang) => (
                        <Badge key={lang} variant="outline" className="text-xs font-medium bg-gradient-to-r from-gray-50 to-gray-100">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-2"></span>
                      How to Learn:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {domain.howToLearn.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 mr-2 text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-2"></span>
                      Where to Learn:
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {domain.whereToLearn.map((resource, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DomainSection;
