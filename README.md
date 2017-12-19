## 基于create-react-app创建的todo-list

作为react的起手式，todolist可以先拆分为一个盒子+盒子里要做的事情

todolist=todobox+listitem+dialog

- todobox做外层容器
- listitem做每条任务内容
- dialog是添加事务操作

没有将listitem再做拆分，这么小的东西太高内聚也没必要

react-scripts对es6做了自动处理，默默吐槽下service worker搞得我电脑发热不行

本文将es6降低一层用es5去写，可能会觉得很傻，但是只是为了夯实一下自己的基础，最起码能再复习一下上下文环境和react的bind作用

就当练习下吧
