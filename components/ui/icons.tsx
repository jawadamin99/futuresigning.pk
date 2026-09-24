type P = { className?: string };
export function ArrowUpRight({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 19 19 5M8 5h11v11" /></svg>; }
export function ArrowRight({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>; }
export function MenuIcon({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16M4 17h16" /></svg>; }
export function CloseIcon({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="m6 6 12 12M18 6 6 18" /></svg>; }
export function WhatsAppIcon({ className = "" }: P) { return <svg aria-hidden="true" className={className} viewBox="0 0 32 32" fill="currentColor"><path d="M16.04 3.2A12.72 12.72 0 0 0 5.02 22.27L3.2 28.8l6.69-1.75a12.72 12.72 0 1 0 6.15-23.85Zm0 22.86c-2.08 0-4.12-.56-5.9-1.62l-.42-.25-3.97 1.04 1.06-3.87-.27-.4a10.17 10.17 0 1 1 9.5 5.1Zm5.58-7.62c-.3-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.69.15-.2.31-.79.99-.97 1.19-.18.2-.36.23-.66.08-.31-.16-1.29-.48-2.46-1.52a9.2 9.2 0 0 1-1.7-2.11c-.18-.31-.02-.47.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.51.1-.2.05-.38-.03-.54-.08-.15-.69-1.65-.94-2.26-.25-.6-.5-.52-.69-.53h-.58c-.2 0-.53.08-.81.38-.28.31-1.07 1.05-1.07 2.55s1.1 2.96 1.25 3.16c.15.2 2.15 3.29 5.22 4.62.73.31 1.3.5 1.74.64.73.23 1.4.2 1.92.12.59-.09 1.81-.74 2.07-1.46.25-.71.25-1.32.18-1.45-.08-.13-.28-.2-.59-.36Z" /></svg>; }
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
