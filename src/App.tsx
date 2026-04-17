import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Activity, 
  Home, 
  Stethoscope, 
  ShieldCheck, 
  Settings, 
  Users, 
  AlertTriangle,
  Zap,
  Database,
  MessageCircle,
  Clock,
  ArrowRight,
  TrendingUp,
  LineChart,
  Target
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area
} from 'recharts';

// --- TYPES & CONSTANTS ---
const COLORS = ['#00AEEF', '#8BC53F', '#7AC142', '#e9c46a', '#f4a261', '#e76f51'];

// --- COMPONENTS ---

const NavigationControl = ({ onPrev, onNext, current, total }: any) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-white/40 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full shadow-2xl transition-all hover:bg-white/60">
    <button 
      onClick={onPrev}
      disabled={current === 0}
      className="p-2 rounded-full hover:bg-medical-blue hover:text-white disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-current transition-colors cursor-pointer"
    >
      <ChevronLeft size={24} />
    </button>
    <div className="flex items-center gap-2">
      <span className="text-sm font-display font-medium text-slate-500">
        {String(current + 1).padStart(2, '0')}
      </span>
      <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-medical-blue"
          initial={false}
          animate={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
      <span className="text-sm font-display font-medium text-slate-500">
        {String(total).padStart(2, '0')}
      </span>
    </div>
    <button 
      onClick={onNext}
      disabled={current === total - 1}
      className="p-2 rounded-full hover:bg-medical-blue hover:text-white disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-current transition-colors cursor-pointer"
    >
      <ChevronRight size={24} />
    </button>
  </div>
);

// --- SLIDE COMPONENTS ---

const SlideCover = () => (
  <div className="h-full flex flex-col items-center justify-center relative overflow-hidden text-center px-10">
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="absolute inset-0 z-0"
    >
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-medical-blue/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 -right-1/4 w-[500px] h-[500px] bg-medical-teal/10 rounded-full blur-[100px]" />
    </motion.div>

    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="z-10 mb-2"
    >
      <img 
        src="/logo.png" 
        alt="AJI DROKA Logo" 
        className="w-[500px] h-auto drop-shadow-2xl" 
        referrerPolicy="no-referrer"
      />
    </motion.div>

    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="text-4xl font-serif italic text-slate-600 mb-12 z-10"
    >
      Technologie solidaire, l'rahat lbal
    </motion.p>
    
    <motion.div
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="h-px w-64 bg-slate-300 mb-12"
    />

    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="text-xl max-w-2xl text-slate-500 font-medium leading-relaxed z-10"
    >
      Prototype intelligent de surveillance médicale, domestique et technique <br />
      pour personnes âgées vivant seules au Maroc
    </motion.p>
  </div>
);

