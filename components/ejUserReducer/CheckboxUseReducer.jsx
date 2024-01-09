import React, { useReducer } from 'react'

const CheckboxUseReducer = () => {

    const [checked, setChecked] = useReducer(
        (checked)=> !checked,
        false
    )

  return (
    <div>



    </div>
  )
}

export default CheckboxUseReducer