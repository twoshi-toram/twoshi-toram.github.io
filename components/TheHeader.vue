<template>
  <div>
    <v-app-bar dark fixed app color="indigo darken-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <v-toolbar-title class="font-weight-black" v-text="title" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      dark
      width="300"
    >
      <v-toolbar
        dark
        elevation="0"
        width="300"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        <v-toolbar-title class="font-weight-black" v-text="title" />
      </v-toolbar>
      <v-list>
        <v-list-item
          v-for="(menu, index) in menus"
          :key="`menu-${index}`"
          @click="$router.push(menu.path)"
        >
          <v-list-item-icon class="mr-3">
            <v-icon v-text="menu.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              class="font-weight-bold"
              v-text="menu.title"
            ></v-list-item-title>
          </v-list-item-content>
          <!-- <v-list-item-title class="font-weight-bold">{{ menu.title }}</v-list-item-title> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      title: 'ある冒険者の雑記帳',
      drawer: false,
      menus: [
        {
          icon: 'mdi-shield-sword-outline',
          title: 'はじめに',
          path: '/',
        },
        {
          icon: '',
          title: '初心者ガイド',
          path: '/beginner',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
