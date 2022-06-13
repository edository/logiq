<script setup>

import { ref } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { MenuIcon, XIcon, TruckIcon, UserGroupIcon, HomeIcon, SearchIcon, ShoppingBagIcon, DocumentIcon, ReceiptTaxIcon, CollectionIcon, CreditCardIcon } from '@heroicons/vue/outline'

const mainNavigation = ref([
  { href: '/', label: 'Home', icon: HomeIcon },
  { href: '/', label: 'User Maintenance', icon: UserGroupIcon }
])

const orderManagementNav = ref([
  { href: '/', label: 'Sales Order', icon: ShoppingBagIcon },
  { href: '/', label: 'Delivery Order', icon: DocumentIcon },
  { href: '/', label: 'Shipping Order', icon: TruckIcon }
])

const accountReceivableNav = ref([
  { href: '/', label: 'AR Invoice', icon: ReceiptTaxIcon },
  { href: '/', label: 'AR Others', icon: DocumentIcon },
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
  { href: '/', label: 'Credit Note', icon: CreditCardIcon }
])

const following = ref([
  { href: '/', label: 'John Doe', imageUrl: 'https://via.placeholder.com/150' },
])

const sidebarOpened = ref(false);

const showSidebar = ref(false);
const openChildMenu = ref(false);
const openChildMenu2 = ref(false);

</script>

<template>
  <div class="flex min-h-screen">

    <!-- Mobile sidebar start -->
    <TransitionRoot :show="sidebarOpened">
      <Dialog as="div" @close="sidebarOpened = false" class="fixed inset-0 z-40 md:hidden">
        <TransitionChild enter="transition ease-in-out duration-200 transform" enter-from="-translate-x-full"
          enter-to="translate-x-0" leave="transition ease-in-out duration-200 transform" leave-from="translate-x-0"
          leave-to="-translate-x-full" as="template">
          <div class="relative z-10 flex flex-col h-full border-r border-gray-200 w-72 bg-gray-50 md:hidden">
            <button @click="sidebarOpened = false"
              class="absolute flex items-center justify-center w-10 h-10 rounded-full hover:ring-2 hover:ring-gray-300 top-2 right-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="button" value="Close sidebar">
              <XIcon class="w-5 h-5" />
            </button>
            <div class="px-6 pt-8 pb-4">
              <a href="/">
                <ApplicationLogo class="w-48 h-9" />
              </a>
            </div>

            <div class="flex-1 overflow-y-auto">
              <div class="mb-10">
                <h3 class="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
                  Main Menu
                </h3>

                <a v-for="(item, index) in mainNavigation" :href="item.href" :key="index"
                  class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
                  <component :is="item.icon" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange-500" />
                  {{ item.label }}
                </a>
              </div>
              <div class="mb-10">
                <h3 class="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
                  Order Processing
                </h3>

                <a v-for="(item, index) in orderManagementNav" :href="item.href" :key="index"
                  class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
                  <component :is="item.icon" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange-500" />
                  {{ item.label }}
                </a>
              </div>
              <div class="mb-10">
                <h3 class="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
                  Account Receivable
                </h3>


                <a v-for="(item, index) in accountReceivableNav" :href="item.href" :key="index"
                  class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
                  <component :is="item.icon" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange-500" />
                  <!-- <img :src="item.imageUrl" alt="" class="mr-2 rounded-full w-7 h-7"> -->
                  {{ item.label }}
                </a>
              </div>
            </div>
          </div>
        </TransitionChild>
        <TransitionChild enter="transition-opacity ease-linear duration-200" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-200" leave-from="opacity-100"
          leave-to="opacity-0" as="template">
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-50"></DialogOverlay>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>
    <!-- Mobile sidebar end -->

    <!-- Desktop sidebar start -->
    <div class="hidden w-64 border-r border-gray-200 md:block bg-gray-50">

      <div class="px-6 py-4">
        <a href="#">
          <img src="@/assets/logo.jpg" class="w-full">
        </a>
      </div>

      <div class="mb-10">
        <h3 class="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
          Main Menu
        </h3>

        <a v-for="(item, index) in mainNavigation" :href="item.href" :key="index"
          class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component :is="item.icon" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange-500" />
          {{ item.label }}
        </a>

      </div>

      <div class="mb-10">
        <h3 class="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
          Order Processing
        </h3>

        <a v-for="(item, index) in orderManagementNav" :href="item.href" :key="index"
          class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component :is="item.icon" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange-500" />
          {{ item.label }}
        </a>

      </div>
      <div class="mb-10">
        <h3 class="mx-6 mb-2 text-xs tracking-widest text-gray-400 uppercase">
          Account Receivable
        </h3>

        <a v-for="(item, index) in accountReceivableNav" :href="item.href" :key="index"
          class="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group">
          <component :is="item.icon" class="w-5 h-5 mr-2 text-gray-400 group-hover:text-orange-500" />
          <!-- <img :src="item.imageUrl" alt="" class="mr-2 rounded-full w-7 h-7"> -->
          {{ item.label }}
        </a>

      </div>

    </div>
    <!-- Desktop sidebar end -->

    <div class="flex-1">
      <!-- Topbar nav start -->
      <div class="flex justify-between px-3 py-3 space-x-6 border-b md:space-x-6 md:px-6 bg-gray-50">
        <div class="flex items-center flex-1">
          <button @click="sidebarOpened = true"
            class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 text-gray-600 rounded-full hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
            type="button" value="Open Sidebar">
            <MenuIcon class="w-6 h-6" />
          </button>
          <form action="" class="w-full max-w-md">
            <div class="relative flex items-center text-gray-400 focus-within:text-gray-600">
              <SearchIcon class="absolute w-5 h-5 ml-3 pointer-events-none" />
              <input type="text" name="search" placeholder="Search here.." autocomplete="off" aria-label="Search here.."
                class="w-full py-2 pl-10 pr-3 font-semibold text-black placeholder-gray-500 border-none rounded-2xl ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2">
            </div>
          </form>
        </div>
        <Menu as="div" class="relative flex-shrink-0">
          <MenuButton class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
            <img class="inline w-10 h-10 rounded-full"
              src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg" alt="">
          </MenuButton>

          <transition enter-active-class="transition duration-100 ease-out transform"
            enter-from-class="scale-90 opacity-0" enter-to-class="scale-100 opacity-100"
            leave-active-class="transition duration-100 ease-in transform" leave-from-class="scale-100 opacity-100"
            leave-to-class="scale-90 opacity-0">
            <MenuItems
              class="absolute right-0 w-48 mt-2 overflow-hidden origin-top-right bg-white border rounded-md shadow-lg focus:outline-none">
              <MenuItem v-slot="{ active }">
              <a href="#" :class="{ 'bg-gray-100': active }" class="block px-4 py-2 text-sm text-gray-700">My
                Profile</a>
              </MenuItem>
              <MenuItem v-slot="{ active, disabled }" disabled>
              <a href="#" :class="{ 'bg-gray-100': active, 'opacity-40': disabled }"
                class="block px-4 py-2 text-sm text-gray-700">Settings</a>
              </MenuItem>
              <MenuItem v-slot="{ active }">
              <a href="#" :class="{ 'bg-gray-100': active }" class="block px-4 py-2 text-sm text-gray-700">Log out</a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <!-- Topbar nav end -->

      <!-- Main content start -->
      <main>Main content</main>
      <!-- Main content end -->
    </div>
  </div>
</template>
