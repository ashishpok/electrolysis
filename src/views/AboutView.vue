<template>
  <main class="main">
    <SectionTitle 
      title="About Me & Our Procedure"
      subtitle="Understanding permanent hair removal through electrolysis"
      id="about-title"
    />

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
import SectionTitle from '@/components/common/SectionTitle.vue'

export default {
  name: 'AboutView',
  components: {
    AboutElectrologist,
    AboutProcess,
    AboutFAQ,
    SideNav,
    SectionTitle
  }
}
</script>
