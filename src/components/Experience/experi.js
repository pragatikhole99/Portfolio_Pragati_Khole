import React from "react";
import './experi.css'
const Experi = () => {
    return(
        <section id="experience">
        <span className="ExperiTitle">Work Experience</span>
        <div className="ExperiBars">
                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>GS Lab , Pune, Baner</h2>
                            <p>Software Engineer <br/>May-2022 - May-2023 
                            <br/>FrontEnd Developer on React js<br />Microsoft Dynamic CRM speciality</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>Industrial Training:</h2>
                            <p>Environment : React JavaScript , HTML5 , CSS , Bootstrap , MSSQL , Microsoft Dynamics CRM 365</p>
                        </div>
                    </div>
                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>Technologies</h2>
                            <p>Java , Power BI , Xamp Server</p>
                        </div>
                    </div>
        </div>
        
        </section>
    );
}

export default Experi;