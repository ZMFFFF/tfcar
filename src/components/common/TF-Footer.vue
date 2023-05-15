<template>
    <div class="footer">
        <div class="top box">
            <div class="left">
                <img src="../../assets/tengfa.png" alt="">
                <span>真实车源</span>
            </div>
            <div class="right">
                <router-link to="/oldCar">二手车</router-link>
                <router-link to="/news">新闻咨询</router-link>
                <router-link to="/problem">常见问题</router-link>
            </div>
        </div>
        <div class="middle">
            <div class="box">
                <div class="left">
                    <p>咨询电话：400-0606-777</p>
                    <p>营业时间：周一至周日 早 8:00 - 晚 12:00</p>
                </div>
                <div class="right">
                    <div class="item">
                        <img src="../../assets/a.jpg" alt="">
                        <p>关注腾发名车</p>
                        <p>微信公众号</p>
                    </div>
                    <div class="item">
                        <img src="../../assets/b.jpg" alt="">
                        <p>扫码打开小程序</p>
                        <p>关注更多信息</p>
                    </div>
                    <div class="item">
                        <img src="../../assets/c.jpg" alt="">
                        <p>下载app</p>
                        <p>关注更多信息</p>
                    </div>
                </div>
            </div>
            <div class="box1">
                <div>
                    腾发二手车以二手车销售、新车销售、汽车分期、汽车保险、维修保养、汽车改装、汽车收购置换为主营业务，是集实体与线上为一体的综合性购车用车销售服务平台。
                </div>
                <div>
                    门店地址：【国基路店】郑州市花园路与国基路交汇处西南角 【天伦路店】郑州市花园路与天伦路交汇处向东50米路南
                </div>
                <div>
                    腾发二手车目前营业面积3万余平实体展厅，近5000平独立的售后服务中心，3000余台的常态库存涵盖各种国际品牌名车。全国二手车经营示范基地，百万车主信赖之选！
                </div>
            </div>
        </div>
        <div class="bottom box">
            <div>
                <span>Copyright © 2014 - 2021 All Rights Reserved 版权所有</span>
                &nbsp;&nbsp;&nbsp;
                <a href="https://beian.miit.gov.cn/">豫ICP备14025595号</a>
            </div>
            <div class="imgs">
                <img src="../../assets/cert_01.jpg">
                <img src="../../assets/cert_02.jpg">
                <img src="../../assets/cert_03.jpg">
                <img src="../../assets/cert_04.jpg">
            </div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    background-color: #242632;
    color: #F9F9F9;
}

.footer a {
    color: #F9F9F9;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.top .left img {
    width: 70px;
    height: 28px;
    vertical-align: middle;
}

.top .left span {
    padding: 4px 10px;
    border-left: 1px solid #fff;
    margin-left: 10px;
}

.top .right {
    flex-grow: 1;
    display: flex;
    justify-content: center;
}

.top .right a {
    margin: 0 20px;
}

.middle {
    background-color: #2a2c37;
    padding: 20px 0;
}

.middle .box {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.middle .box .left {
    flex-grow: 1;
}

.middle .box .right {
    display: flex;
    justify-content: space-between;
    width: 300px;
}

.middle .box .right .item img {
    width: 88px;
    height: 88px;
    border-radius: 5px;
}

.middle .box .right .item p {
    font-size: 12px;
    text-align: center;
}

.middle .box1 {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    line-height: 2;
    margin-top: 20px;
}

.bottom {
    height: 70px;
    padding: 20px 0;
    text-align: center;
}

.bottom .imgs {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.bottom .imgs img {
    margin: 0 10px;
}
</style>