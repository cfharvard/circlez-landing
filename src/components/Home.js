import { useState } from 'react';
import home from '../static/Circlez_logo.png';
import lift from '../static/Gym_Circle.png';
import appStoreBadge from '../static/appstore.png'; // Ensure you have this badge image in your static assets
import { Modal, Box } from '@mui/material';
import Form from './Form.js';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '1px solid #fff',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  color: 'black'
};

const Home = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className="bg-black w-screen lg:border-y border-gray-400">
      <p className="text-white text-6xl md:inter font-bold pt-44 text-center "> A <span className='text-indigo-400'> hub </span> for motivation.</p>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 ">
        <div className="mr-10 lg:mr-0 lg:ml-40 lg:pt-20 col-span-1 mb-20 lg:mb-36 pt-16">
          <p className="ml-12 text-white text-center lg:text-left lg:mt-24 text-3xl md:text-4xl font-bold">
            A social productivity app helping young adults achieve their biggest goals.
          </p>
          <p className="ml-12 text-zinc-500 text-center lg:text-left text-2xl mt-5">
            Download the app and start achieving your goals today!
          </p>
          <div className='ml-12 flex justify-center lg:justify-start items-center'>
            {/* App Store button */}
            <a href="https://apps.apple.com/us/app/circlez-shared-goals/id6477159436" target="_blank" rel="noopener noreferrer">
              <img src={appStoreBadge} alt="Download on the App Store" className="mt-5 md:mt-7 lg:h-24" />
            </a>
          </div>
        </div>
        <div className="lg:pt-10 md:pb-12 lg:pb-0 flex justify-center flex-col md:flex-row items-center md:col-span-1">
          <div className='md:-mt-10 md:mr-5 mb-10 '>
            <img src={home} alt="Circlez logo" className="max-w-full h-auto" />
          </div>
          <div className='md:mt-20 mb-10 md:mr-5 '>
            <img src={lift} alt="Gym Circle" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Form handleClose={handleClose} />
        </Box>
      </Modal>
    </main>
  );
}

export default Home;
