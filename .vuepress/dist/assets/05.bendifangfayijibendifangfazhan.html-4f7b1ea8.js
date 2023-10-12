import{_ as a,o as e,c as i,e as t}from"./app-d8877bab.js";const o={},n=t('<blockquote><p>本地方法以及本地方法栈</p></blockquote><h1 id="什么是本地方法" tabindex="-1"><a class="header-anchor" href="#什么是本地方法" aria-hidden="true">#</a> 什么是本地方法?</h1><p>简单地讲，一个Native Method就是一个Java调用非Java代码的接口。一个Native Method是 这样- -一个Java方法:该方法的实现由非Java语言实现，比如C。这个特征并非Java所特有，很多其它的编程语言都有这一机制，比如在C++中，你可以用extern &quot;C&quot; 告知C++编译器去调用一个C的函数。</p><p>&quot;A native method is a Java method whose implementation isprovided by non-java code.&quot;</p><p>在定义一个native method时，并不提供实现体(有些像定义一个Javainterface)，因为其实现体是由非java语言在外面实现的。本地接口的作用是融合不同的编程语言为Java所用，它的初衷是融合C/C++程序。</p><p><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/20/kuangstudy96ced664-849e-4037-be73-9f12f8f4cff3.jpg" alt=""></p><h1 id="为什么要使用" tabindex="-1"><a class="header-anchor" href="#为什么要使用" aria-hidden="true">#</a> 为什么要使用</h1><p>Java使用起来非常方便，然而有些层次的任务用Java实现起来不容易，或者我们对程序的效率很在意时，问题就来了。</p><p>与Java环境外交互: <strong>有时Java应用需要与Java外面的环境交互，这是本地方法存在的主要原因</strong>。你可以想想Java需要与一些底层 系统，如操作系统或某些硬件交换信息时的情况。本地方法正是这样一种交流机制: 它为我们提供了一个非常简洁的接口,而且我们无需去了解Java应用之外的繁琐的细节。</p><h1 id="本地方法栈" tabindex="-1"><a class="header-anchor" href="#本地方法栈" aria-hidden="true">#</a> 本地方法栈</h1><ol><li>Java虚拟机栈用于管理Java方法的调用， 而本地方法栈用于管理本地方法的调用。</li><li>本地方法栈，也是线程私有的。</li><li>允许被实现成固定或者是可动态扩展的内存大小。 (在内存溢出方面是相同的) <ul><li>如果线程请求分配的栈容量超过本地方法栈允许的最大容量，Java虚拟机将会抛出一个stackoverflowError异常。</li><li>如果本地方法栈可以动态扩展，并且在尝试扩展的时候无法申请到足够的内存，或者在创建新的线程时没有足够的内存去创建对应的本地方法栈，那么Java虛拟机将会抛出一个outofMemoryError 异常。</li></ul></li><li>本地方法是使用c语言实现的。</li><li>它的具体做法是Native Method Stack中登记native方法，在Execution Engine执行时加载本地方法库。</li></ol>',11),r=[n];function d(c,l){return e(),i("div",null,r)}const h=a(o,[["render",d],["__file","05.bendifangfayijibendifangfazhan.html.vue"]]);export{h as default};
