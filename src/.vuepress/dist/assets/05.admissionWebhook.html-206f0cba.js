import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c as o,a as s,b as n,e as p,f as a}from"./app-3f0b6e35.js";const c={},r=a(`<h2 id="什么是准入-webhook" tabindex="-1"><a class="header-anchor" href="#什么是准入-webhook" aria-hidden="true">#</a> 什么是准入 Webhook？</h2><p>准入 Webhook 是一种用于接收准入请求并对其进行处理的 HTTP 回调机制。 可以定义两种类型的准入 Webhook， 即验证性质的准入 Webhook 和变更性质的准入 Webhook。 变更性质的准入 Webhook 会先被调用。它们可以修改发送到 API 服务器的对象以执行自定义的设置默认值操作。</p><p>在完成了所有对象修改并且 API 服务器也验证了所传入的对象之后， 验证性质的 Webhook 会被调用，并通过拒绝请求的方式来强制实施自定义的策略。</p><h2 id="配置准入webhook" tabindex="-1"><a class="header-anchor" href="#配置准入webhook" aria-hidden="true">#</a> 配置准入WebHook</h2><p>你可以通过 <code>ValidatingWebhookConfiguration</code> 或者 <code>MutatingWebhookConfiguration</code> 动态配置哪些资源要被哪些准入 Webhook 处理。</p><p>以下是一个 <code>MutatingWebhookConfiguration</code> 示例，<code>ValidatingWebhookConfiguration Webhook</code> 配置与此类似。 有关每个配置字段的详细信息，请参阅 Webhook 配置部分。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> admissionregistration.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> MutatingWebhookConfiguration
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;pod-policy.example.com&quot;</span>
<span class="token key atrule">webhooks</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;pod-policy.example.com&quot;</span>
  <span class="token key atrule">objectSelector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">hello</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">apiVersions</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">operations</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CREATE&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;pods&quot;</span><span class="token punctuation">]</span>
    <span class="token key atrule">scope</span><span class="token punctuation">:</span> <span class="token string">&quot;Namespaced&quot;</span>
  <span class="token key atrule">clientConfig</span><span class="token punctuation">:</span>
    <span class="token key atrule">service</span><span class="token punctuation">:</span>
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token string">&quot;example-namespace&quot;</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;example-service&quot;</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /mutate
  <span class="token key atrule">admissionReviewVersions</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">]</span>
  <span class="token key atrule">sideEffects</span><span class="token punctuation">:</span> None
  <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当一个 API 服务器收到与 rules 相匹配的请求时， 该 API 服务器将按照 clientConfig 中指定的方式向 Webhook 发送一个 admissionReview 请求。</p><p>创建 Webhook 配置后，系统将花费几秒钟使新配置生效。</p><p>接下来演示如何开发一个自定义Webhook API并使用</p><h3 id="开发go-api-服务端" tabindex="-1"><a class="header-anchor" href="#开发go-api-服务端" aria-hidden="true">#</a> 开发Go API 服务端</h3>`,11),d={href:"https://github.com/didil/k8s-hello-mutating-webhook",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-golang line-numbers-mode" data-ext="golang"><pre class="language-golang"><code>func (app *App) HandleMutate(w http.ResponseWriter, r *http.Request) {
	admissionReview := &amp;admissionv1.AdmissionReview{}

	// read the AdmissionReview from the request json body
	err := readJSON(r, admissionReview)
	if err != nil {
		app.HandleError(w, r, err)
		return
	}

	// unmarshal the pod from the AdmissionRequest
	pod := &amp;corev1.Pod{}
	if err := json.Unmarshal(admissionReview.Request.Object.Raw, pod); err != nil {
		app.HandleError(w, r, fmt.Errorf(&quot;unmarshal to pod: %v&quot;, err))
		return
	}

	// add the volume to the pod
	pod.Spec.Volumes = append(pod.Spec.Volumes, corev1.Volume{
		Name: &quot;hello-volume&quot;,
		VolumeSource: corev1.VolumeSource{
			ConfigMap: &amp;corev1.ConfigMapVolumeSource{
				LocalObjectReference: corev1.LocalObjectReference{
					Name: &quot;hello-configmap&quot;,
				},
			},
		},
	})

	// add volume mount to all containers in the pod
	for i := 0; i &lt; len(pod.Spec.Containers); i++ {
		pod.Spec.Containers[i].VolumeMounts = append(pod.Spec.Containers[i].VolumeMounts, corev1.VolumeMount{
			Name:      &quot;hello-volume&quot;,
			MountPath: &quot;/etc/config&quot;,
		})
	}

	containersBytes, err := json.Marshal(&amp;pod.Spec.Containers)
	if err != nil {
		app.HandleError(w, r, fmt.Errorf(&quot;marshall containers: %v&quot;, err))
		return
	}

	volumesBytes, err := json.Marshal(&amp;pod.Spec.Volumes)
	if err != nil {
		app.HandleError(w, r, fmt.Errorf(&quot;marshall volumes: %v&quot;, err))
		return
	}

	// build json patch
	patch := []JSONPatchEntry{
		{
			OP:    &quot;add&quot;,
			Path:  &quot;/metadata/labels/hello-added&quot;,
			Value: []byte(\`&quot;OK&quot;\`),
		},
		{
			OP:    &quot;replace&quot;,
			Path:  &quot;/spec/containers&quot;,
			Value: containersBytes,
		},
		{
			OP:    &quot;replace&quot;,
			Path:  &quot;/spec/volumes&quot;,
			Value: volumesBytes,
		},
	}

	patchBytes, err := json.Marshal(&amp;patch)
	if err != nil {
		app.HandleError(w, r, fmt.Errorf(&quot;marshall jsonpatch: %v&quot;, err))
		return
	}

	patchType := admissionv1.PatchTypeJSONPatch

	// build admission response
	admissionResponse := &amp;admissionv1.AdmissionResponse{
		UID:       admissionReview.Request.UID,
		Allowed:   true,
		Patch:     patchBytes,
		PatchType: &amp;patchType,
	}

	respAdmissionReview := &amp;admissionv1.AdmissionReview{
		TypeMeta: metav1.TypeMeta{
			Kind:       &quot;AdmissionReview&quot;,
			APIVersion: &quot;admission.k8s.io/v1&quot;,
		},
		Response: admissionResponse,
	}

	jsonOk(w, &amp;respAdmissionReview)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码主要做了以下事情：</p><ol><li>将来自 Http 请求中的 AdmissionReview json 输入反序列化。</li><li>读取 Pod 的 spec 信息。</li><li>将 hello-configmap 作为数据源，添加 hello-volume 卷到 Pod。</li><li>挂载卷至 Pod 容器中。</li><li>以 JSON PATCH 的形式记录变更信息，包括卷的变更，卷挂载信息的变更。顺道为容器添加一个“hello-added=true”的标签。</li><li>构建 json 格式的响应结果，结果中包含了这次请求中的被修改的部分。</li></ol><h3 id="创建k8s资源" tabindex="-1"><a class="header-anchor" href="#创建k8s资源" aria-hidden="true">#</a> 创建k8s资源</h3><p>在webhook项目下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ kubectl apply <span class="token parameter variable">-k</span> k8s/deployment
<span class="token comment"># 日志</span>
configmap/hello-configmap created
service/hello-webhook-service created
mutatingwebhookconfiguration.admissionregistration.k8s.io/hello-webhook.leclouddev.com created

$ kubectl apply <span class="token parameter variable">-k</span> k8s/other
<span class="token comment"># 日志</span>
configmap/hello-configmap created
service/hello-webhook-service created
mutatingwebhookconfiguration.admissionregistration.k8s.io/hello-webhook.leclouddev.com created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成tls证书" tabindex="-1"><a class="header-anchor" href="#生成tls证书" aria-hidden="true">#</a> 生成TLS证书</h3><p>Webhook API 服务器需要通过 TLS 方式通信。如果想将其部署至 Kubernetes 集群内，我们还需要证书。原作者的仓库使用的kubectl版本较低，原作者是通过job生成pod来生成相关证书的，我们可以直接执行脚本来生成，脚本内容如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/env sh</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token function-name function">usage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF
Generate certificate suitable for use with any Kubernetes Mutating Webhook.
This script uses k8s&#39; CertificateSigningRequest API to a generate a
certificate signed by k8s CA suitable for use with any Kubernetes Mutating Webhook service pod.
This requires permissions to create and approve CSR. See
https://kubernetes.io/docs/tasks/tls/managing-tls-in-a-cluster for
detailed explantion and additional instructions.
The server key/cert k8s CA cert are stored in a k8s secret.
usage: <span class="token variable">\${0}</span> [OPTIONS]
The following flags are required.
    --service          Service name of webhook.
    --webhook          Webhook config name.
    --namespace        Namespace where webhook service and secret reside.
    --secret           Secret name for CA certificate and server certificate/key pair.
The following flags are optional.
    --webhook-kind     Webhook kind, either MutatingWebhookConfiguration or
                       ValidatingWebhookConfiguration (defaults to MutatingWebhookConfiguration)
EOF</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-gt</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">case</span> <span class="token variable">\${1}</span> <span class="token keyword">in</span>
      --service<span class="token punctuation">)</span>
          <span class="token assign-left variable">service</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
          <span class="token builtin class-name">shift</span>
          <span class="token punctuation">;</span><span class="token punctuation">;</span>
      --webhook<span class="token punctuation">)</span>
          <span class="token assign-left variable">webhook</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
          <span class="token builtin class-name">shift</span>
          <span class="token punctuation">;</span><span class="token punctuation">;</span>
      --secret<span class="token punctuation">)</span>
          <span class="token assign-left variable">secret</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
          <span class="token builtin class-name">shift</span>
          <span class="token punctuation">;</span><span class="token punctuation">;</span>
      --namespace<span class="token punctuation">)</span>
          <span class="token assign-left variable">namespace</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
          <span class="token builtin class-name">shift</span>
          <span class="token punctuation">;</span><span class="token punctuation">;</span>
      --webhook-kind<span class="token punctuation">)</span>
          <span class="token assign-left variable">kind</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$2</span>&quot;</span>
          <span class="token builtin class-name">shift</span>
          <span class="token punctuation">;</span><span class="token punctuation">;</span>
      *<span class="token punctuation">)</span>
          usage
          <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token keyword">esac</span>
  <span class="token builtin class-name">shift</span>
<span class="token keyword">done</span>

<span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${service}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;ERROR: --service flag is required&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${webhook}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;ERROR: --webhook flag is required&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${secret}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;ERROR: --secret flag is required&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">\${namespace}</span>&quot;</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&quot;ERROR: --namespace flag is required&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>

<span class="token assign-left variable">fullServiceDomain</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${service}</span>.<span class="token variable">\${namespace}</span>.svc&quot;</span>

<span class="token comment"># THE CN has a limit of 64 characters. We could remove the namespace and svc</span>
<span class="token comment"># and rely on the Subject Alternative Name (SAN), but there is a bug in EKS</span>
<span class="token comment"># that discards the SAN when signing the certificates.</span>
<span class="token comment">#</span>
<span class="token comment"># https://github.com/awslabs/amazon-eks-ami/issues/341</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${<span class="token operator">#</span>fullServiceDomain}</span> <span class="token parameter variable">-gt</span> <span class="token number">64</span> <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;ERROR: common name exceeds the 64 character limit: <span class="token variable">\${fullServiceDomain}</span>&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-x</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> openssl<span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;ERROR: openssl not found&quot;</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">csrName</span><span class="token operator">=</span><span class="token variable">\${service}</span><span class="token builtin class-name">.</span><span class="token variable">\${namespace}</span>
<span class="token assign-left variable">tmpdir</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mktemp <span class="token parameter variable">-d</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;creating certs in tmpdir <span class="token variable">\${tmpdir}</span> &quot;</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;&gt;</span> <span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/csr.conf&quot;</span></span>
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[req_distinguished_name]
[ v3_req ]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation, digitalSignature, keyEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names
[alt_names]
DNS.1 = <span class="token variable">\${service}</span>
DNS.2 = <span class="token variable">\${service}</span>.<span class="token variable">\${namespace}</span>
DNS.3 = <span class="token variable">\${fullServiceDomain}</span>
DNS.4 = <span class="token variable">\${fullServiceDomain}</span>.cluster.local
EOF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;/CN=<span class="token variable">\${fullServiceDomain}</span>&quot;</span>
openssl genrsa <span class="token parameter variable">-out</span> <span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/server-key.pem&quot;</span> <span class="token number">2048</span>
<span class="token comment">#openssl req -new -key &quot;\${tmpdir}/server-key.pem&quot; -subj &quot;/CN=\${fullServiceDomain}&quot; -out &quot;\${tmpdir}/server.csr&quot; -config &quot;\${tmpdir}/csr.conf&quot;</span>
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> <span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/server-key.pem&quot;</span> <span class="token parameter variable">-subj</span> <span class="token string">&quot;/CN=system:node:<span class="token variable">\${fullServiceDomain}</span>;/O=system:nodes&quot;</span> <span class="token parameter variable">-out</span> <span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/server.csr&quot;</span> <span class="token parameter variable">-config</span> <span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/csr.conf&quot;</span>
<span class="token builtin class-name">set</span> +e
<span class="token comment"># clean-up any previously created CSR for our service. Ignore errors if not present.</span>
<span class="token keyword">if</span> kubectl delete csr <span class="token string">&quot;<span class="token variable">\${csrName}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;WARN: Previous CSR was found and removed.&quot;</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># create server cert/key CSR and send it to k8s api</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> kubectl create <span class="token parameter variable">-f</span> -</span>
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: <span class="token variable">\${csrName}</span>
spec:
  #signerName: kubernetes.io/kube-apiserver-client
  signerName: kubernetes.io/kubelet-serving
  groups:
  - system:authenticated
  request: <span class="token variable"><span class="token variable">$(</span>base64 <span class="token operator">&lt;</span> <span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/server.csr&quot;</span> <span class="token operator">|</span> <span class="token function">tr</span> <span class="token parameter variable">-d</span> <span class="token string">&#39;\\n&#39;</span><span class="token variable">)</span></span>
  usages:
  - server auth
  - digital signature
  - key encipherment
EOF</span>

<span class="token builtin class-name">set</span> +e
<span class="token comment"># verify CSR has been created</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">if</span> kubectl get csr <span class="token string">&quot;<span class="token variable">\${csrName}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;CertificateSigningRequest create succsee&quot;</span>
      <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># approve and fetch the signed certificate . !! not working with k8s 1.19.1, running the command separately outside of the container / node</span>
<span class="token builtin class-name">set</span> +e
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token keyword">if</span> kubectl certificate approve <span class="token string">&quot;<span class="token variable">\${csrName}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
     <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${csrName}</span> certificate approve&quot;</span>
     <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token builtin class-name">set</span> +e
<span class="token comment"># verify certificate has been signed</span>
<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$i</span>&quot;</span> <span class="token parameter variable">-ne</span> <span class="token number">10</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
  <span class="token assign-left variable">serverCert</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>kubectl get csr <span class="token string">&quot;<span class="token variable">\${csrName}</span>&quot;</span> <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.status.certificate}&#39;</span><span class="token variable">)</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${serverCert}</span>&quot;</span> <span class="token operator">!=</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
  <span class="token function">sleep</span> <span class="token number">5</span>
  <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token variable">))</span></span>
<span class="token keyword">done</span>

<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">\${serverCert}</span>&quot;</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;ERROR: After approving csr <span class="token variable">\${csrName}</span>, the signed certificate did not appear on the resource. Giving up after 10 attempts.&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${serverCert}</span>&quot;</span> <span class="token operator">|</span> openssl base64 <span class="token parameter variable">-d</span> <span class="token parameter variable">-A</span> <span class="token parameter variable">-out</span> <span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/server-cert.pem&quot;</span>

<span class="token comment"># create the secret with CA cert and server cert/key</span>
kubectl create secret tls <span class="token string">&quot;<span class="token variable">\${secret}</span>&quot;</span> <span class="token punctuation">\\</span>
      <span class="token parameter variable">--key</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/server-key.pem&quot;</span> <span class="token punctuation">\\</span>
      <span class="token parameter variable">--cert</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${tmpdir}</span>/server-cert.pem&quot;</span> <span class="token punctuation">\\</span>
      --dry-run <span class="token parameter variable">-o</span> yaml <span class="token operator">|</span>
  kubectl <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">\${namespace}</span>&quot;</span> apply <span class="token parameter variable">-f</span> -

<span class="token comment">#caBundle=$(base64 &lt; /run/secrets/kubernetes.io/serviceaccount/ca.crt  | tr -d &#39;\\n&#39;)</span>
<span class="token assign-left variable">caBundle</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $<span class="token punctuation">{</span>tmpdir<span class="token punctuation">}</span>/server-cert.pem<span class="token variable">)</span></span>
<span class="token builtin class-name">set</span> +e
<span class="token comment"># Patch the webhook adding the caBundle. It uses an \`add\` operation to avoid errors in OpenShift because it doesn&#39;t set</span>
<span class="token comment"># a default value of empty string like Kubernetes. Instead, it doesn&#39;t create the caBundle key.</span>
<span class="token comment"># As the webhook is not created yet (the process should be done manually right after this job is created),</span>
<span class="token comment"># the job will not end until the webhook is patched.</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;INFO: Trying to patch webhook adding the caBundle.&quot;</span>
  <span class="token keyword">if</span> kubectl patch <span class="token string">&quot;<span class="token variable">\${kind<span class="token operator">:-</span>mutatingwebhookconfiguration}</span>&quot;</span> <span class="token string">&quot;<span class="token variable">\${webhook}</span>&quot;</span> <span class="token parameter variable">--type</span><span class="token operator">=</span><span class="token string">&#39;json&#39;</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;[{&#39;op&#39;: &#39;add&#39;, &#39;path&#39;: &#39;/webhooks/0/clientConfig/caBundle&#39;, &#39;value&#39;:&#39;<span class="token variable">\${serverCert}</span>&#39;}]&quot;</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">break</span>
  <span class="token keyword">fi</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;INFO: webhook not patched. Retrying in 5s...&quot;</span>
  <span class="token function">sleep</span> <span class="token number">5</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行脚本生成证书：</p><ul><li>--service：对应webhook api服务的service name</li><li>--webhook：我们创建的MutatingWebhookConfiguration的webhooks的name</li><li>--secret：我们的webhook api服务pod所需要挂载的secret的名称</li><li>--namespace：命名空间</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./generate_certificate.sh  <span class="token parameter variable">--service</span> hello-webhook-service <span class="token parameter variable">--webhook</span> hello-webhook.leclouddev.com <span class="token parameter variable">--secret</span> hello-tls-secret <span class="token parameter variable">--namespace</span> default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 输出日志</span>
creating certs <span class="token keyword">in</span> tmpdir /var/folders/m6/11gz2m9x1m11lkts0h83x8800000gn/T/tmp.ebrOVBA0 
/CN<span class="token operator">=</span>hello-webhook-service.default.svc
Error from server <span class="token punctuation">(</span>NotFound<span class="token punctuation">)</span>: certificatesigningrequests.certificates.k8s.io <span class="token string">&quot;hello-webhook-service.default&quot;</span> not found
certificatesigningrequest.certificates.k8s.io/hello-webhook-service.default created
NAME                            AGE   SIGNERNAME                      REQUESTOR          REQUESTEDDURATION   CONDITION
hello-webhook-service.default   0s    kubernetes.io/kubelet-serving   kubernetes-admin   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>              Pending
CertificateSigningRequest create succsee
certificatesigningrequest.certificates.k8s.io/hello-webhook-service.default approved
hello-webhook-service.default certificate approve
W1122 <span class="token number">10</span>:40:41.297220   <span class="token number">55111</span> helpers.go:692<span class="token punctuation">]</span> --dry-run is deprecated and can be replaced with --dry-run<span class="token operator">=</span>client.
secret/hello-tls-secret configured
INFO: Trying to patch webhook adding the caBundle.
mutatingwebhookconfiguration.admissionregistration.k8s.io/hello-webhook.leclouddev.com patched
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建一个带hello-true标签的pod" tabindex="-1"><a class="header-anchor" href="#创建一个带hello-true标签的pod" aria-hidden="true">#</a> 创建一个带hello=true标签的pod</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl run busybox-1 <span class="token parameter variable">--image</span><span class="token operator">=</span>busybox  <span class="token parameter variable">--restart</span><span class="token operator">=</span>Never <span class="token parameter variable">-l</span><span class="token operator">=</span>app<span class="token operator">=</span>busybox,hello<span class="token operator">=</span>true -- <span class="token function">sleep</span> <span class="token number">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看webhook api的pod日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl logs hello-webhook-deployment-5957bbb8bf-mkrzv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Listening on port <span class="token number">8000</span>
<span class="token number">2023</span>/11/22 02:46:16 <span class="token punctuation">[</span>hello-webhook-deployment-5957bbb8bf-mkrzv/JbYpz7vK1i-000001<span class="token punctuation">]</span> <span class="token string">&quot;POST https://hello-webhook-service.default.svc:443/mutate?timeout=10s HTTP/1.1&quot;</span> from <span class="token number">10.244</span>.235.192:46335 - <span class="token number">200</span> 1393B <span class="token keyword">in</span> <span class="token number">1</span>.844861ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看busybox-1的volume,可以看到cm已经挂载进去了</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultMode</span><span class="token punctuation">:</span> <span class="token number">420</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>configmap
    <span class="token key atrule">name</span><span class="token punctuation">:</span> hello<span class="token punctuation">-</span>volume
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建一个不带hello-true标签的则不会挂载" tabindex="-1"><a class="header-anchor" href="#创建一个不带hello-true标签的则不会挂载" aria-hidden="true">#</a> 创建一个不带hello=true标签的则不会挂载</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl run busybox-2 <span class="token parameter variable">--image</span><span class="token operator">=</span>busybox <span class="token parameter variable">--restart</span><span class="token operator">=</span>Never <span class="token parameter variable">-l</span><span class="token operator">=</span>app<span class="token operator">=</span>busybox -- <span class="token function">sleep</span> <span class="token number">3600</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看busybox-2的yaml并没有对应的volume</p>`,24);function v(m,k){const e=t("ExternalLinkIcon");return l(),o("div",null,[r,s("p",null,[n("代码来自"),s("a",d,[n("Github仓库"),p(e)])]),u])}const g=i(c,[["render",v],["__file","05.admissionWebhook.html.vue"]]);export{g as default};
