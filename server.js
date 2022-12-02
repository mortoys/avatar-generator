const path = require("path");
const fs = require("fs");
const puppeteer = require('puppeteer');

// http://127.0.0.1:8000/index.html#/own/create?param=%7B%22resources%22%3A%20%5B%7B%22type%22%3A%20%22mouth%22,%20%22color%22%3A%20%5B%5D,%20%22id%22%3A%2090040,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D,%20%7B%22type%22%3A%20%22face%22,%20%22color%22%3A%20%5B%22fff0eb%22%5D,%20%22id%22%3A%2050060,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D,%20%7B%22type%22%3A%20%22eyebrow%22,%20%22color%22%3A%20%5B%225E3E31%22%5D,%20%22id%22%3A%20130441,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D,%20%7B%22type%22%3A%20%22eyes%22,%20%22color%22%3A%20%5B%225d1803%22%5D,%20%22id%22%3A%20120380,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D,%20%7B%22type%22%3A%20%22nose%22,%20%22color%22%3A%20%5B0.8%5D,%20%22id%22%3A%2060040,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D,%20%7B%22type%22%3A%20%22hair%22,%20%22color%22%3A%20%5B%22302C2C%22,%20%220C0A0A%22,%20%22242121%22%5D,%20%22id%22%3A%2020730,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D,%20%7B%22type%22%3A%20%22dress%22,%20%22color%22%3A%20%5B%5D,%20%22id%22%3A%2032100,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D,%20%7B%22type%22%3A%20%22eyeslid%22,%20%22color%22%3A%20%5B0.4%5D,%20%22id%22%3A%20110180,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D,%20%7B%22type%22%3A%20%22body%22,%20%22color%22%3A%20%5B%5D,%20%22id%22%3A%2040020,%20%22transform%22%3A%20%7B%22rotate%22%3A%200,%20%22x%22%3A%200,%20%22y%22%3A%200,%20%22scale%22%3A%201%7D%7D%5D,%20%22sex%22%3A%200%7D

const get = async (param) => {
    const browser = await puppeteer.launch({
        // headless: false,
    });
    const page = await browser.newPage();

    const base64 = () => {
        bb = document.getElementsByClassName("box")[0]
        var s = new XMLSerializer().serializeToString(bb)
        return 'data:image/svg+xml;base64,' + window.btoa(s)
    }

    let base64svg = ''

    await page.goto(`http://127.0.0.1:8000/index.html#/own/create?param=${param}`);
    // await page.waitForTimeout(1000);
    base64svg = await page.evaluate(base64);

    await browser.close();

    return base64svg
};

const http = require('http');
const hostname = '0.0.0.0';
const port = 7500;
const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    query = req.url.split('param=')
    if (query.length == 1) return;
    // console.log(query[1])

    const base64 = await get(query[1])
    res.setHeader('Content-Type', 'text/plain');
    res.end(base64);
});

server.listen(port, hostname, () => { 
    // console.log(`Server running at http://${hostname}:${port}/`);
});

const server2 = http.createServer(function (req,res) {
    // console.log(req.url)
    const pp = path.resolve(__dirname,"./code" + req.url)
    
    if (pp.includes('.map')) {
        res.end('');
    }

    var readStream = fs.createReadStream(pp);
        readStream.on('open', function () {
        readStream.pipe(res);
    });

    readStream.on('error', function(err) {
        res.end('');
    });
})

const port2 = 8000;
server2.listen(port2, hostname, () => {
    console.log(`Server running at http://${hostname}:${port2}/`);
});