import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
       <div className="footer__container container grid">
            <div className="footer__content">
                <h3 className="footer__title">
                    <a href="#" className="footer__logo">
                        <span className="name">Royal</span>
                        <span className="surname">Services</span>
                    </a>
                </h3>
                
                <p className="footer__description">I sent a gift and it gives <br/> happiness</p>
            </div>
            <div className="footer__content">
                <h3 className="footer__title">Our Services</h3>

                <ul>
                    <li><a href="" className="footer__link">Pricing</a></li>
                    <li><a href="" className="footer__link">Discounts</a></li>
                    
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Our Company</h3>

                <ul>
                    <li><a href="" className="footer__link">Blog</a></li>
                    <li><a href="" className="footer__link">About us</a></li>
                 
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Social</h3>

                <ul>
                    <li><a href="" className="footer__link">Pricing</a></li>
                    <li><a href="" className="footer__link">Discounts</a></li>
                   
                </ul>
            </div>
       </div>
   </footer>
  )
}

export default Footer