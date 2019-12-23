var routes = [
    {
        name: "no1",
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
        path:"/dong_1/:title",
        component:{
            template:"#dong_1",
        }
    },
    {
        path: '/no3',
        component: {
            template: '#no3',
            data() {
                return {
                    index: 0,
                    zixun: [
                        {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯',
                            e: '发布日期：2017年03月15日',
                            id: 1,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "资讯"

                        }, {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯',
                            e: '发布日期：2017年03月15日',
                            id: 2,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "资讯"

                        }, {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯',
                            e: '发布日期：2017年03月15日',
                            id: 3,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "资讯"

                        }, {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯',
                            e: '发布日期：2017年03月15日',
                            id: 4,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "资讯"

                        }, {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯',
                            e: '发布日期：2017年03月15日',
                            id: 5,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "资讯"

                        }, {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯',
                            e: '发布日期：2017年03月15日',
                            id: 6,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "资讯"

                        }

                    ],
                    hangye: [
                        {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '行业行业行业行业行业行业行业行业行业',
                            e: '发布日期：2017年03月15日',
                            id: 12,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "行业"
                        }, {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '行业行业行业行业行业行业行业行业行业',
                            e: '发布日期：2017年03月15日',
                            id: 13,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "行业"
                        }, {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '行业行业行业行业行业行业行业行业行业',
                            e: '发布日期：2017年03月15日',
                            id: 14,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "行业"
                        }, {
                            q: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvYjg2MjE5ZjFiZGY5NGI4ZjI1NGJlNzRmM2FmOWYwYTQtMTYweDEwMC5qcGc_p_p100_p_3D.jpg',
                            w: '行业行业行业行业行业行业行业行业行业',
                            e: '发布日期：2017年03月15日',
                            id: 15,
                            r: '当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...',
                            type: "行业"
                        }
                    ]
                }
            }
        },
    },
    {
        path: '/no4',
        component: {
            template: '#no4'
        }
    },
    {
        path: '/no5',
        component: {
            template: '#no5'
        }
    },

]

var router = new VueRouter({
    routes
})

Vue.component("soo", {
    template: "#soo",
    props: ["i"]
})


Vue.component('no6', {
    template: `
            <div>
            <div class="slot-text">
                <div class="no6-top">
                    <slot name="no6-top">
                    </slot>
                </div>
                <div class="not-bottom">
                    <slot name="no6-bottom"></slot>
                </div>

            </div>
        </div>
        `
})



Vue.component("xg", {
    template: `
    <div>
    <ul class="clearfloat">
      <li class="xg_cont" v-for="i in list">
        <div class="hz">
          <div class="xg_title">{{i.cont}}</div>
          <span class="cd"></span>
          <div class="xg_item">
            <p>{{i.item}}</p>
          </div>
          <div class="bt">—></div>
        </div>
      </li>
    </ul>
  </div>
    
    `,
    data() {
        return {
            list: [{
                cont: "医疗PPP有望成后起之秀 概念股早...",
                item: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..."
            }, {
                cont: "国产高端医疗设备凭高性价比应...",
                item: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..."
            }, {
                cont: "医疗器械国产化命脉“供应商”转...",
                item: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。..."
            }]
        };
    }
});




Vue.component('letter', {
    template: `
    <div>
    <div class="sb-cont">
        <div class="sb-banner" v-for="i in arr">
            <div class="sb-i">
               <img :src="i.a">
            </div>
            <div class="sb-love">
                {{i.b}}
            </div>
            <div class="sb-you">
                {{i.c}}
            </div>
        </div>
    </div>
    </div>
    `,
    data() {
        return {
            arr: [
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMDdiNzYwNTRjMjQwOWZmN2YwM2MxZTFlMjlmOTk4YTYtMjMweDIzMC5wbmc_p_p100_p_3D.png",
                    b: "THE PROJECT",
                    c: "NAME 01"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvOTAxNzllOTM4ZmFhMTgzZjhiMDFjODgwZjAzNzk3NjctMjMweDIzMC5wbmc_p_p100_p_3D.png",
                    b: "THE PROJECT",
                    c: "NAME 02"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvM2JlMmUyNDFkNTM4NjBmZmRkNzMzNjNiOWJiMjdjNTMtMjMweDIzMC5wbmc_p_p100_p_3D.png",
                    b: "THE PROJECT",
                    c: "NAME 03"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDcvZjZmODI0YzZlNGJlZWQ1ZDI0ZmRlZGRlZDBkZmY2ZDktMjMweDIzMC5wbmc_p_p100_p_3D.png",
                    b: "THE PROJECT",
                    c: "NAME 04"
                },
            ]
        }
    }
})



Vue.component("toxic", {
    template: '#toxic',
    data() {
        return {
            con: [
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                    b: "仪器设备Um350c",
                    c: "编辑设备副标题"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                    b: "仪器设备Um390i",
                    c: "编辑设备副标题"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                    b: "仪器设备Um250c",
                    c: "编辑设备副标题"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                    b: "仪器设备Um350c",
                    c: "编辑设备副标题"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                    b: "仪器设备Um325",
                    c: "编辑设备副标题"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                    b: "仪器设备Um110",
                    c: "编辑设备副标题"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                    b: "仪器设备Um215",
                    c: "编辑设备副标题"
                },
                {
                    a: "https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg",
                    b: "仪器设备Um309",
                    c: "编辑设备副标题"
                },
            ]
        }
    }
})





Vue.component("plc", {
    template: '#plc',
    data() {
        return {
            arr: [
                {
                    tit: '区域销售经理',
                    txt: '发布日期：2016-08-10',
                    p1: '公司事业部：某某公司',
                    p2: '职位性质：制造/生产/加工',
                    p3: '工作地点：北京',
                    p4: '招聘人数：10人',
                    x1: '职位概述：',
                    x2: '负责公司全产品华东区域分销工作。',
                    h1: '职位描述：',
                    h2: '1. 负责指定地区设备的市场推广工作，完成各项销售目标',
                    h3: '2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；',
                    h4: '3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；',
                    h5: '4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；',
                    h6: '5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；',
                    h7: '6. 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。',
                    b1: '任职条件：',
                    b2: '1. 理工科相关专业，大学本科以上学历；',
                    b3: '2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；',
                    b4: '3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；',
                    b5: '4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；',
                    b6: '5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。',
                    s1: '申请该职位'
                },
            ]
        }
    }
})




