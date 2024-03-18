# Huge QA Sample Visual Test Automation Project

[Huge QA](https://www.hugeinc.com) Automated Visual Testing.

![Huge Logo]([[https://edge.sitecorecloud.io/darlingingr8628-darlingingr6280-production-5dd1/media/Project/Darling-Ingredients/darlingwebsite/Logo/Header/Darling-Logo-Old-Light.svg?iar=0](https://images.ctfassets.net/nk41thqytt3i/5N7KByxPK00UqVhuWuKQQX/8a380cc96ad10a9b5300cf3cfc8afed8/Logo_Pink.png)](https://images.ctfassets.net/nk41thqytt3i/5N7KByxPK00UqVhuWuKQQX/8a380cc96ad10a9b5300cf3cfc8afed8/Logo_Pink.png))

## Setup

* Clone the repo and run `cd example-playwright-browserstack-percy`
* Update `userName` and `accessKey` in file browerstack.yml with your [BrowserStack Username and Access Key](https://www.browserstack.com/accounts/settings)
* Update `percy:token` in file .percy.yml with the token from your Percy project [Percy Token](https://percy.io/11904dec/Darling-Ingredients/settings)
* Run `npm install`
* Run `npm update`

## Running your tests on BrowserStack

- To run test on BrowserStack Automate and capture snapshot with Percy, run `npx percy exec --verbose npm run sample-test-browserstack`
- To run test on BrowserStack Automate and DO NOT capture snapshot with Percy, run `npm run sample-test-browserstack`

## Verify results on BrowserStack and Percy
* You can view the test result on [BrowserStack Automate builds](https://automate.browserstack.com/dashboard/v2/builds/)
* Note: Due to 1 issue of BrowserStack Node SDK, there will be 2 builds created on Browser Stack dashboard, one with the build name configured in browserstack.yml and one with the one configured in fixture.js. The one in build created by fixture.js contains the full execution log.
* To verify the visual result, visit [Percy builds](https://percy.io/)

## Notes
* You can change the build number in file fixture.js, line 20 `build: "sample-visual-testing-build-[number]",` to be uploaded correctly to BrowserStack build
* You can also change the build name and project name in file browserstack.yml, it will automatically create build number with given build name + incremental build number

