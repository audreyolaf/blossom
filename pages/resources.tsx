import { Navbar } from '../components/Navbar'

export default function Generator() {
  return (
    <div>
      <Navbar />
      
      <div class="m-8 max-w-sm bg-white rounded-lg bg-babyBlue">
      <a href="#">
          <img class="rounded-t-lg" src="https://cdn1.vectorstock.com/i/thumb-large/91/15/hibiscus-flower-cartoon-vector-35289115.jpg" alt="" />
      </a>
      <div class="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mayoclinic</h5>
        </a>
        <a href="https://www.mayoclinic.org/diseases-conditions/anorexia-nervosa/symptoms-causes/syc-20353591" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="babyPink" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
      </div>
    </div>

    </div>
  )
}