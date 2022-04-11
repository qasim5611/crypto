import styled, { css } from "styled-components";
import imag from "./../../../Assets/cardimage.png";





export const ArticleSectionMain = styled.div`
  height: 495px;
  background: #001317;
  overflow-y: scroll;
  margin-top: -18px;
  padding-top: 32px;
`;


export const ArticleSection = styled.div`
  
  background: #001317;
  margin-bottom: 40px;
 
`;



export const Title = styled.h3`
  color: white;
  text-align: initial;
  background: #001317;
  margin-top: 0px;
  padding-top: 23px;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  align-items: center;
  justify-content: space-around;

  .srch {
    background-color: #002b23;
    border: none;
    height: 24px;
    width: 300px;
    padding: 9px;
    ::placeholder,
    ::-webkit-input-placeholder {
      color: white;
    }
  }
`;


export const CardMain = styled.div`
  width: 385px;
  height: 470px;
  background-color: white;
  border-radius: 5px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;



export const Articleinfo = styled.div`
 height: 20%;

 display: flex;
 flex-direction: row;
`;
export const ArticleImg = styled.div`
  height: 45%;
  /* background-image: url(${imag});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
`;
export const ArticleDesc = styled.div`
  height: 35%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: center; */
  padding: 13px;
`;


export const ProfileImg = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;




export const Profileinfo = styled.div`
  width: 80%;
  height: 100%;


  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: center;
`;

 


export const Plogo = styled.div`
  width: 40px;
  height: 40px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  user-select: none;
  color: rgb(255, 255, 255);
  background-color: rgb(1, 20, 26);
`;
 


export const Tag = styled.div`
  color: black;
  ${(props) =>
    props.sm &&
    css`
      font-size: 12px;
      color: #35343f;
    `};
`;

export const Subject = styled.div`
  color: black;
  font-size: 12px;
  font-weight: 300;
`;
export const Journal = styled.div`
  color: black;
  font-size: 12px;
  font-weight: 300;
`;
export const Abstract = styled.div`
  color: black;
  
  font-size: 25px;
  font-weight: 700;
`;
export const Para = styled.div`
  color: black;
  font-size: 12px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`;
export const ThumbRating = styled.div`
  color: black;
  font-size: 12px;
  position: relative;
  /* top: 21px; */

display: flex;
flex-direction: row;

 
`;


export const SeeMore = styled.span`
  padding-left: 8px;
  padding-right: 8px;
  font-size: 12px;
  color: rgb(0, 168, 90);
`;




export const Thumb = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  align-items: center;
  justify-content: flex-start;

  .thumb {
    padding: 5px;
    border-radius: 50%;
    &:hover {
      background: #e5e5e5;
    }
  }
`;



export const Spacer = styled.div`
 width: 20px;
`;

export const Spacerbot = styled.div`
  width: 20px;
  height: 100px;
`;


export const Counter = styled.p`
  padding: 0px;
  margin: 0px;
`;



export const SearchField = styled.span`
  outline: none;
  border: none;
  height: 35px;
  margin: 0px auto;
  width: 80%;
  font-weight: 700;
  display: flex;
  flex-direction: row;
  background-color: #012e1b;
  .srch {
    width: 90%;
    background-color: #012e1b;
    outline: none;
    border: none;
  }
`;

export const Icon = styled.span`
  position: relative;
  top: 5px;
  left: 1px;
`;


export default ArticleSection;
