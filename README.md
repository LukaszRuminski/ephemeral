# Seed of  Modern Web (MW) project using Next.js framework
Opinionated kick starter for MW projects on Next.js framework. Consist of useful  features, tricks  & configurations that boost start of development process.

## Features included
1. Azure pipelines YAML configuration:
    - Project builds  (ssr and static)
    - Pull request verification job
1. Recommended eslint configuration
1. Definition of basic package.json tasks
1. Prepush hook checking quality locally
1. ~~Simple webapp configuration (`web.config` file)~~

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
1. Adjust REDME.md file according to your particular project
1. Run `npm run dev` to launch the project in development SSR mode and start coding.
1. Open `localhost:3000` to see the project website

## Roadmap
- How to test using Jest?  (write, configure & run)
- Npm - audit, outdated tasks
- Add web.config (using webpack loaders)
- Release YAML configuration
