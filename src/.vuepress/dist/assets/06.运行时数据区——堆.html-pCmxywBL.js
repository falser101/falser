const e=JSON.parse('{"key":"v-052604a2","path":"/posts/java/2021/06.%E8%BF%90%E8%A1%8C%E6%97%B6%E6%95%B0%E6%8D%AE%E5%8C%BA%E2%80%94%E2%80%94%E5%A0%86.html","title":"运行时数据区——堆","lang":"zh-CN","frontmatter":{"title":"运行时数据区——堆","date":"2021-02-14T00:00:00.000Z","headerDepth":3,"tag":["jvm"],"category":["java"],"description":"1. 堆的核心概述 一个JVM实例只存在一个堆内存，堆也是Java内存管理的核心区域。 Java 堆区在JVM启动的时候即被创建，其空间大小也就确定了。是JVM管理的最大一块内存空间。 堆内存的大小是可以调节的。 《Java虚拟机规范》规定，堆可以处于物理上不连续的内存空间中，但在逻辑上它应该被视为连续的。 所有的线程共享Java堆，在这里还可以划分线程私有的缓冲区(Thread Local Allocation Buffer, TLAB) 。 《Java虛拟机规范》中对Java堆的描述是:所有的对象实例以及数组都应当在运行时分配在堆上。(The heap is the run-time data area from which memory for all cla3s instances and arrays is allocated ) 我要说的是: “几乎”所有的对象实例都在这里分配内存。一从实际使用角度看的。 数组和对象可能永远不会存储在栈上，因为栈帧中保存引用，这个引用指向对象或者数组在堆中的位置。 在方法结束后，堆中的对象不会马上被移除，仅仅在垃圾收集的时候才会被移除。 堆，是GC ( Garbage Collection， 垃圾收集器**)执行垃圾回收的重点区域**。","head":[["meta",{"property":"og:url","content":"https://falser101.github.io/falser/posts/java/2021/06.%E8%BF%90%E8%A1%8C%E6%97%B6%E6%95%B0%E6%8D%AE%E5%8C%BA%E2%80%94%E2%80%94%E5%A0%86.html"}],["meta",{"property":"og:site_name","content":"飞哥与小佛"}],["meta",{"property":"og:title","content":"运行时数据区——堆"}],["meta",{"property":"og:description","content":"1. 堆的核心概述 一个JVM实例只存在一个堆内存，堆也是Java内存管理的核心区域。 Java 堆区在JVM启动的时候即被创建，其空间大小也就确定了。是JVM管理的最大一块内存空间。 堆内存的大小是可以调节的。 《Java虚拟机规范》规定，堆可以处于物理上不连续的内存空间中，但在逻辑上它应该被视为连续的。 所有的线程共享Java堆，在这里还可以划分线程私有的缓冲区(Thread Local Allocation Buffer, TLAB) 。 《Java虛拟机规范》中对Java堆的描述是:所有的对象实例以及数组都应当在运行时分配在堆上。(The heap is the run-time data area from which memory for all cla3s instances and arrays is allocated ) 我要说的是: “几乎”所有的对象实例都在这里分配内存。一从实际使用角度看的。 数组和对象可能永远不会存储在栈上，因为栈帧中保存引用，这个引用指向对象或者数组在堆中的位置。 在方法结束后，堆中的对象不会马上被移除，仅仅在垃圾收集的时候才会被移除。 堆，是GC ( Garbage Collection， 垃圾收集器**)执行垃圾回收的重点区域**。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-11T08:33:54.000Z"}],["meta",{"property":"article:author","content":"falser"}],["meta",{"property":"article:tag","content":"jvm"}],["meta",{"property":"article:published_time","content":"2021-02-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-11T08:33:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"运行时数据区——堆\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-02-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-11T08:33:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"falser\\",\\"url\\":\\"https://github.com/falser101\\"}]}"]]},"headers":[{"level":1,"title":"1. 堆的核心概述","slug":"_1-堆的核心概述","link":"#_1-堆的核心概述","children":[{"level":2,"title":"内存细分","slug":"内存细分","link":"#内存细分","children":[]}]},{"level":1,"title":"2. 设置堆内存大小与OOM","slug":"_2-设置堆内存大小与oom","link":"#_2-设置堆内存大小与oom","children":[]},{"level":1,"title":"3. 年轻代与老年代","slug":"_3-年轻代与老年代","link":"#_3-年轻代与老年代","children":[{"level":2,"title":"存储在JVM中的Java对象可以被划分为两类：","slug":"存储在jvm中的java对象可以被划分为两类","link":"#存储在jvm中的java对象可以被划分为两类","children":[]},{"level":2,"title":"配置新生代与老年代在堆结构的占比(默认1:2)。","slug":"配置新生代与老年代在堆结构的占比-默认1-2-。","link":"#配置新生代与老年代在堆结构的占比-默认1-2-。","children":[]}]},{"level":1,"title":"4. 图解对象分配过程","slug":"_4-图解对象分配过程","link":"#_4-图解对象分配过程","children":[{"level":2,"title":"总结:","slug":"总结","link":"#总结","children":[]}]},{"level":1,"title":"5. Minor GC、Major GC、Full GC","slug":"_5-minor-gc、major-gc、full-gc","link":"#_5-minor-gc、major-gc、full-gc","children":[{"level":2,"title":"最简单的分代式GC策略的触发条件","slug":"最简单的分代式gc策略的触发条件","link":"#最简单的分代式gc策略的触发条件","children":[]}]},{"level":1,"title":"6. 堆空间分代思想","slug":"_6-堆空间分代思想","link":"#_6-堆空间分代思想","children":[]},{"level":1,"title":"7. 内存分配策略","slug":"_7-内存分配策略","link":"#_7-内存分配策略","children":[]},{"level":1,"title":"8. 为对象分配内存: TLAB","slug":"_8-为对象分配内存-tlab","link":"#_8-为对象分配内存-tlab","children":[]},{"level":1,"title":"9. 小结堆空间的参数设置","slug":"_9-小结堆空间的参数设置","link":"#_9-小结堆空间的参数设置","children":[]},{"level":1,"title":"10 堆是分配对象的唯一选择吗","slug":"_10-堆是分配对象的唯一选择吗","link":"#_10-堆是分配对象的唯一选择吗","children":[]},{"level":1,"title":"代码优化","slug":"代码优化","link":"#代码优化","children":[{"level":2,"title":"同步省略","slug":"同步省略","link":"#同步省略","children":[]},{"level":2,"title":"标量替换","slug":"标量替换","link":"#标量替换","children":[]}]},{"level":1,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1700633681000,"updatedTime":1704962034000,"contributors":[{"name":"T2816","email":"zhangjf@tongtech.com","commits":2}]},"readingTime":{"minutes":15.73,"words":4718},"filePathRelative":"posts/java/2021/06.运行时数据区——堆.md","localizedDate":"2021年2月14日","excerpt":"<h1> 1. 堆的核心概述</h1>\\n<ul>\\n<li>\\n<p>一个JVM实例<strong>只存在一个堆内存</strong>，堆也是Java内存管理的核心区域。</p>\\n</li>\\n<li>\\n<p>Java 堆区在<strong>JVM启动的时候即被创建</strong>，其<strong>空间大小也就确定了</strong>。是JVM管理的最大一块内存空间。</p>\\n<ul>\\n<li>堆内存的大小是可以调节的。</li>\\n</ul>\\n</li>\\n<li>\\n<p>《Java虚拟机规范》规定，堆<strong>可以处于物理上不连续</strong>的内存空间中，但在<strong>逻辑上它应该被视为连续</strong>的。</p>\\n</li>\\n<li>\\n<p>所有的线程共享Java堆，在这里还可以划分线程私有的缓冲区(Thread Local Allocation Buffer, TLAB) 。</p>\\n</li>\\n<li>\\n<p>《Java虛拟机规范》中对Java堆的描述是:所有的对象实例以及数组都应当在运行时分配在堆上。(The heap is the run-time data area from which memory for all cla3s instances and arrays is allocated )</p>\\n<ul>\\n<li>我要说的是: “几乎”所有的对象实例都在这里分配内存。一从实际使用角度看的。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>数组和对象可能永远不会存储在栈上</strong>，因为<strong>栈帧中保存引用</strong>，这个<strong>引用指向对象或者数组在堆中的位置</strong>。</p>\\n</li>\\n<li>\\n<p>在方法结束后，堆中的对象<strong>不会马上被移除</strong>，仅仅在<strong>垃圾收集的时候才会被移除</strong>。</p>\\n</li>\\n<li>\\n<p>堆，是GC ( Garbage Collection， 垃圾收集器**)执行垃圾回收的重点区域**。</p>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
