import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-7hJDOXrF.js";const t="/falser/imgs/2023/k8s/07/alerts.png",l="/falser/imgs/2023/k8s/07/alerts-update.png",p="/falser/imgs/2023/k8s/07/alertmanager.png",c={},o=e(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="alertmanager配置" tabindex="-1"><a class="header-anchor" href="#alertmanager配置" aria-hidden="true">#</a> alertmanager配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">resolve_timeout</span><span class="token punctuation">:</span> 5m <span class="token comment"># 设置解决（resolve）告警的超时时间为5分钟。</span>
<span class="token key atrule">route</span><span class="token punctuation">:</span>
  <span class="token key atrule">group_by</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;alertname&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 告警按照 alertname 分组。</span>
  <span class="token key atrule">group_wait</span><span class="token punctuation">:</span> 10s <span class="token comment"># 每个分组等待10秒，以便将相关的告警聚合在一起。</span>
  <span class="token key atrule">group_interval</span><span class="token punctuation">:</span> 10s <span class="token comment"># 每个分组之间的间隔时间为10秒。</span>
  <span class="token key atrule">repeat_interval</span><span class="token punctuation">:</span> 1h <span class="token comment"># 告警的重复间隔时间为1小时。</span>
  <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&#39;webhook&#39;</span> <span class="token comment"># 默认的接收器是 &#39;webhook&#39;。</span>
  <span class="token key atrule">routes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">match</span><span class="token punctuation">:</span>
      <span class="token key atrule">cluster</span><span class="token punctuation">:</span> <span class="token string">&#39;tlq-cn&#39;</span> <span class="token comment"># 满足条件的使用这个接收器</span>
    <span class="token key atrule">receiver</span><span class="token punctuation">:</span> <span class="token string">&#39;webhook&#39;</span>
<span class="token key atrule">receivers</span><span class="token punctuation">:</span> <span class="token comment"># 定义接收器</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&#39;webhook&#39;</span>
  <span class="token key atrule">webhook_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&#39;http://127.0.0.1:5001/&#39;</span>
<span class="token key atrule">inhibit_rules</span><span class="token punctuation">:</span> <span class="token comment"># 定义抑制规则，用于在某些条件下抑制告警</span>
  <span class="token punctuation">-</span> <span class="token key atrule">source_match</span><span class="token punctuation">:</span>
      <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;critical&#39;</span> <span class="token comment"># 如果源告警的严重性为 &#39;critical&#39;。</span>
    <span class="token key atrule">target_match</span><span class="token punctuation">:</span>
      <span class="token key atrule">severity</span><span class="token punctuation">:</span> <span class="token string">&#39;warning&#39;</span> <span class="token comment"># 如果目标告警的严重性为 &#39;warning&#39;</span>
    <span class="token key atrule">equal</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;alertname&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;instance&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 源告警和目标告警必须在这些标签上相等才会触发抑制。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prometheus配置" tabindex="-1"><a class="header-anchor" href="#prometheus配置" aria-hidden="true">#</a> Prometheus配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">scrape_interval</span><span class="token punctuation">:</span> 15s <span class="token comment"># 采集间隔为15秒。</span>
  <span class="token key atrule">evaluation_interval</span><span class="token punctuation">:</span> 15s <span class="token comment"># 评估间隔为15秒。</span>
<span class="token key atrule">rule_files</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> /home/prometheus/rule/<span class="token important">*.yml</span> <span class="token comment"># 下面配置的告警规则文件路径</span>
<span class="token key atrule">alerting</span><span class="token punctuation">:</span>
  <span class="token key atrule">alert_relabel_configs</span><span class="token punctuation">:</span> <span class="token comment"># : 配置了动态修改 alert 属性的规则。</span>
  <span class="token punctuation">-</span> <span class="token key atrule">source_labels</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>dc<span class="token punctuation">]</span> <span class="token comment"># 使用标签 dc 作为源标签。</span>
    <span class="token key atrule">regex</span><span class="token punctuation">:</span> (.+)\\d+ <span class="token comment"># 使用正则表达式从源标签中提取数据，并且去掉结尾的数字。</span>
    <span class="token key atrule">target_label</span><span class="token punctuation">:</span> dc1 <span class="token comment"># 将提取的数据赋值给目标标签 dc1。</span>
  <span class="token key atrule">alertmanagers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">static_configs</span><span class="token punctuation">:</span> <span class="token comment"># 静态配置，指定了 Alertmanager 的地址为 localhost:9093。</span>
    <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> localhost<span class="token punctuation">:</span><span class="token number">9093</span>
<span class="token key atrule">scrape_configs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;prometheus&#39;</span> <span class="token comment"># 任务名称。</span>
  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;localhost:9090&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 采集prometheus自身。</span>
