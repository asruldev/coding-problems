import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ProblemView from './components/ProblemView';
import { problems } from './data/problems';

function App() {
  const [currentProblem, setCurrentProblem] = useState('two_sum');
  const [completedProblems, setCompletedProblems] = useState([]);
  const [userProgress, setUserProgress] = useState({});

  // Load progress from localStorage on component mount
  useEffect(() => {
    const savedProgress = localStorage.getItem('codingProblemsProgress');
    const savedCompleted = localStorage.getItem('codingProblemsCompleted');
    
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
    
    if (savedCompleted) {
      setCompletedProblems(JSON.parse(savedCompleted));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('codingProblemsProgress', JSON.stringify(userProgress));
    localStorage.setItem('codingProblemsCompleted', JSON.stringify(completedProblems));
  }, [userProgress, completedProblems]);

  const handleProblemComplete = (problemId, code) => {
    // Add to completed problems if not already completed
    if (!completedProblems.includes(problemId)) {
      setCompletedProblems(prev => [...prev, problemId]);
    }
    
    // Save user's code
    setUserProgress(prev => ({
      ...prev,
      [problemId]: code
    }));
  };

  const handleProblemSelect = (problemId) => {
    // Check if user can access this problem
    const problemIndex = Object.keys(problems).indexOf(problemId);
    const previousProblem = Object.keys(problems)[problemIndex - 1];
    
    if (problemIndex === 0 || completedProblems.includes(previousProblem)) {
      setCurrentProblem(problemId);
    }
  };

  const getAvailableProblems = () => {
    const problemIds = Object.keys(problems);
    const available = [];
    
    for (let i = 0; i < problemIds.length; i++) {
      const problemId = problemIds[i];
      const previousProblem = problemIds[i - 1];
      
      if (i === 0 || completedProblems.includes(previousProblem)) {
        available.push(problemId);
      }
    }
    
    return available;
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🧩 Coding Problems</h1>
        <p>Latihan algoritma dan struktur data</p>
        <div className="progress-indicator">
          <span>Progress: {completedProblems.length}/{Object.keys(problems).length} soal selesai</span>
        </div>
      </header>

      <div className="main-content">
        <Sidebar 
          problems={problems}
          currentProblem={currentProblem}
          completedProblems={completedProblems}
          onProblemSelect={handleProblemSelect}
          getAvailableProblems={getAvailableProblems}
        />
        
        <ProblemView 
          problem={problems[currentProblem]}
          problemId={currentProblem}
          userCode={userProgress[currentProblem] || ''}
          onProblemComplete={handleProblemComplete}
          isCompleted={completedProblems.includes(currentProblem)}
        />
      </div>
    </div>
  );
}

export default App;
