import { Route, Routes } from "react-router-dom"
import Header from "./layout/Header"
import Sidebar from "./layout/Sidebar"
import Dashboard from "./pages/Dashboard"
import Habits from "./pages/Habits"
import Notes from "./pages/Notes"
import Tasks from "./pages/Tasks"

const App = () => {
    return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/habits" element={<Habits />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App