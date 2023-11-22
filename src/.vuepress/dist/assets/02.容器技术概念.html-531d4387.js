const e=JSON.parse('{"key":"v-649a7426","path":"/posts/k8s/2023/02.%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF%E6%A6%82%E5%BF%B5.html","title":"容器技术概念","lang":"zh-CN","frontmatter":{"title":"容器技术概念","author":"falser101","date":"2023-09-01T00:00:00.000Z","category":["k8s"],"tag":["linux"],"description":"〉docker容器与传统虚拟机的区别 传统虚拟机 虚拟机是在宿主机上虚拟一个完整的操作系统，具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。 docker容器 与虚拟机是完全不同的两个概念，基于Linux的Namespace和Cgroups实现的，一个正在运行的 Docker 容器，其实就是一个启用了多个 Linux Namespace 的应用进程，而这个进程能够使用的资源量，则受 Cgroups 配置的限制 Linux Namespace概念 Namespace 的使用方式非常有意思：它其实只是 Linux 创建新进程的一个可选参数。我们知道，在 Linux 系统中创建进程的系统调用是 clone()，比如：","head":[["meta",{"property":"og:url","content":"https://falser101.github.io/posts/k8s/2023/02.%E5%AE%B9%E5%99%A8%E6%8A%80%E6%9C%AF%E6%A6%82%E5%BF%B5.html"}],["meta",{"property":"og:site_name","content":"飞哥与小佛"}],["meta",{"property":"og:title","content":"容器技术概念"}],["meta",{"property":"og:description","content":"〉docker容器与传统虚拟机的区别 传统虚拟机 虚拟机是在宿主机上虚拟一个完整的操作系统，具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。 docker容器 与虚拟机是完全不同的两个概念，基于Linux的Namespace和Cgroups实现的，一个正在运行的 Docker 容器，其实就是一个启用了多个 Linux Namespace 的应用进程，而这个进程能够使用的资源量，则受 Cgroups 配置的限制 Linux Namespace概念 Namespace 的使用方式非常有意思：它其实只是 Linux 创建新进程的一个可选参数。我们知道，在 Linux 系统中创建进程的系统调用是 clone()，比如："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-22T06:14:41.000Z"}],["meta",{"property":"article:author","content":"falser101"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:published_time","content":"2023-09-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-22T06:14:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"容器技术概念\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-01T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-22T06:14:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"falser101\\"}]}"]]},"headers":[{"level":2,"title":"Linux Namespace概念","slug":"linux-namespace概念","link":"#linux-namespace概念","children":[]},{"level":2,"title":"Linux Cgroups概念","slug":"linux-cgroups概念","link":"#linux-cgroups概念","children":[]}],"git":{"createdTime":1700633681000,"updatedTime":1700633681000,"contributors":[{"name":"T2816","email":"zhangjf@tongtech.com","commits":1}]},"readingTime":{"minutes":1.94,"words":583},"filePathRelative":"posts/k8s/2023/02.容器技术概念.md","localizedDate":"2023年9月1日","excerpt":"<p>〉docker容器与传统虚拟机的区别</p>\\n<h1> 传统虚拟机</h1>\\n<p>虚拟机是在宿主机上虚拟一个完整的操作系统，具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。</p>\\n<h1> docker容器</h1>\\n<p>与虚拟机是完全不同的两个概念，基于Linux的Namespace和Cgroups实现的，一个正在运行的 Docker 容器，其实就是一个启用了多个 Linux Namespace 的应用进程，而这个进程能够使用的资源量，则受 Cgroups 配置的限制</p>\\n<h2> Linux Namespace概念</h2>\\n<p>Namespace 的使用方式非常有意思：它其实只是 Linux 创建新进程的一个可选参数。我们知道，在 Linux 系统中创建进程的系统调用是 clone()，比如：</p>","autoDesc":true}');export{e as data};
