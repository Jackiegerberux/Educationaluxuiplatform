# 📚 Complete Lesson Template - 12 Sections

## ✅ Ejemplo: "UX vs UI vs Product Design"

Esta lección ahora tiene **TODAS las 12 secciones** completas y es el ejemplo perfecto para probar el sistema end-to-end.

---

## 📋 Template de 12 Secciones Estándar

### 1. **Title + Meta** (Header)

- **Title:** `{ en: string, es: string }`
- **Description:** `{ en: string, es: string }`
- **Status:** `beginner | intermediate | advanced`
- **Time Estimate:** `string` (e.g., "45min", "1h 30min")

### 2. **Definition** (`content.definition`)

```typescript
definition: {
  en: 'What is this concept? Core explanation.',
  es: 'Explicación central del concepto.'
}
```

**Icon:** `BookOpen` (indigo)  
**Purpose:** Quick understanding of the topic

---

### 3. **Why it Matters** (`content.why`)

```typescript
why: {
  en: 'Why should you care? Business + user value.',
  es: 'Valor para el negocio y el usuario.'
}
```

**Icon:** `Lightbulb` (yellow/orange gradient)  
**Purpose:** Motivation and context

---

### 4. **Key Principles** (`content.keyPrinciples`)

```typescript
keyPrinciples: {
  en: [
    'Principle 1: Explanation',
    'Principle 2: Explanation',
    'Principle 3: Explanation',
    'Principle 4+: More principles...'
  ],
  es: [...]
}
```

**Icon:** `ListChecks` (blue)  
**Purpose:** Core concepts to remember  
**Preview:** Max 4 bullets, shows "+X more" if > 4

---

### 5. **How to Apply** (`content.howToApply`)

```typescript
howToApply: {
  steps: [
    {
      name: { en: "Step 1", es: "Paso 1" },
      description: {
        en: "How to execute this step",
        es: "Cómo ejecutar",
      },
    },
    // ... more steps
  ];
}
```

**Icon:** `ArrowRight` (green)  
**Purpose:** Actionable process  
**Visual:** Numbered cards (1, 2, 3, 4...)

---

### 6. **Common Mistakes** (`content.commonMistakes`)

```typescript
commonMistakes: {
  en: [
    'Mistake 1: Why it\'s wrong',
    'Mistake 2: Why it\'s wrong',
    'Mistake 3+: More mistakes...'
  ],
  es: [...]
}
```

**Icon:** `AlertTriangle` (red/orange gradient)  
**Purpose:** Learn what to avoid  
**Visual:** X icons with red accent

---

### 7. **Deliverables** (`content.deliverables`)

```typescript
deliverables: {
  description: { en: 'Context about outputs', es: 'Contexto' },
  items: {
    en: [
      'Deliverable 1: Description',
      'Deliverable 2: Description',
      'Deliverable 3+: More outputs...'
    ],
    es: [...]
  }
}
```

**Icon:** `FileCheck` (purple)  
**Purpose:** What you should produce  
**Visual:** CheckCircle2 icons with purple gradient

---

### 8. **Practical Tools** (`content.practicalTools`)

```typescript
practicalTools: {
  design: { en: ['Figma', 'Sketch', ...], es: [...] },
  research: { en: ['UserTesting', 'Maze', ...], es: [...] },
  handoff: { en: ['Zeplin', 'Anima', ...], es: [...] }
}
```

**Icon:** `Wrench` (cyan)  
**Purpose:** Recommended software/tools  
**Visual:** 3-column grid (Design | Research | Handoff)

---

### 9. **AI in Practice** (`content.aiInPractice`)

```typescript
aiInPractice: {
  description: { en: 'How AI helps with this topic', es: 'Cómo ayuda IA' },
  prompts: [
    {
      tool: 'ChatGPT',
      context: { en: 'Use case context', es: 'Contexto' },
      prompt: { en: 'Actual prompt to use', es: 'Prompt real' }
    },
    // ... more prompts
  ]
}
```

