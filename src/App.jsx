import './App.css'
import Topbar from './Topbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Fsd from './Fsd'
import Datascience from './Datascience'
import Cybersecurity from './Cybersecurity'
import Carrer from './Carrer'
import All from './All'
function App() {
  //this the all list of courses.
  let content = [
    {
      title: "6 Essential Prerequisites For Learning ReactJS.",
      imgsource: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
      type: "fsd"
    },
    {
      title: "How to Render an Array of Objects in React? [in 3 easy steps].",
      imgsource: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
      type: "fsd"
    },
    {
      title: "Use ReactJS to Fetch and Display Data from API - 5 Simple Steps.",
      imgsource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdozvAF4_fyzUGal2yFoEUyDEksKlTf2orLsI5XVXL7BFR2dH0oC2bEoJwmUt-zSh8L50",
      type: "fsd"
    },
    {
      title: "12 Real-World Data Science Examples: Power Of Data Science.",
      imgsource: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
      type: "datascience"
    },
    {
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024.",
      imgsource: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      type: "datascience"
    },
    {
      title: "Roles and Responsibilities of a Data Scientist.",
      imgsource: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
      type: "datascience"
    },
    {
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences.",
      imgsource: "https://www.stockvault.net/data/2016/07/04/203788/thumb16.jpg",
      type: "cybersecurity"
    },
    {
      title: "What Is Hacking? Types of Hacking & More.",
      imgsource: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      type: "cybersecurity"
    },
    {
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide.",
      imgsource: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      type: "cybersecurity"
    },
    {
      title: "Java Full Stack Development Course.",
      imgsource: "https://static.guvi.in/blog/zenThumbnail/java-fsd.webp",
      type: "career"
    },
    {
      title: "MERN Full Stack Development.",
      imgsource: "https://static.guvi.in/blog/zenThumbnail/mern-fsd.webp",
      type: "career"
    },
    {
      title: "Data Science Course.",
      imgsource: "https://static.guvi.in/blog/zenThumbnail/data-science.webp",
      type: "career"
    }
  ]
  
  return (
    <>
{/*These are the Routes and its route. */}
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/' element={<All content={content} />}></Route>
          <Route path='/fullstackdevelopment' element={<Fsd content={content} />}></Route>
          <Route path='/datascience' element={<Datascience content={content} />}></Route>
          <Route path='/cybersecurity' element={<Cybersecurity content={content} />}></Route>
          <Route path='/career' element={<Carrer content={content} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
