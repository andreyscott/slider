// import { useState, useEffect } from 'react';
// import './App.css';

// function App() {
//   const slides = [
//     // eslint-disable-next-line jsx-a11y/alt-text
//     {id: 1, content: <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" />},
//     {id: 2, content: <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=React" />},
//     {id: 3, content: <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=Redux" />},
//   ];
//   const [active, setActive] = useState(1);

//   // useEffect(() => {
//   //   setTimeout(function(){
//   //     nextSlide()
//   //   }, 3000);
//   // }, []);

//   // function nextSlide(){
//   //   setActive((active + 1) % 3);
//   // }

//   // function previousSlide(){
//   //   setActive((active + 2) % 3);
//   // }
  
//   const slideClassnames = "absolute p-5 inset-0 w-full h-full  bg-pink-500 text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform slide";
//   const activeClassNames = slideClassnames + " opacity-100";
//   const inactiveClassNames = slideClassnames + " opacity-0";

//   return (
//     <div className="max-w-xl m-auto">
//       <div>
//         <div className="relative w-full h-96">
//             {
//               slides.map(slide => (
//                 <div className={ active === slide.id? activeClassNames : inactiveClassNames} key={slide.id}>
//                   {slide.content}
//                 </div>
//               ))
//             }                 
//             {/* <div className="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black" onClick={() => previousSlide()}>&#x276F;</div>
//             <div className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black" onClick={() => nextSlide()}>&#x276E;</div> */}
//         </div>
//         <div className="flex h-3 w-full items-center justify-center mt-6">
//           {
//             slides.map(slide => (
//               <div className={`h-3 w-3 mx-1 rounded-full cursor-pointer ${active === slide.id ? "bg-black" : "bg-gray-600"}`} key={slide.id} onClick={() => setActive(slide.id)} />
//             ))
//           }            
//         </div> 
//       </div>
//     </div>    
    
//   );
// }

// export default App;

import React from 'react'
import Carousel from './components/Carousel';
import Swiper from 'swiper';
import 'swiper/css';

  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  
  });

function App() {
  return (
    <div>
      <Carousel />
    </div>
  )
}

export default App