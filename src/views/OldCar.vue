<template>
  <div class="oldCar box">

    <div class="search">
      <div class="input">
        <input type="text" v-model="keyword" placeholder="请输入车名">
        <router-link :to="`/oldCar?keyQuery=${keyword}`">搜索</router-link>
      </div>
    </div>

    <div class="filters">
      <div class="brand">
        <div class="title">品牌：</div>
        <ul>
          <li :class="{ active: selected.brand.id == '-1' }" @click="getSeries('-1', '不限')">不限</li>
          <li v-for="b, i in brands" :key="i" :class="{ active: selected.brand.id == JSON.parse(b.queryRules).carBrand }"
            @click="getSeries(JSON.parse(b.queryRules).carBrand, b.label)">{{ b.label }}</li>
        </ul>
      </div>

      <div class="series">
        <div class="title">车系：</div>
        <ul>
          <li :class="{ active: selected.series.id == '-1' }"
            @click="selected.series.id = '-1'; selected.series.value = '不限';">
            不限</li>
          <li v-for="                      s, i                       in                       series                      "
            :key=" i " :class=" { active: selected.series.id == s.id } "
            @click=" selected.series.id = s.id; selected.series.value = s.abbreviation; ">{{ s.abbreviation }}</li>
        </ul>
      </div>

      <div class="model">
        <div class="title">车型：</div>
        <ul>
          <li :class=" { active: selected.model.id == '-1' } "
            @click=" selected.model.id = '-1'; selected.model.value = '不限'; ">不限</li>
          <li v-for="                      m, i                       in                       models                      "
            :key=" i " :class=" { active: selected.model.id == JSON.parse(m.queryRules).carModel } "
            @click=" selected.model.id = JSON.parse(m.queryRules).carModel; selected.model.value = m.label; ">{{ m.label
            }}
          </li>
        </ul>
      </div>

      <div class="price">
        <div class="title">价格：</div>
        <ul>
          <li :class=" { active: selected.price.id == '-1' } "
            @click=" selected.price.id = '-1'; selected.price.value = '不限' ">不限</li>
          <li v-for="                      p, i                       in                       prices                      "
            :key=" i " :class=" { active: selected.price.id == p.queryRules } "
            @click=" selected.price.id = p.queryRules; selected.price.value = p.label; ">{{ p.label }}</li>
        </ul>
      </div>

      <div class="more">
        <label>燃油类型：</label>
        <select v-model=" selected.fuel_type ">
          <option :value=" { id: '-1', value: '不限' } ">不限</option>
          <option :value=" { id: JSON.parse(item.queryRules).fuelType, value: item.label } "
            v-for="                      item, i                       in                       fuel_type                      "
            :key=" i ">{{
            item.label
            }}
          </option>
        </select>
        <label>驱动类型：</label>
        <select v-model=" selected.drive_type ">
          <option :value=" { id: '-1', value: '不限' } ">不限</option>
          <option :value=" { id: JSON.parse(item.queryRules).driveType, value: item.label } "
            v-for="                      item, i                       in                       drive_type                      "
            :key=" i ">
            {{
            item.label
            }}
          </option>
        </select>
        <label>座位数：</label>
        <select v-model=" selected.seat_num ">
          <option :value=" { id: '-1', value: '不限' } ">不限</option>
          <option :value=" { id: JSON.parse(item.queryRules).seat, value: item.label } "
            v-for="                      item, i                       in                       seat_num                      "
            :key=" i ">{{
            item.label
            }}
          </option>
        </select>
        <label>排量：</label>
        <select v-model=" selected.displacement ">
          <option :value=" { id: '-1', value: '不限' } ">不限</option>
          <option :value=" { id: item.queryRules, value: item.label } "
            v-for="                      item, i                       in                       displacement                      "
            :key=" i ">
            {{ item.label }}</option>
        </select>
        <label>变速箱：</label>
        <select v-model=" selected.gearbox_type ">
          <option :value=" { id: '-1', value: '不限' } ">不限</option>
          <option :value=" { id: JSON.parse(item.queryRules).gearboxType, value: item.label } "
            v-for="                      item, i                       in                       gearbox_type                      "
            :key=" i ">{{
            item.label
            }}</option>
        </select>
        <label>里程：</label>
        <select v-model=" selected.mileage ">
          <option :value=" { id: '-1', value: '不限' } ">不限</option>
          <option :value=" { id: item.queryRules, value: item.label } "
            v-for="                      item, i                       in                       mileage                      "
            :key=" i ">
            {{
            item.label }}</option>
        </select>
        <label>排放：</label>
        <select v-model=" selected.emission_standard_type ">
          <option :value=" { id: '-1', value: '不限' } ">不限</option>
          <option :value=" { id: JSON.parse(item.queryRules).emissionStandardType, value: item.label } "
            v-for="                      item, i                       in                       emission_standard_type                      "
            :key=" i ">
            {{
            item.label
            }}
          </option>
        </select>
      </div>
    </div>

    <div class="selected">
      <span>当前筛选：</span>
      <ul>
        <template v-for="             s, k, i              in              selected             ">
          <li v-if=" s.id != '-1' ">
            <span>{{ s.value }}</span>
            <span class="close" @click=" changeSelected(s, k) "></span>
          </li>
        </template>
      </ul>
    </div>

    <div class="list-box">
      <div class="title">
        <div class="left">
          <span @click=" saleType = -1; " :class=" { active: saleType == -1 } ">全部</span>
          <span @click=" saleType = 0; " :class=" { active: saleType == 0 } ">腾发自营</span>
          <span @click=" saleType = 1; " :class=" { active: saleType == 1 } ">车主自售</span>
          <span @click=" saleType = 2; " :class=" { active: saleType == 2 } ">限时秒杀</span>
          <span @click=" saleType = 3; " :class=" { active: saleType == 3 } ">严选车源</span>
        </div>
        <div class="right">
          <span @click=" sort = ''; " :class=" { active: sort == '' } ">默认排序</span>
          <span @click=" sort = 'uTime%2Cdesc'; " :class=" { active: sort == 'uTime%2Cdesc' } ">最新发布</span>
          <span @click=" sort = 'currentPrice%2Cdesc'; " :class=" { active: sort == 'currentPrice%2Cdesc' } ">价格最高</span>
          <span @click=" sort = 'currentPrice%2Casc'; " :class=" { active: sort == 'currentPrice%2Casc' } ">价格最低</span>
        </div>
      </div>

      <div class="list">
        <router-link :to=" `/oldCarDetail?ind=${c.ind}` "
          v-for="                      c                       in                       oldCars                      "
          :key=" c.ind " class="item">
          <div class="logo-box">
            <img :src=" c.cover " alt="">
            <div class="saleType">{{ c.saleType | formatSaleType }}</div>
          </div>
          <p class="carName">{{ c.carName }}</p>
          <p class="dateAndMileage">{{ c.dateOfRegistration | formatDate }}/{{ c.mileage }}万公里</p>
          <p class="price">{{ c.currentPrice }}万</p>
        </router-link>
      </div>

      <div class="page">
        <span class="total">共{{ totalPages }}条</span>
        <span to="/" class="prev" @click=" prev() ">上一页</span>
        <template v-for="    p, i      in      pages    ">
          <span :class=" { active: p == currentPage } " @click=" currentPage = p " v-if=" p != '...' ">{{ p }}</span>
          <span :class=" { dot: p == '...' } " v-else>{{ p }}</span>
        </template>

        <span to="/" class="next" @click=" next() ">下一页</span>
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
      series: [],
      models: [],
      prices: [],
      oldCars: [],
      displacement: [],
      drive_type: [],
      emission_standard_type: [],
      fuel_type: [], // 
      gearbox_type: [],
      mileage: [],
      seat_num: [], // 座位数
      currentPage: 1, // 当前页码
      pages: [], // 分页的数组
      totalPages: 0, // 总页码
      selected: {
        brand: { id: "-1", value: "不限" },
        series: { id: "-1", value: "不限" },
        model: { id: "-1", value: "不限" },
        price: { id: "-1", value: "不限" },
        fuel_type: { id: "-1", value: "不限" },
        drive_type: { id: "-1", value: "不限" },
        seat_num: { id: "-1", value: "不限" },
        displacement: { id: "-1", value: "不限" },
        gearbox_type: { id: "-1", value: "不限" },
        mileage: { id: "-1", value: "不限" },
        emission_standard_type: { id: "-1", value: "不限" },
      },
      saleType: -1, // 销售类型
      sort: "", // 排序字段,
      carName: "", // 按名字查询
    };
  },
  watch: {
    saleType(newValue, oldValue) {
      this.currentPage = 1;
      this.getOldCars()
    },
    sort(newValue, oldValue) {
      this.currentPage = 1;
      this.getOldCars()
    },
    selected: {
      handler(newValue, oldValue) {
        this.currentPage = 1;
        this.getOldCars()
      },
      deep: true,
    },
    currentPage(newValue, oldValue) {
      this.getOldCars()
    },
    $route(to, from) {
      this.carName = to.query.keyQuery;

      this.getOldCars();
    }
  },
  mounted() {
    if (this.$route.query.brandQuery) {
      var obj = JSON.parse(this.$route.query.brandQuery);
      this.selected.brand.id = obj.carBrand;
      this.selected.brand.value = this.$route.query.value;
      this.getSeries(this.selected.brand.id, this.$route.query.value)
    }
    if (this.$route.query.priceQuery) {
      this.selected.price.id = this.$route.query.priceQuery;
      this.selected.price.value = this.$route.query.value;
    }
    if (this.$route.query.modelQuery) {
      this.selected.model.id = JSON.parse(this.$route.query.modelQuery).carModel;
      this.selected.model.value = this.$route.query.value;
    }

    this.getConvenient();
    this.getMore(),
      this.getOldCars();
  },
  methods: {
    async getConvenient() {
      let url = `https://api.tf2sc.cn/api/tfcar/car/convenient`;
      let result = await axios.get(url, { headers: { PlatformType: "h5" } });
      // console.log(result)
      this.brands = result.data.data.convenientBrands;
      this.prices = result.data.data.convenientPrices;
      this.models = result.data.data.convenientModels;
    },
    async getMore() {
      let url = `https://api.tf2sc.cn/api/tfcar/car/moreScreen`;
      let result = await axios.get(url, { headers: { PlatformType: "h5" } });
      // console.log(result)
      this.displacement = result.data.data.more_screen_displacement;
      this.drive_type = result.data.data.more_screen_drive_type;
      this.emission_standard_type = result.data.data.more_screen_emission_standard_type;
      this.fuel_type = result.data.data.more_screen_fuel_type;
      this.gearbox_type = result.data.data.more_screen_gearbox_type;
      this.mileage = result.data.data.more_screen_mileage;
      this.seat_num = result.data.data.more_screen_seat_num;
    },
    async getOldCars() {


      let url = `https://api.tf2sc.cn/api/tfcar/car/list?sort=${this.sort}&page=${this.currentPage}`;
      if (this.carName != '') {
        url += `&carName=${this.carName}`
      }

      if (this.saleType != -1) {
        url += `&saleType=${this.saleType}`
      }
      if (this.selected.brand.id != "-1" && this.selected.series.id != "-1") {
        url += `&carSeries=${this.selected.series.id}`
      }

      if (this.selected.model.id != "-1") {
        url += `&carModel=${this.selected.model.id}`
      }

      if (this.selected.price.id != "-1") {
        var obj = JSON.parse(this.selected.price.id);
        if (obj.currentPriceLt) {
          url += `&currentPriceLt=${obj.currentPriceLt}`
        } else if (obj.currentPriceGe) {
          url += `&currentPriceGe=${obj.currentPriceGe}`
        } else if (obj.currentPrices) {
          url += `&currentPrices=${obj.currentPrices[0]}&currentPrices=${obj.currentPrices[1]}`
        }
      }

      if (this.selected.fuel_type.id != "-1") {
        url += `&fuelType=${this.selected.fuel_type.id}`
      }

      if (this.selected.drive_type.id != "-1") {
        url += `&driveType=${this.selected.drive_type.id}`
      }

      if (this.selected.seat_num.id != "-1") {
        url += `&seat=${this.selected.seat_num.id}`
      }

      if (this.selected.displacement.id != "-1") {
        var obj = JSON.parse(this.selected.displacement.id);
        if (obj.displacementLt) {
          url += `&displacementLt=${obj.displacementLt}`
        } else if (obj.displacementGe) {
          url += `&displacementGe=${obj.displacementGe}`
        } else if (obj.displacements) {
          url += `&displacements=${obj.displacements[0]}&displacements=${obj.displacements[1]}`
        }
      }

      if (this.selected.gearbox_type.id != "-1") {
        url += `&gearboxType=${this.selected.gearbox_type.id}`
      }

      if (this.selected.mileage.id != "-1") {
        var obj = JSON.parse(this.selected.mileage.id);
        if (obj.mileageLt) {
          url += `&mileageLt=${obj.mileageLt}`
        } else if (obj.mileageGe) {
          url += `&mileageGe=${obj.mileageGe}`
        } else if (obj.mileages) {
          url += `&mileages=${obj.mileages[0]}&mileages=${obj.mileages[1]}`
        }
      }

      if (this.selected.emission_standard_type.id != "-1") {
        url += `&emissionStandardType=${this.selected.emission_standard_type.id}`
      }


      let result = await axios.get(url, { headers: { PlatformType: "h5" } });
      // console.log(result)
      this.oldCars = result.data.data.content;
      this.totalPages = result.data.data.pages;
      this.pages = this.globalGetPages(result.data.data.pages, this.currentPage)
    },
    prev() {
      if (this.currentPage > 1) this.currentPage = this.currentPage - 1;
      else this.currentPage = 1;
    },
    next() {
      if (this.currentPage >= this.totalPages) this.currentPage = this.totalPages
      else this.currentPage = this.currentPage + 1;
    },
    async getSeries(brandId, value) {
      this.selected.brand.id = brandId;
      this.selected.brand.value = value;
      let url = `https://api.tf2sc.cn/api/tfcar/car/series300?brandId=${brandId}`;
      let result = await axios.get(url, { headers: { PlatformType: "h5" } });
      // console.log(result)
      this.series = result.data.data.content;
    },
    changeSelected(s, k) {
      s.id = '-1';
      s.value = '不限';
      console.log(k)
      if (k == 'brand') {
        this.getSeries('-1', '不限')
      }
    }
  },
}
</script>


