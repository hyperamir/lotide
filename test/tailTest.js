const {tail} = require('../tail');
const {assertEqual} = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);