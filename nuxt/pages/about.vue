<template>
  <main class="grid grid-cols-12 w-full items-start gap-4 px-2">
    <figure class="col-span-3">
      <img :src="data.about.profileImage" alt="Neeta Verma" class="w-full" />
    </figure>
    <section class="col-span-4 font-serif">
      <h2 class="font-medium uppercase font-sans">Bio</h2>
      <PortableText :value="data.about.about"/>
    </section>
    <section class="grid grid-cols-5 col-span-5 mb-8">
      <header class="flex col-start-2 col-span-4">
        <h2 class="font-medium">CV</h2>
        <a :href="data.about.cv_download" target="blank" class="ml-2 font-serif">(Download)</a>
      </header>
      <div class="grid grid-cols-5 gap-x-4 col-span-5" v-for="section in data.about.cv_list" :key="section._key">
        <h3 class="font-medium col-start-2 col-span-4 lowercase mt-4">{{ section.title }}</h3>
        <div class="col-span-5 grid grid-cols-5 gap-x-4 mt-1" v-for="item in section.items" :key="item._key">
          <h5 class="font-serif col-span-1 text-right">{{ item.year }}</h5>
          <h4 class="font-serif col-span-4 font-bold">{{ item.title }}</h4>
          <div class="col-span-4 col-start-2 font-serif pr-8">
            <PortableText :value="item.description" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { About } from '@/services/Queries'
  import { PortableText } from '@portabletext/vue';
  const { $UrlFor } = useNuxtApp()
  
  const { data, error } = useSanityQuery(About)
</script>
