import chevronIcon from "../assets/chevron-down-solid.svg";

const SummaryCard = ({
  title,
  items,
  type,
  handleStatus,
  toggleSnippet,
  openNoteId,
  openModal,
}) => {
  return (
    <div className="bg-white px-6 py-4 rounded-lg shadow-sm w-72">
     <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-700 mb-3">{title}</h2>
      <h3 className="text-2xl font-medium text-blue-700 mb-3 cursor-pointer" onClick={() => openModal(title)}>+</h3>
      </div> 
      <ul className="flex flex-col gap-2">
        {items.map((item) => (
          <li key={item.id} className="px-3 py-2 bg-gray-100 rounded">
            <div className="flex justify-between items-center">
              <h3
                className={item.completed ? "line-through text-gray-400" : ""}
              >
                {item.title}
              </h3>

              {type === "task" && (
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  onChange={() => handleStatus(item.id)}
                  checked={item.completed}
                />
              )}

              {type === "habit" && (
                <progress value={item.progress} className="h-2" />
              )}

              {type === "note" && (
                <img
                  src={chevronIcon}
                  alt="expandIcon"
                  className={`w-4 h-4 cursor-pointer transition-transform duration-300 ${
                    openNoteId === item.id ? "rotate-180" : "rotate-0"
                  }`}
                  onClick={() => toggleSnippet(item.id)}
                />
              )}
            </div>

            {openNoteId === item.id && (
              <div className="text-sm text-gray-500 mt-1">{item.snippet}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SummaryCard;
