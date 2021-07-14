import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add movie', async () => {

await driver.findElement(By.xpath("//input[@placeholder='Add Movie']")).sendKeys('Batman\n')

await driver.findElement(By.xpath("//input[@placeholder='Add Movie']")).click()
})

test('Add movie', async () => {
    await driver.findElement(By.xpath("//input[@placeholder='Add Movie']")).sendKeys('Batman\n')

    await driver.findElement(By.xpath("//button[text()='x']")).sendKeys('Batman\n')
})

test('Delete movie', async () => {
    await driver.findElement(By.xpath("//input[@placeholder='Add Movie']")).sendKeys('Batman\n')

    await driver.findElement(By.xpath("//button[text()='x']")).sendKeys('Batman\n')
})

test('Cross off movie', async () => {
    await driver.findElement(By.xpath("//input[@placeholder='Add Movie']")).sendKeys('Batman\n')
    
    await driver.findElement(By.xpath("//span[text()='Batman']")).click()
})

// test('Cross off movie', async () => {
//     await driver.findElement(By.xpath("//input[@placeholder='Add Movie']")).sendKeys('Batman\n')
    
//     await driver.findElement(By.xpath("//span[text()='Batman']")).click()


// })