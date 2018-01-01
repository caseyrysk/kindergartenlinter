import { getAntonym } from './wordApi';

describe('Word API', () => {
    describe('stupid', () => {
        it('returns smart for stupid', async () => {
            return expect(getAntonym('stupid', 'flower')).resolves.toEqual('smart');
            // OR using AWAIT:
            // expect.assertions(1);
            // const result = await getAntonym('stupid');
            // expect(result).toEqual('smart');
        });
    });

    describe('no-match', () => {
        it('returns flower for butt', async () => {
            return expect(getAntonym('butt', 'flower')).resolves.toEqual('flower');
            // OR using AWAIT:
            // expect.assertions(1);
            // const result = await getAntonym('stupid');
            // expect(result).toEqual('smart');
        });
    });
});
