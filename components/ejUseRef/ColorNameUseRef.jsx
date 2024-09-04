import React, { useRef } from 'react'

const ColorNameUseRef = () => {

    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e)=>{
        e.preventDefault()
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${title}, ${color}`)

        //Devolver a valor original:
        txtTitle.current.value = "";
        hexColor.current.value = ""
    }
  return (
    <div>

        <form onSubmit={submit}>
            <input 
                type='text'
                ref={txtTitle}
                placeholder='Color title'
            />
            <input
                type='color'
                ref={hexColor}
            />
            <button>Add</button>
        </form>


    </div>
  )
}

export default ColorNameUseRef