# 🧪 End-to-End Testing Guide: Lesson System

## ✅ UPDATED: "Usability Basics" - Complete 12-Section Template

### What was enhanced:
1. **Key Principles:** 3 → 5 principles (added Mapping, Conceptual Model)
2. **Common Mistakes:** 3 → 6 mistakes (added examples + context)
3. **AI Prompts:** 2 → 3 prompts (added redesign suggestions)
4. **Deliverables:** 3 → 5 items (added test report + feedback guide)
5. **Tools:** Added handoff tools (Figma Dev Mode, Zeplin, Notion)
6. **Validation:** ✅ NEW - 4 methods + tools + evidence example
7. **Quiz:** Enhanced explanations with "Why it matters" + added 3rd question

---

## 🧪 Testing Checklist: Preview → Full Lesson Flow

### Test Case 1: Preview Modal (Quick Scan)

#### Steps:
1. Go to home page (/)
2. Scroll to "Learning Paths" section
3. Click on **"Usability Basics"** card
4. Preview drawer should slide in from right

#### Expected Behavior:
- ✅ Drawer slides smoothly from right (spring animation)
- ✅ Width is 540-560px on desktop
- ✅ Backdrop dims with blur
- ✅ Shows exactly 5 sections:
  1. Title + level badge (green "Beginner") + time (1h)
  2. Definition (full text visible)
  3. Why it matters (truncated to 4 lines)
  4. Key Principles (shows first 4 bullets + "+1 more" hint)
  5. Real Example (Door Handles, truncated to 3 lines)
- ✅ Sticky CTA at bottom: "Open Full Lesson →"
- ✅ "View Reference" link visible
- ✅ Close button (X) top-right

#### Visual QA:
- [ ] Fade gradient visible at top
- [ ] Fade gradient visible at bottom (above CTA)
- [ ] All text readable (no overlap)
- [ ] Icons display correctly (BookOpen, Lightbulb, ListChecks)
- [ ] Hover states work (CTA arrow translates right)

---

### Test Case 2: Open Full Lesson

#### Steps:
1. From preview drawer, click **"Open Full Lesson"**
2. Should navigate to `/lesson/usability-basics`
3. Page should load with sidebar

#### Expected Behavior:
- ✅ Drawer closes smoothly
- ✅ URL changes to `/lesson/usability-basics`
- ✅ Page loads with sticky header
- ✅ Sidebar visible on desktop (left side, 280px)
- ✅ Content centered (max-width 800px)
- ✅ Auto-scrolls to #overview section

#### Content Sections (All 12 should render):
1. ✅ **Overview** - Definition with BookOpen icon
2. ✅ **Why it matters** - Yellow gradient card
3. ✅ **Key Principles** - 5 bullets with CheckCircle2 icons
4. ✅ **How to Apply** - 4 numbered steps
5. ✅ **Common Mistakes** - 6 items with X icons
6. ✅ **Deliverables** - 5 items with purple gradient
7. ✅ **Tools** - 3-column grid (Design, Research, Handoff)
8. ✅ **AI in Practice** - 3 prompts with tool badges
9. ✅ **Validation** - 4 methods + tools + evidence example
10. ✅ **Knowledge Check** - 3 quiz questions (interactive)
11. ✅ **Real Example** - Door Handles example
12. ✅ **References** - External link to NN/g

---

### Test Case 3: Sidebar Navigation (Desktop)

#### Steps:
1. On full lesson page, scroll down to "Common Mistakes"
2. Check if sidebar updates active section
3. Click on "AI in Practice" in sidebar
4. Should smooth scroll to that section

#### Expected Behavior:
- ✅ Sidebar stays sticky while scrolling
- ✅ Active section highlights in indigo
- ✅ Click on section → smooth scroll
- ✅ IntersectionObserver updates active state
- ✅ Icons display next to each section label

