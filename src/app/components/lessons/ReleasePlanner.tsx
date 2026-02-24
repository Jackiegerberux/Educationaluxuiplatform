import React, { useState, useCallback } from 'react';
import { Rocket, Copy, CheckCircle, AlertTriangle, Shield, Zap, BarChart3, Clock, ChevronDown, ChevronUp } from 'lucide-react';

type RiskLevel = 'low' | 'medium' | 'high';
type TeamCapacity = 'small' | 'medium' | 'large';

interface ReleasePlan {
  mvpScope: string[];
  increment2: string[];
  increment3: string[];
  riskIndicator: { level: RiskLevel; label: string; details: string[] };
  rolloutStrategy: string[];
  postReleaseChecklist: string[];
}

const RISK_COLORS: Record<RiskLevel, string> = {
  low: 'text-emerald-400',
  medium: 'text-amber-400',
  high: 'text-red-400',
};

const RISK_BG: Record<RiskLevel, string> = {
  low: 'bg-emerald-400/10 border-emerald-400/30',
  medium: 'bg-amber-400/10 border-amber-400/30',
  high: 'bg-red-400/10 border-red-400/30',
};

function generateReleasePlan(
  initiativeName: string,
  featureScope: string,
  riskLevel: RiskLevel,
  teamCapacity: TeamCapacity,
  kpiGoal: string
): ReleasePlan {
  const features = featureScope
    .split(/[,;\n]+/)
    .map(f => f.trim())
    .filter(Boolean);

  const totalFeatures = features.length || 3;
  const mvpCount = Math.max(1, Math.ceil(totalFeatures * 0.35));
  const inc2Count = Math.max(1, Math.ceil(totalFeatures * 0.35));

  const mvpFeatures = features.slice(0, mvpCount);
  const inc2Features = features.slice(mvpCount, mvpCount + inc2Count);
  const inc3Features = features.slice(mvpCount + inc2Count);

  const mvpScope = mvpFeatures.length > 0
    ? mvpFeatures.map(f => `Core: ${f} (end-to-end flow, basic validation)`)
    : [`Core flow for ${initiativeName} — minimal viable path`, 'Basic input validation and error handling', 'Simple success/failure feedback'];

  const increment2 = inc2Features.length > 0
    ? inc2Features.map(f => `Optimize: ${f} (edge cases, performance)`)
    : [`Edge case handling for ${initiativeName}`, 'Performance optimization and loading states', 'Inline error correction and user guidance'];

  const increment3 = inc3Features.length > 0
    ? inc3Features.map(f => `Scale: ${f} (automation, advanced)`)
    : [`Automation and batch operations for ${initiativeName}`, 'Template/preset configurations', 'Audit logging and compliance features'];

  // Risk assessment
  const riskFactors: string[] = [];
  if (riskLevel === 'high') {
    riskFactors.push('High complexity increases deployment risk — consider feature flags');
    riskFactors.push('Recommend canary release to <5% users first');
    riskFactors.push('Ensure rollback procedure is tested before go-live');
  } else if (riskLevel === 'medium') {
    riskFactors.push('Moderate risk — phased rollout recommended (20% → 50% → 100%)');
    riskFactors.push('Monitor error rates closely for first 48 hours');
  } else {
    riskFactors.push('Low risk — standard rollout is acceptable');
    riskFactors.push('Monitor adoption metrics for first 7 days');
  }

  if (teamCapacity === 'small') {
    riskFactors.push('Small team: limit to 1 increment per sprint cycle');
  }

  const sprintEstimate = teamCapacity === 'small' ? '3-4' : teamCapacity === 'medium' ? '2-3' : '1-2';
  const rolloutPercentages = riskLevel === 'high'
    ? ['Internal team only (Day 1)', '5% of users (Day 3)', '20% of users (Day 7)', '50% of users (Day 14)', '100% of users (Day 21)']
    : riskLevel === 'medium'
    ? ['Internal + beta users (Day 1)', '20% of users (Day 3)', '50% of users (Day 7)', '100% of users (Day 14)']
    : ['Internal validation (Day 1)', '20% of users (Day 2)', '100% of users (Day 5)'];

  const rolloutStrategy = [
    `Estimated ${sprintEstimate} sprints per increment`,
    ...rolloutPercentages,
    'Rollback trigger: error rate > 2% or critical bug reported',
    riskLevel === 'high' ? 'Feature flag required for kill-switch capability' : 'Standard deployment pipeline',
  ];

  const postReleaseChecklist = [
    `Track ${kpiGoal || 'primary KPI'} daily for 7 days post-release`,
    'Monitor error rate — threshold: <1% for green, 1-2% yellow, >2% red',
    'Check support ticket volume — compare to pre-release baseline',
    'Review feature adoption curve — target: >30% of eligible users in 7 days',
    'Measure task completion rate for core flow',
    'Schedule post-release retrospective at T+7',
    'Document learnings for next increment planning',
    'Update stakeholder dashboard with release metrics',
  ];

  return {
    mvpScope,
    increment2,
    increment3,
    riskIndicator: {
      level: riskLevel,
      label: riskLevel === 'high' ? 'High Risk' : riskLevel === 'medium' ? 'Medium Risk' : 'Low Risk',
      details: riskFactors,
    },
    rolloutStrategy,
    postReleaseChecklist,
  };
}

