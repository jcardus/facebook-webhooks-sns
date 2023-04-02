import {PublishCommand, SNSClient} from "@aws-sdk/client-sns";
const region = process.env.AWS_REGION
const snsClient = new SNSClient({ region });

export const get = async (event) => {
    if (event.httpMethod !== 'GET') {
        throw new Error(`this only accepts GET method, you tried: ${event.httpMethod} method.`);
    }
    console.info('received:', event);
    const response = {
        statusCode: 200,
        body: event.queryStringParameters['hub.challenge']
    }
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response
}

export const post = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`this only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    const body = JSON.parse(event.body)
    for (const e of body.entry) {
        for (const change of e.changes) {
            const TopicArn = process.env[`TOPIC_${change.field.toUpperCase()}`]
            console.log('publish', change.value, 'to', TopicArn)
            await snsClient.send(new PublishCommand({
                Message: JSON.stringify(change.value),
                TopicArn
            }))
        }
    }
    const response = { statusCode: 200 }
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`)
    return response
}
