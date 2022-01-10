<template>
  <div>
    <v-row>
      <h2 :id="title">
        <a class="sub-content-text" :href="`#${title}`">{{ title }}</a>
      </h2>
    </v-row>
    <v-row>
      <slot />
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'SubContent',
  props: {
    title: String,
  }
}
</script>

<style>
a.sub-content-text {
  text-decoration: none;
}

a.sub-content-text:hover:after {
  content: '#';
  color: #1976d2;
}

a:focus:after {
  content: '#';
  color: #1976d2;
}

h2 {
  margin: 45px 0 0.8em;
  padding-bottom: 0.7em;
  border-bottom: 1px solid #999;
  width: 100%
}

.sub-content-text {
  color: #273849 !important;
}
</style>
