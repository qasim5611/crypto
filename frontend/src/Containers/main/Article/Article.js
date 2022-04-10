import React, { useState , useEffect} from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import API from "./../../../redux/url";
import axios from "axios";

import Button from "@mui/material/Button";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ScaleLoader";

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

  const [state, setstate] = useState(false);
  const [state2, setstate2] = useState(false); // Use this to add filter on text change

  const [respLength, setrespLength] = useState(""); // Use this to add filter on text change


  function initRun() {
    axios.get(API + "/getArticle").then((res) => {
      console.log("res.data", res.data);

      var result = res.data;
      console.log("parameter", result);
      setstate(result);
      setstate2(result);

      console.log("resultLength", result.length);
      var leng = result.length;
      setrespLength(leng);
      setLoading(false); 
    });
  }

  useEffect(() => {
    window.scrollTo(0, 0);
   axios.get(API + "/getArticle").then((res) => {
     console.log("res.data", res.data);

     var result = res.data;
     console.log("parameter", result);
     setstate(result);
     setstate2(result);

     console.log("resultLength", result.length);
     var leng = result.length;
     setrespLength(leng);
   });
  }, []);


  
const loadercss = {
  height: "200px",
  textAlign: "center",
};
const loadicon = {
  position: "relative",
  top: "86px !important",
};


const loadericn = {
  
  borderColor: 'white'
}


 const loads = {
   "@media (min-width: 550px)": {
     paddingLeft: "80px !important",
   },
   height: "592px",
   textAlign: "center",
   position: "absolute",
   /* margin-left: 702px; */
   marginTop: "66px",
   background: "#01191cd4",
   width: "100%",
   zIndex: "999",
   paddingTop: "255px",
   paddingLeft: "0px",
 };


  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

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

    let obj = {
      key: upvoteid,
      no: "12",
    };

    setLoading(true);

    dispatch(upvote(obj));
    // initRun();
      setTimeout(() => {
        initRun();
      }, 3000);
  }

  function downvotehandler(downvoteid) {
    let obj = {
      key: downvoteid,
      no: "12",
    };

    setLoading(true);

    dispatch(downvote(obj));
    // Init();
    setTimeout(() => {
      initRun();
    }, 3000);
  }

  const getUpvotes = useSelector((state) => state.Auth.Upvotes);
  console.log("getUpvotes is", getUpvotes);

  const getDownvotes = useSelector((state) => state.Auth.Downvotes);
  console.log("getDownvotes is", getDownvotes);



  // const getUpvotes = useSelector(state => Object.keys(state.Auth.Upvotes)
  // .filter(x => x === '624fd785b6e43d32f87aa98a')
  // .reduce((arr, key) => {
  //   arr.push(state.Auth.getUpvotes[key].data);
  //   return arr;
  // }, []), shallowEqual);

  // console.log(getUpvotes);
// setarticleid(getUpvotes);
var myid = "";

  return (
    <>
      <Grid container>
        {/* <Grid item xs={3}>
          <Title>Article Section</Title>
        </Grid> */}

        { loading ? (
           <div className="sweet-loading" style={loads}>
  

        <ClipLoader style={loadericn}  size={100} height={35} width={4} radius={2} margin={2} />
      </div> 
        ) : null }
        <Grid item xs={12}>
          <Title>
            <input
              type="search"
              className="srch"
              placeholder="Search Article Title..."
              onChange={searchTextField}
            />
          </Title>
          {/* {getUpvotes ? (
            <div>
              {getUpvotes.map((item, index) => {
             

                return <div key={index}>{item}</div>;
              })}
            </div>
          ) : (
            <div style={{ color: "white" }}>Articles Loading...</div>
          )} */}
        </Grid>
      </Grid>



     

      <ArticleSectionMain>
        {respLength > 0 ? (
          <div>
            {state ? (
              <div>
                {state.map((item, index) => {
                  {
                    /* {item > 0 ? myid = item._id  : null; } */
                  }

                  return (
                    <>
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
                          <ArticleImg>
                            {/* <Myimage img={imag} /> */}
                          </ArticleImg>
                          <ArticleDesc>
                            <Subject>
                              Subject : <span> {item.subject} </span>{" "}
                            </Subject>
                            <Journal>
                              Journal Name : <span> {item.journal} </span>{" "}
                            </Journal>
                            <Abstract>Abstract</Abstract>
                            <Para>
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
                            </Para>

                            <ThumbRating>
                              <Thumb>
                                <ThumbUpOffAltIcon
                                  className="thumb"
                                  onClick={() => upvotehandler(item._id)}
                                />

                                <Counter>{item.upvote}</Counter>
                              </Thumb>
                              <Spacer />
                              <Thumb>
                                <ThumbDownOffAltIcon
                                  className="thumb"
                                  onClick={() => downvotehandler(item._id)}
                                />
                                <Counter> {item.downvote} </Counter>
                              </Thumb>
                            </ThumbRating>
                            <Spacerbot />
                          </ArticleDesc>
                        </CardMain>
                      </ArticleSection>
                    </>
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