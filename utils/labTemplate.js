const labTemplate = (req, i) => {
  return {
    name: `LAB ${i}`,
    days: [],
    totalClasses: 0,
    classesBunked: 0,
    semester: req.body.semester,
    owner: req.user._id,
    subjectType: "lab",
  };
};

module.exports = labTemplate;
