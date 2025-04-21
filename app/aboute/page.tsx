import TiltedCard from "../components/TiltedCard/TiltedCard";
import FadeContent from "../components/FadeContent/FadeContent";
import ThemeToggle from "../components/ThemeToggleButton";
import Link from "next/link";
import Popup from"../components/Popup";

const Porto2 = () => {
  return (
    <>
    

    <div className="mx-auto mt-28 px-4 max-w-screen-lg">
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

      <div className="bg-white rounded-3xl mt-2 p-5 dark:bg-neutral-900">
        <div className="flex flex-col md:flex-row gap-5 items-center md:items-start text-center md:text-left">
    
        {/* Gambar */}
        <div>
          <TiltedCard
            imageSrc="Images/abouteProfile.png"
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

        {/* Teks */}
        <div className="max-w-md mt-4 md:mt-0">
          <h1 className="font-notojp text-3xl md:text-4xl font-bold mb-2">
            Ahmad Amirul Wicaksono
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Halo! Saya Wicaksono, mahasiswa Teknologi Informasi yang juga aktif sebagai
            videografer dan editor lepas. Saya suka eksplorasi teknologi, dari pengembangan
            website hingga proyek kreatif seperti Arduino. Terbuka untuk kolaborasi dan siap
            bantu wujudkan ide Anda jadi nyata!
          </p>
          <Popup></Popup>
          
          
          
          
        </div>
      </div>
    </div>
        <div className="bg-white dark:bg-neutral-900 rounded-3xl mt-2 p-5">
          <div>
            <h1 className="font-notojp text-center">
              Copyright © 2025 - Amrlwcksn All right reserved
            </h1>
          </div>    
        </div>
    </div>
    </>
  );
};
export default Porto2;
