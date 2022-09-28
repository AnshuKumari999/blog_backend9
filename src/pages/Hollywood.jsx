import React, { useState, useEffect } from "react";
//import { store } from "./Details";
import Card from "../component/Card";
import SmallCard from "../component/SmallCard";

const Hollywood = () => {
  // const [detail, setDetail] = useContext(store);
  //console.log(detail);
  const [data, setData] = useState([])

    useEffect(() => {
        const url = "https://blogbackend9.herokuapp.com/api/Blogdata";
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])

  return (
    <div>
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Hollywood</h1>
      <h1 style={{ margin: "20px 0px 20px 35%", display: "inline-block" }}>
        Top Posts
      </h1>
      <div className="main_container">
        <div className="rightbar">
          {data
            .filter((article) => {
              return article.category === "Hollywood";
            })
            .map((res) => (
              <Card
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              
              />
            ))}
        </div>

        <div className="sidebar">
          {data
            .filter((article) => {
              return article.category === "Hollywood";
            })
            .map((res) => (
              <SmallCard
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              
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
export default Hollywood;
