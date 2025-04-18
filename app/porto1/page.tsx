
import FadeContent from "../components/FadeContent/FadeContent";
import ThemeToggle from "../components/ThemeToggleButton";
import Link from "next/link";

const Porto1 = () => {
  return (
    <>
      {/* Header */}
      <div className="shadow-xl bg-white dark:bg-gray-900 sticky top-0 z-50">
        <FadeContent>
          <div className="flex max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 justify-between items-center py-3">
          <Link href="porto1">
            <h1 className="font-bold">Albums</h1>
          </Link>
            
          </div>
        </FadeContent>
      </div>
      {/* Done */}

      {/* Konten  */}
      <FadeContent>
      <div className="mx-auto mt-28 px-4 max-w-screen-lg ">
        <div className="flex flex-wrap gap-3 justify-start md:justify-center">
        <Link href="/">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition-all">
              Home
            </button>
          </Link>
          <Link href="">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all">
              Foto
            </button>
          </Link>
          <Link href="">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 transition-all">
              Video
            </button>
          </Link>
        </div>
          

         {/* Foto */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 mt-10">
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
      </FadeContent>

      {/* Footer */}
      <div className="bg-black mt-10 p-5">
        <h1 className="text-gray-400 text-center">
          Copyright © 2025 - Amrlwcksn All rights reserved
        </h1>
      </div>

      {/* Selesai */}
    </>
  );
};
export default Porto1;
