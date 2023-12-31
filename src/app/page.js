'use client'
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="home">
        <p className="text-3xl font-bold">Welcome to Stake Scan!</p>
        <br />
        <button type="button" onClick={() => router.push('/dashboard')} class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Dashboard</button>
      </div>

      <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
      </div>
    </>
  )
}
