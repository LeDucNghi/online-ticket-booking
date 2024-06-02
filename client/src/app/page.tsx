import { HomeSection } from "@/app/_components/home-section/home-section";
import { MainLayout } from "@/components/Layouts/main/main-layout";
import { movies } from "@/mock";

export default function Home() {

  return (
    <MainLayout
      bannerSubtitle="Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more"
      banner="main"
      bannerBg="/assets/banner02.jpg"
      bannerTitle="get movie ticket"
    >
      <HomeSection
        sectionSubtitle="Be sure not to miss these Movies today."
        sectionTitle="movies"
        list={movies}
      />

      <HomeSection
        sectionSubtitle="Be sure not to miss these Events today."
        sectionTitle="events"
        list={movies}
        style={{ backgroundColor: "#001539" }}
      />

      <HomeSection
        sectionSubtitle="Be sure not to miss these Sports today."
        sectionTitle="sports"
        list={movies}
      />
    </MainLayout>
  );
}


