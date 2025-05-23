import Navbar from "./_components/navbar";
import TemplateGallery from "./_components/template-gallery";
import UserGallery from "./_components/user-gallery";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>

      <div className="mt-16">
        <TemplateGallery />
        <UserGallery />
      </div>
    </div>
  );
}
