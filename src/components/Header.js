import React from 'react'

export default function Header({children, title, styleClass, subTitle}) {
    return (
        <header>
            <div className="container-fluid">
                <div className={`row align-items-center ${styleClass}`}>
                <i className="material-icons">code</i>
                    <div className="col text-center">
                   
                    </div>
                        <h4 className="wrap text-light text-uppercase letter-spacing text-slanted">
                        {title}
                        </h4>

                        <h5 className=" letter-spacing textOrange text-slanted">
                        {subTitle}
                        </h5>
                        {children}
                    </div>
                
                </div>
            
        </header>
    )  
}
Header.defaultProps = {
        title: "Default Title",
        styleClass: "header-hero"
    }