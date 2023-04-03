import { get, post } from '../../../src/handlers/index.mjs';
import event from '../../../events/create-subscription.json'
import leadgen from '../../../events/leadgen.json'

describe('Test webhooks', function () {
    it('should verify', async () => {
        const challenge = '1158201444'
        event.queryStringParameters['hub.challenge'] = challenge
        const result = await get(event);

        const expectedResult = {
            statusCode: 200,
            body: challenge
        };
        expect(result).toEqual(expectedResult);
    });

    test('leadgen', async () => {
        const result = await post(leadgen);
        const expectedResult = { statusCode: 200 }
        expect(result).toEqual(expectedResult);
    });
});
