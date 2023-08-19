import React from 'react';
import images from './data';
import ImageViewer from 'react-simple-image-viewer';


function PhotoGallery() {
  const [category, setcategory] = React.useState("");
  const [displayImages, setDisplayImages] = React.useState([]);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  React.useEffect(() => {
    if (category == "") {
      let imgs = [];
      images.forEach(image => {
        console.log(image)
        imgs.push(...image.images);
      })
      setDisplayImages(imgs);
      console.log(displayImages)
      return;
    }

    setDisplayImages(images.filter(image => image.category === category)[0]?.images);
    console.log(images.filter(image => image.category === category));

  }, [category])




  return (
    <div>
      <div className=' flex flex-wrap gap-2 m-4'>
        <button className={`p-1 w-fit border-solid border-b-2 ${category === "" ? " bg-[#1B2D56] text-white ":"" } border-gray-400  rounded-md m-2 p-2`} onClick={() => setcategory('')}>Show All</button>
        <button className={`p-1 w-fit border-solid border-b-2 ${category === "events" ? " bg-[#1B2D56] text-white ":"" } border-gray-400  rounded-md m-2 p-2`} onClick={() => setcategory('events')}>Events</button>
        <button className={`p-1 w-fit border-solid border-b-2 border-gray-400 ${category === "jnu" ? " bg-[#1B2D56] text-white ":"" }  rounded-md m-2 p-2`} onClick={() => setcategory('jnu')}>jnu</button>
        <button className={`p-1 w-fit border-solid border-b-2 border-gray-400 ${category === "alumni meets" ? " bg-[#1B2D56] text-white ":"" }  rounded-md m-2 p-2`} onClick={() => setcategory('alumni meets')}>Alumni Meets</button>
      </div>

      <div className=' flex flex-wrap justify-center'>
        {
          displayImages?.map((src, index) => (
            <img className=' m-4 object-cover' key={index} src={src} onClick={() => openImageViewer(index)}
              width="300" alt="" />)
          )
        }
      </div>
      <div>
        {isViewerOpen && (
          <ImageViewer
            src={displayImages}
            currentIndex={currentImage}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            backgroundStyle={{ backdropFilter: "blur(10px)", backgroundColor: "transparent" }}
          />
        )}
      </div>

    </div>
  )
}

export default PhotoGallery
