<template>
  <div class="header-background footer">
    <div class="container pt-[50px] pb-[20px]">
      <div
        class="px-[15px] flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-6"
      >
        <div class="w-1/3">
          <img src="../../assets/img/Main-logo.png" alt="Main logo" />
        </div>
        <div class="w-2/3">
          <p class="footer_p">
            Shark Matrix is a Digital Marketing Agency and Development Agency in Dubai, UAE,
            Specialized in Web & Mobile App Development, SEO, Social Media Marketing, SEM, Content
            Marketing, Reputation Management, Arabic Marketing.
          </p>
        </div>
      </div>
      <hr class="mt-[40px]" style="color: white" />
      <div class="py-[12px] flex flex-col md:flex-row justify-between items-start gap-6">
        <div class="w-full md:w-1/4 px-5">
          <h4 class="footer_title">USEFUL LINKS</h4>
          <div class="mt-5">
            <ul>
              <li class="footer_li" v-for="(field, index) in items" :key="index">
                <a :href="field.url">{{ field.title }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-2/4 grid grid-cols-2 gap-6 items-stretch">
          <div v-for="(country, index) in countries" :key="index" class="flex flex-col">
            <div class="flex items-center">
              <h4 class="footer_title footer_country_title">{{ country.title }}</h4>
              <img :src="country.icon" class="w-[20px] h-[20px]" alt="" />
            </div>
            <div class="flex justify-center items-start">
              <i class="pi pi-map-marker icon"></i>
              <a :href="country.location" class="footer_a">{{ country.location_name }} </a>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/4 px-5">
          <h4 class="footer_title">CONTACT US</h4>
          <div class="mt-5">
            <ul>
              <li class="footer_li" v-for="(contact, index) in contacts" :key="index">
                <div class="flex items-center gap-2">
                  <i v-if="contact.icon" :class="[contact.icon, 'text-[20px]']"></i>
                  <img v-else :src="contact.img" class="h-[20px] w-[20px] object-contain" alt="" />
                  <a :href="contact.url" class="footer_a">{{ contact.title }}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    title: 'Service',
    url: '/',
  },
  {
    title: 'Who We Are',
    url: '/',
  },
  {
    title: 'Contact Us',
    url: '/',
  },
  {
    title: 'Facebook Marketing',
    url: '/',
  },
  {
    title: 'Digital Marketing',
    url: '/',
  },
  {
    title: 'SEO',
    url: '/',
  },
  {
    title: 'Instagram Marketing',
    url: '/',
  },
  {
    title: 'PPC Marketing',
    url: '/',
  },
  {
    title: 'Social Media Marketing',
    url: '/',
  },
])

const countries = ref([
  {
    title: 'India',
    icon: 'src/assets/img/india.png',
    location: 'https://maps.app.goo.gl/vRNtgKgDYhPNVa3U9',
    location_name:
      '210, Shilp Epitome, Sindhubhavan Road, Bodakdev, Behind Rajpat Club, Ahmedabad, Gujarat',
  },
  {
    title: 'Dubai, UAE',
    icon: 'src/assets/img/united.png',
    location: 'https://maps.app.goo.gl/vRNtgKgDYhPNVa3U9',
    location_name: 'Single Tower, 31 Floor, Office Number 26, Business Bay, Dubai , UAE',
  },
  {
    title: 'India',
    icon: 'src/assets/img/india.png',
    location: 'https://maps.app.goo.gl/vRNtgKgDYhPNVa3U9',
    location_name:
      '210, Shilp Epitome, Sindhubhavan Road, Bodakdev, Behind Rajpat Club, Ahmedabad, Gujarat',
  },
  {
    title: 'Sharjah, UAE',
    icon: 'src/assets/img/united.png',
    location: 'https://maps.app.goo.gl/vRNtgKgDYhPNVa3U9',
    location_name: '504, Golden Tower, Al Majaz 1, Buheirah Corniche, Sharjah, UAE',
  },
])

const contacts = ref([
  {
    title: '+971 6 8040 333',
    icon: 'pi pi-phone',
    url: 'tel:+97168040333',
  },
  {
    title: '+971 561099551',
    img: 'src/assets/img/united.png',
    url: 'tel:+971561099551',
  },
  {
    title: '+919722222100',
    img: 'src/assets/img/india.png',
    url: 'tel:+919722222100',
  },
  {
    title: '+44 07769421944',
    img: 'src/assets/img/india.png',
    url: 'tel:+4407769421944',
  },
  {
    title: 'PO BOX :36677',
    icon: 'pi pi-inbox',
    url: '36677',
  },
  {
    title: 'info@sharkmatrix.com',
    icon: 'pi pi-inbox',
    url: 'mailto:info@sharkmatrix.com',
  },
])
</script>

<style scoped>
.footer_p {
  font-weight: 400;
  font-size: 15px;
  color: rgb(255 255 255);
}
.footer_title {
  font-family: 'Sora';
  color: #fff;
  margin: 25px auto 25px;
  font-size: 20px;
  font-weight: 700;
}
.footer_li {
  line-height: 1.5;
  margin: 8px 0 0 15px;
  color: white;
}
.footer_country_title {
  margin-inline: 10px !important;
}
.icon {
  color: white;
  margin: 3px 10px;
}
.footer_a {
  font-weight: 400;
  font-size: 14px;
  color: rgb(255 255 255);
  text-decoration: none;
}
</style>
