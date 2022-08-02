import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'

export default function Index() {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center h-screen mb-0 bg-gradient-to-r from-[#FF8B8B] to-[#FFE7DC]">
        <h1 className="text-9xl mt-0 text-babyBlue font-bold">blossom</h1>
        <h2 className="text-2xl text-babyBlue">examining the role social media has on eating disorders</h2>
      </div>
    </div>
  )
}

