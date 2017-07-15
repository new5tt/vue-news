import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import UserInfo from './components/UserInfo.vue'
import Article from './components/article.vue'
export default [{
        path: '/Home',
        component: Home
    },
    {
        path: '/Follow',
        component: Follow
    },
    {
        path: '/Column',
        component: Column
    }, {
        path: '/userinfo',
        component: UserInfo
    }, {
        path: '/article/:id',
        component: Article
    }, {
        path: '/',
        redirect: 'Home'
    }
]