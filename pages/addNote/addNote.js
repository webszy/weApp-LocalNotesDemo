// pages/addNote.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title:'',
      content:''
  },
  saveNote(){
    let list = app.globalData.NoteList
    list.push({
      title:this.data.title,
      content: this.data.content
    })
    app.globalData.NoteList=list
    if (app.globalData.NoteList.indexOf(list) == app.globalData.NoteList.lenght-1){
      wx.navigateBack({
        delta:1
      })
    }
  },
  getTitle({detail}){
    // console.log(detail.value)
    this.setData({
      title: detail.value
    })
  },
  getContent({ detail}){
    // console.log(detail.value)
    this.setData({
      content: detail.value
    })
  },
  backToIndex(){
    wx.navigateBack({
      delta:1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.setStorage({
      key: 'notes',
      data: app.globalData.NoteList
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})