**Icon:** `Sparkles` (pink)  
**Purpose:** AI-powered workflows  
**Visual:** Cards with tool name + prompt (monospaced font)

---

### 10. **How to Validate** (`content.howToValidate`)

```typescript
howToValidate: {
  what: { en: 'What to validate', es: 'Qué validar' },
  methods: {
    en: [
      'Method 1: How to execute',
      'Method 2: How to execute',
      'Method 3+: More methods...'
    ],
    es: [...]
  },
  tools: { en: ['Tool 1', 'Tool 2', ...], es: [...] },
  evidenceExample: { en: 'Example of success proof', es: 'Ejemplo' }
}
```

**Icon:** `CheckCircle2` (green)  
**Purpose:** Verify your understanding/output  
**Visual:** Green gradient with sections (What | Methods | Tools | Evidence)

---

### 11. **Knowledge Check** (`content.quiz`)

```typescript
quiz: [
  {
    question: { en: "Question text?", es: "Pregunta?" },
    options: {
      en: ["Option A", "Option B", "Option C", "Option D"],
      es: ["Opción A", "Opción B", "Opción C", "Opción D"],
    },
    correctIndex: 1, // 0-based index
    explanation: {
      en: "Why this is correct",
      es: "Por qué es correcta",
    },
  },
  // ... more questions
];
```

**Icon:** `HelpCircle` (orange)  
**Purpose:** Test comprehension  
**Visual:** Interactive quiz with feedback (green = correct, red = wrong)

---

### 12. **Real Example** (`content.realExample`)

```typescript
realExample: {
  title: { en: 'Example Title', es: 'Título del Ejemplo' },
  company: 'Company Name', // Optional
  description: { en: 'Real-world case study', es: 'Caso de estudio' },
  imageUrl: 'https://...' // Optional
}
```

**Icon:** `Lightbulb` (amber)  
**Purpose:** Concrete case study  
**Visual:** Amber gradient card with company badge

---

## 🎯 Preview Modal vs Full Lesson

### **Preview Modal (Quick Preview)**

Shows **ONLY** these 5 elements:

1. ✅ Title + Level + Time
2. ✅ Definition
3. ✅ Why it Matters (truncated 4 lines)
4. ✅ Key Principles (max 4 bullets)
5. ✅ Real Example (truncated 3 lines)
6. ✅ CTA: "Open Full Lesson →"

**NOT in preview:**

- ❌ How to Apply
- ❌ Common Mistakes
- ❌ Deliverables
- ❌ Tools
- ❌ AI in Practice
- ❌ Validation
- ❌ Quiz

### **Full Lesson Page**

Shows **ALL 12 sections** with:

- ✅ Sidebar TOC (sticky desktop, drawer mobile)
- ✅ IntersectionObserver active section tracking
- ✅ Smooth scroll navigation
- ✅ Icon system for each section
- ✅ "Mark as Complete" CTA
- ✅ Prev/Next lesson navigation

---

## 📊 UX Flow

```
1. User browses learning paths
   └─> Sees lesson cards

2. User clicks card
   └─> Preview modal opens (right drawer)
       └─> 560px wide, backdrop blur
       └─> Shows 5 preview sections
       └─> Sticky CTA at bottom

3. User decides:
   A) Not relevant → Close modal
   B) Relevant → Click "Open Full Lesson"

4. Full lesson page loads (/lesson/:slug)
   └─> Scrolls to #overview (continue where left off)
   └─> Sidebar shows all 12 sections
   └─> User can:
       - Read all content
       - Take quiz
       - Mark as complete
       - Navigate prev/next
```

---

## ✅ Lesson Completeness Checklist

### Required (all lessons MUST have):

- [x] Title + Description
- [x] Status + Time Estimate
- [x] Definition
- [x] Why it Matters
- [x] Key Principles (min 4)
- [x] Common Mistakes (min 3)

### Highly Recommended:

- [x] How to Apply (steps)
- [x] Deliverables
- [x] Tools
- [x] AI in Practice (prompts)
- [x] How to Validate
- [x] Quiz (2-3 questions)
- [x] Real Example

