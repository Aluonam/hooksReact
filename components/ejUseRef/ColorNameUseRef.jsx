import React, { useRef } from 'react'

const ColorNameUseRef = () => {

    const txtTitle = useRef();
    const hexColor = useRef();

  return (
    <div>

        <form>
            <input></input>
            <input></input>
            <button>Add</button>
        </form>


    </div>
  )
}

export default ColorNameUseRef