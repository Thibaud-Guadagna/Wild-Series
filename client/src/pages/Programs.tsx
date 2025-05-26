import { useEffect, useState } from "react";

interface Series {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
}

function Series() {
  const [series, setSeries] = useState<Series[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => {
        setSeries(data);
      });
  }, []);

  return (
    <>
      <div>
        {series.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </>
  );
}

export default Series;
