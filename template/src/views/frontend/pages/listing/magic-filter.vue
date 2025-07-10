<template>
  <div class="listing-page">
    <layouts-header></layouts-header>
    <breadcrumb :title="title" :text="text" :text1="text1" />

    <section class="section magic-filter-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Welcome Section -->
            <div
              v-if="!started"
              class="welcome-section text-center"
              data-aos="fade-down"
            >
              <div class="welcome-icon mb-4">
                <i class="fas fa-magic"></i>
              </div>
              <h1 class="welcome-title mb-4">
                Benvenuto al nostro Magic Filter
              </h1>
              <p class="welcome-description mb-5">
                Invece di selezionare che macchina vuoi, noi ti proponiamo delle
                macchine in base a come rispondi alle nostre domande. Per
                esempio: viaggi molto durante l'anno? Se sì, allora nella query
                per selezionare quali auto mostrarti sceglieremo auto con pochi
                chilometri percorsi.
              </p>
              <button @click="startWizard" class="btn btn-primary btn-lg">
                Comincia ora
              </button>
            </div>

            <!-- Questions Wizard -->
            <div
              v-if="started && currentQuestion < questions.length"
              class="question-section"
              data-aos="fade-up"
            >
              <div class="progress-wrapper mb-4">
                <div class="progress">
                  <div
                    class="progress-bar"
                    :style="{
                      width:
                        ((currentQuestion + 1) / questions.length) * 100 + '%',
                    }"
                  ></div>
                </div>
                <small class="text-muted"
                  >Domanda {{ currentQuestion + 1 }} di
                  {{ questions.length }}</small
                >
              </div>

              <div class="question-card">
                <h3 class="question-title mb-4">
                  {{ questions[currentQuestion].question }}
                </h3>

                <!-- Multiple choice answers -->
                <div
                  v-if="questions[currentQuestion].type === 'choice'"
                  class="answer-options"
                >
                  <div
                    v-for="(option, index) in questions[currentQuestion]
                      .options"
                    :key="index"
                    class="answer-option"
                    @click="selectAnswer(option.value)"
                  >
                    <div class="option-content">
                      <span class="option-text">{{ option.label }}</span>
                    </div>
                  </div>
                </div>

                <!-- Number input for budget -->
                <div
                  v-if="questions[currentQuestion].type === 'number'"
                  class="budget-input"
                >
                  <div class="input-group">
                    <span class="input-group-text">€</span>
                    <input
                      type="number"
                      class="form-control"
                      v-model="budgetValue"
                      placeholder="Inserisci il tuo budget massimo"
                      min="0"
                    />
                  </div>
                  <button
                    @click="selectAnswer(budgetValue)"
                    class="btn btn-primary mt-3"
                    :disabled="!budgetValue || budgetValue <= 0"
                  >
                    Continua
                  </button>
                </div>
              </div>
            </div>

            <!-- Loading/Processing -->
            <div
              v-if="started && currentQuestion >= questions.length"
              class="processing-section text-center"
              data-aos="fade-up"
            >
              <div class="spinner-border text-primary mb-3" role="status">
                <span class="visually-hidden">Caricamento...</span>
              </div>
              <h4>Stiamo preparando le auto perfette per te...</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <layout-footer></layout-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Magic Filter",
      text: "Home",
      text1: "Magic Filter",
      started: false,
      currentQuestion: 0,
      budgetValue: null,
      answers: {},
      questions: [
        {
          question: "Viaggi molto durante l'anno?",
          type: "choice",
          options: [
            { label: "Sì", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
        {
          question:
            "Guiderai soprattutto in città, su autostrada, o in entrambi i contesti?",
          type: "choice",
          options: [
            { label: "Città", value: "city" },
            { label: "Autostrada", value: "highway" },
            { label: "Misto", value: "mixed" },
          ],
        },
        {
          question: "Hai bisogno di un bagagliaio particolarmente capiente?",
          type: "choice",
          options: [
            { label: "Sì", value: "yes" },
            { label: "No", value: "no" },
          ],
        },
        {
          question: "Preferisci cambio manuale o automatico?",
          type: "choice",
          options: [
            { label: "Manuale", value: "manual" },
            { label: "Automatico", value: "automatic" },
            { label: "Indifferente", value: "indifferent" },
          ],
        },
        {
          question: "Qual è il budget massimo per l'acquisto?",
          type: "number",
        },
        {
          question: "Vuoi comprare da un privato o da un concessionario?",
          type: "choice",
          options: [
            { label: "Privato", value: "private" },
            { label: "Concessionario", value: "dealer" },
            { label: "Indifferente", value: "indifferent" },
          ],
        },
      ],
    };
  },
  methods: {
    startWizard() {
      this.started = true;
    },
    selectAnswer(value) {
      const currentQ = this.questions[this.currentQuestion];
      this.answers[currentQ.question] = value;

      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++;
        this.budgetValue = null; // Reset budget input
      } else {
        // All questions answered, redirect to listing with filters
        this.processAnswersAndRedirect();
      }
    },
    processAnswersAndRedirect() {
      const filters = {};

      // Process answers and build filters
      Object.keys(this.answers).forEach((question) => {
        const answer = this.answers[question];

        if (question === "Viaggi molto durante l'anno?") {
          if (answer === "yes") {
            filters.maxKm = 50000;
          } else {
            filters.maxKm = 200000;
          }
        }

        if (question === "Preferisci cambio manuale o automatico?") {
          if (answer !== "indifferent") {
            filters.transmission =
              answer === "manual" ? "Manuale" : "Automatico";
          }
        }

        if (question === "Qual è il budget massimo per l'acquisto?") {
          filters.maxPrice = answer;
        }

        if (
          question === "Vuoi comprare da un privato o da un concessionario?"
        ) {
          if (answer === "private") {
            // Se già impostato un valore più basso, mantieni quello
            if (!filters.maxKm || filters.maxKm > 200000) {
              filters.maxKm = 200000;
            }
          } else if (answer === "dealer") {
            // Concessionario: filtra chilometraggio basso
            if (!filters.maxKm || filters.maxKm > 50000) {
              filters.maxKm = 50000;
            }
          } else if (answer === "indifferent") {
            // Se non è già impostato un valore più basso, usa questo
            if (!filters.maxKm || filters.maxKm > 200000) {
              filters.maxKm = 200000;
            }
          }
        }
      });

      // Debug: log dei filtri
      console.log("Magic Filter - Filtri applicati:", filters);

      // Build query string
      const queryParams = new URLSearchParams();
      Object.keys(filters).forEach((key) => {
        if (filters[key] !== null && filters[key] !== undefined) {
          queryParams.append(key, filters[key]);
        }
      });

      const finalQuery = Object.fromEntries(queryParams);
      console.log("Magic Filter - Query finale:", finalQuery);

      // Redirect to listing grid with filters
      setTimeout(() => {
        this.$router.push({
          path: "/listing/listing-grid",
          query: finalQuery,
        });
      }, 2000);
    },
  },
};
</script>

