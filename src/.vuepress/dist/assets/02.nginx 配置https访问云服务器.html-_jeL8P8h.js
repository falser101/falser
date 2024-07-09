import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as d,c as r,a as e,b as n,e as c,f as s}from"./app-7k_SbfeC.js";const t={},v=s('<h2 id="第一步" tabindex="-1"><a class="header-anchor" href="#第一步" aria-hidden="true">#</a> 第一步</h2><p>首先自己购买一个服务器</p><h2 id="第二步" tabindex="-1"><a class="header-anchor" href="#第二步" aria-hidden="true">#</a> 第二步</h2><p>购买一个域名挂载到服务器，各个域名服务商有详细的文档这里就不再写了</p><h2 id="第三步" tabindex="-1"><a class="header-anchor" href="#第三步" aria-hidden="true">#</a> 第三步</h2>',5),o=e("img",{src:"https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/03/28/kuangstudy6d0a31df-a8f5-467b-b518-24ac70e870f2.png",alt:"",loading:"lazy"},null,-1),u={href:"https://cloud.tencent.com/document/product/400/4142#ManualVerification",target:"_blank",rel:"noopener noreferrer"},m=s(`<h1 id="编写default-conf" tabindex="-1"><a class="header-anchor" href="#编写default-conf" aria-hidden="true">#</a> 编写default.conf</h1><p>下面是我自己的证书和域名</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>server {
    #SSL 访问端口号为 443
    listen 443 ssl;
    #填写绑定证书的域名
    server_name falser.top;
    #证书文件名称
    ssl_certificate 1_falser.top_bundle.crt;
    #私钥文件名称
    ssl_certificate_key 2_falser.top.key;
    ssl_session_timeout 5m;
    #请按照以下协议配置
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    #请按照以下套件配置，配置加密套件，写法遵循 openssl 标准。
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    location / {
    #网站主页路径。此路径仅供参考，具体请您按照实际目录操作。
        root html;
        index  index.html index.htm;
    }
}

server {
	listen 80;
	#填写绑定证书的域名
	server_name falser.top;
	#把http的域名请求转成https
	return 301 https://$host$request_uri;
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编写dockerfile" tabindex="-1"><a class="header-anchor" href="#编写dockerfile" aria-hidden="true">#</a> 编写Dockerfile</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 设置基础镜像
FROM nginx
# 定义作者
MAINTAINER falser &lt;1023535569@qq.com&gt;
# 将dist文件中的内容复制到 /etc/nginx/html/ 这个目录下面
COPY dist/  /etc/nginx/html/
#用本地的 default.conf 配置来替换nginx镜像里的默认配置
COPY default.conf /etc/nginx/conf.d/default.conf
#将证书拷贝到docker镜像中的/etc/nginx/目录下
COPY 1_falser.top_bundle.crt /etc/nginx/
COPY 2_falser.top.key /etc/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建镜像并启动" tabindex="-1"><a class="header-anchor" href="#创建镜像并启动" aria-hidden="true">#</a> 创建镜像并启动</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> falser <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">--name</span> fblog falser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动成功 <img src="https://kuangstudy.oss-cn-beijing.aliyuncs.com/bbs/2021/03/28/kuangstudy610b21ad-2256-4b1c-b387-a47eb35df8e5.png" alt="启动成功" loading="lazy"></p>`,9);function b(p,h){const a=l("ExternalLinkIcon");return d(),r("div",null,[v,e("p",null,[n("申请ssl证书并且将证书和需要部署的静态页面上传到服务器如下图 "),o,e("a",u,[n("腾讯SSL证书域名验证指引"),c(a)])]),m])}const g=i(t,[["render",b],["__file","02.nginx 配置https访问云服务器.html.vue"]]);export{g as default};
