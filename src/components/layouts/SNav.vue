<template>
  <div class="absolute nav w-full">
    <div class="flex items-center justify-evenly p-4">
      <!-- Logo -->
      <router-link to="/" class="w-[147px] h-[42px]">
        <img src="@/assets/img/Main-logo.png" alt="Logo" />
      </router-link>
      <div class="w-[40%]">
        <MegaMenu
          :model="megaItems"
          orientation="horizontal"
          class="bg-transparent border-0 text-white custom-megamenu"
          :pt="{
            root: '',
            menu: 'bg-white flex space-x-6',
            menuitem: 'hover:bg-gray-100',
            submenu: ' p-6',
          }"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MegaMenu from 'primevue/megamenu'

const router = useRouter()
function navTo(path) {
  router.push(path)
}

const megaItems = ref([
  {
    label: 'Services',
    icon: 'pi pi-briefcase',
    items: [
      [
        // one “row” of 4 columns
        {
          label: 'Digital Marketing',
          icon: 'pi pi-chart-line',
          items: [
            { label: 'SEO', command: () => navTo('/seo') },
            { label: 'Social Media Marketing', command: () => navTo('/social-media') },
            { label: 'Reputation Management', command: () => navTo('/reputation') },
            { label: 'LinkedIn Marketing', command: () => navTo('/linkedin') },
            { label: 'Facebook Marketing', command: () => navTo('/facebook') },
            { label: 'Instagram Marketing', command: () => navTo('/instagram') },
            { label: 'PPC Marketing', command: () => navTo('/ppc') },
          ],
        },
        {
          label: 'Web Development',
          icon: 'pi pi-code',
          items: [
            { label: 'Ecommerce', command: () => navTo('/ecommerce') },
            { label: 'BackEnd', command: () => navTo('/backend') },
            { label: 'Landing Page', command: () => navTo('/landing-page') },
            { label: 'Shopify', command: () => navTo('/shopify') },
            { label: 'SiteCore Development', command: () => navTo('/sitecore') },
          ],
        },
        {
          label: 'Design',
          icon: 'pi pi-palette',
          items: [
            { label: 'Design Analysis', command: () => navTo('/design-analysis') },
            { label: 'Wireframing', command: () => navTo('/wireframe') },
            { label: 'UI/UX Design', command: () => navTo('/ui-ux') },
          ],
        },
        {
          label: 'Mobile App',
          icon: 'pi pi-mobile',
          items: [
            { label: 'Native iOS', command: () => navTo('/ios') },
            { label: 'Native Android', command: () => navTo('/android') },
            { label: 'Cross Platform', command: () => navTo('/cross-platform') },
            { label: 'PWA', command: () => navTo('/pwa') },
          ],
        },
      ],
    ],
  },
  { label: 'Who We Are', command: () => navTo('/who-we-are') },
  { label: 'Blog', command: () => navTo('/blog') },
  { label: 'Contact Us', command: () => navTo('/contact') },
])
</script>

<style scoped>
.nav {
  background-color: transparent;
  box-shadow: 0px 4px 2px rgba(0, 0, 0, 0.02);
}

:deep(.custom-megamenu.p-megamenu) {
  .p-megamenu-panel {
    width: 800px !important;
    background: white !important;
    border-radius: 0.5rem !important;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
  }

  .p-megamenu-col-12 {
    display: flex !important;
    gap: 0.5rem !important;
    background-color: white !important;
  }
  .p-megamenu-item-link {
    color: black;
  }

  .p-megamenu-submenu-header {
    font-size: 1.125rem !important;
    font-weight: bold !important;
    margin-bottom: 0.5rem !important;
    padding-bottom: 0.5rem !important;
    border-bottom: 2px solid var(--primary-color) !important;
    color: var(--primary-color) !important;
  }

  .p-megamenu-item-content {
    font-size: 16px !important;
  }
  .p-megamenu-item-content:hover {
    background-color: white;
    color: black;
  }
  .p-icon {
    color: white;
  }
  .p-icon:hover {
    color: black;
  }

  .p-megamenu-submenu {
    display: flex !important;
    flex-direction: column !important;
    gap: 0.5rem !important;
    padding: 0 !important;
    margin: 0 !important;
    list-style: none !important;
  }

  .p-menuitem {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Menu item links */
  .p-menuitem-link {
    padding: 0.5rem 0 !important;
    color: var(--text-color) !important;
    border-bottom: 1px dashed var(--primary-color) !important;
    border-radius: 0 !important;

    &:hover {
      background: transparent !important;
      color: var(--primary-color) !important;
    }
  }
}
</style>
