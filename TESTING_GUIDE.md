# 🧪 End-to-End Testing Guide

## ✅ Test: Complete Lesson Experience

### Lección de Prueba:
**"UX vs UI vs Product Design"** - Ahora tiene las 12 secciones completas.

---

## 📍 Cómo Probar

### 1️⃣ **Test Preview Modal (Right Drawer)**

#### En Desktop:
1. Ve a la página principal (`/`)
2. Scroll hasta "UX/UI Foundations"
3. Click en la card "UX vs UI vs Product Design"

**✅ Deberías ver:**
- ✅ Drawer desliza desde la derecha (560px ancho)
- ✅ Backdrop oscuro con blur
- ✅ Header con badge "Beginner" + "45min"
- ✅ Close button (X) arriba a la derecha
- ✅ **5 secciones en preview:**
  1. Title + Description
  2. Definition (con icono BookOpen)
  3. Why it Matters (truncado 4 líneas)
  4. Key Principles (4 bullets + "+0 more")
  5. Real Example (Airbnb case)
- ✅ Fade gradient arriba (indica más contenido)
- ✅ Fade gradient abajo (antes del CTA)
- ✅ CTA sticky: "Open Full Lesson →"
- ✅ Link secundario: "View Reference"

**❌ NO deberías ver:**
- How to Apply
- Common Mistakes (lista completa)
- Deliverables
- Tools grid
- AI in Practice
- Validation
- Quiz

#### En Mobile (<640px):
1. Mismo flujo
2. **Drawer debe ser 100% width** (full-screen)
3. Meta header debe caber en una línea
4. CTA debe ser full-width

**Interacciones:**
- [ ] Click backdrop → Cierra drawer
- [ ] Click X button → Cierra drawer
- [ ] Scroll dentro del drawer (no scroll de página)
- [ ] Hover en CTA → Arrow se mueve a la derecha
- [ ] Click "Open Full Lesson" → Navega a `/lesson/ux-ui-product-design-intro`

---

### 2️⃣ **Test Full Lesson Page**

#### URL Directa:
Navega a: `http://localhost:5173/lesson/ux-ui-product-design-intro`

**✅ Deberías ver:**

#### Header (Sticky):
- ✅ "← Back to Learning Paths" (click vuelve a home)
- ✅ "45min" (tiempo estimado)
- ✅ Badge "Beginner" (verde)

#### Sidebar Desktop (Sticky, left side):
- ✅ "On this page" label
- ✅ **12 secciones con iconos:**
  1. 📖 Overview (indigo)
  2. 💡 Why it matters (yellow)
  3. ✅ Key Principles (blue)
  4. ➡️ How to Apply (green)
  5. ⚠️ Common Mistakes (red)
  6. 📋 Deliverables (purple)
  7. 🔧 Tools (cyan)
  8. ✨ AI in Practice (pink)
  9. ✅ Validation (green)
  10. ❓ Knowledge Check (orange)
  11. 💡 Real Example (amber)
  12. 📖 References (indigo)

#### Main Content (Center, max-w-800px):
- ✅ Hero: Title + Description (large)
- ✅ **Section 1: Overview/Definition**
  - Card con fondo zinc-900
  - Definición completa (no truncada)
- ✅ **Section 2: Why it Matters**
  - Gradient yellow/orange
  - Texto completo (no truncado como en preview)
- ✅ **Section 3: Key Principles**
  - 4 bullets con checkmarks
  - NO muestra "+X more"
- ✅ **Section 4: How to Apply**
  - 4 steps con números (1, 2, 3, 4)
  - Cards individuales
- ✅ **Section 5: Common Mistakes**
  - Red gradient
  - 4 bullets con X icons
- ✅ **Section 6: Deliverables**
  - Purple gradient
  - Description + 3 items
- ✅ **Section 7: Tools**
  - 3-column grid: Design | Research | Handoff
  - Figma, Sketch, UserTesting, etc.
- ✅ **Section 8: AI in Practice**
  - Pink gradient
  - 2 prompts (ChatGPT + Claude)
  - Monospaced font para prompts
- ✅ **Section 9: Validation** ⭐ (NEW!)
  - Green gradient
  - What | Methods | Tools | Evidence
  - 4 validation methods
  - 4 tools listed
  - Evidence example quote
