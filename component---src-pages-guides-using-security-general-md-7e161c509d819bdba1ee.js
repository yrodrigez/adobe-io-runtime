"use strict";(self.webpackChunkadobe_io_runtime=self.webpackChunkadobe_io_runtime||[]).push([[486],{85966:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return c},default:function(){return l}});var a=n(87462),i=n(63366),o=(n(15007),n(64983)),s=n(91515),r=["components"],c={},u={_frontmatter:c},d=s.Z;function l(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.mdx)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"security-guide"},"Security Guide"),(0,o.mdx)("p",null,"This guide attempts to lay out security concerns you have to think about when working with Runtime functions. Depending on your exact use case, only a subset of these may matter to you: for example, if you aren't using web actions, the section about cookies isn't relevant. This guide will assist you in keeping your functions secure and steer you away from practices that are likely to cause security headaches in the serverless environment."),(0,o.mdx)("h2",{id:"sandboxing"},"Sandboxing"),(0,o.mdx)("p",null,"Each action is run inside its own container. The container may be reused for the same action + namespace combination, but never for a different action or namespace. The function is limited in memory and CPU usage based on the requested setting when the action is created. The action has full access to the internet, but no access directly to Runtime; the only exception to this is that chaining functions together is supported via sequences, which do not fully leave the Runtime cluster."),(0,o.mdx)("h2",{id:"cross-site-scripting-xss"},"Cross-Site Scripting (XSS)"),(0,o.mdx)("p",null,"When building anything that runs on the internet that takes user input, you must be concerned with cross-site scripting (XSS) attacks. These attacks take a variety of forms and can be easily introduced if you are not careful."),(0,o.mdx)("p",null,"Parameters sent to actions are not sanitized by the Runtime system. All these inputs should be treated as unsafe and should be sanitized before being used directly. For example, do not just pass parameters to a SQL query or evaluate them in JavaScript. For further reading on this, a good resource is the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)"},"Open Web Application Security Project (OWASP) XSS documentation"),"."),(0,o.mdx)("h2",{id:"cookies"},"Cookies"),(0,o.mdx)("p",null,"Many things on the web rely on cookies. You can set cookies in two ways in Runtime: from JavaScript on the page via ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie"},"document.cookie")," calls, or via passing a ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/apache/incubator-openwhisk/blob/master/docs/webactions.md#web-actions"},"Header object from a web action")," that contains a Set-Cookie header directive. Due to the way Runtime hosts your functions, there are some particular concerns for function developers."),(0,o.mdx)("p",null,"The use of cookies directly from web actions on Runtime is discouraged. For further reading, please see ",(0,o.mdx)("a",{parentName:"p",href:"securing_web_actions.md"},"Securing Web Actions"),"."),(0,o.mdx)("h2",{id:"secrets"},"Secrets"),(0,o.mdx)("p",null,"Secrets fall into two different categories and must be handled in specific ways based on those categories."),(0,o.mdx)("h3",{id:"runtime-namespace-details"},"Runtime Namespace Details"),(0,o.mdx)("p",null,"Namespace credentials should be treated with the utmost care. These credentials allow full access to the namespace: ",(0,o.mdx)("em",{parentName:"p"},"do not share this information with customers using the action.")," If the design of the system requires these credentials to be stored inside the action or passed in as parameters to your action, ",(0,o.mdx)("em",{parentName:"p"},"consider some other design.")," Leaking of these credentials will allow an attacker full access to the namespace, and ",(0,o.mdx)("em",{parentName:"p"},"the owner of the namespace is responsible for any costs accrued")," during that time."),(0,o.mdx)("p",null,"If you need to pass namespace credentials, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"-a provide-api-key true")," annotation on the function. This will place the namespace and key in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"__OW_NAMESPACE")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"__OW_API_KEY")," execution context."),(0,o.mdx)("h3",{id:"a-functions-secrets"},"A Function's Secrets"),(0,o.mdx)("p",null,"If the action must communicate with some external service in an authenticated way, consider making use of a ",(0,o.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HMAC"},"HMAC")," that is passed into the service to authorize it for a time to retrieve those credentials. If passing a short-lived token to the action to retrieve the credentials is not possible, any long-lived credentials should be passed as part of a Header or a document POST-ed to the action. This will ensure that the credentials are always passed over a secure channel and not leaked to any internal or external routing mechanisms."),(0,o.mdx)("p",null,"If you need to store secrets your functions use, it's best to place them in some other trusted storage system or use the default params mechanism that is supported by packages and actions. In order to support this use case, all default params are automatically encrypted. They are decrypted just before the action code is executed. Thus, the only time you have access to the decrypted value is while executing the action code."),(0,o.mdx)("p",null,"If you run the CLI command for getting an action or package, you’d get a listing for the names of the default params while the values will be listed as a hash instead of the actual value."),(0,o.mdx)("h2",{id:"authentication-and-authorization"},"Authentication and Authorization"),(0,o.mdx)("p",null,"When invoking functions on the command line, your namespace and key are authenticated with Runtime and we examine if you authorized to perform the requested action; if so, it proceeds. "),(0,o.mdx)("h3",{id:"adobe-ims-authentication"},"Adobe IMS Authentication"),(0,o.mdx)("p",null,"Your action could include the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/aio-lib-ims"},"aio-lib-ims")," library to authenticate with Adobe IMS. Or you could use ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/security/#authentication-and-authorization-handling"},"App Builder to authenticate your actions against Adobe IMS"),". "),(0,o.mdx)("h3",{id:"securing-web-actions"},"Securing web actions"),(0,o.mdx)("p",null,"For web actions, see ",(0,o.mdx)("a",{parentName:"p",href:"securing_web_actions.md"},"Securing Web Actions"),"."),(0,o.mdx)("h2",{id:"transport-security"},"Transport Security"),(0,o.mdx)("p",null,"Due to the shared nature of any serverless system, it is necessary to review transport security to your function and how your function communicates with the world."),(0,o.mdx)("p",null,"All communications to the Runtime cluster are secured by HTTPS. Communications from your functions to any other service should also use HTTPS or some other secure channel whenever possible. While there is a network partition and no function should be able to see or route traffic directly to another, it is always best to also secure your communication channel as well."),(0,o.mdx)("h2",{id:"allowed-egress-ports"},"Allowed Egress Ports"),(0,o.mdx)("p",null,"Actions can call any external IP, however only the following ports are allowed:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"21, 22, 25, 53, 80, 123, 143, [200-299], 389, 443, 445, 465, 587, 636, 1433, [2000-2999], 3000, 3306, 4242, 4317, 4343, 5400, 5432, 5671, 5672, 6061, 6062, 6379, 6380, 6651, 8000, 8020, 8080, 8085, 8088, 8089, 8300, 8500, 8600, 9090, 9092, 9093, 9094, [9096-9352], 9354, [10000-20000], 27016, 27017, 27018, 27019, 30303, 50010, 60020")),(0,o.mdx)("h2",{id:"using-a-content-delivery-network-cdn"},"Using a Content Delivery Network (CDN)"),(0,o.mdx)("p",null,"It is always a good idea to use a CDN in front of your web actions, as it improves security. Many CDNs offer built-in security features such as DDoS protection, and web application firewall (WAF). These features can protect your web actions against DDoS attacks and other security threats."),(0,o.mdx)("p",null,"You could secure your web action using any CDN by following these steps: "),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Choose a CDN provider: There are several CDN providers available such as Cloudflare, Fastly, Akamai, and others. Choose a provider that meets your needs and sign up for their service."),(0,o.mdx)("li",{parentName:"ol"},"Configure the CDN: Once you have signed up for the CDN service, configure it to point to Runtime’s domain name: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<your-namespace>.adobeioruntime.net"),". This can usually be done through the CDN provider's web interface or API."),(0,o.mdx)("li",{parentName:"ol"},"Configure your action to use a security header. See: ",(0,o.mdx)("a",{parentName:"li",href:"securing_web_actions.md"},"Securing Web Actions"),". "),(0,o.mdx)("li",{parentName:"ol"},"Configure the CDN to add the ",(0,o.mdx)("inlineCode",{parentName:"li"},"X-Require-Whisk-Auth")," security header, with the secret hash value, for all requests made to the secured web actions.")),(0,o.mdx)("h2",{id:"secure-communication-with-backend-services"},"Secure Communication with Backend Services"),(0,o.mdx)("p",null,'Runtime does not expose egress IPs due to security reasons.\nIf customers need a way to securely communicate with their backend services, they can use a proxy in between their system and Runtime. For more information, see the "',(0,o.mdx)("a",{parentName:"p",href:"../reference/configuringproxy.md"},"Configuring a Secure Proxy"),'" guide.'),(0,o.mdx)("p",null,"Runtime ingress IPs are not static. In order to facilitate operational changes, the IP(s) returned when looking up I/O Runtime endpoints may change. It is critical that clients honor the TTL returned by I/O Runtime DNS records to ensure seamless and uninterrupted service availability. When the IP(s) associated with these endpoints change due to operational adjustments, clients relying on outdated IP addresses can experience service disruptions, increased latency, and/or network connectivity issues. How clients go about honoring a TTL is implementation-specific, but in general, clients should not cache DNS records for longer than the specified TTL."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-using-security-general-md-7e161c509d819bdba1ee.js.map