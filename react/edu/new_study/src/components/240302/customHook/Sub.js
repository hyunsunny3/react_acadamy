import React from 'react'
import useInput from './useInput'

function Sub() {
    const [inputValue, handleChange, handleSubmit] = useInput("Sub Component!!");

    return (
        <div>
            <h3>Sub Component</h3>
            <div>
                <input 
                    type="text"
                    value={inputValue}
                    onChange={ handleChange }
                />
                <button onClick={ handleSubmit }>click!</button>
            </div>
        </div>
    )
}

export default Sub