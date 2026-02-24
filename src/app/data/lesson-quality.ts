import { Topic } from './content';

export type LessonQuality = 'bronze' | 'silver' | 'gold';

export interface LessonQualityResult {
  badge: LessonQuality;
  score: number;
  missingFields: string[];
}

/**
 * Evaluates a lesson's completeness and quality
 * 
 * Bronze (Minimum Viable): 
 * - definition present
 * - why present
 * - keyPrinciples (min 4)
 * - commonMistakes (min 3)
 * - quiz (min 2)
 * 
 * Silver (Enhanced):
 * - Bronze requirements +
 * - howToApply with steps
 * - deliverables
 * - practicalTools
 * - realExample
 * 
 * Gold (Complete Professional):
 * - Silver requirements +
 * - aiInPractice
 * - howToValidate
 * - Interactive example component (specific topic IDs)
 * - All 12 sections complete
 */
export function evaluateLessonQuality(topic: Topic): LessonQualityResult {
  const missingFields: string[] = [];
  let score = 0;

  // Guard: if topic has no content at all, return Bronze immediately
  if (!topic.content) {
    return { badge: 'bronze', score: 0, missingFields: ['content (missing entirely)'] };
  }

  // Bronze requirements (5 points each = 25 points)
  if (!topic.content.definition || topic.content.definition.en.length === 0) {
    missingFields.push('definition');
  } else {
    score += 5;
  }

  if (!topic.content.why || topic.content.why.en.length === 0) {
    missingFields.push('why');
  } else {
    score += 5;
  }

  const keyPrinciplesCount = topic.content.keyPrinciples?.en?.length || 0;
  if (keyPrinciplesCount < 4) {
    missingFields.push(`keyPrinciples (${keyPrinciplesCount}/4)`);
  } else {
    score += 5;
  }

  const commonMistakesCount = topic.content.commonMistakes?.en?.length || 0;
  if (commonMistakesCount < 3) {
    missingFields.push(`commonMistakes (${commonMistakesCount}/3)`);
  } else {
    score += 5;
  }

  const quizCount = topic.content.quiz?.length || 0;
  if (quizCount < 2) {
    missingFields.push(`quiz (${quizCount}/2)`);
  } else {
    score += 5;
  }

  // If doesn't meet Bronze, return Bronze
  if (score < 25) {
    return { badge: 'bronze', score, missingFields };
  }

  // Silver requirements (10 points each = 40 additional points = 65 total)
  if (!topic.content.howToApply || !topic.content.howToApply.steps || topic.content.howToApply.steps.length === 0) {
    missingFields.push('howToApply');
  } else {
    score += 10;
  }

  if (!topic.content.deliverables || !topic.content.deliverables.items || topic.content.deliverables.items.en.length === 0) {
    missingFields.push('deliverables');
  } else {
    score += 10;
  }

  if (!topic.content.practicalTools || !topic.content.practicalTools.design || topic.content.practicalTools.design.en.length === 0) {
    missingFields.push('practicalTools');
  } else {
    score += 10;
  }

  if (!topic.content.realExample || !topic.content.realExample.title || topic.content.realExample.title.en.length === 0) {
    missingFields.push('realExample');
  } else {
    score += 10;
  }

  // If doesn't meet Silver (need at least 3 of 4 Silver requirements = 55 points), return Bronze
  if (score < 55) {
    return { badge: 'bronze', score, missingFields };
  }

  // If meets Silver but not all requirements, return Silver
  if (score < 65) {
    return { badge: 'silver', score, missingFields };
  }

  // Gold requirements (15 points each = 45 additional points = 110 total possible)
  if (!topic.content.aiInPractice || !topic.content.aiInPractice.prompts || topic.content.aiInPractice.prompts.length === 0) {
    missingFields.push('aiInPractice');
  } else {
    score += 15;
  }

  if (!topic.content.howToValidate || !topic.content.howToValidate.methods || topic.content.howToValidate.methods.en.length === 0) {
    missingFields.push('howToValidate');
  } else {
    score += 15;
  }

  // Interactive example check (bonus for specific topics with interactive components)
  const hasInteractiveExample = [
    'user-personas',
    'visual-hierarchy',
    'ux-psychology',
    'information-architecture',
    'methodologies-overview',
    'design-thinking',
    'design-sprint',
    'scrum-for-designers',
    'user-stories-and-requirements',
    'typography-fundamentals',
    'color-theory',
    'problem-statements',
    'microinteractions',
    'figma-mastery',
    'design-ethics',
    'laws-of-ux',
    'frontend-foundations',
    'html-fundamentals',
    'css-fundamentals',
    'intro-javascript',
    'heuristic-analysis',
    'business-goals-kpis',
    'stakeholder-mapping',
    'product-roadmapping',
    'ux-metrics-advanced',
    'edge-and-system-states',
    'ux-documentation-pro',
    'release-planning-and-increment-strategy',
    'portfolio-case-study-writing',
  ].includes(topic.id);

  if (!hasInteractiveExample) {
    missingFields.push('interactiveExample');
  } else {
    score += 15;
  }

  // If meets most Gold requirements (need at least 2 of 3), return Gold
  if (score >= 80) {
    return { badge: 'gold', score, missingFields };
  }

  // Otherwise return Silver
  return { badge: 'silver', score, missingFields };
}

/**
 * Returns badge color classes for styling
 */
export function getBadgeStyles(badge: LessonQuality): {
  bg: string;
  border: string;
  text: string;
  label: { en: string; es: string };
} {
  switch (badge) {
    case 'gold':
      return {
        bg: 'bg-yellow-600/20',
        border: 'border-yellow-600/30',
        text: 'text-yellow-400',
        label: { en: 'Gold', es: 'Oro' }
      };
    case 'silver':
      return {
        bg: 'bg-zinc-400/20',
        border: 'border-zinc-400/30',
        text: 'text-zinc-300',
        label: { en: 'Silver', es: 'Plata' }
      };
    case 'bronze':
    default:
      return {
        bg: 'bg-amber-600/20',
        border: 'border-amber-600/30',
        text: 'text-amber-400',
        label: { en: 'Bronze', es: 'Bronce' }
      };
  }
}