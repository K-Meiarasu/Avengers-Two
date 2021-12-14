const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-ccdacfabfcebcbacafbadcddfcbdfbbbffccc.examlyiopb.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
	console.log('TESTCASE:testcase1:success');
	}
	catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();