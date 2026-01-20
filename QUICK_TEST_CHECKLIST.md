# ⚡ Quick Test Checklist - Preview Drawer

## 🎯 5-Minute Test (Critical Path)

### 1. Open Preview (30 seconds)
- [ ] Click any lesson card
- [ ] Drawer slides from right (smooth spring animation)
- [ ] Width looks correct (540px on desktop)
- [ ] Backdrop blurs background

### 2. Content Check (30 seconds)
- [ ] Shows exactly 5 sections:
  - Title + Level + Time
  - Definition (2-3 lines)
  - Why it Matters (2-3 lines)
  - Key Principles (max 4 bullets)
  - Real Example (company + 3 lines)
- [ ] NO long sections visible (no AI prompts, quiz, validation)
- [ ] "+X more in full lesson" appears if > 4 principles

### 3. Scroll Behavior (20 seconds)
- [ ] Background doesn't scroll (locked)
- [ ] Internal scroll works
- [ ] Fade gradient visible at top
- [ ] Fade gradient visible at bottom (above CTA)

### 4. Sticky CTA (20 seconds)
- [ ] "Open Full Lesson →" always visible at bottom
- [ ] Button is 48px tall (touch-friendly)
- [ ] Hover: arrow moves right, bg darkens
- [ ] Click: navigates to `/lesson/:slug`

### 5. Close Methods (30 seconds)
- [ ] Click X button → closes
- [ ] Click backdrop (outside drawer) → closes
- [ ] Press ESC key → closes
- [ ] All methods: smooth exit animation

### 6. Accessibility (1 minute)
- [ ] Press Tab → focus moves to close button
- [ ] Press Tab again → focus moves to CTA
- [ ] Press Tab again → focus moves to reference link (if exists)
- [ ] Press Tab again → focus cycles back to close button
- [ ] Press Shift+Tab → cycles backward
- [ ] Focus rings are visible (indigo)

### 7. Responsive (1 minute)
- [ ] Desktop (>1024px): Width is 540px
- [ ] Tablet (640-1024px): Width is 540px or 70vw
- [ ] Mobile (<640px): Width is 100vw (full-screen)
- [ ] All breakpoints: CTA is full-width

---

## 🔍 10-Minute Deep Test (Full QA)

### Visual Quality
- [ ] **Spacing:** 24px between sections (looks comfortable)
- [ ] **Typography:** Title is 24px, body is 14px
- [ ] **Icons:** All show correct color (indigo, yellow, blue, amber)
- [ ] **Borders:** Subtle zinc-800 (not too bright)
- [ ] **Gradients:** Yellow/orange (why), amber/yellow (example)
- [ ] **Cards:** Rounded corners (12px), subtle bg (zinc-900/50)

### Content Truncation
- [ ] **Definition:** Max 3 lines, ellipsis (...) if longer
- [ ] **Why:** Max 3 lines, ellipsis (...) if longer
- [ ] **Principles:** Shows first 4, then "+X more"
- [ ] **Example:** Max 3 lines, ellipsis (...) if longer

### Interaction States
- [ ] **Close button:** 
  - Default: zinc-900 bg
  - Hover: zinc-800 bg
  - Focus: indigo ring visible
- [ ] **Primary CTA:**
  - Default: indigo-600 bg
  - Hover: indigo-700 bg + arrow moves
  - Focus: indigo ring visible
- [ ] **Reference link:**
  - Default: zinc-400 text
  - Hover: zinc-200 text
  - Focus: indigo ring visible

### Animation Quality
- [ ] **Open:** Slides from right (300-400ms)
- [ ] **Close:** Slides to right (300-400ms)
- [ ] **Backdrop:** Fades in/out (200ms)
- [ ] **Spring physics:** Feels natural (not robotic)
- [ ] **No jank:** 60fps smooth

### Edge Cases
- [ ] Lesson with NO real example → Example section doesn't render
- [ ] Lesson with NO reference link → Link doesn't render
- [ ] Lesson with 3 principles → Shows all 3, no "+X more"
- [ ] Lesson with 6 principles → Shows 4 + "+2 more"
- [ ] Very long definition → Truncates at 3 lines with ellipsis
- [ ] Very short definition → Shows full text (no ellipsis)

---

## 📱 Mobile-Specific Test (2 minutes)

### On Mobile (<640px):
1. [ ] Drawer is 100vw (full-screen)
2. [ ] Header meta (badge + time) fits in one line
3. [ ] All text is readable (no horizontal scroll)
4. [ ] CTA button is full-width
5. [ ] Touch targets are 44x44px minimum
6. [ ] Swipe up/down scrolls content (not closes drawer)
7. [ ] Tap outside closes drawer

---

## ♿ Accessibility Test (3 minutes)

### Keyboard Navigation:
1. [ ] Open drawer → Close button auto-focused
2. [ ] Tab order: Close → CTA → Reference → Close
3. [ ] Shift+Tab reverses order
4. [ ] ESC closes drawer
5. [ ] Focus never escapes drawer (trapped)
6. [ ] All focus rings visible (2px indigo)

