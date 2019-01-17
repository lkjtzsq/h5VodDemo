require('./index.css');
let num = 0;
export default class VideoPlayer {
  constructor(props) {
    this.player;
    this.props = props;
    this._setup();
    this._bindEvent();
    // this._unbindEvent();
    this._firstFullscreen = true;
  }

  loadByUrl(url) {
    if (this.player) {
      this.player.loadByUrl(url);
    }
  }

  dispose() {
    if (this.player) {
      this.player.dispose();
      Zepto('#' + this.props.id).empty();
    }
  }

  _setup() {
    this.player = new Aliplayer(this.props);
  }

  _bindEvent() {
    let that = this;
    this.player.on('ready', (e) => {
      $('#poster,#playBtn').click(function() {
        $('#poster,#playBtn').hide();
        that.player.play();
      });
    });

    this.player.on('play', (e) => {
    $('#poster,#playBtn').hide();
    });

    this.player.on('ended', (e) => {
      console.log('ended');
      endedHandle();
    });
    this.player.on('pause', (e) => {
      console.log('pause');
    });

    function endedHandle() {
      num++;
      $.get("http://jsonplaceholder.typicode.com/posts", function(data) {
        console.log(data);
      });
      if (num > 3) {
        that.loadByUrl("http://sv.cyol.com/record/2018-12-31/zqlive/front-360923307ed4e5ab00bc7f3ed43fc39a/front-360923307ed4e5ab00bc7f3ed43fc39a.m3u8");
      } else {
        setTimeout(function() {
          endedHandle();
        }, 5000);
      }
    }
    // this.player.on('requestFullScreen', (e)=>{
    // 	    let video=$(that.player.tag);
    // 	    video.addClass('center');
    // });

    // this.player.on('x5cancelFullScreen',(e)=>{
    // 	let service = that.player.fullscreenService;
    // 	if(service.getIsFullScreen())
    // 	{
    // 		service.cancelFullScreen()
    // 	}
    //     $(that.player.el()).removeClass('enter-x5-player');

    // });

    // this.player.on('x5requestFullScreen',(e)=>{
    //     //调整视频的位置
    //     $(that.player.el()).addClass('enter-x5-player');
    //     var screenHeight = document.body.clientHeight*(window.devicePixelRatio||1)+ "px";
    //     that.player.tag.style.height = screenHeight;
    //     let video=$(that.player.tag);
    //     setTimeout(()=>{
    //         video.removeClass('x5-top-left');
    //     });
    // });
    // this.player.on('cancelFullScreen', (e)=>{
    // 	let video=$(that.player.tag);
    //     setTimeout(()=>{
    //         alert(video.length());
    //        video.removeClass('center');
    //        video.removeClass('x5-top-left');
    //     });
    // });
    //微信左上角退出按钮触发是，关闭页面
    // this.player.tag.addEventListener("x5videoexitfullscreen", ()=>{
    //     if(WeixinJSBridge)
    //         WeixinJSBridge.call('closeWindow');
    //     else
    //     {
    //         try
    //         {
    //             window.location.refresh();
    //         }catch(e)
    //         {}
    //     }
    // });

    $(document).on('WeixinJSBridgeReady', () => {
      let video = $(that.player.el()).find('video')[0];
      video.play();
    });
  }

  _unbindEvent() {
    let that = this;
    this.player.off('ready', function(e) {
      // 解决ios不自动播放的问题
      if ($.os.ios)
        that._autoPlay();
      console.log('ready');

    });

    this.player.off('play', function(e) {
      console.log('play');

    });

    this.player.off('ended', function(e) {
      console.log('ended');

    });
    this.player.off('pause', function(e) {
      console.log('pause');

    });
  }
}
