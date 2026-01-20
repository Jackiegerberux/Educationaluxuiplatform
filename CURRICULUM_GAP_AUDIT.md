# Curriculum Gap Audit Report
**Date:** January 20, 2026  
**Project:** AditiDesign - UX/UI Learning Platform  
**Auditor:** System Analysis

---

## Executive Summary

This audit identifies gaps between the **UX/UI Roadmap** topics and **actual lesson content** available in `content.ts`. The goal is to ensure every roadmap topic has a corresponding lesson and that no lessons are orphaned.

### Key Findings

- **Total Roadmap Topics:** 24
- **Topics with Lessons:** 17 (70.8%)
- **Topics Missing Lessons:** 7 (29.2%)
- **Orphaned Lessons (in content.ts but not on roadmap):** 11
- **Critical Missing Topics:** 6

---

## 1. Roadmap Topics WITHOUT Linked Lessons ❌

These topics appear on the roadmap but have no corresponding lesson content:

### Critical Priority 🔴

| Topic ID | Topic Title | Current Slug | Status | Issue |
|----------|-------------|--------------|--------|-------|
| `surveys` | Surveys & Questionnaires | `empathy-interviewing` | ❌ **Wrong mapping** | Points to interview lesson, not survey lesson |
| `competitive-analysis` | Competitive Analysis | `empathy-interviewing` | ❌ **Wrong mapping** | Points to interview lesson, no competitive analysis content |
| `content-audit` | Content Audit | `information-architecture-basics` | ❌ **Wrong mapping** | IA lesson doesn't cover content audits |
| `navigation-patterns` | Navigation Patterns | `information-architecture-basics` | ❌ **Wrong mapping** | IA lesson doesn't cover navigation patterns specifically |
| `taxonomy` | Taxonomy & Labeling | `information-architecture-basics` | ❌ **Wrong mapping** | IA lesson doesn't cover taxonomy in depth |
| `journey-mapping` | Journey Mapping | `personas-scenarios` | ❌ **Wrong mapping** | Personas lesson doesn't cover journey maps |

### Important Priority 🟡

| Topic ID | Topic Title | Current Slug | Suggested New Slug | Exists in content.ts? |
|----------|-------------|--------------|-------------------|---------------------|
| `ui-patterns` | UI Patterns Library | `visual-hierarchy-fundamentals` | `interaction-patterns` | ❌ No |
| `responsive-design` | Responsive Design | `typography-fundamentals` | `responsive-mobile-first` | ❌ No |
| `microinteractions` | Microinteractions | `color-theory-ui` | `microinteractions` | ✅ **YES** (id: `microinteractions` in content.ts) |
| `design-handoff` | Design Handoff & Collaboration | `design-handoff` | `design-handoff` | ❌ No |
| `design-critique` | Design Critique | `design-critique` | `design-critique` | ❌ No |
| `ab-testing` | A/B Testing Basics | `usability-testing-basics` | `ab-testing` | ❌ No |
| `metrics-kpis` | Metrics & KPIs | `usability-testing-basics` | `metrics-kpis` | ❌ No |
| `product-thinking` | Product Thinking | `jobs-to-be-done` | `product-thinking` | ❌ No |
| `prioritization` | Prioritization | `problem-statements` | `prioritization-frameworks` | ❌ No |
| `stakeholder-management` | Stakeholder Management | `problem-statements` | `stakeholder-management` | ❌ No |
| `service-design` | Service Design Intro | `problem-statements` | `service-design-basics` | ❌ No |

---

## 2. Lessons in content.ts NOT on Roadmap 🔍

These lessons exist but are not linked from any roadmap topic:

