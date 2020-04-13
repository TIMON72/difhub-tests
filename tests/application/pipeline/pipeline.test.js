const assert = require('assert')
const difhubTests = require('../../difhub.test')

module.exports = {
    pipelineTests: () => pipelineTests()
}

async function pipelineTests() {
    describe("- Create activity test", async function () {
        it("Create activity", async function () {
            await require('./createActivity').createActivity(difhubTests.driver)
                .catch(err => {
                    assert.fail(err)
                })
        }).timeout(30000)
    })
}