// import React from 'react'
// import { data } from '../consts'
//
// function Sliding() {
//   const { slidingData } = data
//
//   return (
//     <>
//       <div
//         id="carouselExampleCaptions"
//         className="carousel slide relative"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner relative w-full overflow-hidden">
//           {slidingData.map((elem) => {
//             return (
//               <div
//                 key={elem.id}
//                 className={`carousel-item ${
//                   elem.id === 0 && 'active'
//                 } relative float-left w-full `}
//               >
//                 <div className="bg-blue p-6 h-580 ml-1 rounded-2xl md:ml-2 md:mr-2 md:px-24 md:h-474 md:pt-20 lg:pl-40 xl:pl-48">
//                   <h2 className="font-semibold text-5xl text-white mb-6">
//                     {elem.title}
//                   </h2>
//                   <ul className="list-disc list-outside ml-6">
//                     {elem.text.map((liText, index) => {
//                       return (
//                         <li key={index} className="text-white leading-7">
//                           {liText}
//                         </li>
//                       )
//                     })}
//                   </ul>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//         <div className="carousel-indicators flex justify-center p-0 mt-6">
//           {slidingData.map((elem) => {
//             return (
//               <div
//                 key={elem.id}
//                 data-bs-target="#carouselExampleCaptions"
//                 data-bs-slide-to={`${elem.id}`}
//                 className={`${elem.id === 0 && 'active'}`}
//                 aria-current={`${elem.id === 0 && 'true'}`}
//                 aria-label={`Slide ${elem.id + 1}`}
//               ></div>
//             )
//           })}
//         </div>
//       </div>
//     </>
//   )
// }
//
// export default React.memo(Sliding)
