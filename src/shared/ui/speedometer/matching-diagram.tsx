
import { useEffect, useState } from "react";

interface MatchingDiagramProps {
  className?: string;
}

export function MatchingDiagram({
  className = "",
}: MatchingDiagramProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setAnimated(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`w-full max-w-lg ${className}`}>
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm text-neutral-500">
          От запроса к результату
        </span>
        <span className="text-xs text-neutral-400">INGAMIGO</span>
      </div>

      <svg
        viewBox="0 0 420 230"
        role="img"
        aria-label="Схематичное сравнение процесса поиска"
        className="w-full overflow-visible"
      >
        <defs>
          <linearGradient id="matchingGreen" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#86C99A" />
            <stop offset="100%" stopColor="#16803D" />
          </linearGradient>
        </defs>

        {[50, 95, 140, 185].map((y) => (
          <line
            key={y}
            x1="24"
            y1={y}
            x2="396"
            y2={y}
            stroke="#EAEAEA"
            strokeWidth="1"
            strokeDasharray="3 6"
          />
        ))}

        <path
          d="M 28 48 C 95 53, 130 75, 190 108 S 315 156, 390 169"
          fill="none"
          stroke="#B8B8BC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="5 5"
        />

        <path
          d="M 28 48 C 65 83, 82 140, 128 158 S 270 168, 390 170"
          fill="none"
          stroke="url(#matchingGreen)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="520"
          strokeDashoffset={animated ? "0" : "520"}
          style={{
            transition: "stroke-dashoffset 1.8s cubic-bezier(.22,1,.36,1)",
          }}
        />

        <circle cx="28" cy="48" r="4" fill="#171717" />
        <circle cx="390" cy="170" r="5" fill="#16803D" />

        <text x="28" y="28" fontSize="11" fill="#737373">
          Запрос
        </text>

        <text
          x="390"
          y="194"
          fontSize="11"
          fill="#16803D"
          textAnchor="end"
        >
          Результат
        </text>
      </svg>

      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-500">
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-5 rounded bg-emerald-600" />
          IngAmigo
        </span>
        <span className="flex items-center gap-2">
          <span className="h-0.5 w-5 rounded bg-neutral-400" />
          Традиционный поиск
        </span>
      </div>
    </div>
  );
}