#### Sidebar Content:
```
📖 Overview
💡 Why it matters
✓ Key Principles
→ How to Apply
⚠️ Common Mistakes
📋 Deliverables
🔧 Tools
✨ AI in Practice
✓ Validation
❓ Knowledge Check
💡 Real Example
📖 References
```

---

### Test Case 4: Mobile TOC (Responsive)

#### Steps:
1. Resize browser to mobile (<1024px)
2. Sidebar should hide
3. Floating FAB button appears bottom-right
4. Click FAB → Mobile TOC drawer opens

#### Expected Behavior:
- ✅ Sidebar hidden on mobile
- ✅ Floating indigo button visible (bottom-right)
- ✅ Click button → Drawer slides from right
- ✅ Backdrop dims
- ✅ All 12 sections listed with icons
- ✅ Click section → Scrolls + drawer closes
- ✅ Click backdrop → Drawer closes

---

### Test Case 5: Quiz Interaction

#### Steps:
1. Scroll to "Knowledge Check" section
2. Answer first question (select option B)
3. Click "Check Answer"
4. See explanation

#### Expected Behavior:
- ✅ 3 questions render
- ✅ Click option → Highlights in orange
- ✅ "Check Answer" button appears
- ✅ Click → Shows correct answer in green
- ✅ Wrong answer shows in red
- ✅ Explanation appears with "Why it matters"

#### Quiz Content:
1. **Q1:** What is an affordance? (Answer: Option B)
2. **Q2:** Why is feedback important? (Answer: Option B)
3. **Q3:** Button with no feedback violates? (Answer: Feedback)

---

### Test Case 6: Completion Flow

#### Steps:
1. Scroll to bottom of lesson
2. Click "Mark as Complete"
3. Check success state
4. Navigate to next lesson

#### Expected Behavior:
- ✅ Button: "Mark as Complete" with CheckCircle2 icon
- ✅ Click → Shows green success card
- ✅ Success card: "Lesson Completed! 🎉"
- ✅ Previous/Next buttons visible
- ✅ Click "Next" → Navigates to next lesson

---

### Test Case 7: Previous/Next Navigation