| Lesson ID | Lesson Title | Track | Suggested Roadmap Placement |
|-----------|--------------|-------|----------------------------|
| `usability-basics` | Usability Basics | Foundations | **Foundations** cluster - new node |
| `user-flows` | User Flows & Journeys | Foundations | Already exists as `user-flow-diagrams` - **map correctly** |
| `wireframing-prototyping` | Wireframing & Prototyping | Foundations | Partially mapped - split into wireframes + prototyping |
| `user-personas` | User Personas | Foundations | Already exists as `personas-scenarios` - **map correctly** |
| `ux-research` | UX Research | Foundations | Too generic - covered by specific research topics |
| `lean-ux` | Lean UX | Foundations | **Product & Strategy** cluster - new advanced node |
| `ux-process` | UX Process & Deliverables | Foundations | Already exists as `ux-deliverables` - **map correctly** |
| `design-methodologies` | Design Methodologies | Foundations | **Foundations** cluster - new node |
| `visual-hierarchy` | Visual Hierarchy | Advanced | Already mapped - ✅ |
| `atomic-design` | Atomic Design | Advanced | **Design Systems** cluster (not in current roadmap) |
| `accessibility` | Accessibility (A11y) | Advanced | Already mapped as `accessibility-wcag-fundamentals` - ✅ |
| `ux-psychology` | UX Psychology | Advanced | **Foundations** or **Advanced** cluster - new node |
| `design-ethics` | Design Ethics & Dark Patterns | Advanced | **Product & Strategy** cluster - new node |
| `usability-testing` | Usability Testing | Advanced | Already mapped - ✅ |
| `design-systems-governance` | System Governance | Advanced | **Design Systems** cluster (advanced) |
| `laws-of-ux` | Laws of UX | Advanced | **Foundations** or **UX Psychology** cluster |
| `frontend-foundations` | Front-End Foundations | Advanced | **Design Systems** or **Handoff** cluster |

---

## 3. Specific Topic Audit

### ✅ Topics with Correct Mappings

| Roadmap Topic | Lesson Slug | Status |
|---------------|-------------|--------|
| UX vs UI vs Product | `ux-ui-product-design-intro` | ✅ Correct |
| Design Thinking | `design-thinking-intro` | ✅ Correct |
| Human-Centered Design | `user-centered-design` | ✅ Correct |
| User Interviews | `empathy-interviewing` | ✅ Correct |
| Personas & Scenarios | `personas-scenarios` | ✅ Correct |
| Insights Synthesis | `affinity-diagrams` | ✅ Correct |
| IA Fundamentals | `information-architecture-basics` | ✅ Correct |
| Card Sorting | `card-sorting` | ✅ Correct |
| Wireframes | `wireframing-principles` | ✅ Correct |
| Visual Hierarchy | `visual-hierarchy-fundamentals` | ✅ Correct |
| Typography | `typography-fundamentals` | ✅ Correct |
| Color Theory | `color-theory-ui` | ✅ Correct |
| Accessibility WCAG | `accessibility-wcag-fundamentals` | ✅ Correct |
| Prototyping Methods | `prototyping-methods` | ✅ Correct |
| Usability Testing | `usability-testing-basics` | ✅ Correct |
| Jobs-to-be-Done | `jobs-to-be-done` | ✅ Correct |
| Problem Statements | `problem-statements` | ✅ Correct |

### ❌ Topics Requested in Audit (Missing from Roadmap)

| Topic Name | Found in content.ts? | Suggested Action |
|------------|---------------------|------------------|
| **Customer Journey Map** | ❌ No | **CREATE** - Critical UX Research deliverable |
| **Service Blueprint** | ❌ No | **CREATE** - Advanced Service Design topic |
| **Research Synthesis** | ✅ Partial (Affinity Diagrams) | **EXPAND** - Add dedicated synthesis lesson |
| **UI Foundations** | ✅ Partial (scattered across topics) | **CREATE** - Consolidate UI basics |
| **Interaction Patterns** | ❌ No | **CREATE** - Critical UI knowledge |
| **Microinteractions** | ✅ YES (`microinteractions`) | **MAP** to roadmap |
| **Content Strategy / UX Writing** | ❌ No | **CREATE** - Critical for modern UX |

