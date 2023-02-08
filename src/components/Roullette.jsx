import React, { useEffect, useState } from 'react';
import { games } from '../Tackles';

export default function Roullette() {
    const [tackles, setTackles] = useState('');
        useEffect(() => {
          setTackles(games)
        }, [])
  return (
    <div className='roullette'>
        <div className="number twelve">12</div>
        <div className="number three">3</div>
        <div className="number six">6</div>
        <div className="number nine">9</div>
        <div className="minute" />                    
        <div className="hour" /> 
        <div className="second">                    
          <div className="dot"></div>
        </div>   
    </div>
  );
}
