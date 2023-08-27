import React from 'react'
import Typewriter from 'typewriter-effect'
import cookieCutter from "cookie-cutter";
import { toast, Toaster } from 'react-hot-toast';
import { db } from '@/src/utils/firebase';
import { doc, getDoc } from "firebase/firestore"
import Loader from '../common/Loader';
import { useRouter } from 'next/router';

function Join() {
  const router = useRouter();
  const [reciept, setReciept] = React.useState(null);
  const [proofJNU, setProofJNU] = React.useState(null);
  const [status, setStatus] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [showToast, setShowToast] = React.useState(true);

  const getVerified = async () => {
    if (reciept && proofJNU) {
      setLoading(true);
      // send it to admin with user id...
      const formData = new FormData();
      formData.append('image1', reciept);
      formData.append('image2', proofJNU);

      await fetch(`/api/verification`, {
        method: "POST",
        headers: {
          "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`,
        },
        body: formData,
      }).then((res) => { return res.json() }).then((res) => {
        console.log(res);
        setProofJNU(null)
        setReciept(null);
        setLoading(false);
      }).catch((err) => {
        console.log(err);
      });
    }
  }
  React.useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 2000)
    const uid = cookieCutter.get('uid');
    const documentRef = doc(db, 'users', uid);
    getDoc(documentRef).then(docSnapshot => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        if (data.verified === true) {
          setStatus(true);
        }
        else if (data.verified === 'pending') {
          setStatus('pending')
        }
      }
    }).catch(err => {
      console.error('error getting the user verification status ', err);
    })
  }, [])
  React.useEffect(() => {
    toast.custom((t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-[2rem] w-[2rem] object-contain"
                src="/header/JNUlogo.webp"
                alt="JNU icon"
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                JNU Alumni Association
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Please Join The Alumni Family
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-primarycolor hover:text-primarycolor focus:outline-none focus:ring-2 focus:ring-primarycolor"
          >
            Close
          </button>
        </div>
      </div>
    ))
  })

  return (
    (status === false) ? <div className='h-screen w-full'>
      <div>
        {showToast && <Toaster toastOptions={{ duration: 1000 }} position='top-center' />}
        {loading && <div className='h-screen w-full fixed top-0 right-0 z-[200] backdrop-blur-sm'>
          <Loader color="#1B2D56" loading={loading} size={70} />
        </div>}
        <div className='flex flex-col items-center'>
          <p className='md:text-3xl xs:text-2xl font-semibold text-primarycolor tracking-wider text-center'>JNU Alumni Association</p>
          <div className='text-sm text-primarycolor font-light'>
            <Typewriter
              options={{
                strings: ['Be The Part Of This Alumni Family', 'Stay Connected and Stay Updated'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>



        <div className=' w-11/12 sm:w-5/6 mx-auto mt-10 bg-slate-200/50 backdrop-blur-sm rounded-md p-4'>
          <div className=' mt-5'>
            <h1 className='text-2xl font-semibold my-3'>To become a website member, there is a membership fee of Rs. 500. Please follow these steps:</h1>
            <p className=' font-light text-base leading-6'>
              1. Make a payment of Rs. 500 to the following bank details:<br/><br/>
              Bank Name: <span className='font-semibold'>Bank of Baroda Chanakyapuri</span><br/>
              Account Name: <span className='font-semibold'>Jnu Alumni Association</span><br/>
              Account Number: <span className='font-semibold'>00940100006687</span><br/>
              IFSC Code: <span className='font-semibold'>BARBOCHANAK</span><br/><br/>

              2. After making the payment, please upload a receipt confirming the transaction.<br/>

              3. Additionally, provide proof of your JNU alumni status. This can be in the form of a marks sheet or any other relevant document. If you don&apos;t have any such proof, kindly contact us at 9717129297 for further assistance.
              <br/><br/> <span className='text-md font-medium'>Thank you for your interest in joining our website membership.</span>
            </p>
          </div>


          <div className='my-10 flex flex-col gap-5 items-center  md:flex-row md:justify-around md:items-center'>
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
              <label htmlFor="document" className=' p-2 bg-primarycolor text-white rounded-md text-base font-medium cursor-pointer inline-block w-max'>Upload Payment Receipt</label>
              {reciept && <p className=' text-xs font-light text-center absolute -bottom-4 right-[50%] translate-x-[50%]'>1 file uploded</p>}
            </div>
            <div className='relative w-min'>
              <input
                type="file"
                id='proof'
                className='hidden'
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setProofJNU(e.target.files[0]);
                }}
              />
              <label htmlFor="proof" className=' p-2 bg-primarycolor text-white rounded-md text-base font-medium cursor-pointer inline-block w-max'>Upload JNU Alumni Proof</label>
              {proofJNU && <p className=' text-xs font-light text-center absolute -bottom-4 right-[50%] translate-x-[50%] w-max '>1 file uploded</p>}
            </div>
            <button
              className={` ${(!reciept || !proofJNU) ? " cursor-not-allowed text-black bg-slate-300" : " cursor-pointer bg-primarycolor text-white"} py-2 px-3 text-base rounded-lg`}
              onClick={async () => {
                await getVerified();
                router.push('/join');
              }}
            >Submit</button>
          </div>
        </div>


      </div>
    </div> : (status === true) ?
      // for status === true
      <div className='h-screen w-full flex flex-row items-center justify-center'>
        <p className='md:text-3xl xs:text-xl p-2 animate-bounce font-semibold text-center text-green-600'>Congratulations! You are now a member of the JNU Alumni Association Family 🎉</p>
      </div> :
      (status === 'pending') &&
      // for status === 'pending'
      <div className='h-screen w-full flex flex-row items-center justify-center'>
        <p className='md:text-3xl xs:text-xl p-2 animate-bounce font-semibold text-center text-primarycolor'>Your documents have been sent for the verification! Please wait till the verification is done. 🙏🏻</p>
      </div>
  )
}

export default Join