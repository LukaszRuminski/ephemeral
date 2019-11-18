#Tests

## .env file content
Ensure you have following variables in the .env file:
 ```
PORT=3000
DOMAIN_URL={`Domain url for project`}
OUT_PATH=out
 ```

## Unit Tests
For unit tests seed uses [Jest](https://jestjs.io/).
Our recommendation here is to create tests for any logic applied in your component e.g. function for changing date format.
Those tests should be placed in component/helper folder, so it can be close reference.

[Jest Documentation](https://jestjs.io/docs/en/getting-started) describes how to properly write unit tests with this tool.

Example for unit test is available [here](https://dev.azure.com/pg-consumer/ACE-Website/_git/ACE-Website?path=%2Fhelpers%2Fblog.helpers.test.js&_a=content).

To run those tests run `npm run test`w

## End to End Tests
For end to end tests seed uses [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/).
To perform end to end tests static server is required to run.

Those tests should be placed in `e2e` folder. One file should cover tests for single page.
[Jest Documentation (Using with puppeteer)](https://jestjs.io/docs/en/puppeteer) and [Puppeteer Documentation](https://pptr.dev/) describes how to properly write e2e tests with those tools.

Example for end to end test is available [here](https://dev.azure.com/pg-consumer/ACE-Website/_git/ACE-Website?path=%2Fe2e%2Fportfolio.test.js&_a=content).

To run those tests run `npm run e2e` after running export and static server.

## Accessibility Tests
For accessibility tests seed uses [Pa11y-CI](https://github.com/pa11y/pa11y-ci).
To perform accessibility tests static server is required to run.

Those tests are defined [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) and they run against pages defined in your sitemap.xml.
Sitemap is generated automatically after exporting your project.

To run those tests run `npm run pa11y` after running export and static server

## Pipelines note
All tests are integrated in [Pull Request Verify pipeline](../azure-pipelines/pr-verify.yml) and they publish test results to Azure DevOps.
