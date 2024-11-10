
 import custom from './custom.module.css'
export default function Qualification(){
    return(<div>
<h1 className={custom.abouth } >My SKILLS are :-</h1>
<ul className={custom.skillp}>
    <li className ={custom.text}>1-programming Language:</li>
    <li>1-JavaScript 2-Python 3-Ruby</li>
    <li className={custom.text}>2-Frameworks:</li>
    <li>1-React 2-Angular 3-Vue</li>
    <li className={custom.text}>3-Databases:</li>
    <li>1-MySQL 2-MongoDB 3-PostgreSQL</li>
    <li className={custom.text}>4-Cloud Platforms:</li>
    <li>1-AWS 2-Azure 3-Google Cloud</li>
</ul>
<div>
    <img className={custom.img} src="https://www.softactivity.com/wp-content/uploads/project-management1400.jpg"></img>
</div>

<div>
<div><h2 className={custom.h}>MY PROJECT:-</h2></div>
<ul className={custom.project}>
<li>1-TO-DO-LIST</li>
<li>2-SIMPLE CALCULATOR</li>
<li>3-SELF QUIZ GAME</li>
<li>4-MY PORTFOLIO WEBSITE</li>
<li>5-STUDENT MANAGEMENT SYSTEM</li>
<li>6-STUDENT MANAGEMENT SYSTEM</li>
<li>7-COUNT DOWN TIMER</li>
<li>8-WORD COUNTER</li>
<li>9-SCHOOL MANAGEMENT SYSTEM</li>
</ul>
 
  </div> 
  </div>)
}