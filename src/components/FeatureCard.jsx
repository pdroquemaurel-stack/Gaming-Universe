import { Link } from 'react-router-dom';

function FeatureCard({ title, whatItDoes, whyItMatters, businessImpact, to }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 shadow-neon">
      <h2 className="text-lg font-semibold text-gamingOrange">{title}</h2>
      <div className="mt-3 space-y-2 text-sm text-zinc-200">
        <p>
          <span className="font-semibold text-white">What it does:</span> {whatItDoes}
        </p>
        <p>
          <span className="font-semibold text-white">Why it matters:</span> {whyItMatters}
        </p>
        <p>
          <span className="font-semibold text-white">Business impact:</span> {businessImpact}
        </p>
      </div>
      <Link
        to={to}
        className="mt-4 inline-flex rounded-full bg-gamingOrange px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
      >
        Explore {title}
      </Link>
    </article>
  );
}

export default FeatureCard;
