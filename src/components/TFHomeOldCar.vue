<template>
    <div class="box">
        <div class="title">
            <h2>二手车</h2>
            <router-link to="/oldCar">查看更多</router-link>
        </div>
        <div class="list">
            <router-link :to="`/oldCarDetail?ind=${c.ind}`" v-for="c in oldCars" :key="c.ind" class="item">
                <div class="logo-box">
                    <img :src="c.cover" alt="">
                    <div class="saleType">{{c.saleType | formatSaleType}}</div>
                </div>
                <p class="carName">{{ c.carName }}</p>
                <p class="dateAndMileage">{{ c.dateOfRegistration | formatDate }}/{{ c.mileage }}万公里</p>
                <p class="price">{{ c.currentPrice }}万</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["oldCars"]
}
</script>

<style scoped>
.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
}

.title h2 {
    border-left: 10px solid #5685fe;
    padding-left: 10px;
}

.list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.item {
    width: 275px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
}

.item:hover {
    box-shadow: 0px 2px 20px 0px rgba(170, 170, 216, 0.4);
}

.item .logo-box{
    width: 275px;
    height: 208px;
    position: relative;
}
.item .logo-box img {
    width: 275px;
    height: 208px;
}
.item .logo-box .saleType{
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: red;
    color: #fff;
    font-size: 12px;
    padding: 3px 8px;
}

.item p {
    margin: 10px 0;
    padding: 0 10px;
}

.item .carName {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.item .dateAndMileage {
    color: #999;
    font-size: 12px;
}

.item .price {
    color: #e73424;
    font-size: 18px;
}
</style>