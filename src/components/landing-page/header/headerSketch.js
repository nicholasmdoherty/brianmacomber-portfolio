export default function sketch(p) {
  let x;
  let y;

  let customWidth;
  let customHeight;

  let xspeed;
  let yspeed;

  let img;
  let isMobile;

  p.preload = function() {
    img = p.loadImage("/img/brand/logo-small.png");
  };

  p.setup = function() {
    p.createCanvas(customWidth, customHeight);
    x = p.random(customWidth);
    y = p.random(customHeight);

    if (isMobile) {
      xspeed = 1.5;
      yspeed = 1.5;
    } else {
      xspeed = 3;
      yspeed = 2.5;
    }
  };

  p.draw = function() {
    p.clear();

    if (isMobile) {
      // rect(x, y, 80, 60);
      // Draw the img logo
      p.image(img, x, y, img.width / 2, img.height / 2);

      x = x + xspeed;
      y = y + yspeed;

      if (x + img.width / 2 >= p.width) {
        xspeed = -xspeed;
        x = p.width - img.width / 2;
      } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
      }

      if (y + img.height / 2 >= p.height) {
        yspeed = -yspeed;
        y = p.height - img.height / 2;
      } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
      }
    } else {
      // rect(x, y, 80, 60);
      // Draw the img logo
      let imgWidth = customWidth > 768 ? img.width * 1.2 : img.width / 2;
      let imgHeight = customWidth > 768 ? img.height * 1.2 : img.height / 2;

      p.image(img, x, y, imgWidth, imgHeight);

      x = x + xspeed;
      y = y + yspeed;

      if (x + imgWidth >= p.width) {
        xspeed = -xspeed;
        x = p.width - imgWidth;
      } else if (x <= 0) {
        xspeed = -xspeed;
        x = 0;
      }

      if (y + imgHeight >= p.height) {
        yspeed = -yspeed;
        y = p.height - imgHeight;
      } else if (y <= 0) {
        yspeed = -yspeed;
        y = 0;
      }
    }
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    customWidth = props.containerWidth;
    customHeight = props.containerHeight;
    p.resizeCanvas(props.containerWidth, props.containerHeight);

    if (props.isMobile) {
      isMobile = true;
    } else {
      isMobile = false;
    }
  };
}
