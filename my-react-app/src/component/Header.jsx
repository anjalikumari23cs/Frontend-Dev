// src/components/Header.jsx
export default function Header() {
  return (
    <header style={{ backgroundColor: "#282c34", padding: "1rem", color: "white" }}>
      <h1>My React + Vite App</h1>
      <nav>
        <a href="/" style={{ marginRight: "1rem", color: "white" }}>Home</a>
        <a href="/about" style={{ color: "white" }}>About</a>
      </nav>
    </header>
  );
}