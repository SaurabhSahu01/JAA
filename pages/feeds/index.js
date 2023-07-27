import React from 'react'
import Layout from '../Layout'
function Feed() {
  return (
        <div>

<div className="flex justify-center w-screen h-screen  text-gray-700">
<div className="flex w-full container-fluid w-3/5" >


	<div className="flex flex-col flex-grow border-l border-r border-gray-300 ">
	<div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
				<h1 className="text-xl font-semibold">Feed Title</h1>
	</div>
	<div className="flex-grow h-0 overflow-auto ">

				<div className="flex w-full p-8 border-b-4 border-gray-300  rounded-lg" >
					<span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
					<form className='w-full'>

					<div className="flex flex-col flex-grow ml-4">
						<textarea className="block p-2.5 w-full text-sm text-neutral-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-gray-600 dark:placeholder-neutral-400 dark:text-neutral dark:focus:ring-blue-500 dark:focus:border-blue-500" name="" id=""  rows="4" placeholder="What's happening?"></textarea>
						<div className="flex justify-between mt-2">
						

  <label className="block">
    <span className="sr-only">Choose </span>
    <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
            
            
            	<button className="flex items-center h-8 px-3 text-xs p-4 rounded-full bg-white hover:bg-white-400  " type='submit'>POST NOW</button>
						</div>
					</div>
					</form>

				</div>


	

				<div className="flex w-full p-8 border-b border-gray-300 bg-white rounded-lg mb-5">
					<span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
					<div className="flex flex-col flex-grow ml-4">
						<div className="flex">
							<span className="font-semibold">Abhishek</span>
							<span className="ml-auto text-sm">Time and date</span>
						</div>
						<p className="mt-1">Nice To meet Uhhh!!</p>
					<form>
          	<div className="flex mt-4">
							<button className="text-sm font-semibold">Like</button>
							<button className="ml-2 text-sm font-semibold">Reply</button>
							<button className="ml-2 text-sm font-semibold">Share</button>
						</div>
            </form>
					</div>
				</div>


				<div className="flex w-full p-8 border-b border-gray-300 bg-white rounded-lg">
					<span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
					<div className="flex flex-col flex-grow ml-4">
						<div className="flex">
							<span className="font-semibold">abhishek</span>
							<span className="ml-auto text-sm">Just now</span>
						</div>
						<p className="mt-1">HELLO</p>
						<div className="flex items-center justify-center h-64 mt-2 bg-gray-200">
							<span className="font-semibold text-gray-500">Image</span>
						</div>
						<div className="flex mt-2">
							<button className="text-sm font-semibold">Like</button>
							<button className="ml-2 text-sm font-semibold">Reply</button>
							<button className="ml-2 text-sm font-semibold">Share</button>
						</div>
					</div>
				</div>



			</div>
		</div>

		<div className="flex flex-col flex-shrink-0 w-5/2 py-4 pl-12 ">
			<div>
				<h3 className="mt-6 font-semibold">Trending</h3>


				<div className="flex w-full py-4 border-b border-gray-300">
					<span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
					<div className="flex flex-col flex-grow ml-2">
						<div className="flex text-sm">
							<span className="font-semibold">Abhishek</span>
						</div>
						<p className="mt-1 text-sm">Welcome!! This is our feed page </p>
					</div>
				</div>


				<div className="flex w-full py-4 border-b border-gray-300">
					<span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
					<div className="flex flex-col flex-grow ml-2">
						<div className="flex text-sm">
							<span className="font-semibold">Abhishek</span>
						</div>
						<p className="mt-1 text-sm">Welcome!! This is our feed page </p>
					</div>
				</div>


				<div className="flex w-full py-4 border-b border-gray-300">
					<span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
					<div className="flex flex-col flex-grow ml-2">
						<div className="flex text-sm">
							<span className="font-semibold">Abhishek</span>
						</div>
						<p className="mt-1 text-sm">Welcome!! This is our feed page </p>
					</div>
				</div>

				<div className="flex w-full py-4 border-b border-gray-300">
					<span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
					<div className="flex flex-col flex-grow ml-2">
						<div className="flex text-sm">
							<span className="font-semibold">Abhishek</span>
						</div>
						<p className="mt-1 text-sm">Welcome!! This is our feed page </p>
					</div>
				</div>

		
			</div>
		</div>
	</div>
</div>



        </div>
  )
}

export default Feed