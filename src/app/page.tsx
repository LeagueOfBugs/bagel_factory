import Modal from "./components/modal/Modal";
import {
  Contact,
  FeaturedFoods,
  Hero,
  LocationAndHours,
  OurStory,
  SeasonalFlavors,
  Testimonials,
} from "./sections";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <SeasonalFlavors />
        <FeaturedFoods />
        <OurStory />
        <Testimonials />
        <LocationAndHours />
        <Contact />
        <Modal />
      </main>
    </>
  );
}
