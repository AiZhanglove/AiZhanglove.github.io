//右边的数据信息；
    var data = [
        {
            title:'画廊',
            details:[
                '使用当前最火的react实现',
                '使用babel编译jsx和sass',
                '使用node环境下的webpack打包，并实现热加载'
            ],
            aHerf:'../react_pic_demo/build/index.html',
            img:'img/1.png',
            bgColor: '#1b1b1b', 
            color: '#44f962'
        },
        {
            title:'途牛首页',
            details:[
                '使用定位、浮动、背景图片处理完成页面布局',
                '处理IE6下的兼容问题'
            ],
            aHerf:'../tuniu-pc/index.html',
            img:'img/2.png',
            bgColor: '#ffbf43', 
            color: '#fff'
        },
        {
            title:'途牛移动端',
            details:[
                '途牛H5版',
                '利用移动端最流行的rem布局'
            ],
            aHerf:'../tuniu-mobil/index.html',
            img:'img/3.png',
            bgColor: '#0d0d0e', 
            color: '#44d5f9'
        },
        {
            title:'贪吃蛇小游戏',
            details:[
                'JS生成地图，定时器控制蛇身前进，把蛇的每个位置存入数组，每次前进进行数组操作',
                '用事件处理键盘方向控制，每次碰撞苹果把苹果并入蛇的数组，再在排除蛇的位置随机生成苹果,重新启动定时器，达到越来越快的效果',
                '做出各种情况判断检测'
            ],
            aHerf: '../snack/index.html',
            img: 'img/4.png',
            bgColor: '#3c3c3c', 
            color: '#d44f0d'
        },
        {
            title:'扫雷游戏',
            details:[
                '不借用工具框架或库，全程使用原生js',
                '游戏有三个难度',
                '模仿经典window游戏'
            ],
            aHerf:'../Minesweeper/index.html',
            img:'img/5.png',
            bgColor: '#3c3c3c', 
            color: '#b9b9b9'
        },
        {
            title:'JQ官网响应式',
            details:[
                '用媒寻还原原网站响应式效果'
            ],
            aHerf:'../jq/index.html',
            img:'img/6.png',
            bgColor: '#3c3c3c', 
            color: '#d44f0d',
            bgColor: '#43b2ff', 
            color: '#fff'
        }
    ];
//head部分数据
var headData = [
        {title:'About me',
        content:[
            '姓名： 张爱',
            '毕业院校：哈尔滨工业大学', 
            '电话：13021204455', 
            '邮箱：956430343@qq.com'
            ]
        },
        {title:'About site',
        content:['本站制作使用了较多CSS3效果，由于某些内容只有WebKit内核支持，只做了chorme浏览器的兼容处理。导航处使用了font-face进行了字体处理，平常状态使用了字体阴影效果，移入后背景用transition改变，去掉阴影，使用background:-webkit-gradient、-webkit-text-fill-color和-webkit-background-clip的结合实现字体渐变；所有的展示DIV运用了2D旋转和3D旋转，在点击上处理了井深，Z层高度的问题；所有的DIV定位使用了CSS3的平移和缩放；点击从侧向变为正向使用了transition进行变换；点击更换层级使用了自己写的CSS3处理函数，完成对style函数返回值矩阵的操作；右侧文字标题使用函数将文字全部转为span包裹，进行运动处理，中间时间进行了透明度渐入效果处理，下部文字描述对每行的h3进行渐入运动处理；最下面的链接与层级运动一样，使用了CSS3处理函数来改变缩放。hover状态做了一个CSS3动画。']
        },
        {title:'Skills',
        content:[
            '1.深刻了解HTML 、CSS、Javascript 语言和 W3C 与网站相关的标准，熟悉HTML5与CSS3，并兼容业界承认的主流浏览器;',
            '2.深刻理解标签语义化、结构、表现、行为分离等原则，有丰富的关于可用性、浏览器渲染及网站性能优化等方面的知识;',
            '3.熟练掌握各类型的网页布局，如：瀑布流、响应式布局、悬浮定位、负边距布局等，了解SEO搜索引擎优化，实现和后台程序的对接;',
            '4.熟练掌握JavaScript编程、Ajax原理，使用JavaScript或其他类库（如jQuery、Zepto等）制作各种网页特效;',
            '5.熟悉react,Es6,可以使用react开发项目;',
            '6.熟练使用git，svn等版本管理工具;'
        ]
        }
    ];