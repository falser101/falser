const e=JSON.parse('{"key":"v-0a4f8dc6","path":"/posts/golang/2023/01.go1.21%E6%96%B0%E5%A2%9E%E6%97%A5%E5%BF%97%E5%BA%93slog%E8%AF%A6%E8%A7%A3.html","title":"go1.21新增日志库slog详解","lang":"zh-CN","frontmatter":{"title":"go1.21新增日志库slog详解","author":"falser101","date":"2023-10-07T00:00:00.000Z","category":["golang"],"tag":["golang"],"description":"slog 结构化日志记录 Go 1.21 中的新 log/slog 软件包为标准库带来了结构化日志记录。结构化日志使用键值对，因此可以快速可靠地解析、过滤、搜索和分析它们。对于服务器来说，日志记录是开发人员观察系统详细行为的重要方式，通常是他们调试系统的第一个地方。因此，日志往往数量庞大，快速搜索和过滤它们的能力至关重要 快速使用 package main import \\"log/slog\\" func main() { slog.Info(\\"hello, world\\") } # 输出内容如下 2023/010/07 16:09:19 INFO hello, world","head":[["meta",{"property":"og:url","content":"https://falser101.github.io/falser/posts/golang/2023/01.go1.21%E6%96%B0%E5%A2%9E%E6%97%A5%E5%BF%97%E5%BA%93slog%E8%AF%A6%E8%A7%A3.html"}],["meta",{"property":"og:site_name","content":"飞哥与小佛"}],["meta",{"property":"og:title","content":"go1.21新增日志库slog详解"}],["meta",{"property":"og:description","content":"slog 结构化日志记录 Go 1.21 中的新 log/slog 软件包为标准库带来了结构化日志记录。结构化日志使用键值对，因此可以快速可靠地解析、过滤、搜索和分析它们。对于服务器来说，日志记录是开发人员观察系统详细行为的重要方式，通常是他们调试系统的第一个地方。因此，日志往往数量庞大，快速搜索和过滤它们的能力至关重要 快速使用 package main import \\"log/slog\\" func main() { slog.Info(\\"hello, world\\") } # 输出内容如下 2023/010/07 16:09:19 INFO hello, world"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-11T08:33:54.000Z"}],["meta",{"property":"article:author","content":"falser101"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2023-10-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-11T08:33:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"go1.21新增日志库slog详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-07T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-11T08:33:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"falser101\\"}]}"]]},"headers":[],"git":{"createdTime":1700633681000,"updatedTime":1704962034000,"contributors":[{"name":"T2816","email":"zhangjf@tongtech.com","commits":2}]},"readingTime":{"minutes":1.91,"words":573},"filePathRelative":"posts/golang/2023/01.go1.21新增日志库slog详解.md","localizedDate":"2023年10月7日","excerpt":"<blockquote>\\n<p>slog 结构化日志记录</p>\\n</blockquote>\\n<p>Go 1.21 中的新 log/slog 软件包为标准库带来了结构化日志记录。结构化日志使用键值对，因此可以快速可靠地解析、过滤、搜索和分析它们。对于服务器来说，日志记录是开发人员观察系统详细行为的重要方式，通常是他们调试系统的第一个地方。因此，日志往往数量庞大，快速搜索和过滤它们的能力至关重要</p>\\n<h1> 快速使用</h1>\\n<div class=\\"language-golang line-numbers-mode\\" data-ext=\\"golang\\"><pre class=\\"language-golang\\"><code>package main\\n\\nimport \\"log/slog\\"\\n\\nfunc main() {\\n    slog.Info(\\"hello, world\\")\\n}\\n\\n# 输出内容如下\\n2023/010/07 16:09:19 INFO hello, world\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