<style scoped>
.search {
  padding: 20px 0;
}

.search .input {
  background-color: #fff;
  border: 1px solid #ccc;
  height: 36px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
}

.search .input input {
  outline: 0;
  border: 0;
  height: 34px;
  padding-left: 15px;
}

.search .input a {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  background-color: #5685fe;
  color: #fff;
  width: 60px;
  text-align: center;
  margin-right: 1px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.filters .brand,
.filters .series,
.filters .model,
.filters .price,
.filters .more,
.filters .brand ul,
.filters .series ul,
.filters .model ul,
.filters .price ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.filters .brand,
.filters .series,
.filters .model,
.filters .price,
.filters .more {
  min-height: 40px;
}

.filters ul li {
  margin-right: 15px;
  cursor: pointer;
  padding: 3px 5px;
}

.filters ul li.active {
  background-color: #5685fe;
  color: #fff;
}

.filters .title {
  width: 50px;
}

.filters .series {
  min-height: 40px;
}

.filters .series ul {
  width: calc(100% - 50px);
}

.filters .more select {
  margin-right: 10px;
  height: 26px;
  width: 80px;
  outline: 0;
  border-color: #5685fe;
}

.selected {
  min-height: 40px;
}

.selected,
.selected ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.selected ul li {
  padding-right: 20px;
  margin-right: 20px;
  position: relative;
}

.selected ul li .close {
  background: orange;
  color: red;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  position: absolute;
  top: -1px;
  right: 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.selected ul li .close::before {
  content: "\2716";
  font-size: 12px;
}

.list-box .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
}

.list-box .title .left span {
  margin-right: 40px;
  cursor: pointer;
}

.list-box .title .left span.active,
.list-box .title .right span.active {
  color: #5685fe;
  border-bottom: 2px solid #5685fe;
  padding-bottom: 8px;
  font-weight: 600;
}

.list-box .title .right span {
  margin-left: 40px;
  cursor: pointer;
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

.item .logo-box {
  width: 275px;
  height: 208px;
  position: relative;
}

.item .logo-box img {
  width: 275px;
  height: 208px;
}

.item .logo-box .saleType {
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

.page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
}

.page span {
  margin: 0 10px;
  border: 1px solid #ccc;
  padding: 3px 7px;
  cursor: pointer;
}

.page span.total {
  border: 0;
}

.page span.dot {
  border: 0;
  cursor: default;
}

.page span.active {
  border-color: #5685fe;
  color: #5685fe;
}
</style>