---

## 4. Recommended Fix Plan

### Phase 1: Critical Fixes (Week 1) 🔴

**Priority: Immediate - Fix broken mappings**

1. **Create Missing Critical Lessons:**
   ```
   - customer-journey-mapping.ts (Research cluster)
   - content-strategy-ux-writing.ts (Content Strategy cluster)
   - interaction-patterns-library.ts (UI cluster)
   - competitive-analysis.ts (Research cluster)
   - surveys-questionnaires.ts (Research cluster)
   - navigation-patterns.ts (IA cluster)
   ```

2. **Fix Incorrect Mappings in roadmap-data.ts:**
   ```typescript
   // surveys node
   lessonSlug: 'surveys-questionnaires',  // was: 'empathy-interviewing'
   
   // competitive-analysis node
   lessonSlug: 'competitive-analysis',  // was: 'empathy-interviewing'
   
   // journey-mapping node (add to Research cluster)
   lessonSlug: 'customer-journey-mapping',  // was: 'personas-scenarios'
   
   // ui-patterns node
   lessonSlug: 'interaction-patterns',  // was: 'visual-hierarchy-fundamentals'
   
   // microinteractions node
   lessonSlug: 'microinteractions',  // was: 'color-theory-ui'
   ```

3. **Map Existing Orphaned Lessons:**
   ```typescript
   // Add to roadmap-data.ts
   {
     id: 'ux-psychology',
     lessonSlug: 'ux-psychology',  // exists in content.ts
     hasLesson: true
   },
   {
     id: 'design-ethics',
     lessonSlug: 'design-ethics',  // exists in content.ts
     hasLesson: true
   }
   ```

### Phase 2: Important Additions (Week 2) 🟡

**Priority: High - Complete core curriculum**

1. **Create Important Lessons:**
   ```
   - responsive-mobile-first.ts
   - design-handoff-collaboration.ts
   - service-design-basics.ts
   - ab-testing.ts
   - metrics-kpis.ts
   ```

2. **Add Advanced Topics to Roadmap:**
   - Design Systems cluster (atomic-design, design-systems-governance)
   - Product Strategy cluster expansion (product-thinking, prioritization, stakeholder-management)

3. **Connect Existing Content:**
   - Map `user-flows` (content.ts) → roadmap node `user-flow-diagrams`
   - Map `wireframing-prototyping` → split into wireframes + prototyping nodes
   - Map `ux-process` → `ux-deliverables` node

### Phase 3: Optional Enhancements (Week 3-4) 🟢

**Priority: Medium - Round out curriculum**

1. **Advanced Topics:**
   ```
   - design-critique.ts
   - lean-ux.ts
   - frontend-foundations.ts
   - laws-of-ux.ts
   ```

2. **Foundation Topics:**
   ```
   - usability-basics.ts (exists, needs mapping)
   - design-methodologies.ts (exists, needs mapping)
   ```

---

## 5. Suggested Lesson Slugs for New Content

### Critical (Create First)

| Topic Name | Suggested Slug | Cluster | Level |
|------------|---------------|---------|-------|
| Customer Journey Map | `customer-journey-mapping` | Research | Intermediate |
| Content Strategy | `content-strategy-ux-writing` | Content Strategy | Intermediate |
| Interaction Patterns | `interaction-patterns-library` | UI | Intermediate |
| Competitive Analysis | `competitive-analysis` | Research | Beginner |
| Surveys & Questionnaires | `surveys-questionnaires` | Research | Beginner |
| Navigation Patterns | `navigation-patterns` | IA | Intermediate |

### Important (Create Second)

