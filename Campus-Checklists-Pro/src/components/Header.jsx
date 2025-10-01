export default function Header({ goHome }) {
  return (
    <header>
      <h1 onClick={goHome} style={{cursor:"pointer"}}>Campus Checklists Pro</h1>
    </header>
  );
}