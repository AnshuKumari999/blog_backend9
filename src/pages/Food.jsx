import React, { useState, useEffect } from "react";

// import { store } from "./Details";
import Card from "../component/Card";
import SmallCard from "../component/SmallCard";

const Food = () => {
  // const [detail, setDetail] = useContext(store);
  // console.log(detail);
  const [data, setData] = useState([])

    useEffect(() => {
        const url = "https://blogbackend9.herokuapp.com/api/Blogdata";
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])

  return (
    <div>
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Food</h1>
      <h1 style={{ margin: "20px 0px 20px 39%", display: "inline-block" }}>
        Top Posts
      </h1>
      <div className="main_container">
        <div className="rightbar">
          {data
            .filter((article) => {
              return article.category === "Food";
            })
            .map((res) => (
              <Card
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              category={res.category}
              author={res.author}

              />
            ))}
        </div>

        <div className="sidebar">
          {data
            .filter((article) => {
              return article.category === "Food";
            })
            .map((res) => (
              <SmallCard
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              category={res.category}
              author={res.author}

              />
            ))}

          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Food;
