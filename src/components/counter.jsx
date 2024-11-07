// Counter.jsx
import React, { useState, useEffect } from 'react';
import '../sass/counter.scss';

function Counter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  const [flipping, setFlipping] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newState = { ...prev };
        
        // Update seconds
        if (prev.seconds > 0) {
          newState.seconds = prev.seconds - 1;
          setFlipping(prev => ({ ...prev, seconds: true }));
        } else {
          newState.seconds = 59;
          setFlipping(prev => ({ ...prev, seconds: true }));
          
          // Update minutes
          if (prev.minutes > 0) {
            newState.minutes = prev.minutes - 1;
            setFlipping(prev => ({ ...prev, minutes: true }));
          } else {
            newState.minutes = 59;
            setFlipping(prev => ({ ...prev, minutes: true }));
            
            // Update hours
            if (prev.hours > 0) {
              newState.hours = prev.hours - 1;
              setFlipping(prev => ({ ...prev, hours: true }));
            } else {
              newState.hours = 23;
              setFlipping(prev => ({ ...prev, hours: true }));
              
              // Update days
              if (prev.days > 0) {
                newState.days = prev.days - 1;
                setFlipping(prev => ({ ...prev, days: true }));
              }
            }
          }
        }

        // Reset flip states after animation
        setTimeout(() => {
          setFlipping({
            days: false,
            hours: false,
            minutes: false,
            seconds: false
          });
        }, 600);

        return newState;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const padNumber = (num) => num.toString().padStart(2, '0');

  const getNextNumber = (current, type) => {
    if (current === 0) {
      switch (type) {
        case 'seconds':
        case 'minutes':
          return 59;
        case 'hours':
          return 23;
        case 'days':
          return current;
        default:
          return current;
      }
    }
    return current - 1;
  };

  const FlipCard = ({ number, label, isFlipping }) => (
    <div className="flip-unit-container">
      <div className="flip-card">
        <div className={`top-half ${isFlipping ? 'flip' : ''}`}>
          <div className="top-number">{padNumber(number)}</div>
        </div>
        <div className="hinge">
          <div className="hinge-dot left"></div>
          <div className="hinge-dot right"></div>
        </div>
        <div className="bottom-half">
          <div className="bottom-number">{padNumber(number)}</div>
        </div>
        <div className={`flip-top ${isFlipping ? 'flip' : ''}`}>
          <div className="top-number">{padNumber(getNextNumber(number, label))}</div>
        </div>
      </div>
      <div className="label">{label}</div>
    </div>
  );

  return (
    <div className="counter-container">
      <h1>We're launching soon</h1>
      <div className="flip-clock">
        <FlipCard number={timeLeft.days} label="days" isFlipping={flipping.days} />
        <FlipCard number={timeLeft.hours} label="hours" isFlipping={flipping.hours} />
        <FlipCard number={timeLeft.minutes} label="minutes" isFlipping={flipping.minutes} />
        <FlipCard number={timeLeft.seconds} label="seconds" isFlipping={flipping.seconds} />
      </div>
    </div>
  );
}

export default Counter;