import React, { useState } from 'react'

export const InputForm = ({taskList, setTaskList}) => {

  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      {
        id: crypto.randomUUID(),
        text: inputText
      }
    ]);
    setInputText("")
  }

  const handleChange = (e) => {
    setInputText(e.target.value);
  }

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}> 
        <input type='text' onChange={handleChange} value={inputText}></input>
        <button>
        <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}
