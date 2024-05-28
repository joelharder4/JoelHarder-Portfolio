import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomeV2 = () => {
  const navigate = useNavigate();

  return (
    <div className="font-['Lalezar'] text-primary bg-white">
      <div className="w-full h-[100vh]">
        <div className="w-fit flex md:flex-row flex-col-reverse lg:gap-16 gap-12 items-center mx-auto md:pt-[30vh] pt-[15vh]">
          <div className='md:w-full w-[90%] flex flex-col md:ml-8 items-center'>
            <div className="bg-gray-200 md:max-w-[700px] w-full">
              <p className="px-12 pt-12 text-5xl lg:text-7xl">
                Hi! I&apos;m <font className='text-secondary'>Joel Harder</font>
              </p>
              <p className="px-12 pb-12 text-xl lg:text-2xl">
                I am a <font className='text-secondary'>Computer Science</font> Student at the University of Guelph and Software Developer specializing in front-end.
              </p>
            </div>
            <div className='w-full flex flex-row items-center justify-center gap-6 mt-4'>
              <Button
                variant='contained'
                color='primary'
                onClick={() => {navigate('/about')}}
              >
                About Me
              </Button>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => {navigate('/projects')}}
              >
                My Projects →
              </Button>
            </div>
            
          </div>
          <div className="max-w-96 w-fit md:mr-12">
            <img
              alt="A picture of Joel Harder (as the Rizz God)"
              src="/img/rizz_god.jpg"
              className="relative z-10 drop-shadow-[25px_30px_0px_rgba(65,149,204,1)]"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-48 bg-gray-200 flex flex-col justify-center items-center">
        <h1 className='lg:text-6xl md:text-4xl text-2xl text-primary my-8 text-center'>
          Some of the Technologies I Know
        </h1>
        <div className="pb-12 px-4 grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-4">
          <img className="mx-auto" src='/img/logos/python.png' alt="Python Programming language logo"/>
          <img className="mx-auto" src='/img/logos/javascript.png' alt="Javascript Programming language logo"/>
          <img className="mx-auto" src='/img/logos/html.png' alt="HTML Programming language logo"/>
          <img className="mx-auto" src='/img/logos/react.png' alt="React Programming language logo"/>
          <img className="mx-auto" src='/img/logos/php.png' alt="PHP Programming language logo"/>
          <img className="mx-auto" src='/img/logos/mysql.png' alt="mySQL Programming language logo"/>
        </div>
      </div>
      <div className="w-full flex items-center justify-center text-primary mt-16">
        <footer className="w-full justify-between py-6 px-10 flex-col flex">
          <div className="gap-2 flex items-center flex-col justify-start">
            <p className="text-4xl font-semibold text-center">Joel Harder</p>

            <div className="flex items-center flex-row">
              <NavLink to="/about" className="mx-3">About</NavLink>
              <NavLink to="/projects" className="mx-3">Projects</NavLink>
              <NavLink to="/stories" className="mx-3">Stories</NavLink>
              <NavLink to="/reports" className="mx-3">Reports</NavLink>
            </div>
          </div>
          <div className="w-full h-0 flex my-6 items-start border-[#d9d9d9] border-solid border-2" />
          <div className="w-full flex items-center justify-between md:flex-row lg:flex-row flex-col">
            <p>
              © 2024 Joel Harder, All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomeV2;