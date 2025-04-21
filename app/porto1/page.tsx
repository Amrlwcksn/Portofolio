
import FadeContent from "../components/FadeContent/FadeContent";
import ThemeToggle from "../components/ThemeToggleButton";
import Link from "next/link";

const Porto1 = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full max-w-6xl mx-auto px-5 py-10 ">
        <div className="bg-white rounded-3xl dark:bg-neutral-900">
        <div className="p-5 flex justify-between ">
          <FadeContent>
          <Link href="/">
          <button className="font-notojp font-bold mt-2 text-2xl">Portofolio</button>
          </Link>
          </FadeContent>
          <FadeContent>
          <ThemeToggle></ThemeToggle>
          </FadeContent>
        </div>
        </div>

        {/* Konten  */}
      <FadeContent>
      <div className=" bg-white rounded-3xl dark:bg-neutral-900 mt-2 ">
          <div className="flex flex-wrap gap-3 justify-start md:justify-center p-3">
            <Link href="">
              <button className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl bg-blue-600 text-white dark:text-white w-full md:w-auto">Foto</button>            
            </Link>
            <Link href="">
              <button className="font-notojp font-bold hover:scale-105 transition duration-200 px-4 py-2 rounded-2xl bg-neutral-800  hover:bg-blue-600 w-full md:w-auto">Video</button>            
            </Link>
          </div>
          <hr className="my-4 border-t border-gray-300"/>

         {/* Foto */}
         <div className="">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-5">
            <img src="Images/gambar1.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="Images/gambar2.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="Images/gambar3.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="Images/gambar4.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="Images/gambar5.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="Images/gambar6.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="Images/gambar10.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
            <img src="Images/gambar11.jpg" alt="" className="mb-4 rounded-md break-inside-avoid transition-transform hover:scale-105 duration-300" />
          </div>
         </div>
        
      </div>
      </FadeContent>

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
export default Porto1;
