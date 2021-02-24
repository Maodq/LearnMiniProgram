// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(event) {
      //1、 获取传入的index
      var index = event.currentTarget.dataset.index;
      var item = event.currentTarget.dataset.item
      // 2、 改变记录的currentIndex
      this.setData({
        currentIndex:index
      })
      // 3、发出自定义事件
      this.triggerEvent("titleClick",{index,item},{})
    }
  }
})
