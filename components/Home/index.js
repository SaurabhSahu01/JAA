import React from 'react'
import Image from 'next/image'

function Home() {
  return (
    <div>



<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tailwind Blog Template</title>
  <meta name="author" content="David Grzyb" />
  <meta name="description" content />
  {/* Tailwind */}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n        @import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');\n\n        .font-family-karla {\n            font-family: karla;\n        }\n    " }} />
  {/* AlpineJS */}
  {/* Font Awesome */}
  {/* Top Bar Nav */}

  <div className="container-fluid mx-auto flex flex-wrap bg-white ">

  {/* <div class="relative">
        <img src="https://images.indianexpress.com/2020/08/jnu-1200.jpg?"  className='blur h-auto max-w-full	'/>
        <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            KindaCode.com</h1>
        <h2 class="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
    </div> */}


    {/* Posts Section */}
    <section className="w-full md:w-2/3 flex flex-col items-center px-3 pt-5">
{/*  */}



      
      <article className="flex flex-col  rounded-md my-4 w-full bg-white">



  <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer ">
	<img class="object-cover w-full z-0" style={{height:'600px'}} src={"/jnu/jnu1.jpg"} />

	<div class="absolute top-0 left-0 px-6 py-4">
	  <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
	  {/* <p class="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p> */}
	</div>
  </div>


<center>
<div className='inline-block pt-56 pb-12   w-full'>  






<div class="inline-block mr-6 ml-6 ">
<a href=''>
<div class=" h-28 w-28  rounded-full items-center justify-center flex	" style={{backgroundColor:'#1B2D56'}}>
<img class="	 h-16 w-16 ... "src={"/icons/image-gallery.png"} /></div> 
<div class="      items-center justify-center mt-4 	">
<h2 class="font-semibold text-lg text-center text-gray-800 mt-2"> Gallary </h2>
<p class="mt-2 text-gray-800 text-center"> Click Here To see More </p> </div> </a>
</div>


<div class="inline-block mr-6 ml-6 ">
<a href=''>
<div class=" h-28 w-28  rounded-full items-center justify-center flex	" style={{backgroundColor:'#1B2D56'}}>
<img class="	 h-16 w-16 ... "src={"/icons/image-gallery.png"} /></div> 
<div class="      items-center justify-center mt-4 	">
<h2 class="font-semibold text-lg text-center text-gray-800 mt-2"> Gallary </h2>
<p class="mt-2 text-gray-800 text-center"> Click Here To see More </p> </div> </a>
</div>


<div class="inline-block mr-6 ml-6 ">
<a href=''>
<div class=" h-28 w-28  rounded-full items-center justify-center flex	" style={{backgroundColor:'#1B2D56'}}>
<img class="	 h-16 w-16 ... "src={"/icons/newspaper.png"} /></div> 
<div class="      items-center justify-center mt-4 	">
<h2 class="font-semibold text-lg text-center text-gray-800 mt-2"> Feeds </h2>
<p class="mt-2 text-gray-800 text-center"> Click Here To see More </p> </div> </a>
</div>

<div class="inline-block mr-6 ml-6 ">
<a href=''>
<div class=" h-28 w-28  rounded-full items-center justify-center flex	" style={{backgroundColor:'#1B2D56'}}>
<img class="	 h-16 w-16 ... "src={"/icons/briefcase.png"} /></div> 
<div class="      items-center justify-center mt-4 	">
<h2 class="font-semibold text-lg text-center text-gray-800 mt-2"> Jobs </h2>
<p class="mt-2 text-gray-800 text-center"> Click Here To see More </p> </div> </a>
</div>






</div>
</center> 






 
      </article>





  







    </section>






    {/* Sidebar Section */}
    <aside className="w-full md:w-1/3 flex flex-col items-center px-3 mt-5    ">
      <div className="w-full bg-white shadow flex flex-col my-4 p-6 rounded-md pb-5 home-gallary hide-scroll">
        <p className="text-xl font-semibold pb-5">Important Dates</p>


    
        <div class="w-full p-3 mt-4 bg-white rounded flex">
        <div tabindex="0" aria-label="loading icon" role="img" class="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path
        d="M7.99992 1.33333C8.17673 1.33333 8.3463 1.40357 8.47132 1.52859C8.59635 1.65361 8.66659 1.82318 8.66659 1.99999V3.99999C8.66659 4.17681 8.59635 4.34638 8.47132 4.4714C8.3463 4.59642 8.17673 4.66666 7.99992 4.66666C7.82311 4.66666 7.65354 4.59642 7.52851 4.4714C7.40349 4.34638 7.33325 4.17681 7.33325 3.99999V1.99999C7.33325 1.82318 7.40349 1.65361 7.52851 1.52859C7.65354 1.40357 7.82311 1.33333 7.99992 1.33333ZM7.99992 11.3333C8.17673 11.3333 8.3463 11.4036 8.47132 11.5286C8.59635 11.6536 8.66659 11.8232 8.66659 12V14C8.66659 14.1768 8.59635 14.3464 8.47132 14.4714C8.3463 14.5964 8.17673 14.6667 7.99992 14.6667C7.82311 14.6667 7.65354 14.5964 7.52851 14.4714C7.40349 14.3464 7.33325 14.1768 7.33325 14V12C7.33325 11.8232 7.40349 11.6536 7.52851 11.5286C7.65354 11.4036 7.82311 11.3333 7.99992 11.3333ZM14.6666 8C14.6666 8.17681 14.5963 8.34638 14.4713 8.4714C14.3463 8.59642 14.1767 8.66666 13.9999 8.66666H11.9999C11.8231 8.66666 11.6535 8.59642 11.5285 8.4714C11.4035 8.34638 11.3333 8.17681 11.3333 8C11.3333 7.82318 11.4035 7.65361 11.5285 7.52859C11.6535 7.40357 11.8231 7.33333 11.9999 7.33333H13.9999C14.1767 7.33333 14.3463 7.40357 14.4713 7.52859C14.5963 7.65361 14.6666 7.82318 14.6666 8ZM4.66659 8C4.66659 8.17681 4.59635 8.34638 4.47132 8.4714C4.3463 8.59642 4.17673 8.66666 3.99992 8.66666H1.99992C1.82311 8.66666 1.65354 8.59642 1.52851 8.4714C1.40349 8.34638 1.33325 8.17681 1.33325 8C1.33325 7.82318 1.40349 7.65361 1.52851 7.52859C1.65354 7.40357 1.82311 7.33333 1.99992 7.33333H3.99992C4.17673 7.33333 4.3463 7.40357 4.47132 7.52859C4.59635 7.65361 4.66659 7.82318 4.66659 8ZM12.7139 12.714C12.5889 12.839 12.4194 12.9092 12.2426 12.9092C12.0658 12.9092 11.8963 12.839 11.7713 12.714L10.3573 11.3C10.2358 11.1743 10.1686 11.0059 10.1701 10.8311C10.1717 10.6563 10.2418 10.4891 10.3654 10.3654C10.489 10.2418 10.6562 10.1717 10.831 10.1702C11.0058 10.1687 11.1742 10.2359 11.2999 10.3573L12.7139 11.7707C12.7759 11.8326 12.8251 11.9061 12.8586 11.987C12.8922 12.068 12.9094 12.1547 12.9094 12.2423C12.9094 12.3299 12.8922 12.4167 12.8586 12.4976C12.8251 12.5786 12.7759 12.6521 12.7139 12.714ZM5.64259 5.64266C5.51757 5.76764 5.34803 5.83785 5.17125 5.83785C4.99448 5.83785 4.82494 5.76764 4.69992 5.64266L3.28659 4.22933C3.16149 4.10432 3.09118 3.93474 3.09112 3.7579C3.09105 3.58105 3.16125 3.41142 3.28625 3.28633C3.41126 3.16123 3.58084 3.09092 3.75768 3.09086C3.93453 3.0908 4.10416 3.16099 4.22925 3.28599L5.64259 4.7C5.76757 4.82501 5.83778 4.99455 5.83778 5.17133C5.83778 5.3481 5.76757 5.51764 5.64259 5.64266ZM3.28659 12.714C3.1616 12.589 3.09139 12.4194 3.09139 12.2427C3.09139 12.0659 3.1616 11.8963 3.28659 11.7713L4.70059 10.3573C4.76208 10.2937 4.83565 10.2429 4.91698 10.2079C4.99832 10.173 5.0858 10.1546 5.17432 10.1538C5.26284 10.1531 5.35062 10.1699 5.43256 10.2034C5.51449 10.237 5.58892 10.2865 5.65152 10.3491C5.71411 10.4117 5.76361 10.4861 5.79713 10.568C5.83065 10.65 5.84752 10.7377 5.84675 10.8263C5.84598 10.9148 5.82759 11.0023 5.79265 11.0836C5.75771 11.1649 5.70693 11.2385 5.64325 11.3L4.22992 12.714C4.168 12.776 4.09448 12.8252 4.01355 12.8587C3.93261 12.8923 3.84586 12.9095 3.75825 12.9095C3.67064 12.9095 3.58389 12.8923 3.50296 12.8587C3.42203 12.8252 3.3485 12.776 3.28659 12.714ZM10.3573 5.64266C10.2323 5.51764 10.1621 5.3481 10.1621 5.17133C10.1621 4.99455 10.2323 4.82501 10.3573 4.7L11.7706 3.28599C11.8956 3.1609 12.0652 3.09059 12.242 3.09053C12.4189 3.09046 12.5885 3.16066 12.7136 3.28566C12.8387 3.41067 12.909 3.58025 12.9091 3.75709C12.9091 3.93394 12.8389 4.10357 12.7139 4.22866L11.2999 5.64266C11.1749 5.76764 11.0054 5.83785 10.8286 5.83785C10.6518 5.83785 10.4823 5.76764 10.3573 5.64266Z"
        fill="#F59E0B"/> </svg>
        </div> <div class="pl-3">
        <p tabindex="0" class="focus:outline-none text-sm leading-none">WE haved Organized an Event on xyz Days<span class="text-indigo-700"> </span></p>
        <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
        </div></div> 


 
        <div class="w-full p-3 mt-4 bg-white rounded flex">
        <div tabindex="0" aria-label="loading icon" role="img" class="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path
        d="M7.99992 1.33333C8.17673 1.33333 8.3463 1.40357 8.47132 1.52859C8.59635 1.65361 8.66659 1.82318 8.66659 1.99999V3.99999C8.66659 4.17681 8.59635 4.34638 8.47132 4.4714C8.3463 4.59642 8.17673 4.66666 7.99992 4.66666C7.82311 4.66666 7.65354 4.59642 7.52851 4.4714C7.40349 4.34638 7.33325 4.17681 7.33325 3.99999V1.99999C7.33325 1.82318 7.40349 1.65361 7.52851 1.52859C7.65354 1.40357 7.82311 1.33333 7.99992 1.33333ZM7.99992 11.3333C8.17673 11.3333 8.3463 11.4036 8.47132 11.5286C8.59635 11.6536 8.66659 11.8232 8.66659 12V14C8.66659 14.1768 8.59635 14.3464 8.47132 14.4714C8.3463 14.5964 8.17673 14.6667 7.99992 14.6667C7.82311 14.6667 7.65354 14.5964 7.52851 14.4714C7.40349 14.3464 7.33325 14.1768 7.33325 14V12C7.33325 11.8232 7.40349 11.6536 7.52851 11.5286C7.65354 11.4036 7.82311 11.3333 7.99992 11.3333ZM14.6666 8C14.6666 8.17681 14.5963 8.34638 14.4713 8.4714C14.3463 8.59642 14.1767 8.66666 13.9999 8.66666H11.9999C11.8231 8.66666 11.6535 8.59642 11.5285 8.4714C11.4035 8.34638 11.3333 8.17681 11.3333 8C11.3333 7.82318 11.4035 7.65361 11.5285 7.52859C11.6535 7.40357 11.8231 7.33333 11.9999 7.33333H13.9999C14.1767 7.33333 14.3463 7.40357 14.4713 7.52859C14.5963 7.65361 14.6666 7.82318 14.6666 8ZM4.66659 8C4.66659 8.17681 4.59635 8.34638 4.47132 8.4714C4.3463 8.59642 4.17673 8.66666 3.99992 8.66666H1.99992C1.82311 8.66666 1.65354 8.59642 1.52851 8.4714C1.40349 8.34638 1.33325 8.17681 1.33325 8C1.33325 7.82318 1.40349 7.65361 1.52851 7.52859C1.65354 7.40357 1.82311 7.33333 1.99992 7.33333H3.99992C4.17673 7.33333 4.3463 7.40357 4.47132 7.52859C4.59635 7.65361 4.66659 7.82318 4.66659 8ZM12.7139 12.714C12.5889 12.839 12.4194 12.9092 12.2426 12.9092C12.0658 12.9092 11.8963 12.839 11.7713 12.714L10.3573 11.3C10.2358 11.1743 10.1686 11.0059 10.1701 10.8311C10.1717 10.6563 10.2418 10.4891 10.3654 10.3654C10.489 10.2418 10.6562 10.1717 10.831 10.1702C11.0058 10.1687 11.1742 10.2359 11.2999 10.3573L12.7139 11.7707C12.7759 11.8326 12.8251 11.9061 12.8586 11.987C12.8922 12.068 12.9094 12.1547 12.9094 12.2423C12.9094 12.3299 12.8922 12.4167 12.8586 12.4976C12.8251 12.5786 12.7759 12.6521 12.7139 12.714ZM5.64259 5.64266C5.51757 5.76764 5.34803 5.83785 5.17125 5.83785C4.99448 5.83785 4.82494 5.76764 4.69992 5.64266L3.28659 4.22933C3.16149 4.10432 3.09118 3.93474 3.09112 3.7579C3.09105 3.58105 3.16125 3.41142 3.28625 3.28633C3.41126 3.16123 3.58084 3.09092 3.75768 3.09086C3.93453 3.0908 4.10416 3.16099 4.22925 3.28599L5.64259 4.7C5.76757 4.82501 5.83778 4.99455 5.83778 5.17133C5.83778 5.3481 5.76757 5.51764 5.64259 5.64266ZM3.28659 12.714C3.1616 12.589 3.09139 12.4194 3.09139 12.2427C3.09139 12.0659 3.1616 11.8963 3.28659 11.7713L4.70059 10.3573C4.76208 10.2937 4.83565 10.2429 4.91698 10.2079C4.99832 10.173 5.0858 10.1546 5.17432 10.1538C5.26284 10.1531 5.35062 10.1699 5.43256 10.2034C5.51449 10.237 5.58892 10.2865 5.65152 10.3491C5.71411 10.4117 5.76361 10.4861 5.79713 10.568C5.83065 10.65 5.84752 10.7377 5.84675 10.8263C5.84598 10.9148 5.82759 11.0023 5.79265 11.0836C5.75771 11.1649 5.70693 11.2385 5.64325 11.3L4.22992 12.714C4.168 12.776 4.09448 12.8252 4.01355 12.8587C3.93261 12.8923 3.84586 12.9095 3.75825 12.9095C3.67064 12.9095 3.58389 12.8923 3.50296 12.8587C3.42203 12.8252 3.3485 12.776 3.28659 12.714ZM10.3573 5.64266C10.2323 5.51764 10.1621 5.3481 10.1621 5.17133C10.1621 4.99455 10.2323 4.82501 10.3573 4.7L11.7706 3.28599C11.8956 3.1609 12.0652 3.09059 12.242 3.09053C12.4189 3.09046 12.5885 3.16066 12.7136 3.28566C12.8387 3.41067 12.909 3.58025 12.9091 3.75709C12.9091 3.93394 12.8389 4.10357 12.7139 4.22866L11.2999 5.64266C11.1749 5.76764 11.0054 5.83785 10.8286 5.83785C10.6518 5.83785 10.4823 5.76764 10.3573 5.64266Z"
        fill="#F59E0B"/> </svg>
        </div> <div class="pl-3">
        <p tabindex="0" class="focus:outline-none text-sm leading-none">WE haved Organized an Event on xyz Days<span class="text-indigo-700"> </span></p>
        <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
        </div></div> 



         
        <div class="w-full p-3 mt-4 bg-white rounded flex">
        <div tabindex="0" aria-label="loading icon" role="img" class="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path
        d="M7.99992 1.33333C8.17673 1.33333 8.3463 1.40357 8.47132 1.52859C8.59635 1.65361 8.66659 1.82318 8.66659 1.99999V3.99999C8.66659 4.17681 8.59635 4.34638 8.47132 4.4714C8.3463 4.59642 8.17673 4.66666 7.99992 4.66666C7.82311 4.66666 7.65354 4.59642 7.52851 4.4714C7.40349 4.34638 7.33325 4.17681 7.33325 3.99999V1.99999C7.33325 1.82318 7.40349 1.65361 7.52851 1.52859C7.65354 1.40357 7.82311 1.33333 7.99992 1.33333ZM7.99992 11.3333C8.17673 11.3333 8.3463 11.4036 8.47132 11.5286C8.59635 11.6536 8.66659 11.8232 8.66659 12V14C8.66659 14.1768 8.59635 14.3464 8.47132 14.4714C8.3463 14.5964 8.17673 14.6667 7.99992 14.6667C7.82311 14.6667 7.65354 14.5964 7.52851 14.4714C7.40349 14.3464 7.33325 14.1768 7.33325 14V12C7.33325 11.8232 7.40349 11.6536 7.52851 11.5286C7.65354 11.4036 7.82311 11.3333 7.99992 11.3333ZM14.6666 8C14.6666 8.17681 14.5963 8.34638 14.4713 8.4714C14.3463 8.59642 14.1767 8.66666 13.9999 8.66666H11.9999C11.8231 8.66666 11.6535 8.59642 11.5285 8.4714C11.4035 8.34638 11.3333 8.17681 11.3333 8C11.3333 7.82318 11.4035 7.65361 11.5285 7.52859C11.6535 7.40357 11.8231 7.33333 11.9999 7.33333H13.9999C14.1767 7.33333 14.3463 7.40357 14.4713 7.52859C14.5963 7.65361 14.6666 7.82318 14.6666 8ZM4.66659 8C4.66659 8.17681 4.59635 8.34638 4.47132 8.4714C4.3463 8.59642 4.17673 8.66666 3.99992 8.66666H1.99992C1.82311 8.66666 1.65354 8.59642 1.52851 8.4714C1.40349 8.34638 1.33325 8.17681 1.33325 8C1.33325 7.82318 1.40349 7.65361 1.52851 7.52859C1.65354 7.40357 1.82311 7.33333 1.99992 7.33333H3.99992C4.17673 7.33333 4.3463 7.40357 4.47132 7.52859C4.59635 7.65361 4.66659 7.82318 4.66659 8ZM12.7139 12.714C12.5889 12.839 12.4194 12.9092 12.2426 12.9092C12.0658 12.9092 11.8963 12.839 11.7713 12.714L10.3573 11.3C10.2358 11.1743 10.1686 11.0059 10.1701 10.8311C10.1717 10.6563 10.2418 10.4891 10.3654 10.3654C10.489 10.2418 10.6562 10.1717 10.831 10.1702C11.0058 10.1687 11.1742 10.2359 11.2999 10.3573L12.7139 11.7707C12.7759 11.8326 12.8251 11.9061 12.8586 11.987C12.8922 12.068 12.9094 12.1547 12.9094 12.2423C12.9094 12.3299 12.8922 12.4167 12.8586 12.4976C12.8251 12.5786 12.7759 12.6521 12.7139 12.714ZM5.64259 5.64266C5.51757 5.76764 5.34803 5.83785 5.17125 5.83785C4.99448 5.83785 4.82494 5.76764 4.69992 5.64266L3.28659 4.22933C3.16149 4.10432 3.09118 3.93474 3.09112 3.7579C3.09105 3.58105 3.16125 3.41142 3.28625 3.28633C3.41126 3.16123 3.58084 3.09092 3.75768 3.09086C3.93453 3.0908 4.10416 3.16099 4.22925 3.28599L5.64259 4.7C5.76757 4.82501 5.83778 4.99455 5.83778 5.17133C5.83778 5.3481 5.76757 5.51764 5.64259 5.64266ZM3.28659 12.714C3.1616 12.589 3.09139 12.4194 3.09139 12.2427C3.09139 12.0659 3.1616 11.8963 3.28659 11.7713L4.70059 10.3573C4.76208 10.2937 4.83565 10.2429 4.91698 10.2079C4.99832 10.173 5.0858 10.1546 5.17432 10.1538C5.26284 10.1531 5.35062 10.1699 5.43256 10.2034C5.51449 10.237 5.58892 10.2865 5.65152 10.3491C5.71411 10.4117 5.76361 10.4861 5.79713 10.568C5.83065 10.65 5.84752 10.7377 5.84675 10.8263C5.84598 10.9148 5.82759 11.0023 5.79265 11.0836C5.75771 11.1649 5.70693 11.2385 5.64325 11.3L4.22992 12.714C4.168 12.776 4.09448 12.8252 4.01355 12.8587C3.93261 12.8923 3.84586 12.9095 3.75825 12.9095C3.67064 12.9095 3.58389 12.8923 3.50296 12.8587C3.42203 12.8252 3.3485 12.776 3.28659 12.714ZM10.3573 5.64266C10.2323 5.51764 10.1621 5.3481 10.1621 5.17133C10.1621 4.99455 10.2323 4.82501 10.3573 4.7L11.7706 3.28599C11.8956 3.1609 12.0652 3.09059 12.242 3.09053C12.4189 3.09046 12.5885 3.16066 12.7136 3.28566C12.8387 3.41067 12.909 3.58025 12.9091 3.75709C12.9091 3.93394 12.8389 4.10357 12.7139 4.22866L11.2999 5.64266C11.1749 5.76764 11.0054 5.83785 10.8286 5.83785C10.6518 5.83785 10.4823 5.76764 10.3573 5.64266Z"
        fill="#F59E0B"/> </svg>
        </div> <div class="pl-3">
        <p tabindex="0" class="focus:outline-none text-sm leading-none">WE haved Organized an Event on xyz Days<span class="text-indigo-700"> </span></p>
        <p tabindex="0" class="focus:outline-none text-xs leading-3 pt-1 text-gray-500">2 hours ago</p>
        </div></div> 


     
      </div>


      <div className="w-full bg-white shadow rounded-lg flex flex-col my-4 p-6 round-md  home-gallary  hide-scroll">
        <p className="text-xl font-semibold pb-5 pt-5">Gallary</p>
        <div class="grid grid-cols-2 md:grid-cols-2 gap-2 home-gallary hide-scroll">
  
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu2.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu1.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
        <div><img class="h-30  max-w-full  rounded-lg" src={"/jnu/jnu3.jpg"} alt=""/></div>
       

    
 
</div>


    
      </div> 
     
    </aside>
  </div>
  <footer className="w-full border-t " style={{backgroundColor:"#E9EFFF"}}>
 

<div className='font-medium place-self-center justify-self-center text-2xl  pt-12 w-full'>  <center>Gallery  of Fame</center>  
</div>

    <div className=" py-24 sm:py-24">
    
    
    <ul role="list" className="grid  sm:grid-cols-3  ">


    <div class="    p-5">
<img class="w-32 h-32 rounded-full mx-auto" src={"/jnu/nirmala.jpg"} alt="Profile picture"/>
<h2 class="text-center text-2xl font-semibold mt-3">Nirmala Sitharaman</h2>
<p class="text-center text-gray-600 mt-1 pb-8">Minister of Finance & Corporate Affairs</p>

</div>


<div class=" p-5">
<img class="w-32 h-22 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"/>
<h2 class="text-center text-2xl font-semibold mt-3">S. Jaishankar</h2>
<p class="text-center text-gray-600 mt-1">Minister of External Affairs</p>


</div>


<div class=" p-5">
<img class="w-32 h-22 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"/>
<h2 class="text-center text-2xl font-semibold mt-3">Abhijit Banerjee</h2>
<p class="text-center text-gray-600 mt-1">Nobel Laureate in Economics (2019)</p>


</div>



</ul>
</div>


  </footer>
</div>


    </div>
  )
}

export default Home