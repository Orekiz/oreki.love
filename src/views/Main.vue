<script setup lang="ts">
  const links = [
    { url: 'https://notes.oreki.love', icon: 'i-mdi-notebook' },
    { url: 'https://music.oreki.love', icon: 'i-mdi-music' },
    { url: 'https://github.com/Orekiz', icon: 'i-mdi-github' },
  ]
</script>

<template>
  <main w-full h-full flex justify-center items-center>
    <div z--1 fixed top-0 w-screen h-screen bg-bottom bg-no-repeat class="backgroundimg lt-md:bg-cover"></div>
    <section container max-w="2xl" class="lt-md:p-10">
      <h1 lh-10 font-black text-5xl bg-transparent hover="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent" transition cursor-default>
        Oreki
      </h1>
      <p indent-2 lh-10>no bio here.</p>
      <section flex="~ gap-5" mt-5 text-8xl>
        <a :href="item.url" v-for="(item, index) in links" :key=index :class="item.icon" hover="bg-gradient-to-r from-cyan-500 to-blue-500" cursor-pointer target="_blank"></a>
      </section>
    </section>
  </main>
</template>

<style scope>
.backgroundimg {
  background: url('../assets/hero@75.b2469a49.jpg');
  background-color: rgb(248 250 252);
  background-size: 150rem;
}
</style>
