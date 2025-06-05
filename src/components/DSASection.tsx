
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const DSASection = () => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [showPreparation, setShowPreparation] = useState(false);

  const goals = [
    {
      id: 'faang',
      name: 'FAANG/Top Tech',
      description: 'Google, Meta, Amazon, Apple, Netflix',
      gradient: 'from-red-500 to-pink-500',
      duration: '6-12 Months',
      difficulty: 'Hard'
    },
    {
      id: 'mnc',
      name: 'MNCs',
      description: 'Microsoft, Oracle, Adobe, SAP',
      gradient: 'from-blue-500 to-cyan-500',
      duration: '4-8 Months',
      difficulty: 'Medium-Hard'
    },
    {
      id: 'startup',
      name: 'Startups',
      description: 'Fast-growing companies, Product-based',
      gradient: 'from-green-500 to-emerald-500',
      duration: '3-6 Months',
      difficulty: 'Medium'
    }
  ];

  const preparationSteps = [
    {
      step: 1,
      title: 'Master the Fundamentals',
      description: 'Start with basic programming concepts and time/space complexity',
      duration: 'Week 1-2',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      step: 2,
      title: 'Learn Data Structures',
      description: 'Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hash Tables',
      duration: 'Week 3-6',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      step: 3,
      title: 'Study Algorithms',
      description: 'Sorting, Searching, Recursion, Dynamic Programming, Greedy',
      duration: 'Week 7-10',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      step: 4,
      title: 'Practice Patterns',
      description: 'Two Pointers, Sliding Window, Fast/Slow Pointers, BFS/DFS',
      duration: 'Week 11-14',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      step: 5,
      title: 'Solve Problems Daily',
      description: 'Start with Easy, move to Medium, then Hard problems',
      duration: 'Ongoing',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      step: 6,
      title: 'Mock Interviews',
      description: 'Practice with peers, use platforms like Pramp, InterviewBit',
      duration: 'Final Month',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const topicsByGoal = {
    faang: [
      {
        category: 'Data Structures',
        topics: ['Arrays & Strings', 'Hash Tables', 'Trees & Graphs', 'Heaps', 'Tries'],
        questions: [
          { name: 'Two Sum', level: 'Easy', pattern: 'Hash Table' },
          { name: 'Valid Parentheses', level: 'Easy', pattern: 'Stack' },
          { name: 'Binary Tree Level Order', level: 'Medium', pattern: 'BFS' },
          { name: 'Course Schedule', level: 'Medium', pattern: 'Topological Sort' },
          { name: 'Word Ladder', level: 'Hard', pattern: 'BFS/Graph' }
        ]
      },
      {
        category: 'Algorithms',
        topics: ['Dynamic Programming', 'Graph Algorithms', 'Advanced Trees', 'System Design'],
        questions: [
          { name: 'Climbing Stairs', level: 'Easy', pattern: 'DP' },
          { name: 'Coin Change', level: 'Medium', pattern: 'DP' },
          { name: 'Number of Islands', level: 'Medium', pattern: 'DFS/BFS' },
          { name: 'LRU Cache', level: 'Medium', pattern: 'Design' },
          { name: 'Serialize Binary Tree', level: 'Hard', pattern: 'Tree/Design' }
        ]
      }
    ],
    mnc: [
      {
        category: 'Data Structures',
        topics: ['Arrays & Strings', 'Linked Lists', 'Trees', 'Hash Tables', 'Stacks & Queues'],
        questions: [
          { name: 'Reverse Linked List', level: 'Easy', pattern: 'Linked List' },
          { name: 'Valid Anagram', level: 'Easy', pattern: 'Hash Table' },
          { name: 'Maximum Subarray', level: 'Easy', pattern: 'Array' },
          { name: 'Binary Tree Inorder', level: 'Medium', pattern: 'Tree Traversal' },
          { name: 'Group Anagrams', level: 'Medium', pattern: 'Hash Table' }
        ]
      },
      {
        category: 'Algorithms',
        topics: ['Sorting & Searching', 'Basic DP', 'Recursion', 'Two Pointers'],
        questions: [
          { name: 'Binary Search', level: 'Easy', pattern: 'Binary Search' },
          { name: 'Merge Intervals', level: 'Medium', pattern: 'Intervals' },
          { name: 'House Robber', level: 'Medium', pattern: 'DP' },
          { name: 'Container With Most Water', level: 'Medium', pattern: 'Two Pointers' },
          { name: 'Search in Rotated Array', level: 'Medium', pattern: 'Binary Search' }
        ]
      }
    ],
    startup: [
      {
        category: 'Data Structures',
        topics: ['Arrays', 'Strings', 'Basic Trees', 'Hash Maps', 'Stacks'],
        questions: [
          { name: 'Contains Duplicate', level: 'Easy', pattern: 'Hash Set' },
          { name: 'Maximum Depth of Binary Tree', level: 'Easy', pattern: 'Tree/DFS' },
          { name: 'Best Time to Buy Stock', level: 'Easy', pattern: 'Array' },
          { name: 'Valid Palindrome', level: 'Easy', pattern: 'Two Pointers' },
          { name: 'Merge Two Sorted Lists', level: 'Easy', pattern: 'Linked List' }
        ]
      },
      {
        category: 'Algorithms',
        topics: ['Basic Sorting', 'Simple Recursion', 'Elementary DP', 'Pattern Matching'],
        questions: [
          { name: 'Fibonacci Number', level: 'Easy', pattern: 'DP/Recursion' },
          { name: 'First Bad Version', level: 'Easy', pattern: 'Binary Search' },
          { name: 'Min Stack', level: 'Easy', pattern: 'Stack Design' },
          { name: 'Palindrome Number', level: 'Easy', pattern: 'Math' },
          { name: 'Single Number', level: 'Easy', pattern: 'Bit Manipulation' }
        ]
      }
    ]
  };

  return (
    <div>
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
          DSA Learning Path
        </h3>
        <p className="text-gray-600 text-lg mb-6">
          Structured learning with <span className="font-semibold text-green-600">1 hour daily practice</span> and <span className="font-semibold text-blue-600">1-2 problem solving</span>
        </p>

        {/* Goal Selection */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-4">What's your target?</h4>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {goals.map((goal) => (
              <Button
                key={goal.id}
                onClick={() => setSelectedGoal(selectedGoal === goal.id ? null : goal.id)}
                className={`px-6 py-4 h-auto flex-col transition-all duration-300 ${
                  selectedGoal === goal.id
                    ? `bg-gradient-to-r ${goal.gradient} text-white shadow-xl scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-md'
                }`}
              >
                <span className="font-bold text-lg">{goal.name}</span>
                <span className="text-sm opacity-90">{goal.description}</span>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline" className={selectedGoal === goal.id ? "border-white text-white" : ""}>
                    {goal.duration}
                  </Badge>
                  <Badge variant="outline" className={selectedGoal === goal.id ? "border-white text-white" : ""}>
                    {goal.difficulty}
                  </Badge>
                </div>
              </Button>
            ))}
          </div>
        </div>

        {/* How to Prepare Section */}
        <div className="mb-8">
          <Button
            onClick={() => setShowPreparation(!showPreparation)}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 px-6 py-3"
          >
            {showPreparation ? 'Hide' : 'Show'} How to Prepare for DSA
          </Button>
        </div>
      </div>

      {/* Preparation Steps */}
      {showPreparation && (
        <div className="mb-12 animate-fade-in">
          <h4 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Step-by-Step DSA Preparation Guide
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preparationSteps.map((step, index) => (
              <Card key={step.step} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm mr-3`}>
                      {step.step}
                    </div>
                    <Badge variant="outline" className="text-xs">{step.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Goal-specific Topics */}
      {selectedGoal && (
        <div className="animate-fade-in">
          <h4 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {goals.find(g => g.id === selectedGoal)?.name} Preparation Roadmap
          </h4>
          
          <div className="space-y-8">
            {topicsByGoal[selectedGoal as keyof typeof topicsByGoal]?.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <CardTitle className="text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-800 mb-3">Topics to Cover:</h5>
                    <div className="flex flex-wrap gap-2">
                      {category.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-3">Top 5 Practice Questions:</h5>
                    <div className="space-y-2">
                      {category.questions.map((question, qIndex) => (
                        <div key={qIndex} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100">
                          <div>
                            <span className="font-medium text-gray-800">{question.name}</span>
                            <Badge variant="outline" className="ml-2 text-xs">
                              {question.pattern}
                            </Badge>
                          </div>
                          <Badge 
                            variant={question.level === 'Easy' ? 'default' : question.level === 'Medium' ? 'secondary' : 'destructive'}
                            className="text-xs"
                          >
                            {question.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Section */}
          <Card className="mt-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mr-2"></span>
                💡 Success Tips for {goals.find(g => g.id === selectedGoal)?.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Daily Practice:</h4>
                  <ul className="space-y-1">
                    <li>• Solve 1-2 problems daily (1 hour minimum)</li>
                    <li>• Focus on understanding, not just solving</li>
                    <li>• Review and optimize your solutions</li>
                    <li>• Track your progress in a spreadsheet</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Learning Resources:</h4>
                  <ul className="space-y-1">
                    <li>• YouTube: "DSA by Striver"</li>
                    <li>• YouTube: "DSA by Love Babbar"</li>
                    <li>• Practice: LeetCode, HackerRank</li>
                    <li>• Books: "Cracking the Coding Interview"</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default DSASection;
