<template>
<div>
<Navbar />
<div>Game detail</div>
{{movi}}
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
      movi: null,
      id:this.$route.params.m_id
    }
    },
    
mounted()  {
     
    axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=7bc75e1ed95b84e912176b719cdeeff9&language=en-US`)
      .then(response => (this.movi= response.data))
  }
}
</script>

