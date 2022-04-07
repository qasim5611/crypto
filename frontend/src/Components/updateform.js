// import React ,{ useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// // import IconButton from "@material-ui/core/IconButton";
// // or
// import Toast from "light-toast";

// import { IconButton } from "@material-ui/core";

// import { Saveform } from "../redux/actions/SaveForm";

// import { GetRecord } from "../redux/actions/SaveForm";

// import { DelRecord } from "../redux/actions/SaveForm";

// import { UpdateRecord } from "../redux/actions/SaveForm";

//  import { useHistory } from 'react-router-dom';


// import API from "./../redux/url";



//   import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// const UpdateForm = (props) => {
//   console.log("props", props.match.params.id);
//   const [state, setState] = useState({ id: props.match.params.id });

//   //  const [name, setName] = useState(null);
//   //  const [phone, setPhone] = useState(null);
//   //  const [image, setImage] = useState("");

//   const [imageAsFile, setImageAsFile] = useState("");

//   const [flag, setFlag] = useState(false);
//   const [updatedIndex, setUpdatedIndex] = useState(0);

//   let dispatch = useDispatch();

//   let isDataComingCheck = useSelector(
//     (state) => state.FormReducer.isDataComing
//   );
//   console.log("isDataComingCheck", isDataComingCheck);
//   // const notify = () => toast("Date Inserted DB Successfully!");

//   // useEffect(() => {
//   //   dispatch(GetRecord());
//   //   console.log("get from form");
//   //   if (isDataComingCheck) {
//   //     notify();
//   //   }
//   // }, [isDataComingCheck]);

//   //   useEffect(() => {
//   //     axios.get(API + "/formdata").then((result) => {
//   //       console.log(result.data);
//   //         setCategories(result.data);
//   //         setCategories2(result.data);
//   //     });
//   //   }, [isCategoryDeleted]);

//   const onChangeHandler = (e) => {
//     if (e.target.name == "image") {
//       let val = e.target.files[0];
//       setState({ ...state, [e.target.name]: val });
//     } else {
//       setState({ ...state, [e.target.name]: e.target.value });
//     }
//   };


//   let history = useHistory();

//   const onSubmit = (e, id) => {
//     e.preventDefault();
//     let obj = {
//       ...state,
//     };
   
//     console.log(obj);
//     dispatch(UpdateRecord(obj));

//   setTimeout(() => {
        
//           history.push("/");
//         }, 5000);
//     // if (successfully) {
//     //   Toast.success("Successfully Created...!!", 2000, () => {});
//     // }

//     // const state = useSelector(state => state.ArticleReducer.msg)
//   };




//   const updateHandler = (item, index) => {
//     console.log("need to update stu ", item, index);
//     setUpdatedIndex(index);
//     // setName(item.name);
//     // setPhone(item.phone);
//     // setImage(item.image);

//     setFlag(true);
//   };
//   //  const state = useSelector(state => state.state){

//   //  }
 
//   const ctaUpdateHandler = () => {
//     if (state != "") {
//       let formData = {
//         ...state,

//         // name: name,
//         // phone: phone,
//         // image: image,
//       };
//       console.log("To Update data", formData);

//       console.log("docID", updatedIndex);

//       dispatch(UpdateRecord(updatedIndex, formData));

//       // setName("");
//       // setPhone("");
//       // setCountry("");
//       // setHobby("");
//       // setFlag(false);
//     } else {
//       // notifyerr();
//     }
//     // setStudents([...updateStudents]);
//   };

//   const AllFormsData = useSelector((state) => state.FormReducer.DBFormdata);
//   console.log("AllFormsData", AllFormsData);

//   //  const isCategoryDeleted = useSelector(
//   //    (state) => state.SaveData.isCategoryDeleted
//   //  );

//   return (
//     <div>
//       <h3> Update Your Form Here</h3>
//       <TextField
//         id="standard-password-input"
//         label="Please Enter Your Name Here"
//         type="text"
//         name="name"
//         value={state.name}
//         onChange={onChangeHandler}
//         // onChange={(e) => setName(e.target.value)}
//         style={{ width: "400px" }}
//       />
//       <br />
//       <br />
//       <TextField
//         id="standard-password-input"
//         label="Please Enter Your Phone"
//         type="text"
//         name="phone"
//         value={state.phone}
//         onChange={onChangeHandler}
//         // onChange={(e) => setPhone(e.target.value)}
//         style={{ width: "400px" }}
//       />
//       <br />
//       <br />
//       <TextField
//         id="standard-password-input"
//         label="name"
//         type="file"
//         name="image"
//         // value={image}
//         onChange={onChangeHandler}
//         // onChange={(e) => setImage(e.target.files[0])}
//         // onChange={handleImageAsFile}
//       />
//       <br />
//       <br /> <br />
//       <br />
//       <Button
//         variant="contained"
//         color="primary"
//         className="savebtn"
//         onClick={(e) => onSubmit(e, props.match.params.id)}
//       >
//         {" "}
//         Update Now
//       </Button>
//       {/* <Button variant="contained" color="secondary" onClick={SubmitHandler}>
//           Secondary
//         </Button> */}
    
//       {/* <button onClick={notify}>Notify!</button> */}
//       <hr />
//     </div>
//   );
// };

// export default UpdateForm
