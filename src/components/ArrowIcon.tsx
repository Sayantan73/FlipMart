export default function ArrowIcon({ direction = 'right' }: { direction?: 'left' | 'right' }) {
  return <svg className={direction === 'left' ? 'arrow-flip' : ''} viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12h15m-6-6 6 6-6 6" /></svg>
}
