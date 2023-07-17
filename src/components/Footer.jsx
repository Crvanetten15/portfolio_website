
import './Footer.css';

import {IoMdChatboxes} from "react-icons/io"
import {FaDev, FaGithubAlt, FaLinkedinIn} from "react-icons/fa"

function Footer() {
  return (
    <>
      <div className='foot-container'>
        <div className='blank-space'>

        </div>
        <div className='bottom-space'>
          <div className='collab-holder'>
          <div className='collab'>
            <div className='proj-title'>Start a project</div>
            <div>I would love to hear from you and discuss how we can collaborate.
            </div>
            <div >
            <div className='button-c'>
            <IoMdChatboxes id = "chat"/> Let's Chat
            </div>
            </div>
          </div>
          </div>

          <div >
          <div >
          <div className='cont-bb'>
          <img src={require("../logo512.png")} alt = "" id= "bottom-img"/>
          </div>
          <div className='cont-bb'>
            "Crafting the Software of Tomorrow"
          </div>

          </div>
          <div className='contacts'>
            <div className='contact-tags'>
              <FaGithubAlt />
            </div>
            <div className='contact-tags'>
              <FaLinkedinIn />
            </div>
            <div className='contact-tags'>
              <FaDev />
            </div>

          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;