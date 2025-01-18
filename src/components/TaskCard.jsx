import React from 'react'
import "./TaskCard.css"
import Tagcompo from "./Tagcompo"
import deleteIcon from "./images/download.png"
const TaskCard = ({title,tags,handleDelete,index}) => {
  return (
    <article className='taskCard'>
        <p className='taskText'>{title}</p>
        <div className='bottomLine'>
            <div className='taskAdd'>{
               tags.map((tagsUsed,index) => (
                <Tagcompo key={index} tagName={tagsUsed} selected={true}/>))
              }
            </div>
            <div className='taskDelete' onClick={()=> handleDelete(index)}>
                <img src={deleteIcon} className='delete_icon' alt=''/>
            </div>
        </div>
    </article>
  )
}

export default TaskCard