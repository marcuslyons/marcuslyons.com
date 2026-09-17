<script lang="ts">
  import SEO from "$lib/components/SEO.svelte"
  import config from "$lib/site-config"

  const {
    resume: { seo },
  } = config
</script>

<SEO {...seo} />

<div class="resume-page">
  <div class="resume">
    <div class="header">
      <h1>Marcus Lyons</h1>
      <p class="contact">
        <a href="https://marcuslyons.com">marcuslyons.com</a>
        <span class="sep">|</span>
        <a href="https://linkedin.com/in/marcuslyons">linkedin.com/in/marcuslyons</a>
        <span class="sep">|</span>
        <a href="https://github.com/marcuslyons">github.com/marcuslyons</a>
      </p>
    </div>

    <hr class="divider" />

    <h2>Summary</h2>
    <p class="summary">
      Full-stack engineer who builds the systems other engineers depend on. At
      Business Insider I took a product from engagement data to shipped service:
      competitive analysis, architecture across five repositories, then the
      implementation. I own the layer underneath it too, Terraform, Lambda, Fastly
      VCL, Kubernetes, and the CI/CD pipeline. For two years I have built AI agent
      tooling: custom skills, multi-agent orchestration, local model inference, and
      context engineering the whole team adopted. Twelve years as an Apache crew
      chief set the habit I still work by: find the root cause, document it, and
      teach the next person.
    </p>

    <h2>Technical Skills</h2>
    <p class="skills-row">
      <strong>Languages:</strong> JavaScript, TypeScript, SQL (MySQL, PostgreSQL),
      VCL, HCL, Bash
    </p>
    <p class="skills-row">
      <strong>AI Engineering:</strong> Claude Code, Codex, Cursor, MCP servers,
      Ollama (Qwen3, Gemma3), custom agent skills and extensions, multi-agent
      orchestration, context engineering (AGENTS.md), containerized agent sandboxing
    </p>
    <p class="skills-row">
      <strong>Infrastructure &amp; CI/CD:</strong> Terraform, GitHub Actions, Docker,
      Kubernetes, AWS (Lambda, API Gateway, VPC, Route53), Fastly CDN/VCL, Azure
      Functions, Cloudflare, Datadog (APM/RUM)
    </p>
    <p class="skills-row">
      <strong>Frameworks:</strong> React, Node.js, Express, Hono, SvelteKit, Svelte 5,
      Preact, Next.js, Vue 3, SCSS/CSS Modules
    </p>
    <p class="skills-row">
      <strong>Testing:</strong> Playwright, Cypress, Jest, Vitest, Node test runner
      (node:test), Storybook
    </p>
    <p class="skills-row">
      <strong>Build &amp; DX:</strong> esbuild, Webpack, Docker Compose
    </p>

    <h2>Professional Experience</h2>

    <div class="job-header">
      <span class="title">Business Insider (Insider Inc.) — Senior Software Engineer</span>
      <span class="dates">Jul 2021 – Sep 2026</span>
    </div>
    <p class="job-desc">
      Full-stack and platform engineer across Frontend, Platform, and Subscriptions,
      building and operating the rendering and subscription systems behind
      <strong>~40M monthly visits</strong>. <strong>611 merged PRs across 27
      repositories. 1,276 pull requests reviewed.</strong>
    </p>
    <ul class="bullets">
      <li>
        <span class="cat-label">Product Architecture (Poll Service):</span> Found the
        opportunity in engagement data, ran competitive analysis, and wrote the technical
        proposal for a new reader polling product spanning <strong>5 repositories</strong>.
        Designed it to degrade gracefully so a service outage can never break article
        rendering, gated auth after answer selection to capture registrations without
        suppressing participation, enforced double-vote prevention at the database, and
        split public and admin traffic across two API Gateways. Led implementation through
        launch.
      </li>
      <li>
        <span class="cat-label">Infrastructure as Code:</span> Built
        <strong>poll-service</strong> from scratch on Terraform: Lambda, API Gateway, VPC,
        and Fastly VCL edge config. Led the Airtable to self-hosted
        <strong>NocoDB (FauxTable)</strong> pivot end to end: RDS, Redis, Kubernetes, and
        an Express wrapper. Ran both on <strong>EKS with Flux GitOps</strong>, with
        horizontal pod autoscaling, liveness probes, and tuned resource requests. Owned
        them through their full lifecycle, including on-call.
      </li>
      <li>
        <span class="cat-label">AI Tooling &amp; Agent Enablement:</span> Member of the
        <strong>AI Council</strong> setting agent standards and adoption practice for
        engineering. Found Claude Code, Codex, and Cursor too heavy on system-prompt
        overhead for long multi-repo sessions, so I built on a minimal harness instead:
        <strong>13 skills, 2 extensions, 4 packages</strong>, and a persistent
        cross-session context system. Authored <strong>22 AGENTS.md files</strong> across
        org repos, making context engineering a team practice. Contributed skills and
        reviews to the shared <strong>ai-tools</strong> repo, and mentored engineers on
        prompt structure, context design, and when an agent is the wrong tool.
      </li>
      <li>
        <span class="cat-label">CI/CD &amp; Build Pipeline:</span> Owned the
        <strong>Jenkins to GitHub Actions</strong> migration for deploys. Moved CI to
        <strong>GitHub Large Runners</strong>, cutting <strong>$23k–$41k/year</strong> in
        infrastructure cost and <strong>3–5 minutes per pipeline run</strong>. Added build
        caching, hardened release workflows, and cut <strong>Docker image size 35%</strong>
        by moving services to <strong>distroless base images</strong>.
      </li>
      <li>
        <span class="cat-label">Developer Experience:</span> Cut the Fenrir dev build
        <strong>62%, from 37.4s to 14.3s</strong>:
        <strong>7,600 engineer-hours a year</strong> across 50 developers,
        <strong>$380k+</strong> at conservative rates. Benchmarked 8 build configurations
        against 2 hardware targets to get there. The babel-loader to esbuild-loader swap
        took 10.6s off; the same data justified Engineering's
        <strong>M-series laptop requisition</strong> ($125k–$175k, break-even under 90
        days) for the rest. Also fixed an SCSS build bug that cut
        <strong>hot-reload time 80%</strong>.
      </li>
      <li>
        <span class="cat-label">Production Traffic Migration:</span> Co-architected the
        move of Business Insider and Markets Insider
        <strong>from one Kubernetes cluster to another with zero downtime</strong>. I
        designed the cutover path: a staged Fastly rollout at
        <strong>5%, 10%, 25%, 50%, 75%, then full</strong>, run at peak traffic. Found the
        failure modes at the CDN layer before they found us, including ALB cookie stripping
        and auth redirect breakage, so readers never saw the switch.
      </li>
      <li>
        <span class="cat-label">Technical Leadership:</span> Drove the cleanup of the
        <strong>40+ function post transform pipeline</strong>, the path every article on
        the site renders through. Ran the org-wide <strong>master to main</strong>
        migration: research, ticketing, cross-team communication, delivery. Support lead
        for the <strong>Ceros migration</strong> (801 articles ahead of contract expiry)
        and the Webflow integration, which I solved with zero new infrastructure.
      </li>
      <li>
        <span class="cat-label">Mentorship &amp; Reach:</span>
        <strong>1,276 code reviews</strong>, 236 in the last year alone across 28
        teammates and 7 repositories, the widest repo footprint on the team and second
        most reviews org-wide. DevOps Bridge member sharing infrastructure knowledge
        across teams. Wrote the PTO runbooks, deploy docs, and coverage documents the team
        still uses.
      </li>
      <li>
        <span class="cat-label">Engineering Analysis:</span> Built
        <strong>eng-automations</strong> (Node.js, standard library only) to measure
        engineering health: corrective-work analysis across 1,000+ PRs, code hotspot
        detection, and defect classification joined against Jira issue types. Showed that
        Bug ticket counts understate real defect load by <strong>1.7x</strong> and that
        <strong>71% of fixes ship with no test</strong>.
      </li>
    </ul>

    <div class="job-header">
      <span class="title">Lyons Den Development, LLC — Full Stack Developer (Freelance)</span>
      <span class="dates">Nov 2016 – Present</span>
    </div>
    <p class="job-desc">
      End-to-end website, web application, and mobile app development for clients.
      Eagle, Idaho.
    </p>

    <div class="job-header">
      <span class="title">Healthwise — Software Engineer</span>
      <span class="dates">Jan 2020 – Jun 2021</span>
    </div>
    <p class="job-desc">
      Patient education content delivered to hospital and payer systems under a 99.999%
      uptime SLA. Boise, Idaho.
    </p>
    <ul class="bullets">
      <li>
        Led <strong>Healthwise-UI</strong>, the shared React component library and design
        system every product team built on. Owned the component API, documentation, and
        release process.
      </li>
      <li>
        Architected <strong>MyHealthwise</strong>, a centralized authentication platform on
        <strong>Okta</strong> with a serverless Node.js backend on
        <strong>Azure Functions</strong>. It replaced per-application login with one
        identity layer.
      </li>
      <li>
        Migrated three applications, two UIs and an API, onto the new authentication and
        authorization flow without breaking existing customer sessions.
      </li>
    </ul>

    <div class="job-header">
      <span class="title">Healthwise — Software Development Engineer in Test</span>
      <span class="dates">Jan 2019 – Jan 2020</span>
    </div>
    <ul class="bullets">
      <li>
        Introduced <strong>Cypress</strong> end-to-end testing and Docker-based test
        environments, cutting the manual regression load on every release.
      </li>
      <li>
        Brought component testing to the front-end teams with <strong>Jest</strong> and
        react-testing-library, then coached engineers on writing tests that exercise the
        product the way users do.
      </li>
      <li>Promoted to Software Engineer after one year.</li>
    </ul>

    <div class="job-header">
      <span class="title">Freeman Company — Software Developer / Associate Software Developer</span>
      <span class="dates">Mar 2016 – Jan 2019</span>
    </div>
    <p class="job-desc">
      Live event production and trade show services. Promoted from Associate in Nov 2017.
      Eagle, Idaho.
    </p>
    <ul class="bullets">
      <li>
        <span class="cat-label">Quant:</span> Built the live event data streaming and
        analytics product. This was the project that brought <strong>React and
        Node.js</strong> into the engineering org, and I led that adoption across teams.
      </li>
      <li>
        <span class="cat-label">Fuzion:</span> Built backend microservices for Fuzion,
        Freeman's open event-technology platform, launched publicly in Oct 2017. Fuzion
        gave disparate vendor systems a common language and fed one warehouse, at
        <strong>~20 integrations and growing</strong> when I left. I built the social media
        service inside it, aggregating event activity across Facebook, Twitter, and
        Instagram.
      </li>
      <li>
        Introduced <strong>Docker</strong> to the developer setup, cutting new-laptop
        provisioning time by <strong>6 hours</strong>. Led the API documentation effort
        across the company's applications and introduced UI testing practices.
      </li>
      <li>Mentored junior developers through recurring pairing sessions and demo events.</li>
    </ul>

    <div class="job-header">
      <span class="title">TSheets — Tier II Technical Support</span>
      <span class="dates">Mar 2015 – Mar 2016</span>
    </div>
    <p class="job-desc">
      Subject matter expert for the public API and mobile apps. Point of contact for
      customers building integrations.
    </p>

    <div class="job-header">
      <span class="title">Idaho Army National Guard — AH-64D Crew Chief</span>
      <span class="dates">Jun 2007 – Jul 2019</span>
    </div>
    <p class="job-desc">
      Apache helicopter crew chief at Gowen Field, Boise. Subsystem diagnostics,
      inspections, maintenance records, and aircrew duties. Trained and guided junior crew
      members.
    </p>

    <h2>Selected Projects</h2>
    <ul class="bullets">
      <li>
        <strong>pi-webhost</strong> — Self-hosted web UI for a coding agent. Hono + React,
        WebSocket streaming, concurrent server-owned sessions, OAuth. Gives multi-device
        access to persistent agent instances.
      </li>
      <li>
        <strong>Hermes automation layer</strong> — 11 scheduled agent jobs handling PR
        monitoring, code review, and issue triage with Discord delivery and delegated
        subagents.
      </li>
      <li>
        <strong>Local inference stack</strong> — Ollama running Qwen3 (8B/27B) and Gemma3
        12B on a dedicated Mac Mini for subagent routing and code review triage, with no
        cloud dependency.
      </li>
      <li>
        <strong>Agent sandboxing RFC</strong> — Docker-isolated execution environments that
        separate agent filesystem access from the host, plus a token-reduction study across
        Claude Code, Copilot, and Codex.
      </li>
      <li>
        <strong>Multi-agent orchestration</strong> — Parallel agent instances over git
        worktrees, with a documented framework for when parallelism beats sequential
        execution.
      </li>
      <li>
        <strong>SvelteKit rendering POC</strong> — Feasibility spike replacing a production
        Express and Handlebars news renderer with SvelteKit SSR: 112 tests, 26ms TTFB,
        multi-site config, Docker multi-stage build.
      </li>
    </ul>

    <h2>Patents</h2>
    <p class="job-desc">
      <strong>Systems and Processes for Space Management of Three Dimensional
      Containers</strong> — US 11,001,438, issued May 2020
    </p>

    <h2>Education</h2>
    <ul class="bullets">
      <li>B.S. Software Engineering — Western Governors University</li>
      <li>B.S. Health Science — Boise State University</li>
    </ul>
  </div>
