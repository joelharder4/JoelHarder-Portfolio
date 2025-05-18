import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex bottom-0 items-center justify-center text-primary-text mt-auto">
      <footer className="w-full justify-between pb-6 pt-4 px-10 flex-col flex">
        <div className="w-full h-0 flex my-6 items-start border-[#d9d9d9] border-solid border-2" />
        <div className="w-full flex justify-between md:flex-row lg:flex-row flex-col">
          <p className='md:text-left text-center'>
            © {new Date().getFullYear()} Joel Harder, All Rights* Reserved.
            <span className='text-xs'><br/>* with the exception of every right</span>
          </p>
          
          <div className='md:float-right md:text-right text-center'>
            <p>joelharder4@gmail.com</p>
            <p>(226) 218-9358</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;