### Optional:

- [ ] Reference link
- [ ] Example image URL
- [ ] Special interactive component (ComparisonView, etc.)

---

## 🔥 Example: "UX vs UI vs Product Design"

### Status: ✅ COMPLETE (All 12 sections)

#### Structure in content.ts:

```typescript
{
  id: 'ux-ui-product-design-intro',
  title: { en: 'UX vs UI vs Product Design', es: 'UX vs UI vs Diseño de Producto' },
  description: { en: '...', es: '...' },
  status: 'beginner',
  timeEstimate: '45min',
  reference: { en: 'The Disciplines of UX Design - NN/g', es: '...' },
  referenceLink: 'https://www.nngroup.com/articles/ux-expert-reviews/',
  content: {
    definition: { en: '...', es: '...' },          // ✅ Section 1
    why: { en: '...', es: '...' },                  // ✅ Section 2
    keyPrinciples: { en: [...], es: [...] },        // ✅ Section 3
    howToApply: { steps: [...] },                   // ✅ Section 4
    commonMistakes: { en: [...], es: [...] },       // ✅ Section 5
    deliverables: { description, items },           // ✅ Section 6
    practicalTools: { design, research, handoff },  // ✅ Section 7
    aiInPractice: { description, prompts },         // ✅ Section 8
    howToValidate: { what, methods, tools, ... },   // ✅ Section 9 (NEW!)
    quiz: [...],                                    // ✅ Section 10
    realExample: { title, description, company }    // ✅ Section 11
  }
}
```

---

## 🧪 Testing Checklist

### Test Preview Modal:

1. [ ] Open modal from lesson card
2. [ ] Check width (560px desktop, 100vw mobile)
3. [ ] Verify backdrop blur works
4. [ ] Scroll inside modal (not page scroll)
5. [ ] Check fade gradients top/bottom
6. [ ] Verify "Open Full Lesson" CTA is sticky
7. [ ] Close modal (X button or backdrop click)
8. [ ] Check that only 5 sections appear
9. [ ] Verify "+X more" appears if > 4 principles

### Test Full Lesson Page:

