const randomTimeStamp = require("../utils/randomTimeStamp");

module.exports = [
  {
    id: "1",
    title: "Feed 1",
    description: "This is feed 1",
    timeStamp: randomTimeStamp(new Date(2012, 0, 1), new Date()),
    body: "This is feed 1 body",
  },
  {
    id: "2",
    title: "Feed 2",
    description: "This is feed 2",
    timeStamp: randomTimeStamp(new Date(2013, 0, 1), new Date()),
    body: "This is feed 2 body",
  },
  {
    id: "3",
    title: "Feed 3",
    description: "This is feed 3",
    timeStamp: randomTimeStamp(new Date(2014, 0, 1), new Date()),
    body: "This is feed 3 body",
  },
  {
    id: "4",
    title: "Feed 4",
    description: "This is feed 4",
    timeStamp: randomTimeStamp(new Date(2015, 0, 1), new Date()),
    body: "This is feed 4 body",
  },
  {
    id: "5",
    title: "Feed 5",
    description: "This is feed 5",
    timeStamp: randomTimeStamp(new Date(2008, 0, 1), new Date()),
    body: "This is feed 5 body",
  },
];
