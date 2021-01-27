const puppeteer = require('puppeteer');

exports.getpage =  async (req, res) => {
    const sitename = req.query.url
    console.log(sitename);
    const doSomething = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(sitename.toString(), {waitUntil: 'networkidle2'});
        let price = await page.evaluate(() => {         
            const details = {
                image: document.querySelector('.-fh').src,
                description: document.querySelector('.-fs20').textContent,
                rating: {
                    stars: document.querySelector('.stars').textContent,
                    numbers: document.querySelector('.-plxs').textContent,
                },
                price: {
                    current_price: document.querySelector('.-fs24').textContent,
                    old_price: document.querySelector('.-lthr').textContent,
                    discount: document.querySelector('._dsct').textContent
                },
            }
            return details;       
        })
        await browser.close();
        return price;
    };
    const response = await doSomething();
    res.json(response)
}