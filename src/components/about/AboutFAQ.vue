<template>
  <section class="article" id="about-faq">
    <h2 class="title">Frequently Asked Questions</h2>

    <div class="accordion" id="faqAccordion">
      <div class="accordion-item" v-for="(item, index) in faqItems" :key="index">
        <h3 class="accordion-header">
          <button class="accordion-button collapsed" type="button" 
                  :data-bs-target="'#faq-' + index" 
                  data-bs-toggle="collapse">
            {{ item.question }}
          </button>
        </h3>
        <div :id="'faq-' + index" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            {{ item.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutFAQ',
  setup() {
    const faqItems = [
      {
        question: "How long does electrolysis take?",
        answer: "Treatment time varies depending on the area being treated and the stage of hair growth. Sessions can range from 5 minutes to 1 hour."
      },
      {
        question: "Is electrolysis permanent?",
        answer: "Yes, electrolysis is the only FDA-approved method for permanent hair removal. Once a hair follicle is properly treated, it will never grow hair again."
      },
      {
        question: "Is the treatment painful?",
        answer: "Most clients describe the sensation as mild and tolerable. We use modern equipment and techniques to ensure maximum comfort during treatment."
      }
      // Add more FAQ items as needed
    ]

    return {
      faqItems
    }
  }
}
</script> 