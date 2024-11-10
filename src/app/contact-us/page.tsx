
import custom from './custom.module.css'
export default function Contactus(){
    return(
     
     <div className={custom.para2}>
        <h1 className={custom.heading1}>GET IN TOUCH:</h1>
        <p className={custom.para1}>We had love to hear from you!Whether 
            you have a question,comment,or concern my team is here to serve you</p>
        <h1 className={custom.heading1}>CONTACT INFORMATION:</h1>
        <h2 className={custom.para1}>Email:tabassum12@gmail.com</h2>
        <h2 className={custom.para1}>contact no:541-987543-98</h2>
       <h2 className={custom.para1}>facebook://httpsaimatabassum</h2>
            
        
       
    <form className={custom.form}>
    <div>
        <div>
            <img  className={custom.img}src="https://specials-images.forbesimg.com/imageserve/5faee2789a92b5cdfcf8d238/960x0.png?fit=scale"></img>
        </div>
<h1 className={custom.ch1}>Contact Us</h1>
<p>Please fill the form below</p>
 </div>
 <div>
    <label htmlFor="full name">Full Name:</label>
    <input  className={custom.cform} type="text" id="fullname" placeholder="name"/>
    </div>
    <div>
    <label htmlFor="Email">Email:</label>
    <input className={custom.cform} type="text" id="fullname" placeholder="@gmail.com"/>
    </div>
    
    <div>    <label htmlFor="message">Message</label>
    <textarea
    className={custom.cform}
     id="message" 
     placeholder="type message here...">
</textarea>
    </div>
<button className={custom.button}  type="submit">SEND</button>
 </form>
    </div>
   )} 
     
 