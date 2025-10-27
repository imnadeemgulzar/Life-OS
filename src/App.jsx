import { Route, Routes } from "react-router-dom"
import Header from "./layout/Header"
import Sidebar from "./layout/Sidebar"
import Dashboard from "./pages/Dashboard"
import Habits from "./pages/Habits"
import Notes from "./pages/Notes"
import Tasks from "./pages/Tasks"
import { useEffect, useState } from "react"

const App = () => {
  const [notes, setNotes] = useState([
      {
        id: 1,
        title: "note-1",
        snippet:
          "note-1 text  cum repudiandae labore, maxime dolorem animi laboriosam ullam ipsa nostrum voluptatibus odit",
      },
    ]);
    const [tasks, setTasks] = useState([
    { id: 1, title: "Task-1", status: "pending" },
  ]);
  const [habits, setHabits] = useState([
    { id: 1, title: "habit-1", progress: 0.1 },
  ]);
  useEffect(() => {
   const savedTasks = JSON.parse(localStorage.getItem('tasks', (tasks)));
   const savedNotes = JSON.parse(localStorage.getItem('notes', (notes)));
   const savedHabits = JSON.parse(localStorage.getItem('habits', (habits)));
   if(savedTasks) {
    setTasks(savedTasks);
   }
   if(savedHabits) {
    setHabits(savedHabits)
   }
   if(savedHabits) {
    setNotes(savedNotes)
   }
  },[])
  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
    localStorage.setItem('habits',JSON.stringify(habits))
    localStorage.setItem('notes',JSON.stringify(notes))
  },[tasks,habits,notes])
    return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard notes={notes} setNotes={setNotes} tasks={tasks} setTasks={setTasks} habits={habits} setHabits={setHabits}/>} />
            <Route path="/tasks" element={<Tasks tasks={tasks}/>} />
            <Route path="/habits" element={<Habits habits={habits}/>} />
            <Route path="/notes" element={<Notes  notes={notes}/>} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App