const TaskItem = ({task}) => {
  return  <div className="gap-3 flex flex-col">
    <h3 className="text-xl capitalize font-bold text-gray-500 text-center">{task.title}</h3>
    <h3 className=" text-gray-700 p-2">{task.status}</h3>
  </div>
}

export default TaskItem