<style scoped>
.magic-filter-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 70vh;
}

.welcome-section {
  background: white;
  padding: 60px 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.welcome-icon {
  font-size: 4rem;
  color: #007bff;
}

.welcome-title {
  color: #2c3e50;
  font-weight: 700;
}

.welcome-description {
  color: #6c757d;
  font-size: 1.1rem;
  line-height: 1.6;
}

.question-section {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.progress-wrapper {
  margin-bottom: 30px;
}

.progress {
  height: 8px;
  border-radius: 10px;
  background-color: #e9ecef;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-bar {
  background: linear-gradient(90deg, #007bff, #0056b3);
  transition: width 0.3s ease;
}

.question-card {
  text-align: center;
}

.question-title {
  color: #2c3e50;
  font-weight: 600;
  font-size: 1.5rem;
}

.answer-options {
  display: grid;
  gap: 15px;
  margin-top: 30px;
}

.answer-option {
  background: #f8f9fa;
  border: 2px solid #e9ecef;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.answer-option:hover {
  background: #e3f2fd;
  border-color: #007bff;
  transform: translateY(-2px);
}

.option-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.option-text {
  font-size: 1.1rem;
  font-weight: 500;
  color: #495057;
}

.budget-input {
  margin-top: 30px;
}

.budget-input .input-group {
  max-width: 300px;
  margin: 0 auto;
}

.processing-section {
  background: white;
  padding: 60px 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.btn-primary {
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}

.btn-lg {
  padding: 15px 40px;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .welcome-section,
  .question-section,
  .processing-section {
    padding: 30px 20px;
  }

  .welcome-title {
    font-size: 1.8rem;
  }

  .question-title {
    font-size: 1.3rem;
  }
}
</style>
