<template>
  <div class="home">
    <TF-Home-Banner></TF-Home-Banner>
    <TF-Home-OldCar :oldCars="oldCars"></TF-Home-OldCar>
    <TF-Home-NewCar :newCars="newCars"></TF-Home-NewCar>
    <TF-Home-News :news="news"></TF-Home-News>
  </div>
</template>

<script>
import axios from 'axios'
import TFHomeBanner from '@/components/TFHomeBanner.vue'
import TFHomeOldCar from '@/components/TFHomeOldCar.vue'
import TFHomeNewCar from '@/components/TFHomeNewCar.vue'
import TFHomeNews from '@/components/TFHomeNews.vue'
export default {
  data() {
    return {
      oldCars: [],
      newCars: [],
      news: []
    }
  },
  components: {
    "TF-Home-Banner": TFHomeBanner,
    "TF-Home-OldCar": TFHomeOldCar,
    "TF-Home-NewCar": TFHomeNewCar,
    "TF-Home-News": TFHomeNews,
  },
  mounted() {
    this.getOldCars();
    this.getNewCars();
    this.getNews();
  },
  methods: {
    async getOldCars() {
      let url = `https://api.tf2sc.cn/api/tfcar/car/list`;
      let result = await axios.get(url, { headers: { PlatformType: 'h5' } });
      // console.log(result)
      this.oldCars = result.data.data.content;
    },
    async getNewCars() {
      let url = `https://api.tf2sc.cn/api/tfcar/newCar/list`;
      let result = await axios.get(url, { headers: { PlatformType: 'h5' } });
      // console.log(result)
      this.newCars = result.data.data.content;
    },
    async getNews() {
      let url = `https://api.tf2sc.cn/api/tfcar/website/allNews`;
      let result = await axios.get(url, { headers: { PlatformType: 'h5' } });
      // console.log(result)
      this.news = result.data.data;
    }
  }
}
</script>
