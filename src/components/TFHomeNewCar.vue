<template>
    <div class="box">
        <div class="title">
            <h2>新车</h2>
            <router-link to="/newCar">查看更多</router-link>
        </div>
        <div class="list">
            <router-link :to="`/newCarDetail?ind=${c.id}`" v-for="c in newCars" :key="c.id" class="item">
                <img :src="c.cover" alt="">
                <p class="carNameAndPrice">
                    <span class="carName">{{ c.carBrandMarker }}</span>
                    <span class="price">{{ c.currentPrice }}万</span>
                </p>
                <p class="tagsAndColor">
                    <span class="tags">{{ c.tags }}</span>
                    <span class="color">{{ c.colorLabel }}</span>
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["newCars"]
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
    width: 584px;
    margin-bottom: 20px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
}

.item:hover {
    box-shadow: 0px 2px 20px 0px rgba(170, 170, 216, 0.4);
}

.item p {
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
}

.item .carName {
    display: inline-block;
    width: 349px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.item .price {
    display: inline-block;
    width: 208px;
    color: #e73424;
    font-size: 18px;
    text-align: right;
}

.item .tags {
    padding: 3px 8px;
    height: 20px;
    background: linear-gradient(90deg, #5F98F6 0%, #2E68EB 100%);
    border-radius: 3px;
    color: #FFFFFF;
    margin-right: 16px;
}

.item .color {
    padding: 3px 8px;
    height: 20px;
    background: #F5F7FE;
    border-radius: 3px;
    color: #666666;
    font-size: 12px;
}
</style>