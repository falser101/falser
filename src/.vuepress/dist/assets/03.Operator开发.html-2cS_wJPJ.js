import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as d,c as r,a as e,b as a,e as l,f as t}from"./app-LEHJ93_Z.js";const c={},o=e("blockquote",null,[e("p",null,"基于Operatorframework sdk进行Operator的开发")],-1),u=e("h1",{id:"使用operatorsdk开发",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用operatorsdk开发","aria-hidden":"true"},"#"),a(" 使用OperatorSdk开发")],-1),m=e("h2",{id:"环境要求",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#环境要求","aria-hidden":"true"},"#"),a(" 环境要求")],-1),v={href:"https://sdk.operatorframework.io/docs/installation/",target:"_blank",rel:"noopener noreferrer"},p=e("li",null,"git",-1),h=e("li",null,"go，环境变量（export GO111MODULE=on）",-1),b=e("li",null,"docker",-1),g=e("li",null,"kubectl",-1),x=t(`<h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始</h2><h3 id="创建并初始化项目" tabindex="-1"><a class="header-anchor" href="#创建并初始化项目" aria-hidden="true">#</a> 创建并初始化项目</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir memcached-operator
cd memcached-operator
operator-sdk init --domain example.com --repo github.com/example/memcached-operator
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建新的-api-和控制器" tabindex="-1"><a class="header-anchor" href="#创建新的-api-和控制器" aria-hidden="true">#</a> 创建新的 API 和控制器</h3><p>创建一个新的自定义资源定义 （CRD） API，其中包含组 cache 版本 v1alpha1 和内存缓存类型。出现提示时，输入yes以创建资源和控制器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ operator-sdk create api --group cache --version v1alpha1 --kind Memcached --resource --controller
Writing scaffold for you to edit...
api/v1alpha1/memcached_types.go
controllers/memcached_controller.go
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义api" tabindex="-1"><a class="header-anchor" href="#定义api" aria-hidden="true">#</a> 定义API</h3><div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>// 添加 +kubebuilder:subresource:status 标记以将状态子资源添加到 CRD 清单，以便控制器可以在不更改 CR 对象的其余部分的情况下更新 CR 状态
//+kubebuilder:subresource:status
type MemcachedSpec struct {

  // 校验 可查阅https://book.kubebuilder.io/reference/markers/crd-validation.html
	// +kubebuilder:validation:Minimum=1
	// +kubebuilder:validation:Maximum=5
	// +kubebuilder:validation:ExclusiveMaximum=false

	// 实例数
	// +operator-sdk:csv:customresourcedefinitions:type=spec
	Size int32 \`json:&quot;size,omitempty&quot;\`

	// 容器的端口
	// +operator-sdk:csv:customresourcedefinitions:type=spec
	ContainerPort int32 \`json:&quot;containerPort,omitempty&quot;\`
}

// Memcached的状态
type MemcachedStatus struct {
  // 存储Memcached实例的状态条件
	// +operator-sdk:csv:customresourcedefinitions:type=status
	Conditions []metav1.Condition \`json:&quot;conditions,omitempty&quot; patchStrategy:&quot;merge&quot; patchMergeKey:&quot;type&quot; protobuf:&quot;bytes,1,rep,name=conditions&quot;\`
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义完成后，请运行以下命令以更新为该资源类型生成的代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的 makefile 目标将调用<code>controller-gen</code>来更新 <code>api/v1alpha1/zz_generated.deepcopy.go</code> 文件，以确保我们的 API 的 Go 类型定义实现所有 Kind 类型必须实现的 runtime.Object 接口。</p><h3 id="生成-crd-清单" tabindex="-1"><a class="header-anchor" href="#生成-crd-清单" aria-hidden="true">#</a> 生成 CRD 清单</h3><p>使用规范/状态字段和 CRD 验证标记定义 API 后，可以使用以下命令生成和更新 CRD 清单</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make manifests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此makefile目标将调用<code>controller-gen</code>以生成<code>config/crd/bases/cache.example.com_memcacheds.yaml</code> CRD 清单。</p><h2 id="实现controller" tabindex="-1"><a class="header-anchor" href="#实现controller" aria-hidden="true">#</a> 实现Controller</h2><h3 id="协调循环" tabindex="-1"><a class="header-anchor" href="#协调循环" aria-hidden="true">#</a> 协调循环</h3><p>协调功能负责对系统的实际状态强制实施所需的 CR 状态。每当在监视的 CR 或资源上发生事件时，它都会运行，并且会根据这些状态是否匹配返回一些值</p><p>每个控制器都有一个协调器对象，其中包含一个 <code>Reconcile()</code> 实现协调循环的方法。协调循环传递参数， <code>Request</code> 该参数是用于从缓存中查找主要资源对象 <code>Memcached</code> 的命名空间/名称键</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import (
	ctrl &quot;sigs.k8s.io/controller-runtime&quot;

	cachev1alpha1 &quot;github.com/example/memcached-operator/api/v1alpha1&quot;
	...
)

func (r *MemcachedReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
  // Lookup the Memcached instance for this reconcile request
  memcached := &amp;cachev1alpha1.Memcached{}
  err := r.Get(ctx, req.NamespacedName, memcached)
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以下是协调程序的一些可能的返回选项：</p><ul><li>With the error:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return ctrl.Result{}, err
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Without an error:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return ctrl.Result{Requeue: true}, nil
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Therefore, to stop the Reconcile, use:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return ctrl.Result{}, nil
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Reconcile again after X time:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>return ctrl.Result{RequeueAfter: 5 * time.Minute}, nil
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="指定权限并生成-rbac-清单" tabindex="-1"><a class="header-anchor" href="#指定权限并生成-rbac-清单" aria-hidden="true">#</a> 指定权限并生成 RBAC 清单</h3><p>控制器需要某些 RBAC 权限才能与其管理的资源进行交互。这些标记通过如下所示的 RBAC 标记指定：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//+kubebuilder:rbac:groups=cache.example.com,resources=memcacheds,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=cache.example.com,resources=memcacheds/status,verbs=get;update;patch
//+kubebuilder:rbac:groups=cache.example.com,resources=memcacheds/finalizers,verbs=update
//+kubebuilder:rbac:groups=core,resources=events,verbs=create;patch
//+kubebuilder:rbac:groups=apps,resources=deployments,verbs=get;list;watch;create;update;patch;delete
//+kubebuilder:rbac:groups=core,resources=pods,verbs=get;list;watch

func (r *MemcachedReconciler) Reconcile(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ClusterRole 清单 at config/rbac/role.yaml 是使用以下命令通过控制器生成从上述标记生成的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make manifests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="构建镜像" tabindex="-1"><a class="header-anchor" href="#构建镜像" aria-hidden="true">#</a> 构建镜像</h3><p>可修改Makefil 的镜像名称</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># IMG ?= controller:latest
IMG ?= $(IMAGE_TAG_BASE):$(VERSION)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后执行以下命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make docker-build docker-push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="运行operator" tabindex="-1"><a class="header-anchor" href="#运行operator" aria-hidden="true">#</a> 运行operator</h2><h3 id="本地在集群外部执行" tabindex="-1"><a class="header-anchor" href="#本地在集群外部执行" aria-hidden="true">#</a> 本地在集群外部执行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make install run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="在群集内作为deployment运行" tabindex="-1"><a class="header-anchor" href="#在群集内作为deployment运行" aria-hidden="true">#</a> 在群集内作为Deployment运行</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make deploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>验证 memcached-operator是否已启动并正在运行</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ kubectl get deployment -n memcached-operator-system
NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
memcached-operator-controller-manager   1/1     1            1           8m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建memcached-cr资源" tabindex="-1"><a class="header-anchor" href="#创建memcached-cr资源" aria-hidden="true">#</a> 创建Memcached CR资源</h2><p>更新 config/samples/cache_v1alpha1_memcached.yaml，并定义 spec 如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> cache.example.com/v1alpha1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Memcached
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> memcached<span class="token punctuation">-</span>sample
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">size</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">11211</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建CR:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> config/samples/cache_v1alpha1_memcached.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="清除" tabindex="-1"><a class="header-anchor" href="#清除" aria-hidden="true">#</a> 清除</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl delete <span class="token parameter variable">-f</span> config/samples/cache_v1alpha1_memcached.yaml
<span class="token function">make</span> undeploy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,53);function k(f,_){const n=s("ExternalLinkIcon");return d(),r("div",null,[o,u,m,e("ul",null,[e("li",null,[e("a",v,[a("安装Operator SDK CLI"),l(n)])]),p,h,b,g]),x])}const q=i(c,[["render",k],["__file","03.Operator开发.html.vue"]]);export{q as default};
