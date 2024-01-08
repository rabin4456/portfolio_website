import React from "react";
import NavBar from "@/ui/navBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-row-reverse '>
      <NavBar />
      <main className='md:pr-[10rem] min-h-screen w-full  '>{children}</main>
    </div>
  );
};

export default AppLayout;
