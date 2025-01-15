import InfoPageData from "./newsQueries";
export function NewsQueries(){
  return(
  <InfoPageData />
  )
}
export async function generateStaticParams() {
  const news = await fetchData(collection,limit, null);
  return news.map((news) => ({
    title: news.title,
    desc: news.desc,
    image: news.img,
  }));
}