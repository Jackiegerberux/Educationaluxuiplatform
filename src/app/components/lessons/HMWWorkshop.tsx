import React, { useState } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { Lightbulb, Users, Copy, Check, Sparkles, ThumbsUp } from 'lucide-react';
import { copyToClipboard } from '../../utils/clipboard';

interface HMWStatement {
  id: number;
  text: { en: string; es: string };
  votes: number;
}

export function HMWWorkshop() {
  const { t, language } = useLanguage();
  
  const [persona, setPersona] = useState('');
  const [painPoint, setPainPoint] = useState('');
  const [statements, setStatements] = useState<HMWStatement[]>([]);
  const [votedIds, setVotedIds] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState(false);

  const generateHMWStatements = () => {
    if (!persona.trim() || !painPoint.trim()) return;

    // Mock generation logic - creates 6 HMW statements based on inputs
    const templates = language === 'en' ? [
      `How might we help ${persona} ${painPoint} more easily?`,
      `How might we eliminate the need for ${persona} to ${painPoint}?`,
      `How might we turn ${painPoint} into an opportunity for ${persona}?`,
      `How might we make ${painPoint} faster and more intuitive for ${persona}?`,
      `How might we help ${persona} feel confident when ${painPoint}?`,
      `How might we redesign the process so ${persona} can ${painPoint} without friction?`
    ] : [
      `¿Cómo podríamos ayudar a ${persona} a ${painPoint} más fácilmente?`,
      `¿Cómo podríamos eliminar la necesidad de que ${persona} ${painPoint}?`,
      `¿Cómo podríamos convertir ${painPoint} en una oportunidad para ${persona}?`,
      `¿Cómo podríamos hacer que ${painPoint} sea más rápido e intuitivo para ${persona}?`,
      `¿Cómo podríamos ayudar a ${persona} a sentirse seguro cuando ${painPoint}?`,
      `¿Cómo podríamos rediseñar el proceso para que ${persona} pueda ${painPoint} sin fricción?`
    ];

    const generated: HMWStatement[] = templates.map((text, idx) => ({
      id: idx,
      text: {
        en: templates[idx], // We're using the same for both for simplicity in this mock
        es: templates[idx]
      },
      votes: 0
    }));

    setStatements(generated);
    setVotedIds(new Set());
  };

  const handleVote = (id: number) => {
    if (votedIds.size >= 2 && !votedIds.has(id)) {
      return; // Max 2 votes
    }

    const newVotedIds = new Set(votedIds);
    if (votedIds.has(id)) {
      newVotedIds.delete(id);
      setStatements(statements.map(s => 
        s.id === id ? { ...s, votes: s.votes - 1 } : s
      ));
    } else {
      newVotedIds.add(id);
      setStatements(statements.map(s => 
        s.id === id ? { ...s, votes: s.votes + 1 } : s
      ));
    }
    setVotedIds(newVotedIds);
  };

  const exportToClipboard = () => {
    const topTwo = [...statements]
      .sort((a, b) => b.votes - a.votes)
      .slice(0, 2);
    
    const textContent = `HMW Workshop Results\n\nPersona: ${persona}\nPain Point: ${painPoint}\n\n${t({ en: 'Top 2 Selected Ideas:', es: 'Top 2 Ideas Seleccionadas:' })}\n\n${topTwo.map((s, idx) => `${idx + 1}. ${s.text[language]} (${s.votes} ${t({ en: 'votes', es: 'votos' })})`).join('\n')}`;
    
    copyToClipboard(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const topTwo = [...statements]
    .filter(s => votedIds.has(s.id))
    .sort((a, b) => b.votes - a.votes);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 mt-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="flex items-center justify-center gap-3">
          <Lightbulb className="size-8 text-amber-400" />
          <h3 className="text-3xl font-bold text-white">
            {t({ en: 'HMW Workshop', es: 'Taller HMW' })}
          </h3>
        </div>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          {t({ 
            en: 'Transform user pain points into "How Might We" opportunities. Generate statements, vote on the best, and export your top ideas.',
            es: 'Transforma puntos de dolor de usuario en oportunidades "Cómo Podríamos". Genera declaraciones, vota por las mejores y exporta tus mejores ideas.'
          })}
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 space-y-5">
        <div className="flex items-center gap-2 mb-4">
          <Users className="size-5 text-indigo-400" />
          <h4 className="text-lg font-semibold text-white">
            {t({ en: 'Workshop Inputs', es: 'Inputs del Taller' })}
          </h4>
        </div>

        <div>
          <label htmlFor="persona" className="block text-sm font-medium text-zinc-300 mb-2">
            {t({ en: 'User Persona (who are we designing for?)', es: 'Persona de Usuario (¿para quién diseñamos?)' })}
          </label>
          <input
            id="persona"
            type="text"
            value={persona}
            onChange={(e) => setPersona(e.target.value)}
            placeholder={t({ 
              en: 'e.g., Tech-savvy millennials opening their first digital bank account',
              es: 'ej., Millennials tech-savvy abriendo su primera cuenta bancaria digital'
            })}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="painPoint" className="block text-sm font-medium text-zinc-300 mb-2">
            {t({ en: 'Pain Point (what problem are they facing?)', es: 'Punto de Dolor (¿qué problema enfrentan?)' })}
          </label>
          <textarea
            id="painPoint"
            value={painPoint}
            onChange={(e) => setPainPoint(e.target.value)}
            placeholder={t({ 
              en: 'e.g., feel anxious uploading sensitive documents like Social Security Number to a new app',
              es: 'ej., sienten ansiedad al subir documentos sensibles como Número de Seguridad Social a una nueva app'
            })}
            rows={3}
            className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          />
        </div>

        <button
          onClick={generateHMWStatements}
          disabled={!persona.trim() || !painPoint.trim()}
          className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles className="size-5" />
          {t({ en: 'Generate HMW Statements', es: 'Generar Declaraciones HMW' })}
        </button>
      </div>

      {/* Generated Statements */}
      {statements.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-semibold text-white">
              {t({ en: 'Generated Statements', es: 'Declaraciones Generadas' })}
            </h4>
            <p className="text-sm text-zinc-500">
              {t({ en: 'Vote for your top 2 ideas', es: 'Vota por tus 2 mejores ideas' })} ({votedIds.size}/2)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {statements.map((statement) => {
              const isVoted = votedIds.has(statement.id);
              const canVote = votedIds.size < 2 || isVoted;

              return (
                <button
                  key={statement.id}
                  onClick={() => handleVote(statement.id)}
                  disabled={!canVote}
                  className={`text-left p-5 rounded-xl border-2 transition-all group ${
                    isVoted
                      ? 'bg-indigo-500/10 border-indigo-500'
                      : canVote
                      ? 'bg-zinc-900/30 border-zinc-800 hover:border-zinc-700'
                      : 'bg-zinc-900/10 border-zinc-900 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 transition-transform ${isVoted ? 'scale-110' : ''}`}>
                      <ThumbsUp className={`size-5 ${isVoted ? 'text-indigo-400 fill-indigo-400' : 'text-zinc-600'}`} />
                    </div>
                    <p className={`flex-1 text-sm leading-relaxed ${isVoted ? 'text-white font-medium' : 'text-zinc-300'}`}>
                      {statement.text[language]}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Top 2 Selected + Export */}
      {votedIds.size > 0 && (
        <div className="bg-gradient-to-br from-indigo-950/30 to-purple-950/30 border border-indigo-500/30 rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <Check className="size-5 text-indigo-400" />
              {t({ en: 'Your Top Selected Ideas', es: 'Tus Ideas Seleccionadas' })}
            </h4>
            <button
              onClick={exportToClipboard}
              disabled={votedIds.size === 0}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="size-4" />
                  {t({ en: 'Copied!', es: '¡Copiado!' })}
                </>
              ) : (
                <>
                  <Copy className="size-4" />
                  {t({ en: 'Export to Notes', es: 'Exportar a Notas' })}
                </>
              )}
            </button>
          </div>

          <div className="space-y-3">
            {topTwo.map((statement, idx) => (
              <div key={statement.id} className="flex items-start gap-4 p-4 bg-zinc-900/30 border border-zinc-800 rounded-lg">
                <div className="flex-shrink-0 size-8 bg-indigo-500/20 border border-indigo-500/30 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-indigo-400">{idx + 1}</span>
                </div>
                <p className="flex-1 text-white leading-relaxed">{statement.text[language]}</p>
              </div>
            ))}
          </div>

          {votedIds.size < 2 && (
            <p className="text-sm text-zinc-500 italic">
              {t({ 
                en: 'Select one more idea to see your top 2 priorities',
                es: 'Selecciona una idea más para ver tus 2 prioridades'
              })}
            </p>
          )}
        </div>
      )}
    </div>
  );
}