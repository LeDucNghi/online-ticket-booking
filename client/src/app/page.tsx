import { Banner } from "@/components/common/banner/banner";
import Image from "next/image";
import { MainLayout } from "@/components/Layouts/main/main-layout";

export default function Home() {
  return (
    <MainLayout bannerBg='/assets/banner02.jpg'>
      movie home page
    </MainLayout>
  );
}
