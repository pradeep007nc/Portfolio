import Footer from "./Subcomponents/Footer";
import { GridBackground } from "./Hero/GridBackground";
import Work from "./Work";
import Skills from "./About";

export default function Home() {
  return (
    <>
      <div className="dark min-h-screen bg-black flex flex-col">
        <GridBackground />
        <Work />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