1. [ ] Navigate to /lesson/ux-ui-product-design-intro
2. [ ] Verify all 12 sections render
3. [ ] Check sidebar TOC (sticky on desktop)
4. [ ] Mobile: Check FAB button opens TOC drawer
5. [ ] Click section in TOC → smooth scroll
6. [ ] Active section highlights in TOC (IntersectionObserver)
7. [ ] Quiz: Select answer → Check → See explanation
8. [ ] Mark as Complete → See success message
9. [ ] Navigate to Next lesson → Scroll to top
10. [ ] Check "Continue where you left off" (scrolls to #overview)

---

## 📏 Visual Consistency

### Spacing (8pt grid):

- Section margin-bottom: `mb-12` (48px)
- Card padding: `p-6` (24px)
- Section gap: `space-y-6` (24px)
- Bullet gap: `space-y-3` (12px)

### Icon System:

| Section             | Icon          | Color         |
| ------------------- | ------------- | ------------- |
| Overview/Definition | BookOpen      | Indigo        |
| Why it Matters      | Lightbulb     | Yellow/Orange |
| Key Principles      | ListChecks    | Blue          |
| How to Apply        | ArrowRight    | Green         |
| Common Mistakes     | AlertTriangle | Red           |
| Deliverables        | FileCheck     | Purple        |
| Tools               | Wrench        | Cyan          |
| AI in Practice      | Sparkles      | Pink          |
| Validation          | CheckCircle2  | Green         |
| Quiz                | HelpCircle    | Orange        |
| Real Example        | Lightbulb     | Amber         |
| References          | BookOpen      | Indigo        |

### Typography:

- Page title: `text-4xl md:text-5xl font-bold`
- Section title: `text-2xl font-semibold`
- Subsection: `text-sm font-semibold uppercase`
- Body: `text-sm text-zinc-300`
- Meta: `text-xs text-zinc-500`

---

## 🚀 Next Steps

### Phase 1: Complete Core Lessons

- [x] UX vs UI vs Product Design (DONE - all 12 sections)
- [ ] Usability Basics (missing: howToValidate)
- [ ] Visual Hierarchy (missing: deliverables, aiInPractice, howToValidate)
- [ ] User Personas (missing: aiInPractice, howToValidate)
- [ ] Design Methodologies (missing: howToValidate)

### Phase 2: Add Interactive Components

- [x] UserPersonaCard
- [x] RetroModernComparison
- [x] MentalModelExample
- [x] SitemapExample
- [x] MethodologiesDeepDive
- [ ] More interactive examples for other lessons

### Phase 3: Polish

- [ ] Add progress tracking (localStorage)
- [ ] Add bookmarking
- [ ] Add estimated read time
- [ ] Add mini preview images
- [ ] Add keyboard shortcuts (ESC to close, arrow keys navigation)

---

## 💡 Content Creation Workflow

### When creating a new lesson:

1. **Copy this template structure**
2. **Fill required fields first:**
   - Title, description, status, time
   - Definition, why, keyPrinciples, commonMistakes
3. **Add recommended fields:**
   - howToApply (3-5 steps)
   - deliverables (what to produce)
   - practicalTools (3 categories)
   - aiInPractice (2-3 prompts)
   - howToValidate (methods + evidence)
   - quiz (2-3 questions)
   - realExample (case study)
4. **Test in both views:**
   - Preview modal (should show 5 sections)
   - Full lesson page (should show all 12)
5. **Review visual consistency:**
   - Icons correct color
   - Spacing follows 8pt grid
   - Typography hierarchy clear

---

## 📖 TypeScript Interface Reference

```typescript
export interface Topic {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  status: "beginner" | "intermediate" | "advanced";
  timeEstimate: string;
  reference?: { en: string; es: string };
  referenceLink?: string;
  content?: {
    // REQUIRED
    definition: { en: string; es: string };
    why: { en: string; es: string };
    keyPrinciples: { en: string[]; es: string[] };
    commonMistakes: { en: string[]; es: string[] };

    // RECOMMENDED
    howToApply?: {
      steps: {
        name: { en: string; es: string };
        description: { en: string; es: string };
      }[];
    };
    deliverables?: {
      description: { en: string; es: string };
      items: { en: string[]; es: string[] };
    };
    practicalTools?: {
      design: { en: string[]; es: string[] };
      research: { en: string[]; es: string[] };
      handoff: { en: string[]; es: string[] };
    };
    aiInPractice?: {
      description: { en: string; es: string };
      prompts: {
        tool: string;
        context: { en: string; es: string };
        prompt: { en: string; es: string };
      }[];
    };
    howToValidate?: {
      what: { en: string; es: string };
      methods: { en: string[]; es: string[] };
      tools: { en: string[]; es: string[] };
      evidenceExample: { en: string; es: string };
    };
    quiz?: {
      question: { en: string; es: string };
      options: { en: string[]; es: string[] };
      correctIndex: number;
      explanation: { en: string; es: string };
    }[];

    // OPTIONAL
    realExample?: {
      title: { en: string; es: string };
      description: { en: string; es: string };
      imageUrl?: string;
      company?: string;
    };
  };
}
```

---

## ✅ Success Metrics

### Content Quality:

- **Completeness:** All 12 sections present
- **Clarity:** Definitions simple, examples concrete
- **Actionability:** Steps clear, tools specific
- **Validation:** Methods testable, evidence measurable

### UX Quality:

- **Preview time:** < 20 seconds to scan
- **Decision clarity:** User knows if relevant
- **CTR:** 60%+ open full lesson
- **Completion rate:** 80%+ mark as complete

### Technical Quality:

- **Load time:** < 500ms (content.ts is static)
- **Scroll performance:** 60fps smooth
- **Animation quality:** Spring physics feels natural
- **Responsive:** Works on mobile, tablet, desktop

---

**Status:** ✅ TEMPLATE COMPLETE - Production-ready  
**Next:** Use this template to complete all remaining lessons