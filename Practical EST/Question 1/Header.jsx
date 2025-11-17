export default function Header({ username }) {
  return (
    <header>
      <h2>Header Section</h2>

      <NavBar username={username} />
    </header>
  );
}

import NavBar from "./NavBar";
