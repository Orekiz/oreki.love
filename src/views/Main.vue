<script setup lang="ts">
import Footer from './Footer.vue'
  const links = [
    { url: 'https://notes.oreki.love', icon: 'i-mdi-notebook' },
    { url: 'https://music.oreki.love', icon: 'i-mdi-music' },
    { url: 'https://github.com/Orekiz', icon: 'i-mdi-github' },
  ]
</script>

<template>
  <main text="gray-800 dark:gray-100" w-full h-full flex justify-center items-center>
    <div z--1 fixed top-0 w-screen h-screen bg-bottom bg-no-repeat class="backgroundimg lt-md:bg-cover"></div>
    <section my-max-width class="lt-md:p-10" transform="translate-y--16">
      <h1 lh-10 font-black text-9 bg-transparent hover="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent" transition cursor-default>
        Oreki
      </h1>
      <p indent-1 lh-10>no bio here.</p>
      <section flex="~ gap-5" mt-5 text-14>
        <a :href="item.url" v-for="(item, index) in links" :key=index :class="item.icon" hover="bg-gradient-to-r from-cyan-500 to-blue-500" cursor-pointer target="_blank"></a>
      </section>
    </section>
  </main>
  <Footer />
</template>

<style scope>
.backgroundimg {
  background: url('../assets/hero@75.b2469a49.jpg');
  background-color: rgb(248 250 252);
  background-size: 150rem;
}
.dark .backgroundimg {
  background: url('../assets/hero-dark@90.dba36cdf.jpg');
  background-repeat: no-repeat;
  background-color: rgb(11, 17, 33);
  background-size: 80rem;
  background-position-x: -30rem;
}
</style>
