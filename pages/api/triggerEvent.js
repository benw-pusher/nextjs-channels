const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_APP_ID,
  key: process.env.NEXT_PUBLIC_APP_KEY,
  secret: process.env.NEXT_PUBLIC_APP_SECRET,
  cluster: process.env.NEXT_PUBLIC_APP_CLUSTER,
  useTLS: true
});

module.exports = (req, res) => {

  const channel = 'private-my-channel'
  const event = 'my-event'

  const stringData = "{'event':'received'}"

  pusher.trigger(channel, event, stringData).then( response => {
      console.log(response)
      res.send(`200`)
    }).catch( error => {
     console.log(error)
     res.send(`504`)
   });


  }
