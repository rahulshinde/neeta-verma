<template>
  <header class="flex sticky top-0 py-4 bg-bg justify-between">
    <h1 class="px-2 uppercase font-bold">
      <NuxtLink class="group" :to='path'>
        Neeta Verma 
        <span class="opacity-0 group-hover:opacity-100" v-if="route.path != '/about'">
          ?
        </span>
        <span 
          v-if="route.path == '/about'"
          class="
            w-4
            -translate-y-[0.28rem]
            inline-block
            before:content-[''] before:block before:w-full before:rotate-45 before:border-t-[3px] before:border-fg before:origin-center before:translate-y-[3px]
            after:content-[''] after:block after:w-full after:-rotate-45 after:border-t-[3px] after:border-fg after:origin-center
          "
        >

        </span>
      </NuxtLink>
    </h1>
  </header>
</template>

<script setup>
  const route = useRoute()
  const path = computed(()=>{
    return route.path === '/' ? '/about' : '/'
  }) 
</script>