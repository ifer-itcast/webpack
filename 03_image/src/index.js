import './index.css';
import './index.less';
import imgSrc from './images/sm.jpg';


const img = new Image();
img.src = imgSrc;
img.width = 100;
document.body.appendChild(img);
