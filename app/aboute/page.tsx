import TiltedCard from "../components/TiltedCard/TiltedCard";
import FadeContent from "../components/FadeContent/FadeContent";
import ThemeToggle from "../components/ThemeToggleButton";
import Link from "next/link";
import Popup from "./Popup";
import Stack from "../components/Stack/Stack";
const images = [
  { id: 1, img: '/Images/job1.jpeg'},
  { id: 2, img: '/Images/job2.jpeg'},
  { id: 3, img: '/Images/html.jpeg'},
  { id: 4, img: '/Images/arduino1.jpeg'},
  { id: 5, img: '/Images/arduino4.jpeg'},
];


const aboute = () => {
  return (
    <>
    <div className="mx-auto mt-10 px-4 max-w-screen-lg">
      <div className="bg-white rounded-3xl dark:bg-neutral-900">
        <div className="p-5 flex justify-between ">
          <FadeContent>
          <Link href="/">
          <button  className="font-notojp font-bold mt-2 text-2xl">Portofolio</button>
          </Link>
        
          </FadeContent>
          <FadeContent>
          <ThemeToggle></ThemeToggle>
          </FadeContent>
        </div>
      </div>
    </div>

    {/* konten */}
    <div className="mx-auto mt-2 px-4 max-w-screen-lg">
      <div className="bg-white rounded-3xl dark:bg-neutral-900">
        <div className="p-5 flex flex-col md:flex-row gap-6 justify-between">
          
          {/* Kiri: TiltedCard + Deskripsi */}
          <div className="flex flex-col md:flex-row gap-6 flex-1 ">
            {/* Tilted Card */}
            <div className="flex justify-center md:justify-start p-3">
              <TiltedCard
                imageSrc="Images/wicaksono.png"
                altText="Amrlwcksn_Profile"
                captionText="Ahmad Amirul Wicaksono"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-notojp bg-blue-600 p-2 rounded-xl text-white">
                    amrlwcksn
                  </p>
                }
              />
            </div>

            {/* Deskripsi */}
            <div className="flex-1">
              <h1 className="font-notojp text-3xl md:text-4xl font-bold mb-2">
                Ahmad Amirul Wicaksono
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-justify">
                Halo! Saya Wicaksono, mahasiswa Teknologi Informasi yang juga aktif sebagai
                videografer dan editor lepas. Saya suka eksplorasi teknologi, dari pengembangan
                website hingga proyek kreatif seperti Arduino. Terbuka untuk kolaborasi dan siap
                bantu wujudkan ide Anda jadi nyata!
              </p>
              <Popup />
              <div className="justify-items-end -mt-14 p-3 ">
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 150, height: 150 }}
                cardsData={images}
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* footer */}
    <div className="mx-auto mt-2 px-4 max-w-screen-lg">
      <div className="bg-white rounded-3xl dark:bg-neutral-900 p-5">
        <h1 className="font-notojp text-center">
          Copyright © 2025 - Amrlwcksn All right reserved.
         </h1>
      </div>
    </div>    
    </>
  );
};
export default aboute;
