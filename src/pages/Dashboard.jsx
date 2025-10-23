import { useState } from "react";
import SummaryCard from "../components/SummaryCard";
const Dashboard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task-1", status: "pending" },
  ]);
  const [habits, setHabits] = useState([
    { id: 1, title: "habit-1", progress: 0.1 },
  ]);
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "note-1",
      snippet:
        "note-1 text  cum repudiandae labore, maxime dolorem animi laboriosam ullam ipsa nostrum voluptatibus odit",
    },
  ]);
  const [activeCard, setActiveCard] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openNoteId, setOpenNoteId] = useState(null);
  const [newTask, setNewTask] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [noteSnippet, setNoteSnippet] = useState("");
  const [progress, setProgress] = useState(0.0);

  const handleStatus = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };
  const toggleSnippet = (id) => {
    setOpenNoteId((prev) => (prev === id ? null : id));
  };
  const openModal = (title) => {
    setActiveCard(title);
    setNewTask("");
    setNoteSnippet("");
    setTaskStatus("");
    setIsModalOpen(true);
    setProgress(0.0);
  };

  const closeModal = () => {
    setNewTask("");
    setNoteSnippet("");
    setTaskStatus("");
    setIsModalOpen(false);
    setProgress(0.0);
  };
  const handleNewTask = () => {
    switch (activeCard) {
      case "Tasks":
        if (newTask)
          setTasks((prev) => [
            ...prev,
            { id: Date.now(), title: newTask, status: taskStatus || "pending" },
          ]);
        break;
      case "Notes":
        if (newTask && noteSnippet)
          setNotes((prev) => [
            ...prev,
            { id: Date.now(), title: newTask, snippet: noteSnippet },
          ]);
        break;
      case "Habits":
        if (newTask)
          setHabits((prev) => [
            ...prev,
            { id: Date.now(), title: newTask, progress: progress },
          ]);
        break;
      default:
        break;
    }
    closeModal();
  };

  return (
    <div className="flex flex-wrap gap-5 p-5">
      <SummaryCard
        title="Tasks"
        items={tasks}
        type="task"
        handleStatus={handleStatus}
        openModal={openModal}
      />
      <SummaryCard
        title="Notes"
        items={notes}
        type="note"
        toggleSnippet={toggleSnippet}
        openNoteId={openNoteId}
        openModal={openModal}
      />
      <SummaryCard
        title="Habits"
        items={habits}
        type="habit"
        openModal={openModal}
      />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Add a new {activeCard.slice(0, -1)}
            </h2>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder={`Enter ${activeCard.slice(0, -1)} name`}
              className="border w-full px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {activeCard === "Tasks" && (
              <select
                className="my-4"
                name="status"
                id="status"
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="in Progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            )}
            {activeCard === "Notes" && (
              <input
                type="text"
                placeholder="Your Note"
                value={noteSnippet}
                onChange={(e) => setNoteSnippet(e.target.value)}
                className="border w-full px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            {activeCard === "Habits" && (
              <>
                <label className="block text-sm text-gray-600 mb-1">
                  Enter progress from 0.0 to 1.0
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="1"
                  value={progress}
                  onChange={(e) => setProgress(e.target.value)}
                  className="border w-full px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </>
            )}
            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded bg-gray-200 cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={() => handleNewTask()}
                className="px-4 py-2 rounded bg-blue-600 text-white cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
