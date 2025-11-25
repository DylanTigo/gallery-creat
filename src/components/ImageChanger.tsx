import { useEffect, useState } from 'react'
import { motion, MotionValue } from 'motion/react';

type ImageChangerProps = {
  mousePosition: {x?: MotionValue<number>, y?: MotionValue<number>};
  images: string[];
}

export const ImageChanger = ({ images, mousePosition }: ImageChangerProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {x, y} = mousePosition

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1 >= images.length ? 0 : prevIndex + 1);
    }, 500)
    return () => clearTimeout(timeoutId);
  }, [currentImageIndex, images.length]);

  return (
    <motion.div className="image-changer" style={{ x, y}}>
      <img src={images[currentImageIndex]} alt="Image" className="changeable-image" />
    </motion.div>
  )
}
