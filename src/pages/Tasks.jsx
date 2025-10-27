import React from 'react'
import TaskItem from '../components/TaskItem'

const Tasks = ({tasks}) => {
  return (
    <div className=' px-8 py-4 rounded-sm h-screen'>
      <h2 className='text-2xl font-bold  text-[#101828] mb-4 '>All Tasks</h2>
      <div className='gap-6 flex flex-wrap'>
          
          <div className='px-3 py-2 bg-white rounded shadow-lg w-72 h-screen'>
            <p className='text-blue-400 font-bold text-xl py-2'>Pending</p>
            {tasks.filter(item => item.status === 'pending').map(task => 
              <div className='px-3 py-2 bg-blue-300 rounded shadow-lg w-64 mb-2' key={task.id}><TaskItem task={task}/></div>
            )}
          </div>
          <div className='px-3 py-2 bg-white rounded shadow-lg w-80 h-screen'>
            <p className='text-orange-400 font-bold text-xl py-2'>In Progress</p>
            {tasks.filter(item => item.status === 'in progress').map(task => 
              <div className='px-3 py-2 bg-orange-300 rounded shadow-lg w-64 mb-2' key={task.id}><TaskItem task={task}/></div>
            )}
          </div>
          <div className='px-3 py-2 bg-white rounded shadow-lg w-72 h-screen'>
            <p className='text-green-400 font-bold text-xl py-2'>Done</p>
            {tasks.filter(item => item.status === 'done').map(task => 
              <div className='px-3 py-2 bg-green-300 rounded shadow-lg w-64 mb-2' key={task.id}><TaskItem task={task}/></div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Tasks
