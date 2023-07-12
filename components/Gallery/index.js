// import React from 'react';
// import images from '@/public/gallery/data';
// import ImageViewer from 'react-simple-image-viewer';

function PhotoGallery() {
//   const [category, setcategory] = React.useState("");
//   const [displayImages, setDisplayImages] = React.useState([]);
//   const [currentImage, setCurrentImage] = React.useState(0);
//   const [isViewerOpen, setIsViewerOpen] = React.useState(false);

//   const openImageViewer = React.useCallback((index) => {
//     setCurrentImage(index);
//     setIsViewerOpen(true);
//   }, []);

//   const closeImageViewer = () => {
//     setCurrentImage(0);
//     setIsViewerOpen(false);
//   };

//   React.useEffect(() => {
//     if (category == "") {
//       let imgs = [];
//       images.forEach(image => {
//         console.log(image)
//         imgs.push(...image.images);
//       })
//       setDisplayImages(imgs);
//       console.log(displayImages)
//       return;
//     }

//     setDisplayImages(images.filter(image => image.category === category)[0]?.images);
//     console.log(images.filter(image => image.category === category));

//   }, [category])




//   return (
//     <div>
//       <div className=' flex flex-col md:flex-row'>
//         <button className='p-1 w-fit border-solid border-b-2  border-gray-400 rounded-md m-4' onClick={() => setcategory('')}>Show All</button>
//         <button className={`p-1 w-fit border-solid border-b-2 ${category === "tagging-vaccination" ? " bg-green-100 text-gray-800":"" } border-gray-400  rounded-md m-4`} onClick={() => setcategory('tagging-vaccination')}>Tagging, vaccination & field visit</button>
//         <button className={`p-1 w-fit border-solid border-b-2 border-gray-400 ${category === "inauguration" ? " bg-green-100 text-gray-800":"" }  rounded-md m-4`} onClick={() => setcategory('inauguration')}>inaguration</button>
//         <button className={`p-1 w-fit border-solid border-b-2 border-gray-400 ${category === "ABCF" ? " bg-green-100 text-gray-800":"" }  rounded-md m-4`} onClick={() => setcategory('ABCF')}>ACBF</button>
//         <button className={`p-1 w-fit border-solid border-b-2 border-gray-400 ${category === "more" ? " bg-green-100 text-gray-800":"" }  rounded-md m-4`} onClick={() => setcategory('more')}>More</button>
//       </div>

//       <div className=' flex flex-wrap justify-center'>
//         {
//           displayImages?.map((src, index) => (
//             <img className=' m-4 object-cover' key={index} src={src} onClick={() => openImageViewer(index)}
//               width="300" alt="" />)
//           )
//         }
//       </div>
//       <div>
//         {isViewerOpen && (
//           <ImageViewer
//             src={displayImages}
//             currentIndex={currentImage}
//             disableScroll={true}
//             closeOnClickOutside={true}
//             onClose={closeImageViewer}
//             backgroundStyle={{ backdropFilter: "blur(10px)", backgroundColor: "transparent" }}
//           />
//         )}
//       </div>

//     </div>
//   )
}

export default PhotoGallery
