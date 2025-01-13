import InfoPageData from "@/app/dashboard/infoPageData";
const cardParentStyle="grid flex-wrap grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8";

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
