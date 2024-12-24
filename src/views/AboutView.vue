<template>
  <main class="main">
    <section id="about-details" class="about-details section">
      <!-- Section Title -->
      <div class="container section-title" data-aos="fade-up">
        <h2>About Electrolysis</h2>
        <p>Understanding permanent hair removal through electrolysis</p>
      </div>
      <div class="container">
        <div class="row">
          <!-- Main Content -->
          <div class="col-lg-8">

            <article class="article">
              <div class="post-img">
                <img src="/media/about-electrolysis.jpg" alt="Electrolysis Treatment" class="img-fluid">
              </div>

              <h2 class="title">Understanding Electrolysis Hair Removal</h2>

              <div class="content">
                <p>
                  Electrolysis is the only FDA-approved method for permanent hair removal. This process
                  uses a tiny probe that delivers electrical current to destroy the hair growth cells.
                </p>

                <blockquote>
                  <p>
                    "Electrolysis is the only method of permanent hair removal endorsed by the FDA,
                    offering lasting results for all skin and hair types."
                  </p>
                </blockquote>

                <h3>The Process of Electrolysis</h3>
                <p>
                  During treatment, a very fine probe is inserted into the hair follicle. A small
                  amount of electrical current is then applied, effectively destroying the hair growth
                  cells, preventing future hair growth in that follicle.
                </p>

                <img src="/media/process-diagram.jpg" class="img-fluid" alt="Electrolysis Process">

                <h3>Benefits and Results</h3>
                <p>
                  Unlike other hair removal methods, electrolysis offers permanent results. It works
                  on all skin types, hair colors, and most areas of the body. Results are progressive,
                  with each treatment bringing you closer to permanent hair removal.
                </p>
              </div>
            </article>
          </div>

          <!-- Sidebar -->
          <div class="col-lg-4 sidebar">
            <div class="widgets-container">
              <!-- Quick Links Widget -->
              <div class="categories-widget widget-item">
                <h3 class="widget-title">Quick Links</h3>
                <ul class="mt-3">
                  <li><a href="#process">The Process</a></li>
                  <li><a href="#applications">Applications</a></li>
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="/services">Our Services</a></li>
                  <li><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="faq section">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Frequently Asked Questions</h2>
          <p>Common questions about electrolysis and our services</p>
        </div>

        <div class="row">
          <div class="col-lg-6" v-for="(group, groupIndex) in faqGroups" :key="groupIndex">
            <div class="accordion" :id="'faq-group-' + groupIndex">
              <div class="accordion-item" v-for="(item, index) in group" :key="index">
                <h3 class="accordion-header">
                  <button class="accordion-button collapsed" :class="{ 'show': item.isOpen }" type="button"
                    data-bs-toggle="collapse" :data-bs-target="'#faq-' + groupIndex + '-' + index">
                    {{ item.question }}
                  </button>
                </h3>
                <div :id="'faq-' + groupIndex + '-' + index" class="accordion-collapse collapse"
                  :data-bs-parent="'#faq-group-' + groupIndex">
                  <div class="accordion-body">
                    {{ item.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
// Using Import the JSON data directly for now
import aboutDataJson from '@/data/about.json';

export default {
  name: 'AboutView',
  data() {
    return {
      aboutData: aboutDataJson,
    };
  },
  setup() {
    const faqGroups = [
      [
        {
          question: "What is industrial electrolysis?",
          answer: "Industrial electrolysis is a large-scale process that uses electrical current to split water into hydrogen and oxygen gases. This method is crucial for clean hydrogen production and various industrial applications."
        },
        {
          question: "How efficient is the electrolysis process?",
          answer: "Modern electrolysis systems can achieve efficiency rates of 70-80%, with continuous improvements through advanced catalysts and optimized cell designs."
        },
        {
          question: "What are the environmental benefits?",
          answer: "When powered by renewable energy, electrolysis produces zero emissions and generates clean hydrogen fuel, contributing to reduced carbon footprints and sustainable energy solutions."
        }
      ],
      [
        {
          question: "What industries use electrolysis?",
          answer: "Electrolysis is used in various industries including energy storage, chemical manufacturing, metallurgy, and green hydrogen production for fuel cells."
        },
        {
          question: "How safe is industrial electrolysis?",
          answer: "Industrial electrolysis is very safe when properly managed. We implement comprehensive safety protocols, monitoring systems, and fail-safes to ensure secure operations."
        },
        {
          question: "What maintenance is required?",
          answer: "Regular maintenance includes electrode inspection, electrolyte monitoring, system calibration, and safety checks. We provide comprehensive maintenance services and support."
        }
      ]
    ]

    return {
      faqGroups
    }
  }
}
</script>