| Topic Name | Suggested Slug | Cluster | Level |
|------------|---------------|---------|-------|
| Responsive Design | `responsive-mobile-first` | UI | Intermediate |
| Service Blueprint | `service-design-blueprints` | Strategy | Advanced |
| Design Handoff | `design-handoff-collaboration` | Prototyping | Intermediate |
| A/B Testing | `ab-testing-basics` | Testing | Advanced |
| Metrics & KPIs | `product-metrics-kpis` | Strategy | Advanced |
| Product Thinking | `product-thinking-fundamentals` | Strategy | Advanced |
| Prioritization | `prioritization-frameworks` | Strategy | Advanced |
| Stakeholder Management | `stakeholder-management` | Strategy | Advanced |

### Optional (Create Third)

| Topic Name | Suggested Slug | Cluster | Level |
|------------|---------------|---------|-------|
| Design Critique | `design-critique-methods` | Testing | Intermediate |
| Lean UX | `lean-ux-agile` | Foundations | Intermediate |
| Laws of UX | `laws-of-ux` | Foundations | Beginner |
| Frontend Foundations | `frontend-foundations-designers` | Systems | Advanced |
| Atomic Design | `atomic-design-systems` | Systems | Advanced |

---

## 6. Implementation Checklist

### Immediate Actions

- [ ] Create 6 critical missing lessons (customer-journey-mapping, content-strategy, interaction-patterns, competitive-analysis, surveys, navigation-patterns)
- [ ] Update roadmap-data.ts with correct lesson slugs
- [ ] Map existing microinteractions lesson to roadmap
- [ ] Map existing ux-psychology and design-ethics to roadmap
- [ ] Add hasLesson: false for topics without content

### Short-term (1-2 weeks)

- [ ] Create 8 important lessons (responsive, service-design, handoff, ab-testing, metrics, product-thinking, prioritization, stakeholder)
- [ ] Add Design Systems cluster to roadmap
- [ ] Expand Product & Strategy cluster
- [ ] Connect orphaned lessons from content.ts

### Long-term (3-4 weeks)

- [ ] Create 5 optional advanced lessons
- [ ] Add UX Psychology cluster
- [ ] Comprehensive content review
- [ ] Update related lessons mappings

---

## 7. Recommended Roadmap Structure (Updated)

### Proposed New Clusters:

```
1. Foundations (4 nodes) - ✅ Good coverage
2. Research (6 nodes) - ⚠️ Needs: surveys, competitive-analysis, journey-mapping
3. Information Architecture (5 nodes) - ⚠️ Needs: navigation-patterns, taxonomy-labeling
4. Interaction & UI (6 nodes) - ⚠️ Needs: interaction-patterns, correct microinteractions mapping
5. Content Strategy (NEW) (2 nodes) - ❌ Needs: ux-writing, content-hierarchy
6. Prototyping & Testing (4 nodes) - ⚠️ Needs: design-handoff, ab-testing
7. Design Systems (NEW) (3 nodes) - ❌ Needs: atomic-design, design-tokens, governance
8. Product & Strategy (5 nodes) - ⚠️ Needs: product-thinking, prioritization, stakeholder-mgmt
9. UX Psychology (NEW) (3 nodes) - ❌ Needs: ux-psychology, laws-of-ux, cognitive-biases
```

---

## 8. Summary & Next Steps

### Current State
- ✅ **70.8% coverage** - Core topics mapped correctly
- ⚠️ **29.2% gaps** - Wrong mappings or missing content
- 🔍 **11 orphaned lessons** - Content exists but not accessible from roadmap

### Target State
- 🎯 **100% coverage** - Every roadmap topic → lesson
- 🎯 **0 orphaned lessons** - All content accessible
- 🎯 **40+ lessons** - Comprehensive UX/UI curriculum

### Immediate Next Steps
1. **Fix broken mappings** (1 day)
2. **Create 6 critical lessons** (1 week)
3. **Update roadmap-data.ts** (1 day)
4. **QA all navigation** (1 day)

---

**Report End**  
*For questions or clarifications, review `/src/app/data/roadmap-data.ts` and `/src/app/data/content.ts`*
