import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();

    await Apify.metamorph('petr_cermak/zillow-api-scraper', {
        ...input
    });
});