// pages/cart/cart.js
Page({

  data: {
    inputShowed: false,
    inputVal: "",
    number:0
},
incrementNum() {
    this.setData({
        number:this.data.number + 1
    });
},

showInput: function () {
    this.setData({
        inputShowed: true
    });
},
hideInput: function () {
    this.setData({
        inputVal: "",
        inputShowed: false
    });
},
clearInput: function () {
    this.setData({
        inputVal: ""
    });
},
inputTyping: function (e) {
    this.setData({
        inputVal: e.detail.value
    });
}
})