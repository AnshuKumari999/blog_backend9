import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../component/Card";
import CardHome from "../component/CardHome";
import SmallCard from "../component/SmallCard";
//import { store } from "./Details";

const Home = () => {
 // const [detail, setDetail] = useContext(store);
 const [data, setData] = useState([])

    useEffect(() => {
        const url = "https://blogbackend9.herokuapp.com/api/Blogdata";
        fetch(url).then(res => res.json()).then(res => setData(res))
    }, [])

  return (
    <div>
      <div className="Home">
        <div className="home_container">
          <div className="home_first_img"></div>
          <div className="home_sec_img">
            <Link to="/fitness">
              <img
                src="https://slman.com/sites/slman/files/styles/max_400x400/public/articles/2021/05/back-gym-hero1.jpg?itok=Ril_s6Hr"
                alt="not foun"
              />
            </Link>
          </div>
        </div>
        <div className="home_third_img">
          <Link to="/technology">
            <img
              src="https://www.london.ac.uk/sites/default/files/styles/promo_mobile/public/2020-04/sb-simone-image.jpg?itok=nAkc3CGk"
              alt="not found"
            />
          </Link>
        </div>
        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home_left left1">
          {data
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((res) => (
              <CardHome
                articleid={res.id}
                imgUrl={res.Image}
                title={res.title}
                description={res.description.slice(0, 400)}
                author={res.author}
              />
            ))}
        </div>
        <div className="home_left left1">
          {data
            .filter((article) => {
              return article.category === "technology";
            })
            .map((res) => (

              <CardHome
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              category={res.category}
              author={res.author}

              />
            ))}
        </div>
        <div className="home_left left1">
          {data
            .filter((article) => {
              return article.category === "food";
            })
            .map((res) => (
              <CardHome
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              category={res.category}
              author={res.author}

              />
            ))}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>

        <h1 className="Top">Top Posts</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {data
            .filter((article) => {
              return article.category === "mix";
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
        <div className="sidebar2">
          {data
            .filter((article) => {
              return article.category === "mix";
            })
            .map((res) => (
              <SmallCard
                aarticleid={res.id}
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
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="home_left">
          {data
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((res) => (
              <CardHome
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              category={res.category}
              author={res.author}

              />
            ))}
        </div>

        <div className="home_left">
          {data
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((res) => (
              <CardHome
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              category={res.category}
              author={res.author}

              />
            ))}
        </div>

        <div className="home_left">
          {data
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((res) => (
              <CardHome
              articleid={res.id}
              imgUrl={res.Image}
              title={res.title}
              description={res.description.slice(0, 400)}
              category={res.category}
              author={res.author}

              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
