
import './Splash.css';
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";


function Splash() {
  return (
    <>
      <div className='splash-container'>
        <div className='text-section'>
          <div>
            Hello, I'm
            <h1 className='title'> Connor Van Etten </h1> 
            <h2 className='subtitle'> Software Developer</h2>
            Are you in need of a skilled software developer to help bring your designs 
            and projects to life? Look no further, I am here to help. I'm Connor Van Etten,
            and I specialize in taking an idea and making it possible.           
            
            <div className='imp-links'>
              <div>
              <FaGithub />
            </div>
            <div>
              <FaDev />
            </div>
            <div>
              <FaLinkedinIn />
            </div>
            </div>
          </div>

        </div>
        <div className='personal-img'>
          <img src={require('..//assets/Dev.png')} className='dev-img' />
        </div>
      </div>
    </>
  );
}

export default Splash;
