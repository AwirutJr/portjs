import Link from 'next/link'
import Header from './components/Header/page'
import About from './components/About/page'
import Skill from './components/Skill/page'
import Project from './components/Project/page'
import Contect from './components/Contect/page'

export default function Home() {

  return (
    <div>
      
        <Header/>
        <About/>
        <Skill/>
        <Project/>
        <Contect/>

    </div>
  )
}
