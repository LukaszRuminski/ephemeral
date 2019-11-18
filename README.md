# Seed of  Modern Web (MW) project using Next.js framework
Opinionated kick starter for MW projects on Next.js framework. Consist of useful  features, tricks  & configurations that boost start of development process.

## Features included
1. Azure pipelines YAML configuration:
    - Preview (SSR) build & deployment
    - Sit (static) build & deployment
    - Production deployment with Web App slot swapping
    - Pull request verification job which checks quality and runs static export
1. Recommended eslint configuration
1. Recommended Unit tests configuration
1. Recommended End-to-end tests configuration
1. Recommended Accessibility tests configuration
1. Recommended npm scripts
1. Pre-push hook checking quality locally
1. Configuration of connection with private NPM prefixed by @mw

## Getting Started
1. Fill in placeholders in package.json
    - `--author--`
    - `--project_name--`
1. Run `npm install`  to install dependencies
1. Create Labels architecture in Contentful:
    1. Ensure you have following variables in the .env file:
        ```
        CF_DELIVERY_ACCESS_TOKEN={`Contentful delivery token`}
        CF_SPACE_ID={`Contentful space id`}
        CF_ENVIRONMENT=master
        CF_PERSONAL_ACCESS_TOKEN={`Contentful personal token`}
        ```
    1. Run `migrate-labels-architecture`
1. Run `npm run dev` to launch the project in development SSR mode and start coding.
1. Open `localhost:3000` to see the project website
1. Setup CI/CD (see [Azure Pipelines](./docs/azure-pipelines.md))
1. Setup tests (see [Tests](./docs/tests.md))
1. Adjust the README.md

## Roadmap
- Add web.config (using webpack loaders)
- Rollback pipeline
