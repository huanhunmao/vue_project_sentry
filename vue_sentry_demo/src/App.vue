<template>
  <div id="app">
    <h1>Vue 项目 Sentry 上报错误搭建及测试</h1>
    <button @click="throwError">Throw error</button>
    <button @click="throwBadRequest">模拟错误请求</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  methods: {
    throwError() {
      console.log('1')
      throw new Error('Sentry Error333')
    },
    async throwBadRequest() {
      console.error('Sentry Error Mock')
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  width: 100px;
  height: 50px;
  color: red;
  border-radius: 10%;
  cursor: pointer;
}
</style>
