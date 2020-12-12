const Subject = require('../models/subject');

const subjectRequest = async (req, res,next) => {
  try {
    const subject = await Subject.findOne({ _id: req.params.id,owner:req.user._id });
    if (!subject) {
      return res.status(404).send("Subject Not Found");
    }
    req.subject = subject;
    next();
  } catch (e) {
    res.status(400).send({ msg: "Subject Not Found" });
  }
};

module.exports = subjectRequest;