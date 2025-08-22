//menu hamburguer

function toggleMobileMenu(button) {
  const nav = document.getElementById("mobileNav")
  nav.classList.toggle("active")
  button.classList.toggle("active")
}

function closeMobileMenu() {
  const nav = document.getElementById("mobileNav")
  const button = document.querySelector(".mobile-menu-btn")
  nav.classList.remove("active")
  button.classList.remove("active")
}

// Translation object for different languages
const translations = {
  PT: {
    greeting: "Olá!",
    dayNames: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    monthNames: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],

    // Navigation
    "nav-home": "Home",
    "nav-projects": "Projetos",
    "nav-about": "Sobre",
    "nav-process": "Processo",
    "nav-contact": "Contacto",

    // Page titles
    "page-title": "Portfólio - Moonu Design",

    // Hero section
    "hero-title": "moonu, design<br>com intenção.",
    "hero-description":
      '<span class="brand-name">moonu</span> é identidade em construção, é uma marca pessoal com propósito: transforma ideias em soluções com sentido.',

    // Welcome section
    "welcome-text1-line1": "Descobre",
    "welcome-text1-line2": "o universo",
    "welcome-text1-line3": "moonu.",
    "welcome-text2-line1": "E abre",
    "welcome-text2-line2": "a janela",
    "welcome-text2-line3": "à tua marca.",

    // Profile section
    "profile-title": "Designer<br>Gráfico",
    "service-branding": "Design de Marcas",
    "service-editorial": "Editorial",
    "service-web": "Web design",
    "about-tagline-1": "Ao unir criatividade e conhecimento técnico,",
    "about-tagline-2": "transformo visões em realidade!",
    "why-moonu-btn": "Porquê moonu?",

    // Modal content
    "modal-content":
      "Nasce da combinação das letras do meu nome completo — <strong>Nuno Moura</strong>.<br><br><strong>Mais do que uma junção fonética</strong>, é símbolo de ciclos, fases e transformação, tal como o meu percurso. <strong>É uma marca pessoal que reflete a minha dualidade: entre o técnico e o sensível, o estruturado e o fluido.</strong> <br><br><strong>Moonu</strong> é o espaço onde aplico o meu olhar criativo ao digital, com propósito, inclusão e autenticidade.",

    // Process cards
    "process-card-1": "Qualquer que seja o desafio, começo por ouvir e mergulhar no problema com empatia.",
    "process-card-2": "Tento entender o target e as suas necessidades.",
    "process-card-3": "Traduzo ideias em sistemas visuais que contam histórias e criam ligação emocional.",
    "process-card-4": "Alinho forma e função, onde a estética serve a mensagem e a experiência do utilizador.",

    // Buttons
    "see-more-btn": "Ver mais",
    "cta-btn": "Enviar Mensagem",

    // Footer
    "footer-text": "Moonu Design | Criatividade compilada",

    // Contact page
    "contact-title": "Fala comigo.",
    "contact-subtitle": "Tens um projeto em mente ou uma oportunidade interessante? Vamos conversar.",
    "contact-cta-1": "Queres dar vida ao teu projeto? Contacta-me!",
    "location-text": "Localização: <strong>Porto, Portugal</strong>",
    "remote-work": "a trabalhar remotamente",

    // Form
    "form-name": "O teu nome",
    "form-email": "o.teu.email@exemplo.com",
    "form-phone": "telefone (opcional)",
    "form-recruiter": "Sou Recrutador(a)",
    "form-client": "Sou Cliente",
    "form-services-label": "Serviços pretendidos",
    "form-budget-select": "Seleciona uma faixa de orçamento",
    "form-description": "Descreve o teu projeto",
    "form-terms-1": "Aceito os",
    "form-terms-link": "Termos e Condições",
    "form-submit": "Enviar Mensagem",
    "form-sending": "A enviar...",

    // Projects
    "project-gin-tonic": "Contos do Gin-tonic",
    "project-day-d": "Dia D - Evento",
    "project-moonu": "Moonu - <br>Creative Studio",
    "coming-soon": "Em breve",
    "tag-identity": "Identidade",
    "tag-editorial": "Editorial",
    "cta-main": "Curioso para ver o que podemos criar juntos?",
    "cta-sub-projects": "Entra em contacto para falarmos sobre projetos.",

    "diad-title": "Dia D - evento",
    "diad-description":
      "A proposta consiste no desenvolvimento da identidade gráfica para o evento <em>Dia D – Conversas com Design</em> com o objetivo de traduzir visualmente a essência do evento: partilha, criatividade e diálogo em torno do design.",
    "diad-concept":
      'O conceito do projeto baseia-se na ideia de "localização", representada através do mapa de Barcelos, onde decorre o Dia D. Este elemento central organiza visualmente os principais pontos do evento e cria uma sensação de movimento e dinamismo no cartaz.',
    "diad-design-approach":
      "A composição dinâmica e o uso de cores tranquilizantes, como o azul, transmitem criatividade e clareza. A hierarquia visual foi pensada para envolver o espetador e facilitar a leitura, reforçando a identidade do <em>Dia D – Conversas com Design</em>.",

    "gin-tonic-title": "Os Contos<br>do Gin-Tonic",
    "gin-tonic-description":
      "Este projeto envolveu a paginação, a ilustração de um dos contos e o design da capa do livro Os Contos do Gin-Tonic, uma obra emblemática da literatura surrealista.",
    "gin-tonic-approach":
      "Partindo da natureza fragmentária e provocadora do texto, optou-se por uma grelha de inspiração pós-modernista, que reflete a liberdade formal da narrativa. As ilustrações foram desenvolvidas de forma a dialogar com o tom absurdo e simbólico da escrita, reforçando o universo visual que a obra propõe.",
    "gin-tonic-grid":
      "A estrutura da grelha foi pensada para desafiar a leitura linear, refletindo a natureza desconstrutiva do texto. Tipografia, espaçamento e ritmo visual foram cuidadosamente explorados para criar uma experiência de leitura coerente com o universo surrealista da obra.",

    "moonu-identity-title": "Moonu - <br>creative studio",
    "moonu-identity-description":
      "A marca moonu nasce com um propósito claro: transformar ideias em presenças reais, humanas e cheias de significado. Para isso, foi cuidadosamente desenvolvida uma identidade visual capaz de traduzir essa essência de forma autêntica e envolvente.",
    "moonu-identity-concept":
      "O logótipo <strong><em>moonu</em></strong> expressa a dualidade entre estrutura e emoção. Representa um estúdio que alia funcionalidade digital a uma identidade criativa e autêntica, onde o rigor profissional coexiste com a liberdade artística, mostrando que design pode ser ao mesmo tempo útil, inclusivo e profundamente pessoal.",
    "moonu-identity-typography":
      'A moldura arredondada inspira-se em botões digitais, sugerindo interatividade e presença ativa. A tipografia do "moo" é estável e acessível; o "nu", fluido e expressivo. Este contraste visual revela a tua essência: um equilíbrio entre lógica e intuição, entre grelha e rasura criativa.',

    "pedro-pinto-title": "Pedro Pinto.",
    "pedro-pinto-description":
      "Pedro Pinto não é apenas um nome — é a assinatura de confiança, rigor e clareza na comunicação especializada em consultoria linguística e serviços de tradução.",
    "pedro-pinto-brand-concept":
      "Como marca, representa uma ponte entre línguas e contextos, oferecendo serviços de tradução, e consultoria linguística com precisão técnica e sensibilidade cultural. O branding da Pedro Pinto reflete esta missão: proximidade, profissionalismo e excelência na arte de comunicar.",
    "pedro-pinto-differentiator":
      "O fator diferenciador da empresa residiu na sua ligação com profissionais do setor jurídico, como advogados e notários, com o objetivo de atrair um público-alvo mais exigente, que valoriza a elegância e o detalhe.",

    "tag-illustration": "Ilustração",
    "cta-sub": "Manda uma mensagem para abrirmos portas à tua marca!",
  },

  EN: {
    greeting: "Hello!",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

    // Navigation
    "nav-home": "Home",
    "nav-projects": "Projects",
    "nav-about": "About",
    "nav-process": "Process",
    "nav-contact": "Contact",

    // Page titles
    "page-title": "Portfolio - Moonu Design",

    // Hero section
    "hero-title": "moonu, design<br>with intention.",
    "hero-description":
      '<span class="brand-name">moonu</span> is an identity under construction, a personal brand with purpose: transforming ideas into meaningful solutions.',

    // Welcome section
    "welcome-text1-line1": "Discover",
    "welcome-text1-line2": "the moonu",
    "welcome-text1-line3": "universe.",
    "welcome-text2-line1": "And open",
    "welcome-text2-line2": "the window",
    "welcome-text2-line3": "to your brand.",

    // Profile section
    "profile-title": "Graphic<br>Designer",
    "service-branding": "Brand Design",
    "service-editorial": "Editorial",
    "service-web": "Web design",
    "about-tagline-1": "By combining creativity and technical knowledge,",
    "about-tagline-2": "I transform visions into reality!",
    "why-moonu-btn": "Why moonu?",

    // Modal content
    "modal-content":
      "Born from the combination of letters from my full name — <strong>Nuno Moura</strong>.<br><br><strong>More than a phonetic junction</strong>, it's a symbol of cycles, phases and transformation, just like my journey. <strong>It's a personal brand that reflects my duality: between technical and sensitive, structured and fluid.</strong> <br><br><strong>Moonu</strong> is the space where I apply my creative vision to digital, with purpose, inclusion and authenticity.",

    // Process cards
    "process-card-1": "Whatever the challenge, I start by listening and diving into the problem with empathy.",
    "process-card-2": "I try to understand the target audience and their needs.",
    "process-card-3": "I translate ideas into visual systems that tell stories and create emotional connection.",
    "process-card-4": "I align form and function, where aesthetics serves the message and user experience.",

    // Buttons
    "see-more-btn": "See more",
    "cta-btn": "Send Message",

    // Footer
    "footer-text": "Moonu Design | Compiled creativity",

    // Contact page
    "contact-title": "Talk to me.",
    "contact-subtitle": "Do you have a project in mind or an interesting opportunity? Let's talk.",
    "contact-cta-1": "Want to bring your project to life? Contact me!",
    "location-text": "<strong>Location: Porto, Portugal</strong>",
    "remote-work": "working remotely",

    // Form
    "form-name": "Your name",
    "form-email": "your.email@example.com",
    "form-phone": "phone (optional)",
    "form-recruiter": "I'm a Recruiter",
    "form-client": "I'm a Client",
    "form-services-label": "Desired services",
    "form-budget-select": "Select a budget range",
    "form-description": "Describe your project",
    "form-terms-1": "I accept the",
    "form-terms-link": "Terms and Conditions",
    "form-submit": "Send Message",
    "form-sending": "Sending...",

    // Projects
    "project-gin-tonic": "Gin-tonic Tales",
    "project-day-d": "Day D - Event",
    "project-moonu": "Moonu - <br>Creative Studio",
    "coming-soon": "Coming soon",
    "tag-identity": "Identity",
    "tag-editorial": "Editorial",
    "cta-main": "Curious to see what we can create together?",
    "cta-sub-projects": "Get in touch to talk about projects.",

    "diad-title": "Day D - event",
    "diad-description":
      "The proposal consists of developing the graphic identity for the event <em>Day D – Conversations with Design</em> with the objective of visually translating the essence of the event: sharing, creativity and dialogue around design.",
    "diad-concept":
      'The project concept is based on the idea of "location", represented through the map of Barcelos, where Day D takes place. This central element visually organizes the main points of the event and creates a sense of movement and dynamism in the poster.',
    "diad-design-approach":
      "The dynamic composition and use of calming colors, such as blue, convey creativity and clarity. The visual hierarchy was designed to engage the viewer and facilitate reading, reinforcing the identity of <em>Day D – Conversations with Design</em>.",

    "gin-tonic-title": "The Gin-Tonic<br>Tales",
    "gin-tonic-description":
      "This project involved the pagination, illustration of one of the tales and the cover design of the book The Gin-Tonic Tales, an emblematic work of surrealist literature.",
    "gin-tonic-approach":
      "Starting from the fragmentary and provocative nature of the text, we opted for a postmodernist-inspired grid, which reflects the formal freedom of the narrative. The illustrations were developed to dialogue with the absurd and symbolic tone of the writing, reinforcing the visual universe that the work proposes.",
    "gin-tonic-grid":
      "The grid structure was designed to challenge linear reading, reflecting the deconstructive nature of the text. Typography, spacing and visual rhythm were carefully explored to create a reading experience consistent with the surrealist universe of the work.",

    "moonu-identity-title": "Moonu - <br>creative studio",
    "moonu-identity-description":
      "The moonu brand is born with a clear purpose: to transform ideas into real, human and meaningful presences. For this, a visual identity was carefully developed capable of translating this essence in an authentic and engaging way.",
    "moonu-identity-concept":
      "The <strong><em>moonu</em></strong> logo expresses the duality between structure and emotion. It represents a studio that combines digital functionality with a creative and authentic identity, where professional rigor coexists with artistic freedom, showing that design can be simultaneously useful, inclusive and deeply personal.",
    "moonu-identity-typography":
      'The rounded frame is inspired by digital buttons, suggesting interactivity and active presence. The "moo" typography is stable and accessible; the "nu", fluid and expressive. This visual contrast reveals your essence: a balance between logic and intuition, between grid and creative scratch.',

    "pedro-pinto-title": "Pedro Pinto.",
    "pedro-pinto-description":
      "Pedro Pinto is not just a name — it's the signature of trust, rigor and clarity in specialized communication in linguistic consultancy and translation services.",
    "pedro-pinto-brand-concept":
      "As a brand, it represents a bridge between languages and contexts, offering translation and linguistic consultancy services with technical precision and cultural sensitivity. Pedro Pinto's branding reflects this mission: proximity, professionalism and excellence in the art of communicating.",
    "pedro-pinto-differentiator":
      "The company's differentiating factor resided in its connection with legal sector professionals, such as lawyers and notaries, with the objective of attracting a more demanding target audience, which values elegance and detail.",

    "tag-illustration": "Illustration",
    "cta-sub": "Send a message to open doors to your brand!",
  },
}

