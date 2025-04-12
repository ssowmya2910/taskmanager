import React from 'react'
import "./status.css"
import TaskCard from './TaskCard'
const Status = ({title,icon,tasks,status,handleDelete}) => {
  return (
    <section className='appSection'>
        <h2 className='status_heading'>{title}</h2>
        {
          tasks.map(
            (task,index)=>
              task.status === status && (
          <TaskCard 
          key={index}
          title={task.task}
          tags={task.tags}
          handleDelete={handleDelete}
          index={index}
          />)
              )
        }
         </section>
  )
}

export default Status