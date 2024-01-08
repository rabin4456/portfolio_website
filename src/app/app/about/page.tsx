import Button from "@/components/button";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

export default function About() {
  return (
    <section className='flex min-h-screen flex-col md:items-center  py-24'>
      <p className='text-6xl font-black text-primary-500 uppercase mb-20 text-center'>
        <span className='dark:text-white text-black pr-1'>About </span>
        Me
      </p>
      <div className='p-5 py-10'>
        <div className='flex lg:gap-56 gap-5 lg:flex-row flex-col'>
          {/* presonal info */}
          <div className='flex flex-col lg:gap-0 gap-5'>
            <p className='text-4xl font-bold pb-6 text-gray-500 dark:text-white'>
              PERSONAL INFOS
            </p>
            <div className='flex-1 grid md:grid-cols-2 grid-cols-1   text-gray-400 font-medium'>
              <p className='lg:p-0 py-3'>
                First Name :
                <span className='dark:text-white text-gray-900 pl-1 '>
                  Rabin
                </span>
              </p>
              <p className='lg:p-0 py-3'>
                Last Name :
                <span className='dark:text-white text-gray-900 pl-1'>
                  Thapa
                </span>
              </p>
              <p className='lg:p-0 py-3'>
                Age :
                <span className='dark:text-white text-gray-900 pl-1'>
                  26 years
                </span>
              </p>
              <p className='lg:p-0 py-3'>
                Nationality :
                <span className='dark:text-white text-gray-900 pl-1'>
                  Nepali
                </span>
              </p>
              <p className='lg:p-0 py-3'>
                Freelance :
                <span className=' text-green-500 pl-1'>Available</span>
              </p>
              <p className='lg:p-0 py-3'>
                Address :
                <span className='dark:text-white text-gray-900 pl-1'>
                  Lokanthali,Bhaktapur
                </span>
              </p>
              <p className='lg:p-0 py-3'>
                Phone :
                <span className='dark:text-white text-gray-900  pl-1'>
                  Rabin
                </span>
              </p>
              <p className='lg:p-0 py-3'>
                Email :
                <span className='dark:text-white text-gray-900  pl-1'>
                  mr.rabin.thapa@gmail.com
                </span>
              </p>
              <p className='lg:p-0 py-3'>
                Language :
                <span className='dark:text-white text-gray-900  pl-1'>
                  English,Nepali,Hindi
                </span>
              </p>
            </div>
            <div>
            <Button label="download cv" icon={<ArrowDownTrayIcon/>}/>
          </div>
          </div>

          {/* CV */}
         

          {/* experience */}
          <div className='flex flex-col gap-7'>
            <div className='p-10  border border-gray-200 dark:border-dark-400 rounded-md'>
              <h1 className='text-6xl font-extrabold text-primary-500'>
                2<sup>+</sup>
              </h1>
              <div className='flex items-start gap-3'>
                <p className='h-[1px] w-12 bg-gray-400 mt-3' />
                <p className='uppercase text-lg '>
                  years of <br /> experience
                </p>
              </div>
            </div>
            <div className='p-10 border border-gray-200 dark:border-dark-400 rounded-md'>
              <h1 className='text-6xl font-extrabold text-primary-500'>
                10<sup>+</sup>
              </h1>
              <div className='flex items-start gap-3'>
                <p className='h-[1px] w-12 bg-gray-400 mt-3' />
                <p className='uppercase text-lg '>
                  completed
                  <br /> projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
