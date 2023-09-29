import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        text: inputText
      }
    ]);
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}> 
        <input type='text' onChange={handleChange}></input>
        <button>
        <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}
