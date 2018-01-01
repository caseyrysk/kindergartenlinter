import { getAntonym } from './wordApi';

const stupidAntonyms = '[{ "word": "smart", "score": 4279 }, { "word": "intelligent", "score": 1506 }]';

describe('Word API', () => {
    describe('stupid', () => {
        it('returns smart for stupid', async () => {
            fetch.mockResponse(stupidAntonyms);
            return expect(getAntonym('stupid', 'flower')).resolves.toEqual('smart');
            // OR using AWAIT:
            // expect.assertions(1);
            // const result = await getAntonym('stupid');
            // expect(result).toEqual('smart');
        });
    });

    describe('no-match', () => {
        it('returns flower for butt', async () => {
            fetch.mockResponse('[]');
            return expect(getAntonym('butt', 'flower')).resolves.toEqual('flower');
            // OR using AWAIT:
            // expect.assertions(1);
            // const result = await getAntonym('stupid');
            // expect(result).toEqual('smart');
        });
    });
});
