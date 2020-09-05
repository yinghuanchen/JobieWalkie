const express = require("express")
const router = express.Router()
const passport = require("passport")
const keys = require("../../config/keys")
const Debrief = require("../../models/Debrief")
const Company = require("../../models/Company");
// Index
router.get("/", (req, res) => {
    Debrief.find()
      .populate('company')
      .sort({ createdAt: -1 })
      .then((debriefs) => {
        return res.json(debriefs);
      })
      .catch((err) =>
        res.status(404).json({ noDebriefsFound: "No debriefs found" })
      );
})

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newDebrief = new Debrief({
      user: req.user.id,
      company: req.body.company,
      jobTitle: req.body.jobTitle,
      interviewDate: req.body.interviewDate,
      interviewStage: req.body.interviewStage,
      interviewSummary: req.body.interviewSummary,
      difficulty: req.body.difficulty,
      comments: req.body.comments,
    })
    newDebrief.save().then((newDebrief) => res.json(newDebrief))
  }
)

// Show
router.get(
  "/:id",
  (req, res) => {
    Debrief.findById(req.params.id)
      .populate('company')
      .then((debrief) => res.json(debrief))
      .catch((err) =>
        res.status(404).json({ nodebrieffound: "No debrief found with that ID" })
      )
  }
)

router.post(
  "/:id", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const newDebrief = {
      user: req.user.id,
      company: req.body.company,
      jobTitle: req.body.jobTitle,
      interviewDate: req.body.interviewDate,
      interviewStage: req.body.interviewStage,
      interviewSummary: req.body.interviewSummary,
      difficulty: req.body.difficulty,
      comments: req.body.comments,
    };
    Debrief.findByIdAndUpdate(req.params.id, newDebrief, { new: true })
      .populate("company")
      .then((debrief) => res.json(debrief))
      .catch((err) => res.status(404).json(err));
  }
)

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Debrief.findByIdAndRemove(req.params.id)
      .then(() => res.json({ msg: "debrief removed" }))
      .catch((errs) => console.log(errs));
  }
);

// router.route('/update').post(function(req,res){

//     kennels.findByIdAndUpdate({"5db6b26730f133b65dbbe459"},{"breed": "Great Dane"}, function(err, result){

//         if(err){
//             res.send(err)
//         }
//         else{
//             res.send(result)
//         }

//     })
// })

// router.put('/update/:id', function (req, res) {
//   //since you POST the object then use req.body
//   var newObject = {
//     name: req.body.name,
//     phone: req.body.phone
//   };

//   Perfiles.findByIdAndUpdate(req.params.id, newObject, function (err) {
//     if (err) { res.send(err); }
//     res.json({ messaje: 'Done' });
//   });
// });

// bookRouter.route('/:bookId')
//     .get(...)
//     .put(...)
//     .patch((req,res)=>{
//         Book.findById(req.params.bookId, (err, book) => {
//             if(req.body._id){
//                 delete req.body._id;
//             }
//             for( let b in req.body ){
//                 book[b] = req.body[b];
//             }
//             book.save();
//             res.json(book);
//         })
//     })



module.exports = router;

