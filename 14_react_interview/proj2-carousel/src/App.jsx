// import { useState } from 'react'
//  const images = [
//     "https://picsum.photos/id/1015/600/300",
//     "https://picsum.photos/id/1016/600/300",
//     "https://picsum.photos/id/1018/600/300"
//   ];


// function App() {



//   const [currindex,setCurrindex]=useState(0);

// const nextSlide = () => {
//   setCurrindex(prev =>
//     (prev + 1) % images.length
//   );
// };

// const prevSlide = () => {
//   setCurrindex(prev =>
//     (prev - 1 + images.length) %
//     images.length
//   );
// };

//   return (
//     <div>
//       <img
//       src={images[currindex]}
//       alt="slide"
//       width="900"
//       />

//       <br/>


//       <button onClick={prevSlide}>
//         Previous
//       </button>


//       <button onClick={nextSlide}>
//         Next
//       </button>
//       </div>
//   )

// }

// export default App;






// better verison



import { useState } from "react";

const images = [
  "https://picsum.photos/id/1015/600/300",
  "https://picsum.photos/id/1016/600/300",
  "https://picsum.photos/id/1018/600/300"
];

function App() {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      prev => (prev + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      prev =>
        (prev - 1 + images.length) %
        images.length
    );
  };

  return (
    <div>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        width="900"
      />

      <br />

      <button onClick={prevSlide}>
        Previous
      </button>

      <button onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default App;