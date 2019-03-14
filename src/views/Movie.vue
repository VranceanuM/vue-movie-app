<template>
<div >
<Navbar />
 <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-2 font-weight-thin mb-3">{{film_title}}</h1>
      <h4 class="subheading">{{film_tagline}}</h4>
    </v-layout>
  </v-parallax>

</div>
</template>
<script>
import Navbar from '../components/Navbar'
import axios from "axios"

export default {
     components:{
        Navbar
      },
      data () {
    return {
      film_title:null,
      film_tagline:null,
      m_id:this.$route.params.m_id    
      }
    },
    
mounted()  {
     
    axios
    .get(`https://api.themoviedb.org/3/movie/${this.m_id}?api_key=7bc75e1ed95b84e912176b719cdeeff9&language=en-US`)
      .then(response => (
        this.film_title=response.data.original_title,
        this.film_tagline=response.data.tagline
        ))
  }
}
</script>

