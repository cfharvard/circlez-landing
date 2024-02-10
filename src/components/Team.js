import React from 'react';
import NavBar from './NavBar';
import Aiden from '../static/IMG_2728.jpg';
import Sydney from '../static/IMG_4016.jpg';

const Team = () => {
  return (
    <div className="text-white min-h-screen bg-black b">
      {/* <NavBar /> */}
      <div className="container mx-auto md:py-16 bg-black">
        <h1 className="text-5xl md:text-6xl mb-24 text-center md:inter font-bold bg-black pt-24">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center bg-black mb-32">
          <div className="bg-zinc-900 rounded-3xl p-8 b flex flex-col items-center justify-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
              <img src={Sydney} alt="Sydney" className="rounded-lg mt-10 mb-10 w-2/3" />
              <p className="font-bold text-xl mb-4 text-whit bg-zinc-900 md:inter">Sydney Wiredu - Co-Founder</p>
              <p className="text-sm text-white bg-zinc-900 md:inter">
                  Sydney is a rising sophomore at Harvard College double concentrating in Neuroscience and Economics on a pre-med track. He has a mind for innovation and seeks to inspire change in the next generation of future leaders. His entrepreneurial spirit stems from his firsthand experience dealing with outdated and inequitable systems. To him, Circlez is an initiative that levels the playing field by giving everyone, regardless of background or environment, an opportunity to challenge themselves and establish meaningful connections.
              </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 b flex flex-col items-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
              <img src={Aiden} alt="Aiden" className="rounded-lg mb-4 w-1/2 mb-10" />
              <p className="font-bold text-xl mb-4 text-white bg-zinc-900 md:inter">Aiden Tahmazian - Co-Founder</p>
              <p className="text-sm text-white bg-zinc-900 md:inter">
                  Aiden is a rising sophomore at Rowan University majoring in Mechanical Engineering with a minor in Mathematics. His entrepreneurial passion stems from his parents who came to America to build a new life for themselves. With a passion for design and service, he wanted to create a product that would not only help others but revolutionize an industry as well. To him, Circlez resembles the support system that he, Sydney, and their friends had in grade school, and he wants to share it with others. In his free time, Aiden enjoys reading, playing basketball, tennis, pickleball, and spending time with loved ones.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
