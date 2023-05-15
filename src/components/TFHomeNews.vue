<template>
    <div class="box">
        <div class="title">
            <h2>新闻</h2>
            <router-link to="/news">查看更多</router-link>
        </div>
        <div class="list">
            <router-link :to="`/newsDetail?id=${c.id}`" v-for="c in news" :key="c.id" class="item">
                <img :src="c.cover" alt="">
                <p class="carName">{{ c.title }}</p>
                <p class="dateAndMileage">{{ c.releaseTime | formatDate }}</p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ["news"]
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
    /* justify-content: space-between; */
    flex-wrap: wrap;
}

.list::after {
    content: "";
    flex: auto;
}

.item {
    width: 275px;
    margin-bottom: 20px;
    margin-right: calc((1200px - (275px * 4)) / 3);
    border-radius: 10px;
    overflow: hidden;
    background-color: #fff;
}

.item:hover {
    box-shadow: 0px 2px 20px 0px rgba(170, 170, 216, 0.4);
}

.item:nth-child(4n) {
    margin-right: 0;
}

.item img {
    width: 275px;
    height: 208px;
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