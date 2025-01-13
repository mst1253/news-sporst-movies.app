import { NextResponse } from 'next/server';
export async function GET(req) {
  const url = new URL(req.url);
  const action = url.searchParams.get('action'); 
  if (action === 'getAnalytics') {
    return await getAnalyticsData();
  } else if (action === 'getCurrentDate') {
    return getCurrentDate();
  }else {
    return new Response("Invalid action", { status: 400 });
  }

}

async function getAnalyticsData() {
    const query =
      `WITH CountryViews AS (
        SELECT 
            geo.country,
            COUNT(*) AS total_views
        FROM \`news-pro-45e0b.analytics_461989334.events_202412*\`
        GROUP BY geo.country
        ORDER BY total_views DESC
        LIMIT 1 
    ),
    UserViews AS (
        SELECT 
            event_name, 
            user_pseudo_id, 
            geo.country, 
            COUNT(event_name) AS view_count
        FROM \`news-pro-45e0b.analytics_461989334.events_202412*\`
        WHERE event_name = 'page_view'
        GROUP BY geo.country, event_name, user_pseudo_id
    ),
    UniqueUsers AS ( 
        SELECT 
            event_name,
            COUNT(DISTINCT user_pseudo_id) AS unique_users
        FROM \`news-pro-45e0b.analytics_461989334.events_202412*\`
        WHERE event_name = 'page_view'
        GROUP BY event_name
    )
    
    SELECT 
        cv.country,
        cv.total_views,
        uv.user_pseudo_id,
        uv.view_count,
        uu.unique_users
    FROM CountryViews cv
    LEFT JOIN UserViews uv ON cv.country = uv.country
    LEFT JOIN UniqueUsers uu ON uv.event_name = uu.event_name;
`
const dailyGrowth=`
SELECT
        DATE(TIMESTAMP_MICROS(event_timestamp)) AS view_date,
        COUNT(*) AS total_daily_views
    FROM \`news-pro-45e0b.analytics_461989334.events_202412*\`
    WHERE event_name = 'page_view'
    GROUP BY view_date
    ORDER BY view_date
`
try {
    const { BigQuery } = await import("@google-cloud/bigquery");
    const bigQueryClient = new BigQuery({
        projectId: process.env.BIGQUERY_PROJECT_ID, 
        keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS, 
      });
      const [rows, growth] = await Promise.all([
        bigQueryClient.query({ query }),        
        bigQueryClient.query({ query: dailyGrowth }) 
      ]);
      return new Response(
        JSON.stringify({
          rows: rows[0],       
          growth: growth[0]    
        }),
        { status: 200 }
      );
} catch (error) {
    console.error("Error querying BigQuery:", error);
    return new Response("Error querying BigQuery", { status: 500 });
}
}

function getCurrentDate() {
  const currentDate = new Date().toString()
  return NextResponse.json({ date: currentDate });
}


 export async function POST(req) {
  try {
    const { collectionName, dataLimit, category = null } = await req.json();

    const { collection, query, where, orderBy, limit, getDocs } = await import("firebase/firestore");
    const { db } = await import("../db/firebase"); 
    const queries = category
      ? query(
          collection(db, collectionName),
          where("category", "==", category),
          orderBy("createdAt", "desc"),
          limit(dataLimit)
        )
      : query(
          collection(db, collectionName),
          orderBy("createdAt", "desc"),
          limit(dataLimit)
        );
    const querySnapshot = await getDocs(queries);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Error fetching data from Firestore:", err);
    return NextResponse.json({ success: false, error: err.message });
  }

}
