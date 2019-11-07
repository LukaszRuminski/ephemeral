# Seed of  Modern Web (MW) project using Next.js framework
Opinionated kick starter for MW projects on Next.js framework. Consist of useful  features, tricks  & configurations that boost start of development process.

## Features included
1. Azure pipelines YAML configuration:
    - Preview (SSR) build & deployment
    - Sit (static) build & deployment
    - Production deployment with Web App slot swapping
    - Pull request verification job which checks quality and runs static export
1. Recommended eslint configuration
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
1. Setup CI/CD (see [Azure Pipelines](#azure-pipelines))
1. Adjust the README.md

## Azure Pipelines
The yaml configuration for Azure pipelines was build according to the best practices and Microsoft [schema reference](https://docs.microsoft.com/en-us/azure/devops/pipelines/yaml-schema?view=azure-devops&tabs=schema). In order to set it up correctly you need to perform below steps:
1. [Adjust pipelines in repository](#Adjusting-pipelines-templates)
1. [Add Variable Groups](#Add-Azure-DevOps-Variable-Groups)
1. [Setup & rename pipelines in Azure DevOps](#Setup-&-rename-pipelines-in-Azure-DevOps)
1. [Configure manual approvals](#Manual-approvals)
1. [Configure branch policy](#Configure-branch-policy)

There are 4 recommended environments:
- `PREVIEW` - runs in server side mode, could serve content editors to preview  Contentful changes live
- `SIT` - stable static build that can be used to demo some feature/s to business or PSAT scanning
- `TEST` - static build that is updated with every merge to your develop/master branch. Used for acceptation the final build of your web application.
- `PROD`- production with Azure CDN in front

### File structure
`azure-pipelines/` - top level configuration of pipelines for sit, prod, preview environments and pull request verifier job. The files at this level should be adjusted following the instructions in [Adjusting pipelines templates](#adjusting-pipelines-templates)

`azure-pipelines/templates` - reusable peaces of configuration that are used to build top level pipelines

`azure-pipelines/templates/job` - job templates

`azure-pipelines/templates/steps` - steps templates

### Adjusting pipelines templates
Adjustments that should be done via git repository.
- `azure-pipelines/sit.yml`
    - `<azure subscription>` - indicates location of your SIT webapp. In this case it is the same as your Azure Resource Group e.g. "AZ-RG-CS-MW-ACE-NA-NonProd-01".
    - `<azure app service>` - SIT Azure App Service name (Web App) e.g. "sit-aceteam-tech-en-us"
    - `<domain> - application - sit`  - recommended name of the Azure Variable Group for you SIT environment which is the set of variables needed to run your website, where `<domain>` is domain of you application e.g. "aceteam.tech - application - sit".
- `azure-pipelines/prod.yml`
    - `<azure subscription>` - Resource group of your PRODUCTION environment e.g. "AZ-RG-CS-MW-ACE-NA-Prod-01".
    - `<azure app service>` - production webapp name e.g. "aceteam-tech-en-us"
    - `<domain> - application - prod` - variable group contained production variable set. e.g "aceteam.tech - application - prod"
- `azure-pipelines/preview.yml`
    - `<azure subscription>` - non prod Resource Group e.g. "AZ-RG-CS-MW-ACE-NA-NonProd-01".
    - `<azure app service>` - preview Web App name e.g. "preview-aceteam-tech-en-us"
    - `<domain> - application - prod` - as you can see we recommend using production variables for preview environment e.g. "aceteam.tech - application - prod" but if from some reason you need this set to be different from the production one you can create a special group e.g. "aceteam.tech - application - preview" for that purpose and use it in that place.

### Azure DevOps setup
There are some tweaks and configurations that are NOT available in .yaml specification. This section describes what needs to be done via Azure DevOps GUI to make pipelines works as desired.

#### Add Azure DevOps Variable Groups
In order to create Variable Group:
1.  Got to: Pipelines -> Library -> [plus] Variable Group
1. Specify the name e.g. "aceteam.tech - application - prod"
1. Add variables needed to run your project, for instance:
    - CF_DELIVERY_ACCESS_TOKEN
    - CF_SPACE_ID
    - DOMAIN_URL
    - PORT

#### Setup & rename pipelines in Azure DevOps
There is currently no mechanism to setup and name pipeline automatically from yml configuration therefore it needs to be done via graphical interface of Azure DevOps
1. Pipelines -> New pipeline -> Azure Repos Git -> `your repository` -> Existing Azure Pipelines YAML file -> path to the top level pipeline file. (e.g. sit.yml) -> Continue -> Run. By default Azure DevOps will create pipeline with the name of the project.
1.  In order to rename it, open pipeline that was setup in step 1) form list of all pipelines, click three dots from the top right corner, click 'Rename/move' and specify the name that you wish (e.g. "sit")

Repeat two above steps for all pipelines. (sit, prod, preview and verify pr)

#### Manual approvals
This functionality is configurable via Azure DevOps Environments. The names of your environments are defined on the top level pipelines files (e.g sit.yml). They will be automatically created for you if missing during deployment process.

Got to Pipelines -> Environments -> name of your environment. From environment view you can create new environment if you would like to configure it before first run. Expand three dots from upper right corner of particular environments, click 'Checks' then 'Create' and then specify the Approvers for given environment. (Disclaimer: They need to have access to Azure DevOps and your project first)

#### Configure branch policy
1. Go to (Repos -> Branches -> Branch policies (for master/develop branch)
1. Under Build validation add build pipeline indicating `pr-verify.yml`
1. Choose 'Immediately when your branch is updated' as build expiration.

## Roadmap
- How to test using Jest?  (write, configure & run)
- e2e tests
- Add web.config (using webpack loaders)
- Rollback pipeline
