import Link from 'next/link';
import React from 'react';
import cookieCutter from "cookie-cutter";
import Loader from '../common/Loader';
import { useRouter } from 'next/router';
function Contact() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [state, setvalue] = React.useState({
    'firstName': "",
    'lastName': "",
    'number': "",
    'email': "",
    'message': "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    setvalue({ ...state, [id]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(state);

    await fetch('/api/contact', {
      method: "POST",
      headers: {
        "authorization": `Bearer ${cookieCutter.get('userToken')} ${cookieCutter.get('refreshToken')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    }).then((res) => { return res.json() }).then((res) => {
      setLoading(false);
      console.log(res)
    }).catch((err) => {
      setLoading(false);
      console.log(err);
    });
  }

  return (
    <div className='min-h-screen  flex items-center justify-center'>
      {loading && <div className='h-screen w-full fixed top-0 right-0 z-[200] backdrop-blur-sm'>
        <Loader color="#1B2D56" loading={loading} size={70} />
      </div>}
      <div className="flex flex-col py-4">
        <div className="text-center m-10 mt-0">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className='text-sm '>Any question & remark just write us a message</p>
        </div>

        <div className='w-fit md:flex md:flex-row flex-col content-center bg-[#ffffff] p-2 rounded-md text-slate-100' >
          <div className='w-full md:w-6/12 bg-[#1B2D56] rounded-md'>
            <div className='text-center px-6 py-2'>
              <h3 className='text-2xl font-bold'>Contact Informations</h3>
              <p className='text-sm '>say somthing to start a live chat</p>
            </div>

            <div className='flex flex-col content-start m-10 '>
              <div className='flex my-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a className='mx-3 font-light text-sm' href="tel:+919717129297"><span>+91-9717129297</span></a>
              </div>

              <div className='flex my-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a className='mx-3 font-light text-sm' href="mailto: connect@jnualumniassociation.com"><span>connect@jnualumniassociation.com</span></a>
              </div>
            </div>

            <div className="flex h-1/3 mt-4 space-x-6 justify-start items-center sm:mt-0 p-10">
              <Link href="https://www.facebook.com/profile.php?id=100095223584273&mibextid=LQQJ4d" className="text-slate-200 hover:text-gray-900 ">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link href="https://instagram.com/jnualumniassociation?igshid=MzRlODBiNWFlZA==" className="text-slate-200 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link href="#" className="text-slate-200 hover:text-gray-900 ">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
              </Link>
            </div>
          </div>


          <form className='relative m-5 text-gray-700 flex flex-col items-end' onSubmit={async (e) => {
              await handleSubmit(e);
              router.push('/')
          }}>
            {/* inputs */}
            <div className='grid grid-cols-2 gap-2 h-20'>
              <div className='flex flex-col  m-2'>
                <label className='text-sm py-1' htmlFor="firstName">FirstName</label>
                <input className='border-b-2 bg-transparent px-2 py-1 enabled:hover:border-[#1B2D56] focus:outline-none' onChange={handleChange} value={state.firstName} id='firstName' type="text" required />
              </div>
              <div className='flex flex-col  m-2'>
                <label className='text-sm py-1' htmlFor="lastName">LastName</label>
                <input className='border-b-2 bg-transparent px-2 py-1 enabled:hover:border-[#1B2D56] focus:outline-none' onChange={handleChange} value={state.lastName} id='lastName' type="text" required />
              </div>
            </div>

            <div className='flex flex-col m-2 mx-2 min-w-full'>
              <label className='text-sm py-1' htmlFor="email">Email</label>
              <input className='border-b-2 bg-transparent px-2 py-1 enabled:hover:border-[#1B2D56] focus:outline-none' onChange={handleChange} value={state.email} id='email' type="text" required />
            </div>

            <div className='flex flex-col m-2 mx-2 min-w-full'>
              <label className='text-sm py-1' htmlFor="number">Mobile</label>
              <input className='border-b-2 bg-transparent px-2 py-1 enabled:hover:border-[#1B2D56] focus:outline-none' onChange={handleChange} value={state.number} id='number' type="tel" required />
            </div>

            <div className='flex flex-col m-2  mx-2 my-10 min-w-full' >
              <label className='text-sm py-1' htmlFor="message">Message</label>
              <input className='border-b-2 bg-transparent px-2 py-1 enabled:hover:border-[#1B2D56] focus:outline-none' onChange={handleChange} value={state.message} placeholder='Write your message...' id='message' type="text" required />
            </div>

            <img className='absolute bottom-[-7rem] left-[-12rem] z-10' src="/contact/sendpng.webp" alt="" />

            <button type='submit' className='bg-[#1B2D56] hover:bg-[#2e4578] rounded-md p-3 text-slate-100 w-48'>Send Message</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact