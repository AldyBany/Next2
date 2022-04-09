import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <section className="section">
    <h2 classNameName="section__title">Pouquoi Nous?</h2>
    <div className="skills__container container grid">

     <div className="skills__box">
         <h3 className="skills__box__title">Trust and Service is our Priority</h3>
         <p className="skills__box__description">Trusted and reliable service is our main goal extremely painful. Nor again is there anyone who loves our to take a trivial example, which of us undertakes chooses</p>
         <div className="skills__box__img">
             <Image width={200}  height={140} src="./assets/choose.webp" alt=""/>
         </div>
     </div>
    
        
         <div className="skills__content">
             <h3 className="skills__title">Master Technicien with Extensive Knowledge</h3>
             <p className="skills__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus id ad fuga, debitis error harum officiis, tempore repellendus, quo sunt distinctio fugit esse explicabo. Eos doloremque delectus exercitationem dicta qui?</p>

             <ul className="skills__items">
                 <li className="assurance__item">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 assurance__icon" viewBox="0 0 20 20" fill="currentColor">
                         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                       </svg> */}
                       <span>Master Technicien</span>
                    
                 </li>

                 <li className="assurance__item">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 assurance__icon" viewBox="0 0 20 20" fill="currentColor">
                         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                       </svg> */}
                       <span>Master Technicien</span>
                    
                 </li>

                 <li className="assurance__item">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 assurance__icon" viewBox="0 0 20 20" fill="currentColor">
                         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                       </svg> */}
                       <span>Master Technicien</span>
                    
                 </li>

                 <li className="assurance__item">
                     {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 assurance__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                         <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                         <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                       </svg> */}
                       <span>Master Technicien</span>
                    
                 </li>

                 <li className="assurance__item">
         
                     {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 assurance__icon" viewBox="0 0 20 20" fill="currentColor">
                         <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                       </svg> */}
                       <span>Master Technicien</span>
                    
                 </li>
                
             </ul>
         </div>
        
    </div>
</section>
  )
}

export default Skills