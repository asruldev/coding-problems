import React from 'react';
import './Sidebar.css';

const Sidebar = ({ 
  problems, 
  currentProblem, 
  completedProblems, 
  onProblemSelect, 
  getAvailableProblems 
}) => {
  const problemIds = Object.keys(problems);
  const availableProblems = getAvailableProblems();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '#22c55e';
      case 'medium': return '#f59e0b';
      case 'hard': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const isProblemAvailable = (problemId) => {
    return availableProblems.includes(problemId);
  };

  const isProblemCompleted = (problemId) => {
    return completedProblems.includes(problemId);
  };

  const getProblemStatus = (problemId) => {
    if (isProblemCompleted(problemId)) {
      return 'completed';
    } else if (isProblemAvailable(problemId)) {
      return 'available';
    } else {
      return 'locked';
    }
  };

  return (
    <div className="sidebar">
      <div className="problem-list">
        <h3>Daftar Soal</h3>
        
        <div className="difficulty-section">
          <h4>Easy</h4>
          {problemIds.filter(id => problems[id].difficulty === 'easy').map(problemId => {
            const problem = problems[problemId];
            const status = getProblemStatus(problemId);
            
            return (
              <div
                key={problemId}
                className={`problem-item ${status} ${currentProblem === problemId ? 'active' : ''}`}
                onClick={() => isProblemAvailable(problemId) && onProblemSelect(problemId)}
              >
                <div className="problem-header">
                  <span className="problem-title">{problem.title}</span>
                  {isProblemCompleted(problemId) && (
                    <span className="completion-badge">✓</span>
                  )}
                  {status === 'locked' && (
                    <span className="lock-badge">🔒</span>
                  )}
                </div>
                <span className="problem-category">{problem.category}</span>
                <div 
                  className="difficulty-indicator" 
                  style={{ backgroundColor: getDifficultyColor(problem.difficulty) }}
                />
              </div>
            );
          })}
        </div>
        
        <div className="difficulty-section">
          <h4>Medium</h4>
          {problemIds.filter(id => problems[id].difficulty === 'medium').map(problemId => {
            const problem = problems[problemId];
            const status = getProblemStatus(problemId);
            
            return (
              <div
                key={problemId}
                className={`problem-item ${status} ${currentProblem === problemId ? 'active' : ''}`}
                onClick={() => isProblemAvailable(problemId) && onProblemSelect(problemId)}
              >
                <div className="problem-header">
                  <span className="problem-title">{problem.title}</span>
                  {isProblemCompleted(problemId) && (
                    <span className="completion-badge">✓</span>
                  )}
                  {status === 'locked' && (
                    <span className="lock-badge">🔒</span>
                  )}
                </div>
                <span className="problem-category">{problem.category}</span>
                <div 
                  className="difficulty-indicator" 
                  style={{ backgroundColor: getDifficultyColor(problem.difficulty) }}
                />
              </div>
            );
          })}
        </div>
        
        <div className="difficulty-section">
          <h4>Hard</h4>
          {problemIds.filter(id => problems[id].difficulty === 'hard').map(problemId => {
            const problem = problems[problemId];
            const status = getProblemStatus(problemId);
            
            return (
              <div
                key={problemId}
                className={`problem-item ${status} ${currentProblem === problemId ? 'active' : ''}`}
                onClick={() => isProblemAvailable(problemId) && onProblemSelect(problemId)}
              >
                <div className="problem-header">
                  <span className="problem-title">{problem.title}</span>
                  {isProblemCompleted(problemId) && (
                    <span className="completion-badge">✓</span>
                  )}
                  {status === 'locked' && (
                    <span className="lock-badge">🔒</span>
                  )}
                </div>
                <span className="problem-category">{problem.category}</span>
                <div 
                  className="difficulty-indicator" 
                  style={{ backgroundColor: getDifficultyColor(problem.difficulty) }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 