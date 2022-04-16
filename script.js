var index = 1;
    showimg(index);
    function btn_slider(e) {
      showimg((index = e));
    }
    function showimg(e) {
      var i;
      const img = document.querySelectorAll("img");
      const Slider = document.querySelectorAll(".btn_slider span");
      if (e > img.length) {
        index = 1;
      }
      if (e < 1) {
        index = img.length;
      }
      for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
      }
      for (i = 0; i < Slider.length; i++) {
        Slider[i].style.background = "";
      }
      img[index - 1].style.display = "block";
      Slider[index - 1].style.background = "white";
    }