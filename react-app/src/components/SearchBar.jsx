import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PAGES = [
  { label: '主页', path: '/' },
  { label: '课前预习资料', path: '/pre-class' },
  { label: '其他资源', path: '/resources' },
  { label: '老师教学资源', path: '/teacher-resources' },
  { label: '关于我们', path: '/about' },
];

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];

    return PAGES.filter((item) =>
      item.label.toLowerCase().includes(normalized) ||
      item.path.toLowerCase().includes(normalized)
    );
  }, [query]);

  const onSelect = (path) => {
    setQuery('');
    setOpen(false);
    navigate(path);
    inputRef.current?.blur();
  };

  const onKeyDown = (event) => {
    if (event.key === 'Enter' && results.length > 0) {
      onSelect(results[0].path);
    }
  };

  return (
    <div className="searchbar">
      <input
        ref={inputRef}
        className="searchbar-input"
        value={query}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="搜索..."
        aria-label="搜索页面"
      />
      {open && query.trim() && (
        <ul className="searchbar-results">
          {results.length === 0 ? (
            <li className="searchbar-empty">未找到相关页面</li>
          ) : (
            results.map((item) => (
              <li key={item.path}>
                <button type="button" onMouseDown={() => onSelect(item.path)}>
                  {item.label}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
