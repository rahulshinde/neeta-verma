<template>
  <footer class="fixed lowercase bottom-0 right-2 origin-top-right rotate-90 text-xxs">
    <p>Pace > Time | &copy;{{ year }} Neeta Verma | Site by <a href="https://r-s-s.net" target="blank" class="underline">ākash</a></p>
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear()
</script>