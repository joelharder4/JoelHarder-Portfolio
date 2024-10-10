import React, { useEffect } from 'react';
import Terminal from '../components/emulator/Terminal.jsx';
import { useTerminal } from '../tools/useTerminal.jsx';
// import { useTranslation } from 'react-i18next';

const About = () => {
  // const { t } = useTranslation();

  const {
    history,
    pushToHistory,
    setTerminalRef,
    resetTerminal,
  } = useTerminal();


  useEffect(() => {
    resetTerminal();

    pushToHistory(<>
        <div><strong>Welcome!</strong> to the terminal.</div>
        <div>Use `help` to see a list of all supported commands.</div>
      </>
    );
  }, []);

  return (
    <div className='text-primary mt-32'>
      <div className='flex justify-center'>
        <Terminal 
          history={history}
          ref={setTerminalRef}
          promptLabel='$'
        />
      </div>
    </div>
  )

  // return (
  //   <div className='mt-28 w-full font-sans text-primary'>
  //     <div className='w-full flex items-center justify-center'>
  //       <div className='w-[90vw] md:w-[75vw] flex flex-col gap-16'>
  //         <h1 className='md:text-8xl text-6xl font-semibold text-secondary font-["Lalezar"]'>
  //           About Joel
  //         </h1>
  //         <div>
  //           <p className='text-justify whitespace-pre-wrap text-sm md:text-lg'>
  //             <img src='/img/hiking_cropped.png' alt='Me on a hike' className='max-w-[30vw] border-4 border-primary float-left mr-8'/>
              
  //             <div>{t('homepageDesc')}</div>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default About;