import React from 'react'
import Link from 'next/link'

export default function Header({handleOnClick, ActiveIndex}) {
    
    return (
        <>
            {/* HEADER */}
            <div className="cavani_tm_header">
                <div className="logo">
                    <a href="#"><img src="img/logo/dark.png" alt="" /></a>
                </div>
                <div className="menu">
                    <ul className="transition_link">
                        <li onClick={() => handleOnClick(0)}><Link href="#home"><a className={ActiveIndex === 0 ? "active" : ""}>Home</a></Link></li>
                        <li onClick={() => handleOnClick(1)}><Link href="#about"><a className={ActiveIndex === 1 ? "active" : ""}>About</a></Link></li>
                        <li onClick={() => handleOnClick(2)}><Link href="#portfolio"><a className={ActiveIndex === 2 ? "active" : ""}>Portfolio</a></Link></li>
                        <li onClick={() => handleOnClick(7)}><Link href="#service"><a className={ActiveIndex === 7 ? "active" : ""}>Service</a></Link></li>
                        <li onClick={() => handleOnClick(3)}><Link href="#news"><a className={ActiveIndex === 3 ? "active" : ""}>News</a></Link></li>
                        <li onClick={() => handleOnClick(4)}><Link href="#contact"><a className={ActiveIndex === 4 ? "active" : ""}>Contact</a></Link></li>
                    </ul>
                    {/* <span className="ccc" /> */}
                </div>
            </div>
            {/* /HEADER */}

        </>
    )
}
