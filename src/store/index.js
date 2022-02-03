import { createStore } from "vuex";
import slideOne from '../assets/img/slide.png'
import slideTwo from '../assets/img/slidetwo.png'
import slideThree from '../assets/img/slidethree.png'
import slideFour from '../assets/img/slidefour.png'

export default createStore({
  state: {
    slides : [slideOne, slideTwo, slideThree, slideFour],
    visibleSlide : 0,
    direction : '',
  },
  mutations: {
    minVisibleSlide(state) {
      state.direction = 'left';
      if(state.visibleSlide <= 0) {
        state.visibleSlide = state.slides.length -1;
      } else {
        state.visibleSlide --;
      }
    },
    plusVisibleSlide(state) {
      state.direction = 'right';
      if(state.visibleSlide >= state.slides.length -1){
        state.visibleSlide = 0;
      } else {
        state.visibleSlide ++;
      }
    }
  },
  actions: {
    leftClick(context) {
      context.commit('minVisibleSlide');
    },
    rightClick(context) {
      context.commit('plusVisibleSlide');
    }
  },
  modules: {},
});
