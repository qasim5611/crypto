import React, { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "./../../../redux/url";
import axios from "axios";

import Button from "@mui/material/Button";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";


import ArticleSection, {
  Title,
  CardMain,
  Articleinfo,
  ArticleImg,
  ArticleDesc,
  ProfileImg,
  Profileinfo,
  Plogo,
  Tag,
  Subject,
  Journal,
  Abstract,
  Para,
  ThumbRating,
  SeeMore,
  Thumb,
  Spacer,
  Counter,
  Spacerbot,
  ArticleSectionMain,
} from "./Article.style";

function Article() {

  const [fetcharticle, setfetcharticle] = useState(false);

  const [abstract, setabstract] = useState(false);


useEffect(() => {
  window.scrollTo(0, 0);
  axios.get(API + "/getArticle").then((res) => {
    console.log("res.data", res.data);
    setfetcharticle(res.data);
  

  });
}, []);


const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
  setIsReadMore(!isReadMore);
};






  return (
    <>
      <Title>Article Section</Title>
      <ArticleSectionMain>
        {fetcharticle ? (
          <div>
            {fetcharticle.map((item, index) => {
              return (
                <ArticleSection>
                  <CardMain>
                    <Articleinfo>
                      <ProfileImg>
                        <Plogo>D</Plogo>
                      </ProfileImg>
                      <Profileinfo>
                        <Tag> {item.title} </Tag>
                        <Tag sm>
                          by <span> {item.auther} </span>
                        </Tag>
                        <Tag sm> {item.date} </Tag>
                      </Profileinfo>
                    </Articleinfo>
                    <ArticleImg>{/* <Myimage img={imag} /> */}</ArticleImg>
                    <ArticleDesc>
                      <Subject>
                        Subject : <span> {item.subject} </span>{" "}
                      </Subject>
                      <Journal>
                        Journal Name : <span> {item.journal} </span>{" "}
                      </Journal>
                      <Abstract>Abstract</Abstract>
                      <para>
                        {/* <p className="text">
                        {isReadMore ? text.slice(0, 150) : text}
                        <span onClick={toggleReadMore} className="read-or-hide">
                          {isReadMore ? "...read more" : " show less"}
                        </span>
                      </p> */}

                        {isReadMore ? (
                          item.abstractdata.slice(0, 30)
                        ) : (
                          <span>{item.abstractdata}</span>
                        )}

                        <span onClick={toggleReadMore} className="read-or-hide">
                          {isReadMore ? "...read more" : " show less"}
                        </span>

                        {/* {item.abstractdata} */}

                        {/* {item.abstractdata ? } */}
                        {/* <SeeMore>see more</SeeMore> */}
                      </para>

                      <ThumbRating>
                        <Thumb>
                          {" "}
                          <ThumbUpOffAltIcon className="thumb" />{" "}
                          <Counter>2</Counter>
                        </Thumb>
                        <Spacer />
                        <Thumb>
                          {" "}
                          <ThumbDownOffAltIcon className="thumb" />{" "}
                          <Counter>2</Counter>{" "}
                        </Thumb>
                      </ThumbRating>
                      <Spacerbot />
                    </ArticleDesc>
                  </CardMain>
                </ArticleSection>
              );
            })}
          </div>
        ) : (
          <div style={{ color: "white" }}>Articles Loading...</div>
        )}
      </ArticleSectionMain>
    </>
  );
}

export default Article