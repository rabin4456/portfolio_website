import React from "react";

interface IButton {
  label: string;
  icon?: React.ReactElement;
}

const Button = ({ label, icon }: IButton) => {
  return (
    <div className='flex gap-4 relative max-w-max cursor-pointer group'>
      <button className='uppercase   border-2  rounded-full border-primary-500 group-hover:bg-primary-500 group-hover:transition group-hover:duration-1000 group-hover:ease-in group-hover:text-white font-semibold py-4 px-6 pr-[70px]'>
        {label}
      </button>
      {icon && (
        <div className='absolute right-[1px] bg-primary-500 h-[57px] w-14 rounded-full flex items-center justify-center text-white'>
          {React.cloneElement(icon, { className: "h-6 w-6" })}
        </div>
      )}
    </div>
  );
};

export default Button;
