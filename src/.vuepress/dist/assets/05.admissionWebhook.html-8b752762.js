const e=JSON.parse('{"key":"v-c53160d8","path":"/posts/k8s/2023/05.admissionWebhook.html","title":"admissionWebhook","lang":"zh-CN","frontmatter":{"title":"admissionWebhook","author":"falser101","date":"2023-11-21T00:00:00.000Z","category":["k8s"],"tag":["admissionWebhook"],"description":"什么是准入 Webhook？ 准入 Webhook 是一种用于接收准入请求并对其进行处理的 HTTP 回调机制。 可以定义两种类型的准入 Webhook， 即验证性质的准入 Webhook 和变更性质的准入 Webhook。 变更性质的准入 Webhook 会先被调用。它们可以修改发送到 API 服务器的对象以执行自定义的设置默认值操作。 在完成了所有对象修改并且 API 服务器也验证了所传入的对象之后， 验证性质的 Webhook 会被调用，并通过拒绝请求的方式来强制实施自定义的策略。 配置准入WebHook 你可以通过 ValidatingWebhookConfiguration 或者 MutatingWebhookConfiguration 动态配置哪些资源要被哪些准入 Webhook 处理。","head":[["meta",{"property":"og:url","content":"https://falser101.github.io/posts/k8s/2023/05.admissionWebhook.html"}],["meta",{"property":"og:site_name","content":"飞哥与小佛"}],["meta",{"property":"og:title","content":"admissionWebhook"}],["meta",{"property":"og:description","content":"什么是准入 Webhook？ 准入 Webhook 是一种用于接收准入请求并对其进行处理的 HTTP 回调机制。 可以定义两种类型的准入 Webhook， 即验证性质的准入 Webhook 和变更性质的准入 Webhook。 变更性质的准入 Webhook 会先被调用。它们可以修改发送到 API 服务器的对象以执行自定义的设置默认值操作。 在完成了所有对象修改并且 API 服务器也验证了所传入的对象之后， 验证性质的 Webhook 会被调用，并通过拒绝请求的方式来强制实施自定义的策略。 配置准入WebHook 你可以通过 ValidatingWebhookConfiguration 或者 MutatingWebhookConfiguration 动态配置哪些资源要被哪些准入 Webhook 处理。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-22T06:14:41.000Z"}],["meta",{"property":"article:author","content":"falser101"}],["meta",{"property":"article:tag","content":"admissionWebhook"}],["meta",{"property":"article:published_time","content":"2023-11-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-22T06:14:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"admissionWebhook\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-21T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-22T06:14:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"falser101\\"}]}"]]},"headers":[{"level":2,"title":"什么是准入 Webhook？","slug":"什么是准入-webhook","link":"#什么是准入-webhook","children":[]},{"level":2,"title":"配置准入WebHook","slug":"配置准入webhook","link":"#配置准入webhook","children":[{"level":3,"title":"开发Go API 服务端","slug":"开发go-api-服务端","link":"#开发go-api-服务端","children":[]},{"level":3,"title":"创建k8s资源","slug":"创建k8s资源","link":"#创建k8s资源","children":[]},{"level":3,"title":"生成TLS证书","slug":"生成tls证书","link":"#生成tls证书","children":[]},{"level":3,"title":"创建一个带hello=true标签的pod","slug":"创建一个带hello-true标签的pod","link":"#创建一个带hello-true标签的pod","children":[]},{"level":3,"title":"创建一个不带hello=true标签的则不会挂载","slug":"创建一个不带hello-true标签的则不会挂载","link":"#创建一个不带hello-true标签的则不会挂载","children":[]}]}],"git":{"createdTime":1700633681000,"updatedTime":1700633681000,"contributors":[{"name":"T2816","email":"zhangjf@tongtech.com","commits":1}]},"readingTime":{"minutes":6.4,"words":1920},"filePathRelative":"posts/k8s/2023/05.admissionWebhook.md","localizedDate":"2023年11月21日","excerpt":"<h2> 什么是准入 Webhook？</h2>\\n<p>准入 Webhook 是一种用于接收准入请求并对其进行处理的 HTTP 回调机制。 可以定义两种类型的准入 Webhook， 即验证性质的准入 Webhook 和变更性质的准入 Webhook。 变更性质的准入 Webhook 会先被调用。它们可以修改发送到 API 服务器的对象以执行自定义的设置默认值操作。</p>\\n<p>在完成了所有对象修改并且 API 服务器也验证了所传入的对象之后， 验证性质的 Webhook 会被调用，并通过拒绝请求的方式来强制实施自定义的策略。</p>\\n<h2> 配置准入WebHook</h2>\\n<p>你可以通过 <code>ValidatingWebhookConfiguration</code> 或者 <code>MutatingWebhookConfiguration</code> 动态配置哪些资源要被哪些准入 Webhook 处理。</p>","autoDesc":true}');export{e as data};
