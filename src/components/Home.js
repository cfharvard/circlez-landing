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
    <main className="flex flex-col items-center justify-center bg-black w-screen lg:border-y border-gray-400 pb-20 min-h-screen">
  <div className="flex flex-col items-center align-middle justify-center">
    <p className="text-white text-6xl md:inter font-bold pt-44 text-center "> OKR  <span className='text-indigo-400'>software </span> for manufacturing managers.</p>
    <p className="text-zinc-500 text-center lg:text-left text-4xl mt-5">
        Limited spots available. Join the waitlist below.
    </p>
  </div>
  <div className="flex justify-center">
    <a href="https://forms.gle/RjXZrBvdbAZkfar59" target="_blank" rel="noopener noreferrer" className="px-10 py-6 mt-8 bg-indigo-500 text-white rounded-lg font-bold text-3xl">
      Join Waitlist
    </a>
  </div>
</main>
  );
}

export default Home;
