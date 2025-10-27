import React from 'react'
import HabitBar from '../components/HabitBar'

const Habits = ({habits}) => {

  return (
    <div className='px-8 py-4 rounded-sm h-screen'>
      <h2 className='text-2xl font-bold  text-[#101828] mb-4'>All Habits</h2>
      <ul className='gap-6 flex flex-wrap'>
          {habits.map((habit) => {
            return <li className='px-3 py-2 bg-white rounded shadow-lg w-72' key={habit.id}><HabitBar habit={habit}/></li>
          })}
        </ul>
    </div>
  )
}

export default Habits
