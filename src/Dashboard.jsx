import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import CustomSlider from './CustomSlider';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; 
import './Dashboard.css';
import logo from './Decos/altalogo.jpg';
import stock1 from './Decos/stock1.mp4';
import stock2 from './Decos/stars.mp4';
import stock3 from './Decos/ciel.mp4';
import lovyy from './Decos/tree.jpg';

const Dashboard = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const slides = [
    <video key="1" controls>
      <source src={stock1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>,
    <video key="2" controls>
      <source src={stock2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>,
    <video key="3" controls>
      <source src={stock3} type="video/mp4" />
      Your browser does not support the video tag.
    </video>,
  ];

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {

        navigate('/');
      })
      .catch((error) => {
        console.error('Error during logout: ', error);
      });
  };

  return (
    <div>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={10000}
          recycle={true}
        />
      )}
      <div className="image-container">
        <img src={logo} alt="Top Left Logo" className="top-left-image" />
        <div className='article-container'>
          <div className="article-content">
            <h2>Welcome To Your Own Unique World Made Especially For Such A Phenomenal Woman Crafted By The Hands Of The Almighty</h2>
            <p>
              Just like Nature, just like the sky, just like the beautiful clouds in the sky, the beautiful sunshine radiating its rays upon the Earth's atmosphere, we have always been fascinated by the beauty created by GOD himself. Similarly, we keep wondering how did GOD manage to pull off that kind of beauty? She, who is GOD's most unique, exquisite, which is of immeasurable worth be in existence on planet Earth? It is now known why we have weekends and weekdays. It has been written in many religious scriptures, 'GOD RESTED'. Now, we have come to the conclusion why. How could GOD's most priceless creation be pulled off without rest?
            </p>

            <CustomSlider slides={slides} autoplaySpeed={3000} />
            
            <div className='reminder'>
              <h2>Take A Look At What's For You</h2>
              <div className='message-card'>

                <Link to="/special-offer">
                  <div className="image-hover-container">
                    <img src={lovyy} alt="Special offer" className="hover-image" />

                    <div className="text-overlay">
                      <h3>Your Special Message</h3>
                      <p>Don't Miss Out!!!!!</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>


            <div className="logout-container">
              <button className="logout-button" onClick={handleLogout}>
                Visit Later
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


