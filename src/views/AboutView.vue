<template>
  <main class="main">
    <!-- Page Title -->
    <div class="page-title">
      <div class="heading">
        <div class="container">
          <div class="row d-flex justify-content-center text-center">
            <div class="col-lg-8">
              <h1>About Me & Our Procedure</h1>
              <p class="mb-0">Understanding permanent hair removal through electrolysis</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <!-- Main Content -->
        <div class="col-lg-8">
          <section id="about-details" class="blog-details">
            <!-- Electrologist Section -->
            <AboutElectrologist />

            <!-- Process Section -->
            <AboutProcess />

            <!-- FAQ Section -->
            <AboutFAQ />
          </section>
        </div>

        <!-- Wrap SideNav in column div -->
        <div class="col-lg-4">
          <div class="position-sticky" style="top: 125px;">
            <SideNav 
              title="About Us"
              :navItems="[
                {
                  id: 'about-electrologist',
                  href: '#about-electrologist',
                  text: 'Your Electrologist'
                },
                {
                  id: 'about-process',
                  href: '#about-process',
                  text: 'Our Procedure'
                },
                {
                  id: 'about-faq',
                  href: '#about-faq',
                  text: 'F.A.Q.'
                }
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import AboutElectrologist from '@/components/about/AboutElectrologist.vue'
import AboutProcess from '@/components/about/AboutProcess.vue'
import AboutFAQ from '@/components/about/AboutFAQ.vue'
import SideNav from '@/components/common/SideNav.vue'

export default {
  name: 'AboutView',
  components: {
    AboutElectrologist,
    AboutProcess,
    AboutFAQ,
    SideNav
  }
}
</script>
