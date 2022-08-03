import { Navbar } from '../components/Navbar'
import { useEffect, useState } from 'react'
import {randomReminders, randomPrompt} from "./randomData"

export default function Generator() {
  const min = 1;
  const max = 4;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  
  return (
    <div>
    <Navbar />
      <div className="grid grid-flow-col grid-flow-col-dense bg-gradient-to-r from-[#FBB9C4] to-[#ECC8F0]">
    <div className="m-8 p-6 max-w-sm bg-white rounded-lg bg-lightSal">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">self love reminders</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{randomReminders[randomNumber]}</p>
        <a href="./generator" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-babyBlue rounded-lg">
            generate
        </a>
    </div>

      <div className="m-8 p-6 max-w-sm bg-white rounded-lg bg-lightSal">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">daily journal prompts</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{randomPrompt[randomNumber]}</p>
        <a href="./generator" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-babyBlue rounded-lg">
            generate
        </a>
    </div>

    <div className="m-8 p-6 max-w-sm bg-white rounded-lg bg-lightSal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">playlist</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">lofi</p>
        <a href="https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-babyBlue rounded-lg" target="_blank" rel="noopener noreferrer">
            listen
        </a>
    </div>

    <div className="m-8 p-6 max-w-sm bg-white rounded-lg bg-lightSal">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">playlist</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">self care</p>
        <a href="https://open.spotify.com/playlist/37i9dQZF1DWWpVZ8B1NLio" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-babyBlue rounded-lg" target="_blank" rel="noopener noreferrer">
            listen
        </a>
    </div>
      </div>
  </div>
  )
}