import { useState } from "react";
import SummaryCard from "../components/SummaryCard";
const habits = [
  { id: 1, title: "habit-1", progress: 0.1 },
  { id: 2, title: "habit-2", progress: 0.2 },
  { id: 3, title: "habit-3", progress: 0 },
];
const Dashboard = () => {
  const [tasks,setTasks] = useState([
  { id: 1, title: "Task-1", completed: false },
  { id: 2, title: "Task-2", completed: false },
  { id: 3, title: "Task-3", completed: false },
]);
const [notes,setNotes] = useState([
  { id: 1, title: "note-1", snippet: "note-1 text  cum repudiandae labore, maxime dolorem animi laboriosam ullam ipsa nostrum voluptatibus odit" },
  { id: 2, title: "note-2", snippet: "note-2 text" },
  { id: 3, title: "note-3", snippet: "note-3 text" },
])
const [activeCard,setActiveCard] = useState("");
const [isModalOpen,setIsModalOpen] = useState(false);
const [openNoteId,setOpenNoteId] = useState(null);
const [newTask,setNewTask] = useState('')
const [taskStatus,setTaskStatus] = useState('')
  const handleStatus = (id) => {
    setTasks(prev => prev.map(item => item.id === id ? {...item, completed:!item.completed} : item))
  };
  const toggleSnippet = (id) => {
    setOpenNoteId(prev => 
      prev === id ? null : id
    );
  }
  const openModal = (title) => {
    setActiveCard(title);
    setIsModalOpen(true);
  }
  
  const closeModal = (title) => {
    // setActiveCard(title);
    setIsModalOpen(false);
  }
  const handleNewTask = () => {
    activeCard === "Tasks" &&  setTasks([...tasks,{id:18,title:newTask,completed:taskStatus}])
    activeCard === "Notes" &&  setNotes([...notes,{id:9,title:'uii',snippet:'lord'}])
    
  }

  return (
    <div className="flex flex-wrap gap-5 p-5">
      <SummaryCard
        title="Tasks"
        items={tasks}
        type="task"
        handleStatus={handleStatus}
        openModal={openModal}
        CloseModal={closeModal}
      />
      <SummaryCard title="Notes" items={notes} type="note" toggleSnippet={toggleSnippet} openNoteId={openNoteId} openModal={openModal}/>
      <SummaryCard title="Habits" items={habits} type="habit" openModal={openModal}/>
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Add Task to {activeCard}</h2>
      {console.log(activeCard)}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter task name"
        className="border w-full px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
      />
      {activeCard === "Tasks" && <select className="my-4" name="status" id="status" value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="in Progress">In Progress</option>
        <option value="done">Done</option>
      </select> }
      {activeCard === "Notes" && <> <input type="text" placeholder="Note Title" 
        className="border w-full px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
      /> <input type="text" placeholder="Your Note"
        className="border w-full px-3 py-2 rounded mb-4 outline-none focus:ring-2 focus:ring-blue-500"
      
      />
         </>}
      <div className="flex justify-end gap-2">
        <button onClick={closeModal} className="px-4 py-2 rounded bg-gray-200">
          Cancel
        </button>
        <button
          onClick={() => handleNewTask()}
          className="px-4 py-2 rounded bg-blue-600 text-white"
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