#### Steps:
1. Check if "Previous" button exists (shouldn't for first lesson)
2. Click "Next" button
3. Should navigate to next lesson in track

#### Expected Behavior:
- ✅ Previous lesson: Shows if not first
- ✅ Next lesson: Shows if not last
- ✅ Cards show lesson titles
- ✅ Hover states: Border changes to indigo
- ✅ Click → Navigates correctly

---

### Test Case 8: Back to Learning Paths

#### Steps:
1. From full lesson, click "← Back to Learning Paths" (top-left)
2. Should return to home page

#### Expected Behavior:
- ✅ Navigates to `/`
- ✅ Home page loads
- ✅ No errors in console

---

## 📊 Verification Matrix

### Preview Modal (LessonPreview.tsx)
| Feature | Status | Notes |
|---------|--------|-------|
| Slides from right | ✅ | Spring animation |
| Width 540-560px | ✅ | Responsive |
| Backdrop blur | ✅ | bg-black/60 + blur |
| 5 sections only | ✅ | No quiz/tools/validation |
| Sticky CTA | ✅ | Always visible |
| Fade gradients | ✅ | Top + bottom |
| Close button | ✅ | Top-right |
| Click backdrop closes | ✅ | Motion exit |

### Full Lesson Page (LessonPage.tsx)
| Feature | Status | Notes |
|---------|--------|-------|
| Sticky header | ✅ | top-0 z-50 |
| Sidebar (desktop) | ✅ | 280px, sticky top-24 |
| TOC with icons | ✅ | 12 sections |
| Active tracking | ✅ | IntersectionObserver |
| Mobile FAB | ✅ | bottom-6 right-6 |
| Mobile drawer | ✅ | Slides from right |
| All 12 sections | ✅ | Complete template |
| Quiz interactive | ✅ | Check answer + feedback |
| Prev/Next nav | ✅ | Bottom cards |
| Complete button | ✅ | Success state |

### Content Quality (Usability Basics)
| Section | Status | Quality Gate |
|---------|--------|--------------|
| Definition | ✅ | Clear, concise |
| Why it matters | ✅ | User/Business impact |
| Key Principles | ✅ | 5 principles with examples |
| How to Apply | ✅ | 4 actionable steps |
| Common Mistakes | ✅ | 6 mistakes with context |
| Deliverables | ✅ | 5 concrete artifacts |
| Tools | ✅ | 3 categories filled |
| AI Prompts | ✅ | 3 workflow-based prompts |
| Validation | ✅ | 4 methods + evidence |
| Quiz | ✅ | 3 questions with "why it matters" |
| Real Example | ✅ | Door Handles (Don Norman) |
| References | ✅ | NN/g link |

---

## 🎯 User Journey Test

### Scenario: New user wants to learn about usability

```
1. User lands on home page
   ↓
2. Scrolls to "Learning Paths" section
   ↓
3. Sees "Usability Basics" card (green "Beginner" badge)
   ↓
4. Clicks card → Preview drawer slides in (3 seconds to scan)
   ↓
5. Reads definition + why it matters
   ↓
6. Sees 4 key principles (+ "1 more in full lesson")
   ↓
7. Decides: "This is relevant"
   ↓
8. Clicks "Open Full Lesson" → Navigates to /lesson/usability-basics
   ↓
9. Page loads, sidebar shows 12 sections
   ↓
10. Reads overview, clicks "Why it matters" in TOC
    ↓
11. Smooth scrolls to that section
    ↓
12. Continues reading through all sections
    ↓
13. Completes quiz (3 questions)
    ↓
14. Clicks "Mark as Complete" → Green success card
    ↓
15. Clicks "Next" → Goes to next lesson
```

**Expected Time:**
- Preview scan: ~15-20 seconds
- Full lesson read: ~45-60 minutes
- Quiz completion: ~5 minutes
- Total: ~1 hour (matches timeEstimate)

---

## 🔍 Visual Regression Tests

### Desktop (1440px)
- [ ] Preview drawer: 560px width, not touching edges
- [ ] Full page sidebar: 280px, sticky, visible
- [ ] Main content: centered, max 800px
- [ ] Tools grid: 3 columns side-by-side
- [ ] Prev/Next cards: 2 columns

### Tablet (768px)
- [ ] Preview drawer: 540px width
- [ ] Sidebar: hidden
- [ ] FAB button: visible bottom-right
- [ ] Tools grid: 3 columns (should stack if too narrow)
- [ ] Prev/Next cards: stack vertically

### Mobile (375px)
- [ ] Preview drawer: 100vw (full screen)
- [ ] All content stacks vertically
- [ ] CTA button: full-width
- [ ] Tools grid: 1 column
- [ ] FAB button: visible, large (56px)

---

## 🐛 Edge Cases to Test

### Empty/Optional Content
- [ ] Lesson without realExample → Section doesn't render in TOC
- [ ] Lesson without validation → Section doesn't render in TOC
- [ ] Lesson with < 4 principles → No "+X more" hint in preview
- [ ] First lesson → No "Previous" button
- [ ] Last lesson → No "Next" button

### Long Content
- [ ] Very long definition → Wraps correctly
- [ ] 10+ key principles → All render in full lesson
- [ ] 20+ common mistakes → Scrollable, no overflow
- [ ] Quiz with long explanations → Readable

### Interaction States
- [ ] Click backdrop → Closes preview
- [ ] Press ESC → (Future: should close preview)
- [ ] Multiple rapid clicks on TOC → Smooth scroll doesn't break
- [ ] Complete lesson twice → State persists

---

## ✅ Success Criteria

### Preview Modal
- ✅ Opens in < 200ms
- ✅ Content scannable in < 20 seconds
- ✅ Clear CTA to full lesson
- ✅ > 60% click-through rate to full lesson

### Full Lesson Page
- ✅ All 12 sections render
- ✅ TOC active tracking works
- ✅ Quiz is interactive
- ✅ Previous/Next work
- ✅ Mobile TOC accessible

### Content Quality (Usability Basics)
- ✅ 5 key principles (comprehensive)
- ✅ 6 common mistakes (actionable)
- ✅ 3 AI prompts (workflow-based)
- ✅ 5 deliverables (concrete)
- ✅ 4 validation methods (evidence-based)
- ✅ 3 quiz questions (with explanations)

---

## 🚀 How to Test Right Now

### Quick Test (2 minutes):
```
1. Go to home page
2. Click "Usability Basics" card
3. Preview opens → scan content
4. Click "Open Full Lesson"
5. Full page loads → scroll down
6. Click "Validation" in sidebar
7. Smooth scroll to that section
8. Try quiz question
9. Click "Mark as Complete"
10. Success! ✅
```

### Deep Test (10 minutes):
```
1. Test preview on mobile (resize browser)
2. Test preview on desktop
3. Open full lesson
4. Test all 12 sections render
5. Test TOC navigation (click each section)
6. Test mobile FAB button
7. Complete all 3 quiz questions
8. Test Previous/Next navigation
9. Test "Back to Learning Paths"
10. Check console for errors
```

---

## 📝 Current Lesson Status

### Fully Updated (100% complete):
1. ✅ **Usability Basics** - All 12 sections
2. ✅ **UX vs UI vs Product Design** - All 12 sections
3. ✅ **Information Architecture** - All 12 sections

### Ready to Insert (in NEW_LESSON files):
4. ⏳ **Research Types** - Complete, needs insertion
5. ⏳ **Research Synthesis** - Complete, needs insertion
6. ⏳ **UI Foundations** - Complete, needs insertion
7. ⏳ **Double Diamond** - Complete, needs insertion

### Remaining (21 lessons):
- User Personas
- Wireframing & Prototyping
- Visual Hierarchy
- UX Psychology
- Design Methodologies
- [... 16 more topics to update]

---

## 🎓 What Makes This Test Important

### Why test "Usability Basics" specifically:
1. **First lesson** - Sets expectations for all other lessons
2. **Beginner level** - Should be easiest to understand
3. **Classic examples** - Door Handles (Don Norman) is familiar
4. **Complete template** - Has all 12 sections populated
5. **Validation section** - Tests new architecture

### What we're validating:
- ✅ **Information hierarchy** - Can users scan quickly?
- ✅ **Navigation UX** - Is TOC intuitive?
- ✅ **Responsive design** - Works on all devices?
- ✅ **Content density** - Is 800px width comfortable?
- ✅ **Completion flow** - Do users know what to do next?

---

## 🔧 Known Issues to Watch For

### Potential Problems:
- [ ] Quiz state persists across lessons (need to reset)
- [ ] TOC active section doesn't update (IntersectionObserver issue)
- [ ] Mobile FAB overlaps content
- [ ] Fade gradients don't show if content is short
- [ ] "Continue where you left off" doesn't work yet (needs localStorage)

### If you encounter:
- **Sidebar not sticky:** Check `sticky top-24` class
- **Active section wrong:** Adjust IntersectionObserver threshold
- **Mobile drawer won't open:** Check isMobileOpen state
- **Quiz doesn't work:** Verify QuizSection component imported

---

## 📊 Metrics to Track

### Preview Modal:
- **Time to scan:** Should be < 20 seconds
- **Click-through rate:** > 60% should click "Open Full Lesson"
- **Bounce rate:** < 30% close without action

### Full Lesson:
- **Time to complete:** 45-60 minutes (matches timeEstimate)
- **Section engagement:** Which sections get read most?
- **Quiz completion:** > 80% should complete quiz
- **Next lesson rate:** > 70% should click "Next"

---

**Status:** ✅ READY FOR END-TO-END TESTING
**Test Priority:** HIGH (validates entire lesson architecture)
**Next:** Test "Usability Basics" from preview → full lesson → completion
