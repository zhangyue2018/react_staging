# react-router-dom@5
## 路由组件与一般组件
    1.写法不同：
        一般组件：<Demo />
        路由组件：<Route path='/demo' component={Demo}>
    2.存放位置不同：
        一般组件：components
        路由组件：pages
    3.接收到的props不同：
        一般组件：写组件标签时传递了什么，就能收到什么
        路由组件：接收到三个固定属性
            history:
                go: f go(n)
                goBack: f goBack()
                goForward: f goForward()
                push: f push(path, state)
                replace: f replace(path, state)
            location:
                pathname: '/about'
                search: ''
                state: undefined
            match:
                params: {}
                path: '/about'
                url: '/about'