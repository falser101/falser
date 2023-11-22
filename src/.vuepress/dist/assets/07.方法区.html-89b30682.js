import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,f as s}from"./app-86d02fc7.js";const n={},t=s('<blockquote><p>方法区概述</p></blockquote><h2 id="栈、堆、方法区的交互关系" tabindex="-1"><a class="header-anchor" href="#栈、堆、方法区的交互关系" aria-hidden="true">#</a> 栈、堆、方法区的交互关系</h2><p><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/24/kuangstudyba84ddc9-7949-4bf4-bc0d-3a0a4e9c44ea.png" alt="" loading="lazy"><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/25/kuangstudyc62aa589-9465-4866-bf1b-c2c8fd897974.jpg" alt="" loading="lazy"><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/25/kuangstudyb8a39844-e561-4e07-bff9-7170d0e45538.jpg" alt="" loading="lazy"></p><h2 id="方法区的理解" tabindex="-1"><a class="header-anchor" href="#方法区的理解" aria-hidden="true">#</a> 方法区的理解</h2><h3 id="方法区在那儿" tabindex="-1"><a class="header-anchor" href="#方法区在那儿" aria-hidden="true">#</a> 方法区在那儿？</h3><p>《Java虚拟机规范》中明确说明： “尽管所有的方法区在逻辑上是属于堆的一部分，但一些简单的实现可能不会选择去进行垃圾收集或者进行压缩。”但对于HotSpotJVM而言，方法区还有一个别名叫做Non—Heap （非堆）， 目的就是要和堆分开。 所以，<strong>方法区看作是一块独立于Java堆的内存空间</strong>。</p><h3 id="方法区的基本理解" tabindex="-1"><a class="header-anchor" href="#方法区的基本理解" aria-hidden="true">#</a> 方法区的基本理解</h3><ol><li><p>方法区（Method Area）与Java堆一样，是各个线程共享的内存区域。</p></li><li><p>方法区在JVM启动的时候被创建，并且它的实际的物理内存空间中和Java堆区一样都可以是不连续的。</p></li><li><p>方法区的大小，跟堆空间一样，可以选择固定大小或者可扩展。</p></li><li><p>方法区的大小决定了系统可以保存多少个类，如果系统定义了太多的类，导致方法区溢出，虚拟机同样会抛出内存溢出错误： java.lang .OutofMemoryError：</p></li><li><p>PermGen space或者java. lang.OutofMemoryError: Metaspace 关闭JVM就会释放这个区域的内存。 <img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/26/kuangstudy99ac8cb8-20cb-4c0a-99c6-aa373dac022d.png" alt="JDK7" title="JDK7" loading="lazy"><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/26/kuangstudy742d9bfb-6405-4ef9-b7fc-9e1e7705e073.png" alt="JDK8" title="JDK8" loading="lazy"></p></li><li><p>元空间的本质和永久代类似，都是对JVM规范中方法区的实现。不过元空间与永夕代最大的区别在于：元空间不在虚拟机设置的内存中，而是<strong>使用本地内存</strong>。</p></li><li><p>永久代、元空间二者并不只是名字变了，内部结构也调整了。</p></li><li><p>根据《Java虚拟机规范》的规定，如果方法区无法满足新的内存分配需求时，将抛出OOM异常。</p></li></ol><h2 id="设置方法区大小与oom" tabindex="-1"><a class="header-anchor" href="#设置方法区大小与oom" aria-hidden="true">#</a> 设置方法区大小与OOM</h2><h3 id="jdk7" tabindex="-1"><a class="header-anchor" href="#jdk7" aria-hidden="true">#</a> JDK7</h3><p>方法区的大小不必是固定的， jvm可以根据应用的需要动态调整。</p><ol><li>通过—xx： Permsize来设置永久代初始分配空间。默认值是20.75M</li><li>xx： MaxPermsize来设定永久代最大可分配空间。32位机器默认是64M， 64位机器模式是82M</li><li>当JVM加载的类信息容量超过了这个值，会报异常outofMemoryError ： PermGenspace 。</li></ol><h3 id="jdk8" tabindex="-1"><a class="header-anchor" href="#jdk8" aria-hidden="true">#</a> JDK8</h3><ol><li>元数据区大小可以使用参数<code>-XX：Metaspacesize</code>和<code>-XX：MaxMetaspacesize</code>指定，替代上述原有的两个参数。</li><li>默认值依赖于平台.windows下,<code>-XX:Metaspacesize</code>是21M, <code> -XX:MaxMetaspacesize</code>的值是-1，即没有限制。</li><li>与永久代不同，如果不指定大小，默认情况下，虚拟机会耗尽所有的可用系统内存。如果元数据区发生溢出，虚拟机一样会抛出异常<code>outOfMemoryError： Metaspace</code> <code>-XX：Metaspacesize</code>：<strong>设置初始的元空间大小</strong>。对于一个64位的服务器端JVM来说，其默认的—Xx： MetaspaceSize值为21MB.这就是初始的高水位线，一旦触及这个水位线， Full GC将会被触发并卸载没用的类（即这些类对应的类加载器不再存活）然后这个高水位线将会重置。新的高水位线的值取决于Gc后释放了多少元空间。如果释放的空间不足，那么在不超过MaxMetaspacesize时，适当提高该值。如果释放空间过多，则适当降低该值。</li><li>如果初始化的高水位线设置过低，上述高水位线调整情况会发生很多次。通过垃圾回收器的日志可以观察到FULL GC多次调用。为了避免频繁地GC ，建议将<code>-XX：Metaspacesize</code>设置为一个相对较高的值。</li></ol><h2 id="方法区的内部结构" tabindex="-1"><a class="header-anchor" href="#方法区的内部结构" aria-hidden="true">#</a> 方法区的内部结构</h2><figure><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/26/kuangstudy635ebea5-ee38-4e8d-900e-4925d56d2cb8.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="方法区存储什么" tabindex="-1"><a class="header-anchor" href="#方法区存储什么" aria-hidden="true">#</a> 方法区存储什么</h3><p>《深入理解Java虚拟机》书中对方法区（Method Area）存储内容描述如下： 它用于存储已被虚拟机加载的<strong>类型信息</strong>、<strong>常量</strong>、<strong>静态变量</strong>、<strong>即时编译器编译后的代码缓存</strong>等。 <img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/27/kuangstudy3f748773-3b32-4000-ab13-9728c32bc6e9.png" alt="" loading="lazy"></p><p>小结： 常量池，可以看做是一张表，虚拟机指令根据这张<strong>常量表找到要执行的类名、方法名、参数类型、字面量</strong>等类型。</p><h3 id="运行时常量池" tabindex="-1"><a class="header-anchor" href="#运行时常量池" aria-hidden="true">#</a> 运行时常量池</h3><ol><li>运行时常量池（Runtime Constant Pool）是<strong>方法区的一部分</strong>。</li><li>常量池表（Constant Pool Table）是<strong>Class文件的一部分</strong>，用于存放编译期生成的各种字面量与符号引用，这部分内容将在类加载后存放到方法区的运行时常量池中。</li><li>运行时常量池，在加载类和接口到虚拟机后，就会创建对应的运行时常量池。</li><li>JVM为每个已加载的类型（类或接口）都维护一个常量池。池中的数据项像数组项一样，是通过索引访问的。</li><li>运行时常量池中包含多种不同的常量，包括编译期就已经明确的数值字面量，也包括到运行期解析后才能够获得的方法或者字段引用。此时不再是常量池中的符号地址了，这里换为真实地址。 <ul><li>运行时常量池，相对于Class文件常量池的另一重要特征是：<strong>具备动态性</strong>。string.intern ()</li></ul></li><li>运行时常量池类似于传统编程语言中的符号表（symbol table） ，但是它所包含的数据却比符号表要更加丰富一些</li><li>当创建类或接口的运行时常量池时，如果构造运行时常量池所需的内存空间超过了方法区所能提供的最大值，则JVM会抛outofMemoryError异常。</li></ol><h2 id="方法区的演进细节" tabindex="-1"><a class="header-anchor" href="#方法区的演进细节" aria-hidden="true">#</a> 方法区的演进细节</h2><p><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/28/kuangstudyd1b2dd92-478d-4397-bd7a-f941b2f8dfeb.png" alt="" loading="lazy"><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/28/kuangstudy28b6b1ab-8c85-49d1-ba6c-fdf5d52dfdaa.png" alt="" loading="lazy"></p><h2 id="永久代为什么被元空间代替" tabindex="-1"><a class="header-anchor" href="#永久代为什么被元空间代替" aria-hidden="true">#</a> 永久代为什么被元空间代替</h2><ol><li>随着Java8的到来， HotSpot vM中再也见不到永久代了。但是这并不意味着类的元数据信息也消失了。这些数据被移到了一个与堆不相连的本地内存区域，这个区域叫做元空间( Metaspace）</li><li>由于类的元数据分配在本地内存中，元空间的最大可分配空间就是系统可用内存空间。</li><li>这项改动是很有必要的，原因有： <ul><li>永久代设置空间大小是很难确定的。 <ul><li>如果动态加载类过多，容易产生Perm区的00M。比如某个实际Web工程中，因为功能点比较多，在运行过程中，要不断动态加载很多类，经常出现致命错误。&quot;Exception in thread &#39;dubbo client x.x connector&#39; java.lang.OutOMemoryError: PermGen space而元空间和永久代之间最大的区别在于：元空间并不在虚拟机中，而是使用本地内存。因此，默认情况下，元空间的大小仅受本地内存限制。</li></ul></li><li>永久代进行调优是很困难的。</li></ul></li></ol><h2 id="方法区的垃圾回收" tabindex="-1"><a class="header-anchor" href="#方法区的垃圾回收" aria-hidden="true">#</a> 方法区的垃圾回收</h2><h3 id="stringtable为什么要调整" tabindex="-1"><a class="header-anchor" href="#stringtable为什么要调整" aria-hidden="true">#</a> StringTable为什么要调整？</h3><ol><li>jdk7中将stringmable放到了堆空间中。因为永久代的回收效率很低，在full gc的时候才会触发。而full gc是老年代的空间不足、永久代不足时才会触发。</li><li>这就导致stringTable回收效率不高。而我们开发中会有大量的字符串被创建，回收效率低，导致永久代内存不足。<strong>放到堆里，能及时回收内存</strong>。</li></ol><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>',30),r=[t];function l(d,o){return e(),i("div",null,r)}const g=a(n,[["render",l],["__file","07.方法区.html.vue"]]);export{g as default};
