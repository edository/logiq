<script setup>

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
      <div class="flex justify-center mb-4">
        <img src="@/assets/logo-logiq.png" alt="logiq" class="w-20 h-20">
      </div>
      <h3 class="text-2xl font-bold text-center">Login to your account</h3>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="username">Username</label>
            <input type="text" placeholder="Username"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
            <span class="text-xs tracking-wide text-red-600">Username field is required </span>
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input type="password" placeholder="Password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
          </div>
          <div class="flex items-baseline justify-between">
            <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
            <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>