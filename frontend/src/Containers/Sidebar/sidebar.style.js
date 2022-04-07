import styled, { css } from "styled-components";

import { styled as styledmu } from "@mui/system";


// export const SidebarMain = styled.div`
//  height: 588px;
//  background-color: red;
//  display: flex;
//  flex-direction: column;
//  background: linear-gradient(150.17deg, rgb(0, 43, 35) 20.75%, rgb(2, 2, 20) 97.02%), rgb(255, 255, 255);
// `;
export const SidebarMain = styledmu("div")({
  height: "588px",
  // backgroundColor: "red",
  display: 'flex',
  borderRadius: 4,
  flexDirection: "column",
  // background: "gray",
  background: "linear-gradient(150.17deg, rgb(0, 43, 35) 20.75%, rgb(2, 2, 20) 97.02%), rgb(255, 255, 255)",

});







export const SidebarOption = styled.div`
  text-align: left;
  padding: 10px 16px;
  text-decoration: none;
  color: white;
  /* font-family: Raleway; */
  font-weight: 300;
  /* srch */
  ${(props) =>
    props.srch &&
    css`
      text-align: center;
      display: flex;
      flex-direction: row;
      background-color: #012e1b;
    `};

  
  
  
 
  
  
  
  .connbtn {
    text-transform: capitalize;
    width: 100%;
    height: 42px;
    font-weight: 500;
    border-radius: 8px;
    font-size: 20px;
    color: rgb(255, 255, 255);
    background: linear-gradient(
        150.17deg,
        rgba(0, 82, 7, 0.67) 20.75%,
        rgb(2, 2, 20) 97.02%
      ),
      rgb(255, 255, 255);
  }
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



export const Search = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 90%;
  /* margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")}; */
  border: none;
 

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;


  

export default SidebarMain;
