import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="todos" element={<TodoPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
