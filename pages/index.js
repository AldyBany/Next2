import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Sections/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import About from '../components/Sections/About'
import CTA from '../components/Sections/CTA'
import Services from '../components/Sections/Services'
import Skills from '../components/Sections/Skills'

export default function Home() {
  return (
    <div>
      <Banner/>
      <About/>
      <Services/>
      <CTA/>
      <Skills/>
      <Footer/>
    
    </div>
  )
}
