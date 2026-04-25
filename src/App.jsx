import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const card1 = {
    title: "Card 1",
    description: "This is the first card",
    image: "https://static.vecteezy.com/system/resources/thumbnails/049/855/296/small/nature-background-high-resolution-wallpaper-for-a-serene-and-stunning-view-photo.jpg",
    tags: ["#photography", "#travel", "#winter"]
  }
  const card2 = {
    title: "Card 2",
    description: "This is the second card",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EN0uC_OHJbS_UGCmH74hlSMfSKEFl15yJw&s",
    tags: ["#photography", "#travel", "#winter"]
  }


  return (
    <>
    <div className='bg-green-400 p-4 rounded-lg m-4'>
      <h1 className='text-white'>Hello</h1>
    </div>
    <div className='flex'>
      <Card card={card1} />
      <Card card={card2} />
    </div>
    </>
  )
}

export default App