function SectionCard({ title, icon: Icon, items, color }: {
  title: string;
  icon: React.ElementType;
  items: string[];
  color: string;
}) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={`border rounded-xl overflow-hidden ${color}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 shrink-0" />
          <span className="font-semibold text-sm">{title}</span>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 opacity-50" /> : <ChevronDown className="w-4 h-4 opacity-50" />}
      </button>
      {expanded && (
        <ul className="px-4 pb-4 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-white/80">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0 opacity-50" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ReleasePlanner() {
  const [initiativeName, setInitiativeName] = useState('');
  const [featureScope, setFeatureScope] = useState('');
  const [riskLevel, setRiskLevel] = useState<RiskLevel>('medium');
  const [teamCapacity, setTeamCapacity] = useState<TeamCapacity>('medium');
  const [kpiGoal, setKpiGoal] = useState('');
  const [plan, setPlan] = useState<ReleasePlan | null>(null);
  const [copied, setCopied] = useState(false);

  const handleGenerate = useCallback(() => {
    if (!initiativeName.trim()) return;
    const result = generateReleasePlan(initiativeName, featureScope, riskLevel, teamCapacity, kpiGoal);
    setPlan(result);
  }, [initiativeName, featureScope, riskLevel, teamCapacity, kpiGoal]);

  const handleCopy = useCallback(() => {
    if (!plan) return;
    const text = [
      `# Release Plan: ${initiativeName}`,
      `Risk Level: ${plan.riskIndicator.label}`,
      `Team Capacity: ${teamCapacity}`,
      `KPI Goal: ${kpiGoal || 'Not specified'}`,
      '',
      '## MVP Scope (Increment 1)',
      ...plan.mvpScope.map(s => `- ${s}`),
      '',
      '## Increment 2 — Optimization',
      ...plan.increment2.map(s => `- ${s}`),
      '',
      '## Increment 3 — Scale & Automation',
      ...plan.increment3.map(s => `- ${s}`),
      '',
      '## Risk Assessment',
      ...plan.riskIndicator.details.map(s => `- ${s}`),
      '',
      '## Rollout Strategy',
      ...plan.rolloutStrategy.map(s => `- ${s}`),
      '',
      '## Post-Release Monitoring Checklist',
      ...plan.postReleaseChecklist.map(s => `- [ ] ${s}`),
    ].join('\n');

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [plan, initiativeName, teamCapacity, kpiGoal]);

  return (
    <section id="release-planner" className="mb-12 scroll-mt-24">
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-violet-500/20 rounded-xl">
            <Rocket className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Release Planner</h3>
            <p className="text-sm text-white/50">Generate an incremental release strategy from your initiative</p>
          </div>
        </div>

        {/* ── INPUTS ─────────────────────────────────────────── */}
        <div className="grid gap-4 sm:gap-5 mb-6">
          {/* Initiative Name */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">Initiative Name</label>
            <input
              type="text"
              value={initiativeName}
              onChange={e => setInitiativeName(e.target.value)}
              placeholder="e.g., Bulk Assign Data Packs"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition"
            />
          </div>

          {/* Feature Scope */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">Feature Scope <span className="text-white/40">(comma or line-separated)</span></label>
            <textarea
              value={featureScope}
              onChange={e => setFeatureScope(e.target.value)}
              placeholder="e.g., CSV upload, validation, progress bar, error handling, scheduling, templates, audit log"
              rows={3}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition resize-y min-h-[60px]"
            />
          </div>

          {/* Risk + Capacity row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">Risk Level</label>
              <div className="flex gap-2">
                {(['low', 'medium', 'high'] as RiskLevel[]).map(level => (
                  <button
                    key={level}
                    onClick={() => setRiskLevel(level)}
                    className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition ${
                      riskLevel === level
                        ? RISK_BG[level] + ' ' + RISK_COLORS[level]
                        : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/70 mb-1.5">Team Capacity</label>
              <div className="flex gap-2">
                {(['small', 'medium', 'large'] as TeamCapacity[]).map(cap => (
                  <button
                    key={cap}
                    onClick={() => setTeamCapacity(cap)}
                    className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider border transition ${
                      teamCapacity === cap
                        ? 'bg-blue-400/10 border-blue-400/30 text-blue-400'
                        : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* KPI Goal */}
          <div>
            <label className="block text-sm font-medium text-white/70 mb-1.5">KPI Goal</label>
            <input
              type="text"
              value={kpiGoal}
              onChange={e => setKpiGoal(e.target.value)}
              placeholder="e.g., Reduce time-to-assign by 80%"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition"
            />
          </div>
        </div>

        {/* ── GENERATE BUTTON ────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button
            onClick={handleGenerate}
            disabled={!initiativeName.trim()}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 disabled:bg-white/10 disabled:text-white/30 rounded-xl text-sm font-semibold text-white transition"
          >
            <Rocket className="w-4 h-4" />
            Generate Release Plan
          </button>
          {plan && (
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 rounded-xl text-sm font-semibold text-white transition"
            >
              {copied ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied!' : 'Copy Release Strategy'}
            </button>
          )}
        </div>

        {/* ── OUTPUT ──────────────────────────────────────────── */}
        {plan && (
          <div className="space-y-4">
            {/* Risk Indicator Banner */}
            <div className={`flex items-start gap-3 p-4 rounded-xl border ${RISK_BG[plan.riskIndicator.level]}`}>
              <AlertTriangle className={`w-5 h-5 shrink-0 mt-0.5 ${RISK_COLORS[plan.riskIndicator.level]}`} />
              <div>
                <p className={`font-semibold text-sm ${RISK_COLORS[plan.riskIndicator.level]}`}>
                  {plan.riskIndicator.label}
                </p>
                <ul className="mt-1 space-y-1">
                  {plan.riskIndicator.details.map((d, i) => (
                    <li key={i} className="text-xs text-white/60">{d}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Increment Cards */}
            <SectionCard
              title="MVP Scope — Increment 1"
              icon={Zap}
              items={plan.mvpScope}
              color="border-violet-400/20 bg-violet-400/5"
            />
            <SectionCard
              title="Increment 2 — Optimization"
              icon={Shield}
              items={plan.increment2}
              color="border-blue-400/20 bg-blue-400/5"
            />
            <SectionCard
              title="Increment 3 — Scale & Automation"
              icon={Rocket}
              items={plan.increment3}
              color="border-cyan-400/20 bg-cyan-400/5"
            />
            <SectionCard
              title="Rollout Strategy"
              icon={Clock}
              items={plan.rolloutStrategy}
              color="border-amber-400/20 bg-amber-400/5"
            />
            <SectionCard
              title="Post-Release Monitoring Checklist"
              icon={BarChart3}
              items={plan.postReleaseChecklist}
              color="border-emerald-400/20 bg-emerald-400/5"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ReleasePlanner;
