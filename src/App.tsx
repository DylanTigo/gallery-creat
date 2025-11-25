'use client';

import ReactLenis, { useLenis } from 'lenis/react';
// import type { CardItem } from '../type';
import data1 from './assets/p1/index';
import data2 from './assets/p2/index';
import data3 from './assets/p3/index';
import data4 from './assets/p4/index';
import data5 from './assets/p5/index';
import { Card } from './components/Card';
import { useMotionValue } from 'motion/react';

function App() {
  const mousePosition = {
    x: useMotionValue(0), 
    y: useMotionValue(0)
  }
  const lenis = useLenis()

  const mouseMove = (e) => {
    const {clientX, clientY} = e
    const targetX = clientX - 450/2
    const targetY = clientY - (450/2)*3/5
    mousePosition.x.set(targetX)
    mousePosition.y.set(targetY)
  }

  return (
    <main>
      <ReactLenis root/>
      <h1>Some Outstanding Gallery</h1>

      <div className="grid-container" onMouseMove={mouseMove}>
        <Card data={data3} mousePosition={mousePosition} className='card3'/>
        <Card data={data1} mousePosition={mousePosition} className='card1'/>
        <Card data={data2} mousePosition={mousePosition} className='card2'/>
        <div className="gap"></div>
        <Card data={data5} mousePosition={mousePosition} className='card5'/>
        <Card data={data4} mousePosition={mousePosition} className='card4'/>
      </div>
    </main> 
  )
}

export default App
