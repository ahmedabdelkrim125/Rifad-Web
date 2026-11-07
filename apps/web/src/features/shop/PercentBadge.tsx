export function PercentBadge() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false" className="h-full w-full">
      <path
        d="M50 4l10 8 13-2 7 11 13 4-1 13 9 10-7 11 3 13-12 6-4 13-13 1-10 9-10-9-13-1-4-13-12-6 3-13-7-11 9-10-1-13 13-4 7-11 13 2z"
        fill="#e1c25a"
      />
      <circle cx="50" cy="50" r="33" fill="none" stroke="#b8922b" strokeWidth="2" opacity="0.7" />
      <text
        x="50"
        y="63"
        textAnchor="middle"
        fontSize="40"
        fontWeight="700"
        fill="#701127"
        fontFamily="inherit"
      >
        %
      </text>
    </svg>
  );
}
