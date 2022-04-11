const articletable = require("../../Models/article_schema");
const mongoose = require("mongoose");

const Articles = {
  save_article: async function (req, res) {
    try {
      let { title, auther, date, subject, journal, abstractdata, image } =
        req.body;
      // let image ;
      console.log(title);

      console.log(image);

      if (req.file) image = req.file.filename;

      // if (req.file) image = `${req.file.fieldname}-${req.file.originalname}`;

      // The data is valid and new we can register the user
      let myArticle = new articletable({
        title,
        auther,
        date,
        subject,
        journal,
        abstractdata,
        image,
      });

      let result = await myArticle.save();

      console.log(result);

      if (result) {
        return res.json(result);
      }
    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },

  // create_form: async function (req, res) {
  //   try {
  //     let { name, phone, image } = req.body;
  //     // let image ;

  //     // if (req.file) image = `${req.file.fieldname}-${req.file.originalname}`;

  //     // The data is valid and new we can register the user
  //     let newUser = new Form({
  //       name,
  //       phone,
  //       image,
  //     });

  //     let result = await newUser.save();

  //     return res.json(result);
  //   } catch (err) {
  //     return res.status(err.status || 500).send(err.message);
  //   }
  // },

  get_article: async function (req, res) {
    console.log("comming");
    try {
      const allArticles = await articletable.find();

      return res.json(allArticles);
    } catch (error) {
      console.log(error);
    }
  },

  upvote_count: async function (req, res) {
    try {
      let ArticleId = req.body.key;
      // let image ;
      console.log(req);

      let output = await articletable.findById({
        _id: ArticleId,
      });

      console.log("is user is find?", output.title);
      console.log("is user is isVoted?", output.isVoted);

      //  var upvoter = 10;
      var newupvoter = parseInt(output.upvote) + 40;

      if(output.isVoted === false ){
          if (output) {
            let isUpdates = await articletable.updateOne(
              {
                _id: ArticleId,
              },
              {
                $set: {
                  upvote: newupvoter,
                  isVoted: true,
                },
              }
            );

            if (isUpdates) {
              let outputupdated = await articletable.find();
              return res.send({
                msg: "upvote Updated",
                outputupdated,
              });
            }

            return res.send({
              msg: "upvote Not Updated",
              isUpdates,
            });
          }

      }

       return res.send({
         msg: "Already Added",
       });



    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },


  isuser_voted: async function (req, res) {
    try {
      let ArticleId = req.body.key;
      // let image ;
      console.log(req);

      let output = await articletable.findById({
        _id: ArticleId,
      });

      console.log("is user is find?", output.title);
      console.log("is user is isVoted?", output.isVoted);

      //  var upvoter = 10;
      var newupvoter = parseInt(output.upvote) + 40;


       

      if (output.isVoted == true) {
     
        return res.send({
          msg: "User IsVoted Already",
        });
      }
      else{
         return res.send({
           msg: "User not IsVoted Already",
         });
      }
    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },

  downvote_count: async function (req, res) {
    try {
      let ArticleId = req.body.key;
      // let image ;
      console.log(req);

      let output = await articletable.findById({
        _id: ArticleId,
      });

      console.log("is user is find?", output.title);
      console.log("is user is find?", output.downvote);

      //  var upvoter = 10;
      var newdownvoter = parseInt(output.downvote) + 10;

      if (output) {
        let isUpdates = await articletable.updateOne(
          {
            _id: ArticleId,
          },
          {
            $set: {
              downvote: newdownvoter,
            },
          }
        );

        if (isUpdates) {
          let outputupdated = await articletable.find();
          return res.send({
            msg: "downvote Updated",
            outputupdated,
          });
        }

        return res.send({
          msg: "downvote Not Updated",
          isUpdates,
        });
      }
    } catch (err) {
      return res.status(err.status || 500).send(err.message);
    }
  },

  // del_form: async function (req, res) {
  //   let find = await Form.findById(req.body.id);

  //   if (find) {
  //     await find.delete();
  //     // res.json("Gallery Deleted");
  //     return res.json(find);
  //   } else {
  //     throw new Error("Book not Found");
  //   }
  // },

  // gupdate_form: async function (req, res) {
  //   console.log("req.body.docId", req.body.id);
  //   let data = Object.assign({}, req.body);
  //   let user_id = req.body.id;
  //   let image;
  //   if (req.file) {
  //     image = `${req.file.fieldname}-${req.file.originalname}`;
  //     data.image = image;
  //   }

  // let update = await Form.findOneAndUpdate({ _id: user_id }, data);
  // if (update) {
  //   return res.json("Successfully Updated");
  // }
  // },
};

module.exports = Articles;
