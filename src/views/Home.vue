<template>
<div class="container">
 <Navbar />
 
 <v-container>   
   <h1 class="text-lg-left mt-5">Recomanded for you</h1>

    <v-layout row wrap align-start>
      <v-flex xs12 sm6 md4 class="p-4" v-for="m in movies" :key=m.id>
        <v-card 
        
        dark color="secondary">
          <v-card>
        <v-img
          :src="'https://image.tmdb.org/t/p/original/' + m.backdrop_path"
          aspect-ratio=".75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{m.original_title}}</h3>
            <div>Relase Date: {{m.release_date}}</div>
            <div>Vote Average: {{m.vote_average}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">
            <router-link style="text-decoration:none;" :to ="{name:'movie',params:{m_id:m.id}}">Explore</router-link></v-btn>
        </v-card-actions>
      </v-card>
        </v-card>
      </v-flex>
    </v-layout>
 </v-container>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import axios from 'axios'
export default {
  components:{
    Navbar
  },
   data () {
    return {
      movies: null,
      image:'https://image.tmdb.org/t/p/w500/'
    }
    },
  mounted () {
    axios
      .get('https://api.themoviedb.org/3/movie/popular?api_key=7bc75e1ed95b84e912176b719cdeeff9&language=en-US&page=1')
      .then(response => (this.movies = response.data.results))
  }
}
</script>

