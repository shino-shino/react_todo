import React from 'react'

export const InputForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("aaa");
  }

  return (
    <div className='inputForm'>
      <form onSubmit={handleSubmit}> 
        <input type='text'></input>
        <button>
        <i className="fa-solid fa-plus"></i>
        </button>
      </form>
    </div>
  )
}
