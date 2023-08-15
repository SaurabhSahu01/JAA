import React from 'react';
import { developmentimg, exclusiveimg } from './img';
import MemberCard from './MemberCard';

function About() {
  return (
    <>
      <div className='w-full bg-white p-1 sm:p-3'>
        <div className=' w-full sm:w-10/12 mx-auto p-3'>
          <h1 className='text-3xl my-5 font-semibold'>About JAA</h1>
          <div className='rounded-lg shadow-sm self-center flex flex-col md:flex-row w-full text-base font-normal'>
            <p className='p-4 text-justify md:w-2/4 bg-[#F5F5F5] rounded-md'>
              Our JNU days echo within us, weaving our paths and culminating in our esteemed status as JNU alumni. As we embark on a lifelong journey of learning, we remain connected, cherishing the unforgettable memories formed during our pivotal years at JNU. We owe a debt of gratitude to this institution, where formal and informal education shaped us into the individuals we are today.
              <br />
              <br />
              To honor this debt, let's pledge to contribute our time and efforts to enhance our alma mater, ensuring JNU thrives as a beacon of knowledge and growth. Together, we can create a nurturing environment that elevates JNU to new heights of excellence. The Alumni Association of JNU (JAA) reconnects us with our cherished alma mater. JAA fosters a sense of community among alumni, offering personal and professional support through community-driven initiatives.</p>

            <p className='p-4 mt-10 md:mt-0 md:ml-10 text-justify md:w-[50%] bg-[#F5F5F5] rounded-md'>Our esteemed alumni, including social scientists, scientists, civil servants, literary critics, media experts, foreign language specialists, journalists, political leaders, social activists, technologists, managers, and entrepreneurs, continue to make significant contributions to society's betterment. Together, we will expand our ranks and reinforce our impact.
              <br />
              <br />
              JAA aims to broaden our base of Life Members, fostering enduring connections between alumni and JNU. Acquiring Life Membership serves as a testament to our continued association. We encourage all alumni to embark on this profound journey by obtaining detailed information on the JAA website.</p>
          </div>


          <div className='mt-16 mx-6'>
            <h1 className=' text-3xl font-semibold text-center py-4 font-serif'>Executive Committee</h1>
            <div className=' flex flex-wrap gap-1 md:gap-2 items-center justify-center'>
              {
                exclusiveimg.map((data, index) => (
                  <MemberCard data={data} key={index} />
                ))
              }
            </div>

            <div className=' mt-16'>
              <h1 className=' text-2xl font-semibold text-center py-4'>Development Committee</h1>
              <div className=' flex flex-wrap gap-3 items-center justify-center'>
                {
                  developmentimg.map((data, index) => (
                    <MemberCard data={data} key={index} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;