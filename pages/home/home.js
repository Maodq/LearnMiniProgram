// // pages/home/home.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })

Page({
  data: {
    name:'xiaomao',
    students: [
      {id:10,name:"aa",age:18},
      {id:11,name:"bb",age:15},
      {id:12,name:"cc",age:17},
      {id:13,name:"dd",age:20}
    ],
    counter:0,
    list:[],
    imagePath:[]
  },
  onLoad() {
    //如果下面不使用箭头函数的话，this的指向会出问题，需要这样写
    // 在wx.request上面写 const _this = this
    // 再把this.setData改成 _this.setData
    wx.request({
      url: 'http://152.136.185.210:7878/api/m5/recommend',
      success: (res) => {
        console.log(res)
        const data = res.data.data.list
        this.setData({
          list:data
        })
      }
    })
  },
  incBtnClick() {
    //1.错误做法：页面不会进行刷新
    // this.data.counter++
    // console.log(this.data.counter)
    // 2.使用this.setDate()
    this.setData({
      counter:this.data.counter + 1
    })
  },
  subBtnClick() {
    //1.错误做法：页面不会进行刷新
    // this.data.counter++
    // console.log(this.data.counter)
    // 2.使用this.setDate()进行修改，实现响应式
    this.setData({
      counter:this.data.counter - 1
    })
  },
  handleChooseAlbum() {
    wx.chooseImage({
      success:(res) => {
       this.setData({
         imagePath:res.tempFilePaths[0]
       })
      }
    })
  }
})