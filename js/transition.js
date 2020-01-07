import Highway from '@dogstudio/highway';
// import {gsap} from 'gsap';

class Fade extends Highway.Transition {
  out({from, done}) {
    from.style.opacity = 0;
    setTimeout(() => {
      done();
    }, 500);
  }
  in({from, to, done}) {
    from.remove();
    to.style.opacity = 0;
    setTimeout(() => {
      to.style.opacity = 1;
      done();
    }, 500);
  }
}

export default Fade;
