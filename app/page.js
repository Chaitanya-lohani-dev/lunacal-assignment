import "./globals.css";
import AboutWidget from "./components/AboutWidget";
import GalleryWidget from "./components/GalleryWidget";

export default function Home() {
  return (

    <main >
      <div className="main-container w-full max-w-7xl flex flex-col lg:flex-row overflow-hidden">
        
        <div className="hidden lg:block lg:w-1/2 p-8">
          {/* Empty */}
        </div>
        
        <div className="w-full lg:w-1/2 p-8">
          <div className="flex flex-col gap-8">
            <AboutWidget />
            <GalleryWidget />
          </div>
        </div>

      </div>
    </main>
  );
}
