/*判断浏览器横屏或竖屏所执行的函数*/
function detectOrient() {
  if (Math.abs(window.orientation) === 90) {
    // 横屏
    alert("横屏")
  } else {
    // 竖屏
    alert("竖屏")
  }
}
detectOrient();
window.addEventListener('orientationchange', detectOrient);
