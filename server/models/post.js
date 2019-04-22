var mongoose = require('mongoose');

/*
Schema Notes:
  Type: 0 : Grader/Class Assistant, 1 : User study, 2 : Research Assistant
  Salary: 0 :  0~10 /hr, 1 :  11~15 /hr, 2: 15+ /hr
  Major:
    0: Aerospace Engineering
    1: Agricultural and Biological engineering
    2: Bioengineering
    3. Chemical & Biomolecular engineering
    4. Civil and environmental engineering
    5. Computer engineering
    6: Computer Science
    7: electrical engineering
    8: engineering mechanics
    9. Engineering Physics
    10: Industrial Engineering
    11: Materials Science and Engineering
    12: Mechanical Engineering
    13: Nuclear, Plasma, and Radiological Engineering(NPRE)
    14: Systems Engineering and design
  Standing: 0: Freshman, 1: Sophomore, 2: Junior, 3: Senior
  Term: 0: Spring, 1: Summer, 2: Fall
*/
var PostSchema = new mongoose.Schema({
    jobName: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: Number, required: true},
    salary: {type: Number, required: true},
    major: {type: [Number], required: true},
    standing: {type: [Number], required: true},
    term: {type: Number, required: true},
    contactEmail: {type: String, required: true},
    contactName: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now}
}, {versionKey: false});

module.exports = mongoose.model('Post', PostSchema);
