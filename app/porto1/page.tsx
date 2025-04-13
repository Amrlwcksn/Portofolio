import Masonry from "../components/Masonry/Masonry";
import FadeContent from "../components/FadeContent/FadeContent";
import ThemeToggle from "../components/ThemeToggleButton";
const data = [
  { id: 1, image: "/Images/gambar1.jpg", height: 400 },
  { id: 2, image: "/Images/gambar2.jpg", height: 300 },
  { id: 3, image: "/Images/gambar3.jpg", height: 300 },
  { id: 4, image: "/Images/gambar4.jpg", height: 800 },
  { id: 5, image: "/Images/gambar5.jpg", height: 300 },
  { id: 6, image: "/Images/gambar6.jpg", height: 300 },
  { id: 7, image: "/Images/gambar7.jpg", height: 900 },
  { id: 8, image: "/Images/gambar8.jpg", height: 300 },
  { id: 9, image: "/Images/gambar9.jpg", height: 300 },
  { id: 9, image: "/Images/gambar10.jpg", height: 300 },
  { id: 9, image: "/Images/gambar11.jpg", height: 900 },
  { id: 9, image: "/Images/gambar12.jpg", height: 300 },
  { id: 9, image: "/Images/gambar13.jpg", height: 300 },
];
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
            <ThemeToggle />
          </div>
        </FadeContent>
      </div>
      {/* Done */}

      {/* Konten  */}
      <div className="ml-44 mr-44 mt-28">
        <h1 className="text-center font-bold text-5xl">Foto</h1>
        <Masonry data={data} />
      </div>
      {/* Done */}

      {/* Footer */}
      <div className="bg-black mt-10 p-5">
        <h1 className="text-gray-400 text-center">
          Copyright © 2025 - Amrlwcksn All right reserved
        </h1>
      </div>
      {/* Selesai */}
    </>
  );
};
export default Porto1;
