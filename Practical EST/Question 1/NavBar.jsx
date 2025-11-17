export default function NavBar({ username }) {
  return (
    <nav>
      <p>Navigation Bar</p>

      <UserProfile username={username} />
    </nav>
  );
}

import UserProfile from "./UserProfile";


