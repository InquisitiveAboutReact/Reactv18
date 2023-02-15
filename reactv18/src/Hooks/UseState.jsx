import React, {useState} from 'react'

export default function UseState() {

    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState('Raj');

    const increment = () => {
        setCounter(counter+1);
    }

    const onChangeText = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue)
    }
  return (
    <>
    <h2>Use State Hook</h2>
    <div>Counter : {counter}</div>
    <button onClick={increment}>Increment </button>
    <br/>
    <input placeholder='Enter the text here..' onChange={onChangeText}/>
        {inputValue}
    </>
  )
}
