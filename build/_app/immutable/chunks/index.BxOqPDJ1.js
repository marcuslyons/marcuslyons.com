import{a as k,t as d}from"./disclose-version.BDaRFh6M.js";import"./legacy.G1r-cTWw.js";import{m as s,i as u,k as e,l as o}from"./runtime.D22fzDCM.js";import{h as t}from"./html.C8Y-7Prl.js";const f={title:"Useful Docker Commands",slug:"useful-docker-commands",excerpt:"Every now and then you just need a good reference",date:"2018-03-21T00:00:00.000Z",keywords:["docker","docker-compose","containers","containerization","cloud","vm","redis","microservices","developer","dev","development","software","convenience","article","blog post","blog"],previewText:`Every now and then you just need a good reference

Docker Machine`,previewHtml:"<p>Every now and then you just need a good reference</p> <h2>Docker Machine</h2>"},{title:w,slug:y,excerpt:S,date:x,keywords:C,previewText:I,previewHtml:_}=f;var h=d(`<p>Every now and then you just need a good reference</p> <h2 id="docker-machine"><a aria-hidden="true" tabindex="-1" href="#docker-machine"><span class="icon icon-link"></span></a>Docker Machine</h2> <p>docker-machine commands aren’t needed if using the GUI toolkit, but where’s the
fun in that?</p> <pre class="language-shell"><!></pre> <h2 id="docker"><a aria-hidden="true" tabindex="-1" href="#docker"><span class="icon icon-link"></span></a>Docker</h2> <pre class="language-shell"><!></pre> <h2 id="docker-compose"><a aria-hidden="true" tabindex="-1" href="#docker-compose"><span class="icon icon-link"></span></a>Docker Compose</h2> <pre class="language-shell"><!></pre>`,1);function M(r){var p=h(),a=s(u(p),6),l=e(a);t(l,()=>`<code class="language-shell">  <span class="token comment"># Start VM</span>
  docker-machine start

  <span class="token comment"># Stop VM</span>
  docker-machine stop

  <span class="token comment"># Display Docker client setup commands</span>
  docker-machine <span class="token function">env</span></code>`),o(a);var n=s(a,4),i=e(n);t(i,()=>`<code class="language-shell">  <span class="token comment"># List Docker CLI commands</span>
  <span class="token function">docker</span>

  <span class="token comment"># Get help on a specific command</span>
  <span class="token function">docker</span> <span class="token operator">&lt;</span>command<span class="token operator">></span> <span class="token parameter variable">--help</span>

  <span class="token comment"># Pull image from Docker Hub</span>
  <span class="token function">docker</span> pull <span class="token operator">&lt;</span>Name of Image<span class="token operator">></span>

  <span class="token comment"># Show all images</span>
  <span class="token function">docker</span> images

  <span class="token comment"># Remove specific images</span>
  <span class="token function">docker</span> rmi <span class="token operator">&lt;</span>ImageID<span class="token operator">></span>

  <span class="token comment"># Show all containers based on Docker env config</span>
  <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

  <span class="token comment"># Remove specific container</span>
  <span class="token function">docker</span> <span class="token function">rm</span> <span class="token operator">&lt;</span>ContainerID<span class="token operator">></span>

  <span class="token comment"># Remove all containers</span>
  <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>

  <span class="token comment"># Formatted list of containers</span>
  <span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">--format</span> <span class="token string">'table &#123;&#123;.Names&#125;&#125;&#92;t&#123;&#123;.Image&#125;&#125;&#92;t&#123;&#123;.Status&#125;&#125;'</span>

  <span class="token comment"># Run a container in daemon mode bound to specified port</span>
  <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>Container Name<span class="token operator">></span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>External Port:Container Port<span class="token operator">></span> <span class="token operator">&lt;</span>Your Image<span class="token operator">></span>

  <span class="token comment"># Build an image from a Dockerfile located in the current directory</span>
  <span class="token function">docker</span> build <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>Your Dockerfile<span class="token operator">></span> <span class="token parameter variable">-t</span> <span class="token operator">&lt;</span>Tag Name<span class="token operator">></span> <span class="token builtin class-name">.</span>

  <span class="token comment"># Login using your Docker Hub credentials</span>
  <span class="token function">docker</span> login

  <span class="token comment"># Push an image to Docker hub</span>
  <span class="token function">docker</span> push <span class="token operator">&lt;</span>Your Image Name<span class="token operator">></span></code>`),o(n);var c=s(n,4),m=e(c);t(m,()=>`<code class="language-shell">  <span class="token comment"># Build images based on docker-compose</span>
  <span class="token function">docker-compose</span> build

  <span class="token comment"># Start in daemon mode</span>
  <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

  <span class="token comment"># Show logs from containers | useful in daemon mode</span>
  <span class="token function">docker-compose</span> logs

  <span class="token comment"># Start containers based on docker-compose.yml</span>
  <span class="token function">docker-compose</span> up

  <span class="token comment"># Rebuild and deploy just the container that needs updating</span>
  <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span> --no-deps <span class="token parameter variable">--build</span> <span class="token operator">&lt;</span>service_name<span class="token operator">></span>

  <span class="token comment"># Start containers using docker-compose file in another directory</span>
  <span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>Filepath<span class="token operator">></span> up

  <span class="token comment"># Stop containers but dont remove them</span>
  <span class="token function">docker-compose</span> stop

  <span class="token comment"># Stop and remove containers | CTRL+C/CMD+C can also be used but this is safer</span>
  <span class="token function">docker-compose</span> down</code>`),o(c),k(r,p)}export{M as default,f as metadata};
