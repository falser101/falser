import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as n,c as l,a as t,b as i,e as a,f as o}from"./app-86d02fc7.js";const c={},p=t("blockquote",null,[t("p",null,"随便整理的一些JVM相关")],-1),m={href:"https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html",target:"_blank",rel:"noopener noreferrer"},X=o(`<h2 id="远程debug参数" tabindex="-1"><a class="header-anchor" href="#远程debug参数" aria-hidden="true">#</a> 远程debug参数：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-Xdebug</span> <span class="token parameter variable">-Xrunjdwp:transport</span><span class="token operator">=</span>dt_socket,server<span class="token operator">=</span>y,suspend<span class="token operator">=</span>n,address<span class="token operator">=</span><span class="token number">8000</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="指定虚拟机堆内存大小" tabindex="-1"><a class="header-anchor" href="#指定虚拟机堆内存大小" aria-hidden="true">#</a> 指定虚拟机堆内存大小：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-Xmx20m</span> Java Heap最大值,默认值为物理内存的1/4
<span class="token parameter variable">-Xms20m</span> Java Heap初始值,Server端JVM最好将-Xms和-Xmx设为相同值,开发测试机JVM可以保留默认值
<span class="token parameter variable">-Xmn20m</span> Java Heap 新生代大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定虚拟机栈内存大小" tabindex="-1"><a class="header-anchor" href="#指定虚拟机栈内存大小" aria-hidden="true">#</a> 指定虚拟机栈内存大小：</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-Xss20m</span> 每个线程的Stack大小,不熟悉最好保留默认值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="常见的gc日志分析工具" tabindex="-1"><a class="header-anchor" href="#常见的gc日志分析工具" aria-hidden="true">#</a> 常见的GC日志分析工具</h2><ul><li><strong>GCViewer</strong></li><li><strong>GCEasy</strong></li><li>GCLogViewer</li><li>GCHisto</li><li>Hpjmeter</li></ul><table><thead><tr><th>参数及其默认值</th><th>描述</th></tr></thead><tbody><tr><td>-XX:LargePageSizeInBytes=4m</td><td>设置用于Java堆的大页面尺寸</td></tr><tr><td>-XX:MaxHeapFreeRatio=70</td><td>GC后java堆中空闲量占的最大比例</td></tr><tr><td>-<strong>XX:MaxNewSize</strong>=size</td><td>新生成对象能占用内存的最大值</td></tr><tr><td>-<strong>XX:MaxPermSize</strong>=64m</td><td>老年代对象能占用内存的最大值</td></tr><tr><td>-<strong>XX:MinHeapFreeRatio</strong>=40</td><td>GC后java堆中空闲量占的最小比例</td></tr><tr><td>-XX:NewRatio=2</td><td>新生代内存容量与老生代内存容量的比例</td></tr><tr><td>-<strong>XX:NewSize</strong>=2.125m</td><td>新生代对象生成时占用内存的默认值</td></tr><tr><td>-XX:ReservedCodeCacheSize=32m</td><td>保留代码占用的内存容量</td></tr><tr><td>-XX:ThreadStackSize=512</td><td>设置线程栈大小，若为0则使用系统默认值</td></tr><tr><td>-XX:+UseLargePages</td><td>使用大页面内存</td></tr><tr><td>-XX:+PrintCommandLineFlags</td><td>查看命令行相关参数(包含使用的垃圾收集器)</td></tr><tr><td>jinfo -flag 相关垃圾回收器参数 进程ID</td><td>查看默认的垃圾收集器</td></tr><tr><td>-XX:+UseSerialGC</td><td>指定年轻代和老年代都使用串行收集器</td></tr><tr><td>-XX:ParallelGCThreads</td><td>限制线程数量，默认开启和cpu数据相同的线程数，cpu大于8时，其值等于 3+[5*CPU_COUNT]/8</td></tr><tr><td>-XX:+UseParallelGC</td><td>手动指定年轻代使用Parallel并行收集器执行内存回收任务（默认开启年轻代使用ParallelOld GC）</td></tr><tr><td>-XX:+UseParallelOldGC</td><td>手动指定老年代使用并行回收收集器（默认开启年轻代使用Parallel GC）</td></tr><tr><td>-XX:MaxGCPauseMillis</td><td>设置垃圾收集器最大的停顿时间（即STW时间）单位为毫秒（慎用）,默认200ms</td></tr><tr><td>-XX:GCTimeRatio</td><td>垃圾收集时间占总时间的比例（1/(N+1)）,用于衡量吞吐量的大小</td></tr><tr><td>-XX:+UseAdaptiveSizePolicy</td><td>设置Parallel Scavenge收集器具有自适应调节机制（各代比例，晋升老年代年龄会自动调整）</td></tr><tr><td>-XX:+UseConcMarkSweepGC</td><td>老年代使用CMS 收集器，年轻代使用parNew 收集器</td></tr><tr><td>-XX:CMSlnitiatingOccupanyFraction</td><td>设置堆内存使用率的阈值，一旦达到该阈值，便开始进行回收。</td></tr><tr><td>-XX:+UseCMSCompactAtFullCollection</td><td>指定执行完Full GC后对内存空间进行压缩整理，避免内存碎片的产生</td></tr><tr><td>-XX:CMSFullGCsBeforeCompaction</td><td>设置执行多少次Full GC后进行内存压缩整理</td></tr><tr><td>-XX:ParallelCMSThreads</td><td>设置CMS线程数量（默认启动(ParallelCMSThreads+3)/4）</td></tr><tr><td>-XX:G1HeapRegionSize</td><td>设置每个Region的大小。值是2的幂，范围是1MB</td></tr><tr><td>-XX:InitiatingHeapOccupancyPercent</td><td>设置触发并发GC周期的Java堆占用率阈值。超过就触发GC，默认45</td></tr><tr><td>-Xloggc:/path/to/gc.log</td><td>把gc日志放到指定目录</td></tr></tbody></table>`,9);function h(u,g){const r=e("ExternalLinkIcon"),d=e("CommentService");return n(),l("div",null,[p,t("ul",null,[t("li",null,[t("a",m,[i("Oracle的JVM官方文档"),a(r)])])]),X,a(d)])}const b=s(c,[["render",h],["__file","09.JVM相关参数.html.vue"]]);export{b as default};
