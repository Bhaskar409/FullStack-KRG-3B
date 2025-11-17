export default function App() {
  const username = "Tanmay";

  return (
    <div>
      <h1>Prop Drilling Demo</h1>
      <Header username={username} />
    </div>
  );
}

