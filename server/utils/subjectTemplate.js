const subjectTemplate = (req) => {
  return {
    name: "SUBJECT",
    days: [],
    totalClasses: 0,
    classesBunked: 0,
    semester: req.user.currentSemester,
    owner: req.user._id,
    subjectType:'regular'
  }
};

module.exports = subjectTemplate;