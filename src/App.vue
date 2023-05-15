<template>
  <div class="app">
    <TF-Header></TF-Header>
    <!-- <keep-alive> -->
      <router-view />
    <!-- </keep-alive> -->
    <TF-Footer></TF-Footer>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: #333;
}

.app {
  padding-top: 70px;
}

.box {
  width: 1200px;
  margin: 0 auto;
}
</style>
