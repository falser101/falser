import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,f as t}from"./app-00ghbWHH.js";const d={},i=t(`<blockquote><p>如何在Sed命令中使用环境变量 https://cn.linux-console.net/?p=15424</p></blockquote><p>有一个test.conf文件内容如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>key=value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们执行sed命令进行普通字符串的替换，可以看到能成功的替换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@k8s-node1 conf]# sed -i &quot;s/^key=.*/key=1/g&quot; test.conf
[root@k8s-node1 conf]# cat test.conf
key=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再创建一个test.sh脚本在sed命令中使用环境变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
MY_VALUE=/home/test
sed -i &#39;s/^key=.*/key=$MY_VALUE/g&#39; test.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>chmod +x test.sh
./test.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后会发现报错，这是因为我们的环境变量中有/会干扰“s”命令 sed：-e 表达式 #1，字符 23：未终止的“s”命令</p><p>可以使用其他字符作为s命令的分隔符</p><p>我们修改test.sh脚本,使用#作为分隔符</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
MY_VALUE=/home/test
sed -i &#39;s#^key=.*#key=$MY_VALUE#g&#39; test.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时没有报错，但是替换的内容不正确，$MY_VALUE被当成了普通字符串进行替换了</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@k8s-node1 conf]# cat test.conf
key=$MY_VALUE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再次修改test.sh,将单引号修改为双引号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/sh
MY_VALUE=/home/test
sed -i &quot;s#^key=.*#key=$MY_VALUE#g&quot; test.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次执行脚本,可以看到成功用环境变量替换了文件中的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[root@k8s-node1 conf]# ./test.sh
[root@k8s-node1 conf]# cat test.conf
key=/home/test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),a=[i];function l(c,r){return s(),n("div",null,a)}const u=e(d,[["render",l],["__file","02.sed中使用环境变量.html.vue"]]);export{u as default};
