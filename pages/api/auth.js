const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_APP_ID,
  key: process.env.NEXT_PUBLIC_APP_KEY,
  secret: process.env.NEXT_PUBLIC_APP_SECRET,
  cluster: process.env.cluster,
  useTLS: true
});

module.exports = (req, res) => {
  var socketId = req.body.socket_id;
  var channel = req.body.channel_name;
  var presenceData = {
      //user_id: req.body.user_id,
      user_id: req.body.other,
      user_info: {
        other: req.body.other
      }
  };


  console.log(new Date().toLocaleString() + " authenticating user: " + socketId + ":" + channel + ":");
  console.log(presenceData);

  if(!presenceData) {
    var auth = pusher.authenticate(socketId, channel);
  } else {
    var auth = pusher.authenticate(socketId, channel, presenceData);
  }

  console.log(auth);
  res.status(200).send(auth);

  }
