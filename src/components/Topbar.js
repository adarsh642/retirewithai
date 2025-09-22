export default function Topbar() {
  return (
    <header
      className="flex h-16 shrink-0 items-center justify-end border-b border-surface bg-background/80 px-6 backdrop-blur-md"
      style={{ backgroundColor: 'rgb(18 11 28 / 0.8)' }}
    >
      <button className="relative rounded-full p-2 transition-colors hover:bg-surface" aria-label="Notifications">
        <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
        <span className="absolute right-1 top-1 block h-2 w-2 rounded-full bg-secondary ring-2 ring-background"></span>
      </button>
    </header>
  );
}
