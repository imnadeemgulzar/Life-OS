import React from 'react'
import TaskItem from '../components/TaskItem'

const Tasks = ({tasks}) => {
  return (
    <div className=' px-8 py-4 rounded-sm h-screen'>
      <h2 className='text-2xl font-bold  text-[#101828] mb-4 '>All Tasks</h2>
      <ul className='gap-6 flex flex-wrap'>
          {tasks.map((task) => {
            return <li className='px-3 py-2 bg-white rounded shadow-lg w-72' key={task.id}><TaskItem task={task}/></li>
          })}
        </ul>
    </div>
  )
}

export default Tasks
