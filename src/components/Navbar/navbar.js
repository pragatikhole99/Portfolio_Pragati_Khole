import React , {useState} from "react";
import './navbar.css'
// import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png'
import { Link } from "react-scroll"; 
import Menu from '../../assets/menu.png'
const Navbar = () => {
    const [showMenu , setShowMenu] = useState (false);
    return (
        <nav className="navbar">
            
            {/* <img src= {logo} alt="logo" className='logo' /> */}
            <div className="desktopMenu"  >
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem" >Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >About Us</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Experience</Link>
                <Link activeClass="active" to="certification" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Certification</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem" >Contact</Link>
                
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior : "smooth"});
            }}>
                <img src={contactImg} alt="contactImg" className="desktopMenuImg"/>Contact Me
            </button>
            <img src= {Menu} alt="Menu" className='MobMenu' onClick={()=>setShowMenu(!showMenu)} />
            <div className="navMenu" style={{display : showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>About Us</Link>
                <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Experience</Link>
                <Link activeClass="active" to="certification" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Certification</Link>
                {/* <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Education</Link>  */}
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(!showMenu)}>Contact</Link>
            </div>
        
        </nav>
    )
}

export default Navbar