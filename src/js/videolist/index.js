const itemHtml = require('./itemlist.html');
require('./index.css');
export  default class VideoList
{
	static setup(list)
	{
		var $liveTitle=list.liveTitle;
		var $liveTimeCount=list.liveTimeCount;
		var $liveViewCount=list.liveViewCount;
		var $liveTxt=list.liveTxt;
		$('.live-title').html($liveTitle);
		$('.live-time-count').html($liveTimeCount);
		$('.live-view-count').html($liveViewCount);
		$('.live-txt').html($liveTxt);
	}
}
