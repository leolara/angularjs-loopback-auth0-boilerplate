module.exports = function(Message) {
  Message.who = function (cb) {

  }

  Message.remoteMethod(
    'who',
    {
      returns: {arg: 'whoami', type: 'string'}
    }
  );
};
