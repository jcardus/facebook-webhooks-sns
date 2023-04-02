
/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */

export const createSubscription = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`createSubscription only accepts GET method, you tried: ${event.httpMethod} method.`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

    const response = {
        statusCode: 200,
        body: event.queryStringParameters['hub.challenge']
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};
