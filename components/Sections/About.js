import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import Image from 'next/image'


const About = () => {

    const [isOpen, setOpen] = useState(false)
  return (
    <section className="container">
        <div className="about__container grid">
            <div className="about__img">
                {/* <Image width={280}  height={180} src="/assets/image_05.jpg" alt=""/> */}
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} /> */}

			    {/* <button className="btn-primary" onClick={()=> setOpen(true)}>VIEW DEMO</button> */}
            </div>
            <div className="about__content">
                <h5 className="about__uptitle">Bienvenue chez Royal Services</h5>
                <h3 className="about__title section__title">Qui Sommes Nous?</h3>
                <p className="about__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis non similique vitae optio ducimus ipsa placeat perspiciatis dolores minus modi dicta quaerat, eos unde quibusdam facere sint commodi expedita ratione.</p>
                <p className="about__description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto consectetur odio a molestiae sint minima placeat fugit quos perspiciatis nemo.
                </p>
                <div className="about__box">

                </div>
            </div>
        </div>
    </section>
  )
}

export default About