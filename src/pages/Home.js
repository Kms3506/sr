import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      {/* 상단 네비게이션 */}
      <Header />

      {/* 메인 컨텐츠 */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>환영합니다! 🏠</h1>
        <p>이곳은 게시판 웹 애플리케이션입니다.</p>

        {/* 게시판으로 이동하는 버튼 */}
        <Link to="/board">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>
            게시판 보기
          </button>
        </Link>
      </main>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  );
};

export default Home;
