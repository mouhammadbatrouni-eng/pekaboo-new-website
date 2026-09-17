import type { Dict } from "./types";

export const en: Dict = {
  meta: {
    title: "Peekaboo — everything your childcare center needs, in one platform",
    description:
      "Run your center, support your educators, connect with parents, manage payments and follow every child's journey — all from one connected platform.",
    dir: "ltr",
  },

  common: {
    getStarted: "Get started",
    contactUs: "Contact us",
    signIn: "Sign in",
    explore: "Explore Peekaboo",
    backToTop: "Back to top",
    openMenu: "Open section menu",
    closeMenu: "Close section menu",
    currentlyViewing: "Currently viewing: ",
    welcome: "Welcome",
    skipToContent: "Skip to main content",
    switchToArabic: "التبديل إلى العربية",
    switchToEnglish: "Switch to English",
    switchToDark: "Switch to dark theme",
    switchToLight: "Switch to light theme",
    whatsapp: "Chat with us on WhatsApp",
  },

  nav: {
    plans: "Plans",
    app: "Our App",
    features: "Features",
    improve: "Improve",
    about: "About",
    whyUs: "Why Us",
    curriculum: "Curriculum",
    faq: "FAQ",
    contact: "Contact",
  },

  hero: {
    badge: "Childcare management platform",
    heading: "Everything your childcare center needs. One connected platform.",
    body: "Run your center, support your educators, connect with parents, manage payments and follow every child's journey — all from one place.",
    points: ["A portal for your team", "An app for families", "Built for early years"],
  },

  plans: {
    eyebrow: "Plans",
    heading: "Three ways to start with Peekaboo",
    body: "Every center is different. Pick the one that matches yours — you can always talk it through with us first.",
    mostPopular: "Most popular",
    bestFor: "Best for",
    talkToUs: "Talk to us about this",
    items: [
      {
        id: "use-peekaboo",
        name: "Use Peekaboo",
        description:
          "Start with the full Peekaboo platform and the modules your setting needs. Nothing to build, nothing to specify — you're running on proven software from day one.",
        bestFor: "Settings that want to be up and running quickly",
        includes: ["Peekaboo Care for your team", "Peekaboo Parent for families", "The modules that fit how you operate"],
      },
      {
        id: "customize-your-app",
        name: "Customise your own app",
        description:
          "Keep the Peekaboo Care platform running your operation, and give families a parent app carrying your own name, logo and identity instead of ours.",
        bestFor: "Groups with an established brand families already know",
        includes: ["Parent app in your branding", "Your logo, colours and identity", "Powered by Peekaboo Care"],
      },
      {
        id: "build-your-own",
        name: "Build your own system",
        description:
          "For organisations whose processes don't fit an off-the-shelf platform: a management system and parent app designed around your operation, built on Peekaboo's foundations.",
        bestFor: "Larger groups with specific operational requirements",
        includes: ["Custom management system", "Custom parent application", "Modules designed to your process"],
      },
    ],
  },

  bridges: {
    toApp: "However you start with Peekaboo, families stay connected to their child's day.",
    toFeatures: "That's what parents see. Here's what your team works with.",
    toImprove: "All of which adds up to a different kind of working week.",
  },

  app: {
    eyebrow: "Our App",
    heading: "Families follow the day as it happens",
    body: "Peekaboo Parent is the mobile half of the platform. Everything in it comes from records your team already keeps — nothing is written twice.",
    stepOf: (current, total) => `Step ${current} of ${total}`,
    beats: [
      {
        title: "Daily updates",
        body: "Photos and moments from the room reach families as they're posted — not at the door, three hours later.",
      },
      {
        title: "Communication",
        body: "Announcements, newsletters and event invitations land in one place, sent to the right classes.",
      },
      {
        title: "Development",
        body: "Observations, milestones and learning journals show parents how their child is progressing.",
      },
      {
        title: "Payments",
        body: "Invoices and receipts sit alongside everything else, so fees don't need a separate email thread.",
      },
    ],
    languagesTitle: "Built for mixed communities",
    languagesBody:
      "Peekaboo runs in English and Arabic, and switches the entire interface to right-to-left automatically — for staff and families alike.",
  },

  features: {
    eyebrow: "Features",
    heading: "What's inside Peekaboo",
    body: "Three parts carry the product — the portal your team runs on, the app families follow, and the pipeline that fills your places. Everything else supports them.",
    andAround: "And everything around them",
    spotlights: [
      {
        id: "operations",
        eyebrow: "Center operations",
        headline: "See your whole setting at a glance",
        body: "Attendance, occupancy and staff cover update through the day, so you're not chasing four people to find out where the setting stands.",
        caption: "The live dashboard in Peekaboo Care",
        capabilities: [
          "Classroom management",
          "Multi-center management",
          "Attendance & check-in",
          "Child profiles",
          "Classroom ratios",
          "Calendar & events",
        ],
      },
      {
        id: "parents-children",
        eyebrow: "Parents & children",
        headline: "Families see the day, as it happens",
        body: "Daily reports, photos and messages reach parents straight from the room — built from the records your team already keeps, not written a second time.",
        caption: "The daily report in Peekaboo Parent",
        capabilities: [
          "Daily reports",
          "Photos & moments",
          "Announcements",
          "Observations",
          "Learning journals",
          "Photo permissions",
        ],
      },
      {
        id: "admissions",
        eyebrow: "Admissions CRM",
        headline: "Turn enquiries into enrolments",
        body: "Every family that gets in touch is tracked from first contact through tour, waiting list and approval — so no one goes quiet because a callback was forgotten.",
        caption: "The admissions pipeline in Peekaboo Care",
        capabilities: [
          "Lead pipeline",
          "Tours & visit notes",
          "Waiting list",
          "Lead sources & referrals",
          "Enrolment checklist",
          "Enquiry records",
        ],
      },
    ],
    cards: [
      {
        id: "staff",
        title: "Staff",
        summary: "Records, cover and permissions in one place.",
        capabilities: ["Employee profiles", "Staff attendance", "Class assignment", "Roles & access"],
      },
      {
        id: "finance",
        title: "Finance",
        summary: "Fees in, costs out, and a clear monthly picture.",
        capabilities: ["Billing & invoicing", "Payments & receipts", "Expenses", "Suppliers & purchases"],
      },
      {
        id: "insights",
        title: "Insights & security",
        summary: "Know where you stand — and keep records safe.",
        capabilities: ["Classroom insights", "Health & incidents", "Encrypted storage", "Scheduled backups"],
      },
    ],
  },

  improve: {
    eyebrow: "Improve",
    heading: "What actually changes",
    body: "Most settings aren't short of systems — they're short of one system. This is what usually shifts in the first month.",
    before: "Before Peekaboo",
    after: "With Peekaboo",
    pairs: [
      { before: "Paperwork", after: "Digital records" },
      { before: "Spreadsheets", after: "One central dashboard" },
      { before: "Manual invoicing", after: "Digital billing" },
      { before: "Disconnected apps", after: "One connected platform" },
      { before: "Difficult reporting", after: "Real-time insights" },
      { before: "Repetitive admin", after: "Fewer things done twice" },
    ],
    onePlatform: "One platform",
    onePlatformBody: "Everything above, in a single system",
  },

  about: {
    eyebrow: "About",
    heading: "Built around the way early-years teams actually work",
    body: "Peekaboo brings administration, educators, families, children's development, payments and communication together in one connected environment — and stays configurable, because no two settings run the same way.",
    usedBy: "Used by settings like",
    audiences: ["Nurseries", "Preschools", "Daycare centers", "Kindergartens", "Montessori settings", "Nursery groups"],
    closing:
      "Whether you run a single room or a group of centers, the same platform adapts — classes, age groups, curriculum frameworks and fee structures are all yours to define.",
    builtBy: "Peekaboo is built and supported by Educore Systems & Technologies, based in Dubai.",
  },

  whyUs: {
    eyebrow: "Why Us",
    heading: "Why one platform beats five tools",
    body: "The case for Peekaboo isn't a longer feature list — it's what stops being your problem.",
    reasons: [
      {
        title: "Everything connected",
        description: "Children, parents, educators, billing and operations in one system instead of five.",
      },
      {
        title: "Less administration",
        description: "Records entered once travel to the parent, the report and the invoice on their own.",
      },
      {
        title: "Better parent engagement",
        description: "Families see the day as it happens, so pickup stops being the only update they get.",
      },
      {
        title: "Understand child development",
        description: "Observations, milestones and journals build a record that follows each child.",
      },
      {
        title: "Fill your places",
        description:
          "Enquiries tracked from first contact to first day, with a view of which sources actually bring families in.",
      },
      {
        title: "Flexible for your organisation",
        description: "Use Peekaboo as it comes, brand the parent app, or have it built around your process.",
      },
    ],
  },

  curriculum: {
    eyebrow: "Curriculum",
    heading: "Your curriculum. Your framework. Built into Peekaboo.",
    body: "Peekaboo doesn't impose a curriculum on your setting. You define the learning areas, objectives and attainment levels you work to — then everything else follows that structure.",
    steps: [
      {
        step: "Define",
        title: "Set up your framework",
        description: "Create learning areas and the aspects within them, then define the attainment levels your setting uses.",
      },
      {
        step: "Plan",
        title: "Map objectives",
        description: "Attach learning objectives to age groups and attainment levels so expectations are clear per stage.",
      },
      {
        step: "Observe",
        title: "Record what you see",
        description: "Educators log observations against objectives, with next steps captured while it's still fresh.",
      },
      {
        step: "Report",
        title: "Turn it into evidence",
        description: "Generate assessment reports by child, class, learning area or date range when you need them.",
      },
    ],
    frameworksLabel: "Set up by settings working to",
    frameworksNote:
      "Because you define the framework, Peekaboo can be configured for any of these — or for a structure that's entirely your own.",
    plannerCaption:
      "A theme leads to activities, activities map to objectives, and an observation becomes part of the child's journal.",
  },

  faq: {
    eyebrow: "Questions",
    heading: "What centers ask us before they start",
    body: "If your question isn't here, the form below is the fastest way to get a straight answer.",
    items: [
      {
        question: "Can Peekaboo replace the separate tools we use today?",
        answer:
          "That's the intent. Attendance, daily reports, curriculum and observations, staff records, invoicing and expenses, and your admissions pipeline all live in one platform — so the spreadsheets, group chats and paper folders can be retired rather than duplicated.",
      },
      {
        question: "Do parents need to download an app?",
        answer:
          "Yes — families use the Peekaboo Parent app to see daily reports, moments, announcements and events as they're published. It's available in English and Arabic, with full right-to-left layout.",
      },
      {
        question: "Which curriculum frameworks does it support?",
        answer:
          "The curriculum module is framework-agnostic. You define your own learning areas, aspects, objectives and attainment levels, which means it can be set up for EYFS, IPC, Jolly Curriculum, Whole School Development, Reggio Emilia or a framework specific to your setting.",
      },
      {
        question: "Can we run more than one center?",
        answer:
          "Yes. Each center has its own details, licence dates, currency and timezone, and management can work across all of them from a single account.",
      },
      {
        question: "Can we use our own branding?",
        answer:
          "Yes. Alongside using Peekaboo as it comes, you can have the parent app published in your own branding, or have a system and app built around your specific operation. Those are the three ways settings adopt Peekaboo.",
      },
      {
        question: "How is our data protected?",
        answer:
          "Records are held on secure infrastructure with encrypted storage and scheduled backups, and access is controlled by role — so staff only reach the information their role requires.",
      },
    ],
  },

  contact: {
    finalCtaHeading: "Run your childcare center with less admin and more connection.",
    eyebrow: "Contact",
    heading: "Ready to see Peekaboo in action?",
    body: "Tell us about your center and we'll help you find the right Peekaboo setup.",
    form: {
      name: "Your name",
      email: "Work email",
      organisation: "Nursery or organisation",
      phone: "Phone",
      centers: "How many centers do you run?",
      centersPlaceholder: "Select…",
      message: "How can we help?",
      messagePlaceholder: "Tell us how your setting runs today and what you're hoping to change.",
      optional: "(optional)",
      submit: "Get started",
      sending: "Sending…",
      privacyNote: "We'll only use these details to reply to you. See our",
      privacyLink: "privacy policy",
      successTitle: "Thank you.",
      success: "We've got your details and someone from our team will be in touch within one business day.",
      error: "We couldn't send that just now. Please try again, or call us on",
    },
    expect: {
      title: "What to expect",
      steps: [
        "A short call to understand how your setting runs today",
        "A walkthrough using your rooms, age groups and fee structure",
        "Straight answers on which of the three plans fits",
      ],
    },
  },

  signup: {
    metaTitle: "Get started — Peekaboo",
    metaDescription:
      "Set up your center on Peekaboo. Ten short steps, then your login details arrive by email.",
    eyebrow: "Get started",
    heading: "Set up your center on Peekaboo",
    body: "Ten short steps. We'll create your center, email your login details, and book a short call to walk you through it.",
    stepOf: (current, total) => `Step ${current} of ${total}`,
    progressLabel: "Signup progress",
    next: "Next",
    back: "Previous",
    finish: "Finish",
    submitting: "Creating your center…",
    optional: "(optional)",
    mandatoryNote: "Fields marked * are required.",
    chooseAtLeastOne: "Choose at least one option.",
    requiredField: "This field is required.",
    invalidEmail: "Enter a valid email address.",
    invalidNumber: "Enter a whole number.",
    logoTooLarge: "That image is over 4 MB — please choose a smaller one.",
    logoNotImage: "Please choose an image file.",
    dateInPast: "Choose a date from tomorrow onwards.",
    loading: "Loading…",
    lookupFailed: "We couldn't load the list — please type it instead.",
    submitError: "We couldn't create your center. Please try again, or email us at",

    // Keyed by the English value posted to the portal. In English the map is an
    // identity; the Arabic file translates the same keys.
    choices: {
      "Owner / Founder": "Owner / Founder",
      Principal: "Principal",
      "Educational Director / Curriculum Coordinator": "Educational Director / Curriculum Coordinator",
      "Head Teacher": "Head Teacher",
      Teacher: "Teacher",
      Parent: "Parent",

      Nursery: "Nursery",
      Kindergarten: "Kindergarten",
      "Primary School": "Primary School",
      "Secondary School": "Secondary School",
      "High School": "High School",
      "After School": "After School",

      "1": "1",
      "2-5": "2–5",
      "6-9": "6–9",
      "10-14": "10–14",
      "15 or more": "15 or more",

      "To improve the communication with parent": "Improve communication with parents",
      "To involve parents in in school activity": "Involve parents in school activity",
      "To simply generate invoices and receipts": "Generate invoices and receipts",
      "To monitor my expenses and generate my P&": "Monitor expenses and generate my P&L",
      "To automate the administrative processes": "Automate administrative processes",
      "To improve the education tracking of registered kids": "Improve education tracking for enrolled children",
      "To implement a CRM": "Implement a CRM",
      "To develop a new website": "Develop a new website",
      "To automate my registration process through our website": "Automate registration through our website",
      "To monitor my staff attendance and assigned sessions": "Monitor staff attendance and assigned sessions",
      "To monitor my Cash flow": "Monitor cash flow",
      "To build my private social media network": "Build a private social network for our families",
    },

    steps: {
      role: "Your role",
      institution: "Institution type",
      locations: "Locations",
      objectives: "Objectives",
      center: "Center information",
      contact: "Contact information",
      web: "Website & social",
      location: "Location",
      legal: "Legal",
      appointment: "Book a call",
    },

    questions: {
      role: "What's your role?",
      institution: "What's the type of institution you're involved in?",
      locations: "How many centres (locations) does your institution have?",
      objectives: "What are your primary objectives for the next 6 months?",
      objectivesHint: "Choose as many as apply.",
      appointment: "Please choose a date for an online introduction meeting with us.",
    },

    fields: {
      centerName: "Center name",
      capacity: "Capacity",
      enrolled: "Enrolled children (in all locations)",
      centerDesc: "Center description",
      contactTitle: "Contact title",
      contactTitlePlaceholder: "e.g. Director",
      contactName: "Contact name",
      phone: "Phone number",
      email: "Email address",
      website: "Website",
      facebook: "Facebook",
      twitter: "X / Twitter",
      instagram: "Instagram",
      youtube: "YouTube",
      cloud: "Cloud storage",
      country: "Country",
      currency: "Currency",
      timezone: "Timezone",
      address: "Address",
      logo: "Center logo",
      logoHint: "PNG or JPG, up to 4 MB.",
      logoChoose: "Choose an image",
      logoNone: "No file chosen",
      vat: "VAT / TRN number",
      appointmentDate: "Meeting date",
    },

    done: {
      title: "Thank you for signing up with us!",
      body: (email) => `We've sent your username and password to ${email}.`,
      handoffTitle: "Thank you — we have your details",
      handoffBody: (email) =>
        `We couldn't finish setting up your center automatically, so our team will do it by hand and email your login details to ${email}. Nothing you entered was lost.`,
      signIn: "Sign in to the portal",
      helpBefore: "Not in your inbox or spam folder? Contact us at",
      helpEmail: "contactus@peekabooedu.com",
      helpAfter: "and we'll sort it out.",
    },
  },

  product: {
    nos: "Nursery Operating System",
    liveDashboard: "Live Dashboard",
    live: "Live",
    childrenPresent: "Children present",
    ofEnrolled: "of 55 enrolled",
    absentToday: "Absent today",
    excused: "2 excused",
    activeStaff: "Active staff",
    acrossRooms: "across 4 rooms",
    classroomOccupancy: "Classroom occupancy",
    rooms: ["Giraffe", "Rabbit", "Lion Cubs", "Wise Owls"],
    admissionsCrm: "Admissions CRM",
    leadPipeline: "Lead pipeline",
    last30Days: "Last 30 days",
    stages: ["New", "Tour booked", "Toured", "Waiting list", "Approved"],
    enrolmentChecklist: "Enrolment checklist",
    checklist: ["Information", "Documents", "Evaluation", "Finance"],
    curriculumSection: "Early Childhood · Curriculum",
    weeklyPlan: "Weekly plan",
    theme: "Theme",
    activity: "Activity",
    objective: "Objective",
    expected: "Expected",
    themeValue: "Growing things",
    activityValue: "Planting sunflower seeds",
    objectiveValue: "Explores how living things grow",
    /**
     * Alt text for the real product captures. Written as descriptions of what
     * each screen shows, so someone who can't see the image still learns what
     * the section around it is claiming.
     */
    shots: {
      portalDashboard:
        "The Peekaboo Care live dashboard, showing children present, absences today, active staff and classroom occupancy per room.",
      portalCrm:
        "The Peekaboo Care CRM dashboard, showing total leads, tours booked, waiting list and admissions outcomes above a month calendar of booked tours.",
      portalCommunication:
        "The Peekaboo Care communication page, showing announcements, photo posts and daily reports going out to families.",
      appFeed: "The Peekaboo Parent timeline, showing photos and a video posted from the classroom.",
      appDailyReport:
        "A daily report in Peekaboo Parent, showing a child's mood, meals, medicine and the supplies they need.",
      appDailyReportCreate:
        "An educator filling in a daily report in the app, choosing a child's mood and how much of breakfast they ate.",
      appMessages: "The Peekaboo Parent inbox, showing conversations with families and colleagues.",
      appProgress: "A child's progress analysis, showing curriculum coverage across each learning area.",
      appAssessmentReport:
        "The assessment report screen, listing each child's observations by learning area, filtered by class and date.",
    },
    observationToJournal: "Observation \u2192 Journal",
    observationQuote: "\u201cNoah checked his seed every morning and told the group it needed water.\u201d",
    journalTags: ["Added to journal", "Milestone recorded", "Shared with family"],
  },

  footer: {
    description:
      "Peekaboo is a complete management platform for nurseries, preschools and early-years centers. Flexible enough for any setting, easy for your team to use, and backed by people who understand childcare.",
    usefulLinks: "Useful links",
    contactHeading: "Get in touch",
    phoneLabel: "Phone",
    rights: "All rights reserved.",
    builtBy: "Built and supported by Educore Systems & Technologies.",
    links: [
      { label: "Plans", href: "#plans" },
      { label: "Our App", href: "#app" },
      { label: "Features", href: "#features" },
      { label: "About", href: "#about" },
      { label: "Why Us", href: "#why-us" },
      { label: "Curriculum", href: "#curriculum" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
    legal: { privacy: "Privacy & Policy", terms: "Terms & Conditions" },
  },
};
