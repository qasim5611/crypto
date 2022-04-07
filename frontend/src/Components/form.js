// import React ,{ useState, useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// // import IconButton from "@material-ui/core/IconButton";
// // or
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// //  import { useHistory } from 'react-router-dom';

// import { IconButton } from "@material-ui/core";

// import { Saveform } from "../redux/actions/SaveForm";

// import { GetRecord } from "../redux/actions/SaveForm";

// import { DelRecord } from "../redux/actions/SaveForm";

// import { UpdateRecord } from "../redux/actions/SaveForm";


// import API from "./../redux/url";


//  import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

//   import { confirmAlert } from "react-confirm-alert"; // Import
// import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

// const Form = () => {


  
// const [state, setState] = useState({ name: null, phone: null, image: null });

//   //  const [name, setName] = useState(null);
//   //  const [phone, setPhone] = useState(null);
//   //  const [image, setImage] = useState("");

//    const [imageAsFile, setImageAsFile] = useState("");


//   const [flag, setFlag] = useState(false);
//     const [updatedIndex, setUpdatedIndex] = useState(0);


// let dispatch = useDispatch();

//  let isDataComingCheck = useSelector(
//    (state) => state.FormReducer.isDataComing
//  );
//  console.log("isDataComingCheck", isDataComingCheck);
// const notify = () => toast("Date Inserted DB Successfully!");

//  useEffect(() => {
//    dispatch(GetRecord());
//    console.log("get from form");
//    if (isDataComingCheck) {
//      notify();
//    }
//  }, [isDataComingCheck]);



// //   useEffect(() => {
// //     axios.get(API + "/formdata").then((result) => {
// //       console.log(result.data);
// //         setCategories(result.data);
// //         setCategories2(result.data);
// //     });
// //   }, [isCategoryDeleted]);



//  const onChangeHandler = (e) => {
//    if (e.target.name == "image") {
//      let val = e.target.files[0];
//      setState({ ...state, [e.target.name]: val });
//    } else {
//      setState({ ...state, [e.target.name]: e.target.value });
//    }
//  };


//   // const submit = (_id) => {
//   //   confirmAlert({
//   //     title: "Confirm Deletion",
//   //     message: "Are you sure to do this.",
//   //     buttons: [
//   //       {
//   //         label: "Yes",
//   //         onClick: () => deleteCategory(_id),
//   //       },
//   //       {
//   //         label: "No",
//   //       },
//   //     ],
//   //   });
//   // };

//   // const deleteHandler = (docID) => {
   
//   //   dispatch(DelRecord(docID));
  
//   // }; 



//  const submit = (docID) => {
//    confirmAlert({
//      title: "Confirm Deletion",
//      message: "Are you sure to do this.",
//      buttons: [
//        {
//          label: "Yes",
//          onClick: () => deleteCategory(docID),
//        },
//        {
//          label: "No",
//        },
//      ],
//    });
//  };

//  const deleteCategory = (docID) => {
//    dispatch(DelRecord(docID));
//  };








//    const updateHandler = (item, index) => {
//       console.log("need to update stu ", item, index);
//       setUpdatedIndex(index);
//       // setName(item.name);
//       // setPhone(item.phone);
//       // setImage(item.image);
   
//       setFlag(true);
//    };
// //  const state = useSelector(state => state.state){

// //  }
//  const SubmitHandler = (e) => {
//    e.preventDefault();

//    let Formobj = {
//       ...state,
//       // name,
//       // phone,
//       // image,
   
//    };
//    dispatch(Saveform(Formobj));
//   // setName("");
//   // setPhone("");
//   // setImage("");




//  };


// //  const showAllData = useSelector((state) => state.);
// //  console.log("UseSelector Enable for showAllData", showAllData);

 

//     const ctaUpdateHandler = () => {
//       if (state != "") {
//         let formData = {
//           ...state,

//           // name: name,
//           // phone: phone,
//           // image: image,
//         };
//         console.log("To Update data", formData);

//         console.log("docID", updatedIndex);

//         dispatch(UpdateRecord(updatedIndex, formData));

