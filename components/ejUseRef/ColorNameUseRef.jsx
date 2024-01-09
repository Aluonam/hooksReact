import React, { useRef } from 'react'

const ColorNameUseRef = () => {

    const txtTitle = useRef();
    const hexColor = useRef();

  return (
    <div>

        <form>
            <input 
                type='text'
                ref={txtTitle}
                placeholder='Color title'
            />
            <input></input>
            <button>Add</button>
        </form>


    </div>
  )
}

export default ColorNameUseRef