import{a as o,t as n}from"./disclose-version.BDaRFh6M.js";import"./legacy.G1r-cTWw.js";import{n as r}from"./runtime.D22fzDCM.js";const a={slug:"how-to-set-up-remote-port-forwarding-with-ssh-on-macos",title:"How to set up Remote Port Forwarding with SSH on macOS",excerpt:"Opening doors one port at a time",date:"2022-04-08T00:00:00.000Z",published:!0,keywords:["ssh","port forwarding","remote development"],previewText:`Sometimes we want to run a process, or container, on another machine but access
it locally.

Remote Port Forwarding, or tunneling, can help with precisely this. It allows us
to start a process on another machine but bind a port on that remote to one...`,previewHtml:"<p>Sometimes we want to run a process, or container, on another machine but access it locally.</p> <p>Remote Port Forwarding, or tunneling, can help with precisely this. It allows us to start a process on another machine but bind a port on that remote to one o...</p>"},{slug:c,title:h,excerpt:m,date:u,published:d,keywords:w,previewText:b,previewHtml:g}=a;var s=n(`<p>Sometimes we want to run a process, or container, on another machine but access
it locally.</p> <p>Remote Port Forwarding, or tunneling, can help with precisely this. It allows us
to start a process on another machine but bind a port on that remote to one on
our computer. We could run a Fastify server and bind our local port to a remote
port. We would then be able to access that server on our local port.</p> <p>Unfortunately, this isn’t something super commonly taught these days.</p> <p>To set this up, we need to run:</p> <blockquote><p><code>ssh -R 3000:3000 user@host</code></p></blockquote> <p>What’s happening in the previous command is:</p> <ul><li>Connecting to a remote machine at user@host <ul><li>User being the username</li> <li>Host being the remote machines IP (local or remote network)</li></ul></li> <li>-R to state Remote forwarding</li> <li>3000:3000 is binding port 3000 on the local machine to port 3000 on the remote <local:remote></local:remote></li></ul> <p>With the increased bandwidth and internet speeds offered in many areas. The need
to have a beast of a local machine is starting to lessen. This opens the door to
building apps and sites on iPads, and other devices. Typically considered
underpowered and not set up for actual development.</p> <p>With this tool, you’ll be able to use another machine to run your apps, servers,
and projects. Freeing up local resources for all the Chrome tabs your system can
handle.</p>`,1);function y(e){var t=s();r(16),o(e,t)}export{y as default,a as metadata};
