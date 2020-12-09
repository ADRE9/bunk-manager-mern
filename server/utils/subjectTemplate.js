const subjectTemplate = (req,i) => {
  return {
    name: `SUBJECT ${i}`,
    days: [],
    totalClasses: 0,
    classesBunked: 0,
    semester: req.user.currentSemester,
    owner: req.user._id,
    subjectType:'regular'
  }
};

module.exports = subjectTemplate;