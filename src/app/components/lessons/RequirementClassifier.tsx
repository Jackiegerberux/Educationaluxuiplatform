import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { FileText, Sparkles, Copy, Check, AlertCircle, HelpCircle, Zap, Shield } from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

interface ClassifiedRequirements {
  functional: string[];
  nonFunctional: string[];
  assumptions: string[];
  openQuestions: string[];
}

export function RequirementClassifier() {
  const { t, language } = useLanguage();
  
  const [inputText, setInputText] = useState('');
  const [classified, setClassified] = useState<ClassifiedRequirements | null>(null);
  const [copied, setCopied] = useState(false);

  const exampleText = t({
    en: 'We need a way for admins to reset user passwords. It should be fast and secure. Users must be logged in to request a reset. We assume users have verified email addresses. What happens if the email server is down? The reset link should expire after 24 hours. The page should be accessible and work on mobile.',
    es: 'Necesitamos una forma para que admins reseteen contraseñas de usuario. Debe ser rápido y seguro. Usuarios deben estar con sesión iniciada para solicitar reset. Asumimos que usuarios tienen direcciones de email verificadas. ¿Qué pasa si el servidor de email está caído? El link de reset debería expirar después de 24 horas. La página debería ser accesible y funcionar en móvil.'
  });

  const classifyRequirements = () => {
    if (!inputText.trim()) return;

    const text = inputText.toLowerCase();

    // Simple keyword-based classification (in a real app, you might use ML or more sophisticated parsing)
    const functionalKeywords = ['must', 'should allow', 'users can', 'system will', 'feature', 'button', 'form', 'display', 'show', 'reset', 'send', 'create', 'delete', 'update', 'expire'];
    const nonFunctionalKeywords = ['fast', 'secure', 'performance', 'load time', 'accessible', 'wcag', 'mobile', 'responsive', 'scalable', 'reliable', 'available'];
    const assumptionKeywords = ['assume', 'assuming', 'asumimos', 'we assume', 'presumably', 'presume'];
    const questionKeywords = ['what if', 'how', 'why', 'when', 'qué pasa', 'what happens', 'what about', '?'];

    const sentences = inputText.split(/[.!]+/).map(s => s.trim()).filter(s => s.length > 0);

    const functional: string[] = [];
    const nonFunctional: string[] = [];
    const assumptions: string[] = [];
    const openQuestions: string[] = [];

    sentences.forEach(sentence => {
      const lowerSentence = sentence.toLowerCase();
      
      // Check for questions first
      if (questionKeywords.some(kw => lowerSentence.includes(kw)) || sentence.includes('?')) {
        openQuestions.push(sentence);
      }
      // Check for assumptions
      else if (assumptionKeywords.some(kw => lowerSentence.includes(kw))) {
        assumptions.push(sentence);
      }
      // Check for non-functional
      else if (nonFunctionalKeywords.some(kw => lowerSentence.includes(kw))) {
        nonFunctional.push(sentence);
      }
      // Otherwise, likely functional
      else if (functionalKeywords.some(kw => lowerSentence.includes(kw)) || lowerSentence.includes('need')) {
        functional.push(sentence);
      }
      // Default to functional if unsure
      else if (sentence.length > 10) {
        functional.push(sentence);
      }
    });

    // Add some examples if empty
    if (functional.length === 0) {
      functional.push(t({ 
        en: 'No functional requirements detected. Try describing what the system should do.',
        es: 'No se detectaron requisitos funcionales. Intenta describir qué debe hacer el sistema.'
      }));
    }

    setClassified({
      functional,
      nonFunctional: nonFunctional.length > 0 ? nonFunctional : [t({ en: 'None detected', es: 'Ninguno detectado' })],
      assumptions: assumptions.length > 0 ? assumptions : [t({ en: 'None detected', es: 'Ninguno detectado' })],
      openQuestions: openQuestions.length > 0 ? openQuestions : [t({ en: 'None detected', es: 'Ninguno detectado' })]
    });
  };

  const copyStructuredOutput = () => {
    if (!classified) return;

    const output = `
${t({ en: '## Functional Requirements', es: '## Requisitos Funcionales' })}
${classified.functional.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}

${t({ en: '## Non-Functional Requirements', es: '## Requisitos No Funcionales' })}
${classified.nonFunctional.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}

${t({ en: '## Assumptions', es: '## Supuestos' })}
${classified.assumptions.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}

${t({ en: '## Open Questions', es: '## Preguntas Abiertas' })}
${classified.openQuestions.map((item, idx) => `${idx + 1}. ${item}`).join('\n')}
`.trim();

    copyToClipboard(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadExample = () => {
    setInputText(exampleText);
    setClassified(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <FileText className="size-8 text-cyan-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'Requirement Classifier', es: 'Clasificador de Requisitos' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({ 
            en: 'Paste a vague requirement paragraph and instantly separate functional requirements, non-functional requirements, assumptions, and open questions.',
            es: 'Pega un párrafo de requisito vago y separa instantáneamente requisitos funcionales, no funcionales, supuestos y preguntas abiertas.'
          })}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 space-y-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="size-5 text-cyan-400" />
            <h4 className="text-lg font-semibold text-white">
              {t({ en: 'Paste Requirements', es: 'Pega Requisitos' })}
            </h4>
          </div>
          <button
            onClick={loadExample}
            className="px-3 py-1 text-sm bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors"
          >
            {t({ en: 'Load Example', es: 'Cargar Ejemplo' })}
          </button>
        </div>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t({ 
            en: 'Paste your requirement text here... Example: "We need a way for users to export reports. It should be fast and secure. Users must be logged in. What happens if export fails? The file should be in CSV or PDF format."',
            es: 'Pega tu texto de requisito aquí... Ejemplo: "Necesitamos una forma para que usuarios exporten reportes. Debe ser rápido y seguro. Usuarios deben estar con sesión iniciada. ¿Qué pasa si exportación falla? El archivo debería estar en formato CSV o PDF."'
          })}
          rows={6}
          className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
        />

        <button
          onClick={classifyRequirements}
          disabled={!inputText.trim()}
          className="w-full px-6 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles className="size-5" />
          {t({ en: 'Classify Requirements', es: 'Clasificar Requisitos' })}
        </button>
      </div>

      {/* Classified Output */}
      {classified && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-white">
              {t({ en: 'Classified Requirements', es: 'Requisitos Clasificados' })}
            </h4>
            <button
              onClick={copyStructuredOutput}
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  {t({ en: 'Copied!', es: '¡Copiado!' })}
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  {t({ en: 'Copy Structured Output', es: 'Copiar Output Estructurado' })}
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Functional Requirements */}
            <div className="bg-gradient-to-br from-blue-950/30 to-blue-900/10 border border-blue-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="size-5 text-blue-400" />
                <h5 className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
                  {t({ en: 'Functional Requirements', es: 'Requisitos Funcionales' })}
                </h5>
              </div>
              <p className="text-xs text-zinc-400 mb-2">
                {t({ en: 'What the system does', es: 'Qué hace el sistema' })}
              </p>
              <ul className="space-y-2">
                {classified.functional.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-zinc-300 text-sm bg-zinc-900/30 p-2 rounded border border-blue-500/20">
                    <span className="text-blue-400 font-semibold flex-shrink-0">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-Functional Requirements */}
            <div className="bg-gradient-to-br from-purple-950/30 to-purple-900/10 border border-purple-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="size-5 text-purple-400" />
                <h5 className="text-sm font-semibold text-purple-400 uppercase tracking-wide">
                  {t({ en: 'Non-Functional Requirements', es: 'Requisitos No Funcionales' })}
                </h5>
              </div>
              <p className="text-xs text-zinc-400 mb-2">
                {t({ en: 'How it performs (speed, security, accessibility)', es: 'Cómo se desempeña (velocidad, seguridad, accesibilidad)' })}
              </p>
              <ul className="space-y-2">
                {classified.nonFunctional.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-zinc-300 text-sm bg-zinc-900/30 p-2 rounded border border-purple-500/20">
                    <span className="text-purple-400 font-semibold flex-shrink-0">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Assumptions */}
            <div className="bg-gradient-to-br from-amber-950/30 to-amber-900/10 border border-amber-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <AlertCircle className="size-5 text-amber-400" />
                <h5 className="text-sm font-semibold text-amber-400 uppercase tracking-wide">
                  {t({ en: 'Assumptions', es: 'Supuestos' })}
                </h5>
              </div>
              <p className="text-xs text-zinc-400 mb-2">
                {t({ en: 'Things we assume to be true (validate these!)', es: 'Cosas que asumimos verdaderas (¡valida estas!)' })}
              </p>
              <ul className="space-y-2">
                {classified.assumptions.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-zinc-300 text-sm bg-zinc-900/30 p-2 rounded border border-amber-500/20">
                    <span className="text-amber-400 font-semibold flex-shrink-0">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Open Questions */}
            <div className="bg-gradient-to-br from-rose-950/30 to-rose-900/10 border border-rose-500/30 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="size-5 text-rose-400" />
                <h5 className="text-sm font-semibold text-rose-400 uppercase tracking-wide">
                  {t({ en: 'Open Questions', es: 'Preguntas Abiertas' })}
                </h5>
              </div>
              <p className="text-xs text-zinc-400 mb-2">
                {t({ en: 'Questions that need answers before building', es: 'Preguntas que necesitan respuestas antes de construir' })}
              </p>
              <ul className="space-y-2">
                {classified.openQuestions.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-zinc-300 text-sm bg-zinc-900/30 p-2 rounded border border-rose-500/20">
                    <span className="text-rose-400 font-semibold flex-shrink-0">{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-cyan-950/20 border border-cyan-500/30 rounded-xl p-4">
            <p className="text-sm text-cyan-300">
              <strong>{t({ en: 'Next steps:', es: 'Próximos pasos:' })}</strong> {t({ 
                en: 'Validate assumptions with stakeholders. Answer open questions before Sprint Planning. Document functional and non-functional requirements in your user story. Add edge cases to acceptance criteria.',
                es: 'Valida supuestos con stakeholders. Responde preguntas abiertas antes de Sprint Planning. Documenta requisitos funcionales y no funcionales en tu user story. Agrega casos límite a criterios de aceptación.'
              })}
            </p>
          </div>
        </div>
      )}

      {/* How It Works */}
      <div className="bg-gradient-to-br from-zinc-900/30 to-zinc-950/30 border border-zinc-800 rounded-2xl p-6 space-y-4">
        <h4 className="text-xl font-semibold text-white flex items-center gap-2">
          <Sparkles className="size-6 text-cyan-400" />
          {t({ en: 'How This Works', es: 'Cómo Funciona Esto' })}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <p className="text-cyan-400 font-semibold">{t({ en: 'Functional Requirements:', es: 'Requisitos Funcionales:' })}</p>
            <p className="text-zinc-300">
              {t({ 
                en: 'Detected when text includes: "must", "should allow", "users can", "system will", action verbs like "reset", "send", "create".',
                es: 'Detectados cuando texto incluye: "debe", "debería permitir", "usuarios pueden", "sistema hará", verbos de acción como "resetear", "enviar", "crear".'
              })}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-purple-400 font-semibold">{t({ en: 'Non-Functional Requirements:', es: 'Requisitos No Funcionales:' })}</p>
            <p className="text-zinc-300">
              {t({ 
                en: 'Detected when text includes: "fast", "secure", "accessible", "mobile", "performance", "scalable", "WCAG".',
                es: 'Detectados cuando texto incluye: "rápido", "seguro", "accesible", "móvil", "rendimiento", "escalable", "WCAG".'
              })}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-amber-400 font-semibold">{t({ en: 'Assumptions:', es: 'Supuestos:' })}</p>
            <p className="text-zinc-300">
              {t({ 
                en: 'Detected when text includes: "assume", "assuming", "presumably", "we assume".',
                es: 'Detectados cuando texto incluye: "asumir", "asumiendo", "asumimos", "presumiblemente".'
              })}
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-rose-400 font-semibold">{t({ en: 'Open Questions:', es: 'Preguntas Abiertas:' })}</p>
            <p className="text-zinc-300">
              {t({ 
                en: 'Detected when text includes: "what if", "how", "why", "what happens", or ends with "?".',
                es: 'Detectados cuando texto incluye: "qué pasa si", "cómo", "por qué", "qué sucede", o termina con "?".'
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}