### Screen Reader (Optional):
1. [ ] Announces "dialog" on open
2. [ ] Reads title first
3. [ ] Close button has label "Close preview"
4. [ ] CTA reads "Open Full Lesson"
5. [ ] Reference link has context

### Color Contrast:
1. [ ] White on zinc-950: > 15:1 ✅
2. [ ] Zinc-300 on zinc-950: > 8:1 ✅
3. [ ] Zinc-400 on zinc-950: > 5:1 ✅
4. [ ] Indigo-400 on zinc-950: > 4.5:1 ✅
5. [ ] All meet WCAG AA

---

## 🐛 Known Issues to Watch For

### Common Problems:
- [ ] **Scroll jank:** If background scrolls, check `overflow: hidden` on body
- [ ] **Focus trap breaks:** If Tab escapes drawer, check querySelector
- [ ] **ESC doesn't work:** Check event listener cleanup
- [ ] **Fade not visible:** Check z-index (should be 10)
- [ ] **CTA not sticky:** Check footer has `shrink-0`
- [ ] **Animation stutters:** Check spring damping (should be 30)

### If You See These:
| Issue | Fix |
|-------|-----|
| Background scrolls | Add `overflow: hidden` to body |
| Tab escapes drawer | Check focus trap querySelector |
| Close button not focused | Add `firstFocusable?.focus()` |
| Fade gradient missing | Check absolute positioning + z-10 |
| CTA scrolls away | Move footer outside scroll container |
| Animation too bouncy | Reduce stiffness (300) or increase damping (30) |

---

## ✅ Pass Criteria

### Critical (Must Pass):
- ✅ Drawer opens/closes smoothly
- ✅ Shows 5 sections only (no quiz, AI, validation)
- ✅ CTA is always visible (sticky)
- ✅ ESC key closes
- ✅ Background scroll locked
- ✅ Responsive (mobile full-screen)

### Important (Should Pass):
- ✅ Focus trap works
- ✅ Truncation at 2-3 lines
- ✅ Fade gradients visible
- ✅ Hover states work
- ✅ Tab order correct

### Nice to Have:
- ✅ Spring animation feels natural
- ✅ Icons match color scheme
- ✅ Spacing feels comfortable
- ✅ Reference link shows if available

---

## 🚀 Quick Test Script

### Copy & paste this test sequence:

```
1. Go to homepage
2. Click "UX vs UI vs Product Design" card
3. Preview drawer opens from right ✅
4. Count sections (should be 5) ✅
5. Scroll down → fade at bottom ✅
6. Scroll up → fade at top ✅
7. CTA visible at bottom ✅
8. Press Tab → close button focused ✅
9. Press Tab → CTA focused ✅
10. Press ESC → drawer closes ✅
11. Click card again → opens ✅
12. Click backdrop → closes ✅
13. Click card again → opens ✅
14. Click X button → closes ✅
15. Resize to mobile → drawer full-width ✅
```

**Time:** 2 minutes  
**Pass:** All ✅  
**Status:** Production-ready

---

## 📊 Automated Checks (Optional)

### Using Browser DevTools:

#### 1. Check Drawer Width:
```js
// Desktop
document.querySelector('[data-drawer="preview"]').offsetWidth
// Should be: 540
```

#### 2. Check Background Scroll Lock:
```js
// With drawer open
document.body.style.overflow
// Should be: 'hidden'
```

#### 3. Check Focus Trap:
```js
// Press Tab 10 times
// activeElement should cycle through: button, button, a, button, button, a...
document.activeElement
```

#### 4. Check ARIA:
```js
const drawer = document.querySelector('[data-drawer="preview"]');
drawer.getAttribute('role')        // Should be: 'dialog'
drawer.getAttribute('aria-modal')  // Should be: 'true'
```

---

## 🎯 Final Checklist (Before Deploy)

- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test with keyboard only (no mouse)
- [ ] Test with screen reader (VoiceOver or NVDA)
- [ ] Test all lessons (not just one)
- [ ] Test edge cases (no example, no reference)
- [ ] Check console for errors
- [ ] Check Network tab (no failed requests)
- [ ] Check Lighthouse score (Accessibility 95+)

---

**Status:** ✅ READY TO TEST  
**Estimated Time:** 5-10 minutes for full QA  
**Critical Path:** 2 minutes minimum

---

## 💡 Tips

### Fastest Way to Test All Lessons:
1. Open homepage
2. Click each lesson card one by one
3. Verify 5 sections appear
4. Press ESC to close
5. Repeat for next lesson

### If Something Breaks:
1. Check browser console (F12)
2. Look for React errors
3. Check `PREVIEW_DRAWER_QA_FINAL.md` for solutions
4. Verify `LessonPreview.tsx` matches spec

### Performance Test:
1. Open DevTools Performance tab
2. Start recording
3. Open drawer → close drawer
4. Stop recording
5. Check FPS (should be 60fps)
6. Check animation duration (should be ~400ms)
