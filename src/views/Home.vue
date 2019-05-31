<template>
  <v-container fill-height grid-list-md text-xs-center class="bgcol">
    <v-layout row wrap justify-center align-center>
      <v-flex xs8 fill-width offset-xs-2>
        <router-link to="/news">
          <v-img
            src="https://www.gamewallpapers.com/img_script/mobile_dir/img.php?src=wallpaper_diablo_3_36.jpg&width=320&height=500&crop-to-fit"
            lazy-src="https://www.gamewallpapers.com/img_script/mobile_dir/img.php?src=wallpaper_diablo_3_36.jpg&width=320&height=500&crop-to-fit"
          ></v-img>
        </router-link>
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-layout>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {}
};
</script>
<style>
.bgcol {
  background-color: black;
}
</style>
