
import './Stack.css';
import { FaPython, FaReact, FaJava, FaCss3Alt, FaAws, FaGit } from "react-icons/fa";
import { SiJavascript, SiPowershell } from "react-icons/si";


function Stack() {
  return (
    <>
      <div className='tech-container'>
        <div className='inside-box'>
        <div className='tech-item'>
          <FaPython />
        </div>
        <div className='tech-item'>
          <FaReact />
        </div>
        <div className='tech-item'>
          <FaJava />
        </div>
        <div className='tech-item'>
          <SiJavascript />
        </div>
        <div className='tech-item'>
          <FaCss3Alt />
        </div>
        <div className='tech-item'>
          <FaAws />
        </div>
        <div className='tech-item'>
          <FaGit />
        </div>
        <div className='tech-item'>
          <SiPowershell />
        </div>
        </div>
      </div>
    </>
  );
}

export default Stack;