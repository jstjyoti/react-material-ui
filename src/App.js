import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CoursesList from './Components/CourseList/CourseList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CoursesList />
    </div>
  );
}

export default App;
