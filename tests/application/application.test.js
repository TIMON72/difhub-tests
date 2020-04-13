const assert = require('assert')
const difhubTests = require('../difhub.test')

module.exports = {
    applicationTests: () => applicationTests()
}

let skip = false

async function applicationTests() {
    describe("- Create dataset test", async function () {
        it("Create dataset", async function () {
            await require('./createDataset').createDataset(difhubTests.driver)
                .catch(err => {
                    skip = true
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Dataset tests", async function () {
        beforeEach(function () {
            if (skip)
                this.skip()
        })
        await require("./dataset/dataset.test").datasetTests()
            .catch(err => {
                assert.fail(err)
            })
        this.afterAll(function () {
            skip = false
        })
    })
    describe("- Create interface test", async function () {
        it("Create interface", async function () {
            await require('./createInterface').createInterface(difhubTests.driver)
                .catch(err => {
                    skip = true
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Interface tests", async function () {
        beforeEach(function () {
            if (skip)
                this.skip()
        })
        await require("./interface/interface.test").interfaceTests()
            .catch(err => {
                assert.fail(err)
            })
        this.afterAll(function () {
            skip = false
        })
    })
    describe("- Create pipeline test", async function () {
        it("Create pipeline", async function () {
            await require('./createPipeline').createPipeline(difhubTests.driver)
                .catch(err => {
                    skip = true
                    assert.fail(err)
                })
        }).timeout(30000)
    })
    describe("- Pipeline tests", async function () {
        beforeEach(function () {
            if (skip)
                this.skip()
        })
        await require("./pipeline/pipeline.test").pipelineTests()
            .catch(err => {
                assert.fail(err)
            })
        this.afterAll(function () {
            skip = false
        })
    })
}