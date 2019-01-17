require('./index.css');
export default class Header {
  static setUp(user){
    let $upic=$('.header-upic img');
    let $uname=$('.header-udata h1');
    let $uintro=$('.header-udata p');
    $upic.attr('src',user.upic);
    $uname.html(user.uname);
    $uintro.html(user.uintro);
  }
}
