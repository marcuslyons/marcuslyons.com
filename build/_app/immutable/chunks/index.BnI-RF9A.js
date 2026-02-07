import{a as i,t as u}from"./disclose-version.BDaRFh6M.js";import"./legacy.G1r-cTWw.js";import{m as t,i as k,k as p,l as o}from"./runtime.D22fzDCM.js";import{h as e}from"./html.C8Y-7Prl.js";const g={slug:"gatsby-double-images",title:"Double Image While Using gatsby-image and MDX",excerpt:"Having problems with duplicate images in Gatsby?",date:"2020-01-10T00:00:00.000Z",published:!0,keywords:["javascript","gatsby","mdx","troubleshooting"],previewText:`If you run into the issue of having both the blurred image and original image
present when using Gatsby and MDX, it’s likely that your config just needs a
little TLC.

Adding Gatsby-remark-images to the plugin array for gatsby-plugin-mdx will...`,previewHtml:"<p>If you run into the issue of having both the blurred image and original image present when using Gatsby and MDX, it’s likely that your config just needs a little TLC.</p> <p>Adding Gatsby-remark-images to the plugin array for gatsby-plugin-mdx will fix it:</p>"},{slug:f,title:v,excerpt:x,date:w,published:j,keywords:G,previewText:_,previewHtml:I}=g;var d=u(`<p>If you run into the issue of having both the blurred image and original image
present when using Gatsby and MDX, it’s likely that your config just needs a
little TLC.</p> <p>Adding Gatsby-remark-images to the plugin array for gatsby-plugin-mdx will fix
it:</p> <pre class="language-json"><!></pre> <p><strong>However</strong> you might still have an issue. This was done already with the Gatsby
blog theme, and I still had it. I found <a href="https://github.com/gatsbyjs/gatsby/issues/15486" rel="nofollow" target="_blank">this issue</a> that recommended
putting Gatsby-remark-images as a plugin on its own in the config, repeating
that it’s being used.:</p> <pre class="language-json"><!></pre>`,1);function T(r){var a=d(),s=t(k(a),4),l=p(s);e(l,()=>`<code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"resolve"</span><span class="token operator">:</span> &#96;gatsby-plugin-mdx&#96;<span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".mdx"</span><span class="token punctuation">,</span> <span class="token string">".md"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"defaultLayouts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token property">"default"</span><span class="token operator">:</span> path.join(__dirname<span class="token punctuation">,</span> <span class="token string">"./src/templates/markdown-page.js"</span>)
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token property">"gatsbyRemarkPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token property">"resolve"</span><span class="token operator">:</span> &#96;gatsby-remark-images&#96;<span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token property">"maxWidth"</span><span class="token operator">:</span> <span class="token number">860</span><span class="token punctuation">,</span>
          <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"none"</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),o(s);var n=t(s,4),c=p(n);e(c,()=>`<code class="language-json">(<span class="token punctuation">&#123;</span>
  <span class="token property">"resolve"</span><span class="token operator">:</span> &#96;gatsby-plugin-mdx&#96;<span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">".mdx"</span><span class="token punctuation">,</span> <span class="token string">".md"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">"defaultLayouts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
      <span class="token property">"default"</span><span class="token operator">:</span> path.join(__dirname<span class="token punctuation">,</span> <span class="token string">"./src/templates/markdown-page.js"</span>)
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
    <span class="token property">"gatsbyRemarkPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">&#123;</span>
        <span class="token property">"resolve"</span><span class="token operator">:</span> &#96;gatsby-remark-images&#96;<span class="token punctuation">,</span>
        <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          <span class="token property">"maxWidth"</span><span class="token operator">:</span> <span class="token number">860</span><span class="token punctuation">,</span>
          <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"none"</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
<span class="token punctuation">&#123;</span>
  <span class="token property">"resolve"</span><span class="token operator">:</span> &#96;gatsby-remark-images&#96;<span class="token punctuation">,</span>
  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"maxWidth"</span><span class="token operator">:</span> <span class="token number">860</span><span class="token punctuation">,</span>
    <span class="token property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"none"</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>)</code>`),o(n),i(r,a)}export{T as default,g as metadata};