</div>

<style>
  .resume-page {
    width: 100%;
    max-width: 52rem;
    margin: 0 auto;
  }

  .resume {
    background: rgba(255, 255, 255, 0.65);
    border-radius: 6px;
    padding: 2rem 2.5rem;
    box-shadow: 2px 2px 6px rgb(255 255 255 / 25%);
  }

  /* ── Mono for headings, company names, and titles ── */
  .header h1,
  .header .contact,
  h2,
  .job-header .title,
  .job-header .dates {
    font-family: var(--font-mono);
  }

  /* ── Header ── */
  .header {
    text-align: center;
    margin-bottom: 0.6rem;
  }

  .header h1 {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-bottom: 0.2rem;
  }

  .header .contact {
    font-size: 0.9rem;
    color: var(--color-text-light);
  }

  .header .contact a {
    color: var(--color-text-light);
    text-decoration: none;
  }

  .header .contact a:hover {
    text-decoration: underline;
    color: var(--color-theme-1);
  }

  .header .contact span,
  .header .contact a {
    white-space: nowrap;
  }

  .sep {
    margin: 0 0.4rem;
  }

  .divider {
    border: none;
    border-top: 1px solid #222;
    margin: 0.5rem 0 0.4rem;
  }

  /* ── Section headings ── */
  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    border-bottom: 1px solid #bbb;
    padding-bottom: 0.15rem;
    margin-top: 0.6rem;
    margin-bottom: 0.35rem;
    text-align: left;
  }

  /* ── Job titles ── */
  .job-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 0.45rem;
    margin-bottom: 0.1rem;
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .job-header .title {
    font-weight: 700;
    font-size: 1rem;
    font-family: var(--font-mono);
  }

  .job-header .dates {
    font-size: 0.9rem;
    white-space: nowrap;
    color: var(--color-text-light);
    font-family: var(--font-mono);
  }

  /* ── Body text ── */
  .summary,
  .job-desc,
  .skills-row {
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
    line-height: 1.45;
  }

  .skills-row {
    margin-bottom: 0.15rem;
  }

  .skills-row strong {
    font-weight: 700;
  }

  /* ── Bullet lists ── */
  ul.bullets {
    list-style: none;
    padding: 0;
    margin: 0.1rem 0 0.2rem;
  }

  ul.bullets li {
    padding-left: 1.2rem;
    text-indent: -1.2rem;
    margin-bottom: 0.15rem;
    font-size: 0.95rem;
    line-height: 1.45;
  }

  ul.bullets li::before {
    content: "•";
    display: inline-block;
    width: 1.2rem;
    text-indent: 0;
  }

  ul.bullets li strong {
    font-weight: 700;
  }

  .cat-label {
    font-weight: 700;
  }

  @media (max-width: 640px) {
    .resume {
      padding: 1.25rem 1rem;
    }

    .job-header {
      flex-direction: column;
    }

    .header h1 {
      font-size: 1.6rem;
    }
  }

  @media print {
    .resume-page {
      max-width: 100%;
    }

    .resume {
      background: none;
      box-shadow: none;
      padding: 0;
    }
  }
</style>
