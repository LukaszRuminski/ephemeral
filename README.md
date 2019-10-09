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
1. Create .env file with variables:
    1. CF_DELIVERY_ACCESS_TOKEN={`Contentful delivery token`}
    1. CF_SPACE_ID={`Contentful space id`}
    1. CF_PERSONAL_ACCESS_TOKEN={`Contentful personal token`}
1. Run `npm run migrate-content-types -- -s {your space id}`
1. Run `npm run migrate-content`
1. Adjust REDME.md file according to your particular project
1. Run `npm run dev` to launch the project in development SSR mode and start coding.

## Run
1. Run `npm install`  to install dependencies
1. Run `npm run dev`  to start the project
1. Open `localhost:3000` to see the project website

## Roadmap
- How to test using Jest?  (write, configure & run)
- Npm - audit, outdated tasks
- Add web.config (using webpack loaders)
- Release YAML configuration
- Enviroment variables managment with dotenv lib

## Estimated saving
Set up the project with all above features can take even up to 10 MD
