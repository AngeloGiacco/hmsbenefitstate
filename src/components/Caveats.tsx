"use client";

const caveats = [
  {
    number: 1,
    title: "Pensions are the hull",
    text: "State pensions account for nearly half of welfare spending (£146bn). They are paid to people who have contributed for decades. Any honest comparison must acknowledge that this is not \"waste\" — it is a social contract. We include it because the numbers are meaningless without it, but we are not suggesting pensioners should be thrown overboard.",
  },
  {
    number: 2,
    title: "Nominal figures",
    text: "All figures are nominal (not adjusted for inflation) unless stated otherwise. Welfare in 2025 pounds is not the same as welfare in 1990 pounds. We use nominal figures because they are the ones that appear in budgets and headlines. Where inflation-adjusted comparisons matter, we say so.",
  },
  {
    number: 3,
    title: "You can't just throw money at shipyards",
    text: "Even if the Treasury wrote a blank cheque tomorrow, the UK's shipbuilding capacity is severely constrained. BAE Systems builds one frigate at a time. There are not enough welders, not enough dry docks, not enough steel. Rebuilding capacity is a decade-long project. The comparison is about political priorities, not about what could be built next Tuesday.",
  },
  {
    number: 4,
    title: "Crew is harder than steel",
    text: "The Royal Navy's most acute shortage is people, not hulls. Recruitment is below target. Retention is worse. You can build a frigate in five years; training a warfare officer takes ten. Money alone does not solve this.",
  },
  {
    number: 5,
    title: "The comparison is illustrative",
    text: "We are not proposing that welfare spending be redirected to the Royal Navy. We are illustrating the scale of welfare spending by comparing it to something tangible. The point is not \"build more ships instead of paying benefits\" — it is \"do you understand how much money this is?\"",
  },
];

export default function Caveats() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-widest mb-2">
        DRY DOCK
      </h2>
      <h3 className="text-offwhite/50 text-sm tracking-widest mb-10">
        MAINTENANCE NOTES &amp; KNOWN DEFECTS
      </h3>

      <div className="space-y-8">
        {caveats.map((caveat) => (
          <div key={caveat.number} className="pl-6 relative">
            <span className="absolute left-0 top-0 text-cyan-400 font-bold text-lg">
              {caveat.number}.
            </span>
            <h4 className="text-offwhite font-bold text-sm tracking-wider mb-2 uppercase">
              {caveat.title}
            </h4>
            <p className="text-offwhite/60 text-sm leading-relaxed">
              {caveat.text}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 border-l-2 border-cyan-400/30 pl-4">
        <p className="text-offwhite/40 text-xs italic leading-relaxed">
          &quot;A ship that cannot be honest about her defects will eventually
          sink. We prefer to stay afloat.&quot;
        </p>
      </div>
    </section>
  );
}
