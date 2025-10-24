import AboutWidget from "../components/AboutWidget";
import GalleryWidget from "../components/GalleryWidget";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white p-8 lg:p-12">
      <div className="hidden lg:block lg:w-1/2">
      </div>

      <div className="w-full lg:w-1/2 glass-widget">
        
        <div className="flex flex-col gap-8 glass-widget">
          <AboutWidget />
          <GalleryWidget />
        </div>

      </div>
    </main>
  );
}
