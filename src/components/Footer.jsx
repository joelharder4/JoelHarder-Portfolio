import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex bottom-0 items-center justify-center text-primary mt-16">
      <footer className="w-full justify-between py-6 px-10 flex-col flex">
        <div className="w-full h-0 flex my-6 items-start border-[#d9d9d9] border-solid border-2" />
        <div className="w-full flex justify-between md:flex-row lg:flex-row flex-col">
          <p className='text-center'>
            © 2024 Joel Harder, All Rights Reserved.
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