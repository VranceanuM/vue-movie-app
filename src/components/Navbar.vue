<template>

  <v-layout
    
    
  ><v-toolbar dark color="primary" fixed>
    <v-toolbar-side-icon
    @click.stop="drawer = !drawer">
    </v-toolbar-side-icon>

   <router-link to="/" style="text-decoration:none;"> <v-toolbar-title class="white--text">Moive Star</v-toolbar-title></router-link>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>

   

    <v-navigation-drawer
    
      v-model="drawer"
      :mini-variant="mini"
      absolute
      dark
      temporary
      height="100%"
      style="position:fixed; background-color:#2f70d1;"
    >
      <v-list class="pa-1">
        <v-list-tile v-if="mini" @click.stop="mini = !mini">
          <v-list-tile-action>
            <v-icon>chevron_right</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon @click.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
  </v-layout>
  
</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
                {title : "Discover",icon : 'dashboard'},
                {title : "TV & Movies",icon : 'dashboard'},
                {title : "Popular",icon : 'dashboard'},
                {title : "Reviews",icon : 'dashboard'},
        ],
        mini: true,
        right: null
      }
    }
  }
</script>