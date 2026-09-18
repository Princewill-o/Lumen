import { useEffect, useState } from 'react'
import { Play, Pause, RotateCcw, ArrowUpRight, Check } from 'lucide-react'

const concepts = [
  { title: 'Every enquiry. A next step.', name: 'Lumen Enquiries', category: 'CUSTOMER CONVERSATIONS', image: '/images/project-enquiries.png', alt: 'AI-generated concept showing a Lumen customer enquiry dashboard on a laptop and phone', description: 'A concept for answering common questions, collecting the right details and getting promising enquiries to your team.', steps: ['A customer asks for a quote', 'The assistant collects project details', 'A structured enquiry reaches your team'], chips: ['Website chat', 'Qualification', 'Handoff'] },
  { title: 'Make room for better bookings.', name: 'Lumen Bookings', category: 'APPOINTMENTS & SCHEDULING', image: '/images/project-bookings.png', alt: 'AI-generated concept of an appointment calendar with a mobile booking confirmation', description: 'A concept for turning appointment requests into confirmed bookings, with availability checks and helpful reminders.', steps: ['A customer requests an appointment', 'Available times are offered', 'The booking and reminder are prepared'], chips: ['Availability', 'Scheduling', 'Reminders'] },
  { title: 'From paperwork to progress.', name: 'Lumen Documents', category: 'DOCUMENTS & OPERATIONS', image: '/images/project-documents.png', alt: 'AI-generated concept of a document-processing workspace organising information into records', description: 'A concept for extracting document details, flagging items for review and moving approved information into your business tools.', steps: ['A document enters the workflow', 'Key details are extracted for review', 'Approved information updates your records'], chips: ['Extraction', 'Human review', 'Connected tools'] },
]

function ConceptCard({ concept, index }) {
 const [playing, setPlaying] = useState(false)
 const [step, setStep] = useState(-1)
 useEffect(() => {
  if (!playing) return
  const timer = setTimeout(() => {
   if (step >= 2) setPlaying(false)
   else setStep(step + 1)
  }, 2400)
  return () => clearTimeout(timer)
 }, [playing, step])
 function toggle() {
  if (playing) setPlaying(false)
  else { if (step < 0 || step >= 2) setStep(0); setPlaying(true) }
 }
 return <article className={`concept-card ${playing ? 'is-playing' : ''}`}>
   <div className="concept-image-wrap">
    <img src={concept.image} alt={concept.alt} width="1536" height="1024" loading="lazy"/>
    <span className="concept-label">AI CONCEPT VISUAL</span>
    <div className="concept-image-title"><span>0{index+1} / LUMEN LAB</span><h3>{concept.name}</h3></div>
    <button className="concept-play" onClick={toggle} aria-label={`${playing ? 'Pause' : step === 2 ? 'Replay' : 'Play'} ${concept.name} workflow`} aria-pressed={playing}>
      {playing ? <Pause size={18}/> : step === 2 ? <RotateCcw size={18}/> : <Play size={18}/>} {playing ? 'Pause preview' : step === 2 ? 'Replay workflow' : 'Play workflow'}
    </button>
   </div>
   <div className="concept-content"><p className="eyebrow">{concept.category}</p><h4>{concept.title}</h4><p>{concept.description}</p><div className="concept-chips">{concept.chips.map(chip => <span key={chip}>{chip}</span>)}</div>
    <ol className="concept-workflow" aria-label={`${concept.name} example workflow`}>{concept.steps.map((label, i) => <li key={label} className={step === i ? 'current' : step > i ? 'complete' : ''}><span className="workflow-node">{step > i ? <Check size={13}/> : i+1}</span><span>{label}</span>{playing && step === i && <span className="workflow-pulse"/>}</li>)}</ol>
    <p className="sr-only" role="status">{step >= 0 ? `${concept.name}: ${concept.steps[step]}${step === 2 && !playing ? '. Preview complete.' : ''}` : ''}</p>
    <a className="text-link" href="#contact">Explore this for your business <ArrowUpRight size={17}/></a>
   </div>
 </article>
}

export default function ConceptShowcase() {
 return <div className="concept-showcase"><div className="concept-intro"><div><p className="eyebrow">PRODUCT EXPLORATIONS</p><h3>A look at what’s possible.</h3></div><p>AI-generated product concepts with animated example workflows. These illustrate possible solutions, not completed client projects or recorded software demos.</p></div><div className="concept-grid">{concepts.map((concept,index) => <ConceptCard key={concept.name} concept={concept} index={index}/>)}</div></div>
}
