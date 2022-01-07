<template>
  <v-app>
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
      <v-list
        v-for="(menu, index) in menus"
        :key="`menu-${index}`"
      >
        {{ menu.title }}
        <v-list-item
          v-for="(item, index) in menu.items"
          :key="`item-${index}`"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'ある冒険者の雑記帳',
      drawer: false,
      menus: [
        {
          icon: '',
          title: 'はじめに',
          items: [],
        },
        {
          icon: '',
          title: '初心者ガイド',
          items: [
            {
              title: '片手剣'
            }
          ],
        },
        {
          icon: '',
          title: '防具',
          items: [
            {
              title: '服'
            },
            {
              title: '追加装備'
            },
            {
              title: '特殊装備'
            }
          ],
        },
        {
          icon: '',
          title: 'クリスタ',
          items: [],
        },
      ],
    }
  },
}
</script>

<style scoped>
.main {
  background-image: url("~assets/img/sofia.png");
  background-color: rgba(255, 255, 255, 0.8);
  background-blend-mode: lighten;
  background-attachment: fixed;
  color: #273849;
}
</style>
