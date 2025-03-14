import React from "react";

const Login = () => {
  return (
    <div style={styles.container}>
      <h2>로그인</h2>
      <input type="text" placeholder="이메일을 입력하세요" style={styles.input} />
      <button style={styles.button}>로그인</button>
    </div>
  );
};

// 간단한 인라인 스타일
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    gap: "10px",
  },
  input: {
    width: "250px",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    width: "250px",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#282c34",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Login;
