import InfoPageData from "@/app/dashboard/newsQueries/infoPageData";
const cardParentStyle="grid flex-wrap grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8";
import { fetchData } from "@/compons/fetchData/fetch";
export default function SportsPage({searchParams}) {
  return (
    <InfoPageData searchparams={searchParams} style='p-2 grid place-items-center text-center' 
    columns={cardParentStyle}
    style2="grid gap-4 place-items-center"
    limit={20}
    collection='sportsData'
    />
  )
}
export async function generateStaticParams() {
  const sports = await fetchData("sportsData",100, null);
  if (!Array.isArray(sports)) {
    throw new Error("fetchData did not return an array");
  }

  return sports.map((sport) => ({
    title:sport.title,
    desc:sport.desc,
    image:sport.img,
  }));
}