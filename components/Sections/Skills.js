import React from 'react'
import Image from 'next/image'

const Skills = () => {
  return (
    <section className="section">
        <h2 className="section__title">Pourquoi Nous?</h2>
    <div className="skills__container container grid">

     <div className="skills__box">
         <h3 className="skills__box__title">Trust and Service is our Priority</h3>
         <p className="skills__box__description">Trusted and reliable service is our main goal extremely painful. Nor again is there anyone who loves our to take a trivial example, which of us undertakes chooses</p>
         <div className="skills__box__img">
             {/* <Image width={180}  height={180} src="/assets/choose.webp" alt=""/> */}
         </div>
     </div>
    
        
         <div className="skills__content">
             <h3 className="skills__title">Master Technicien with Extensive Knowledge</h3>
             <p className="skills__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus id ad fuga, debitis error harum officiis, tempore repellendus, quo sunt distinctio fugit esse explicabo. Eos doloremque delectus exercitationem dicta qui?</p>
         </div>
        
    </div>
</section>
  )
}

export default Skills