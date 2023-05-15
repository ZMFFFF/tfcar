<template>
    <div class="banner">
        <div class="box">
            <div class="top">
                <div class="left">
                    <div class="title">腾发二手车</div>
                    <div class="input">
                        <input type="text" placeholder="搜索品牌、车型" v-model="keyword">
                        <router-link :to="`/oldCar?keyQuery=${keyword}`">搜索</router-link>
                    </div>
                </div>
                <div class="right">
                    <img src="../assets/买车的好处.png" alt="">
                </div>
            </div>
            <div class="bottom">
                <div class="left">
                    <div class="title">
                        <h2>我要买车</h2>
                    </div>
                    <div class="list">
                        <div class="brand">
                            <router-link :to="`/oldCar?brandQuery=${b.queryRules}&value=${b.label}`" v-for="b, i in brands" :key="i">
                                <img :src="b.logo" alt="">
                                <span>{{ b.label }}</span>
                            </router-link>
                        </div>
                        <div class="price">
                            <router-link :to="`/oldCar?priceQuery=${p.queryRules}&value=${p.label}`" v-for="p, i in prices" :key="i">
                                <span>{{ p.label }}</span>
                            </router-link>
                        </div>
                        <div class="model">
                            <router-link :to="`/oldCar?modelQuery=${m.queryRules}&value=${m.label}`" v-for="m, i in models" :key="i">
                                <span>{{ m.label }}</span>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="title">
                        <h2>我要卖车</h2>
                    </div>
                    <div class="input">
                        <input type="text" placeholder="请输入手机号" v-model="phone">
                        <router-link :to="`/saleCar?phone=${phone}`">立即估值</router-link>
                    </div>
                    <div class="buttons">
                        <div>
                            <img src="../assets/全国代购.png" alt="">
                            <router-link :to="`/saleCar?phone=${phone}`">全国代购</router-link>
                        </div>|
                        <div>
                            <img src="../assets/到店估值.png" alt="">
                            <router-link :to="`/saleCar?phone=${phone}`">到店估值</router-link>
                        </div>
                    </div>
                    <img src="../assets/我要卖车.png" alt="" class="bg">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            keyword: "",
            brands: [],
            prices: [],
            models: [],
            phone: "",
        }
    },
    mounted() {
        this.getConvenient()
    },
    methods: {
        async getConvenient() {
            let url = `https://api.tf2sc.cn/api/tfcar/car/convenient`
            let result = await axios.get(url, { headers: { PlatformType: 'h5' } });
            // console.log(result)
            this.brands = result.data.data.convenientBrands
            this.prices = result.data.data.convenientPrices
            this.models = result.data.data.convenientModels
        }
    }
}
</script>

<style scoped>
.banner {
    background-image: url("../assets/蓝色背景.png");
    background-repeat: no-repeat;
    background-size: 100% 300px;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top .left .title {
    font-size: 40px;
    background-image: -webkit-linear-gradient(top, #F9EDD5, #F5CB4F);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.top .left .input {
    background-color: #fff;
    border-radius: 5px;
    height: 50px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 580px;
}

.top .input input {
    outline: 0;
    border: 0;
    height: 40px;
    padding-left: 15px;
    font-size: 18px;
    flex-grow: 1;
}

.top .input a {
    display: inline-block;
    background-color: #5685fe;
    color: #fff;
    height: 48px;
    line-height: 48px;
    width: 100px;
    text-align: center;
    margin-right: 1px;
    font-size: 18px;
    letter-spacing: 2px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.top .right img {
    width: 420px;
    height: 229px;
}

.bottom {
    display: flex;
    justify-content: space-between;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 1px 10px 0px rgba(170, 170, 216, 0.4);
}

.bottom .title h2 {
    padding-left: 20px;
    margin-left: -20px;
}

.bottom .left .list .brand,
.bottom .left .list .price,
.bottom .left .list .model {
    margin: 30px 0;
    height: 30px;
    line-height: 30px;
}

.bottom .left .list .brand a {
    margin-right: 15px;
}

.bottom .left .list .brand a img {
    width: 30px;
    height: 30px;
    vertical-align: middle;
    margin-right: 5px;
}

.bottom .left .list .price a span,
.bottom .left .list .model a span {
    background: #F5F7FE;
    text-align: center;
    margin-right: 15px;
    padding: 6px 15px;
    border-radius: 16px;
}


.bottom .right {
    width: 600px;
    position: relative;
}

.bottom .right .input {
    width: 300px;
    background-color: #fff;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 30px 0;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bottom .right .input input {
    outline: 0;
    border: 0;
    height: 35px;
    padding-left: 10px;
}

.bottom .right .input a {
    display: inline-block;
    width: 80px;
    height: 34px;
    line-height: 34px;
    margin-right: 1px;
    text-align: center;
    background-color: #5685fe;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

.bottom .right .buttons {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 10px 0px rgba(170, 170, 216, 0.4);
    border-radius: 7px;
    height: 56px;
    background: #FFFFFF;
    margin-top: 20px;
}

.bottom .right .buttons div {
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
}


.bottom .right .buttons div img {
    vertical-align: middle;
    margin-right: 5px;
}

.bottom .right .bg {
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>