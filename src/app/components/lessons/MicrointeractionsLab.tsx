import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { useLanguage } from '../layout/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Bell,
  ShoppingCart,
  Check,
  X,
  Loader2,
  Send,
  Trash2,
  Eye,
  EyeOff,
  RotateCcw,
  Zap,
  MousePointer,
  Info,
  Copy,
  Plus,
  Volume2,
  VolumeX,
  ArrowRight,
  RefreshCw,
  Sparkles,
  GripVertical,
  Smartphone,
  Accessibility,
  Mail,
  Archive,
  Star,
  Inbox,
} from 'lucide-react';
import { Switch } from '../ui/switch';
import { Input } from '../ui/input';
import { Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import { Skeleton } from '../ui/skeleton';
import { copyToClipboard } from '../../utils/clipboard';


// ─── Reduced Motion Context ─────────────────────────────────

const ReducedMotionContext = createContext(false);

function useReducedMotion() {
  return useContext(ReducedMotionContext);
}

/** Returns transition props respecting reduced motion preference */
function useMotionProps() {
  const reduced = useReducedMotion();
  return {
    /** Duration-based transition or instant */
    transition: (dur: number, ease: string = 'easeOut') =>
      reduced ? { duration: 0 } : { duration: dur, ease },
    /** Spring transition or instant */
    spring: (stiffness = 300, damping = 20) =>
      reduced ? { duration: 0 } : { type: 'spring' as const, stiffness, damping },
    /** Whether to skip visual-only animations (particles, bounces) */
    skipDecorative: reduced,
  };
}


// ─── Types ───────────────────────────────────────────────────

interface MicrointeractionDemo {
  id: string;
  title: { en: string; es: string };
  category: { en: string; es: string };
  anatomy: {
    trigger: { en: string; es: string };
    rules: { en: string; es: string };
    feedback: { en: string; es: string };
    loops: { en: string; es: string };
  };
}


// ─── Demo Data ───────────────────────────────────────────────

const DEMOS: MicrointeractionDemo[] = [
  {
    id: 'like-button',
    title: { en: 'Like / Favorite', es: 'Me Gusta / Favorito' },
    category: { en: 'Engagement', es: 'Engagement' },
    anatomy: {
      trigger: { en: 'User taps the heart icon', es: 'El usuario toca el icono de corazon' },
      rules: { en: 'Toggle between liked / not liked states', es: 'Alternar entre estados me gusta / no me gusta' },
      feedback: { en: 'Scale bounce + color fill + particle burst', es: 'Rebote de escala + relleno de color + explosion de particulas' },
      loops: { en: 'Counter increments/decrements, persists across sessions', es: 'El contador incrementa/decrementa, persiste entre sesiones' },
    },
  },
  {
    id: 'submit-button',
    title: { en: 'Submit Button States', es: 'Estados de Boton Enviar' },
    category: { en: 'System Status', es: 'Estado del Sistema' },
    anatomy: {
      trigger: { en: 'User clicks the submit button', es: 'El usuario hace clic en el boton enviar' },
      rules: { en: 'Idle → Loading → Success / Error', es: 'Inactivo → Cargando → Exito / Error' },
      feedback: { en: 'Spinner replaces label, then checkmark or X appears', es: 'Spinner reemplaza la etiqueta, luego aparece un check o X' },
      loops: { en: 'Resets after 2 seconds to allow retry', es: 'Se reinicia despues de 2 segundos para permitir reintento' },
    },
  },
  {
    id: 'toggle-switch',
    title: { en: 'Toggle Switch', es: 'Interruptor Toggle' },
    category: { en: 'Settings', es: 'Configuracion' },
    anatomy: {
      trigger: { en: 'User clicks the switch', es: 'El usuario hace clic en el interruptor' },
      rules: { en: 'Binary ON/OFF state change', es: 'Cambio de estado binario ON/OFF' },
      feedback: { en: 'Thumb slides with spring animation, background color changes', es: 'El pulgar desliza con animacion de resorte, el color de fondo cambia' },
      loops: { en: 'State persists in user preferences', es: 'El estado persiste en preferencias del usuario' },
    },
  },
  {
    id: 'notification-badge',
    title: { en: 'Notification Badge', es: 'Badge de Notificacion' },
    category: { en: 'Alerts', es: 'Alertas' },
    anatomy: {
      trigger: { en: 'New event arrives in the system', es: 'Nuevo evento llega al sistema' },
      rules: { en: 'Counter increments; badge appears when count > 0', es: 'El contador incrementa; el badge aparece cuando el conteo > 0' },
      feedback: { en: 'Badge scales in with bounce, number updates', es: 'El badge escala con rebote, el numero se actualiza' },
      loops: { en: 'Resets to 0 when user views notifications', es: 'Se reinicia a 0 cuando el usuario ve las notificaciones' },
    },
  },
  {
    id: 'password-strength',
    title: { en: 'Password Strength', es: 'Fortaleza de Contrasena' },
    category: { en: 'Validation', es: 'Validacion' },
    anatomy: {
      trigger: { en: 'User types in the password field', es: 'El usuario escribe en el campo de contrasena' },
      rules: { en: 'Evaluate length, uppercase, numbers, symbols', es: 'Evaluar longitud, mayusculas, numeros, simbolos' },
      feedback: { en: 'Progress bar fills + color shifts (red → yellow → green)', es: 'Barra de progreso se llena + color cambia (rojo → amarillo → verde)' },
      loops: { en: 'Continuously updates as user types', es: 'Se actualiza continuamente mientras el usuario escribe' },
    },
  },
  {
    id: 'skeleton-loading',
    title: { en: 'Skeleton Loading', es: 'Carga Skeleton' },
    category: { en: 'Loading', es: 'Carga' },
    anatomy: {
      trigger: { en: 'Content starts loading (page load or action)', es: 'El contenido comienza a cargar (carga de pagina o accion)' },
      rules: { en: 'Placeholder mimics the final layout shape', es: 'El placeholder imita la forma del layout final' },
      feedback: { en: 'Pulse animation signals activity; content fades in when ready', es: 'Animacion de pulso senala actividad; contenido aparece cuando esta listo' },
      loops: { en: 'Disappears once content is fully loaded', es: 'Desaparece una vez que el contenido esta completamente cargado' },
    },
  },
  {
    id: 'add-to-cart',
    title: { en: 'Add to Cart', es: 'Agregar al Carrito' },
    category: { en: 'E-Commerce', es: 'E-Commerce' },
    anatomy: {
      trigger: { en: 'User clicks "Add to Cart" button', es: 'El usuario hace clic en "Agregar al Carrito"' },
      rules: { en: 'Item added; counter in cart icon updates', es: 'Articulo agregado; el contador del icono de carrito se actualiza' },
      feedback: { en: 'Button label changes, cart icon bounces with new count', es: 'La etiqueta del boton cambia, icono de carrito rebota con nuevo conteo' },
      loops: { en: 'Repeated additions increment the counter', es: 'Adiciones repetidas incrementan el contador' },
    },
  },
  {
    id: 'delete-confirm',
    title: { en: 'Delete Confirmation', es: 'Confirmacion de Eliminacion' },
    category: { en: 'Destructive', es: 'Destructivo' },
    anatomy: {
      trigger: { en: 'User clicks the delete icon', es: 'El usuario hace clic en el icono de eliminar' },
      rules: { en: 'First click reveals confirmation; second confirms deletion', es: 'Primer clic revela confirmacion; segundo confirma eliminacion' },
      feedback: { en: 'Button transitions to red "Confirm?" state with countdown', es: 'El boton transiciona a estado rojo "Confirmar?" con cuenta regresiva' },
      loops: { en: 'Auto-cancels after 3 seconds if no confirmation', es: 'Se auto-cancela despues de 3 segundos sin confirmacion' },
    },
  },
  {
    id: 'copy-clipboard',
    title: { en: 'Copy to Clipboard', es: 'Copiar al Portapapeles' },
    category: { en: 'Utility', es: 'Utilidad' },
    anatomy: {
      trigger: { en: 'User clicks the copy icon', es: 'El usuario hace clic en el icono de copiar' },
      rules: { en: 'Text is copied; icon swaps to checkmark', es: 'Texto copiado; icono cambia a check' },
      feedback: { en: 'Icon morphs from copy → check with fade transition', es: 'Icono transforma de copiar → check con transicion de desvanecimiento' },
      loops: { en: 'Reverts to copy icon after 2 seconds', es: 'Vuelve al icono de copiar despues de 2 segundos' },
    },
  },
  {
    id: 'drag-reorder',
    title: { en: 'Drag & Drop Reorder', es: 'Arrastrar y Reordenar' },
    category: { en: 'Drag & Drop', es: 'Drag & Drop' },
    anatomy: {
      trigger: { en: 'User grabs the drag handle and moves an item', es: 'El usuario agarra el handle y mueve un elemento' },
      rules: { en: 'Items reorder in real-time based on pointer position', es: 'Los elementos se reordenan en tiempo real segun la posicion del puntero' },
      feedback: { en: 'Dragged item lifts with shadow; others slide to make space', es: 'El elemento arrastrado se eleva con sombra; los demas se deslizan para dar espacio' },
      loops: { en: 'New order persists; user can continue reordering', es: 'El nuevo orden persiste; el usuario puede seguir reordenando' },
    },
  },
  {
    id: 'swipe-actions',
    title: { en: 'Swipe Actions', es: 'Acciones por Deslizar' },
    category: { en: 'Mobile Gesture', es: 'Gesto Movil' },
    anatomy: {
      trigger: { en: 'User swipes a card left or right', es: 'El usuario desliza una tarjeta a la izquierda o derecha' },
      rules: { en: 'Left = archive (threshold 40%), Right = star (threshold 40%)', es: 'Izquierda = archivar (umbral 40%), Derecha = destacar (umbral 40%)' },
      feedback: { en: 'Background color reveals action; icon scales up at threshold', es: 'El color de fondo revela la accion; el icono escala al umbral' },
      loops: { en: 'Card dismissed with undo option; new card appears', es: 'Tarjeta descartada con opcion de deshacer; nueva tarjeta aparece' },
    },
  },
];


// ─── Individual Demo Components ──────────────────────────────

function LikeButtonDemo() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(42);
  const [particles, setParticles] = useState<number[]>([]);
  const mp = useMotionProps();

  const handleLike = () => {
    const next = !liked;
    setLiked(next);
    setCount(c => next ? c + 1 : c - 1);
    if (next && !mp.skipDecorative) {
      setParticles(Array.from({ length: 6 }, (_, i) => i));
      setTimeout(() => setParticles([]), 700);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button onClick={handleLike} className="relative group">
        <motion.div
          animate={liked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
          transition={mp.transition(0.35)}
        >
          <Heart
            className={`size-8 transition-colors duration-200 ${
              liked ? 'text-rose-500 fill-rose-500' : 'text-zinc-500 group-hover:text-zinc-300'
            }`}
          />
        </motion.div>
        <AnimatePresence>
          {particles.map(i => (
            <motion.div
              key={i}
              className="absolute size-1.5 rounded-full bg-rose-400"
              style={{ left: '50%', top: '50%' }}
              initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
              animate={{
                scale: [0, 1.2, 0],
                x: Math.cos((i * 60 * Math.PI) / 180) * 22,
                y: Math.sin((i * 60 * Math.PI) / 180) * 22,
                opacity: [1, 1, 0],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          ))}
        </AnimatePresence>
      </button>
      <motion.span
        key={count}
        initial={{ y: liked ? 8 : -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={mp.transition(0.2)}
        className="text-sm font-medium text-zinc-300 tabular-nums"
      >
        {count}
      </motion.span>
    </div>
  );
}

function SubmitButtonDemo() {
  const { t } = useLanguage();
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const mp = useMotionProps();

  const handleSubmit = () => {
    if (state !== 'idle') return;
    setState('loading');
    setTimeout(() => {
      setState(Math.random() > 0.3 ? 'success' : 'error');
      setTimeout(() => setState('idle'), 2000);
    }, 1500);
  };

  const config = {
    idle: {
      bg: 'bg-indigo-600 hover:bg-indigo-700',
      icon: <Send className="size-4" />,
      label: t({ en: 'Submit', es: 'Enviar' }),
    },
    loading: {
      bg: 'bg-indigo-700',
      icon: <Loader2 className="size-4 animate-spin" />,
      label: t({ en: 'Sending...', es: 'Enviando...' }),
    },
    success: {
      bg: 'bg-emerald-600',
      icon: <Check className="size-4" />,
      label: t({ en: 'Sent!', es: 'Enviado!' }),
    },
    error: {
      bg: 'bg-red-600',
      icon: <X className="size-4" />,
      label: t({ en: 'Error', es: 'Error' }),
    },
  };

  const c = config[state];

  return (
    <motion.button
      onClick={handleSubmit}
      disabled={state !== 'idle'}
      className={`px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-colors flex items-center gap-2 ${c.bg} disabled:cursor-wait`}
      animate={state === 'error' && !mp.skipDecorative ? { x: [0, -6, 6, -4, 4, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={mp.transition(0.15)}
          className="flex items-center gap-2"
        >
          {c.icon} {c.label}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

function ToggleSwitchDemo() {
  const { t } = useLanguage();
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [sound, setSound] = useState(true);

  return (
    <div className="space-y-3 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          {darkMode ? <Eye className="size-4 text-indigo-400" /> : <EyeOff className="size-4 text-zinc-500" />}
          <span className="text-zinc-300">{t({ en: 'Dark Mode', es: 'Modo Oscuro' })}</span>
        </div>
        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Bell className={`size-4 ${notifications ? 'text-amber-400' : 'text-zinc-500'}`} />
          <span className="text-zinc-300">{t({ en: 'Notifications', es: 'Notificaciones' })}</span>
        </div>
        <Switch checked={notifications} onCheckedChange={setNotifications} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          {sound ? <Volume2 className="size-4 text-emerald-400" /> : <VolumeX className="size-4 text-zinc-500" />}
          <span className="text-zinc-300">{t({ en: 'Sound', es: 'Sonido' })}</span>
        </div>
        <Switch checked={sound} onCheckedChange={setSound} />
      </div>
    </div>
  );
}

function NotificationBadgeDemo() {
  const [count, setCount] = useState(0);
  const mp = useMotionProps();

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div className="size-11 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center">
          <Bell className="size-5 text-zinc-300" />
        </div>
        <AnimatePresence>
          {count > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: mp.skipDecorative ? 1 : [0, 1.3, 1] }}
              exit={{ scale: 0 }}
              transition={mp.spring(400, 15)}
              className="absolute -top-1.5 -right-1.5 size-5 bg-rose-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
            >
              {count > 9 ? '9+' : count}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex gap-1.5">
        <button
          onClick={() => setCount(c => c + 1)}
          className="size-8 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-300 transition-colors"
        >
          <Plus className="size-3.5" />
        </button>
        <button
          onClick={() => setCount(0)}
          className="size-8 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg flex items-center justify-center text-zinc-300 transition-colors"
        >
          <RotateCcw className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

function PasswordStrengthDemo() {
  const { t } = useLanguage();
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const mp = useMotionProps();

  const checks = {
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };
  const passed = Object.values(checks).filter(Boolean).length;
  const labels = [
    { en: 'Weak', es: 'Debil' },
    { en: 'Fair', es: 'Regular' },
    { en: 'Good', es: 'Buena' },
    { en: 'Strong', es: 'Fuerte' },
  ];
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-emerald-500'];
  const idx = Math.max(0, passed - 1);

  return (
    <div className="w-full space-y-3">
      <div className="relative">
        <Input
          type={visible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t({ en: 'Type a password...', es: 'Escribe una contrasena...' })}
          className="pr-10 bg-zinc-900/50 border-zinc-700 text-white"
        />
        <button
          onClick={() => setVisible(!visible)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
      {password.length > 0 && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={mp.transition(0.2)} className="space-y-2">
          <div className="flex gap-1">
            {[0, 1, 2, 3].map(i => (
              <motion.div
                key={i}
                className={`h-1.5 flex-1 rounded-full ${i <= idx && passed > 0 ? colors[idx] : 'bg-zinc-800'}`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={mp.transition(0.2 + i * 0.05)}
              />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium ${passed === 0 ? 'text-zinc-500' : passed <= 2 ? 'text-orange-400' : 'text-emerald-400'}`}>
              {passed > 0 ? t(labels[idx]) : ''}
            </span>
            <div className="flex gap-2 text-[10px]">
              <span className={checks.length ? 'text-emerald-400' : 'text-zinc-600'}>8+</span>
              <span className={checks.upper ? 'text-emerald-400' : 'text-zinc-600'}>ABC</span>
              <span className={checks.number ? 'text-emerald-400' : 'text-zinc-600'}>123</span>
              <span className={checks.special ? 'text-emerald-400' : 'text-zinc-600'}>@#$</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function SkeletonLoadingDemo() {
  const { t } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const mp = useMotionProps();

  const handleLoad = () => {
    setLoading(true);
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
      setLoading(false);
    }, 2000);
  };

  const handleReset = () => {
    setLoaded(false);
    setLoading(false);
  };

  return (
    <div className="w-full space-y-3">
      <AnimatePresence mode="wait">
        {!loaded ? (
          <motion.div key="skeleton" className="space-y-3" exit={{ opacity: 0 }} transition={mp.transition(0.15)}>
            <div className="flex items-center gap-3">
              <Skeleton className={`size-10 rounded-full ${loading ? '' : 'animate-none opacity-50'}`} />
              <div className="space-y-1.5 flex-1">
                <Skeleton className={`h-3 w-24 ${loading ? '' : 'animate-none opacity-50'}`} />
                <Skeleton className={`h-2.5 w-16 ${loading ? '' : 'animate-none opacity-50'}`} />
              </div>
            </div>
            <Skeleton className={`h-20 w-full rounded-lg ${loading ? '' : 'animate-none opacity-50'}`} />
            <div className="flex gap-2">
              <Skeleton className={`h-3 w-20 ${loading ? '' : 'animate-none opacity-50'}`} />
              <Skeleton className={`h-3 w-12 ${loading ? '' : 'animate-none opacity-50'}`} />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: mp.skipDecorative ? 0 : 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={mp.transition(0.25)}
            className="space-y-3"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
                JD
              </div>
              <div>
                <p className="text-sm font-medium text-white">Jane Doe</p>
                <p className="text-xs text-zinc-500">UX Designer</p>
              </div>
            </div>
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-3">
              <p className="text-sm text-zinc-300 leading-relaxed">
                {t({ en: 'Just shipped the new onboarding flow! Conversion rate improved by 34%.', es: 'Acabo de lanzar el nuevo flujo de onboarding. La tasa de conversion mejoro un 34%.' })}
              </p>
            </div>
            <div className="flex gap-2 text-xs text-zinc-500">
              <span>2m ago</span>
              <span>&middot;</span>
              <span>12 likes</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={loaded ? handleReset : handleLoad}
        disabled={loading}
        className="text-xs px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-lg transition-colors disabled:opacity-50 flex items-center gap-1.5"
      >
        {loading ? (
          <><Loader2 className="size-3 animate-spin" /> {t({ en: 'Loading...', es: 'Cargando...' })}</>
        ) : loaded ? (
          <><RotateCcw className="size-3" /> {t({ en: 'Reset', es: 'Reiniciar' })}</>
        ) : (
          <><RefreshCw className="size-3" /> {t({ en: 'Simulate Load', es: 'Simular Carga' })}</>
        )}
      </button>
    </div>
  );
}

function AddToCartDemo() {
  const { t } = useLanguage();
  const [cartCount, setCartCount] = useState(0);
  const [justAdded, setJustAdded] = useState(false);
  const mp = useMotionProps();

  const handleAdd = () => {
    setCartCount(c => c + 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  return (
    <div className="flex items-center gap-4">
      <motion.button
        onClick={handleAdd}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
          justAdded ? 'bg-emerald-600 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
        }`}
        whileTap={mp.skipDecorative ? undefined : { scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {justAdded ? (
            <motion.span key="added" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={mp.transition(0.12)} className="flex items-center gap-1.5">
              <Check className="size-4" /> {t({ en: 'Added!', es: 'Agregado!' })}
            </motion.span>
          ) : (
            <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={mp.transition(0.12)} className="flex items-center gap-1.5">
              <Plus className="size-4" /> {t({ en: 'Add to Cart', es: 'Agregar' })}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <div className="relative">
        <div className="size-10 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center">
          <ShoppingCart className="size-5 text-zinc-300" />
        </div>
        <AnimatePresence>
          {cartCount > 0 && (
            <motion.div
              key={cartCount}
              initial={{ scale: 0 }}
              animate={{ scale: mp.skipDecorative ? 1 : [0, 1.4, 1] }}
              transition={mp.spring(400, 15)}
              className="absolute -top-1.5 -right-1.5 size-5 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
            >
              {cartCount}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function DeleteConfirmDemo() {
  const { t } = useLanguage();
  const [phase, setPhase] = useState<'idle' | 'confirm' | 'deleted'>('idle');
  const [countdown, setCountdown] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mp = useMotionProps();

  const handleDelete = () => {
    if (phase === 'idle') {
      setPhase('confirm');
      setCountdown(3);
      let c = 3;
      timerRef.current = setInterval(() => {
        c--;
        setCountdown(c);
        if (c <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          setPhase('idle');
        }
      }, 1000);
    } else if (phase === 'confirm') {
      if (timerRef.current) clearInterval(timerRef.current);
      setPhase('deleted');
      setTimeout(() => setPhase('idle'), 2000);
    }
  };

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current); }, []);

  return (
    <div className="flex items-center gap-3">
      <AnimatePresence mode="wait">
        {phase === 'idle' && (
          <motion.button
            key="idle"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={mp.transition(0.15)}
            onClick={handleDelete}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Trash2 className="size-4" /> {t({ en: 'Delete Item', es: 'Eliminar' })}
          </motion.button>
        )}
        {phase === 'confirm' && (
          <motion.button
            key="confirm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, x: mp.skipDecorative ? 0 : [0, -3, 3, -2, 2, 0] }}
            exit={{ opacity: 0 }}
            transition={mp.transition(0.3)}
            onClick={handleDelete}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Trash2 className="size-4" /> {t({ en: 'Confirm?', es: 'Confirmar?' })} ({countdown})
          </motion.button>
        )}
        {phase === 'deleted' && (
          <motion.div
            key="deleted"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={mp.transition(0.15)}
            className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-400 rounded-lg text-sm flex items-center gap-2 line-through"
          >
            <Check className="size-4 text-emerald-500" /> {t({ en: 'Deleted', es: 'Eliminado' })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function CopyClipboardDemo() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const mp = useMotionProps();
  const text = 'npx create-next-app@latest';

  const handleCopy = () => {
    copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-700 rounded-lg px-3 py-2 w-full">
      <code className="text-sm text-zinc-300 flex-1 font-mono truncate">{text}</code>
      <Tooltip>
        <TooltipTrigger asChild>
          <button onClick={handleCopy} className="text-zinc-400 hover:text-zinc-200 transition-colors flex-shrink-0">
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={mp.spring(500, 20)}>
                  <Check className="size-4 text-emerald-400" />
                </motion.div>
              ) : (
                <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={mp.spring(500, 20)}>
                  <Copy className="size-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </TooltipTrigger>
        <TooltipContent>
          {copied ? t({ en: 'Copied!', es: 'Copiado!' }) : t({ en: 'Copy command', es: 'Copiar comando' })}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}


// ─── Drag & Drop Reorder Demo ────────────────────────────────

interface ReorderItemData {
  id: string;
  label: { en: string; es: string };
  color: string;
  iconType: 'eye' | 'smartphone' | 'zap' | 'check';
}

const REORDER_ITEMS: ReorderItemData[] = [
  { id: 'research', label: { en: 'User Research', es: 'Investigacion' }, color: 'bg-sky-500/20 text-sky-400 border-sky-500/30', iconType: 'eye' },
  { id: 'wireframes', label: { en: 'Wireframes', es: 'Wireframes' }, color: 'bg-violet-500/20 text-violet-400 border-violet-500/30', iconType: 'smartphone' },
  { id: 'prototype', label: { en: 'Prototype', es: 'Prototipo' }, color: 'bg-amber-500/20 text-amber-400 border-amber-500/30', iconType: 'zap' },
  { id: 'testing', label: { en: 'Usability Test', es: 'Test Usabilidad' }, color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30', iconType: 'check' },
];

const REORDER_ICONS: Record<string, React.ReactNode> = {
  eye: <Eye className="size-3.5" />,
  smartphone: <Smartphone className="size-3.5" />,
  zap: <Zap className="size-3.5" />,
  check: <Check className="size-3.5" />,
};

function DragReorderDemo() {
  const { t } = useLanguage();
  const mp = useMotionProps();
  const [items, setItems] = useState(REORDER_ITEMS);
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [offsetY, setOffsetY] = useState(0);
  const startYRef = useRef(0);
  const dragIdxRef = useRef<number | null>(null);
  const latestOffsetY = useRef(0);
  latestOffsetY.current = offsetY;

  const itemHeight = 40;

  const getTargetIdx = (fromIdx: number, dy: number): number => {
    const moved = Math.round(dy / itemHeight);
    return Math.max(0, Math.min(items.length - 1, fromIdx + moved));
  };

  const targetIdx = dragIdx !== null ? getTargetIdx(dragIdx, offsetY) : null;

  const handleStart = (e: React.PointerEvent, idx: number) => {
    e.preventDefault();
    setDragIdx(idx);
    dragIdxRef.current = idx;
    startYRef.current = e.clientY;
    setOffsetY(0);

    const onMove = (ev: PointerEvent) => {
      setOffsetY(ev.clientY - startYRef.current);
    };

    const onUp = () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);

      const fromIdx = dragIdxRef.current;
      if (fromIdx !== null) {
        const toIdx = Math.max(0, Math.min(REORDER_ITEMS.length - 1, fromIdx + Math.round(latestOffsetY.current / itemHeight)));
        if (fromIdx !== toIdx) {
          setItems(prev => {
            const next = [...prev];
            const [moved] = next.splice(fromIdx, 1);
            next.splice(toIdx, 0, moved);
            return next;
          });
        }
      }

      setDragIdx(null);
      dragIdxRef.current = null;
      setOffsetY(0);
    };

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
  };

  return (
    <div className="w-full space-y-2">
      <div className="space-y-1.5">
        {items.map((item, idx) => {
          const isDragging = idx === dragIdx;
          let yShift = 0;
          if (dragIdx !== null && targetIdx !== null && idx !== dragIdx) {
            if (dragIdx < targetIdx && idx > dragIdx && idx <= targetIdx) {
              yShift = -itemHeight;
            } else if (dragIdx > targetIdx && idx < dragIdx && idx >= targetIdx) {
              yShift = itemHeight;
            }
          }

          return (
            <motion.div
              key={item.id}
              animate={
                isDragging
                  ? { y: offsetY, scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }
                  : { y: yShift, scale: 1, boxShadow: '0 0px 0px rgba(0,0,0,0)' }
              }
              transition={isDragging ? { duration: 0 } : mp.spring(300, 25)}
              className={`flex items-center gap-2 rounded-lg px-2.5 py-2 select-none border ${
                isDragging
                  ? 'bg-zinc-800/80 border-fuchsia-500/40'
                  : 'bg-zinc-900/60 border-zinc-800'
              }`}
              style={{ zIndex: isDragging ? 50 : 1, position: 'relative' }}
            >
              <div
                onPointerDown={(e) => handleStart(e, idx)}
                className="cursor-grab active:cursor-grabbing text-zinc-600 hover:text-zinc-400 transition-colors touch-none"
              >
                <GripVertical className="size-4" />
              </div>
              <span className="text-[10px] font-bold text-zinc-600 w-4 tabular-nums">{idx + 1}</span>
              <div className={`size-6 rounded-md flex items-center justify-center border ${item.color}`}>
                {REORDER_ICONS[item.iconType]}
              </div>
              <span className="text-xs font-medium text-zinc-300 flex-1">{t(item.label)}</span>
            </motion.div>
          );
        })}
      </div>
      <p className="text-[10px] text-zinc-600 text-center pt-1">
        {t({ en: 'Drag handles to reorder', es: 'Arrastra los handles para reordenar' })}
      </p>
    </div>
  );
}


// ─── Swipe Actions Demo ──────────────────────────────────────

interface SwipeNotification {
  id: number;
  from: string;
  subject: { en: string; es: string };
  time: string;
}

const NOTIFICATIONS: SwipeNotification[] = [
  { id: 1, from: 'Sarah Chen', subject: { en: 'Design review feedback', es: 'Feedback de revision de diseno' }, time: '2m' },
  { id: 2, from: 'Alex Rivera', subject: { en: 'Sprint planning tomorrow', es: 'Planificacion de sprint manana' }, time: '15m' },
  { id: 3, from: 'Team UX', subject: { en: 'New research findings', es: 'Nuevos hallazgos de investigacion' }, time: '1h' },
  { id: 4, from: 'PM Bot', subject: { en: 'Weekly metrics report', es: 'Reporte de metricas semanal' }, time: '3h' },
];

function SwipeActionsDemo() {
  const { t } = useLanguage();
  const mp = useMotionProps();
  const [visibleCards, setVisibleCards] = useState<SwipeNotification[]>(NOTIFICATIONS.slice(0, 3));
  const [lastAction, setLastAction] = useState<{ type: 'archive' | 'star'; card: SwipeNotification } | null>(null);

  const handleDismiss = (card: SwipeNotification, direction: 'left' | 'right') => {
    setVisibleCards(prev => prev.filter(c => c.id !== card.id));
    setLastAction({ type: direction === 'left' ? 'archive' : 'star', card });
    setTimeout(() => setLastAction(null), 3000);
  };

  const handleUndo = () => {
    if (!lastAction) return;
    setVisibleCards(prev => {
      if (prev.some(c => c.id === lastAction.card.id)) return prev;
      return [...prev, lastAction.card].sort((a, b) => a.id - b.id);
    });
    setLastAction(null);
  };

  const handleReset = () => {
    setVisibleCards(NOTIFICATIONS.slice(0, 3));
    setLastAction(null);
  };

  return (
    <div className="w-full space-y-2">
      {/* Phone frame */}
      <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-3 py-1.5 border-b border-zinc-800/50">
          <Inbox className="size-3 text-zinc-500" />
          <span className="text-[9px] text-zinc-600 font-medium">
            {t({ en: 'INBOX', es: 'BANDEJA' })}
          </span>
          <span className="text-[9px] text-zinc-600 tabular-nums">{visibleCards.length}</span>
        </div>

        <div className="min-h-[130px]">
          <AnimatePresence>
            {visibleCards.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-8 gap-2"
              >
                <Check className="size-5 text-emerald-500" />
                <p className="text-[11px] text-zinc-500">{t({ en: 'All caught up!', es: 'Todo al dia!' })}</p>
              </motion.div>
            ) : (
              visibleCards.map(card => (
                <SwipeCard
                  key={card.id}
                  card={card}
                  onDismiss={handleDismiss}
                  mp={mp}
                  t={t}
                />
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Action feedback / controls */}
      <div className="flex items-center gap-2">
        {lastAction ? (
          <motion.button
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={handleUndo}
            className="flex-1 text-[11px] px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <RotateCcw className="size-3" />
            {lastAction.type === 'archive'
              ? t({ en: 'Archived — Undo', es: 'Archivado — Deshacer' })
              : t({ en: 'Starred — Undo', es: 'Destacado — Deshacer' })}
          </motion.button>
        ) : (
          <button
            onClick={handleReset}
            className="flex-1 text-[11px] px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-300 rounded-lg transition-colors flex items-center justify-center gap-1.5"
          >
            <RefreshCw className="size-3" />
            {t({ en: 'Reset', es: 'Reiniciar' })}
          </button>
        )}
      </div>

      <div className="flex items-center justify-center gap-3 text-[9px] text-zinc-600">
        <span className="flex items-center gap-1"><ArrowRight className="size-2.5 rotate-180" /> {t({ en: 'Archive', es: 'Archivar' })}</span>
        <span className="text-zinc-800">|</span>
        <span className="flex items-center gap-1">{t({ en: 'Star', es: 'Destacar' })} <ArrowRight className="size-2.5" /></span>
      </div>
    </div>
  );
}

function SwipeCard({
  card,
  onDismiss,
  mp,
  t,
}: {
  card: SwipeNotification;
  onDismiss: (card: SwipeNotification, direction: 'left' | 'right') => void;
  mp: ReturnType<typeof useMotionProps>;
  t: (v: { en: string; es: string }) => string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragX, setDragX] = useState(0);

  const threshold = 0.4;
  const containerWidth = containerRef.current?.offsetWidth ?? 250;
  const progress = Math.abs(dragX) / (containerWidth * threshold);
  const direction = dragX < 0 ? 'left' : 'right';
  const isPastThreshold = progress >= 1;

  return (
    <motion.div
      ref={containerRef}
      className="relative overflow-hidden border-b border-zinc-800/50 last:border-b-0"
      initial={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={mp.transition(0.25)}
    >
      {/* Action backgrounds */}
      <div className="absolute inset-0 flex">
        {/* Left action (archive) */}
        <div className={`flex-1 flex items-center justify-start px-3 transition-colors ${
          direction === 'left' && Math.abs(dragX) > 5
            ? isPastThreshold ? 'bg-amber-500/30' : 'bg-amber-500/10'
            : ''
        }`}>
          <motion.div animate={{ scale: direction === 'left' && isPastThreshold ? 1.3 : 0.8, opacity: direction === 'left' && Math.abs(dragX) > 5 ? 1 : 0 }}>
            <Archive className={`size-4 ${isPastThreshold && direction === 'left' ? 'text-amber-400' : 'text-zinc-500'}`} />
          </motion.div>
        </div>
        {/* Right action (star) */}
        <div className={`flex-1 flex items-center justify-end px-3 transition-colors ${
          direction === 'right' && Math.abs(dragX) > 5
            ? isPastThreshold ? 'bg-indigo-500/30' : 'bg-indigo-500/10'
            : ''
        }`}>
          <motion.div animate={{ scale: direction === 'right' && isPastThreshold ? 1.3 : 0.8, opacity: direction === 'right' && Math.abs(dragX) > 5 ? 1 : 0 }}>
            <Star className={`size-4 ${isPastThreshold && direction === 'right' ? 'text-indigo-400 fill-indigo-400' : 'text-zinc-500'}`} />
          </motion.div>
        </div>
      </div>

      {/* Draggable card */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7}
        onDrag={(_, info) => setDragX(info.offset.x)}
        onDragEnd={(_, info) => {
          const w = containerRef.current?.offsetWidth ?? 250;
          if (Math.abs(info.offset.x) > w * threshold) {
            onDismiss(card, info.offset.x < 0 ? 'left' : 'right');
          }
          setDragX(0);
        }}
        className="relative bg-zinc-950 px-3 py-2.5 flex items-center gap-2.5 cursor-grab active:cursor-grabbing touch-none"
      >
        <div className="size-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">
          {card.from[0]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold text-white truncate">{card.from}</span>
            <span className="text-[9px] text-zinc-600 flex-shrink-0">{card.time}</span>
          </div>
          <p className="text-[10px] text-zinc-400 truncate">{t(card.subject)}</p>
        </div>
        <Mail className="size-3 text-zinc-700 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
}


// ─── Demo Card Wrapper ───────────────────────────────────────

function DemoCard({ demo, children }: { demo: MicrointeractionDemo; children: React.ReactNode }) {
  const { t } = useLanguage();
  const [showAnatomy, setShowAnatomy] = useState(false);
  const mp = useMotionProps();

  const categoryColors: Record<string, string> = {
    Engagement: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    'System Status': 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    'Estado del Sistema': 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    Settings: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    Configuracion: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    Alerts: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    Alertas: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    Validation: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    Validacion: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    Loading: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    Carga: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    'E-Commerce': 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    Destructive: 'bg-red-500/15 text-red-300 border-red-500/30',
    Destructivo: 'bg-red-500/15 text-red-300 border-red-500/30',
    Utility: 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30',
    Utilidad: 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30',
    'Drag & Drop': 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    'Mobile Gesture': 'bg-pink-500/15 text-pink-300 border-pink-500/30',
    'Gesto Movil': 'bg-pink-500/15 text-pink-300 border-pink-500/30',
  };

  const catLabel = t(demo.category);
  const catColor = categoryColors[catLabel] || 'bg-zinc-500/15 text-zinc-300 border-zinc-500/30';

  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl overflow-hidden flex flex-col group hover:border-zinc-700 transition-colors">
      {/* Card Header */}
      <div className="p-4 pb-0 flex items-start justify-between gap-2">
        <div className="space-y-1.5">
          <h5 className="text-sm font-semibold text-white">{t(demo.title)}</h5>
          <span className={`inline-flex text-[10px] font-medium px-2 py-0.5 rounded-full border ${catColor}`}>
            {catLabel}
          </span>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setShowAnatomy(!showAnatomy)}
              className={`size-7 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${
                showAnatomy ? 'bg-indigo-500/20 text-indigo-400' : 'bg-zinc-800 text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Info className="size-3.5" />
            </button>
          </TooltipTrigger>
          <TooltipContent>
            {t({ en: 'Show anatomy', es: 'Mostrar anatomia' })}
          </TooltipContent>
        </Tooltip>
      </div>

      {/* Interactive Demo Area */}
      <div className="p-4 flex-1 flex items-center min-h-[90px]">
        {children}
      </div>

      {/* Anatomy Panel */}
      <AnimatePresence>
        {showAnatomy && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={mp.transition(0.25)}
            className="overflow-hidden"
          >
            <div className="border-t border-zinc-800 bg-zinc-950/50 p-3 grid grid-cols-2 gap-2">
              {([
                { key: 'trigger' as const, label: { en: 'Trigger', es: 'Disparador' }, icon: '\u26A1' },
                { key: 'rules' as const, label: { en: 'Rules', es: 'Reglas' }, icon: '\uD83D\uDCD0' },
                { key: 'feedback' as const, label: { en: 'Feedback', es: 'Feedback' }, icon: '\uD83D\uDC41' },
                { key: 'loops' as const, label: { en: 'Loops', es: 'Bucles' }, icon: '\uD83D\uDD04' },
              ]).map(a => (
                <div key={a.key} className="space-y-0.5">
                  <p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                    <span>{a.icon}</span> {t(a.label)}
                  </p>
                  <p className="text-[11px] text-zinc-400 leading-snug">{t(demo.anatomy[a.key])}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


// ─── Timing Playground ───────────────────────────────────────

function TimingPlayground() {
  const { t } = useLanguage();
  const mp = useMotionProps();
  const [duration, setDuration] = useState(300);
  const [easing, setEasing] = useState<'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'spring'>('easeOut');
  const [playing, setPlaying] = useState(false);
  const [iteration, setIteration] = useState(0);

  const easings = ['linear', 'easeIn', 'easeOut', 'easeInOut', 'spring'] as const;
  const easingLabels: Record<string, { en: string; es: string }> = {
    linear: { en: 'Linear', es: 'Lineal' },
    easeIn: { en: 'Ease In', es: 'Ease In' },
    easeOut: { en: 'Ease Out', es: 'Ease Out' },
    easeInOut: { en: 'Ease In-Out', es: 'Ease In-Out' },
    spring: { en: 'Spring', es: 'Resorte' },
  };

  const handlePlay = () => {
    setPlaying(true);
    setIteration(i => i + 1);
    setTimeout(() => setPlaying(false), Math.max(duration + 200, 800));
  };

  const getTransition = () => {
    if (mp.skipDecorative) return { duration: 0 };
    if (easing === 'spring') return { type: 'spring' as const, stiffness: 300, damping: 15 };
    return { duration: duration / 1000, ease: easing };
  };

  const durationLabel = duration < 200 ? t({ en: 'Too fast \u2014 user may miss it', es: 'Demasiado rapido \u2014 el usuario puede perderselo' })
    : duration <= 400 ? t({ en: 'Ideal range for UI interactions', es: 'Rango ideal para interacciones de UI' })
    : duration <= 700 ? t({ en: 'Acceptable for complex transitions', es: 'Aceptable para transiciones complejas' })
    : t({ en: 'Too slow \u2014 feels sluggish', es: 'Demasiado lento \u2014 se siente pesado' });

  const durationColor = duration < 200 ? 'text-amber-400'
    : duration <= 400 ? 'text-emerald-400'
    : duration <= 700 ? 'text-sky-400'
    : 'text-red-400';

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="size-10 bg-fuchsia-500/20 border border-fuchsia-500/30 rounded-xl flex items-center justify-center">
          <Sparkles className="size-5 text-fuchsia-400" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">
            {t({ en: 'Timing & Easing Playground', es: 'Playground de Timing y Easing' })}
          </h4>
          <p className="text-sm text-zinc-400">
            {t({ en: 'See how duration and easing affect perceived quality', es: 'Ve como la duracion y el easing afectan la calidad percibida' })}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Controls */}
        <div className="space-y-4">
          {/* Duration */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-zinc-300">{t({ en: 'Duration', es: 'Duracion' })}</label>
              <span className="text-sm font-mono text-zinc-400">{duration}ms</span>
            </div>
            <input
              type="range"
              min={50}
              max={1500}
              step={50}
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-fuchsia-500 h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:bg-fuchsia-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <p className={`text-xs ${durationColor}`}>{durationLabel}</p>
          </div>

          {/* Easing */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300">{t({ en: 'Easing Function', es: 'Funcion de Easing' })}</label>
            <div className="flex flex-wrap gap-1.5">
              {easings.map(e => (
                <button
                  key={e}
                  onClick={() => setEasing(e)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors border ${
                    easing === e
                      ? 'bg-fuchsia-500/15 border-fuchsia-500/40 text-fuchsia-300'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-300'
                  }`}
                >
                  {t(easingLabels[e])}
                </button>
              ))}
            </div>
          </div>

          {/* Play */}
          <button
            onClick={handlePlay}
            disabled={playing}
            className="w-full px-4 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-700 disabled:bg-fuchsia-800 disabled:cursor-wait text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
          >
            <Zap className="size-4" />
            {playing ? t({ en: 'Playing...', es: 'Reproduciendo...' }) : t({ en: 'Play Animation', es: 'Reproducir Animacion' })}
          </button>
        </div>

        {/* Animation Preview */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 min-h-[160px] flex flex-col justify-center">
          {/* Motion Object */}
          <div className="relative h-12 mb-4">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-zinc-800" />
            <motion.div
              key={iteration}
              className="absolute top-1/2 -translate-y-1/2 size-10 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-xl shadow-lg shadow-fuchsia-500/20 flex items-center justify-center"
              initial={{ left: '5%' }}
              animate={playing ? { left: '85%' } : { left: '5%' }}
              transition={getTransition()}
            >
              <ArrowRight className="size-4 text-white" />
            </motion.div>
          </div>

          {/* Scale / Opacity Object */}
          <div className="flex items-center justify-center gap-6">
            <motion.div
              key={`scale-${iteration}`}
              className="size-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center"
              initial={{ scale: 0.5, opacity: 0.3 }}
              animate={playing ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0.3 }}
              transition={getTransition()}
            >
              <span className="text-[10px] text-white font-bold">Scale</span>
            </motion.div>
            <motion.div
              key={`rotate-${iteration}`}
              className="size-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center"
              initial={{ rotate: 0 }}
              animate={playing ? { rotate: 360 } : { rotate: 0 }}
              transition={getTransition()}
            >
              <span className="text-[10px] text-white font-bold">Spin</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


// ─── Reduced Motion Panel ────────────────────────────────────

function ReducedMotionInfoPanel() {
  const { t } = useLanguage();
  const reduced = useReducedMotion();

  return (
    <AnimatePresence>
      {reduced && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20 rounded-xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <div className="size-9 bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Accessibility className="size-5 text-amber-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-amber-300">
                  {t({ en: 'Reduced Motion Active', es: 'Movimiento Reducido Activo' })}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t({
                    en: 'All decorative animations (bounces, particles, shakes) are disabled. State changes and content transitions remain instant but still communicate status. This demonstrates how to implement prefers-reduced-motion in your designs.',
                    es: 'Todas las animaciones decorativas (rebotes, particulas, sacudidas) estan deshabilitadas. Los cambios de estado y transiciones de contenido se mantienen instantaneos pero aun comunican el estado. Esto demuestra como implementar prefers-reduced-motion en tus disenos.'
                  })}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
              {[
                {
                  label: { en: 'CSS Media Query', es: 'Media Query CSS' },
                  code: '@media (prefers-reduced-motion: reduce)',
                },
                {
                  label: { en: 'React Hook', es: 'React Hook' },
                  code: 'useReducedMotion()',
                },
                {
                  label: { en: 'WCAG Guideline', es: 'Guia WCAG' },
                  code: '2.3.3 Animation from Interactions',
                },
              ].map(item => (
                <div key={item.code} className="bg-zinc-950/50 border border-zinc-800 rounded-lg px-3 py-2">
                  <p className="text-[10px] text-zinc-500 font-medium mb-0.5">{t(item.label)}</p>
                  <code className="text-[10px] text-amber-400/80 font-mono">{item.code}</code>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


// ─── Main Exported Component ─────────────────────────────────

export function MicrointeractionsLab() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<'demos' | 'playground'>('demos');
  const [reducedMotion, setReducedMotion] = useState(false);

  const demoComponents: Record<string, React.ReactNode> = {
    'like-button': <LikeButtonDemo />,
    'submit-button': <SubmitButtonDemo />,
    'toggle-switch': <ToggleSwitchDemo />,
    'notification-badge': <NotificationBadgeDemo />,
    'password-strength': <PasswordStrengthDemo />,
    'skeleton-loading': <SkeletonLoadingDemo />,
    'add-to-cart': <AddToCartDemo />,
    'delete-confirm': <DeleteConfirmDemo />,
    'copy-clipboard': <CopyClipboardDemo />,
    'drag-reorder': <DragReorderDemo />,
    'swipe-actions': <SwipeActionsDemo />,
  };

  return (
    <ReducedMotionContext.Provider value={reducedMotion}>
      <div className="w-full max-w-5xl mx-auto space-y-8 mt-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-3">
            <Zap className="size-8 text-fuchsia-400" />
            <h3 className="text-3xl font-bold text-white">
              {t({ en: 'Microinteractions Lab', es: 'Laboratorio de Microinteracciones' })}
            </h3>
          </div>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {t({
              en: 'Interact with live demos to experience how small details create engaging products. Tap the info icon on each card to reveal its Trigger \u2192 Rules \u2192 Feedback \u2192 Loops anatomy.',
              es: 'Interactua con demos en vivo para experimentar como los pequenos detalles crean productos atractivos. Toca el icono de info en cada tarjeta para revelar su anatomia Disparador \u2192 Reglas \u2192 Feedback \u2192 Bucles.'
            })}
          </p>
        </div>

        {/* Navigation & Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Section Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setActiveSection('demos')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all border flex items-center gap-2 ${
                activeSection === 'demos'
                  ? 'bg-fuchsia-500/15 border-fuchsia-500/40 text-fuchsia-300'
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <MousePointer className="size-4" />
              {t({ en: 'Interactive Demos', es: 'Demos Interactivos' })}
            </button>
            <button
              onClick={() => setActiveSection('playground')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all border flex items-center gap-2 ${
                activeSection === 'playground'
                  ? 'bg-fuchsia-500/15 border-fuchsia-500/40 text-fuchsia-300'
                  : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              <Sparkles className="size-4" />
              {t({ en: 'Timing Playground', es: 'Playground de Timing' })}
            </button>
          </div>

          {/* Reduced Motion Toggle */}
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border transition-all ${
              reducedMotion
                ? 'bg-amber-500/10 border-amber-500/30'
                : 'bg-zinc-900/50 border-zinc-800'
            }`}>
              <Accessibility className={`size-4 ${reducedMotion ? 'text-amber-400' : 'text-zinc-500'}`} />
              <span className={`text-xs font-medium ${reducedMotion ? 'text-amber-300' : 'text-zinc-400'}`}>
                {t({ en: 'Reduced Motion', es: 'Movimiento Reducido' })}
              </span>
              <Switch
                checked={reducedMotion}
                onCheckedChange={setReducedMotion}
              />
            </div>
          </div>
        </div>

        {/* Reduced Motion Info */}
        <ReducedMotionInfoPanel />

        {/* Content */}
        {activeSection === 'demos' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEMOS.map(demo => (
              <DemoCard key={demo.id} demo={demo}>
                {demoComponents[demo.id]}
              </DemoCard>
            ))}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 border border-zinc-800 rounded-2xl p-6 md:p-8">
            <TimingPlayground />
          </div>
        )}

        {/* Quick Reference */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-5">
          <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Zap className="size-4 text-fuchsia-400" />
            {t({ en: 'Quick Reference: Timing Guidelines', es: 'Referencia Rapida: Guias de Timing' })}
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { range: '50\u2013100ms', label: { en: 'Instant feedback', es: 'Feedback instantaneo' }, desc: { en: 'Hover, press states', es: 'Hover, estados de presion' }, color: 'border-emerald-500/30 bg-emerald-500/5' },
              { range: '150\u2013300ms', label: { en: 'Quick transitions', es: 'Transiciones rapidas' }, desc: { en: 'Toggles, tooltips', es: 'Toggles, tooltips' }, color: 'border-sky-500/30 bg-sky-500/5' },
              { range: '300\u2013500ms', label: { en: 'Standard animations', es: 'Animaciones estandar' }, desc: { en: 'Page transitions, modals', es: 'Transiciones de pagina, modales' }, color: 'border-amber-500/30 bg-amber-500/5' },
              { range: '500ms+', label: { en: 'Complex / dramatic', es: 'Complejo / dramatico' }, desc: { en: 'Onboarding, celebrations', es: 'Onboarding, celebraciones' }, color: 'border-fuchsia-500/30 bg-fuchsia-500/5' },
            ].map(item => (
              <div key={item.range} className={`border rounded-lg p-3 ${item.color}`}>
                <p className="text-xs font-mono font-bold text-white mb-0.5">{item.range}</p>
                <p className="text-[11px] font-medium text-zinc-300">{t(item.label)}</p>
                <p className="text-[10px] text-zinc-500">{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ReducedMotionContext.Provider>
  );
}
