import InfoPageData from "@/app/dashboard/newsQueries/infoPageData"
export default function NewsPage({searchParams}) {
  return (
    <InfoPageData searchparams={searchParams} 
    style='p-2 grid place-items-center text-center left-0 w-[300px] h-auto'
    columns="grid place-items-center gap-4 p-2 lg:grid xl:grid 2xl:grid"
    style2="grid gap-8 lg:flex xl:flex 2xl:flex"
    limit={4}
    collection="newsData"
    />
  )
}
