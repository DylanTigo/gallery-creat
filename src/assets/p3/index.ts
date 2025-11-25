import mainImage from './main.webp';
import img1 from './img1.webp';
import img2 from './img2.webp';
import img3 from './img3.webp';
import img4 from './img4.webp';
import img5 from './img5.webp';
import type { CardItem } from '../../type';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

const data : CardItem = {
  name: 'The Coutine Club',
  author: 'Christine Lee',
  url: 'https://example.com/project-one',
  source: 'Behance',
  images,
  mainImage,
}

export default data;