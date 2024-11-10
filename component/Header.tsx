

import Link from "next/link"
import custom from "./custom.module.css"
export default function Header(){
    return(<div>
  <ul className={custom.header}>
 <li><Link  href="/">home</Link></li>
    <li><Link href="/about-us">about-us</Link></li>
    <li><Link href="/skills">skills</Link></li>
    <li><Link  href="/contact-us">Contact-us</Link></li>
    </ul>  
         
    </div>
    )
}