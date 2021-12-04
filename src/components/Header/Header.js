export function Header({ children }) {
  return (
    <header>
      <div className="mx-auto pb-3">
        <h1 className="text-3xl font-bold text-gray-900">{children}</h1>
      </div>
    </header>
  );
}
