const { v4: uuidv4 } = require("uuid");
const users = [
    {
        id: uuidv4(),
        username: "Md Ibrahim Khan",
        email: "ibrahim2013khan@gmail.com",
    },
    {
        id: uuidv4(),
        username: "Shihab khan",
        emial: "shihab2013khan@gmail.com",
    },
];

module.exports = users;