import{_ as n,o as a,c as s,e as t}from"./app-a50c9339.js";const i={},e=t(`<blockquote><p>虚拟机栈概述</p></blockquote><h1 id="虚拟机栈概述" tabindex="-1"><a class="header-anchor" href="#虚拟机栈概述" aria-hidden="true">#</a> 虚拟机栈概述</h1><h2 id="虚拟机出现的背景" tabindex="-1"><a class="header-anchor" href="#虚拟机出现的背景" aria-hidden="true">#</a> 虚拟机出现的背景</h2><p>由于跨平台性的设计，Java的指令都是根据栈来设计的。不同平台CPU架构不同，所以不能设计为基于寄存器的。 优点：跨平台，指令集小，编译器容易实现 缺点：性能下降，实现同样的功能需要更多的指令。</p><h2 id="基本内容" tabindex="-1"><a class="header-anchor" href="#基本内容" aria-hidden="true">#</a> 基本内容</h2><ul><li>Java虚拟机栈是什么? <ul><li>Java虚拟机栈(Java Virtual Machine Stack) ，早期也叫Java栈。每个线程在创建时都会创建一个虚拟机栈，其内部保存一个个的栈帧(Stack Frame) ，对应着一次次的Java方法调用。</li><li>是线程私有的</li></ul></li><li>生命周期： <ul><li>生命周期和线程一致。</li></ul></li><li>作用： <ul><li>主管Java程序的运行，它保存方法的局部变量、部分结果，并参与方法的调用和返回。</li></ul></li></ul><p><strong>优点</strong>：</p><ul><li>栈是一种快速有效的分配存储方式，访问速度仅次于程序计数器</li><li>对于栈来说不存在垃圾回收问题，存在OOM</li></ul><p>JVM直接对Java栈的操作只有两个: - 每个方法执行，伴随着进栈(入栈、压栈) - 执行结束后的出栈工作</p><h2 id="栈中可能出现的异常" tabindex="-1"><a class="header-anchor" href="#栈中可能出现的异常" aria-hidden="true">#</a> 栈中可能出现的异常</h2><p>Java虚拟机规范允许<strong>Java栈的大小是动态的或者是固定不变的</strong>。</p><ul><li>如果采用固定大小的Java虚拟机栈，那每一个线程的Java虚拟机栈容量可以在线程创建的时候独立选定。如果线程请求分配的栈容量超过Java虚拟机栈允许的最大容量，Java虚拟机将会抛出一个<code>StackOverflowError</code> 异常。</li><li>如果Java虚拟机栈可以动态扩展，并且在尝试扩展的时候无法申请到足够的内存，或者在创建新的线程时没有足够的内存去创建对应的虚拟机栈，那Java虚拟机将会抛出一个<code>OutOfMemoryError</code> 异常。</li></ul><h2 id="栈是运行时的单位-而堆是存储的单位。" tabindex="-1"><a class="header-anchor" href="#栈是运行时的单位-而堆是存储的单位。" aria-hidden="true">#</a> 栈是运行时的单位，而堆是存储的单位。</h2><p>栈解决程序的运行问题，即程序如何执行，或者说如何处理数据。 堆解决的是数据存储的问题，即数据怎么放、放在哪儿。</p><h2 id="设置虚拟机栈的大小" tabindex="-1"><a class="header-anchor" href="#设置虚拟机栈的大小" aria-hidden="true">#</a> 设置虚拟机栈的大小</h2><p>-Xss256m</p><h1 id="栈的存储单位" tabindex="-1"><a class="header-anchor" href="#栈的存储单位" aria-hidden="true">#</a> 栈的存储单位</h1><h2 id="栈中存储什么" tabindex="-1"><a class="header-anchor" href="#栈中存储什么" aria-hidden="true">#</a> 栈中存储什么？</h2><ol><li>每个线程都有自己的栈，栈中的数据都是<strong>以栈帧(stack Frame) 的格式存在</strong>。</li><li>在这个线程上正在执行的每个方法都各自对应一个栈帧(Stack Frame) 。</li><li>栈帧是一个内存区块，是一个数据集，维系着方法执行过程中的各种数据信息。</li></ol><h2 id="栈运行原理" tabindex="-1"><a class="header-anchor" href="#栈运行原理" aria-hidden="true">#</a> 栈运行原理</h2><ol><li>JVM直接对Java栈的操作只有两个，就是对栈帧的<strong>压栈</strong>和<strong>出栈</strong>，遵循“先进后出”/“后进先出”原则。</li><li>在一条活动线程中，一个时间点上，只会有一个活动的栈帧。即只有当前正在执行的方法的栈帧(栈顶栈帧)是有效的，这个栈帧被称为<strong>当前栈帧</strong>(Current Frame) ，与当前栈帧相对应的方法就是<strong>当前方法</strong>(Current Method)，定义这个方法的类就是<strong>当前类</strong>(Current Class) 。</li><li>执行引擎运行的所有字节码指令只针对当前栈帧进行操作。</li><li>如果在该方法中调用了其他方法，对应的新的栈帧会被创建出来，放在栈的顶端，成为新的当前帧。</li><li>不同线程中所包含的栈帧是不允许存在相互引用的，即不可能在一个栈帧之中引用另外一个线程的栈帧。</li><li>如果当前方法调用了其他方法，方法返回之际，当前栈帧会传回此方法的执行结果给前一个栈帧，接着，虚拟机会丢弃当前栈帧，使得前一个栈帧重新成为当前栈帧。</li><li>Java方法有两种返回函数的方式，一种是正常的函数返回，使用return指令;另外一种是抛出异常。不管使用哪种方式，都会导致栈帧被弹出。</li></ol><h1 id="栈帧内部结构" tabindex="-1"><a class="header-anchor" href="#栈帧内部结构" aria-hidden="true">#</a> 栈帧内部结构</h1><p>每个栈帧中存储着:</p><ol><li>局部变量表（Local variables)</li><li>操作数栈（operand stack）（或表达式栈）</li><li>动态链接(Dynamic Linking)（或指向运行时常量池的方法引用）</li><li>方法返回地址（Return Address）(或方法正常退出或者异常退出的定义)</li><li>一些附加信息 <img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/15/kuangstudy16b950bc-5b44-4d45-8320-ef999866882f.png" alt="结构" title="结构"></li></ol><h1 id="局部变量表" tabindex="-1"><a class="header-anchor" href="#局部变量表" aria-hidden="true">#</a> 局部变量表</h1><ol><li>局部变量表也被称之为局部变量数组或本地变量表</li><li>定义为<strong>一个数字数组</strong>，主要用于<strong>存储方法参数和定义在方法体内的局部变量</strong>，这些数据类型包括各类基本数据类型、对象引用(reference） ，以及returnAddress类型。</li><li>由于局部变量表是建立在线程的栈上，是线程的<strong>私有数据</strong>，因此<strong>不存在数据安全问题</strong></li><li><strong>局部变量表所需的容量大小是在编译期确定下来的</strong>，并保存在方法的Code属性的maximum local variables数据项中。在方法运行期间是<strong>不会改变</strong>局部变量表的大小的。</li><li><strong>方法嵌套调用的次数由栈的大小决定</strong>。一般来说，<strong>栈越大，方法嵌套调用次数越多</strong>。对一个函数而言，它的参数和局部变量越多，使得局部变量表膨胀，它的栈帧就越大，以满足方法调用所需传递的信息增大的需求。进而函数调用就会占用更多的栈空间，导致其嵌套调用次数就会减少。</li><li><strong>局部变量表中的变量只在当前方法调用中有效</strong>。在方法执行时，虚拟机通过使用局部变量表完成参数值到参数变量列表的传递过程。<strong>当方法调用结束后，随着方法栈帧的销毁，局部变量表也会随之销毁</strong>。</li></ol><h2 id="slot" tabindex="-1"><a class="header-anchor" href="#slot" aria-hidden="true">#</a> Slot</h2><ol><li>参数值的存放总是在局部变量数组的index0开始，到数组长度-1的索引结束。</li><li>局部变量表，最基本的存储单元是Slot (变量槽)</li><li>局部变量表中存放编译期可知的各种基本数据类型(8种)，引用类型(reference)，returnAddress 类型的变量。</li><li>在局部变量表里，32位以内的类型只占用一个slot (包括returnAddress类型)，64位的类型(long和double)占用两个slot。 <ul><li>byte、short、char在存储前被转换为int, boolean也被转换为int，0表示false，非0表示true。</li><li>long和double则占据两个Slot。</li></ul></li><li>当一个实例方法被调用的时候，它的方法参数和方法体内部定义的局部变量将会按照顺序被复制到局部变量表中的每一个Slot上</li><li>如果当前帧是由<strong>构造方法或者实例方法</strong>创建的，那么该<strong>对象引用this</strong>将会存放在index为0的slot处，其余的参数按照参数表顺序继续排列。</li><li>如果需要访问局部变量表中一个64bit的局部变量值时，只需要使用前一个索引即可。(比如:访问long或double类型变量)</li><li>栈帧中的局部变量表中的槽位是可以重用的，如果一个局部变量过了其作用域，那么在其作用域之后申明的新的局部变量就很有可能会复用过期局部变量的槽位，从而达到节省资源的目的。</li></ol><h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2><ol><li>在栈帧中，与性能调优关系最为密切的部分就是前面提到的局部变量表。在方法执行时，虚拟机使用局部变量表完成方法的传递。</li><li>局部变量表中的变量也是重要的垃圾回收根节点，只要被局部变量表中直接或间接引用的对象都不会被回收。</li></ol><h1 id="操作数栈" tabindex="-1"><a class="header-anchor" href="#操作数栈" aria-hidden="true">#</a> 操作数栈</h1><ol><li>每一个独立的栈帧中除了包含局部变量表以外，还包含一个后进先出(Last-In-First-Out)的<strong>操作数栈</strong>，也可以称之为<strong>表达式栈</strong>(Expression Stack)。</li><li>操作数栈，在方法执行过程中，根据字节码指令，往栈中写入数据或提取数据，即入栈(push) /出栈(pop)。 <ul><li>某些字节码指令将值压入操作数栈，其余的字节码指令将操作数取出栈。使用它们后再把结果压入栈。</li><li>比如:执行复制、交换、求和等操作</li></ul></li><li>操作数栈，主要用于保存计算过程的中间结果，同时作为计算过程中变量临时的存储空间。</li><li>操作数栈就是JVM执行引擎的一个工作区，当一个方法刚开始执行的时候，一个新的栈帧也会随之被创建出来，这个方法的操作数栈是空的。</li><li>每一个操作数栈都会拥有一个明确的栈深度用于存储数值，其所需的最大深度在<strong>编译期就定义好了</strong>，保存在方法的Code属性中，为max_stack的值。</li><li>栈中的任何一个元素都是可以任意的Java数据类型。 <ul><li>32bit的类型占用<strong>一个栈</strong>单位深度</li><li>64bit的类型占用<strong>两个栈</strong>单位深度</li></ul></li><li>操作数栈<strong>并非采用访问索引的方式来进行数据访问</strong>的，而是只能通过标准的入栈(push)和出栈(pop)操作来完成一次数据访问。</li><li>如果被调用的方法带有返回值的话，其返回值将会被压入当前栈帧的操作数栈中，并更新PC寄存器中下一条需要执行的字节码指令。</li><li>操作数栈中元素的数据类型必须与字节码指令的序列严格匹配，这由编译器在编译器期间进行验证，同时在类加载过程中的类检验阶段的数据流分析阶段要再次验证。</li><li>另外，我们说Java虚拟机的<strong>解释引擎是基于栈的执行引擎</strong>，其中的栈指的就是操作数栈。</li></ol><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>i++ 和 ++i的区别？ i++ 先赋值再+1，++i 先+1再赋值</p><h1 id="栈顶缓存技术" tabindex="-1"><a class="header-anchor" href="#栈顶缓存技术" aria-hidden="true">#</a> 栈顶缓存技术</h1><h1 id="动态链接-指向运行时常量池的方法引用" tabindex="-1"><a class="header-anchor" href="#动态链接-指向运行时常量池的方法引用" aria-hidden="true">#</a> 动态链接（指向运行时常量池的方法引用）</h1><ol><li>每一个栈帧内部都包含一个指向<strong>运行时常量池</strong>中<strong>该栈帧所属方法的引用</strong>。包含这个引用的目的就是为了支持当前方法的代码能够<strong>实现动态链接</strong>（Dynamic Linking） 。比如： invokedynamic指令</li><li>在Java源文件被编译到字节码文件中时，所有的变量和方法引用都作为符号引用（Symbolic Reference）保存在class文件的常量池里。比如：描述一个方法调用了另外的其他方法时，就是通过常量池中指向方法的符号引用来表示的，那么<strong>动态链接的作用就是为了将这些符号引用转换为调用方法的直接引用。</strong></li></ol><p><img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/17/kuangstudyacdd449e-b6e1-4748-9cf5-9f1a27e8c054.png" alt=""></p><h1 id="方法的调用-解析与分派" tabindex="-1"><a class="header-anchor" href="#方法的调用-解析与分派" aria-hidden="true">#</a> 方法的调用:解析与分派</h1><p>在JVM中，将符号引用转换为调用方法的直接引用与方法的绑定机制相关。</p><ul><li>静态链接： 当一个字节码文件被装载进JVM内部时，如果被调用的<strong>目标方法在编译期可知</strong>，且运行期保持不变时。这种情况下将调用方法的符号引用转换为直接引用的过程称之为静态链接。</li><li>动态链接： 如果被<strong>调用的方法在编译期无法被确定下来</strong>，也就是说，只能够在程序运行期将调用方法的符号引用转换为直接引用，由于这种引用转换过程具备动态性，因此也就被称之为动态链接。</li></ul><p>对应的方法的绑定机制为：早期绑定（Early Binding）和晚期绑定（Late Binding） 。绑定是<strong>一个字段、方法或者类在符号引用被替换为直接引用的过程，这仅仅发生一次。</strong></p><ul><li>早期绑定： 早期绑定就是指被调用的目标方法如果在<strong>编译期可知，且运行期保持不变时</strong>，即可将这个方法与所属的类型进行绑定，这样一来，由于明确了被调用的目标方法究竟是哪一个，因此也就可以使用静态链接的方式将符号引用转换为直接引用。</li><li>晚期绑定： 如果被调用的方法在<strong>编译期无法被确定下来，只能够在程序运行期根据实际的类型绑定</strong>相关的方法，这种绑定方式也就被称之为晚期绑定。</li></ul><h2 id="虚方法和非虚方法" tabindex="-1"><a class="header-anchor" href="#虚方法和非虚方法" aria-hidden="true">#</a> 虚方法和非虚方法</h2><p>虚拟机中提供了以下几条方法调用指令：</p><ul><li>普通调用指令： <ol><li>invokestatic：调用静态方法，解析阶段确定唯一方法版本</li><li>invokespecial：调用init()方法，私有及父类方法，解析阶段确定唯一方法版本</li><li>invokevirtual：调用所有虚方法</li><li>invokeinterface：调用接口方法</li></ol></li><li>动态调用指令： <ol><li>invokedynamic：动态解析出需要调用的方法，然后执行</li></ol></li></ul><p>前四条指令固化在虚拟机内部，方法的调用执行不可人为干预，而invokedynamic指令则支持由用户确定方法版本。<strong>其中invokestatic指令和invokespecial指令调用的方法称为非虚方法</strong>，<strong>其余的（final修饰的除外）称为虚方法。</strong></p><h2 id="虚方法表" tabindex="-1"><a class="header-anchor" href="#虚方法表" aria-hidden="true">#</a> 虚方法表</h2><p>在面向对象的编程中，会很频繁的使用到动态分派，如果在每次动态分派的过程中都要重新在类的方法元数据中搜索合适的目标的话就可能影响到执行效率。因此，为了提高性能， JVM采用在<strong>类的方法区建立一个虚方法表</strong>（virtual method table） （<strong>非虚方法不会出现在表中</strong>）来实现。使用<strong>索引表来代替查找</strong>。 每个类中都有一个虚方法表，表中存放着各个方法的实际入口。 那么虚方法表什么时候被创建？ 虚方法表会在<strong>类加载的链接阶段被创建并开始初始化</strong>，类的变量初始值准备完成之后， JVM会把该类的方法表也初始化完毕。</p><h1 id="方法返回地址" tabindex="-1"><a class="header-anchor" href="#方法返回地址" aria-hidden="true">#</a> 方法返回地址</h1><ol><li><p>存放调用该方法的pc寄存器的值。</p></li><li><p>一个方法的结束，有两种方式: ➢正常执行完成 ➢出现未处理的异常，非正常退出</p></li><li><p>无论通过哪种方式退出，在方法退出后都返回到该方法被调用的位置。方法正常退出时，调用者的pc计数器的值作为返回地址，即调用该方法的指令的下一条指令的地址。而通过异常退出的，返回地址是要通过异常表来确定，栈帧中一般不会保存这部分信息。</p></li></ol><p>当一个方法开始执行后，只有<strong>两种方式</strong>可以退出这个方法:</p><ol><li>执行引擎遇到任意一个方法返回的字节码指令(return)，会有返回值传递给，上层的方法调用者，简称正常完成出口; ➢一个方法在正常调用完成之后究竟需要使用哪一个返回指令还需要<strong>根据方法返回值的实际数据类型</strong>而定。 ➢在字节码指令中，返回指令包含<strong>ireturn</strong> (当返回值是boolean、 byte、char.short和int类型时使用)、lreturn、 freturn、 dreturn以及areturn，另外还有一个return指令供声明为void的方法、实例初始化方法、类和接0的初始化方法使用。</li><li>在方法执行的过程中遇到了<strong>异常(Exception) <strong>，并且这个异常</strong>没有在方法内进行处理</strong>，也就是只要在本方法的异常表中没有搜索到匹配的异常处理器，就会导致方法退出。简称<strong>异常完成出口</strong>。方法执行过程中抛出异常时的异常处理，存储在一个 异常处理表，方便在发生异常的时候找到处理异常的代码。 <img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/02/19/kuangstudyf5ea3e3d-c56d-4344-b9e1-90b88068bc85.jpg" alt="异常表" title="异常表"></li></ol><h1 id="一些附加信息" tabindex="-1"><a class="header-anchor" href="#一些附加信息" aria-hidden="true">#</a> 一些附加信息</h1><p>栈帧中还允许携带与Java虛拟机实现相关的一些附加信息。例如 对程序调试提供支持的信息。</p><h1 id="栈的相关面试题" tabindex="-1"><a class="header-anchor" href="#栈的相关面试题" aria-hidden="true">#</a> 栈的相关面试题</h1><ol><li>举例栈溢出的情况? (StackOverflowError) 通过-Xss设置栈的大小，如果申请不到内存时，内存溢出OOM</li><li>调整栈大小，就能保证不出现溢出吗? 不能</li><li>分配的栈内存越大越好吗? 不是，整个内存是有限的，可能会造成可用线程数减少</li><li>垃圾回收是否会涉及到虚拟机栈? 不会</li><li>方法中定义的局部变量是否线程安全?</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//s1的声明方式是线程安全的</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//StringBuilder:线程不安全</span>
	<span class="token class-name">StringBuilder</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//sBuilder的操作过程:是线程不安全的</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span> sBuilder<span class="token punctuation">)</span><span class="token punctuation">{</span>
	sBuilder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	sBuilder<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//s1的操作:是线程不安全的</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">StringBuilder</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">StringBuilder</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> s1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//s1的操作:是线程安全的</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">StringBuilder</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	s1<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> s1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,61),l=[e];function o(r,p){return a(),s("div",null,l)}const u=n(i,[["render",o],["__file","04.xunijizhan.html.vue"]]);export{u as default};