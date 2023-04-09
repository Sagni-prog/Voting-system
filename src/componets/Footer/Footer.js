import React from 'react'

export default function Footer() {
  return (
    <div>
    <footer class="dark:text-white  rounded-lg shadow m-4  border-emerald-200 dark:bg-emerald-600">
{/* <section class="">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white">For your Feedback</h2>
  
      <form action="#" class="space-y-8">

          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-white">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-blue-900 bg-gray-50 rounded-lg shadow-sm border border-blue-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-blue-200 dark:border-blue-100 dark:placeholder-black dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit dark:bg-emerald-500  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-sky-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section> */}
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm dark:text-white  sm:text-cente text-white">© 2023 <a href="https://flowbite.com/" class="hover:underline">Name of your Team™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-white sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>
      
    </div>
  )
}
