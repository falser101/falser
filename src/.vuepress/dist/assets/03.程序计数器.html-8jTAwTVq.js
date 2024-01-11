import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as e,f as t}from"./app-7hJDOXrF.js";const n={},r=t('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><figure><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/13/kuangstudy97a8cfdd-4c6c-4077-846a-c866aeb46211.jpg" alt="介绍" tabindex="0" loading="lazy"><figcaption>介绍</figcaption></figure><p>JVM中的程序计数寄存器(Program Counter Register) 中，Register的命名源于CPU的寄存器，寄存器存储指令相关的现场信息。CPU 只有把数据装载到寄存器才能够运行。这里并非是广义上所指的物理寄存器，或许将其翻译为PC计数器(或指令计数器)会更加贴切(也称为程序钩子)，并且也不容易引起一些不必要的误会。JVM中的PC寄存器是对物理PC寄存器的一种抽象模拟。</p><ul><li>它是一块很小的内存空间，几乎可以忽略不记。也是运行速度最快的存储区域。</li><li>在JVM规范中，每个线程都有它自己的程序计数器，是线程私有的，生命周期与线程的生命周期保持一致。</li><li>任何时间一个线程都只有一个方法在执行，也就是所谓的当前方法。程序计数器会存储当前线程正在执行的Java方法的JVM指令地址;或者, 如果是在执行native方法，则是未指定值(undefined)。</li><li>它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成。</li><li>字节码解释器工作时就是通过改变这个计数器的值来选取下一条需要执行的字节码指令。</li><li>它是唯一一个在Java虚拟机规范中<strong>没有规定任何OutOtMemoryError</strong>情况的区域。</li></ul><h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用" aria-hidden="true">#</a> 作用</h2><figure><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/13/kuangstudy18a1607a-8a8d-47ad-93e3-6d8eb800cf96.jpg" alt="作用" tabindex="0" loading="lazy"><figcaption>作用</figcaption></figure><p>PC寄存器用来<strong>存储指向下一条指令的地址</strong>，也即将要执行的指令代码。由执行引擎读取下一条指令。</p><h2 id="常见面试题" tabindex="-1"><a class="header-anchor" href="#常见面试题" aria-hidden="true">#</a> 常见面试题</h2><p><strong>使用PC寄存器存储字节码指令地址有什么用呢? 为什么使用PC寄存器记录当前线程的执行地址呢？</strong> 答：因为CPU需要不停的切换各个线程，这时候切换回来以后，就得知道接着从哪开始继续执行JVM的字节码解释器就需要通过改变PC寄存器的值来明确下一条应该执行什么样的字节码指令。</p><p><strong>PC寄存器为什么设定为线程私有</strong></p><p>答：我们都知道所谓的多线程在-一个特定的时间段内只会执行其中某一个线程的方法，CPU会不停地做任务切换，这样必然导致经常中断或恢复，如何保证分毫无差呢?<strong>为了能够准确地记录各个线程正在执行的当前字节码指令地址，最好的办法自然是为每一个线程都分配一个PC寄存器</strong>，这样-来各个线程之间便可以进行独立计算，从而不会出现相互干扰的情况。</p><p>由于CPU时间片轮限制，众多线程在并发执行过程中，任何一个确定的时刻，一个处理器或者多核处理器中的一个内核，只会执行某个线程中的一条指令。</p><p>这样必然导致经常中断或恢复，如何保证分毫无差呢?每个线程在创建后，都会产生自己的程序计数器和栈帧，程序计数器在各个线程之间互不影响。</p>',13),s=[r];function o(c,d){return i(),e("div",null,s)}const p=a(n,[["render",o],["__file","03.程序计数器.html.vue"]]);export{p as default};
