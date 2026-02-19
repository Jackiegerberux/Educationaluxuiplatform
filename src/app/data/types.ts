export type Language = 'en' | 'es';

export type LessonTag = 'Core UX' | 'Product' | 'UI' | 'Tech' | 'Strategy' | 'Metrics';

export interface Topic {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  status: 'beginner' | 'intermediate' | 'advanced';
  timeEstimate: string;
  tag?: LessonTag;
  isPlaceholder?: boolean;
  reference?: { en: string; es: string };
  referenceLink?: string;
  content?: {
    definition: { en: string; es: string };
    why: { en: string; es: string };
    keyPrinciples: { en: string[]; es: string[] };
    commonMistakes: { en: string[]; es: string[] };
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
      research?: { en: string[]; es: string[] };
      handoff?: { en: string[]; es: string[] };
      coding?: { en: string[]; es: string[] };
      ai?: { en: string[]; es: string[] };
      management?: { en: string[]; es: string[] };
      documentation?: { en: string[]; es: string[] };
      testing?: { en: string[]; es: string[] };
      analytics?: { en: string[]; es: string[] };
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
    realExample?: {
      title: { en: string; es: string };
      description: { en: string; es: string };
      imageUrl?: string;
      company?: string;
    };
  };
}

export interface Track {
  id: string;
  title: { en: string; es: string };
  description: { en: string; es: string };
  topics: Topic[];
}