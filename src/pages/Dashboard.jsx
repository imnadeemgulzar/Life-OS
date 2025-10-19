import SummaryCard from '../components/SummaryCard'
    const tasks = [{id:1,title:'Task-1'},{id:2,title:'Task-2'},{id:3,title:'Task-3'}]
    const notes = [{id:1,title:'note-1'},{id:2,title:'note-2'},{id:3,title:'note-3'}]
    const habits = [{id:1,title:'habit-1'},{id:2,title:'habit-2'},{id:3,title:'habit-3'}]
const Dashboard = () => {
  return (
    <div className="flex flex-wrap gap-5 p-5">
      <SummaryCard title="Tasks" items={tasks} type="task" />
      <SummaryCard title="Notes" items={notes} type="note" />
      <SummaryCard title="Habits" items={habits} type="habit" />
    </div>
  );
}

export default Dashboard
