const getShortMessages = (messages) => {

  const individualObjects = messages.map(item => Object.keys(item));
  const messagesValues = individualObjects.map((keys, index) => messages[index][keys]);
  const messagesLessThanFifty = messagesValues.filter(item => item.length < 50 );

  return messagesLessThanFifty;
}

module.exports = getShortMessages
