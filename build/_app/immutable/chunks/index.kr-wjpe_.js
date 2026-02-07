import{a,t as i}from"./disclose-version.BDaRFh6M.js";import"./legacy.G1r-cTWw.js";import{i as n,n as s}from"./runtime.D22fzDCM.js";import{s as r}from"./attributes.D7ZablPK.js";const l=""+new URL("../assets/blur-close-up-code-computer-546819.CTN_3rbO.jpg",import.meta.url).href,h={slug:"ui-testing",title:"UI Testing",excerpt:"My not so unbiased opinion on UI Testing and Tools",date:"2020-05-20T00:00:00.000Z",published:!0,keywords:["javascript","react","testing","cypress"],previewText:`Photo by
luis gomes
from
Pexels

Who Is Testing For?`,previewHtml:'<img src="%7B_ImagesBlurCloseUpCodeComputer546819Jpg%7D" alt="Ruby test code on a dark theme laptop monitor"> <p>Photo by <a href="https://www.pexels.com/@luis-gomes-166706?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels" rel="nofollow">luis gomes</a> from <a href="https://www.pexels.com/photo/blur-close-up-code-computer-546819/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels" rel="nofollow">Pexels</a></p>'},{slug:g,title:f,excerpt:b,date:w,published:y,keywords:k,previewText:v,previewHtml:x}=h;var c=i(`<img alt="Ruby test code on a dark theme laptop monitor"> <p>Photo by <a href="https://www.pexels.com/@luis-gomes-166706?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels" rel="nofollow" target="_blank">luis gomes</a> from <a href="https://www.pexels.com/photo/blur-close-up-code-computer-546819/?utm_content=attributionCopyText&amp;utm_medium=referral&amp;utm_source=pexels" rel="nofollow" target="_blank">Pexels</a></p> <h2 id="who-is-testing-for"><a aria-hidden="true" tabindex="-1" href="#who-is-testing-for"><span class="icon icon-link"></span></a>Who Is Testing For?</h2> <p>Testing is about being able to ship with confidence. Not worrying that it’s
Friday before a 3 day weekend, not having to worry about something like
weekly/monthly/quarterly deployments. Being able to deploy your changes and not
quezy about end users finding and reporting bugs, and then either scrambling to
fix them, or rolling back to a previous version.</p> <p>Ultimately though, there’s only one ‘person’ testing is for, and that’s the
user. Sure, testing helps developers not introduce bugs and potentially cause
errors that bring down environments. It can help save time and money, which
managers and stakeholders love, but in the end it’s ultimately for the user. If
a user discovers a bug within your application, some level of trust has been
violated. Do this enough times and that person isn’t going to want to use your
product again, and worse yet, they might tell their friends. I’m sure everyone
has been warned away from a product, whether that’s software, a service, or a
physical product. You don’t want this to be your company.</p> <h2 id="what-should-we-test"><a aria-hidden="true" tabindex="-1" href="#what-should-we-test"><span class="icon icon-link"></span></a>What Should We Test?</h2> <p>The answer to this depends. In a perfect world <em>everything</em> would be tested, and
while this is definitely possible, we have to be careful of diminishing returns.
It’s also entirely possible to have passing tests with 100% code coverage, and
not actually catch that the app is broken.</p> <p>I like to start with asking, what absolutely <em>has</em> to work? For e-commerce store
this could be a checkout flow. The ability for your users to add items to their
cart, and especially pay you money, better work or you’re going to be losing
money.</p> <blockquote><p>Find the critical parts of your app and make sure they’re tested.</p></blockquote> <p>Once you have those critical paths tested, you can start to expand to other
parts of the app.</p> <p>This is also where you can do things like: <em>Setting a baseline for code
coverage</em> Not letting coverage drop below ^ <em>Enforcing some form of tests on
any new features</em> Implementing TDD into your workflow (not everyone does this,
and it shouldn’t be viewed as a requirement)</p> <h2 id="types-of-testing"><a aria-hidden="true" tabindex="-1" href="#types-of-testing"><span class="icon icon-link"></span></a>Types of Testing</h2> <p>There are a ton of terms around this topic, and some of them refer to the same
thing. It just depends what area you’re coming from, front end or back end.</p> <h3 id="static"><a aria-hidden="true" tabindex="-1" href="#static"><span class="icon icon-link"></span></a>Static</h3> <p>There are a lot of ways applications can break and you could write a suite of
tests for the entire codebase to make certain this never happens. That would
slow development down, and would be a lot of work that we don’t need to do since
there are a bunch of tools that already do this for us.</p> <p>Tools that fall into this category are things like: <em>eslint</em> eslint-plugin-jsx-a11y <em>prettier</em> react-axe</p> <h3 id="unit"><a aria-hidden="true" tabindex="-1" href="#unit"><span class="icon icon-link"></span></a>Unit</h3> <p>Type of test for “units” of your code in isolation. They’re the smallest part
you can test. This may be a function, a component, an API route/spec, etc. An
example of this might be just the checkout function of an e-commerce site, but
we’re checking a small part of this. So we’re making sure it works with a mocked
API call and response.</p> <p>While it may not seem like it, this can be one of the harder things to test. A
lot of overthinking can occur here, and a lot of unit tests can be written to
increase code coverage, but the code working in isolation doesn’t always prove
that our code is bug free.</p> <p>That’s where Integration tests come in.</p> <h3 id="integration"><a aria-hidden="true" tabindex="-1" href="#integration"><span class="icon icon-link"></span></a>Integration</h3> <p>Type of test for multiple “units” of your code in isolation from the rest of the
application. This could be multiple components, a page, a feature, etc. An
example of this might be the whole checkout feature of an e-commerce
application. Still using mocks for the API call and/or responses, but instead of
just checking the function, we’re checking that the component is operating as it
should when things go right, and when they go wrong.</p> <p>These tests may be a bit more involved than Unit tests, but they provide a lot
more value. Since they test how things work in concert with each other, somewhat
in isolation from other parts of the app, we’re able to determine that our
changes aren’t affecting whole sections of our code. Integration tests are also
a bit easier to reason about, so they might end up being easier to write than
some Unit tests.</p> <blockquote><p>Integration tests provide us with the most “bang for our buck”</p></blockquote> <p>Testing the full application flow is where end-to-end tests come in.</p> <h3 id="e2e"><a aria-hidden="true" tabindex="-1" href="#e2e"><span class="icon icon-link"></span></a>E2E</h3> <p>Type of test for testing full paths and user workflows of your app. To continue
with our e-commerce example, this would be the equivalent of you manually going
through the login screen, then clicking on an item to add to your cart,
navigating to your cart, and checking out from the store.</p> <p>Since we’re testing the whole flow in conjunction with the rest of the
application, these tests are slower. Not only to write, but also to run. They
can also be somewhat brittle tests, if we’re doing a lot of refactors, or
iterative development, we might need to make a lot of changes to our end to end
tests. One strategy for this type of testing is to make sure the truly critical
paths are tested, and over time add on to the test suites, but we have to keep
in mind how long our tests run overall.</p> <p>e2e testing is great for ensuring those paths are working well, but they can’t
quite tell us if we made a change that completely ruined the application
visually. All of the tests that we’ve talked about so far either look at the
code being written, or the resulting DOM structure directly, none of them have
the ability to tell us if we’ve ruined the visual presentation of our
application. This is where Visual Regression Testing can help.</p> <h3 id="visual-regression-testing"><a aria-hidden="true" tabindex="-1" href="#visual-regression-testing"><span class="icon icon-link"></span></a>Visual Regression Testing</h3> <p>Type of testing whereby we use an e2e tool like Cypress and take screenshots as
we go. This allows us to set a baseline upon which we can compare screenshots
from subsequent runs, and visually diff them (similar to a git diff of a text
file) and see what has changed.</p> <p>This type of testing is a lot more involved, and while the actual setting
up/writing of the tests isn’t complicated, the manual review required can be
time consuming. It’s significantly less time consuming than having manual
testers constantly checking changes before sending them to production however.</p> <h3 id="security-audits"><a aria-hidden="true" tabindex="-1" href="#security-audits"><span class="icon icon-link"></span></a>Security Audits</h3> <p>Can be done via something like <code>npm audit</code> or GitHub security checks and/or <a href="https://dependabot.com/" rel="nofollow" target="_blank">Dependabot</a>.</p> <h3 id="performance-testing"><a aria-hidden="true" tabindex="-1" href="#performance-testing"><span class="icon icon-link"></span></a>Performance Testing</h3> <ul><li>Lighthouse CLI</li> <li>React Dev Tools (Performance Pane)</li></ul> <h2 id="testing-tools"><a aria-hidden="true" tabindex="-1" href="#testing-tools"><span class="icon icon-link"></span></a>Testing tools</h2> <h3 id="react"><a aria-hidden="true" tabindex="-1" href="#react"><span class="icon icon-link"></span></a>React</h3> <blockquote><p>React Testing Library is a very light-weight solution for testing React
components. It provides light utility functions on top of react-dom and
react-dom/test-utils, in a way that encourages better testing practices. Its
primary guiding principle is: <a href="https://testing-library.com/docs/guiding-principles" rel="nofollow" target="_blank">The more your tests resemble the way your software is used, the more confidence they can give you.</a></p></blockquote> <ul><li><a href="https://testing-library.com/docs/react-testing-library/intro" rel="nofollow" target="_blank">react-testing-library</a></li></ul> <h3 id="cypress"><a aria-hidden="true" tabindex="-1" href="#cypress"><span class="icon icon-link"></span></a>Cypress</h3> <blockquote><p>A next generation front end testing tool built for the modern web</p> <p>Cypress is most often compared to Selenium; however Cypress is both
fundamentally and architecturally different. Cypress is not constrained by the
same restrictions as Selenium.</p> <p>This enables you to write faster, easier and more reliable tests.</p></blockquote> <ul><li><a href="https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell" rel="nofollow" target="_blank">cypress documentation</a></li> <li><a href="https://testing-library.com/docs/cypress-testing-library/intro" rel="nofollow" target="_blank">cypress-testing-library</a></li></ul> <h3 id="static-and-linting"><a aria-hidden="true" tabindex="-1" href="#static-and-linting"><span class="icon icon-link"></span></a>Static and Linting</h3> <ul><li><a href="https://eslint.org/" rel="nofollow" target="_blank">eslint</a></li> <li><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y" rel="nofollow" target="_blank">eslint-plugin-jsx-a11y</a></li> <li><a href="https://prettier.io/" rel="nofollow" target="_blank">prettier</a></li> <li><a href="https://github.com/dequelabs/react-axe" rel="nofollow" target="_blank">react-axe</a></li> <li><a href="https://github.com/typicode/husky" rel="nofollow" target="_blank">husky</a></li> <li><a href="https://github.com/okonet/lint-staged" rel="nofollow" target="_blank">lint-staged</a></li> <li><a href="https://github.com/mysticatea/npm-run-all" rel="nofollow" target="_blank">npm-run-all</a></li></ul> <h3 id="a11y"><a aria-hidden="true" tabindex="-1" href="#a11y"><span class="icon icon-link"></span></a>a11y</h3> <ul><li><a href="https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni" rel="nofollow" target="_blank">Accessibility Insights Chrome Extension</a></li> <li><a href="https://coolors.co/contrast-checker/112a46-acc8e5" rel="nofollow" target="_blank">Color Contrast Checker</a></li></ul> <h3 id="screen-readers"><a aria-hidden="true" tabindex="-1" href="#screen-readers"><span class="icon icon-link"></span></a>Screen Readers</h3> <ul><li><a href="https://www.nvaccess.org/about-nvda/" rel="nofollow" target="_blank">NVDA</a></li> <li><a href="https://www.apple.com/accessibility/mac/vision/" rel="nofollow" target="_blank">VoiceOver</a></li></ul>`,1);function T(t){var e=c(),o=n(e);r(o,"src",l),s(96),a(t,e)}export{T as default,h as metadata};
