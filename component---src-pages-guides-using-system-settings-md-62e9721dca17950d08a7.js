"use strict";(self.webpackChunkadobe_io_runtime=self.webpackChunkadobe_io_runtime||[]).push([[7849],{88889:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return s}});var a=n(87462),i=n(63366),r=(n(15007),n(64983)),l=n(91515),m=["components"],o={},d={_frontmatter:o},u=l.Z;function s(e){var t=e.components,n=(0,i.Z)(e,m);return(0,r.mdx)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"system-settings"},"System Settings"),(0,r.mdx)("p",null,"When creating actions or debugging issues, it is important to know the system settings and limitations. Here are the ones you should consider when designing your actions."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Limit"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"),(0,r.mdx)("th",{parentName:"tr",align:null},"Configurable"),(0,r.mdx)("th",{parentName:"tr",align:null},"Default"),(0,r.mdx)("th",{parentName:"tr",align:null},"Range"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"timeout"),(0,r.mdx)("td",{parentName:"tr",align:null},"A container is not allowed to run longer than N milliseconds. Blocking calls (like web actions) can't run longer than 60,000 milliseconds (1 minute). Non-blocking calls can run up to 3,600,000 milliseconds"),(0,r.mdx)("td",{parentName:"tr",align:null},"per action"),(0,r.mdx)("td",{parentName:"tr",align:null},"60,000 milliseconds"),(0,r.mdx)("td",{parentName:"tr",align:null},"100ms - 3,600,000ms")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"memory"),(0,r.mdx)("td",{parentName:"tr",align:null},"A container is not allowed to allocate more than N MB of memory"),(0,r.mdx)("td",{parentName:"tr",align:null},"per action"),(0,r.mdx)("td",{parentName:"tr",align:null},"256MB"),(0,r.mdx)("td",{parentName:"tr",align:null},"128MB - 4096MB")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"minuteRate (actions)"),(0,r.mdx)("td",{parentName:"tr",align:null},"no more than N actions may be invoked per namespace per minute. If exceeded, the error is ",(0,r.mdx)("inlineCode",{parentName:"td"},"429: TOO MANY REQUESTS")),(0,r.mdx)("td",{parentName:"tr",align:null},"not configurable, per namespace"),(0,r.mdx)("td",{parentName:"tr",align:null},"600/minute"),(0,r.mdx)("td",{parentName:"tr",align:null},"600/minute")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"minuteRate (web actions with extra logging)"),(0,r.mdx)("td",{parentName:"tr",align:null},"no more than N web actions may be invoked with the header ",(0,r.mdx)("inlineCode",{parentName:"td"},"X-OW_EXTRA-LOGGING: on")," per namespace per minute. If exceeded, the error is ",(0,r.mdx)("inlineCode",{parentName:"td"},"429: TOO MANY REQUESTS")),(0,r.mdx)("td",{parentName:"tr",align:null},"not configurable, per namespace"),(0,r.mdx)("td",{parentName:"tr",align:null},"30/minute"),(0,r.mdx)("td",{parentName:"tr",align:null},"30/minute")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"logs"),(0,r.mdx)("td",{parentName:"tr",align:null},"A container is not allowed to write more than N MB to stdout"),(0,r.mdx)("td",{parentName:"tr",align:null},"per action"),(0,r.mdx)("td",{parentName:"tr",align:null},"10MB"),(0,r.mdx)("td",{parentName:"tr",align:null},"0MB - 10MB")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"concurrent"),(0,r.mdx)("td",{parentName:"tr",align:null},"No more than N activations may be submitted per namespace either executing or queued for execution. If exceeded, the error is ",(0,r.mdx)("inlineCode",{parentName:"td"},"429: TOO MANY REQUESTS")),(0,r.mdx)("td",{parentName:"tr",align:null},"Not configurable, per namespace"),(0,r.mdx)("td",{parentName:"tr",align:null},"100"),(0,r.mdx)("td",{parentName:"tr",align:null},"100")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"action/container concurrency"),(0,r.mdx)("td",{parentName:"tr",align:null},"The number of action invocations send to the same container in parallel"),(0,r.mdx)("td",{parentName:"tr",align:null},"per action"),(0,r.mdx)("td",{parentName:"tr",align:null},"200"),(0,r.mdx)("td",{parentName:"tr",align:null},"1 - 500")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"codeSize"),(0,r.mdx)("td",{parentName:"tr",align:null},"The maximum size of the action including dependencies, archived"),(0,r.mdx)("td",{parentName:"tr",align:null},"not configurable, per action"),(0,r.mdx)("td",{parentName:"tr",align:null},"22MB"),(0,r.mdx)("td",{parentName:"tr",align:null},"0MB - 22MB")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"parameters"),(0,r.mdx)("td",{parentName:"tr",align:null},"The maximum size of the parameters that can be attached"),(0,r.mdx)("td",{parentName:"tr",align:null},"not configurable, per action/package/trigger"),(0,r.mdx)("td",{parentName:"tr",align:null},"1MB"),(0,r.mdx)("td",{parentName:"tr",align:null},"0 - 1MB")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"payload"),(0,r.mdx)("td",{parentName:"tr",align:null},"The maximum POST content size plus any carried parameters for an action invocation or trigger firing"),(0,r.mdx)("td",{parentName:"tr",align:null},"not configurable, per action/trigger"),(0,r.mdx)("td",{parentName:"tr",align:null},"1MB"),(0,r.mdx)("td",{parentName:"tr",align:null},"0 - 1MB")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"result"),(0,r.mdx)("td",{parentName:"tr",align:null},"The maximum size of the action result"),(0,r.mdx)("td",{parentName:"tr",align:null},"not configurable, per action"),(0,r.mdx)("td",{parentName:"tr",align:null},"1MB"),(0,r.mdx)("td",{parentName:"tr",align:null})),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"minuteRate (triggers)"),(0,r.mdx)("td",{parentName:"tr",align:null},"No more than N triggers may be fired per namespace per minute. If exceeded, the error is ",(0,r.mdx)("inlineCode",{parentName:"td"},"429: TOO MANY REQUESTS")),(0,r.mdx)("td",{parentName:"tr",align:null},"not configurable, per namespace"),(0,r.mdx)("td",{parentName:"tr",align:null},"600/minute"),(0,r.mdx)("td",{parentName:"tr",align:null},"600/minute")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"actionsSequenceMaxlength"),(0,r.mdx)("td",{parentName:"tr",align:null},"No more than N actions can be chained in a sequence"),(0,r.mdx)("td",{parentName:"tr",align:null},"not configurable, per namespace"),(0,r.mdx)("td",{parentName:"tr",align:null},"50"),(0,r.mdx)("td",{parentName:"tr",align:null},"50")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"list"),(0,r.mdx)("td",{parentName:"tr",align:null},"The maximum number of entities that can be listed"),(0,r.mdx)("td",{parentName:"tr",align:null},"per list request"),(0,r.mdx)("td",{parentName:"tr",align:null},"30"),(0,r.mdx)("td",{parentName:"tr",align:null},"1 - 50")))),(0,r.mdx)("h2",{id:"sequences-and-timeout"},"Sequences and Timeout"),(0,r.mdx)("p",null,"Sequences that are invoked in a blocking manner (for example web actions have a hard limit for timeout and this limit can't be changed 60 seconds. Essentially, adding up the execution time taken by each action has to be 60 seconds or less."),(0,r.mdx)("p",null,"Although the system lets you set a higher timeout on the sequence, this value is ignored and the 60 seconds limit per action is enforced."),(0,r.mdx)("p",null,"If one of your actions needs more than 60 seconds, then the only solution is to invoke a non-blocking action using the OpenWhisk npm module. So, using the same example, you could have ",(0,r.mdx)("inlineCode",{parentName:"p"},"actionA")," calling another action in a non-blocking manner. You can see an example of how to do this ",(0,r.mdx)("a",{parentName:"p",href:"asynchronous_calls.md"},"here"),"."),(0,r.mdx)("h2",{id:"using-pre-warm-containers-or-optimizing-against-cold-starts"},"Using pre-warm containers or optimizing against cold-starts"),(0,r.mdx)("p",null,"You can maximize your chances of having the best low latency possible by creating actions that use the default Node version and a memory setting that is ",(0,r.mdx)("inlineCode",{parentName:"p"},"256MB"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"512MB"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"1024MB")," - this way you avoid cold-starts in most cases. "),(0,r.mdx)("p",null,"The system has a pool of containers with these settings waiting to be used for any incoming call that can't be sent to an existing running container and the action matches the container settings (Node version and memory setting). In this scenario, time will only be spent for injecting your action code as opposed to wait for both creating a container and then get the code injected."),(0,r.mdx)("h2",{id:"timeout"},"Timeout"),(0,r.mdx)("p",null,"If you want to change the default timeout setting, you need to do it explicitly. This is how you increase the timeout to 5 minutes:\n",(0,r.mdx)("inlineCode",{parentName:"p"},"aio rt:action:create action-name source.js -t 300000")),(0,r.mdx)("p",null,"When you plan on increasing the timeout to more than one minute, you should be aware of:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Blocking calls (web actions for example) will timeout in one minute regardless of the timeout set and return an error to the caller. However, the action execution continues until it finishes or the timeout value is exceeded (at this point you get a developer error as the result). You will retrieve the result by polling for activationId and use the right activationId to get the result"),(0,r.mdx)("li",{parentName:"ol"},"Async calls respond immediately with an activationId. The execution continues, until the work is done or the timeout value is reached")),(0,r.mdx)("h2",{id:"activations-ttl"},"Activations TTL"),(0,r.mdx)("p",null,"The activation TTL (Time To Live) is seven days. This is a system setting, not a user setting (it can't be changed by developers)."),(0,r.mdx)("p",null,"Thus, if you don't see any activations or not seeing an activation you know that has happened, it could be that they happened more than 7 days ago."))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-system-settings-md-62e9721dca17950d08a7.js.map