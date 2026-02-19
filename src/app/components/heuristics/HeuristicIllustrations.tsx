import React from 'react';
import { motion } from 'motion/react';

// ═══════════════════════════════════════════════════════════════
// Mini UI Illustrations for each Nielsen Heuristic + UX Law
// Built with DS-style elements — scaled to fill large card areas
// ═══════════════════════════════════════════════════════════════

const Wrapper = ({ children, bg }: { children: React.ReactNode; bg: string }) => (
  <div className={`w-full h-full flex items-center justify-center ${bg} p-6 md:p-8 select-none overflow-hidden`}>
    {children}
  </div>
);

// ─── H1: Visibility of System Status ─────────────────────────
function H1Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950">
      <div className="w-full max-w-xs space-y-5">
        {/* Mini phone / app frame */}
        <div className="bg-zinc-800/60 rounded-2xl border border-zinc-700/40 p-4 shadow-2xl shadow-indigo-500/5">
          {/* Top bar */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="size-2 rounded-full bg-red-500/60" />
              <div className="size-2 rounded-full bg-yellow-500/60" />
              <div className="size-2 rounded-full bg-green-500/60" />
            </div>
            <div className="flex-1 h-3 bg-zinc-700/50 rounded-full" />
          </div>
          {/* Upload card */}
          <div className="bg-zinc-900/80 rounded-xl p-4 border border-zinc-700/30 space-y-3">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
              </div>
              <div className="flex-1">
                <span className="text-xs text-zinc-200 font-semibold block">Uploading file...</span>
                <span className="text-[10px] text-zinc-500">photo-final-v3.jpg · 4.2 MB</span>
              </div>
            </div>
            {/* Progress bar */}
            <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-blue-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '72%' }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              />
            </div>
            <div className="flex justify-between">
              <span className="text-[10px] text-zinc-500">~12 sec remaining</span>
              <span className="text-xs text-indigo-400 font-mono font-bold">72%</span>
            </div>
          </div>
        </div>

        {/* Toast notifications */}
        <div className="space-y-2.5">
          <motion.div
            className="bg-emerald-500/10 border border-emerald-500/25 rounded-xl px-4 py-2.5 flex items-center gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
          >
            <div className="size-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.7L6.5 2.3" stroke="#34d399" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-xs text-emerald-300 font-medium">3 items synced successfully</span>
          </motion.div>
          <motion.div
            className="bg-blue-500/10 border border-blue-500/25 rounded-xl px-4 py-2.5 flex items-center gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
          >
            <div className="size-6 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <div className="size-2 rounded-full bg-blue-400 animate-pulse" />
            </div>
            <span className="text-xs text-blue-300 font-medium">Sarah is typing...</span>
          </motion.div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H2: Match Between System & Real World ────────────────────
function H2Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950">
      <div className="flex flex-col items-center gap-6">
        {/* Icon grid */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>, label: 'Delete' },
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>, label: 'Files' },
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>, label: 'Cart' },
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>, label: 'Favorites' },
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>, label: 'Security' },
            { icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: 'Mail' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="size-16 rounded-2xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center hover:border-indigo-500/40 transition-colors">
                {item.icon}
              </div>
              <span className="text-[10px] text-zinc-400 font-medium">{item.label}</span>
            </div>
          ))}
        </div>
        {/* Label */}
        <div className="bg-zinc-800/50 rounded-lg px-4 py-2 border border-zinc-700/30">
          <span className="text-[11px] text-zinc-400 italic">Real-world metaphors users already know</span>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H3: User Control & Freedom ──────────────────────────────
