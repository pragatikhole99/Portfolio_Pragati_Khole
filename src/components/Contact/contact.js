import React , {useRef} from "react";
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

  

    emailjs
      .sendForm('service_ato3hci', 'template_f0z8oki', form.current, 'h4L_Z0UPCHuMVMlNU')
      .then(
        (result) => {
          console.log( result.text);
          alert("Email Successfully Sent")
          // You can add a success message or redirect the user to a thank-you page.
        },
        (error) => {
          console.error( error.text);
          alert("Error")
          // You can display an error message to the user.
        }
      );
    };
    return(
        
    
   <div class="background" >
  <div class="container" id="contact">
    <div class="screen">
      
      <div class="screen-body"> 
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
           <div class="app-contact">CONTACT INFO : +917775877133</div>
        </div>
        
          <form ref= {form}  onSubmit={sendEmail}>
          <div class="screen-body-item">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME" 
              type="text" name="from_name" required/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL" type="email" name="user_email" required/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="YOUR MESSAGE" name="message" required/>
            </div>
            <div class="app-form-group buttons">
              <button type="submit" class="app-form-button" value="Send" >Submit</button>
            </div>
          </div>
          </form>
        
    </div>
      <div className="links">
                        <img src={FacebookIcon} alt="facebook" className="link" />
                        <img src={TwitterIcon} alt="twitter" className="link" />
                        <img src={YouTubeIcon} alt="youtube" className="link" />
                        <img src={InstagramIcon} alt="instagram" className="link" />
      </div>
    </div>
  </div>
</div> 
);
}


export default Contact; 