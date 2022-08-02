import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'

export default function Learn() {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-[#FF8B8B] to-[#FFE7DC]">
      <div className="bg-lightSal px-8 py-10 text-3xl font-bold text-center">
          <h2 className="italic">every 52 minutes, at least one person dies as a result of an eating disorder.</h2>
      </div>
        
      <div className="m-50 p-5 text-center font-bold">
        <h2 className="text-3xl m-auto">Here are the facts.</h2><br/>
        
<div class="flex items-center">
        <div class="flex flex-col px-10">
           <span class="text-3xl px-5 m-auto bg-babyBlue rounded-lg">the impacts of social media</span><br/>
            <p class="text-2xl">we all know that social media can be harmful, but just how much does it imapct teens? according to research conducted by xyz, it was found that xxx amount of teens are affected by zzzz this is important because of xxxx and we found that idk idk xyz researcher at university further found that disordered eating in girls xyz</p>
        </div>
        <img class="py-2 pr-4 ml-8 rounded-lg" src="https://static01.nyt.com/images/2022/07/05/science/30tb-panda/30tb-panda-articleLarge.jpg?quality=75&auto=webp&disable=upscale"></img>
    </div>

        <div class="flex items-center">
        <div class="flex flex-col px-10">
           <span class="text-3xl px-5 m-auto bg-babyBlue rounded-lg">fact check! </span><br/>
            <p class="text-2xl">celebrities, influencers, peers, everyone edits their posts. but how often do they? and to what extent?<br />xyz professor researched xyz teens social media in 2018, finding that 90% of teens modify their body in social media posts. in popular platfroms such as instagram, facebook, tiktok, etc</p>
        </div>
        <img class="py-2 pr-4 ml-8 rounded-lg" src="https://static01.nyt.com/images/2022/07/05/science/30tb-panda/30tb-panda-articleLarge.jpg?quality=75&auto=webp&disable=upscale"></img>
    </div>
        
        </div>
        <div className="bg-lightSal pt-10 pb-10 text-3xl font-bold text-center">
          <h2>still not convinced? explore the links below ↓</h2>
      </div>
        </div>
    </div>
  )
}