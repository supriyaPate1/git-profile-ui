import React, { useEffect, useState } from "react";
import "../components/GitClone.css";
import DataIntro from "../intro";
import ReposData from "../repos";
export const GitClone = () => {
  const [introData, setDataIntro] = useState(DataIntro);
  const [reposData, setDataRepos] = useState(ReposData);
  //   console.log(Data)
  useEffect(() => {
    fetch("../intro.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data", data);
        // setDataIntro(data);
      });
  }, []);
  console.log("introData", introData);
  console.log("first", ReposData);

  return (
    <div className="container">
      <div className="intro">
        <div>
          {introData &&
            introData.map((val, i) => {
              return (
                <div className="DataDiv" key={i}>
                  <div className="leftDiv">
                    <div className="logo"></div>
                    <br></br>
                    <h1 style={{ textAlign: "center" }}>{val.name}</h1>
                    <br></br>
                    <p>{val.bio}</p>
                    <button>Follow</button>&emsp;
                    <br></br>
                    <div className="follow">
                      <h4>Followers: {val.followers}</h4>
                      <h4>Following: {val.following}</h4>
                      <h4>Repositories:{val.public_repos}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="repos">
        {reposData.map((value) => {
          return (
            <div className="reposList">
              <p>{value.repoName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
