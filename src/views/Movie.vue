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
     <v-flex xs6 sm6  md4 lg3 offset-sm1 style="position:absolute; top:350px;">
      <v-card>
        <v-img
          :src="'https://image.tmdb.org/t/p/original' + film_poster_path"
          aspect-ratio=".75" style="background-image-width:300px;"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h5 xs12 sm3 > {{ film_overview }} </h5>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
   <div class="loading" v-if="loading"><fingerprint-spinner/></div>

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
      loading:true,
      film_poster_path:null,
      film_title:null,
      film_tagline:null,
      film_overview:null,
      m_id:this.$route.params.m_id    
      }
    },
    
mounted()  {
     
    axios
    .get(`https://api.themoviedb.org/3/movie/${this.m_id}?api_key=7bc75e1ed95b84e912176b719cdeeff9&language=en-US`)
      .then(response => (
        this.film_title=response.data.original_title,
        this.film_tagline=response.data.tagline,
        this.film_overview=response.data.overview,
        this.film_poster_path=response.data.poster_path,
        this.loading = false
        ))
  }
}
</script>

