import React from 'react';
import BoardMember from './BoardMember';

// Import board photos here similarly to Aiden and Sydney
import Aiden from '../static/IMG_2728.jpg';
import Sydney from '../static/IMG_4016.jpg';

const Board = () => {
  return (
    <div className="text-white min-h-screen bg-black b">
      <div className="container mx-auto md:py-16 bg-black">
        <h1 className="text-5xl md:text-6xl mb-24 text-center md:inter font-bold bg-black pt-24">Our Advisory Board</h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-12 justify-center bg-black mb-32">
            <BoardMember img={Aiden} name={"John Doe"} description={"Professor of Behavorial Psychology at Harvard University"} />
            <BoardMember img={Sydney} name={"Jane Doe"} description={"Professor of Behavorial Psychology at Harvard University"} />
            <BoardMember img={Aiden} name={"John Doe"} description={"Professor of Behavorial Psychology at Harvard University"} />
            <BoardMember img={Sydney} name={"Jane Doe"} description={"Professor of Behavorial Psychology at Harvard University"} />
        </div>
      </div>
    </div>
  );
}

export default Board;
