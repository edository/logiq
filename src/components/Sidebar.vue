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
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
  { href: '/', label: 'AR Collection', icon: CollectionIcon },
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
  <div class="flex h-screen">

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
    <div class="flex-shrink-0 hidden w-64 overflow-y-auto border-r border-gray-200 md:block bg-gray-50">

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

    <div class="flex flex-col flex-1 w-full">
      <header class="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
        <div
          class="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
          <!-- Mobile hamburger -->
          <div class="flex items-center flex-1">
            <button @click="sidebarOpened = true"
              class="flex items-center justify-center flex-shrink-0 w-10 h-10 mr-3 text-gray-600 rounded-full hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
              type="button" value="Open Sidebar">
              <MenuIcon class="w-6 h-6" />
            </button>

            <div class="w-full max-w-md text-gray-400">
              <span>PT. Mitra Bersama Jaya</span>
            </div>

          </div>
          <Menu as="div" class="relative flex-shrink-0">
            <MenuButton class="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              <img class="inline w-10 h-10 rounded-full"
                src="https://images.tokopedia.net/img/cache/500-square/product-1/2015/3/23/378451/378451_546d2870-d148-11e4-8461-a8b54908a8c2.jpg"
                alt="">
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
      </header>
      <main class="h-full overflow-y-auto">
        <div class="container grid px-6 mx-auto">
          <h2 class="my-5 text-2xl font-semibold text-gray-700 dark:text-gray-200">Sales Order</h2>
          <!-- CTA -->

          <!-- Cards -->

          <!-- Table start -->
          <div class="w-full overflow-hidden rounded-lg shadow-xs">
            <div class="w-full overflow-x-auto">
              <div class="flex justify-between p-4">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <input type="text" id="table-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 h-8 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search for items">
                </div>
                <button type="button"
                  class="h-8 px-5 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Add
                  New</button>
              </div>
              <table class="w-full whitespace-no-wrap">
                <thead>
                  <tr
                    class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                    <th class="px-4 py-3">Order No</th>
                    <th class="px-4 py-3">Order Date</th>
                    <th class="px-4 py-3">Customer</th>
                    <th class="px-4 py-3">PO No</th>
                    <th class="px-4 py-3">Salesman</th>
                    <th class="px-4 py-3">TOP</th>
                    <th class="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                  <tr class="text-gray-700 dark:text-gray-400 hover:bg-gray-100">
                    <td class="px-4 py-3 text-sm">SO01-22010001</td>
                    <td class="px-4 py-3 text-sm">01/01/2022</td>
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div>
                          <p class="font-semibold">Lamcos Mitra Jaya</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Cab. Jember</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">0001</td>
                    <td class="px-4 py-3 text-sm">Edogawa</td>
                    <td class="px-4 py-3 text-sm">30 Days</td>
                    <td class="px-4 py-3 text-xs">
                      <span
                        class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        Approved </span>
                    </td>
                  </tr>
                  <tr class="text-gray-700 dark:text-gray-400 hover:bg-gray-100">
                    <td class="px-4 py-3 text-sm">SO01-22010001</td>
                    <td class="px-4 py-3 text-sm">01/01/2022</td>
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div>
                          <p class="font-semibold">Lamcos Mitra Jaya</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Cab. Jember</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">0001</td>
                    <td class="px-4 py-3 text-sm">Edogawa</td>
                    <td class="px-4 py-3 text-sm">30 Days</td>
                    <td class="px-4 py-3 text-xs">
                      <span
                        class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                        Pending
                      </span>
                    </td>
                  </tr>
                  <tr class="text-gray-700 dark:text-gray-400 hover:bg-gray-100">
                    <td class="px-4 py-3 text-sm">SO01-22010001</td>
                    <td class="px-4 py-3 text-sm">01/01/2022</td>
                    <td class="px-4 py-3">
                      <div class="flex items-center text-sm">
                        <div>
                          <p class="font-semibold">Lamcos Mitra Jaya</p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">Cab. Jember</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-4 py-3 text-sm">0001</td>
                    <td class="px-4 py-3 text-sm">Edogawa</td>
                    <td class="px-4 py-3 text-sm">30 Days</td>
                    <td class="px-4 py-3 text-xs">
                      <span
                        class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        Approved </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
              <span class="flex items-center invisible col-span-3 sm:visible"> Showing 1-10 of 100 </span>
              <span class="col-span-2"></span>
              <!-- Pagination -->
              <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                <nav aria-label="Table navigation">
                  <ul class="inline-flex items-center">
                    <li>
                      <button class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                        aria-label="Previous">
                        <svg aria-hidden="true" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button
                        class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                    </li>
                    <li>
                      <span class="px-3 py-1">...</span>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                    </li>
                    <li>
                      <button class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                        aria-label="Next">
                        <svg class="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                          <path
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" fill-rule="evenodd"></path>
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
