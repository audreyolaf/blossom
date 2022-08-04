import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'

export default function Learn() {
  return (
    <div>
      <Navbar />

      <div className="bg-gradient-to-r from-[#FBB9C4] to-[#ECC8F0]">
        <iframe className="w-full h-screen" width="100%" height="100%" src="https://datastudio.google.com/embed/reporting/3d8b6911-8de5-415c-abdc-ec8edfe988d6/page/bgOzC"></iframe>
    </div>
    </div>
  )
}