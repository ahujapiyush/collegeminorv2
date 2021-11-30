import {Button} from 'react-bootstrap'
import React from 'react'
import '../Css/Instruction.css'
function Instruction() {
    return (
        <>
        <div className="examname">
            Exam Name
        </div>
            <div style={{fontStyle : "italic bold" , textAlign : "center",marginTop:"1rem" }}>
                Please Read the following Instruction carefully
            </div>
            <div className="examname" style={{textAlign:"left" , marginLeft:"1rem" , border : "none"}}>
                General Instructions :
            </div>
            <ol type="1" style={{marginTop : ".7rem" , marginLeft : "2rem" , margin: "02% 10%" , lineHeight : 2}}>
                <li>
                    1. Total of 30 Minutes duration will be given to attempt the questions.
                </li>
                <li>
                    2. The clock has benn set at the server and the countdown timer at the top right corner of your screen will be displayed the time remaining for you to complete the exam. When the clock runs out the exam ends by default. you are not required to end or submit your exam. 
                </li>
                <li>
                    3. The Question palette at the right of screen shows one of the following statuses of each of the question numbered :  
                </li><br /><br />
                <div>Check FIGMA</div>
                
            </ol>
            <div className="Checkbox">
                <span>
                <input className="Introbox" type="checkbox" name="" id="" />      <label style={{color : "white", marginLeft:"1rem"}} htmlFor="">The computer provided to me is in proper working condition. I have Readed the Terms and Conditions</label> 
</span></div>
<div className="d-grid gap-2" style={{width:"30%" , height : "20%" , display:"flex" , margin : " 2rem auto"}}>
<Button  variant="success" size="md" >Start Exam</Button>
</div>
        </>
    )
}

export default Instruction
