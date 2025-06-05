
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Github, Instagram, Linkedin } from 'lucide-react';

const Index = () => {
  const [expandedDomain, setExpandedDomain] = useState<string | null>(null);
  const [expandedLanguage, setExpandedLanguage] = useState<string | null>(null);

  const domains = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      fresherFriendly: true,
      jobDemand: 'High',
      salaryRange: '₹3-8 LPA',
      timeToLearn: '4-6 Months',
      remoteFriendly: true,
      bestFor: 'Startups, Product Companies',
      languages: ['JavaScript', 'TypeScript', 'React', 'Vue'],
      howToLearn: [
        'Start with HTML, CSS, and JavaScript fundamentals',
        'Build responsive websites and interactive UIs',
        'Master modern frameworks like React or Vue'
      ],
      whereToLearn: [
        'YouTube: "Complete Web Development by CodeWithHarry"',
        'FreeCodeCamp Frontend Certification',
        'Roadmap.sh Frontend Developer Path'
      ]
    },
    {
      id: 'backend',
      name: 'Backend Development',
      fresherFriendly: true,
      jobDemand: 'High',
      salaryRange: '₹4-10 LPA',
      timeToLearn: '5-7 Months',
      remoteFriendly: true,
      bestFor: 'All Companies',
      languages: ['Node.js', 'Python', 'Java', 'Go'],
      howToLearn: [
        'Learn server-side programming fundamentals',
        'Understand databases and API design',
        'Master cloud services and deployment'
      ],
      whereToLearn: [
        'YouTube: "Backend Development by Hitesh Choudhary"',
        'FreeCodeCamp Backend Certification',
        'Roadmap.sh Backend Developer Path'
      ]
    },
    {
      id: 'datascience',
      name: 'Data Science',
      fresherFriendly: false,
      jobDemand: 'High',
      salaryRange: '₹5-15 LPA',
      timeToLearn: '8-12 Months',
      remoteFriendly: true,
      bestFor: 'MNCs, Tech Giants',
      languages: ['Python', 'R', 'SQL', 'Scala'],
      howToLearn: [
        'Master statistics and mathematics foundations',
        'Learn data manipulation and visualization',
        'Build ML models and analyze real datasets'
      ],
      whereToLearn: [
        'YouTube: "Data Science by Krish Naik"',
        'Kaggle Learn Courses',
        'Coursera Data Science Specializations'
      ]
    },
    {
      id: 'devops',
      name: 'DevOps',
      fresherFriendly: false,
      jobDemand: 'High',
      salaryRange: '₹6-18 LPA',
      timeToLearn: '6-10 Months',
      remoteFriendly: true,
      bestFor: 'All Companies',
      languages: ['Python', 'Bash', 'Go', 'YAML'],
      howToLearn: [
        'Understand Linux systems and networking',
        'Learn containerization and orchestration',
        'Master CI/CD pipelines and cloud platforms'
      ],
      whereToLearn: [
        'YouTube: "DevOps by Abhishek Veeramalla"',
        'KodeKloud DevOps Learning Path',
        'AWS/Azure Cloud Documentation'
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      fresherFriendly: true,
      jobDemand: 'High',
      salaryRange: '₹4-12 LPA',
      timeToLearn: '5-8 Months',
      remoteFriendly: true,
      bestFor: 'Startups, Product Companies',
      languages: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      howToLearn: [
        'Choose between native or cross-platform development',
        'Build user-friendly mobile interfaces',
        'Learn app store optimization and deployment'
      ],
      whereToLearn: [
        'YouTube: "Flutter by Reso Coder"',
        'React Native Documentation',
        'Udemy Mobile Development Courses'
      ]
    },
    {
      id: 'web3',
      name: 'Web3 & Blockchain',
      fresherFriendly: false,
      jobDemand: 'Average',
      salaryRange: '₹8-25 LPA',
      timeToLearn: '8-12 Months',
      remoteFriendly: true,
      bestFor: 'Startups, Crypto Companies',
      languages: ['Solidity', 'JavaScript', 'Rust', 'Python'],
      howToLearn: [
        'Understand blockchain fundamentals and cryptography',
        'Learn smart contract development',
        'Build DApps and understand DeFi protocols'
      ],
      whereToLearn: [
        'YouTube: "Blockchain by Dapp University"',
        'Ethereum.org Documentation',
        'Buildspace Web3 Projects'
      ]
    },
    {
      id: 'gamedev',
      name: 'Game Development',
      fresherFriendly: true,
      jobDemand: 'Average',
      salaryRange: '₹3-10 LPA',
      timeToLearn: '6-10 Months',
      remoteFriendly: true,
      bestFor: 'Gaming Studios, Indie',
      languages: ['C#', 'C++', 'JavaScript', 'Python'],
      howToLearn: [
        'Learn game engines like Unity or Unreal',
        'Understand game physics and graphics',
        'Build complete games and publish them'
      ],
      whereToLearn: [
        'YouTube: "Unity Game Development"',
        'Unity Learn Platform',
        'Gamedev.tv Courses'
      ]
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      fresherFriendly: false,
      jobDemand: 'High',
      salaryRange: '₹5-20 LPA',
      timeToLearn: '8-12 Months',
      remoteFriendly: true,
      bestFor: 'All Companies',
      languages: ['Python', 'C', 'Assembly', 'Bash'],
      howToLearn: [
        'Learn networking and system administration',
        'Understand common vulnerabilities and attacks',
        'Practice ethical hacking and penetration testing'
      ],
      whereToLearn: [
        'YouTube: "Cybersecurity by EC-Council"',
        'TryHackMe Learning Paths',
        'SANS Institute Resources'
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      fresherFriendly: false,
      jobDemand: 'High',
      salaryRange: '₹6-18 LPA',
      timeToLearn: '6-9 Months',
      remoteFriendly: true,
      bestFor: 'All Companies',
      languages: ['Python', 'Go', 'YAML', 'Terraform'],
      howToLearn: [
        'Master cloud platforms like AWS or Azure',
        'Learn infrastructure as code and automation',
        'Understand cloud architecture patterns'
      ],
      whereToLearn: [
        'YouTube: "AWS by Stephane Maarek"',
        'Cloud Provider Documentation',
        'A Cloud Guru Learning Paths'
      ]
    },
    {
      id: 'testing',
      name: 'Software Testing',
      fresherFriendly: true,
      jobDemand: 'High',
      salaryRange: '₹3-8 LPA',
      timeToLearn: '3-6 Months',
      remoteFriendly: true,
      bestFor: 'All Companies',
      languages: ['Java', 'Python', 'JavaScript', 'C#'],
      howToLearn: [
        'Learn manual testing fundamentals',
        'Master automation testing frameworks',
        'Understand performance and security testing'
      ],
      whereToLearn: [
        'YouTube: "Testing by Testing World"',
        'Selenium Documentation',
        'ISTQB Certification Materials'
      ]
    }
  ];

  const languages = [
    {
      id: 'javascript',
      name: 'JavaScript',
      domains: ['Frontend', 'Backend', 'Mobile', 'Game Dev'],
      description: 'The language of the web - powers both frontend and backend development'
    },
    {
      id: 'python',
      name: 'Python',
      domains: ['Backend', 'Data Science', 'DevOps', 'Security'],
      description: 'Versatile language perfect for beginners and experts alike'
    },
    {
      id: 'java',
      name: 'Java',
      domains: ['Backend', 'Mobile', 'Testing', 'Enterprise'],
      description: 'Enterprise-grade language with strong job market demand'
    },
    {
      id: 'cpp',
      name: 'C++',
      domains: ['Game Dev', 'System Programming', 'Competitive Programming'],
      description: 'High-performance language for system-level programming'
    },
    {
      id: 'golang',
      name: 'Go',
      domains: ['Backend', 'DevOps', 'Cloud', 'Microservices'],
      description: 'Modern language designed for scalable backend systems'
    }
  ];

  const dsaSteps = [
    {
      step: 1,
      title: 'What is DSA?',
      description: 'Data Structures and Algorithms - the foundation of computer science and coding interviews',
      timeframe: 'Week 1'
    },
    {
      step: 2,
      title: 'Big O Notation',
      description: 'Understand time and space complexity to analyze algorithm efficiency',
      timeframe: 'Week 1-2'
    },
    {
      step: 3,
      title: 'Arrays & Strings',
      description: 'Master the most fundamental data structures used in programming',
      timeframe: 'Week 2-4'
    },
    {
      step: 4,
      title: 'Recursion Basics',
      description: 'Learn to solve problems by breaking them into smaller subproblems',
      timeframe: 'Week 5-6'
    },
    {
      step: 5,
      title: 'HashMap & HashSet',
      description: 'Efficient data structures for fast lookups and unique collections',
      timeframe: 'Week 7-8'
    },
    {
      step: 6,
      title: 'Stack & Queue',
      description: 'LIFO and FIFO data structures essential for many algorithms',
      timeframe: 'Week 9-10'
    },
    {
      step: 7,
      title: 'Two Pointers & Sliding Window',
      description: 'Powerful techniques for solving array and string problems efficiently',
      timeframe: 'Week 11-12'
    },
    {
      step: 8,
      title: 'Trees & Graphs',
      description: 'Advanced data structures for hierarchical and network data',
      timeframe: 'Week 13-16'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Confused What to Learn in Tech?
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Start Your Yatra Here 🚀
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized paths based on your interests. Whether you're a student or a working pro — we got you.
          </p>
          <Button 
            onClick={() => scrollToSection('domains')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            Start Exploring <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Section 1: Explore by Domain */}
      <section id="domains" className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Explore by Domain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((domain) => (
              <Card 
                key={domain.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedDomain === domain.id ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setExpandedDomain(expandedDomain === domain.id ? null : domain.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-blue-600">{domain.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Fresher Friendly:</span>
                      <Badge variant={domain.fresherFriendly ? "default" : "secondary"}>
                        {domain.fresherFriendly ? "Yes" : "No"}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Job Demand:</span>
                      <Badge variant={domain.jobDemand === 'High' ? "default" : "secondary"}>
                        {domain.jobDemand}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Salary Range:</span>
                      <span className="text-sm font-semibold">{domain.salaryRange}</span>
                    </div>
                  </div>

                  {expandedDomain === domain.id && (
                    <div className="mt-6 pt-4 border-t space-y-4 animate-fade-in">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Time to Learn:</h4>
                        <p className="text-sm text-gray-600">{domain.timeToLearn}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Remote Friendly:</h4>
                        <Badge variant={domain.remoteFriendly ? "default" : "secondary"}>
                          {domain.remoteFriendly ? "Yes" : "No"}
                        </Badge>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Best for:</h4>
                        <p className="text-sm text-gray-600">{domain.bestFor}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Key Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {domain.languages.map((lang) => (
                            <Badge key={lang} variant="outline" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">How to Learn:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {domain.howToLearn.map((step, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Where to Learn:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {domain.whereToLearn.map((resource, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
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
      </section>

      {/* Section 2: Explore by Language */}
      <section id="languages" className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Explore by Language
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language) => (
              <Card 
                key={language.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedLanguage === language.id ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setExpandedLanguage(expandedLanguage === language.id ? null : language.id)}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-purple-600">{language.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{language.description}</p>
                  
                  <div>
                    <span className="text-sm font-semibold text-gray-800">Domains:</span>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {language.domains.map((domain) => (
                        <Badge key={domain} variant="outline" className="text-xs">
                          {domain}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {expandedLanguage === language.id && (
                    <div className="mt-6 pt-4 border-t animate-fade-in">
                      <p className="text-sm text-gray-600">
                        Click on any domain above to explore career paths, salary ranges, and learning resources specific to {language.name}.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: DSA Path */}
      <section id="dsa" className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            DSA Learning Path
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Master Data Structures & Algorithms for coding interviews and better programming
          </p>

          <div className="space-y-6">
            {dsaSteps.map((step, index) => (
              <Card key={step.step} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                        <Badge variant="outline" className="text-xs mt-1 md:mt-0">
                          {step.timeframe}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Connecting line */}
                  {index < dsaSteps.length - 1 && (
                    <div className="absolute left-9 top-16 w-0.5 h-6 bg-gradient-to-b from-blue-300 to-purple-300"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 DSA Tips & Tricks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Daily Practice:</h4>
                  <ul className="space-y-1">
                    <li>• Solve 1 question daily minimum</li>
                    <li>• Use Leetcode Patterns Sheet</li>
                    <li>• Don't start with Hard questions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Learning Resources:</h4>
                  <ul className="space-y-1">
                    <li>• YouTube: "DSA by Love Babbar"</li>
                    <li>• YouTube: "DSA by Striver"</li>
                    <li>• Practice: LeetCode, HackerRank</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">TechYatra</h3>
            <p className="text-gray-400">Your roadmap to mastering tech, made for Bharat</p>
          </div>
          
          <p className="text-gray-400 mb-6">
            Built with ❤️ by The Boring Education
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://instagram.com/theboringfounder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/imsks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/imsks" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
          
          <div className="text-sm text-gray-400 space-y-2">
            <p>
              🌐 Website: <a href="https://theboringeducation.com" className="text-blue-400 hover:text-blue-300">theboringeducation.com</a>
            </p>
            <p>
              📸 Instagram: <a href="https://instagram.com/theboringfounder" className="text-blue-400 hover:text-blue-300">@theboringfounder</a>
            </p>
            <p>
              🔗 LinkedIn: <a href="https://linkedin.com/in/imsks" className="text-blue-400 hover:text-blue-300">imsks</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg md:hidden">
        <div className="flex justify-around py-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection('domains')}
            className="flex flex-col items-center px-2"
          >
            <BookOpen size={16} />
            <span className="text-xs">Domains</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection('languages')}
            className="flex flex-col items-center px-2"
          >
            <span className="text-sm">{ }</span>
            <span className="text-xs">Languages</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => scrollToSection('dsa')}
            className="flex flex-col items-center px-2"
          >
            <span className="text-sm">🧠</span>
            <span className="text-xs">DSA</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
