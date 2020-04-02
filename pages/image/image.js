// pages/image/image.js
Page({
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    wx.chooseImage({
      complete: (res) => {
        // console.log(res)
        // 取出路径
        const path = res.tempFilePaths[0]
        // 设置路径
        this.setData({
          imagePath:path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')
  }

})