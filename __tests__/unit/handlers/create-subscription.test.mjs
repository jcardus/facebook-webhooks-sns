import { get } from '../../../src/handlers/index.mjs';
import event from '../../../events/create-subscription.json'

describe('Test createSubscription', function () {
    it('should verify', async () => {
        const challenge = '1158201444'
        event.queryStringParameters['hub.challenge'] = challenge
        // Invoke putItemHandler()
        const result = await get(event);

        const expectedResult = {
            statusCode: 200,
            body: challenge
        };
        expect(result).toEqual(expectedResult);
    });
});
