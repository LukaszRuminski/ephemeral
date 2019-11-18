const builder = require('junit-report-builder')
const report = require('../pa11y-report.json')

for (let [url, issues] of Object.entries(report.results)) {
    const suite = builder.testSuite().name(url)

    issues.forEach(issue => {
        suite.testCase()
            .className(issue.code)
            .name(`[${url}] ${issue.selector}`)
            .failure(`${issue.message}\n\nContext: ${issue.context}`)
    })
}

builder.writeTo('pa11y-junit.xml')
