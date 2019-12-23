var routes = [
    {
        path: '/',
        component: {
            template: '#no1',
        }
    },
    {
        path: '/no2',
        component: {
            template: '#no2',
        }
    },
    {
        path: '/no3',
        component: {
            template: '#no3',
        }
    },
    {
        path: '/no4',
        component: {
            template: '#no4',
        }
    },
    {
        path: '/no5',
        component: {
            template: '#no5',
        }
    },
]

var router = new VueRouter({
    routes
})




// 首页组件
Vue.component('breath', {
    template: `
    <div>
    <div class="breath-top">
        <div class="breath-item" v-for="i in arr">
            <div class="top-img">
                <img :src="i.a" alt="">
            </div>
            <div class="bottom-text">
                <p>{{i.b}}</p>
            </div>
        </div>
    </div>

    <div class="breath-bottom">
        <div class="bottom-item" v-for="a in list">
            <div class="bottom-left">
                <img :src="a.c" alt="">
            </div>
            <div class="bottom-right">
                <div class="right-top">
                    <p>{{a.d}}</p>
                </div>
                <div class="right-bottom">
                     <p>{{a.e}}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
    `,
    data() {
        return {
            arr: [
                {
                    a: 'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cHM6Ly81NGQ0YTNiMjEwY2FlLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvZmFkNTY4YWFlNDQ0ODJlMTQ2MjNjNjJiY2IyZWJkMjIucG5n.png',
                    b: '关于我们/ABOUT',
                },
                {
                    a: 'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cHM6Ly81NGQ0YTNiMjEwY2FlLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvZmI5NDZiM2NhNmVjNmM2MjVjMjE3OTAxOGRiM2EwMzEucG5n.png',
                    b: '新闻动态/NEWS'
                },
                {
                    a: 'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cHM6Ly81NGQ0YTNiMjEwY2FlLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMTAvNDgzODFjNTkzMjQyYmVhNzE0MWI4YTA4ZGUyOGVmN2YuanBn.jpg',
                    b: '联系我们/CONTACT'
                },
                {
                    a: 'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cHM6Ly81NGQ0YTNiMjEwY2FlLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDIvZWQ4MDViNDI1MWM5ZDc3MTU3ZWY4ODcyODc4ZmFiNzIucG5n.png',
                    b: '产品展示/PRODUCTS'
                },
            ],
            list: [
                {
                    c: 'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS80YmY2MDIwMGY1ZmZhOWUwM2JiYzFiZWFiMjgxY2FhZi5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD02NTE3.jpg',
                    d: '产品名称#1',
                    e: '其主要门类包括：化学原料药及制剂、中药材、中药饮片、中成药、抗生素、生物制品、生化药品、放射性药品、医疗器械、卫生材料、制药机械、药用包装材料及医药商业。',
                },
                {
                    c: 'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9lN2I3MDczNWQ1NWU1ZGYxNGUxODI5ODEwMzMwYjYxNS5qcGc_p_p100_p_2FYXR0YWNobWVudF9pZD02NTE4.jpg',
                    d: '产品名称#2',
                    e: '其主要门类包括：化学原料药及制剂、中药材、中药饮片、中成药、抗生素、生物制品、生化药品、放射性药品、医疗器械、卫生材料、制药机械、药用包装材料及医药商业。',
                },
            ]
        }
    }
})




// no2组件
Vue.component('item',{
    template:'#item',
})


//no3组件

Vue.component('no3-item',{
    template:'#no3-item',
    data(){
        return{
            it:[
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS80YmY2MDIwMGY1ZmZhOWUwM2JiYzFiZWFiMjgxY2FhZi00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                    b:'产品展示1'
                },
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9lN2I3MDczNWQ1NWU1ZGYxNGUxODI5ODEwMzMwYjYxNS00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                    b:'产品展示2'
                },
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8zOTdlYzc2OTljMWExZDBmNjE4NzNjNmUxMDgwZTU5Ny00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                    b:'产品展示3'
                },
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS8xN2M0ZTNkYWMxMWM4M2ZjZmM3YTBiZmEzNjNjZWFkNy00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                    b:'产品展示4'
                },
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9jYjE1Zjk2YmRiNjZkMjU0NTlkZWMwNGQyNTJhNTBlYy00MDB4MzAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
                    b:'产品展示5'
                }
            ]
        }
    }
})


//no4组件
Vue.component('no4-item',{
    template:'#no4-item',
    data(){
        return{
            arr:[
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODcwXzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png',
                    b:'38种消费型保险之医疗保险篇',
                    c:'发布日期：2015-01-22公司新闻',
                    d:'“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。'
                },
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODcwXzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png',
                    b:'38种消费型保险之医疗保险篇',
                    c:'发布日期：2015-01-22公司新闻',
                    d:'“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。'
                },
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODcwXzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png',
                    b:'38种消费型保险之医疗保险篇',
                    c:'发布日期：2015-01-22公司新闻',
                    d:'“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。'
                },
                {
                    a:'https://ccdn.goodq.top/caches/c0b2c37cae1f3b474c3b0522b670a440/aHR0cDovLzU0ZDRhM2IyMTBjYWUudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNS8wMS8wMDA4ODcwXzM1MC0xNDB4MTEwLmpwZWc_p_p100_p_3D.png',
                    b:'38种消费型保险之医疗保险篇',
                    c:'发布日期：2015-01-22公司新闻',
                    d:'“医疗服务价格是很重要的价格杠杆。”市卫计委副主任、新闻发言人钟东波表示，北京的医疗服务价格自1999年之后，一直没有调整，积累了较大的矛盾和问题。'
                },
            ]
        }
    }
})