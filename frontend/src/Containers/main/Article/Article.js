import React, { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import API from "./../../../redux/url";
import axios from "axios";

import Button from "@mui/material/Button";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";

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
import { upvote } from "./../../../redux/actions/authuser";
import { downvote } from "./../../../redux/actions/authuser";

function Article() {

   let dispatch = useDispatch();

  // const [upvote, setupvote] = useState(0);
  // const [downvote, setdownvote] = useState(0);


  const [state, setstate] = useState(false);
  const [state2, setstate2] = useState(false); // Use this to add filter on text change

  const [respLength, setrespLength] = useState(""); // Use this to add filter on text change

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(API + "/getArticle").then((res) => {
      console.log("res.data", res.data);
      // setfetcharticle(res.data);
      // setstate2(res.data);

 var result = res.data;
  // let result = resp.filter((item) => item.date < isoformatToday);
  console.log("parameter", result);

  setstate(result);
  setstate2(result);

  console.log("resultLength", result.length);
  var leng = result.length;
  setrespLength(leng);


    });
  }, []);

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // const resetall = (e) => {
  //   e.preventDefault();

  //   let result = state2.filter((item) => item);
  //   setstate(result);
  // };

  const searchTextField = (e) => {
    e.preventDefault();
    let searching = e.target.value;
    let result = state2.filter(
      (item) =>
        item.title && item.title.toLowerCase().includes(searching.toLowerCase())
    );
    setstate(result);
  };



  // const updateHandler = (id) => {
    
  //   console.log(id);
  // };
 function upvotehandler(upvoteid) {

  // let myid = id;
  //  console.log(id);
  //  setupvote(upvote + 20);
  //  console.log(upvote);
   let obj = {
     key: upvoteid,
     no: "12",
   };

   dispatch(upvote(obj));
 }

  function downvotehandler(id) {
    console.log(id);

    console.log([id]);

    // {downvote > 0 ? setdownvote(downvote - 1) : null }
    //  setdownvote(downvote + 10);
    // console.log(downvote);
    dispatch(downvote([id]));
  }
  return (
    <>
      <Grid container>
        {/* <Grid item xs={3}>
          <Title>Article Section</Title>
        </Grid> */}
        <Grid item xs={12}>
          <Title>
            <input
              type="search"
              className="srch"
              placeholder="Search Article Title..."
              onChange={searchTextField}
            />
          </Title>
        </Grid>
      </Grid>

      <ArticleSectionMain>
        {respLength > 0 ? (
          <div>
            {state ? (
              <div>
                {state.map((item, index) => {
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

                            <span
                              onClick={toggleReadMore}
                              className="read-or-hide"
                            >
                              {isReadMore ? "...read more" : " show less"}
                            </span>

                            {/* {item.abstractdata} */}

                            {/* {item.abstractdata ? } */}
                            {/* <SeeMore>see more</SeeMore> */}
                          </para>

                          <ThumbRating>
                            <Thumb>
                              <ThumbUpOffAltIcon
                                className="thumb"
                                // onClick={updateHandler(item._id)}
                                onClick={() => upvotehandler(item._id)}
                                // onClick={() => this.UpdateRecordFromDB(value._id)}
                              />
                              <Counter> 1 </Counter>
                            </Thumb>
                            <Spacer />
                            <Thumb>
                              <ThumbDownOffAltIcon
                                className="thumb"
                                onClick={() => downvotehandler(item._id)}
                              />
                              <Counter> 2 </Counter>
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
          </div>
        ) : (
          <div>
            {" "}
            {/* <FcExpired size="23" /> */}
            No Record Available Right Now , Please Go to
           
          </div>
        )}
      </ArticleSectionMain>
    </>
  );
}

export default Article