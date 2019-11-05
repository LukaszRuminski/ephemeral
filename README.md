# Seed of  Modern Web (MW) project using Next.js framework
Opinionated kick starter for MW projects on Next.js framework. Consist of useful  features, tricks  & configurations that boost start of development process.

## Features included
1. Azure pipelines YAML configuration:
    - Preview (SSR) build & deployment
    - Sit (static) build & deployment
    - Production deployment with Web App slot swapping
    - Pull request verification job
1. Recommended eslint configuration
1. Definition of basic package.json tasks
1. Prepush hook checking quality locally
1. Configuration of MW privite npm

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
1. Configure pipelines for your project following "Azure Pipelines" section
1. Adjust REDME.md file

## Azure Pipelines
The yaml configuration for Azure pipelines was build accoring to the best practices and Miscrosoft [schema reference](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema)

There are 4 recommended environments:
- `PREVIEW` - runs in server side mode, could serve content editors to preview  contentful changes live
- `SIT` - stable static build that can be used to demo some feature/s to bussiness or PSAT scanning
- `TEST` - static build that is updated with every merge to your develop/master branch. Used for acceptation the final bulid of your web applicatoin.
- `PROD`- production with Azure CDN in front

### File structure
`azure-pipelines/` - top level configuration of pipelines for sit, prod, preview and pull request verifier job. The files at this level should be adjusted following the instructions in "How to fill templates in" section

`azure-pipelines/templetes` - reusable templates that are used to build pipelines form the top level

`azure-pipelines/templetes/job` - job templates

`azure-pipelines/templetes/steps` - steps templates

### Adjusting pipelines templates
Top level configuration
- `azure-pipelines/sit.yml`
    - `<domain> - application - prod`  - recomended name of the Azure Variable Group which is the set of variables needed to run your website, where `<domain>` is domain of you application e.g. "aceteam.tech - application - prod".
    - `<azure subscription>` - Indicates the place where you SIT webapp is located. In this cate it is the same as your Azure Resource Group e.g. "AZ-RG-CS-MW-ACE-NA-NonProd-01".
    - `<azure app service>` - Azure App Service name (Web App) e.g. "sit-aceteam-tech-en-us"
-`azure-pipelines/prod.yml`.
    - `<azure subscription>` - Resource group for your PRODUCTION environment e.g. "AZ-RG-CS-MW-ACE-NA-Prod-01".
    - `<azure app service>` - your production webapp name e.g. "aceteam-tech-en-us"
-`azure-pipelines/preview.yml`
    - `<azure subscription>` - Your non prod Resource Group e.g. "AZ-RG-CS-MW-ACE-NA-NonProd-01".
    - `<azure app service>` - Web App name e.g. "preview-aceteam-tech-en-us"

### Azure Dev Ops setup
TODO

## Roadmap
- How to test using Jest?  (write, configure & run)
- e2e tests
- Npm - audit, outdated tasks
- Add web.config (using webpack loaders)
- Rollback pipeline
