<script setup lang="ts">

</script>

<template>
    <header class="mb-6 py-3 px-2">
      <div class="flex justify-between align-middle w-[80%] mx-auto">
        <RouterLink to="/" class="text-3xl font-semibold hover:underline decoration-violet-900">Blog Site</RouterLink>
        <nav>
          <RouterLink class="text-lg mx-3 hover:underline decoration-violet-900" to="/">Home</RouterLink>
          <RouterLink class="text-lg mx-3 hover:underline decoration-violet-900" to="/blogs">Blogs</RouterLink>
          <RouterLink class="text-lg mx-3 hover:underline decoration-violet-900" to="/user-dashboard/1">User Dashboard</RouterLink>
          <RouterLink class="text-lg mx-3 hover:underline decoration-violet-900" to="/author-dashboard/1">Author Dashboard</RouterLink>
          <RouterLink class="text-lg mx-3 hover:underline decoration-violet-900" to="/signUp">Sign Up</RouterLink>
          <RouterLink class="text-lg mx-3 hover:underline decoration-violet-900" to="/signIn">Sign In</RouterLink>
        </nav>
      </div>      
    </header>  
</template>

<style scoped>

</style>