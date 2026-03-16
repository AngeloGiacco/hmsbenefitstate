"use client";

interface SendToMPProps {
  constituencyName: string;
  constituencySlug: string;
  benefitAmount: string | number;
}

export default function SendToMP({
  constituencyName,
  constituencySlug,
  benefitAmount,
}: SendToMPProps) {
  const formattedAmount =
    typeof benefitAmount === "number"
      ? `£${benefitAmount.toLocaleString("en-GB")}`
      : benefitAmount;

  const subject = encodeURIComponent(
    `Welfare spending in ${constituencyName} — a question of scale`
  );

  const body = encodeURIComponent(
    `Dear Member of Parliament for ${constituencyName},

I recently discovered that the annual welfare spend attributable to our constituency is approximately ${formattedAmount}.

To put that in perspective, the entire Royal Navy surface fleet costs less to operate per year than the welfare bill for just a handful of constituencies like ours.

I am not writing to argue that benefits should be cut, or that pensioners should go without. I am writing because I believe most people — including, perhaps, most MPs — do not fully appreciate the scale of what we spend, or how little of it is ever debated in public.

I would welcome your thoughts on:
1. Whether you believe the current trajectory of welfare spending is sustainable.
2. What, if anything, you think should change.
3. Whether you would support greater transparency in how constituency-level welfare data is published.

This email was composed using hmsbenefitstate.uk. No data was stored or shared in the process.

Yours faithfully,
[Your name]
[Your address in ${constituencyName}]`
  );

  const mailtoLink = `mailto:?subject=${subject}&body=${body}`;

  const writetothemLink = `https://www.writetothem.com/who?pc=${encodeURIComponent(
    constituencySlug
  )}`;

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 tracking-widest mb-2">
        SIGNAL YOUR MP
      </h2>
      <p className="text-offwhite/60 text-sm mb-8 leading-relaxed">
        Send a pre-drafted letter to your Member of Parliament asking about
        welfare spending in{" "}
        <span className="text-cyan-400">{constituencyName}</span>. The email
        opens in your own email client — nothing is sent through our servers.
      </p>

      <div className="border border-navy-600 bg-navy-800 p-6 space-y-4">
        <a
          href={mailtoLink}
          className="block bg-cyan-400 text-navy-900 px-6 py-3 font-mono font-bold text-sm tracking-widest text-center hover:bg-cyan-300 transition-colors"
        >
          COMPOSE SIGNAL TO YOUR MP
        </a>

        <p className="text-offwhite/40 text-xs text-center">
          Opens your default email client with a pre-filled letter.
        </p>

        <div className="border-t border-navy-600 pt-4">
          <p className="text-offwhite/50 text-xs mb-2">
            Don&apos;t know your MP&apos;s email? Use WriteToThem:
          </p>
          <a
            href={writetothemLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400/70 text-xs underline underline-offset-4 hover:text-cyan-400 transition-colors"
          >
            writetothem.com &rarr;
          </a>
        </div>

        <p className="text-offwhite/30 text-xs mt-4 border-t border-navy-600 pt-4">
          No data stored. Email composed entirely client-side.
        </p>
      </div>
    </section>
  );
}
