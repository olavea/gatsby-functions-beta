const Userlist = require('@userlist/push')

// Create a transport for userlist


var userlist = new Userlist();
  //{
//     pushKey: process.env.GATSBY_USERLIST_PUSH_KEY,
// }

const handler = (req, res) => {
    // const data = req.body;
    // const info =  userlist.users.create({
    //   identifier: "3d70d1d4-484a-4e72-8857-916ee525214e",
    //   email: "ola@olavea.com",
    //   properties: {
    //     first_name: "Ola",
    //     last_name: "Vea",
    //   }
    // })
    // console.log(info);
    res.json({
        statusCode: 200,
        body: "ARR!",
    })
}
module.exports = handler;

