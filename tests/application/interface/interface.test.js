const assert = require('assert')
const difhubTests = require('../../difhub.test')

module.exports = {
    interfaceTests: () => interfaceTests()
}

async function interfaceTests() {
    describe("- Create parameter test", async function () {
        it("Create parameter", async function () {
            await require('./createParameter').createParameter(difhubTests.driver)
                .catch(err => {
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Create response test", async function () {
        it("Create response", async function () {
            await require('./createResponse').createResponse(difhubTests.driver)
                .catch(err => {
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Create operation test", async function () {
        it("Create operation", async function () {
            await require('./createOperation').createOperation(difhubTests.driver)
                .catch(err => {
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Create layout test", async function () {
        it("Create layout", async function () {
            await require('./createLayout').createLayout(difhubTests.driver)
                .catch(err => {
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Create example test", async function () {
        it("Create example", async function () {
            await require('./createExample').createExample(difhubTests.driver)
                .catch(err => {
                    assert.fail(err)
                })
        })
    })
}