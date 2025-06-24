'use client'
import { useState } from 'react';
import { createArray } from './utils/insertionSort';
import { insertionSort } from './utils/insertionSort';

export default function Home() {
  const [userInput, setUserInput] = useState('')
  const [userArray, setArray] = useState<number []>([])

  const handleClick = () => {
    const num = Number(userInput)
    if(num > 1000) {
        alert("Max 1000!")
        return
    }
    const newArray = createArray(num)
    setArray(newArray)
    console.log('temp array in componet ', newArray)
  }
  const handleSortClick = () => {
    //const sortedArray = sortArray(userArray)
    const sortedArray = insertionSort(userArray)
    console.log(sortedArray)
  }

  return (
    <div className="min-h-screen p-8">
      <main>
        <h1>Sorting Visualizer</h1>
        <p>Your sorting algorithm visualization will go here!</p>
        <input
          type='number'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Enter a number from 1-1000 "
          className='border border-black'
        />

        <button
          className='border border-black'
          onClick={handleClick}>
            submit value
        </button>

        <button
          className='border border-black'
          onClick={handleSortClick}>
            Sort your array 
        </button>

      </main>
    </div>
  );
}
