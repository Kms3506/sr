import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header
      style={{
        padding: '10px 20px',
        backgroundColor: '#282c34',
        color: 'white',
      }}
    >
      <h2>게시판 웹</h2>
      <nav>
        <Link to="/" style={{ margin: '0 10px', color: 'white' }}>
          홈
        </Link>
        <Link to="/board" style={{ margin: '0 10px', color: 'white' }}>
          게시판
        </Link>
        <Link to="/login" style={{ margin: '0 10px', color: 'white' }}>
          로그인
        </Link>
      </nav>
    </header>
  );
};

export default Header;
