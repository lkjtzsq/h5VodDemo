const itemHtml2 = require("./comment-list-item.html");
require("./index.css");
export default class Comment {
  static setUp($wrapper, list) {
    list.forEach(function(item, index) {
      if (index < 10) {
				let $item2 = $(itemHtml2);
				let $upic = $item2.find('img');
		    let $uname = $item2.find('.uname');
		    let $utalk = $item2.find('.utalk');
        $upic.attr('src', item.thumbnailUrl);
        $uname.html(item.title);
        $utalk.html(item.url);
        $wrapper.append($item2);
      }
    });
  }
}
