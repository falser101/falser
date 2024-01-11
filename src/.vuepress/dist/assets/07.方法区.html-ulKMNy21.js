const e=JSON.parse('{"key":"v-40d1f88e","path":"/posts/java/2021/07.%E6%96%B9%E6%B3%95%E5%8C%BA.html","title":"方法区","lang":"zh-CN","frontmatter":{"title":"方法区","date":"2021-02-15T00:00:00.000Z","tag":["jvm"],"category":["java"],"description":"方法区概述 栈、堆、方法区的交互关系","head":[["meta",{"property":"og:url","content":"https://falser101.github.io/falser/posts/java/2021/07.%E6%96%B9%E6%B3%95%E5%8C%BA.html"}],["meta",{"property":"og:site_name","content":"飞哥与小佛"}],["meta",{"property":"og:title","content":"方法区"}],["meta",{"property":"og:description","content":"方法区概述 栈、堆、方法区的交互关系"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-11T08:33:54.000Z"}],["meta",{"property":"article:author","content":"falser"}],["meta",{"property":"article:tag","content":"jvm"}],["meta",{"property":"article:published_time","content":"2021-02-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-11T08:33:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"方法区\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-11T08:33:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"falser\\",\\"url\\":\\"https://github.com/falser101\\"}]}"]]},"headers":[{"level":2,"title":"栈、堆、方法区的交互关系","slug":"栈、堆、方法区的交互关系","link":"#栈、堆、方法区的交互关系","children":[]},{"level":2,"title":"方法区的理解","slug":"方法区的理解","link":"#方法区的理解","children":[{"level":3,"title":"方法区在那儿？","slug":"方法区在那儿","link":"#方法区在那儿","children":[]},{"level":3,"title":"方法区的基本理解","slug":"方法区的基本理解","link":"#方法区的基本理解","children":[]}]},{"level":2,"title":"设置方法区大小与OOM","slug":"设置方法区大小与oom","link":"#设置方法区大小与oom","children":[{"level":3,"title":"JDK7","slug":"jdk7","link":"#jdk7","children":[]},{"level":3,"title":"JDK8","slug":"jdk8","link":"#jdk8","children":[]}]},{"level":2,"title":"方法区的内部结构","slug":"方法区的内部结构","link":"#方法区的内部结构","children":[{"level":3,"title":"方法区存储什么","slug":"方法区存储什么","link":"#方法区存储什么","children":[]},{"level":3,"title":"运行时常量池","slug":"运行时常量池","link":"#运行时常量池","children":[]}]},{"level":2,"title":"方法区的演进细节","slug":"方法区的演进细节","link":"#方法区的演进细节","children":[]},{"level":2,"title":"永久代为什么被元空间代替","slug":"永久代为什么被元空间代替","link":"#永久代为什么被元空间代替","children":[]},{"level":2,"title":"方法区的垃圾回收","slug":"方法区的垃圾回收","link":"#方法区的垃圾回收","children":[{"level":3,"title":"StringTable为什么要调整？","slug":"stringtable为什么要调整","link":"#stringtable为什么要调整","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1700633681000,"updatedTime":1704962034000,"contributors":[{"name":"T2816","email":"zhangjf@tongtech.com","commits":2}]},"readingTime":{"minutes":6.3,"words":1889},"filePathRelative":"posts/java/2021/07.方法区.md","localizedDate":"2021年2月15日","excerpt":"<blockquote>\\n<p>方法区概述</p>\\n</blockquote>\\n<h2> 栈、堆、方法区的交互关系</h2>\\n<p><img src=\\"https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/24/kuangstudyba84ddc9-7949-4bf4-bc0d-3a0a4e9c44ea.png\\" alt=\\"\\" loading=\\"lazy\\">\\n<img src=\\"https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/25/kuangstudyc62aa589-9465-4866-bf1b-c2c8fd897974.jpg\\" alt=\\"\\" loading=\\"lazy\\">\\n<img src=\\"https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/25/kuangstudyb8a39844-e561-4e07-bff9-7170d0e45538.jpg\\" alt=\\"\\" loading=\\"lazy\\"></p>","autoDesc":true}');export{e as data};
