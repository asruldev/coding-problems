import React, { useState, useEffect } from 'react';
import './ProblemView.css';

const ProblemView = ({ 
  problem, 
  problemId, 
  userCode, 
  onProblemComplete, 
  isCompleted 
}) => {
  const [code, setCode] = useState(userCode || problem.template);
  const [testResults, setTestResults] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  // Reset code and test results when problem changes
  useEffect(() => {
    setCode(userCode || problem.template);
    setTestResults(null);
    setIsRunning(false);
  }, [problemId, userCode, problem.template]);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const runCode = () => {
    setIsRunning(true);
    setTestResults(null);

    try {
      // Find the main function (first function in the code)
      const functionMatch = code.match(/function\s+(\w+)\s*\(/);
      if (!functionMatch) {
        setTestResults({
          error: 'Tidak ditemukan fungsi utama dalam kode.'
        });
        setIsRunning(false);
        return;
      }

      const functionName = functionMatch[1];
      
      // Execute user code in a safe environment
      let mainFunction;
      try {
        // Create a new function scope with the user's code
        // eslint-disable-next-line no-new-func
        const executeCode = new Function(code + `\nreturn ${functionName};`);
        mainFunction = executeCode();
      } catch (error) {
        setTestResults({
          error: `Error saat parsing kode: ${error.message}`
        });
        setIsRunning(false);
        return;
      }

      if (typeof mainFunction !== 'function') {
        setTestResults({
          error: 'Fungsi utama tidak ditemukan atau bukan fungsi.'
        });
        setIsRunning(false);
        return;
      }

      // Run test cases
      let allPassed = true;
      const results = [];

      problem.testCases.forEach((testCase, index) => {
        const testResult = problem.testFunction(mainFunction, testCase);
        results.push({
          index: index + 1,
          ...testResult
        });

        if (!testResult.pass) {
          allPassed = false;
        }
      });

      setTestResults({
        allPassed,
        results
      });

      // If all tests passed, mark problem as completed
      if (allPassed) {
        onProblemComplete(problemId, code);
      }

    } catch (error) {
      setTestResults({
        error: `Error saat menjalankan kode: ${error.message}`
      });
    }

    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(problem.template);
    setTestResults(null);
  };

  return (
    <div className="problem-content">
      <div className="problem-header">
        <h2>{problem.title}</h2>
        <div className="problem-meta">
          <span className={`difficulty-badge ${problem.difficulty}`}>
            {problem.difficulty}
          </span>
          <span className="category-badge">{problem.category}</span>
          {isCompleted && (
            <span className="completed-badge">✓ Selesai</span>
          )}
        </div>
      </div>

      <div 
        className="problem-description"
        dangerouslySetInnerHTML={{ __html: problem.description }}
      />

      <div className="code-editor-section">
        <div className="editor-header">
          <h3>Solusi Anda</h3>
          <div className="editor-actions">
            <button 
              className="btn btn-secondary" 
              onClick={resetCode}
              disabled={isRunning}
            >
              Reset
            </button>
            <button 
              className="btn btn-primary" 
              onClick={runCode}
              disabled={isRunning}
            >
              {isRunning ? 'Menjalankan...' : 'Jalankan & Cek'}
            </button>
          </div>
        </div>
        <div className="code-editor">
          <textarea
            value={code}
            onChange={handleCodeChange}
            placeholder="Tulis kode JavaScript Anda di sini..."
            disabled={isRunning}
          />
        </div>
      </div>

      <div className="test-results">
        <h3>Hasil Test</h3>
        <div className="results-content">
          {!testResults && (
            <p>Jalankan kode untuk melihat hasil test.</p>
          )}

          {testResults?.error && (
            <div className="error-message">
              {testResults.error}
            </div>
          )}

          {testResults?.allPassed && (
            <div className="success-message">
              🎉 Selamat! Semua test case lulus!
            </div>
          )}

          {testResults?.results && testResults.results.map((result, index) => (
            <div key={index} className={`test-case ${result.pass ? 'pass' : 'fail'}`}>
              <div className="test-case-header">
                <span className="test-case-title">Test Case {result.index}</span>
                <span className={`test-case-status ${result.pass ? 'pass' : 'fail'}`}>
                  {result.pass ? 'Lulus' : 'Gagal'}
                </span>
              </div>
              <div className="test-case-details">
                {result.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProblemView; 