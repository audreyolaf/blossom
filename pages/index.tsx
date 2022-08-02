import type { NextPage } from 'next'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
    //     <Image lalt="Picture of the author"
    // layout="fill" 
    // objectFit="cover" 
    // className="rounded-full" src="../public/images/1.png"/>

import one from '../public/images/one.png'
export default function Index() {
  // const { setEmoji: setAnimatedEmoji } = useEmoji();
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center h-screen mb-0 bg-gradient-to-r from-[#FBB9C4] to-[#EFC5EB]">
        <div>
        <h1 className="text-9xl mt-0 text-Salmon font-bold">blossom</h1>
        <Image className="float-right" src={one} alt="Picture of the author" width="50px" height="50px" />
          </div>
        <h2 className="text-2xl text-whitepink">examining the role social media has on eating disorders</h2>
      </div>
    </div>
  )
}