<span class="token punctuation">-</span> <span class="token key atrule">job_name</span><span class="token punctuation">:</span> <span class="token string">&#39;node&#39;</span> <span class="token comment"># 任务名称。</span>
  <span class="token key atrule">static_configs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">targets</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;localhost:9100&#39;</span><span class="token punctuation">]</span> <span class="token comment"># 采集本机。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="告警规则" tabindex="-1"><a class="header-anchor" href="#告警规则" aria-hidden="true">#</a> 告警规则</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> alert.rules <span class="token comment"># 告警规则组名称</span>
    <span class="token key atrule">rules</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">alert</span><span class="token punctuation">:</span> InstanceDown <span class="token comment"># 告警的名称，命名为 InstanceDown</span>
        <span class="token key atrule">expr</span><span class="token punctuation">:</span> up == 0 <span class="token comment"># 触发告警的表达式，如果 up 的值为 0，表示实例处于宕机状态。</span>
        <span class="token key atrule">for</span><span class="token punctuation">:</span> 1m <span class="token comment"># 即当满足条件并持续1分钟时触发告警</span>
        <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># 标签，用于标识告警的一些元信息</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> critical <span class="token comment"># 告警的严重性标签，设置为 &#39;critical&#39;。</span>
        <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token comment"># 注释，提供更详细的描述信息。</span>
          <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $labels.instance }}: no data for 1 minute&quot;</span> <span class="token comment"># 摘要信息，描述实例在1分钟内没有数据。</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $labels.instance }} of job {{ $labels.job }} has been down for more than 1 minute.&quot;</span> <span class="token comment"># 描述信息，指明哪个作业的哪个实例在1分钟以上处于宕机状态。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动服务" tabindex="-1"><a class="header-anchor" href="#启动服务" aria-hidden="true">#</a> 启动服务</h2><h3 id="启动-prometheus" tabindex="-1"><a class="header-anchor" href="#启动-prometheus" aria-hidden="true">#</a> 启动 Prometheus</h3><p>参数<code>--web.enable-lifecycle</code>的作用是启用 Prometheus 的热加载功能，允许通过 HTTP 接口动态加载和卸载规则文件。 当我们修改了 Prometheus 的配置文件或者规则文件，需要重新加载配置文件，可以通过 POST 请求 <code>/-/reload</code> 接口实现。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
./prometheus <span class="token parameter variable">--config.file</span><span class="token operator">=</span>prometheus.yml --web.enable-lifecycle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动-alertmanager" tabindex="-1"><a class="header-anchor" href="#启动-alertmanager" aria-hidden="true">#</a> 启动 Alertmanager</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动服务</span>
./alertmanager <span class="token parameter variable">--config.file</span><span class="token operator">=</span>alertmanager.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们修改了Alertmanager的配置文件，需要重新加载配置文件，可以通过 POST 请求 <code>/-/reload</code> 接口实现。</p><h2 id="查看prometheus" tabindex="-1"><a class="header-anchor" href="#查看prometheus" aria-hidden="true">#</a> 查看Prometheus</h2><p>在浏览器输入localhost:9090，即可看到Prometheus的监控页面。点击alerts，可以看到当前告警信息。如下图所示 <img src="`+t+`" alt="Alerts" loading="lazy"></p><h3 id="状态值" tabindex="-1"><a class="header-anchor" href="#状态值" aria-hidden="true">#</a> 状态值</h3><ul><li>Inactive（未激活）：Alert 的初始状态，表示规则条件尚未满足。</li><li>Pending（等待）：表示 Alert 已经被触发，但是在确认一定时间内保持在 Pending 状态，以防止短时间内的噪声或瞬时问题。</li><li>Firing（触发）：表示 Alert 已经被确认，规则条件持续满足。</li></ul><h3 id="热加载" tabindex="-1"><a class="header-anchor" href="#热加载" aria-hidden="true">#</a> 热加载</h3><p>修改Prometheus规则文件,将expr表达式修改<code>up{job=&#39;broker&#39;}</code></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">groups</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> alert.rules <span class="token comment"># 告警规则组名称</span>
    <span class="token key atrule">rules</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">alert</span><span class="token punctuation">:</span> InstanceDown <span class="token comment"># 告警的名称，命名为 InstanceDown</span>
        <span class="token key atrule">expr</span><span class="token punctuation">:</span> up<span class="token punctuation">{</span>job=&#39;broker&#39;<span class="token punctuation">}</span> == 1 <span class="token comment"># 触发告警的表达式，如果 up{job=&#39;broker&#39;} 的值为 1，表示实例处于启动状态。</span>
        <span class="token key atrule">for</span><span class="token punctuation">:</span> 1m <span class="token comment"># 即当满足条件并持续1分钟时触发告警</span>
        <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># 标签，用于标识告警的一些元信息</span>
          <span class="token key atrule">severity</span><span class="token punctuation">:</span> critical <span class="token comment"># 告警的严重性标签，设置为 &#39;critical&#39;。</span>
        <span class="token key atrule">annotations</span><span class="token punctuation">:</span> <span class="token comment"># 注释，提供更详细的描述信息。</span>
          <span class="token key atrule">summary</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $labels.instance }}: no data for 1 minute&quot;</span> <span class="token comment"># 摘要信息，描述实例在1分钟内没有数据。</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ $labels.instance }} of job {{ $labels.job }} has been down for more than 1 minute.&quot;</span> <span class="token comment"># 描述信息，指明哪个作业的哪个实例在1分钟以上处于宕机状态。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改后调用POST请求<code>http://localhost:9090/-/reload</code>，即可更新Prometheus的规则文件。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> POST http://localhost:9090/-/reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查看alerts，可以看到告警信息已经更新了。 <img src="`+l+'" alt="Alerts" loading="lazy"></p><h2 id="查看alertmanager" tabindex="-1"><a class="header-anchor" href="#查看alertmanager" aria-hidden="true">#</a> 查看Alertmanager</h2><p>在浏览器输入localhost:9093，即可看到Alertmanager的监控页面。点击alerts，可以看到当前告警信息。如下图所示 <img src="'+p+'" alt="Alerts" loading="lazy"></p><p>可以看到告警信息已经发送到Alertmanager，并且被Alertmanager处理了。</p>',27),i=[o];function r(u,d){return s(),a("div",null,i)}const v=n(c,[["render",r],["__file","07.prometheus告警实战.html.vue"]]);export{v as default};
