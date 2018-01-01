import { getAntonym } from './wordApi';

describe('Word API', () => {
    describe('stupid', () => {
        it('returns smart for stupid', async () => {
            return expect(getAntonym('stupid')).resolves.toEqual('smart');
            // OR using AWAIT:
            // expect.assertions(1);
            // const result = await getAntonym('stupid');
            // expect(result).toEqual('smart');
        });
    });
});
