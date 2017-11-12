import { callbackRuntime, APIGatewayEvent } from 'lambda-helpers'

export default callbackRuntime(async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: event.body || 'Hello world',
  }
})
