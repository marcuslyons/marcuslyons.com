---
slug: front-end-ui-testing
title: UI Testing
excerpt: My not so unbiased opinion on UI Testing and Tools
date: 2020-05-20
published: true
keywords: [javascript, react, testing, cypress]
---

![Ruby test code on a dark theme laptop monitor](./images/blur-close-up-code-computer-546819.jpg)

Photo by
[luis gomes](https://www.pexels.com/@luis-gomes-166706?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)
from
[Pexels](https://www.pexels.com/photo/blur-close-up-code-computer-546819/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels)

## Who Is Testing For?

Testing is about being able to ship with confidence. Not worrying that it's
Friday before a 3 day weekend, not having to worry about something like
weekly/monthly/quarterly deployments. Being able to deploy your changes and not
quezy about end users finding and reporting bugs, and then either scrambling to
fix them, or rolling back to a previous version.

Ultimately though, there's only one 'person' testing is for, and that's the
user. Sure, testing helps developers not introduce bugs and potentially cause
errors that bring down environments. It can help save time and money, which
managers and stakeholders love, but in the end it's ultimately for the user. If
a user discovers a bug within your application, some level of trust has been
violated. Do this enough times and that person isn't going to want to use your
product again, and worse yet, they might tell their friends. I'm sure everyone
has been warned away from a product, whether that's software, a service, or a
physical product. You don't want this to be your company.

## What Should We Test?

The answer to this depends. In a perfect world _everything_ would be tested, and
while this is definitely possible, we have to be careful of diminishing returns.
It's also entirely possible to have passing tests with 100% code coverage, and
not actually catch that the app is broken.

I like to start with asking, what absolutely _has_ to work? For e-commerce store
this could be a checkout flow. The ability for your users to add items to their
cart, and especially pay you money, better work or you're going to be losing
money.

> Find the critical parts of your app and make sure they're tested.

Once you have those critical paths tested, you can start to expand to other
parts of the app.

This is also where you can do things like: _ Setting a baseline for code
coverage _ Not letting coverage drop below ^ _ Enforcing some form of tests on
any new features _ Implementing TDD into your workflow (not everyone does this,
and it shouldn't be viewed as a requirement)

## Types of Testing

There are a ton of terms around this topic, and some of them refer to the same
thing. It just depends what area you're coming from, front end or back end.

### Static

There are a lot of ways applications can break and you could write a suite of
tests for the entire codebase to make certain this never happens. That would
slow development down, and would be a lot of work that we don't need to do since
there are a bunch of tools that already do this for us.

Tools that fall into this category are things like: _ eslint _
eslint-plugin-jsx-a11y _ prettier _ react-axe

### Unit

Type of test for "units" of your code in isolation. They're the smallest part
you can test. This may be a function, a component, an API route/spec, etc. An
example of this might be just the checkout function of an e-commerce site, but
we're checking a small part of this. So we're making sure it works with a mocked
API call and response.

While it may not seem like it, this can be one of the harder things to test. A
lot of overthinking can occur here, and a lot of unit tests can be written to
increase code coverage, but the code working in isolation doesn't always prove
that our code is bug free.

That's where Integration tests come in.

### Integration

Type of test for multiple "units" of your code in isolation from the rest of the
application. This could be multiple components, a page, a feature, etc. An
example of this might be the whole checkout feature of an e-commerce
application. Still using mocks for the API call and/or responses, but instead of
just checking the function, we're checking that the component is operating as it
should when things go right, and when they go wrong.

These tests may be a bit more involved than Unit tests, but they provide a lot
more value. Since they test how things work in concert with each other, somewhat
in isolation from other parts of the app, we're able to determine that our
changes aren't affecting whole sections of our code. Integration tests are also
a bit easier to reason about, so they might end up being easier to write than
some Unit tests.

> Integration tests provide us with the most "bang for our buck"

Testing the full application flow is where end-to-end tests come in.

### E2E

Type of test for testing full paths and user workflows of your app. To continue
with our e-commerce example, this would be the equivalent of you manually going
through the login screen, then clicking on an item to add to your cart,
navigating to your cart, and checking out from the store.

Since we're testing the whole flow in conjunction with the rest of the
application, these tests are slower. Not only to write, but also to run. They
can also be somewhat brittle tests, if we're doing a lot of refactors, or
iterative development, we might need to make a lot of changes to our end to end
tests. One strategy for this type of testing is to make sure the truly critical
paths are tested, and over time add on to the test suites, but we have to keep
in mind how long our tests run overall.

e2e testing is great for ensuring those paths are working well, but they can't
quite tell us if we made a change that completely ruined the application
visually. All of the tests that we've talked about so far either look at the
code being written, or the resulting DOM structure directly, none of them have
the ability to tell us if we've ruined the visual presentation of our
application. This is where Visual Regression Testing can help.

### Visual Regression Testing

Type of testing whereby we use an e2e tool like Cypress and take screenshots as
we go. This allows us to set a baseline upon which we can compare screenshots
from subsequent runs, and visually diff them (similar to a git diff of a text
file) and see what has changed.

This type of testing is a lot more involved, and while the actual setting
up/writing of the tests isn't complicated, the manual review required can be
time consuming. It's significantly less time consuming than having manual
testers constantly checking changes before sending them to production however.

### Security Audits

Can be done via something like `npm audit` or GitHub security checks and/or
[Dependabot](https://dependabot.com/).

### Performance Testing

- Lighthouse CLI
- React Dev Tools (Performance Pane)

## Testing tools

### React

> React Testing Library is a very light-weight solution for testing React
> components. It provides light utility functions on top of react-dom and
> react-dom/test-utils, in a way that encourages better testing practices. Its
> primary guiding principle is:
> [The more your tests resemble the way your software is used, the more confidence they can give you.](https://testing-library.com/docs/guiding-principles)

- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro)

### Cypress

> A next generation front end testing tool built for the modern web
>
> Cypress is most often compared to Selenium; however Cypress is both
> fundamentally and architecturally different. Cypress is not constrained by the
> same restrictions as Selenium.
>
> This enables you to write faster, easier and more reliable tests.

- [cypress documentation](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
- [cypress-testing-library](https://testing-library.com/docs/cypress-testing-library/intro)

### Static and Linting

- [eslint](https://eslint.org/)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
- [prettier](https://prettier.io/)
- [react-axe](https://github.com/dequelabs/react-axe)
- [husky](https://github.com/typicode/husky)
- [lint-staged](https://github.com/okonet/lint-staged)
- [npm-run-all](https://github.com/mysticatea/npm-run-all)

### a11y

- [Accessibility Insights Chrome Extension](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni)
- [Color Contrast Checker](https://coolors.co/contrast-checker/112a46-acc8e5)

### Screen Readers

- [NVDA](https://www.nvaccess.org/about-nvda/)
- [VoiceOver](https://www.apple.com/accessibility/mac/vision/)
