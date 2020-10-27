const app = getApp()

Page({
  data: {
    imglist: []
  },
  
  onLoad: function () {
    let imglist = [{
      src: 'https://cdn.pixabay.com/photo/2020/10/09/08/15/dragonfly-5639879__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/09/14/10/47/eilean-donan-5570684__340.jpg'
    },{
      src: 'https://picsum.photos/id/499/5184/3456'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/07/04/14/27/snow-5369752__340.jpg'
    },{
      src: 'https://cn.pixabay.com/photo/2020/10/10/17/53/sunrise-5643811__340.jpg'
    },{
      src: 'https:/cdn.pixabay.com/photo/2020/10/11/06/53/buildings-5644899__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/11/20/23/acorns-5646979__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/09/08/09/12/mountains-5554085__340.jpg'
    },{
      src: 'https/cdn.pixabay.com/photo/2020/06/08/10/00/black-5273871__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/06/17/31/horse-5632882__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/05/18/43/building-5630441__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/07/05/53/hands-5634107__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/08/22/15/51/ladybug-5508667__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/09/14/22/27/river-5572289__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/09/14/10/47/eilean-donan-5570684__340.jpg'
    },{
      src: 'https://picsum.photos/id/499/5184/3456'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/07/04/14/27/snow-5369752__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/10/17/53/sunrise-5643811__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/11/06/53/buildings-5644899__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/11/20/23/acorns-5646979__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/09/08/09/12/mountains-5554085__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/06/08/10/00/black-5273871__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/06/17/31/horse-5632882__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/05/18/43/building-5630441__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/10/07/05/53/hands-5634107__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/08/22/15/51/ladybug-5508667__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/09/14/22/27/river-5572289__340.jpg'
    },{
      src: 'https://cdn.pixabay.com/photo/2020/09/14/10/47/eilean-donan-5570684__340.jpg'
    }]
    this.setData({ imglist })
  }
})
