import React from "react";
import './intro.css';
// import bg from '../../assets/image.jpg';
import btnImg from '../../assets/hireme.png';
import {Link} from 'react-scroll' ;
const Intro = () =>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Pragati Khole</span><br/><span className="introSpeicalization">React Developer</span></span>
                <p className="IntroPara">I am a skilled web designer with experience in creating visually <br/>appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg" /> Hire Me</button></Link>
            </div>
            {/* <img src={bg} alt="Profile" className="bg" /> */}
        </section>
        
    )
}

export default Intro