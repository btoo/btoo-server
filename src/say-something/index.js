const emoji = require('node-emoji')

module.exports = (event, context, callback) => {

  console.log(
    `woah logs! (using a node module ${emoji.get('ok_hand')})`,
    event, // js object passed into this fn as parameters
    context // context object gives you access to the aws lambda runtime
  )

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `dis be da input: ${event} ${context}`,
      input: event,
    }),
  }

  callback(null, response)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });

}