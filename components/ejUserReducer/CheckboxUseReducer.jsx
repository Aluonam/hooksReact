import React, { useReducer } from 'react'

const CheckboxUseReducer = () => {

    const [checked, setChecked] = useReducer(
        (checked)=> !checked,
        false
    )

  return (
    <div>

        <input
            type='checkbox'
            value={checked}
            onChange={setChecked}
        />
        <label>
            {checked ? "checked" : "not checked"}
        </label>

    </div>
  )
}

export default CheckboxUseReducer