//         // setName("");
//         // setPhone("");
//         // setCountry("");
//         // setHobby("");
//         // setFlag(false);
//       } else {
//         // notifyerr();
//       }
//       // setStudents([...updateStudents]);
//     };;






//   const AllFormsData = useSelector((state) => state.FormReducer.DBFormdata);
//   console.log("AllFormsData", AllFormsData);




// //  const isCategoryDeleted = useSelector(
// //    (state) => state.SaveData.isCategoryDeleted
// //  );

//     return (
//       <div>
    
//        <h1>Its Your Dashboard</h1>
//         <h3> Please Fill Form    </h3>
//         <TextField
//           id="standard-password-input"
//           label="Please Enter Your Name Here"
//           type="text"
//           name="name"
//           // value={name}
//           onChange={onChangeHandler}
//           // onChange={(e) => setName(e.target.value)}
//           style={{ width: "400px" }}
//         />
//         <br />
//         <br />
//         <TextField
//           id="standard-password-input"
//           label="Please Enter Your Phone"
//           type="text"
//           name="phone"
//           // value={phone}
//           onChange={onChangeHandler}
//           // onChange={(e) => setPhone(e.target.value)}
//           style={{ width: "400px" }}
//         />
//         <br />
//         <br />
//         <TextField
//           id="standard-password-input"
//           label="name"
//           type="file"
//           name="image"
//           // value={image}
//           onChange={onChangeHandler}
//           // onChange={(e) => setImage(e.target.files[0])}
//           // onChange={handleImageAsFile}
        
//         />
//         <br />
//         <br /> <br />
//         <br />
      
//           <Button
//             variant="contained"
//             color="primary"
//             className="savebtn"
//             onClick={SubmitHandler}
//           >
//             {" "}
//             Save date
//           </Button>
       
//         {/* <Button variant="contained" color="secondary" onClick={SubmitHandler}>
//           Secondary
//         </Button> */}
//         <ToastContainer />
//         {/* <button onClick={notify}>Notify!</button> */}
//         <hr />
//         <h3>Show All Data From DB</h3>
//         <table>
//           <tr>
//             <th>Number</th>
//             <th>Name</th>
//             <th>Phome</th>
//             <th>DCID</th>
//             <th>Image</th>

//             <th>Action</th>
//           </tr>

//           {
//             //  return this.props.tasks.map((task) => {
//             AllFormsData.map((value, index) => {
//               console.log("value", value);
//               return (
//                 <tr key={index}>
//                   <td id="cat1"> {index} </td>
//                   <td id="cat1"> {value.name} </td>
//                   <td id="dic1"> {value.phone}</td>
//                   <td id="dic1"> {value._id}</td>
//                   <td id="dic1">
//                     {" "}
//                     <img
//                       src={API + "/api/uploads/" + value.image}
//                       alt={value.image}
//                       height="50"
//                     />
//                   </td>
//                   <td id="dic1">
//                     {" "}
//                     <button onClick={() => submit(value._id)}>Delete</button>
//                   </td>{" "}
//                   <td id="dic1">
//                     {" "}
//                     {/* <button onClick={() => updateHandler(value, value._id)}>
//                       Update Form
//                     </button> */}
//                     <Link to={`/Updateform/${value._id}`}>
//                       <button>Update Form</button>
//                     </Link>
//                   </td>
//                   {/* <td>
//                     <td style={{}}>
//                       <Fab
//                         color="secondary"
//                         aria-label="Edit"
//                         onClick={() => this.updateHandler(value.Price)}
//                       >
//                         <Icon>
//                           <img src={logo} alt="not" />
//                         </Icon>
//                       </Fab>
//                     </td>
//                     <td>
//                       <IconButton
//                         aria-label="Delete"
//                         onClick={() => this.deleteHandler(index)}
//                       >
//                         <DeleteIcon fontSize="large" />
//                       </IconButton>
//                     </td>
//                   </td> */}
//                 </tr>
//               );
//             })
//           }
//         </table>
//       </div>
//     );
// }

// export default Form
