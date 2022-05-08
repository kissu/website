---
layout: ~/layouts/BlogLayout.astro
title: hehe boiixx
how: very
setup: |
  import Counter from 'comp/Counter.vue'
slug: code
---

## Hello

<Counter client:visible />

I'm a {frontmatter.how} tasty test

`nuxt.config.js`

```vue
<template>
  <div>
    <pre>all the interesting images: {{ pokemon.sprites.other }}</pre>
    <div class="reference-breakpoint"></div>

    <p>Down below are all the remaining images ⬇️</p>
    <img :src="pokemon.sprites.other.dream_world.front_default" />
    <!-- <img class="hide-when-mobile" loading="lazy" :src="pokemon.sprites.other.home.front_default" /> -->
    <img class="hide-when-mobile" loading="lazy" :src="pokemon.sprites.other.home.front_shiny" />
    <img
      class="hide-when-mobile"
      loading="lazy"
      :src="pokemon.sprites.other['official-artwork'].front_default"
    />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const pokemon = await $axios.$get('https://pokeapi.co/api/v2/pokemon/charizard')
    return { pokemon }
  },
}
</script>

<style scoped>
img {
  display: block;
  height: 100vh;
  width: auto;
}

.reference-breakpoint {
  width: 1000px;
  height: 1rem;
  background-color: red;
}

@media (max-width: 1000px) {
  .hide-when-mobile {
    display: none;
  }
}
</style>
```

![colline](https://live.staticflickr.com/3564/3600358815_fbe3d58424_b.jpg)
