const Pusher = require("pusher");

const pusher = new Pusher({
  appId: process.env.NEXT_PUBLIC_APP_ID,
  key: process.env.NEXT_PUBLIC_APP_KEY,
  secret: process.env.NEXT_PUBLIC_APP_SECRET,
  cluster: process.env.cluster,
  useTLS: true
});

module.exports = (req, res) => {

  const channel = 'private-my-channel'
  const event = 'my-event'

  const stringData = "{'name':'abc'}"

  pusher.trigger(channel, event, stringData).then( response => {
      console.log(response)
    }).catch( error =>
     console.log(error));

  }
