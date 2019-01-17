          window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
          $(function() { //页面加载时检查
            hengshuping();
          });

          function hengshuping() {
            if (window.orientation == 0 || window.orientation == 180) {
              var shu = window.localStorage.getItem('name')
              if (shu == 'a' || !shu) {
                window.location.reload();
                window.localStorage.setItem('name', 'b');
              }
              //alert('竖屏')
              orientation = 'portrait';
              return false;
            } else if (window.orientation == 90 || window.orientation == -90) {
              var shu = window.localStorage.getItem('name')
              if (shu == 'b' || !shu) {
                window.location.reload();
                window.localStorage.setItem('name', 'a');
              }
              //alert('竖屏')
              orientation = 'landscape';
              return false;
            }
          }
