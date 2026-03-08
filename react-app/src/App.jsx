import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PreClass from './pages/PreClass';
import Resources from './pages/Resources';
import TeacherResources from './pages/TeacherResources';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-left">
          <NavLink to="/" className="brand">
            植物的一生 🌱
          </NavLink>
          <NavLink to="/" end>
            🏠 主页
          </NavLink>
          <NavLink to="/pre-class">📘 课前预习</NavLink>
          <NavLink to="/resources">📚 其他资源</NavLink>
          <NavLink to="/teacher-resources">👩‍🏫 教师资源</NavLink>
          <NavLink to="/about">ℹ️ 关于我们</NavLink>
        </div>
        <div className="navbar-right">
          <SearchBar />
          <a
            href="https://github.com/chenxizhou-520/plant-textbook"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pre-class" element={<PreClass />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/teacher-resources" element={<TeacherResources />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>
          网站总浏览量：<a href="https://visitor-badge.laobi.icu/badge?page_id=chenxizhou-520.plant-textbook" target="_blank" rel="noreferrer">查看</a>
        </p>
      </footer>
    </div>
  );
}
