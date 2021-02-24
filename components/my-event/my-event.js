// components/my-event/my-event.js
Component({
  methods: {
    handleIncrement() {
      // 向父组件中发出自定义组件，第一个{}表示要携带的参数
      this.triggerEvent("incrementNum", {}, {})
    }
  }
})
