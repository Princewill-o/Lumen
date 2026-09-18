import { ArrowUpRight, Play, CheckCircle2 } from 'lucide-react'
import { clients, projects } from '../data/portfolio'
import ConceptShowcase from './ConceptShowcase'

export default function Portfolio() {
 const verifiedClients = clients.filter(c => c.name && c.logo && /^https:\/\//.test(c.proofUrl))
 const verifiedProjects = projects.filter(p => p.title && p.image && /^https:\/\//.test(p.proofUrl))
 return <section className="section portfolio-section" id="work">
  <div className="section-heading"><div><p className="eyebrow">BUILT TO BE EXPERIENCED</p><h2>Ideas are a start.<br/><span className="muted">See the work.</span></h2></div><p>Try our working enquiry prototype, then explore product concepts for bookings, conversations and everyday operations.</p></div>
  {verifiedClients.length > 0 && <div className="client-strip"><p className="eyebrow">COMPANIES WE’VE WORKED WITH</p><div>{verifiedClients.map(client => <a href={client.proofUrl} key={client.name} target="_blank" rel="noopener noreferrer"><img src={client.logo} alt={client.name} loading="lazy"/><span>{client.relationship}</span><ArrowUpRight size={16}/></a>)}</div></div>}
  <div className="work-grid">
    <article className="work-card featured-work"><a className="prototype-preview" href="#demo" aria-label="Try the Lumen enquiry prototype"><div className="preview-top"><span>lumen / enquiries</span><span className="prototype-badge">INTERACTIVE PROTOTYPE</span></div><div className="preview-message">“Do you cover North London?”</div><div className="preview-reply"><span>✦ LUMEN</span><p>Let’s get a few details<br/>for your quote.</p></div><div className="preview-fields"><span><CheckCircle2 size={16}/> Property postcode</span><span><CheckCircle2 size={16}/> Project requirements</span><span><CheckCircle2 size={16}/> Preferred timeframe</span></div><span className="preview-play"><Play size={16}/> Try the working prototype</span></a><div className="work-caption"><div><span className="eyebrow">LUMEN LAB / CONVERSATIONAL WORKFLOWS</span><h3>From first hello to qualified enquiry.</h3><p>A guided prototype built into this site. Explore how Lumen collects a customer’s requirements, one question at a time.</p></div><a className="text-link" href="#demo">Try the prototype <ArrowUpRight size={18}/></a><p className="evidence-note">Evidence: working on-page demo. This is an internal prototype, not a client deployment or a live AI service.</p></div></article>
    {verifiedProjects.map(project => <article className="work-card" key={project.title}><a href={project.proofUrl} target="_blank" rel="noopener noreferrer"><img className="project-image" src={project.image} alt={project.imageAlt || project.title} loading="lazy"/></a><div className="work-caption"><span className="eyebrow">{project.client} / {project.status}</span><h3>{project.title}</h3><p>{project.summary}</p><a className="text-link" href={project.proofUrl} target="_blank" rel="noopener noreferrer">{project.proofLabel || 'View project evidence'} <ArrowUpRight size={18}/></a></div></article>)}
  </div>
 <ConceptShowcase/>
 </section>
}
