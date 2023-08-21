import React from 'react'
import Typewriter from 'typewriter-effect'

function Join() {

  const [reciept, setReciept] = React.useState(null);
  const [uploaded, setUploaded] = React.useState(false);

  const getVerified = async () => {
    if (reciept) {
      // send it to admin with user id...
    }
  }

  return (
    <>
      <div className='mt-10'>
        <div className='flex flex-col items-center'>
          <p className='text-3xl font-semibold'>JNU Alumni Association</p>
          <div className='font-light text-sm text-blue-600'>
            <Typewriter
              options={{
                strings: ['Be The Part Of This Alumni Family', 'Stay Connected and Stay Updated'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>



        <div className=' w-11/12 sm:w-5/6 mx-auto mt-10 bg-white rounded-md p-4'>
          <h1 className=' font-semibold text-2xl text-blue-400'>Rs.500/- to join website membership as per below Bank Details and upload reciept</h1>
          <div className=' mt-10'>
            <h1 className='text-2xl font-semibold '>Bank Details:</h1>
            <div className=' font-light text-base leading-6'>
              Bank of Baroda Chanakyapuri <br />
              A/C Name: Jnu Alumni Association <br />
              A/C No:00940100006687 <br />
              IFSC:BARBOCHANAK
            </div>
          </div>


          <div className='my-10 flex flex-col gap-4  sm:flex-row sm:justify-around items-center'>
            <div className='relative w-min'>
              <input
                type="file"
                id='document'
                className='hidden'
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setReciept(e.target.files[0]);
                }}
              />
              <label htmlFor="document" className=' p-2 bg-blue-400 hover:bg-blue-300 rounded-md text-base font-medium cursor-pointer inline-block w-max'>Upload Reciept here</label>
              {reciept && <p className=' text-xs font-light text-center absolute -bottom-4 right-[50%] translate-x-[50%] w-max '>1 file uploded</p>}
            </div>
            <button
              className={` ${!reciept ? " cursor-not-allowed" : " cursor-pointer"} py-2 px-3 bg-slate-400 hover:bg-slate-300 text-base rounded-lg`}
              onClick={getVerified}
            >Submit</button>
          </div>
        </div>


      </div>
    </>
  )
}

export default Join