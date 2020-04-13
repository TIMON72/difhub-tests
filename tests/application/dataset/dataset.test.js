const assert = require('assert')
const difhubTests = require('../../difhub.test')

module.exports = {
    datasetTests: () => datasetTests()
}

async function datasetTests() {
    describe("- Create structure test", async function () {
        it("Create structure", async function () {
            await require('./createStructure').createStructure(difhubTests.driver)
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
}