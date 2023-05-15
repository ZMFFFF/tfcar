<template>
    <div class="header">
        <div class="box">
            <router-link class="logo" to="/">
                <img src="../../assets/logo.png" alt="">
            </router-link>
            <nav>
                <router-link to="/">首页</router-link>
                <router-link to="/oldCar">二手车</router-link>
                <router-link to="/newCar">新车</router-link>
                <router-link to="/saleCar">卖车</router-link>
                <router-link to="/finance">腾发金融</router-link>
                <router-link to="/service">腾发服务</router-link>
            </nav>
        </div>
    </div>
</template>


<style scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 9999;
    border-bottom: 1px solid #ccc;
}

.box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.header .box nav a {
    margin-left: 40px;
    padding-bottom: 10px;
}

.header .box nav a.router-link-exact-active {
    border-bottom: 2px solid #5685fe;
}
</style>