- ✅ **Section 10: Quiz**
  - Orange gradient
  - 2 questions
  - Multiple choice
  - Interactive: Click option → Check Answer → See explanation
- ✅ **Section 11: Real Example**
  - Amber gradient
  - Airbnb case study
  - Company badge
- ✅ **Section 12: References**
  - Link to NN/g article
  - External link icon

#### Footer Actions:
- ✅ "Mark as Complete" button (indigo, full-width)
- ✅ Navigation grid (Previous | Next)

---

### 3️⃣ **Test Sidebar Navigation**

#### Desktop:
1. Click cualquier sección en sidebar
2. **✅ Debe hacer smooth scroll** a esa sección
3. **✅ Active state** debe cambiar (indigo bg + border-left)

#### IntersectionObserver Test:
1. Scroll manualmente por la página
2. **✅ Active section en sidebar debe actualizar automáticamente**
3. Threshold: Cuando 50% de la sección está visible

#### Mobile (<1024px):
1. **✅ Sidebar desaparece**
2. **✅ FAB button aparece** (bottom-right, indigo circle)
3. Click FAB
4. **✅ TOC drawer desliza desde la derecha**
5. Click section → Smooth scroll + drawer se cierra
6. Click X o backdrop → Drawer se cierra

---

### 4️⃣ **Test Quiz Interaction**

#### Flujo:
1. Scroll hasta "Knowledge Check"
2. **Question 1:** "Which role is primarily responsible for conducting user interviews?"
3. Click una opción (e.g., "UX Designer")
4. **✅ Opción seleccionada debe resaltar (orange bg)**
5. Click "Check Answer"
6. **✅ Correct answer → Green bg + Check icon**
7. **✅ Explanation aparece abajo** (zinc-900 card)
8. **✅ "Check Answer" button desaparece**

#### Question 2:
1. Repite flujo
2. Si seleccionas opción incorrecta:
   - **✅ Tu selección → Red bg + X icon**
   - **✅ Correct answer → Green bg + Check icon**

---

### 5️⃣ **Test "Continue Where You Left Off"**

#### Setup:
1. Abre preview modal
2. Click "Open Full Lesson"

#### Expected:
1. **✅ Navega a `/lesson/ux-ui-product-design-intro`**
2. **✅ Después de 100ms, scroll automático a `#overview`**
3. **✅ Smooth scroll behavior**

#### Cómo verificar:
- Abre DevTools Console
- Busca: `document.getElementById('overview')`
- Debería scrollIntoView automáticamente

---

### 6️⃣ **Test Mark as Complete**

#### Flujo:
1. Scroll hasta el footer
2. Click "Mark as Complete"

#### Expected:
1. **✅ Button desaparece**
2. **✅ Success card aparece** (green gradient)
3. **✅ CheckCircle2 icon grande**
4. **✅ Text: "Lesson Completed! Great job!"**

#### Note:
- Actualmente NO persiste (no localStorage todavía)
- Refresh página → Vuelve al estado inicial

---

### 7️⃣ **Test Navigation (Prev/Next)**

#### Current Lesson: "UX vs UI vs Product Design" (index 0)

**Previous:**
- **✅ NO debe aparecer** (es la primera lección)

**Next:**
- **✅ Debe aparecer:** "Usability Basics"
- Click → Navega a `/lesson/usability-basics`
- Page scroll to top

---

### 8️⃣ **Test Responsive Breakpoints**

#### Desktop (>1024px):
- ✅ Sidebar sticky (left)
- ✅ Content max-w-800px (center)
- ✅ Preview drawer 560px
- ✅ Grid layout: [280px sidebar] [1fr content]

#### Tablet (640px - 1024px):
- ✅ Sidebar hidden
- ✅ FAB button visible
- ✅ Preview drawer 540px
- ✅ Content full-width (padding)

#### Mobile (<640px):
- ✅ Preview drawer 100vw (full-screen)
- ✅ TOC drawer 80vw (320px typical)
- ✅ All text stacks
- ✅ Tools grid → 1 column
- ✅ Buttons full-width

---

## 🎨 Visual Quality Checklist

