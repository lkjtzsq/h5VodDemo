import Event from '../events';
require('./index.css');
export default class CommentSender {
  static setup() {
    // $('.comment-textbox .send-btn').click(() => {
    //   let $text = $('.comment-textbox .send-txt');
    //   let msg = $text.val();
    //   Event.trigger(Event.EventConstant.Comments_Sended, {
    //     name: '小鱼儿',
    //     comment: msg
    //   });
    //   $text.val("");
    // });
		$('.write-pl').click(function(){
      alert("下载中国青年报App，参与评论。");
    });
    $('.comment-textbox .favoriate-send').click(() => {
      Event.trigger(Event.EventConstant.Favoriation_Sended);
    })
  }
}