const SlideStorytelling = () => (
  <div className="h-full flex items-center justify-center p-20 bg-slate-900 text-white relative">
    <div 
      className="absolute inset-0 opacity-50 bg-cover bg-center" 
      style={{ backgroundImage: 'url(https://picsum.photos/seed/moroccan-senior-care/1920/1080?blur=2)' }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
    
    <div className="z-10 max-w-4xl text-left">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mb-8 font-serif italic text-medical-teal text-3xl"
      >
        Le silence du quotidien peut masquer un risque...
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-6xl font-display font-bold leading-tight mb-10"
      >
        Lalla Fatéma vit seule à Casablanca. <br />
        Ses enfants travaillent loin.
      </motion.h2>
      
      <div className="grid grid-cols-3 gap-12">
        {[
          { icon: AlertTriangle, text: "Une chute dans la cuisine sans alerte immédiate." },
          { icon: Activity, text: "Une anomalie cardiaque non perçue au repos." },
          { icon: Clock, text: "Une inactivité prolongée qui inquiète sans confirmer." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.2 }}
            className="flex flex-col gap-4"
          >
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl w-fit">
              <item.icon className="text-medical-teal" size={32} />
            </div>
            <p className="text-xl text-slate-300 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-16 text-2xl font-medium text-slate-400 border-l-4 border-medical-teal pl-6"
      >
        Comment transformer l'isolement en sérénité connectée ?
      </motion.p>
    </div>
  </div>
);

const SlideStats = () => {
  const data = [
    { name: '1970', val: 1 },
    { name: '2022', val: 4.5 },
    { name: '2050', val: 10 },
  ];

  return (
    <div className="h-full grid grid-cols-2 p-20 gap-20 items-center">
      <div className="text-left">
        <h2 className="text-5xl font-display font-bold mb-8 leading-tight">
          Un enjeu démographique <br /><span className="text-medical-blue italic">Majeur au Maroc</span>
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-8">
            <div className="text-6xl font-black text-medical-blue">9%</div>
            <div className="text-xl text-slate-600 font-medium">Des personnes âgées <br />vivent seules au Maroc</div>
          </div>
          
          <div className="bg-medical-blue p-8 rounded-3xl shadow-xl text-white flex items-center gap-8">
            <div className="text-6xl font-black italic">64.4%</div>
            <div className="text-xl opacity-90 font-medium">Souffrent d'au moins <br />une maladie chronique</div>
          </div>
          
          <p className="text-slate-400 text-sm italic pt-4">Sources : HCP MAROC (2022), World Bank, WHO</p>
        </div>
      </div>
      
      <div className="bg-white p-10 rounded-4xl shadow-2xl border border-slate-50 h-[500px] flex flex-col">
        <h3 className="text-2xl font-display font-bold mb-10 flex items-center gap-3">
          <TrendingUp className="text-medical-teal" /> Évolution des Seniors (en millions)
        </h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontWeight: 600 }} dy={10} />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: '#F1F5F9' }}
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="val" radius={[12, 12, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 2 ? '#2a9d8f' : index === 1 ? '#0077b6' : '#94a3b8'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="mt-8 text-slate-500 font-medium text-center bg-slate-50 py-3 rounded-2xl italic">
          Passage de 4.5M à 10M d'ici 2050
        </p>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const SlideDashboardFamily = () => (
  <div className="h-full flex flex-col p-16 bg-white perspective-1000">
    <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <span className="bg-medical-teal/10 text-medical-teal px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">Evolution 2026</span>
          <h2 className="text-6xl font-display font-black leading-none">Espace <span className="gradient-text">Senior & Famille</span></h2>
        </div>
        <p className="text-xl text-slate-400 font-serif italic max-w-md text-right">
          Plus qu'un dashboard, une présence invisible et rassurante.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-16 flex-1 items-center">
        <div className="space-y-10">
          {[
            { 
              title: "Simplification Absolue", 
              desc: "Zéro complexité technique. Seules les réponses directes comptent.",
              icon: ShieldCheck
            },
            { 
              title: "État Global Immédiat", 
              desc: "Un code couleur sémantique : Tout va bien / Vigilance / Urgence.",
              icon: Activity
            },
            { 
              title: "Lien Familial Solidaire", 
              desc: "Notifications proactives via WhatsApp ou Telegram.",
              icon: MessageCircle
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-6"
            >
              <div className="w-16 h-16 shrink-0 bg-medical-bg rounded-2xl flex items-center justify-center text-medical-blue shadow-inner">
                <item.icon size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-slate-500 font-medium text-lg leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ rotateY: -8, scale: 0.95, opacity: 0 }}
          whileInView={{ rotateY: 0, scale: 1, opacity: 1 }}
          className="relative"
        >
          <div className="bg-slate-900 mx-auto rounded-[44px] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[6px] border-slate-800 max-w-[380px]">
            <img
              src="/espace-senior-famille-telegram.png"
              alt="Notifications famille AJI DROKA sur Telegram"
              className="w-full h-auto rounded-[34px] object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const SlideFusionAI = () => (
  <div className="h-full flex flex-col items-center justify-center p-20 text-center">
    <div className="bg-medical-blue/10 p-6 rounded-full mb-8">
      <Zap size={48} className="text-medical-blue" />
    </div>
    <h2 className="text-6xl font-display font-bold mb-6">Fusion AI Core</h2>
    <p className="text-2xl text-slate-500 max-w-3xl mb-16">
      L'orchestration intelligente qui transforme le bruit des capteurs en décisions cliniques.
    </p>

    <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
      {[
        { title: "Agent Matériel", desc: "Vérifie l'intégrité physique et la connectivité des capteurs.", color: "border-indigo-200 bg-indigo-50" },
        { title: "Agent Cohérence", desc: "Détecte les anomalies de données et filtre les faux positifs.", color: "border-emerald-200 bg-emerald-50" },
        { title: "Agent Action", desc: "Analyse le contexte via Gemini et déclenche les alertes ciblées.", color: "border-amber-200 bg-amber-50" }
      ].map((agent, i) => (
        <motion.div 
          key={i}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.2 }}
          className={`p-10 rounded-4xl border-2 ${agent.color} text-left`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center font-black text-xl">
              0{i+1}
            </div>
            <h3 className="text-2xl font-display font-bold">{agent.title}</h3>
          </div>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">{agent.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const SlideConclusion = () => (
  <div className="h-full flex flex-col items-center justify-center p-20 text-center relative overflow-hidden bg-white">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-medical-blue/5 to-transparent" />
    </motion.div>

    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="mb-12 relative z-10"
    >
      <img 
        src="/logo.png" 
        alt="AJI DROKA Logo" 
        className="w-64 h-auto" 
        referrerPolicy="no-referrer"
      />
    </motion.div>
    
    <motion.h2 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="text-5xl font-display font-black mb-10 max-w-4xl tracking-tight z-10 text-slate-400"
    >
      La Technologie au service de la Dignité.
    </motion.h2>

    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-3xl font-serif italic text-slate-500 max-w-3xl leading-relaxed mb-16 z-10"
    >
      "Pas seulement une plateforme de monitoring, mais un lien de confiance invisible entre les seniors et leurs proches."
    </motion.p>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex gap-4 z-10"
    >
      <div className="px-8 py-4 bg-medical-blue text-white rounded-full font-bold shadow-xl shadow-medical-blue/20">
        Prototype HealthTech 2026
      </div>
      <div className="px-8 py-4 bg-medical-teal text-white rounded-full font-bold shadow-xl shadow-medical-teal/20">
        AIoT & Fusion AI
      </div>
    </motion.div>
  </div>
);

const SlideWhy = () => (
  <div className="h-full flex flex-col items-center justify-center p-20 text-center">
    <h2 className="text-6xl font-display font-bold mb-12">Pourquoi AJI DROKA ?</h2>
    <div className="grid grid-cols-3 gap-12 max-w-6xl w-full">
      {[
        { title: "Maintien à domicile", icon: Home, text: "Répondre au souhait massif des seniors de rester chez eux en sécurité." },
        { title: "Désert médical", icon: Stethoscope, text: "Compenser la distance avec les structures de soins par une présence virtuelle." },
        { title: "Solidarité Familiale", icon: Users, text: "Rassurer les familles marocaines vivant loin ou à l'étranger (MRE)." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.2 }}
          className="bg-white p-10 rounded-4xl shadow-xl border border-slate-50 flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-medical-blue/10 text-medical-blue rounded-3xl flex items-center justify-center mb-6">
            <item.icon size={40} />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
          <p className="text-lg text-slate-500 font-medium">{item.text}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const SlideProblem = () => (
  <div className="h-full flex flex-col p-20 bg-slate-50">
    <h2 className="text-5xl font-display font-bold mb-16 text-center">Les Risques de l'Isolement</h2>
    <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
      <div className="grid grid-cols-1 gap-6">
        {[
          { icon: AlertTriangle, title: "Chute non détectée", text: "Le temps d'intervention est critique pour éviter des séquelles permanentes." },
          { icon: Heart, title: "Malaise Cardiaque", text: "Certaines arythmies sont asymptomatiques mais révélatrices de dangers." },
          { icon: Clock, title: "Inactivité prolongée", text: "Signe de fatigue extrême, déprime ou incapacité physique." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl shadow-md border-l-8 border-medical-blue flex items-center gap-6">
            <div className="p-4 bg-medical-blue/5 rounded-2xl text-medical-blue">
              <item.icon size={28} />
            </div>
            <div>
              <h4 className="font-display font-bold text-xl">{item.title}</h4>
              <p className="text-slate-500 font-medium">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-medical-blue rounded-4xl p-10 text-white flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <AlertTriangle size={200} />
        </div>
        <h3 className="text-3xl font-display font-bold mb-6">L’enjeu n’est pas seulement médical...</h3>
        <p className="text-xl opacity-90 leading-relaxed mb-8">
          Il est aussi domestique et technique. Une défaillance du système de surveillance est aussi dangereuse qu'un malaise ignoré.
        </p>
        <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md">
           <p className="font-mono text-sm">"AJI DROKA surveille le patient, mais surveille aussi sa propre santé pour garantir une uptime de 99.9%."</p>
        </div>
      </div>
    </div>
  </div>
);

const SlideEvolution = () => (
  <div className="h-full flex flex-col p-20 bg-slate-50">
    <h2 className="text-6xl font-display font-black mb-16 text-center uppercase tracking-tighter">Evolution & Perspectives</h2>
    <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-medical-blue flex items-center gap-3">
          <Target /> Court Terme (2026)
        </h3>
        {[
          "Intégration d'un capteur de chute 6-axes (MPU6050)",
          "Notifications SMS via Twilio API",
          "Authentification sécurisée des familles (Auth via Supabase)",
          "Déploiement sur Cloud Run (GCP)"
        ].map((item, i) => (
          <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-2 h-2 bg-medical-blue rounded-full" />
            <span className="font-medium text-slate-700">{item}</span>
          </div>
        ))}
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-medical-teal flex items-center gap-3">
          <TrendingUp /> Vision Long Terme
        </h3>
        {[
          "Partenariat avec les centres hospitaliers (HL7 FHIR)",
          "Apprentissage machine des habitudes de vie",
          "Analyse vocale des détresse (Assistant vocal arabe/darija)",
          "Écosystème 'Smart-Home Morocco' solidaire"
        ].map((item, i) => (
          <div key={i} className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-2 h-2 bg-medical-teal rounded-full" />
            <span className="font-medium text-slate-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-16 bg-medical-blue p-8 rounded-4xl text-white text-center">
       <p className="text-xl font-display font-bold italic">
        "Protéger aujourd'hui pour construire le Maroc solidaire de demain."
       </p>
    </div>
  </div>
);

const SlideTechStack = () => (
  <div className="h-full flex flex-col items-center justify-center p-20">
    <h2 className="text-5xl font-display font-bold mb-16">Stack Technologique AJI DROKA</h2>
    <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
      {[
        { name: "maker board", cat: "Hardware" },
        { name: "PIR / HC-SR501", cat: "Capteurs" },
        { name: "BME280 / MAX30102", cat: "Capteurs" },
        { name: "MQTT / HiveMQ", cat: "Communication" },
        { name: "Fusion AI", cat: "Core Logic" },
        { name: "Gemini 1.5", cat: "AI Engine" },
        { name: "Supabase", cat: "Backend / SQL" },
        { name: "Google Sheets", cat: "Persistence" },
        { name: "React 19", cat: "Frontend" },
        { name: "Vite", cat: "Bundler" },
        { name: "Tailwind CSS", cat: "UI Framework" },
        { name: "Recharts", cat: "Data Viz" },
        { name: "Motion", cat: "Animations" }
      ].map((tech, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05 }}
          className="px-6 py-4 bg-white border border-slate-100 rounded-2xl shadow-lg flex flex-col items-center min-w-[160px]"
        >
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{tech.cat}</span>
          <span className="text-lg font-black text-slate-800">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const SlideValueAdded = () => (
  <div className="h-full flex flex-col items-center justify-center p-20 bg-medical-bg">
    <h2 className="text-6xl font-display font-black mb-16 text-center">Valeur Ajoutée</h2>
    <div className="grid grid-cols-2 gap-8 max-w-6xl w-full">
      {[
        { title: "Surveillance temps réel", text: "Flux MQTT sans latence pour une réactivité immédiate face aux signes vitaux.", icon: Zap },
        { title: "Interprétation IA", text: "Gemini contextualise les données (ex: BPM haut + mouvement = sport, non malaise).", icon: BrainIcon },
        { title: "Dashboards Métiers", text: "Interfaces dédiées pour le médical et la famille.", icon: LayoutIcon },
        { title: "Solidarité rattachée", text: "Réduction de l'anxiété familiale grâce au dashboard Senior & Famille.", icon: Users }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex items-start gap-6"
        >
          <div className="p-4 bg-medical-teal/10 rounded-2xl text-medical-teal">
            <item.icon size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">{item.title}</h3>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const BrainIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.54Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.54Z"></path>
  </svg>
);

const LayoutIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    <line x1="3" x2="21" y1="9" y2="9"></line>
    <line x1="9" x2="9" y1="21" y2="9"></line>
  </svg>
);

const SlideAlertLogic = () => (
  <div className="h-full flex flex-col items-center justify-center p-20">
    <h2 className="text-5xl font-display font-bold mb-16 text-center">Logique des Alertes Intelligentes</h2>
    <div className="flex gap-6 w-full max-w-6xl">
      {[
        { level: "Informatif", color: "bg-blue-500", desc: "Observation anormale mais sans urgence." },
        { level: "Modéré", color: "bg-yellow-500", desc: "Combinaison de facteurs préoccupants." },
        { level: "Élevé", color: "bg-orange-500", desc: "Anomalie confirmée par Fusion AI." },
        { level: "Critique", color: "bg-red-600", desc: "Urgence vitale ou technique sévère." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.15 }}
          className="flex-1 flex flex-col"
        >
          <div className={`${item.color} h-3 w-full rounded-t-full mb-6`} />
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex-1 flex flex-col">
            <h3 className="text-2xl font-display font-bold mb-4">{item.level}</h3>
            <p className="text-slate-500 font-medium mb-8 flex-1">{item.desc}</p>
            <div className="text-xs font-mono text-slate-400 bg-slate-50 p-3 rounded-xl">
              ACTION: {i < 2 ? "Log simple" : "Notification + Slack"}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
    <div className="mt-16 max-w-4xl text-center bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex items-center gap-4">
      <Zap className="text-indigo-600" />
      <p className="text-indigo-900 font-medium">
        L'IA Fusion AI ajuste dynamiquement les seuils en fonction de l'historique et de l'heure.
      </p>
    </div>
  </div>
);

const SlidePIRDetails = () => (
  <div className="h-full flex flex-col p-20 bg-white">
    <div className="max-w-6xl mx-auto w-full grid grid-cols-2 gap-20 items-center h-full">
      <div className="space-y-8">
        <h2 className="text-6xl font-display font-black leading-tight">Activité & <br /><span className="text-medical-teal">Capteur PIR</span></h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="p-3 bg-medical-teal/10 rounded-2xl text-medical-teal h-fit">
              <Activity size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Détection de Mouvement</h4>
              <p className="text-slate-500 leading-relaxed font-medium">Capture les déplacements via HC-SR501 infrarouge dans la pièce principale.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 bg-medical-blue/10 rounded-2xl text-medical-blue h-fit">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-xl mb-1">Algorithme d'Inactivité</h4>
              <p className="text-slate-500 leading-relaxed font-medium">Un compteur cyclique calcule les périodes sans mouvement pour détecter les situations à risque.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 bg-slate-50 rounded-[40px] border border-slate-100 shadow-2xl relative">
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-6 border border-slate-100">
           <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Logique de mouvement</h4>
           <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center text-sm font-bold">
                 <span>Mouvement détecté</span>
                 <span className="text-green-500">Reset Compteur</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                 <motion.div animate={{ x: [-100, 100] }} transition={{ repeat: Infinity, duration: 2 }} className="w-32 h-full bg-medical-teal" />
              </div>
              <div className="flex justify-between items-center text-sm font-bold mt-4">
                 <span>Inactivité prolongée</span>
                 <span className="text-orange-500">Incrémentation</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                 <motion.div initial={{ width: 0 }} whileInView={{ width: "80%" }} transition={{ duration: 10 }} className="h-full bg-orange-500" />
              </div>
           </div>
        </div>
        <div className="p-6 bg-medical-blue rounded-3xl text-white">
           <p className="text-sm italic font-medium">
            "L'IA exclut les périodes de sommeil nocturne habituelles grâce à une fenêtre temporelle configurable."
           </p>
        </div>
      </div>
    </div>
  </div>
);

const SlideChallenges = () => (
  <div className="h-full flex flex-col p-20 bg-slate-50">
    <h2 className="text-5xl font-display font-bold mb-16 text-center">Difficultés & Solutions</h2>
    <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto w-full">
      {[
        { problem: "Saturation des flux MQTT", solution: "Mise en place d'un fenêtrage temporel et buffer PostgreSQL." },
        { problem: "Faux positifs biologiques", solution: "Filtrage via Agent Cohérence Métrologique (Agent 2)." },
        { problem: "Données simulées vs réelles", solution: "Algorithme de génération réaliste basé sur les variations vitales." },
        { problem: "Coût et Latence IA", solution: "Prompt chaining optimisé et mise en cache des analyses." }
      ].map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 rounded-[32px] shadow-lg border border-slate-100"
        >
          <div className="flex items-center gap-3 mb-4">
             <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
                <AlertTriangle size={20} />
             </div>
             <h4 className="text-lg font-black">{item.problem}</h4>
          </div>
          <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50">
             <div className="w-10 h-10 rounded-full bg-medical-teal/10 flex items-center justify-center text-medical-teal">
                <CheckIcon />
             </div>
             <p className="font-medium text-slate-600">{item.solution}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const SlideArchitectureImage = () => (
  <div className="h-full flex flex-col items-center justify-center p-16 bg-white">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-6xl w-full flex flex-col items-center text-center"
    >
      <h2 className="text-5xl font-display font-black mb-4 text-medical-blue">Architecture Technique</h2>
      <p className="text-xl text-slate-500 font-medium mb-12 max-w-3xl">
        Organisation modulaire du système : de l'acquisition des données via maker board à l'analyse cognitive par Gemini.
      </p>
      <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-2xl w-full flex justify-center overflow-hidden">
        <img src="/ArchitectureProjet.PNG" alt="Architecture Projet" className="max-h-[550px] w-auto object-contain rounded-2xl shadow-inner" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
  </div>
);

const SlidePhaseCapteurHumain = () => (
  <div className="h-full flex flex-col items-center justify-center p-16 bg-white">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-6xl w-full flex flex-col items-center text-center"
    >
      <h2 className="text-5xl font-display font-black mb-4 text-medical-blue">Phase : Monitoring Physiologique</h2>
      <p className="text-xl text-slate-500 font-medium mb-12 max-w-3xl">
        Analyse en temps réel des signaux vitaux (BPM, SpO2) pour une détection précoce des détresses cardiaques et biologiques.
      </p>
      <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-2xl w-full flex justify-center overflow-hidden">
        <img src="/bpmn_22(1).webp" alt="Capteur Humain" className="max-h-[550px] w-auto object-contain rounded-2xl shadow-inner" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
  </div>
);

const SlidePhaseMouvementMaison = () => (
  <div className="h-full flex flex-col items-center justify-center p-16 bg-white">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-6xl w-full flex flex-col items-center text-center"
    >
      <h2 className="text-5xl font-display font-black mb-4 text-medical-teal">Phase : Analyse de l'Espace</h2>
      <p className="text-xl text-slate-500 font-medium mb-12 max-w-3xl">
        Le "Géo-fencing" intérieur via capteur PIR pour comprendre les habitudes de vie et identifier instantanément les chutes ou l'inactivité anormale.
      </p>
      <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-2xl w-full flex justify-center overflow-hidden">
        <img src="/Phase 1.svg" alt="Mouvement Maison" className="max-h-[550px] w-auto object-contain rounded-2xl shadow-inner" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
  </div>
);

const SlidePhaseAnomaliesMateriel = () => (
  <div className="h-full flex flex-col items-center justify-center p-16 bg-white">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-6xl w-full flex flex-col items-center text-center"
    >
      <h2 className="text-5xl font-display font-black mb-4 text-medical-blue">Phase : Diagnostic Système</h2>
      <p className="text-xl text-slate-500 font-medium mb-12 max-w-3xl">
        Une surveillance technique rigoureuse (Watchdog) pour garantir la continuité du service et la fiabilité totale de l'infrastructure IoT.
      </p>
      <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-2xl w-full flex justify-center overflow-hidden">
        <img src="/BPMN.PNG" alt="Détection Anomalies Matériel" className="max-h-[550px] w-auto object-contain rounded-2xl shadow-inner" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
  </div>
);

const SlideDashboardVitalSigns = () => (
  <div className="h-full flex flex-col items-center justify-center p-16 bg-white">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="max-w-6xl w-full flex flex-col items-center text-center"
    >
      <h2 className="text-5xl font-display font-black mb-4 text-medical-teal">Phase : Dashboard Signaux Vitaux</h2>
      <p className="text-xl text-slate-500 font-medium mb-12 max-w-3xl">
        Suivi en temps réel des constantes vitales (BPM, Température) via notre interface de monitoring centralisée, permettant une intervention rapide en cas d'anomalie.
      </p>
      <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-2xl w-full flex justify-center overflow-hidden">
        <img src="/Screenshot 2026-04-16 at 14.33.41.png" alt="Dashboard Signaux Vitaux" className="max-h-[550px] w-auto object-contain rounded-2xl shadow-inner" referrerPolicy="no-referrer" />
      </div>
    </motion.div>
  </div>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'cover', component: <SlideCover /> },
    { id: 'story', component: <SlideStorytelling /> },
    { id: 'why', component: <SlideWhy /> },
    { id: 'stats', component: <SlideStats /> },
    { id: 'problem', component: <SlideProblem /> },
    { id: 'value', component: <SlideValueAdded /> },
    { id: 'arch-img', component: <SlideArchitectureImage /> },
    { id: 'phase-humain', component: <SlidePhaseCapteurHumain /> },
    { id: 'phase-mouvement', component: <SlidePhaseMouvementMaison /> },
    { id: 'phase-anomalies', component: <SlidePhaseAnomaliesMateriel /> },
    { id: 'phase-vitaux', component: <SlideDashboardVitalSigns /> },
    { id: 'pir', component: <SlidePIRDetails /> },
    { id: 'alerts', component: <SlideAlertLogic /> },
    { id: 'dash-fam', component: <SlideDashboardFamily /> },
    { id: 'fusion', component: <SlideFusionAI /> },
    { id: 'tech-stack', component: <SlideTechStack /> },
    { id: 'challenges', component: <SlideChallenges /> },
    { id: 'evolution', component: <SlideEvolution /> },
    { id: 'conc', component: <SlideConclusion /> }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 0, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') setCurrentSlide((prev) => Math.max(prev - 1, 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide]);

  return (
    <div className="w-screen h-screen bg-medical-bg text-slate-900 overflow-hidden font-sans">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="w-full h-full"
        >
          {slides[currentSlide].component}
        </motion.div>
      </AnimatePresence>

      <NavigationControl 
        onPrev={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
        onNext={nextSlide}
        current={currentSlide}
        total={slides.length}
      />

      {/* Branding logo in top right */}
      <div className="fixed top-8 right-10 z-50 flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
        <div className="flex flex-col items-end">
          <img 
            src="/logo.png" 
            alt="AJI DROKA" 
            className="h-14 w-auto" 
            referrerPolicy="no-referrer"
          />
          <span className="text-[10px] font-bold text-medical-blue uppercase tracking-[0.2em] mt-1">
            Surveillance & Alerte Santé
          </span>
        </div>
      </div>
    </div>
  );
}

