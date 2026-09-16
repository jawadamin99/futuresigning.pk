type P = { className?: string };
export function ArrowUpRight({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 19 19 5M8 5h11v11" /></svg>; }
export function ArrowRight({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>; }
export function MenuIcon({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 17h16" /></svg>; }
export function CloseIcon({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18" /></svg>; }
export function WhatsAppIcon({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" /><path d="M8.4 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.8 1.8c.1.3 0 .5-.2.7l-.7.8c.7 1.4 1.8 2.4 3.3 3l.7-.9c.2-.3.5-.3.8-.2l1.8.8c.3.1.4.4.4.6 0 .8-.4 1.5-1.1 1.9-.6.4-1.5.5-2.2.3-3.6-1-5.8-3.3-6.6-6.4-.2-.9.2-1.8.7-2.4Z" /></svg>; }
export function PinIcon({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>; }
export function MailIcon({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>; }
export function ProcessIcon({ name, className = "" }: P & { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    brief: <><path d="M7 3h10v4H7zM5 5H3v16h18V5h-2M7 12h10M7 16h6" /></>,
    select: <><circle cx="8" cy="8" r="3" /><circle cx="16" cy="16" r="3" /><path d="m10.5 10.5 3 3M16 5h4v4M8 19H4v-4" /></>,
    approve: <><path d="M5 3h14v18H5zM8 8h8M8 12h5" /><path d="m9 16 2 2 4-5" /></>,
    produce: <><path d="M4 8h16v11H4zM7 8V5h10v3M8 13h8M8 16h5" /><circle cx="18" cy="5" r="2" /></>,
    deliver: <><path d="M3 6h12v11H3zM15 10h3l3 3v4h-6z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
  };
  return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
