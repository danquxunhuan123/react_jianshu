const defaultState = {
    bodyList: [
        {
            title: 'Android上超级好用的前端调试方法（adb reverse）',
            content: '前端开发前端页面，经常需要改两行代码就要看看页面效果。如果是兼容桌面浏览器的页面还好办，在本地启动服务，写两句代码refresh一下就可以看到效',
            zuanNum: 51.3,
            author: '涅槃快乐是金',
            commentNum: 0,
            agreeNum: 0,
            pic:'https://upload-images.jianshu.io/upload_images/10024246-f14f2905f7b87eb0.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            title: '在美国经历了一次援交，我后悔不已',
            content: '最近收到了一份来自粉丝朋友的匿名帖， 内容如下： 一年前我收到美国某大学的研究生offer ,之后一个人拖着行李箱手里拽着7000块人民币就来到',
            zuanNum: 0,
            author: '十分钟记忆',
            commentNum: 71,
            agreeNum: 225,
            pic:'https://upload-images.jianshu.io/upload_images/14763042-ea01d2c58b5decb6.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            title: '两性话题',
            content: '男人女人无非就是床上那点事，性，自古至今，是男人和女人的热点！ 对于性，有些人故作矜持，明明想聊却不张口，有些人闷骚，外表看似正儿八经，内心却澎',
            zuanNum: 7.7,
            author: '夏末清风yl',
            commentNum: 23,
            agreeNum: 36,
            pic:'https://upload-images.jianshu.io/upload_images/19787801-103ae265461357a4.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
        },
        {
            title: 'React Native ios打包',
            content: 'React Native ios打包 转自：https://segmentfault.com/a/1190000006668359 bundle',
            zuanNum: 0,
            author: '小小小Lucky ',
            commentNum: 0,
            agreeNum: 0,
            pic:'https://upload-images.jianshu.io/upload_images/18326826-ed392ad2592284bd.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            title: '一位Java程序员2个月面试25次均失败，听了HR的话感慨：要失业了',
            content: '欢迎Java工程师关注简书专栏Java架构技术进阶本专栏收录各种Java相关技术，面试题，以及学习感悟，心得！ 对不少行业来说，年龄大并不是一项',
            zuanNum: 11.7,
            author: 'Java_苏先生',
            commentNum: 18,
            agreeNum: 43,
            pic:'https://upload-images.jianshu.io/upload_images/16826084-9276f0456bd6a396.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            title: '我和老婆的糟糕婚姻',
            content: '我今年33岁，结婚3年了，大学毕业后，托了我堂姑的光，进了一家国企。 说说我的家庭，我老家农村的，妈妈因病已经去世很多年了，我爸拉扯我和大姐长大',
            zuanNum: 4.3,
            author: '夏日莲儿',
            commentNum: 26,
            agreeNum: 22
        },
        {
            title: 'RN 各种坑',
            content: 'Unable to resolve module @babel/runtime/helpers/objectSpread 执行 react',
            zuanNum: 0,
            author: '浮生Dream',
            commentNum: 0,
            agreeNum: 0
        },
        {
            title: 'idea 牛逼插件，拿走不谢',
            content: '1：grep console java 开发的过程中，日志都会输出到console，输出的内容是非常多的，所以需要有一个工具可以方便的查找日志，',
            zuanNum: 2.8,
            author: '小城大爱_cf5a',
            commentNum: 2,
            agreeNum: 23
        },
        {
            title: '凌晨4点，超市里丑陋的一幕，出卖了无数国人的体面',
            content: '01 凌晨4点，我看到一段“大爷大妈丧尸式进超市”的视频在网络上疯传。 超市的卷帘门缓缓上升，刚露出些缝隙，不少大爷大妈就趴在地上往里面钻。 一',
            zuanNum: 139.3,
            author: '精读君',
            commentNum: 176,
            agreeNum: 867,
            pic:'https://upload-images.jianshu.io/upload_images/1202579-8c4b76c8851e9601?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }]
}


const BodyReducer = (state = defaultState, action) => {
    return state;
}

export default BodyReducer;
