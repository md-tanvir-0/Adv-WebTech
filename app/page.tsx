import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    
<body>
    <header>
        <nav>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Notice</a></li>
                    <li><Link href="/Login">Sign in</Link></li>
                    {/* <li><Link href="#"></Link></li> */}
                </ul>
            </div>
        </nav>
        
            <div>
                <a href="#">Rigister Now</a>
            
        </div>
    </header>
    <footer>
     <div>
         <p>Contact Us: info@abc.com</p>
     </div>
     <p>&copy; @DateTime.Now.Year By Tanvir </p>
 </footer>
</body>
  );
}
