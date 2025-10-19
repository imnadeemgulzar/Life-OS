const SummaryCard = ({ title, items, type }) => {
  return (
    <div className="bg-white px-6 py-4 rounded-lg shadow-sm w-72">
      <h2 className="text-xl font-bold text-gray-700 mb-3">{title}</h2>
      <ul className="flex flex-col gap-2">
        {items.map(item => (
          <li
            key={item.id}
            className="px-3 py-2 bg-gray-100 rounded flex justify-between items-center"
          >
            {item.title}
            {type === "task" && <input type="checkbox" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryCard;
