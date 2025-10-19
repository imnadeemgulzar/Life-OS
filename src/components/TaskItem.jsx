import React from 'react'

const TaskItem = ({title,items}) => {
  return (
    <div className='bg-gray-200 px-6 py-4 rounded-sm'>
      <h2 className='text-xl font-bold text-gray-700 mb-2 '>{title}</h2>
      <ul className='text-center gap-3 flex flex-col'>
          {items.map((item) => {
            return <li className='px-3 py-2 bg-gray-300' key={item.id}>{item.title}</li>
          })}
        </ul>

    </div>
  )
}

export default TaskItem