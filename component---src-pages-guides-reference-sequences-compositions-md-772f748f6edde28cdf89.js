"use strict";(self.webpackChunkadobe_io_runtime=self.webpackChunkadobe_io_runtime||[]).push([[833],{62164:function(e,o,n){n.r(o),n.d(o,{_frontmatter:function(){return p},default:function(){return l}});var t=n(87462),a=n(63366),i=(n(15007),n(64983)),s=n(91515),m=["components"],p={},c={_frontmatter:p},r=s.Z;function l(e){var o=e.components,n=(0,a.Z)(e,m);return(0,i.mdx)(r,(0,t.Z)({},c,n,{components:o,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"sequences-and-compositions"},"Sequences and Compositions"),(0,i.mdx)("p",null,"Sometimes you want to orchestrate a series of action calls into a flow. There are two ways to do this: using sequences or compositions."),(0,i.mdx)("p",null,"Sequences represent a single string of actions that are invoked in sequence, starting with the first one, then second, and so forth until the last one. At each step the result of the current action feeds into the arguments of the next one. There is no support to skip one action."),(0,i.mdx)("p",null,"If you want to execute a tree of actions, where you want to be able to evaluate the result of an action and depending on it execute a different action (think of an if/else control structure) then compositions are your best friend."),(0,i.mdx)("h2",{id:"sequences"},"Sequences"),(0,i.mdx)("p",null,"Assuming that you have two actions created in a package called ",(0,i.mdx)("inlineCode",{parentName:"p"},"my-package"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"/my-package/actionA\n/my-package/actionB\n")),(0,i.mdx)("p",null,"You can create a sequence using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"--sequence")," flag in addition to the usual command for creating an action (make sure you add the namespace to the action name; otherwise you'd see an error about not being authorized to access those resources):\n",(0,i.mdx)("inlineCode",{parentName:"p"},"aio rt:action:create mySequence --sequence /[your-namespace]/my-package/actionA,/[your-namespace]/my-package/actionB")),(0,i.mdx)("p",null,"You can invoke this as any other action. For example:\n",(0,i.mdx)("inlineCode",{parentName:"p"},"aio rt:action:invoke --result mySequence")),(0,i.mdx)("h3",{id:"sequences-and-timeout"},"Sequences and Timeout"),(0,i.mdx)("p",null,"When invoking a sequence in a blocking manner, there is a hard limit for timeout and this limit can't be changed: 60 seconds. It means when you add up the execution time of each action that is part of a sequence, the total has to be 60 seconds or less. "),(0,i.mdx)("p",null,"If we apply this limitation to the example above, then ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionA")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionB")," have a total budget of 60 seconds. Although the system lets you set a higher timeout on the sequnce ",(0,i.mdx)("inlineCode",{parentName:"p"},"mySequence"),", this value is ignored and the 60 seconds limit is enforced."),(0,i.mdx)("p",null,"If one of your actions needs more than 60 seconds, then the only solution is to invoke a non-blocking action using the OpenWhisk npm module. So, using the same example, you could have ",(0,i.mdx)("inlineCode",{parentName:"p"},"actionA")," calling another action in a non-blocking manner. You can see an example of how to do this ",(0,i.mdx)("a",{parentName:"p",href:"../guides/asynchronous_calls.md"},"here"),"."),(0,i.mdx)("p",null,"You can read more about sequences on the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/apache/incubator-openwhisk/blob/master/docs/actions.md#creating-action-sequences"},"OpenWhisk documentation page"),"."),(0,i.mdx)("h2",{id:"compositions"},"Compositions"),(0,i.mdx)("p",null,"When you want to orchestrate a more complex flow without having to jam all the code in one action, Apache OpenWhisk Composer is your best friend. Composer lets you assemble actions, even other compositions together and control the executions by using control-flow structure (if, while, repeat). The result of a composition gives you a single entry point and it behaves like an action, in that it supports default params, can be placed into a package, or used as web action."),(0,i.mdx)("h3",{id:"install-composer"},"Install Composer"),(0,i.mdx)("p",null,"You’ll need to install the Composer Node.js package in order to use this feature:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"npm install -g openwhisk-composer\n")),(0,i.mdx)("p",null,"Using this package you can create the JSON file needed for deploying a composition. The flow for creating a composition looks like:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"You define the compositions using JavaScript"),(0,i.mdx)("li",{parentName:"ol"},"You run ",(0,i.mdx)("inlineCode",{parentName:"li"},"compose")," command to generate the JSON file out of this JavaScript file"),(0,i.mdx)("li",{parentName:"ol"},"You run ",(0,i.mdx)("inlineCode",{parentName:"li"},"deploy")," command to deploy the composition using the JSON file you generated at the previous step")),(0,i.mdx)("p",null,"For, example let’s assume you have three actions deployed called ",(0,i.mdx)("inlineCode",{parentName:"p"},"a"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"b"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"c")," and you want to create a composition that executes ",(0,i.mdx)("inlineCode",{parentName:"p"},"a")," and in case of success, executes ",(0,i.mdx)("inlineCode",{parentName:"p"},"b"),", if not it executes ",(0,i.mdx)("inlineCode",{parentName:"p"},"c"),". You use the composer package to define this composition in a JavaScript file (`myComp.js'): "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"const composer = require('openwhisk-composer')\n\nmodule.exports = composer.if(‘a’, ‘b’, ‘c’)\n")),(0,i.mdx)("p",null,"Now, that you have the composition defined you can generate the JSON definition needed for deployment:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"compose myComp.js > myComp.json\n")),(0,i.mdx)("p",null,"Time to deploy:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"deploy compositionA myComp.json\n")),(0,i.mdx)("p",null,"This creates a composition called ",(0,i.mdx)("inlineCode",{parentName:"p"},"compositionA"),". You can invoke this, as any other action - ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio rt:action:invoke compositionA"),". When you do this, first action ",(0,i.mdx)("inlineCode",{parentName:"p"},"a")," is invoked. Then, if ",(0,i.mdx)("inlineCode",{parentName:"p"},"a")," was successful, then action ",(0,i.mdx)("inlineCode",{parentName:"p"},"b")," is invoked; if not, action ",(0,i.mdx)("inlineCode",{parentName:"p"},"c")," is invoked."),(0,i.mdx)("p",null,"More information:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Apache OpenWhisk Composer ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/apache/incubator-openwhisk-composer"},"home page")),(0,i.mdx)("li",{parentName:"ul"},"For a complete list of the control-flow structure check this page: ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/apache/incubator-openwhisk-composer/blob/master/docs/COMBINATORS.md"},"Combinators"),".")),(0,i.mdx)("h3",{id:"parallel-compositions"},"Parallel Compositions"),(0,i.mdx)("p",null,"Parallel compositions are not supported by I/O Runtime."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-reference-sequences-compositions-md-772f748f6edde28cdf89.js.map