// Application state
let currentLanguage = "PT" // Default language

// Function to update static texts based on language
function updateTexts() {
  const texts = translations[currentLanguage]

  // Update greeting
  const greetingElement = document.getElementById("greeting")
  if (greetingElement) greetingElement.textContent = texts.greeting

  // Update all elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate")
    if (texts[key]) {
      element.innerHTML = texts[key]
    }
  })

  // Update placeholders
  document.querySelectorAll("[data-translate-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-translate-placeholder")
    if (texts[key]) {
      element.placeholder = texts[key]
    }
  })

  // Update document title
  const titleElement = document.querySelector("title[data-translate]")
  if (titleElement) {
    const key = titleElement.getAttribute("data-translate")
    if (texts[key]) {
      titleElement.textContent = texts[key]
    }
  }

  // Update HTML lang attribute
  document.documentElement.lang = currentLanguage.toLowerCase()
}

// Function to update date and day of the week
function updateDate() {
  const now = new Date()
  const diaSemanaElement = document.getElementById("dia-da-semana")
  const dataCompletaElement = document.getElementById("data-completa")

  if (diaSemanaElement && dataCompletaElement) {
    const langTexts = translations[currentLanguage]

    const diaSemana = langTexts.dayNames[now.getDay()]
    const dia = now.getDate()
    const mes = langTexts.monthNames[now.getMonth()]
    const ano = now.getFullYear()

    diaSemanaElement.textContent = diaSemana
    dataCompletaElement.textContent = `${dia} ${mes} ${ano}`
  }
}

