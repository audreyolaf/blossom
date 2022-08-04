import type { NextPage } from 'next'
import { Navbar } from '../components/Navbar'

export default function Learn() {
  return (
    <div>
      <Navbar />

      <div className="bg-gradient-to-r from-[#FBB9C4] to-[#ECC8F0]">
        <iframe className="w-4/5 h-96 place-content-center mx-auto border-lg" width="80%" height="100%" src="https://datastudio.google.com/embed/reporting/3d8b6911-8de5-415c-abdc-ec8edfe988d6/page/bgOzC"></iframe><br/>
        <iframe className="w-4/5 h-96 place-content-center mx-auto border-lg" width="80%" height="100%" src="https://datastudio.google.com/embed/reporting/75c819d4-2798-46da-98fb-2fe42953cca5/page/EAVzC"></iframe>
    </div>
    </div>
  )
}