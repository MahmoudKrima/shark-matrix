<template>
  <div class="absolute nav gap-5">
    <div class="flex items-center justify-evenly p-2">
      <div class="logo w-[147px] h-[42px]">
        <router-link to="/" class="inline-block">
          <img src="../../assets/img/Main-logo.png" alt="Logo" />
        </router-link>
      </div>
      <Menubar :model="items" class="border-0 bg-transparent custom-menubar">
        <template #item="{ item, props }">
          <router-link v-if="item.route" v-slot="{ href }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action">
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-ripple
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
            class="flex items-center gap-1"
          >
            <div
              v-if="item.items"
              class="absolute top-full left-0 mt-2 hidden group-hover:flex bg-white shadow-lg z-50 p-4 space-x-6 min-w-[500px] border"
            >
              <div v-for="(group, index) in item.items" :key="index" class="min-w-[200px]">
                <h4 class="text-gray-800 font-semibold mb-2">
                  {{ group.label }}
                </h4>
                <ul class="space-y-1">
                  <li v-for="(subItem, subIndex) in group.items" :key="subIndex">
                    <a :href="subItem.url" class="block text-sm text-gray-600 hover:text-blue-600">
                      {{ subItem.label }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <span>{{ item.label }}</span>
            <span :class="item.icon" />
          </a>
        </template>
      </Menubar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const items = ref([
  {
    label: 'Service',
    icon: 'pi pi-angle-down',
    items: [
      {
        label: 'Digital Marketing',
        items: [
          { label: 'SEO', url: 'https://sharkmatrix.com/seo-company-dubai/' },
          {
            label: 'Social Media Marketing',
            url: 'https://sharkmatrix.com/social-media-agency-dubai/',
          },
          {
            label: 'Reputation Management',
            url: 'https://sharkmatrix.com/reputation-management-agency-dubai/',
          },
          {
            label: 'LinkedIn Marketing',
            url: 'https://sharkmatrix.com/linkedin-marketing-agency-dubai/',
          },
          {
            label: 'Facebook Marketing',
            url: 'https://sharkmatrix.com/facebook-marketing-agency-dubai/',
          },
          {
            label: 'Instagram Marketing',
            url: 'https://sharkmatrix.com/instagram-marketing-agency-dubai/',
          },
          { label: 'PPC Marketing', url: 'https://sharkmatrix.com/ppc-marketing-agency-dubai/' },
        ],
      },
      {
        label: 'Digital Marketing',
        items: [
          { label: 'SEO', url: 'https://sharkmatrix.com/seo-company-dubai/' },
          {
            label: 'Social Media Marketing',
            url: 'https://sharkmatrix.com/social-media-agency-dubai/',
          },
          {
            label: 'Reputation Management',
            url: 'https://sharkmatrix.com/reputation-management-agency-dubai/',
          },
          {
            label: 'LinkedIn Marketing',
            url: 'https://sharkmatrix.com/linkedin-marketing-agency-dubai/',
          },
          {
            label: 'Facebook Marketing',
            url: 'https://sharkmatrix.com/facebook-marketing-agency-dubai/',
          },
          {
            label: 'Instagram Marketing',
            url: 'https://sharkmatrix.com/instagram-marketing-agency-dubai/',
          },
          { label: 'PPC Marketing', url: 'https://sharkmatrix.com/ppc-marketing-agency-dubai/' },
        ],
      },
    ],
  },
  {
    label: 'Programmatic',
    icon: 'pi pi-link',
    command: () => {
      router.push('/introduction')
    },
  },
  {
    label: 'External',
    icon: 'pi pi-home',
    items: [
      {
        label: 'Vue.js',
        url: 'https://vuejs.org/',
      },
      {
        label: 'Vite.js',
        url: 'https://vitejs.dev/',
      },
    ],
  },
  {
    label: 'Programmatic',
    icon: 'pi pi-link',
    command: () => {
      router.push('/introduction')
    },
  },
  {
    label: 'Programmatic',
    icon: 'pi pi-link',
    command: () => {
      router.push('/introduction')
    },
  },
])
</script>
<style>
.p-menubar-submenu {
  display: flex;
  flex-direction: row;
}
.p-menubar-item-link {
  color: white;
}
.p-menubar-item-link:hover {
  color: black;
  background-color: white;
}
.nav {
  width: 100% !important;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.02);
}
</style>
