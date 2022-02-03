<template>
  <div id="app">
    <Carousel>
      <CarouselSlide v-for="(slide, index) in slides" :key="slide" :index="index" :visibleSlide="this.$store.state.visibleSlide" :direction="this.$store.direction" >
        <img :src="slide" alt="">
      </CarouselSlide>
    </Carousel>

  </div>
</template>

<script>
  import Carousel from './components/body/Carousel.vue' 
  import CarouselSlide from './components/body/CarouselSlide.vue'

  export default {
  data() {
    return {
      slides : [],
    }
  },
  
  components : {
      'Carousel' : Carousel,
      'CarouselSlide' : CarouselSlide,
    },

  methods : {
    getSlide : function () {
      for(let i = 0; i < this.$store.state.slides.length; i++ ){
        this.slides.push(this.$store.state.slides[i]);
      }
      // this.slides = (this.$store.state.slides);
      console.log(this.slides);
    }
  },

  created() {
    this.getSlide();
  },
}

</script>

<style scoped>
  *{
    box-sizing: border-box;
  }
  html{
    width: 100%;
  }
  img{
    width: 1000px;
  }
  #app{
    width: 1000px;
    height: 250px;
    margin: 1rem auto;
    overflow: hidden;
  }
</style>
