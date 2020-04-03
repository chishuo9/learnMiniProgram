// pages/wxml/wxml.js
Page({
  data: {
    message:'你好',
    firstname:'cc',
    age:20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 68,
    movies:['111', '222', '333']
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    })
  },
  handleSwitchColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  }
})