export const fetchData = async (collectionName,dataLimit,category) => {
    try {      
      const response = await fetch(`http://localhost:3000/api`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collectionName:collectionName,
          dataLimit:  dataLimit,
          category: category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from API");
      }
      const { data } = await response.json();
      return data
    } catch (err) {
      console.error("Error fetching news data:", err);
    } 
  };
