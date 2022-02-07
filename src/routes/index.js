import App from '../App'

const layout = r => require.ensure([], () => r(require('@/view/layout/layout')), 'layout')
const login = r => require.ensure([], () => r(require('@/view/login/login')), 'login')
const home = r => require.ensure([], () => r(require('@/page/home/home')), 'home')
const about = r => require.ensure([], () => r(require('@/page/about/about')), 'about')
const hello = r => require.ensure([], () => r(require('@/page/hello/hello')), 'hello')
const myview = r => require.ensure([], () => r(require('@/page/myview/myview')), 'myview')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        {
            path: '',
            redirect: '/login',
        },
        {
            path: '/layout',
            component: layout,
            children:[{
                path:'/myview',
                component:myview
            },
            {
                path:'/about',
                component:about
            }, 
            {
                path:'/hello',
                component:hello
            },
            {
                path:'home',
                component:home
            },
            
        ]
        },
        
        {
            path: '/login',
            component: login,
           
        },
        
       
    ]
}]
