const assert = require('assert')

let skip = false
let stop = false

describe("- DifHub tests", async function () {
    this.timeout(600000)
    before(async function () {
        module.exports.driver = await require('../initDriver').initDriver()
            .catch(err => {
                stop = true
                assert.fail(err)
            })
    })
    beforeEach(async function () {
        if (stop)
            this.skip()
    })
    describe("- Login test", async function () {
        it("Login", async function () {
            await require('./login').login(module.exports.driver)
                .catch(err => {
                    stop = true
                    assert.fail(err)
                })
        }).timeout(60000)
    })
    describe("- Cleanup test", async function () {
        it("Cleanup", async function () {
            await require('./cleanup').cleanup(module.exports.driver)
                .catch(err => {
                    stop = true
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Create organization test", async function () {
        it("Create organization", async function () {
            await require('./createOrganization').createOrganization(module.exports.driver)
                .catch(err => {
                    stop = true
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Create department test", async function () {
        it("Create department", async function () {
            await require('./createDepartment').createDepartment(module.exports.driver)
                .catch(err => {
                    stop = true
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Create system test", async function () {
        it("Create system", async function () {
            await require('./createSystem').createSystem(module.exports.driver)
                .catch(err => {
                    stop = true
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Create application test", async function () {
        it("Create application", async function () {
            await require('./createApplication').createApplication(module.exports.driver)
                .catch(err => {
                    skip = true
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Application tests", async function () {
        beforeEach(function () {
            if (skip)
                this.skip()
        })
        await require("./application/application.test").applicationTests()
            .catch(err => {
                assert.fail(err)
            })
        this.afterAll(function () {
            skip = false
        })
    })
    after(function () {
        console.log(">> Press \"Enter\" to exit")
        process.stdin.once('data', function () {
            process.stdin.pause();
            module.exports.driver.quit()
        })
    })
})