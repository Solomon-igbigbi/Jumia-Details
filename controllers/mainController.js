const puppeteer = require('puppeteer');

exports.homepage = (req, res) => {
    res.render('index');
}

exports.postpage =  async (req, res) => {

    const sitename = req.body.search
    console.log(sitename);

    const doSomething = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(sitename.toString(), {waitUntil: 'networkidle2'});
        // await page.screenshot({path: 'example.png'});

        let price = await page.evaluate(() => {
            const details = {
                image: document.querySelector('.-fh').src,
                description: document.querySelector('.-fs20').textContent,
                price: document.querySelector('.-fs24').textContent
            }

            return details;       
        })

        console.log(price)

        
    
        await browser.close();

        return price;
    };

    
    const response = await doSomething();
    console.log(response)
    res.render('landing', { response: response }  )
}

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://www.jumia.com.ng/chrysolite-designs-lucky-numbers-6-in-1-casual-polo-bundle-navyblue-black-white-grey-wine-red.-45474796.html', {waitUntil: 'networkidle2'});
//     // await page.screenshot({path: 'example.png'});

//     let price = await page.evaluate(() => {
//         const details = {
//             image: document.querySelector('.-fh').src,
//             description: document.querySelector('.-fs20').textContent,
//             price: document.querySelector('.-fs24').textContent
//         }

//         return details;       
//     })

//     console.log(price)
   
//     await browser.close();
// })();