function H3Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950">
      <div className="w-full max-w-xs space-y-5">
        {/* Keyboard shortcut keys — large */}
        <div className="flex items-center justify-center gap-2">
          <div className="px-4 py-3 bg-zinc-800 border border-zinc-600 rounded-xl shadow-[0_3px_0_0_rgba(63,63,70,0.8)]">
            <span className="text-sm text-zinc-200 font-mono font-bold">Ctrl</span>
          </div>
          <span className="text-zinc-600 text-lg font-bold">+</span>
          <div className="px-5 py-3 bg-zinc-800 border border-zinc-600 rounded-xl shadow-[0_3px_0_0_rgba(63,63,70,0.8)]">
            <span className="text-sm text-zinc-200 font-mono font-bold">Z</span>
          </div>
        </div>

        {/* Undo toast — large */}
        <motion.div
          className="bg-zinc-800/80 border border-zinc-700/50 rounded-xl p-4 flex items-center justify-between shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-zinc-700/50 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7v6h6"/><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6.69 3L3 13"/>
              </svg>
            </div>
            <div>
              <span className="text-xs text-zinc-200 font-semibold block">Item deleted</span>
              <span className="text-[10px] text-zinc-500">1 project moved to trash</span>
            </div>
          </div>
          <button className="px-3 py-1.5 bg-indigo-500/20 text-xs text-indigo-300 font-bold rounded-lg border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors">
            UNDO
          </button>
        </motion.div>

        {/* Exit / ESC row */}
        <div className="flex items-center justify-center gap-3">
          <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl px-4 py-2.5 flex items-center gap-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            <span className="text-xs text-zinc-400 font-medium">Close anytime</span>
            <div className="px-2 py-0.5 bg-zinc-700 rounded text-[9px] text-zinc-400 font-mono">ESC</div>
          </div>
        </div>

        {/* Version history */}
        <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-3">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-2 block">Version History</span>
          <div className="space-y-1.5">
            {['Now — Current', '2m ago — Moved layer', '5m ago — Changed color'].map((v, i) => (
              <div key={i} className={`flex items-center gap-2 px-2 py-1 rounded-lg ${i === 0 ? 'bg-indigo-500/10 border border-indigo-500/20' : ''}`}>
                <div className={`size-2 rounded-full ${i === 0 ? 'bg-indigo-400' : 'bg-zinc-600'}`} />
                <span className={`text-[10px] ${i === 0 ? 'text-indigo-300 font-medium' : 'text-zinc-500'}`}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H4: Consistency & Standards ─────────────────────────────
function H4Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950">
      <div className="space-y-5 w-full max-w-xs">
        {/* Two consistent mini product cards */}
        <div className="flex gap-3">
          {[1, 2].map(i => (
            <div key={i} className="flex-1 bg-zinc-800/80 rounded-xl border border-zinc-700/50 p-3 space-y-2.5 shadow-lg">
              <div className="w-full h-16 bg-zinc-700/40 rounded-lg" />
              <div className="h-2 bg-zinc-700/40 rounded w-3/4" />
              <div className="h-2 bg-zinc-700/30 rounded w-1/2" />
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-300 font-bold">$29</span>
                <div className="size-4 rounded bg-zinc-700/40 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                </div>
              </div>
              <div className="w-full h-7 bg-indigo-500/80 rounded-lg flex items-center justify-center">
                <span className="text-[10px] text-white font-bold">Add to Cart</span>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation bar example */}
        <div className="bg-zinc-800/80 rounded-xl border border-zinc-700/50 px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-5 bg-indigo-500 rounded" />
            <span className="text-[10px] text-zinc-300 font-bold">Brand</span>
          </div>
          <div className="flex gap-3">
            {['Home', 'Products', 'About'].map((l, i) => (
              <span key={i} className={`text-[10px] ${i === 0 ? 'text-indigo-400 font-semibold' : 'text-zinc-500'}`}>{l}</span>
            ))}
          </div>
          <div className="size-5 bg-indigo-500/20 rounded-full flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </div>
        {/* Same pattern label */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex gap-1.5">
            <div className="size-1.5 rounded-full bg-indigo-400" />
            <div className="size-1.5 rounded-full bg-indigo-400" />
            <div className="size-1.5 rounded-full bg-zinc-600" />
          </div>
          <span className="text-[10px] text-zinc-500 tracking-widest uppercase font-semibold">Same pattern everywhere</span>
          <div className="flex gap-1.5">
            <div className="size-1.5 rounded-full bg-zinc-600" />
            <div className="size-1.5 rounded-full bg-indigo-400" />
            <div className="size-1.5 rounded-full bg-indigo-400" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H5: Error Prevention ────────────────────────────────────
function H5Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-red-950/20 to-slate-950">
      <div className="w-full max-w-xs">
        {/* Modal dialog — large */}
        <div className="bg-zinc-800/90 rounded-2xl border border-zinc-700/50 overflow-hidden shadow-2xl shadow-red-500/5">
          {/* Header */}
          <div className="px-5 py-4 border-b border-zinc-700/40 flex items-center gap-3">
            <div className="size-8 rounded-full bg-amber-500/15 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
            </div>
            <div>
              <span className="text-sm text-zinc-200 font-bold block">Delete this project?</span>
              <span className="text-[10px] text-zinc-500">This action cannot be undone</span>
            </div>
          </div>
          {/* Body */}
          <div className="px-5 py-5 space-y-4">
            <p className="text-xs text-zinc-400 leading-relaxed">
              To confirm, type <span className="text-red-400 font-mono font-bold bg-red-500/10 px-1.5 py-0.5 rounded">"my-project"</span> below:
            </p>
            <div className="h-10 bg-zinc-900 rounded-xl border border-zinc-700 flex items-center px-3">
              <motion.span
                className="text-sm text-zinc-300 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                my-proj<span className="animate-pulse text-indigo-400">|</span>
              </motion.span>
            </div>
            {/* Checklist */}
            <div className="space-y-2">
              {['All data will be permanently deleted', 'Team members will lose access', 'This cannot be undone'].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="size-3.5 rounded border border-zinc-600 flex items-center justify-center">
                    {i < 2 && <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4L3.2 5.7L6.5 2.3" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                  </div>
                  <span className="text-[10px] text-zinc-500">{text}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className="px-5 py-4 border-t border-zinc-700/40 flex gap-3 justify-end">
            <div className="px-4 py-2 bg-zinc-700 rounded-lg text-xs text-zinc-300 font-semibold">Cancel</div>
            <div className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-xs text-red-300 font-semibold opacity-50">Delete Project</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H6: Recognition Rather Than Recall ──────────────────────
function H6Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950">
      <div className="w-full max-w-xs space-y-4">
        {/* Search with autocomplete */}
        <div className="bg-zinc-800/80 rounded-xl border border-zinc-700/50 overflow-hidden shadow-xl">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-700/30">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span className="text-sm text-zinc-300">React Ho...</span>
            <span className="text-sm text-zinc-600 animate-pulse">|</span>
          </div>
          <div className="p-2 space-y-0.5">
            {[
              { label: 'React Hooks Guide', sub: 'Viewed 2 days ago' },
              { label: 'React Router v7', sub: 'Viewed last week' },
              { label: 'React Hook Form', sub: 'Popular' },
            ].map((item, i) => (
              <div key={i} className={`px-3 py-2 rounded-lg text-xs ${i === 0 ? 'bg-indigo-500/10 border border-indigo-500/15' : ''} flex items-center gap-3`}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? '#818cf8' : '#52525b'} strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
                <div>
                  <span className={`block ${i === 0 ? 'text-indigo-300 font-semibold' : 'text-zinc-400'}`}>{item.label}</span>
                  <span className="text-[9px] text-zinc-600">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Recently viewed */}
        <div className="bg-zinc-800/60 rounded-xl border border-zinc-700/40 p-4">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold block mb-3">Recently Viewed</span>
          <div className="flex gap-2.5">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex-1">
                <div className="aspect-square bg-zinc-700/40 rounded-lg mb-1.5" />
                <div className="h-1.5 bg-zinc-700/30 rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H7: Flexibility & Efficiency of Use ─────────────────────
function H7Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950">
      <div className="w-full max-w-xs space-y-5">
        {/* Beginner path */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="size-5 rounded bg-zinc-700 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Beginner</span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {['File', 'Edit', 'Copy'].map((label, i) => (
              <div key={label} className="flex items-center gap-1.5">
                <div className="px-2.5 py-1.5 bg-zinc-800 border border-zinc-700/50 rounded-lg text-[10px] text-zinc-400 font-medium">{label}</div>
                {i < 2 && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#52525b" strokeWidth="3"><path d="M9 18l6-6-6-6"/></svg>}
              </div>
            ))}
            <span className="text-[10px] text-zinc-600 ml-1">3 clicks</span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-xs text-zinc-600 font-bold">VS</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* Expert path */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 mb-1">
            <div className="size-5 rounded bg-indigo-500/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <span className="text-[10px] text-indigo-400 uppercase tracking-widest font-semibold">Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3.5 py-2 bg-zinc-800 border border-zinc-600 rounded-xl shadow-[0_3px_0_0_rgba(63,63,70,0.8)]">
              <span className="text-xs text-zinc-200 font-mono font-bold">⌘</span>
            </div>
            <span className="text-zinc-600 text-sm font-bold">+</span>
            <div className="px-3.5 py-2 bg-zinc-800 border border-zinc-600 rounded-xl shadow-[0_3px_0_0_rgba(63,63,70,0.8)]">
              <span className="text-xs text-zinc-200 font-mono font-bold">C</span>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"><path d="M13 17l5-5-5-5M6 17l5-5-5-5"/></svg>
            <span className="text-sm text-indigo-300 font-bold">Instant!</span>
          </div>
        </div>

        {/* Command palette */}
        <div className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-3">
          <div className="flex items-center gap-2 px-2 py-1.5 bg-zinc-900/80 rounded-lg border border-zinc-700/30 mb-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span className="text-[10px] text-zinc-500">Type a command...</span>
            <span className="ml-auto text-[8px] text-zinc-600 font-mono bg-zinc-800 px-1.5 py-0.5 rounded">⌘K</span>
          </div>
          <div className="space-y-1">
            {['New File', 'Open Settings', 'Toggle Theme'].map((cmd, i) => (
              <div key={i} className="flex items-center justify-between px-2 py-1 rounded-lg hover:bg-zinc-700/30">
                <span className="text-[10px] text-zinc-400">{cmd}</span>
                <span className="text-[8px] text-zinc-600 font-mono">{['⌘N', '⌘,', '⌘⇧T'][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H8: Aesthetic & Minimalist Design ───────────────────────
function H8Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-slate-950 to-blue-950">
      <div className="flex gap-5 items-center">
        {/* Cluttered (BAD) */}
        <div className="relative">
          <div className="w-32 bg-zinc-800/80 rounded-xl border border-zinc-700/50 p-2.5 space-y-1.5 opacity-35">
            <div className="flex gap-1">
              <div className="h-1.5 flex-1 bg-red-500/60 rounded" />
              <div className="h-1.5 flex-1 bg-blue-500/60 rounded" />
              <div className="h-1.5 flex-1 bg-green-500/60 rounded" />
            </div>
            <div className="h-1.5 bg-zinc-600 rounded" />
            <div className="h-1.5 bg-zinc-600 rounded" />
            <div className="flex gap-1">
              <div className="h-4 flex-1 bg-zinc-700 rounded" />
              <div className="h-4 flex-1 bg-zinc-700 rounded" />
            </div>
            <div className="h-1.5 bg-zinc-600 rounded" />
            <div className="h-1.5 bg-zinc-600 rounded w-2/3" />
            <div className="flex gap-1">
              <div className="h-3 flex-1 bg-yellow-500/30 rounded" />
              <div className="h-3 flex-1 bg-purple-500/30 rounded" />
              <div className="h-3 flex-1 bg-pink-500/30 rounded" />
            </div>
            <div className="h-1.5 bg-zinc-600 rounded w-1/2" />
            <div className="flex gap-1">
              <div className="h-2.5 flex-1 bg-orange-500/30 rounded" />
              <div className="h-2.5 flex-1 bg-teal-500/30 rounded" />
            </div>
            {/* Popup overlay */}
            <div className="absolute top-3 right-3 w-14 bg-zinc-700/80 rounded p-1 border border-zinc-600/50 space-y-0.5">
              <div className="h-1 bg-zinc-500 rounded" />
              <div className="h-1 bg-zinc-500 rounded w-2/3" />
              <div className="h-2 bg-red-500/40 rounded" />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 size-6 bg-red-500/80 rounded-full flex items-center justify-center shadow-lg">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </div>
          <p className="text-center mt-2 text-[10px] text-red-400 font-semibold">Cluttered</p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14m-4-4l4 4-4 4"/></svg>
          <span className="text-[8px] text-zinc-600">Simplify</span>
        </div>

        {/* Clean (GOOD) */}
        <div className="relative">
          <div className="w-32 bg-zinc-800/80 rounded-xl border border-indigo-500/30 p-4 space-y-3">
            <div className="h-2 bg-zinc-600 rounded w-1/3 mx-auto" />
            <div className="h-14 bg-zinc-700/40 rounded-xl" />
            <div className="h-1.5 bg-zinc-700 rounded w-3/4 mx-auto" />
            <div className="h-1 bg-zinc-700/60 rounded w-1/2 mx-auto" />
            <div className="h-8 bg-indigo-500/80 rounded-lg flex items-center justify-center">
              <span className="text-[9px] text-white font-bold">Get Started</span>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 size-6 bg-emerald-500/80 rounded-full flex items-center justify-center shadow-lg">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M4 12l5 5L20 6"/></svg>
          </div>
          <p className="text-center mt-2 text-[10px] text-emerald-400 font-semibold">Minimal</p>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H9: Help Users Recognize & Recover from Errors ──────────
function H9Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-red-950/15 to-slate-950">
      <div className="w-full max-w-xs space-y-4">
        {/* Bad error */}
        <div className="relative">
          <div className="bg-red-500/8 border border-red-500/15 rounded-xl p-4 opacity-50">
            <div className="flex items-center gap-2 mb-2">
              <div className="size-5 rounded-full bg-red-500/20 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </div>
              <span className="text-xs text-red-300 font-mono font-bold">Error 0x80070005</span>
            </div>
            <p className="text-[10px] text-zinc-500 line-through">An unknown error occurred. Contact system administrator.</p>
          </div>
          <div className="absolute -top-2 -right-2 size-6 bg-red-500/80 rounded-full flex items-center justify-center shadow-lg">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14m-4-4l4 4 4-4"/></svg>
        </div>

        {/* Good error */}
        <div className="relative">
          <div className="bg-zinc-800/80 border border-amber-500/20 rounded-xl p-5 shadow-lg">
            <div className="flex items-start gap-3 mb-3">
              <div className="size-8 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"><path d="M12 9v4m0 4h.01"/></svg>
              </div>
              <div>
                <span className="text-sm text-zinc-200 font-bold block">Password too short</span>
                <span className="text-[11px] text-zinc-400 block mt-1">Use at least 8 characters, including a number and a symbol.</span>
              </div>
            </div>
            {/* Password strength meter */}
            <div className="flex gap-1 mb-3">
              <div className="h-1.5 flex-1 bg-red-500/60 rounded-full" />
              <div className="h-1.5 flex-1 bg-zinc-700 rounded-full" />
              <div className="h-1.5 flex-1 bg-zinc-700 rounded-full" />
              <div className="h-1.5 flex-1 bg-zinc-700 rounded-full" />
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-lg text-[10px] text-indigo-300 font-bold">
                Try again
              </div>
              <div className="px-3 py-1.5 bg-zinc-700/50 rounded-lg text-[10px] text-zinc-400 font-medium">
                Need help?
              </div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 size-6 bg-emerald-500/80 rounded-full flex items-center justify-center shadow-lg">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M4 12l5 5L20 6"/></svg>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── H10: Help & Documentation ───────────────────────────────
function H10Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950">
      <div className="w-full max-w-xs space-y-4">
        {/* Contextual tooltip on an input */}
        <div className="relative bg-zinc-800/80 rounded-xl border border-zinc-700/50 p-4">
          <span className="text-[10px] text-zinc-500 block mb-1.5">Project Name</span>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-8 bg-zinc-900 rounded-lg border border-zinc-700 flex items-center px-3">
              <span className="text-xs text-zinc-400">My Portfolio</span>
            </div>
            <div className="size-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
              <span className="text-[10px] text-indigo-300 font-bold">?</span>
            </div>
          </div>
          {/* Tooltip */}
          <div className="absolute -top-8 right-2 bg-indigo-600/95 rounded-lg px-3 py-1.5 shadow-xl">
            <span className="text-[10px] text-white">Use a unique, descriptive name</span>
            <div className="absolute -bottom-1 right-4 w-2 h-2 bg-indigo-600/95 rotate-45" />
          </div>
        </div>

        {/* Help center search */}
        <div className="bg-zinc-800/80 rounded-xl border border-zinc-700/50 p-4">
          <div className="flex items-center gap-2 mb-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2"><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/></svg>
            <span className="text-xs text-zinc-300 font-bold">Help Center</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-zinc-900/80 rounded-lg border border-zinc-700/30 mb-3">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <span className="text-[10px] text-zinc-500">How to export...</span>
          </div>
          <div className="space-y-1.5">
            {[
              { label: 'Getting Started Guide', icon: '📖' },
              { label: 'Export as PDF', icon: '📄' },
              { label: 'Keyboard Shortcuts', icon: '⌨️' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg hover:bg-zinc-700/30">
                <span className="text-xs">{item.icon}</span>
                <span className="text-[11px] text-zinc-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── LAW1: Hick's Law ────────────────────────────────────────
function Law1Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-purple-950 via-slate-950 to-fuchsia-950">
      <div className="flex gap-5 items-start">
        {/* Too many options (BAD) */}
        <div className="relative">
          <div className="w-28 bg-zinc-800/80 rounded-xl border border-zinc-700/50 p-2 space-y-1 opacity-35">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-4 bg-zinc-700/50 rounded flex items-center px-2">
                <span className="text-[6px] text-zinc-500">Option {i + 1}</span>
              </div>
            ))}
          </div>
          <div className="absolute -top-2 -right-2 size-6 bg-red-500/80 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-[10px] text-white font-bold">!</span>
          </div>
          <p className="text-center mt-2 text-[10px] text-red-400 font-semibold">Overwhelmed</p>
        </div>

        {/* Arrow */}
        <div className="mt-16">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14m-4-4l4 4-4 4"/></svg>
        </div>

        {/* Chunked (GOOD) */}
        <div className="relative">
          <div className="w-32 bg-zinc-800/80 rounded-xl border border-purple-500/30 p-3 space-y-2.5">
            {/* Step indicator */}
            <div className="flex items-center gap-1.5">
              <div className="size-4 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-[7px] text-white font-bold">1</span>
              </div>
              <div className="h-0.5 flex-1 bg-zinc-700 rounded" />
              <div className="size-4 rounded-full bg-zinc-700 flex items-center justify-center">
                <span className="text-[7px] text-zinc-400 font-bold">2</span>
              </div>
              <div className="h-0.5 flex-1 bg-zinc-700 rounded" />
              <div className="size-4 rounded-full bg-zinc-700 flex items-center justify-center">
                <span className="text-[7px] text-zinc-400 font-bold">3</span>
              </div>
            </div>
            <span className="text-[9px] text-purple-400 font-bold block">Step 1: Account</span>
            {['Name', 'Email'].map((label, i) => (
              <div key={i} className="h-6 bg-zinc-900/60 rounded-lg border border-zinc-700/30 flex items-center px-2.5">
                <span className="text-[9px] text-zinc-500">{label}</span>
              </div>
            ))}
            <div className="h-7 bg-purple-500/80 rounded-lg flex items-center justify-center">
              <span className="text-[9px] text-white font-bold">Next →</span>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 size-6 bg-emerald-500/80 rounded-full flex items-center justify-center shadow-lg">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M4 12l5 5L20 6"/></svg>
          </div>
          <p className="text-center mt-2 text-[10px] text-emerald-400 font-semibold">Focused</p>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── LAW2: Fitts's Law ───────────────────────────────────────
function Law2Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-purple-950 via-slate-950 to-fuchsia-950">
      <div className="w-full max-w-xs space-y-6">
        {/* Small target (BAD) */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded bg-red-500/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </div>
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">Hard to click</span>
          </div>
          <div className="bg-zinc-800/60 rounded-xl border border-zinc-700/40 p-4 flex items-center justify-between">
            <div className="space-y-1.5 flex-1">
              <div className="h-2 bg-zinc-700/40 rounded w-3/4" />
              <div className="h-2 bg-zinc-700/30 rounded w-1/2" />
            </div>
            {/* Tiny button */}
            <div className="relative">
              <div className="px-1.5 py-0.5 bg-red-500/15 border border-red-500/20 rounded text-[7px] text-red-300 opacity-60">
                delete
              </div>
              {/* Target ring */}
              <div className="absolute inset-0 -m-3 border border-dashed border-red-500/30 rounded-full" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-zinc-800" />
          <span className="text-xs text-zinc-600 font-bold">VS</span>
          <div className="flex-1 h-px bg-zinc-800" />
        </div>

        {/* Large target (GOOD) */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded bg-emerald-500/20 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round"><path d="M4 12l5 5L20 6"/></svg>
            </div>
            <span className="text-[10px] text-purple-400 uppercase tracking-widest font-semibold">Easy to click</span>
          </div>
          <motion.div
            className="w-full h-14 bg-gradient-to-r from-purple-600 to-fuchsia-500 rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-purple-500/20"
            whileHover={{ scale: 1.02 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14m-4-4l4 4-4 4"/></svg>
            <span className="text-sm text-white font-bold">Get Started Now</span>
          </motion.div>
          <div className="flex justify-center">
            <span className="text-[9px] text-zinc-500 bg-zinc-800/60 px-2.5 py-1 rounded-full">44px minimum touch target</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ─── A11Y1: Perceivable ──────────────────────────────────────
function A11y1Illustration() {
  return (
    <Wrapper bg="bg-gradient-to-br from-emerald-950 via-slate-950 to-green-950">
      <div className="w-full max-w-xs space-y-4">
        {/* Color-only vs Color + Icon + Label */}
        <div className="flex gap-3">
          {/* BAD */}
          <div className="flex-1 bg-zinc-800/80 rounded-xl border border-zinc-700/50 p-4 opacity-50 relative">
            <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold block mb-3">Color only</span>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="size-4 rounded-full bg-green-500" />
                <div className="h-2 bg-zinc-700/40 rounded flex-1" />
              </div>
              <div className="flex items-center gap-2.5">
                <div className="size-4 rounded-full bg-red-500" />
                <div className="h-2 bg-zinc-700/40 rounded flex-1" />
              </div>
              <div className="flex items-center gap-2.5">
                <div className="size-4 rounded-full bg-yellow-500" />
                <div className="h-2 bg-zinc-700/40 rounded flex-1" />
              </div>
            </div>
            <div className="absolute -top-2 -right-2 size-5 bg-red-500/80 rounded-full flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </div>
          </div>
          {/* GOOD */}
          <div className="flex-1 bg-zinc-800/80 rounded-xl border border-emerald-500/30 p-4 relative">
            <span className="text-[9px] text-emerald-400 uppercase tracking-widest font-semibold block mb-3">Color + Icon</span>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <div className="size-4 rounded-full bg-green-500 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"><path d="M4 12l5 5L20 6"/></svg>
                </div>
                <span className="text-[10px] text-zinc-300 font-medium">Active</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="size-4 rounded-full bg-red-500 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </div>
                <span className="text-[10px] text-zinc-300 font-medium">Error</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="size-4 rounded-full bg-yellow-500 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"><path d="M12 9v4m0 4h.01"/></svg>
                </div>
                <span className="text-[10px] text-zinc-300 font-medium">Warning</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 size-5 bg-emerald-500/80 rounded-full flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M4 12l5 5L20 6"/></svg>
            </div>
          </div>
        </div>

        {/* Alt text example */}
        <div className="bg-zinc-800/80 rounded-xl border border-zinc-700/50 p-4 flex items-center gap-4">
          <div className="size-14 bg-zinc-700/40 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#71717a" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
          </div>
          <div>
            <span className="text-[10px] text-emerald-400 font-mono font-bold block mb-0.5">alt=</span>
            <span className="text-xs text-zinc-300 leading-relaxed">"Team collaborating around a whiteboard"</span>
          </div>
        </div>

        {/* Contrast checker */}
        <div className="bg-zinc-800/80 rounded-xl border border-zinc-700/50 p-4">
          <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold block mb-2.5">Contrast Ratio</span>
          <div className="flex items-center gap-3">
            <div className="flex-1 h-8 bg-zinc-900 rounded-lg flex items-center px-3">
              <span className="text-xs text-white font-semibold">White on Dark</span>
            </div>
            <div className="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
              <span className="text-[10px] text-emerald-300 font-bold">AAA ✓</span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

// ═══════════════════════════════════════════════════════════════
// EXPORT MAP
// ═══════════════════════════════════════════════════════════════

export const heuristicIllustrations: Record<string, React.FC> = {
  h1: H1Illustration,
  h2: H2Illustration,
  h3: H3Illustration,
  h4: H4Illustration,
  h5: H5Illustration,
  h6: H6Illustration,
  h7: H7Illustration,
  h8: H8Illustration,
  h9: H9Illustration,
  h10: H10Illustration,
  law1: Law1Illustration,
  law2: Law2Illustration,
  a11y1: A11y1Illustration,
};