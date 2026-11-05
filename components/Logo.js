export default function Logo({ className = "" }) {
  return (
    <span className={`font-logo leading-none tracking-[-0.04em] ${className}`} aria-label="IBASE">
      IBASE
    </span>
  );
}
