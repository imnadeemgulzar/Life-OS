const Header = () => {
  return (
    <header className="bg-gray-100 flex justify-between items-center px-6 py-3 shadow-sm">
      <h1 className="text-xl font-semibold text-gray-700">PulseBoard</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-lg px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
    </header>
  );
};

export default Header;
