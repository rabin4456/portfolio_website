"use client";
import Image from "next/image";
import photo from "../../../public/profile.jpg";
export default function Home() {
  return (
    <div className='w-full flex overflow-hidden relative'>
      <div className="w-[28rem] h-screen bg-primary-500 after:content-[''] after:bg-white after:dark:bg-dark-500    relative after:absolute after:h-[110vh] after:w-full after:origin-top-left after:-rotate-[10deg]   after:ml-[13rem]" />
      <div className='flex-1 h-screen ' />

      <div className='absolute h-[89vh] w-[34vw]  top-[6vh] left-10 rounded-3xl'>
        <Image
          alt='profile'
          src={require("/public/profile.jpg")}
          className='w-full h-full rounded-3xl bg-cover'
        />
      </div>
      <div className='absolute w-[40rem] h-40 left-1/2 top-[30%]'>
        <h1 className='text-6xl font-bold text-primary-500'>
          - I am Rabin Thapa
        </h1>
        <h1 className='text-5xl font-bold pl-10 pt-3'>Frontend Engineer</h1>
        <p className='py-5 pl-10 text-xl text-justify'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus fuga, officiis repellat suscipit dolore enim fugiat qui
          laborum illo minima a ipsum pariatur quis doloribus similique
          dignissimos adipisci iste ab.
        </p>
      </div>
    </div>
  );
}
