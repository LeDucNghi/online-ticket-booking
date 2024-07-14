import { HomeSection } from "@/app/_components/home-section/home-section";
import { MainLayout } from "@/components/Layouts/main/main-layout";
import { getServerSession } from "next-auth";
import { movies } from "@/mock";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Home() {
	const session = await getServerSession(options);

	return (
		<MainLayout
			bannerSubtitle="Buy movie tickets in advance, find movie times watch trailers, read movie reviews and much more"
			banner="main"
			bannerBg="/assets/banner02.jpg"
			bannerTitle="movie"
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