// Main function to set language
function setLanguage(lang) {
  currentLanguage = lang
  localStorage.setItem("moonu-language", lang) // Save preference in localStorage

  // Update button text and data-lang
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (currentLanguage === "EN") {
      btn.textContent = "PT"
      btn.dataset.lang = "PT"
    } else {
      btn.textContent = "EN"
      btn.dataset.lang = "EN"
    }
  })

  updateTexts() // Update static texts
  updateDate() // Update date and day
}

document.addEventListener("DOMContentLoaded", () => {
  // Project animation logic
  const projectCards = document.querySelectorAll(".projetos-container > div")
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  projectCards.forEach((card) => {
    observer.observe(card)
  })

  // Text transition logic (slideshow)
  const mainText1 = document.getElementById("mainText1")
  const mainText2 = document.getElementById("mainText2")
  const toggleTextButton = document.getElementById("toggleTextButton")

  let isMainText1Visible = true

  if (toggleTextButton && mainText1 && mainText2) {
    mainText2.style.transform = "translateY(-50%) translateX(100%)"
    mainText1.style.transform = "translateY(-50%) translateX(0)"

    toggleTextButton.addEventListener("click", (event) => {
      event.preventDefault()

      if (isMainText1Visible) {
        mainText1.style.transform = "translateY(-50%) translateX(-100%)"
        mainText2.style.transform = "translateY(-50%) translateX(0)"
      } else {
        mainText1.style.transform = "translateY(-50%) translateX(0)"
        mainText2.style.transform = "translateY(-50%) translateX(100%)"
      }
      isMainText1Visible = !isMainText1Visible
    })
  }

  // Event listeners for language buttons
  const langButtons = document.querySelectorAll(".lang-btn")
  langButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Visual effect on click
      e.target.style.transform = "scale(0.95)"
      setTimeout(() => {
        e.target.style.transform = "scale(1)"
      }, 150)

      const newLang = btn.dataset.lang
      setLanguage(newLang)
    })
  })

  // Load saved language or set default on initialization
  const savedLanguage = localStorage.getItem("moonu-language")
  if (savedLanguage && translations[savedLanguage]) {
    setLanguage(savedLanguage)
  } else {
    setLanguage("PT") // Default to Portuguese
  }

  // Update date every minute
  setInterval(updateDate, 60000)

  // Entry animation for controls
  setTimeout(() => {
    const bottomControls = document.querySelector(".bottom-controls")
    if (bottomControls) {
      bottomControls.style.opacity = "0"
      bottomControls.style.transform = "translateY(20px)"

      setTimeout(() => {
        bottomControls.style.transition = "all 0.6s ease"
        bottomControls.style.opacity = "1"
        bottomControls.style.transform = "translateY(0)"
      }, 200)
    }
  }, 100)

  // Additional hover effects
  const langSelector = document.querySelector(".language-selector")

  if (langSelector) {
    langSelector.addEventListener("mouseenter", () => {
      langSelector.style.transform = "scale(1.02)"
    })

    langSelector.addEventListener("mouseleave", () => {
      langSelector.style.transform = "scale(1)"
    })
  }

  // Contact Form Class
  class ContactForm {
    constructor() {
      this.form = document.getElementById("contactForm")
      this.contactType = "recruiter"
      this.isSubmitting = false

      this.initializeEventListeners()
    }

    initializeEventListeners() {
      // Contact type toggle
      const toggleButtons = document.querySelectorAll(".toggle-option")
      toggleButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
          this.handleContactTypeChange(e.target.closest(".toggle-option"))
        })
      })

      // Form submission
      if (this.form) {
        this.form.addEventListener("submit", (e) => {
          this.handleSubmit(e)
        })
      }

      // Input animations
      const inputs = document.querySelectorAll(".form-input")
      inputs.forEach((input) => {
        input.addEventListener("focus", () => {
          input.style.transform = "translateY(-1px)"
        })

        input.addEventListener("blur", () => {
          input.style.transform = "translateY(0)"
        })
      })
    }

    handleContactTypeChange(clickedButton) {
      const toggleButtons = document.querySelectorAll(".toggle-option")
      const clientFields = document.getElementById("clientFields")

      // Remove active class from all buttons
      toggleButtons.forEach((btn) => {
        btn.classList.remove("toggle-option-active")
      })

      // Add active class to clicked button
      clickedButton.classList.add("toggle-option-active")

      // Update contact type
      this.contactType = clickedButton.dataset.type

      // Show/hide client fields
      if (this.contactType === "client") {
        clientFields.classList.remove("hidden")
      } else {
        clientFields.classList.add("hidden")
      }
    }

    validateForm() {
      const name = document.getElementById("name").value.trim()
      const email = document.getElementById("email").value.trim()
      const terms = document.getElementById("terms").checked

      if (!name || !email) {
        this.showToast("Required fields", "Please fill in name and email.", "error")
        return false
      }

      if (!terms) {
        this.showToast("Terms and Conditions", "You must accept the terms and conditions.", "error")
        return false
      }

      return true
    }

    async handleSubmit(e) {
      e.preventDefault()

      if (this.isSubmitting) return

      if (!this.validateForm()) return

      this.setSubmittingState(true)

      try {
        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 2000))

        this.showToast("Message sent!", "Thank you for your contact. We'll respond soon.", "success")
        this.resetForm()
      } catch (error) {
        this.showToast("Error", "An error occurred. Please try again.", "error")
      } finally {
        this.setSubmittingState(false)
      }
    }

    setSubmittingState(isSubmitting) {
      this.isSubmitting = isSubmitting
      const submitBtn = document.getElementById("submitBtn")
      const submitText = document.getElementById("submitText")
      const loadingText = document.getElementById("loadingText")

      submitBtn.disabled = isSubmitting

      if (isSubmitting) {
        submitText.classList.add("hidden")
        loadingText.classList.remove("hidden")
      } else {
        submitText.classList.remove("hidden")
        loadingText.classList.add("hidden")
      }
    }

    resetForm() {
      this.form.reset()

      // Reset contact type to recruiter
      const recruiterBtn = document.getElementById("recruiterBtn")
      const clientBtn = document.getElementById("clientBtn")
      const clientFields = document.getElementById("clientFields")

      recruiterBtn.classList.add("toggle-option-active")
      clientBtn.classList.remove("toggle-option-active")
      clientFields.classList.add("hidden")

      this.contactType = "recruiter"
    }

    showToast(title, description, type = "success") {
      const toastContainer = document.getElementById("toastContainer")

      const toast = document.createElement("div")
      toast.className = `toast ${type}`

      toast.innerHTML = `
        <div class="toast-title">${title}</div>
        <div class="toast-description">${description}</div>
      `

      toastContainer.appendChild(toast)

      // Auto remove after 5 seconds
      setTimeout(() => {
        if (toast.parentNode) {
          toast.style.animation = "slideInRight 0.3s ease-out reverse"
          setTimeout(() => {
            toastContainer.removeChild(toast)
          }, 300)
        }
      }, 5000)
    }
  }

  // Initialize the form when DOM is loaded
  new ContactForm()

  // Modal button functionality
  const button = document.getElementById("moonuButton3")
  const arrowCircle = document.getElementById("arrowCircle3")
  const modal = document.getElementById("modal3")
  const closeModal = document.getElementById("closeModal3")

  // Only proceed if all necessary elements are found
  if (button && arrowCircle && modal && closeModal) {
    // Variables for drag/swipe control
    let isDragging = false
    let startX = 0
    let currentX = 0
    const dragThreshold = 80

    // Calculate maximum limit based on container size
    const buttonWidth = button.offsetWidth
    const circleWidth = arrowCircle.offsetWidth
    const maxDragDistance = buttonWidth - circleWidth - 6

    // Function to open modal
    function openModal() {
      modal.classList.add("active")
      document.body.style.overflow = "hidden"
    }

    // Function to close modal
    function closeModalFunction() {
      modal.classList.remove("active")
      document.body.style.overflow = "auto"

      // Reset circle after closing modal
      setTimeout(() => {
        arrowCircle.classList.remove("circle-slide3")
        arrowCircle.style.transform = ""
      }, 300)
    }

    // Function for click (WITH animation)
    function handleClick() {
      arrowCircle.style.transition = "transform 0.4s ease"
      arrowCircle.style.transform = "translateX(" + maxDragDistance + "px) rotate(0deg)"

      setTimeout(() => {
        arrowCircle.style.transform = "rotate(0deg)"
      }, 400)

      setTimeout(() => {
        openModal()
      }, 800)
    }

    // Function for swipe (WITHOUT animation)
    function handleSwipe() {
      openModal()

      setTimeout(() => {
        arrowCircle.style.transform = ""
      }, 100)
    }

    // === MOUSE EVENTS ===

    // Mouse down
    arrowCircle.addEventListener("mousedown", (e) => {
      isDragging = true
      startX = e.clientX
      currentX = e.clientX
      arrowCircle.classList.add("circle-dragging3")
      e.preventDefault()
    })

    // Mouse move
    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return

      currentX = e.clientX
      const deltaX = currentX - startX

      if (deltaX > 0) {
        const limitedDelta = Math.min(deltaX, maxDragDistance)
        arrowCircle.style.transform = "translateX(" + limitedDelta + "px) rotate(0deg)"
      }
    })

    // Mouse up
    document.addEventListener("mouseup", (e) => {
      if (!isDragging) return

      isDragging = false
      const deltaX = currentX - startX

      arrowCircle.classList.remove("circle-dragging3")

      if (deltaX > dragThreshold) {
        handleSwipe()
      } else if (deltaX > 5) {
        arrowCircle.style.transform = ""
      } else {
        arrowCircle.style.transform = ""
        handleClick()
      }
    })

    // === TOUCH EVENTS (Mobile) ===

    // Touch start
    arrowCircle.addEventListener("touchstart", (e) => {
      isDragging = true
      startX = e.touches[0].clientX
      currentX = e.touches[0].clientX
      arrowCircle.classList.add("circle-dragging3")
      e.preventDefault()
    })

    // Touch move
    arrowCircle.addEventListener("touchmove", (e) => {
      if (!isDragging) return

      currentX = e.touches[0].clientX
      const deltaX = currentX - startX

      if (deltaX > 0) {
        const limitedDelta = Math.min(deltaX, maxDragDistance)
        arrowCircle.style.transform = "translateX(" + limitedDelta + "px) rotate(45deg)"
      }
      e.preventDefault()
    })

    // Touch end
    arrowCircle.addEventListener("touchend", (e) => {
      if (!isDragging) return

      isDragging = false
      const deltaX = currentX - startX

      arrowCircle.classList.remove("circle-dragging3")

      if (deltaX > dragThreshold) {
        handleSwipe()
      } else if (deltaX > 5) {
        arrowCircle.style.transform = ""
      } else {
        arrowCircle.style.transform = ""
        handleClick()
      }
      e.preventDefault()
    })

    // === MODAL EVENTS ===

    // Close modal by clicking X
    closeModal.addEventListener("click", closeModalFunction)

    // Close modal by clicking outside content
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModalFunction()
      }
    })

    // Close modal with ESC key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModalFunction()
      }
    })

    // Remove animation class after completion
    arrowCircle.addEventListener("animationend", () => {
      arrowCircle.classList.remove("arrow-pulse3")
    })

    // Prevent text selection during drag
    document.addEventListener("selectstart", (e) => {
      if (isDragging) {
        e.preventDefault()
      }
    })
  }

  // Footer
  document.getElementById("anoAtual").textContent = new Date().getFullYear()

  // Project images transitions
  const imagens = document.querySelectorAll(".projetos-container div")

  const observerImagens = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observerImagens.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
    },
  )

  imagens.forEach((imagem) => {
    observerImagens.observe(imagem)
  })

  // Project page transitions
  const cards = document.querySelectorAll(".project-card")

  const observerCards = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
          observerCards.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.3,
    },
  )

  cards.forEach((card) => observerCards.observe(card))
})

document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".projetos-container img")

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When first image becomes visible, show all 3 with delay
          imagens.forEach((img, i) => {
            setTimeout(() => {
              img.classList.add("ativo")
            }, i * 200) // 200ms difference between each image
          })

          // After activating all 3 images, stop observing
          imagens.forEach((img) => observer.unobserve(img))
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  imagens.forEach((img) => observer.observe(img))
})

// Process cards animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".content-card")

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show")
          observer.unobserve(entry.target) // animate only once
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  cards.forEach((card) => {
    observer.observe(card)
  })
})

// Welcome menu button
const button = document.querySelector(".arrow-button")

if (button) {
  button.addEventListener("click", () => {
    button.classList.toggle("rotated")
  })
}
