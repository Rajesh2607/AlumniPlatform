import network from './header.jpg'
import alumni from './alumni.jpeg'
import student from './student.jpeg'
import institute from './institute.jpeg'
import p1 from './p1.jpeg'
import p2 from './p2.jpeg'
import p3 from './p3.jpeg'
import hamburger from './hamburger.png'
import networking1 from './networking.json'
import loginimg from './login.json'
import registerimg from './register.json'

export {
  network, hamburger, networking1, loginimg, registerimg
}

export const navLinks = [
    {title:"Home", href:"/"},
    {title:"About", href:"/"},
    {title:"What`s New", href:"/"},
    {title:"Contact", href:"/"}
]

  export const networking = [
    {title:"Students", img:student, benfits:["Mentorship", "Learning", "Connections"]},
    {title:"Alumni", img:alumni, benfits:["Updates & Events", "Career Help", "ReConnecting"]},
    {title:"Institution", img:institute, benfits:["Alumni Directory", "Donations", "Placements"]}
]

export  const testmonials = [
  {name:"John Doe", img:p1, text:"This platform has been a game-changer for me! Connecting with experienced alumni helped me land my first internship and gain valuable career advice."},
  {name:"Von Smith", img:p2, text:"As an alumnus, I love giving back by mentoring students. It's fulfilling to see them grow and succeed, and this platform makes it so easy to stay connected."},
  {name:"Salintosh", img:p3, text:"This platform has been a game-changer for me! Connecting with experienced alumni helped me land my first internship and gain valuable career advice."}
]