import { Navbar } from '../components/Navbar'
import { useEffect, useState } from 'react'
import {randomReminders, randomPrompt} from "./randomData"

export default function Generator() {
  const min = 1;
  const max = 4;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  const Database = require("@replit/database")
  
  return (
    <div>
    <Navbar />
      <div class="grid grid-cols-4 grid-flow-col gap-1">
    <div class="m-8 p-6 max-w-sm bg-white rounded-lg bg-lightSal">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Self Love Reminders</h5>
        </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{randomReminders[randomNumber]}</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-babyBlue rounded-lg">
            Generate
        </a>
    </div>

      <div class="m-8 p-6 max-w-sm bg-white rounded-lg bg-lightSal">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Daily Journal Prompts</h5>
        </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{randomPrompt[randomNumber]}</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-babyBlue rounded-lg">
            Generate
        </a>
    </div>

    <div class="m-8 p-6 max-w-sm bg-white rounded-lg bg-lightSal">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Playlist</h5>
        </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lofi</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-babyBlue rounded-lg">
            Listen
        </a>
    </div>

    <div class="m-8 p-6 max-w-sm bg-white rounded-lg bg-lightSal">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Playlist</h5>
        </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Collaborative</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-babyBlue rounded-lg">
            Listen
        </a>
    </div>
      </div>
  </div>
  )
}