### Spacing (8pt grid):
- [ ] Section gaps: 48px (`mb-12`)
- [ ] Card padding: 24px (`p-6`)
- [ ] Internal gaps: 24px (`space-y-6`)
- [ ] Bullet gaps: 12px (`space-y-3`)

### Icons:
- [ ] All sections have correct icon
- [ ] Icon size: 20-24px (`size-5` or `size-6`)
- [ ] Icon colors match section theme

### Colors:
- [ ] Overview: Indigo (BookOpen)
- [ ] Why: Yellow/Orange gradient (Lightbulb)
- [ ] Principles: Blue (ListChecks)
- [ ] Apply: Green (ArrowRight)
- [ ] Mistakes: Red (AlertTriangle)
- [ ] Deliverables: Purple (FileCheck)
- [ ] Tools: Cyan (Wrench)
- [ ] AI: Pink (Sparkles)
- [ ] Validation: Green (CheckCircle2)
- [ ] Quiz: Orange (HelpCircle)
- [ ] Example: Amber (Lightbulb)

### Typography:
- [ ] Page title: ~48px bold
- [ ] Section titles: ~24px semibold
- [ ] Body text: 14px (`text-sm`)
- [ ] Meta: 12px (`text-xs`)

---

## 🐛 Known Issues to Check

### Preview Modal:
- [ ] ¿Fade gradients se ven correctos?
- [ ] ¿CTA está siempre visible (sticky)?
- [ ] ¿Backdrop blur funciona?
- [ ] ¿Spring animation es suave?

### Full Lesson:
- [ ] ¿IntersectionObserver actualiza active section?
- [ ] ¿Sidebar permanece sticky al scroll?
- [ ] ¿Mobile TOC drawer se cierra al seleccionar?
- [ ] ¿Quiz feedback es inmediato?

### Validation Section (NEW):
- [ ] ¿4 subsecciones se ven (What, Methods, Tools, Evidence)?
- [ ] ¿Tools aparecen como pills (rounded-full)?
- [ ] ¿Evidence example tiene bg diferente?
- [ ] ¿Green gradient es consistente?

---

## ✅ Success Criteria

### Funcional:
- ✅ Preview modal abre/cierra correctamente
- ✅ Full lesson carga las 12 secciones
- ✅ Sidebar navigation funciona (click + scroll tracking)
- ✅ Quiz es interactivo (select + check + feedback)
- ✅ Mark as complete cambia UI
- ✅ Prev/Next navigation funciona

### Visual:
- ✅ Spacing consistente (8pt grid)
- ✅ Icons + colors correctos
- ✅ Typography jerárquica
- ✅ Responsive en todos los breakpoints

### UX:
- ✅ Drawer slide animation suave
- ✅ Backdrop blur visible
- ✅ Sticky elements permanecen visibles
- ✅ Active states claros
- ✅ Feedback inmediato (quiz, buttons)

---

## 🚀 Next: Complete More Lessons

Una vez que "UX vs UI vs Product Design" funciona perfectamente, usa el template para completar:

1. **Usability Basics** - Falta: `howToValidate`
2. **Visual Hierarchy** - Falta: `deliverables`, `aiInPractice`, `howToValidate`
3. **User Personas** - Falta: `aiInPractice`, `howToValidate`
4. **Information Architecture** - Falta: `howToValidate`
5. **Design Methodologies** - Falta: `howToValidate`

### Template para Completar:
```typescript
howToValidate: {
  what: { 
    en: 'What to validate about [topic]',
    es: 'Qué validar sobre [tema]'
  },
  methods: { 
    en: [
      'Method 1: How to test understanding/output',
      'Method 2: Another way to verify',
      'Method 3: Real-world application test',
      'Method 4: Peer review or expert feedback'
    ],
    es: [...]
  },
  tools: { 
    en: ['Tool 1', 'Tool 2', 'Tool 3', 'Tool 4'],
    es: [...]
  },
  evidenceExample: { 
    en: 'Example of what success looks like',
    es: 'Ejemplo de cómo se ve el éxito'
  }
}
```

---

**Status:** ✅ READY TO TEST  
**Primary Test Case:** `/lesson/ux-ui-product-design-intro`  
**All 12 Sections:** Complete and validated
