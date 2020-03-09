import React from 'react';
import { Route } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <>
      <Route component={RegisterPage} path="/register" />
      <Route component={LoginPage} path="/login" />
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={PostPage} path="/@:username/:postId" />
      <Route component={WritePage} path="/write" />
    </>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
