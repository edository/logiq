<script setup>

import { ref } from "vue";
const showSidebar = ref(false);
const openChildMenu = ref(false);
const openChildMenu2 = ref(false);

</script>

<template>
  <div class="relative flex min-h-screen">
    <!-- Sidebar -->
    <div
      class="absolute inset-y-0 left-0 w-64 px-2 py-4 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-cyan-600 text-cyan-100 md:relative md:-translate-x-0"
      :class="{ 'relative -translate-x-0': showSidebar }">
      <a href="" class="flex items-center px-4 space-x-2">
        <!-- <img src="../assets/logo-logiq-haris.png" class="w-10 h-10" alt=""> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
        <span class="text-2xl font-extrabold text-white">LOGIQ</span>
      </a>
      <nav>
        <ul>
          <li>
            <a href="/"
              class="flex items-center px-4 py-3 space-x-2 transition duration-200 rounded hover:bg-cyan-700 hover:text-cyan-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span class="text-white group-hover:text-cyan-300">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" id="parentMenu" @click="openChildMenu = !openChildMenu"
              class="flex items-center px-4 py-3 space-x-2 transition duration-200 rounded hover:bg-cyan-700 hover:text-cyan-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="text-white group-hover:text-cyan-300 flex-1">User</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
              <!-- Child menu -->
              <ul id="childMenu" class="text-left pl-12 w-full py-3 space-y-3" :class="{ 'hidden': openChildMenu }">
                <li>
                  <a href="#">Tess</a>
                </li>
                <li>
                  <a href="#">Tess</a>
                </li>
                <li>
                  <a href="#">Tess</a>
                </li>
                <li>
                  <a href="#">Tess</a>
                </li>
                <li>
                  <a href="#">Tess</a>
                </li>
              </ul>
          </li>
          <li>
            <a href="#" id="parentMenu" @click="openChildMenu2 = !openChildMenu2"
              class="flex items-center px-4 py-3 space-x-2 transition duration-200 rounded hover:bg-cyan-700 hover:text-cyan-300 group">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span class="text-white group-hover:text-cyan-300 flex-1">User</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
              <!-- Child menu -->
              <ul id="childMenu" class="text-left pl-12 w-full py-3 space-y-3" :class="{ 'hidden': openChildMenu2 }">
                <li>
                  <a href="#">Tess</a>
                </li>
                <li>
                  <a href="#">Tess</a>
                </li>
                <li>
                  <a href="#">Tess</a>
                </li>
                <li>
                  <a href="#">Tess</a>
                </li>
                <li>
                  <a href="#">Tess</a>
                </li>
              </ul>
          </li>
        </ul>

      </nav>
    </div>

    <!-- Main content -->
    <div class="flex-1">
      <!-- header -->
      <div class="px-2 py-4 bg-white shadow">
        <button @click="showSidebar = !showSidebar" class="font-extrabold cursor-pointer text-cyan-600 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
      </div>
      <div class="flex">
        <h1>PT. Mitra Bersama Jaya</h1>
      </div>

      <!-- content -->
      <div class="p-8 font-extrabold text-cyan-700">Content</div>
    </div>
  </div>
</template>
