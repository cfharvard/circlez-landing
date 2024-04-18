import React from 'react';
import NavBar from './NavBar';
import Aiden from '../static/IMG_2728.jpg';
import Sydney from '../static/IMG_4016.jpg';
import Joseph from '../static/Joseph.png';
import Kathy from '../static/Kathy.png';
import Chris from '../static/chris_picture.jpg'
import Rushil from '../static/Rushil-HeadShot.jpeg'
const Team = () => {
  return (
    <div className="text-white min-h-screen bg-black b max-width-100 overflow-x-hidden">
      {/* <NavBar /> */}
      <div className="container flex-col justify-center mx-auto md:py-6 bg-black">
        <h1 className="text-5xl md:text-6xl mb-12 text-center md:inter font-bold bg-black pt-12">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 justify-center bg-black mb-10">
          <div className="bg-zinc-900 rounded-3xl p-8 b flex flex-col items-center justify-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
              <img src={Sydney} alt="Sydney" className="rounded-lg mt-10 mb-10 w-2/3" />
              <p className="font-bold text-xl mb-4 text-white bg-zinc-900 md:inter">Sydney Wiredu - Co-Founder</p>
              <p className="text-sm text-white bg-zinc-900 md:inter">
                  Sydney is a sophomore at Harvard College double concentrating in Neuroscience and Economics on a pre-med track. He has a mind for innovation and seeks to inspire change in the next generation of future leaders. His entrepreneurial spirit stems from his firsthand experience dealing with outdated and inequitable systems. To him, Circlez is an initiative that levels the playing field by giving everyone, regardless of background or environment, an opportunity to challenge themselves and establish meaningful connections.
              </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 b flex flex-col items-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
              <img src={Aiden} alt="Aiden" className="rounded-lg mb-4 w-1/2 mb-10" />
              <p className="font-bold text-xl mb-4 text-white bg-zinc-900 md:inter">Aiden Tahmazian - Co-Founder</p>
              <p className="text-sm text-white bg-zinc-900 md:inter">
                  Aiden is a sophomore at Rowan University majoring in Mechanical Engineering with a minor in Mathematics. His entrepreneurial passion stems from his parents who came to America to build a new life for themselves. With a passion for design and service, he wanted to create a product that would not only help others but revolutionize an industry as well. To him, Circlez resembles the support system that he, Sydney, and their friends had in grade school, and he wants to share it with others. In his free time, Aiden enjoys reading, playing basketball, tennis, pickleball, and spending time with loved ones.
              </p>
          </div>
          
          <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
              <img src={Joseph} alt="Joseph" className="rounded-lg mt-10 mb-10 w-2/3" />
              <p className="font-bold text-xl mb-4 text-white bg-zinc-900 md:inter">Joseph Oronto-Pratt - Software Engineer</p>
              <p className="text-sm text-white bg-zinc-900 md:inter">
                Joseph is a sophomore at Harvard College concentrating in Computer Science and Statistics. He is driven by interests in several technical areas, including machine learning, data science, and the current and future use of quantum computation to bolster enhancements to these fields. More importantly, he is keen on harnessing technology to foster real-world impact, visionary outcomes, and concentric circles of community, which he is proud to do as part of the Circlez team. In his free time, Joseph enjoys playing the saxophone, listening to bass-boosted remixes, following the NFL, and discovering new cuisines and dishes with his friends.
              </p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
              <img src={Chris} alt="Chris" className="rounded-lg mt-10 mb-10 w-2/3" />
              <p className="font-bold text-xl mb-4 text-white bg-zinc-900 md:inter">Christopher Ferreira - Software Engineer</p>
              <p className="text-sm text-white bg-zinc-900 md:inter">
                Chris is a sophomore at Harvard College concentrating in Statistics with a secondary in Computer Science.
                He is passionate about using tech as a wide net as many people as possible. To him, Circlez fulfills that mission 
                by providing a platform where people can not only improve themselves but also help others do the same. In his free time, 
                Chris enjoys cooking, listening to music, and going on long walks.
              </p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
              <img src={Rushil} alt="Rushil" className="rounded-lg mt-10 mb-10 w-2/3" />
              <p className="font-bold text-xl mb-4 text-white bg-zinc-900 md:inter">Rushil Kagithala - Software Engineer</p>
              <p className="text-sm text-white bg-zinc-900 md:inter">
                Rushil is a freshman at Michigan State studying Computer Science with a minor in Computational Mathematics. He loves the field 
                of technology and is always looking for ways to innovate and create new things. He is excited to be part of Circlez! Outside of school and Circlez, Rushil
                loves to play tennis and volunteer at his local tennis club.  
              </p>
          </div>
          <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col items-center justify-center shadow-lg shadow-black ml-14 mr-14 md:ml-0 md:mr-0">
            <img src={Kathy} alt="Kathy" className="rounded-lg mt-10 mb-10 w-2/3" />
            <p className="font-bold text-xl mb-4 text-white bg-zinc-900 md:inter">Kathy Zhong - UI/UX Designer</p>
            <p className="text-sm text-white bg-zinc-900 md:inter">
              Kathy is a junior at Harvard College studying Computer Science. She is a product designer who loves combining problem-solving and her love for the arts, 
              and has recently been leveraging tech and nonprofit work in the social impact space. In her free time, she enjoys music, keeping up with the latest fashion trends, and trying new foods.
            </p>
          </div>
          </div>
        </div>
        <div className="m-2">
          <h1 className="text-3xl mb-6 font-bold text-gray-300 text-center md:inter">Founders' Story</h1>
          <p className="text-md text-white text-center md:inter text-zinc-500 m-10 mt-0 md:mr-0">
              Sydney and Aiden have been best friends since early middle school. From being tennis teammates, to graduating
              top of their class, to getting admissions to all Ivy League schools and West Point, 
              they decided to build a product that reflected the <span className="text-indigo-400 font-bold">accountability and motivation</span> they had with one another.
          </p>
        </div>
      </div>
  );
}

export default Team;
