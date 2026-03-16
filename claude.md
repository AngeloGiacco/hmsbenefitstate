# HMS Benefit State

**Domain:** `hmsbenefitstate.co.uk`
**Stack:** Next.js 14+ (App Router) · Vercel · Tailwind · Framer Motion · D3
**Tone:** Sarcastic, dry, deadpan naval briefing style — but every number is real and sourced
**Goal:** Make the UK's spending priorities impossible to ignore. Educate through humour. Go viral through personalisation.

---

## The Concept

The entire site is presented as a naval dossier / ship registry — as if the UK's welfare spending were a commissioned vessel in the Royal Navy. Every section uses naval formatting, naval language, and the dry matter-of-fact tone of an Admiralty briefing. The joke is the format. The data is deadly serious.

The site answers one question: **"What if we talked about benefits spending the way we talk about warships?"**

---

## Voice & Tone

The tone is a bored Royal Navy clerk filing paperwork about a ship that costs more than the entire fleet combined. Think: if the Ministry of Defence had to write a fact sheet about the welfare state.

### Rules:
- Every number is real, sourced, and defensible
- Sarcasm comes from FORMAT and JUXTAPOSITION, never from editorialising
- Never punch down at benefit claimants — punch up at the absurdity of scale
- Never use words like "scroungers", "handouts", "lazy" — the site is too classy for that
- Naval terminology everywhere: "displacement" = budget, "crew" = claimants, "commissioned" = introduced, "speed" = growth rate, "armament" = what it actually defends
- The site never tells you what to think. It just presents the numbers in a format that makes the conclusion unavoidable
- Caveats are always present but delivered in the same deadpan tone: *"Note: HMS Triple Lock's crew are also voters. This may explain her remarkable durability."*

### Example voice:

> *"HMS Benefit State was commissioned in 1948 and has been undergoing continuous expansion ever since. She is now the largest vessel in government service, displacing £334 billion annually. Her crew of 5.5 million is larger than the population of Norway. She has no armament, no defensive capability, and no known top speed, though her rate of growth has not been matched by any warship since the Yamato."*

That paragraph is funny, shareable, and every single fact in it is true.

---

## Site Structure

### 0. Loading State

Before anything renders, a brief flash in monospace text on a dark screen:

```
ADMIRALTY FILE NO. 2026/001
CLASSIFICATION: PUBLIC
SUBJECT: HMS BENEFIT STATE — VESSEL ASSESSMENT
STATUS: ACTIVE
```

Fades into the main site. Takes 1.5 seconds. Sets the tone immediately.

### 1. Hero: The Ship Registry Card

The first thing you see. Formatted exactly like a Jane's Fighting Ships entry or a naval recognition card. Blueprint aesthetic — dark navy background, thin white/cyan lines, technical drawing of a ship silhouette in profile.

```
╔══════════════════════════════════════════════════╗
║  HMS BENEFIT STATE                               ║
║  Pennant Number: DWP-001                         ║
╠══════════════════════════════════════════════════╣
║  Class:           Welfare-class dreadnought      ║
║  Displacement:    £334,000,000,000 (2025/26)     ║
║  Crew:            5.5 million working-age         ║
║                   claimants + 12.7m pensioners    ║
║  Speed:           +£117bn/year and accelerating   ║
║  Armament:        None                            ║
║  Aircraft:        None                            ║
║  Commissioned:    1948                            ║
║  Status:          Permanently alongside.          ║
║                   Has never put to sea.           ║
╚══════════════════════════════════════════════════╝
```

Below, in small text:

> *"HMS Benefit State's annual displacement exceeds the combined defence budgets of France, Germany, and Italy. She is, by some margin, the most expensive vessel ever maintained by a British government. Unlike the Royal Navy's aircraft carriers, she is always fully crewed."*

**Live ticker** runs underneath:

```
SPENDING NOW:  £████████████████████████  £10,594/sec  WELFARE
               █                          £491/sec     ROYAL NAVY
```

The welfare bar visibly pulses/grows. The navy bar is barely a sliver. The asymmetry is immediately visceral.

Below the ticker:

> *"In the time you've been reading this, the UK has spent £[X] on welfare and £[Y] on the Royal Navy. The Royal Navy would like to remind you that both its aircraft carriers are currently in dock."*

### 2. The Fleet Register: HMS Benefit State's Sister Ships

Scrolling down reveals the full "fleet" — each major welfare category presented as its own ship in the same registry card format. These are individually shareable (each gets its own OG image and URL at `/fleet/[slug]`).

**HMS Triple Lock** (State Pension)
```
HMS TRIPLE LOCK
Class:         Pension-class battleship
Displacement:  £146,100,000,000
Crew:          12.7 million pensioners
Speed:         Whichever is highest: inflation,
               earnings, or 2.5%. Always upward.
Armament:      Electoral invincibility
Commissioned:  2011
Status:        Unsinkable. No government has
               survived attempting to scuttle her.
Note:          HMS Triple Lock alone displaces more
               than twice the entire defence budget.
```

**HMS Universal Credit**
```
HMS UNIVERSAL CREDIT
Class:         Means-tested cruiser
Displacement:  £80,900,000,000
Crew:          6.2 million households
Speed:         Was meant to reach full speed by
               2017. Currently estimated: 2025.
               Eight years behind schedule.
Armament:      Sanctions
Commissioned:  2013
Status:        Still rolling out.
Note:          Her displacement alone could fund the
               entire Royal Navy equipment plan
               twice over every decade.
```

**HMS PIP** (Personal Independence Payment)
```
HMS PIP
Class:         Disability-class frigate
Displacement:  £22,000,000,000
Crew:          3.4 million claimants
Speed:         Doubled since commissioning.
               Fastest-growing vessel in the fleet.
Assessment:    6+ months average wait time
Commissioned:  2013
Status:        Under review. Government has
               announced plans to reduce her
               displacement. Previous attempts
               have failed.
```

**HMS Housing Benefit**
```
HMS HOUSING BENEFIT
Class:         Rental-class support vessel
Displacement:  £37,800,000,000
Crew:          Varies. Grows when landlords
               raise rents. Which is always.
Speed:         Proportional to house prices.
               So: fast.
Armament:      Enriches landlords
Commissioned:  1972
Status:        Being gradually absorbed into
               HMS Universal Credit.
Note:          Her annual displacement could
               purchase 45 Type 26 frigates.
```

After the fleet cards:

> *"The combined displacement of this benefit fleet is £334 billion per year. The entire Royal Navy — carriers, submarines, frigates, destroyers, and all — costs approximately £15.5 billion. HMS Benefit State could purchase 21 Royal Navies annually and still have change for a Type 31."*

### 3. Meanwhile, in the Actual Navy

Hard cut. Same format, but now showing real ships. The contrast is the entire point.

```
HMS QUEEN ELIZABETH (R08)
Class:         Queen Elizabeth-class carrier
Displacement:  65,000 tonnes (not pounds)
Crew:          1,600 (when she can find them)
Cost:          £3,500,000,000
Speed:         25+ knots (when operational)
Aircraft:      F-35B Lightning II (fewer than
               planned)
Commissioned:  2017
Status:        In dry dock at Rosyth.
               Months behind schedule.
               Propeller shaft issues.
               Again.
```

```
HMS PRINCE OF WALES (R09)
Status:        In post-deployment maintenance
               after 8 months in the Indo-Pacific.
               The only carrier deployment
               Britain managed in 2025.
Note:          Has spent 78.7% of her commissioned
               life NOT at sea.
```

Then the fleet readiness grid — same visual as before but with the deadpan naval commentary:

```
FLEET READINESS ASSESSMENT — MARCH 2026

Type 45 Destroyers:    ██░░░░  3 of 6 operational
Type 23 Frigates:      █████░░ 6 of 7 operational  (oldest: 30 years old)
Astute-class SSNs:     █░░░░░  1 of 5 operational
QE-class Carriers:     ░░      0 of 2 operational
Amphibious Ships:      [DECOMMISSIONED — March 2025. No replacement.]
Type 26 Frigates:      [UNDER CONSTRUCTION. None delivered. First: "late 2020s".]
Type 31 Frigates:      [UNDER CONSTRUCTION. None delivered. First: ~2027.]

Overall fleet: ~50% available for duty.

Note: HMS Benefit State is 100% operational at all times.
She has never experienced a propeller shaft failure.
```

### 4. The Shipyard: What £117 Billion Buys

The infinite scroll section, but framed as a "shipyard order book."

Header:

> *"Each year, the UK's welfare bill increases by approximately £117 billion more than it was in 2015. This is what that money could build — annually — if it were redirected to naval construction."*

> *"To be clear: no one is proposing this. But the numbers are instructive."*

The user scrolls through the shipyard. Ships appear one by one, each with a small label and running cost counter.

```
ANNUAL OUTPUT OF THE £117bn SHIPYARD

Type 26 Frigates ×139
[grid of 139 tiny ship silhouettes]
(The Royal Navy has ordered 8. Total. Ever.)

OR

Astute-class Submarines ×73
[grid of 73 submarine silhouettes]
(The Royal Navy has 7. One works.)

OR

Queen Elizabeth-class Carriers ×33
[grid of 33 carrier silhouettes]
(The Royal Navy has 2. Both are in dock.)

OR

The entire "dream fleet" that defence analysts say
Britain needs — 4 carriers, 12 submarines, 24 escorts,
6 amphibious ships — every single year, for 15 years,
with £62 billion left over annually for pub quiz prizes.
```

End of scroll:

> *"You have scrolled past [X] ships. The Royal Navy currently has 63 in total, of which approximately 30 are operational. The UK built more ships than this in a single month during 1943."*

### 5. The Refit Planner (Slider Tool)

Framed as a naval refit planning document.

Header:

> **REFIT ORDER: HMS GREAT BRITAIN**
> *Redirect a percentage of the welfare spending increase to naval construction.*
> *Drag to adjust. Welfare spending will still have increased since 2015.*

Slider: 0% ——————————— 10%

As the user drags:

**Left panel: "Shipyard Output"**
Shows ships being added to a formation diagram.

- **1% (£1.17bn/yr):** +1 frigate per year. RFA replenishment ships funded. Crew shortage addressed. *"A modest start. The French are not yet worried."*
- **2% (£2.34bn/yr):** Frigate and submarine build accelerated. Third carrier feasible within 15 years. *"NATO notices."*
- **3% (£3.5bn/yr):** Full dream fleet in 15 years. 4 carriers, 12 SSNs, 24 escorts. *"Britain has a navy again."*
- **5% (£5.85bn/yr):** Dream fleet in 10 years plus significant autonomous systems and R&D. *"Britannia is checking Google Maps for the waves she used to rule."*
- **10% (£11.7bn/yr):** Largest naval expansion since WWII. Entirely new shipyard infrastructure. Export programme. *"The Admiralty is weeping with joy. The Treasury is just weeping."*

**Right panel: "Welfare Impact"**
The critical bit — shows welfare spending is barely affected:

- **At 0%:** Welfare: £334bn (+£117bn since 2015, +54%)
- **At 3%:** Welfare: £330.5bn (+£113.5bn since 2015, +52%). Bar barely moves.
- **At 5%:** Welfare: £328.2bn (+£111.2bn since 2015, +51%). Still barely moves.
- **At 10%:** Welfare: £322.3bn (+£105.3bn since 2015, +49%). STILL enormous.

Annotation at bottom:

> *"At 3% reallocation, welfare spending has still increased by £113.5 billion since 2015 — a 52% rise. The Royal Navy has gone from half a fleet to the most capable European naval force. The pensioners are fine."*

### 6. What's Your HMS? (Postcode Lookup)

The viral centrepiece. Framed as a ship commissioning ceremony.

Header:

> **COMMISSIONING CEREMONY**
> *Every constituency has its own HMS. Enter your postcode to commission yours.*

Input field styled as a naval signal form:

```
FROM:    ADMIRALTY
TO:      [ENTER POSTCODE]
SUBJECT: YOUR LOCAL VESSEL ASSESSMENT
```

User enters postcode → resolves to parliamentary constituency → pulls DWP data.

**Result card (also the shareable OG image):**

```
╔══════════════════════════════════════════════════╗
║  HMS HACKNEY SOUTH                               ║
╠══════════════════════════════════════════════════╣
║  Annual Displacement:  £347,000,000              ║
║  Crew:                 12,400 working-age         ║
║                        benefit claimants          ║
║  UC Claimants:         8,200                      ║
║  Could Build:          1× Type 26 Frigate         ║
║                        every 2.4 years            ║
║  Actually Builds:      0 warships                 ║
║                                                   ║
║  "A fine vessel. Displaces more than a            ║
║   Type 45 destroyer costs to build."              ║
╚══════════════════════════════════════════════════╝
          hmsbenefitstate.co.uk/hackney-south
```

Each constituency also gets a sarcastic one-liner generated from its data:

- High spend areas: *"HMS [Name] could single-handedly fund a frigate every [X] years. Instead she funds [top benefit category]."*
- Low spend areas: *"HMS [Name] is a modest patrol vessel. She couldn't even buy a torpedo annually."*
- Naval base constituencies: *"HMS [Portsmouth South] spends £Xm on benefits. The naval base next door is begging for crew."*

**Comparison feature:** After seeing their own, users can tap "Compare with another constituency" or "Compare with a real warship" — generates a side-by-side card.

**Share prompt:**

> *"Your vessel has been commissioned. Share your HMS with your crew."*
>
> [Share on X] [Copy Link] [Share on WhatsApp]

The share URL is `hmsbenefitstate.co.uk/[constituency-slug]` — each one is a real page with its own OG image for proper unfurling.

### 7. The Caveats (The Dry Dock)

Framed as a maintenance report. This section is essential for credibility.

> **DRY DOCK: MAINTENANCE NOTES & KNOWN DEFECTS**
>
> This vessel assessment contains the following known limitations:
>
> **1. Pensions are the hull, not the armament.**
> 55% of welfare spending (£178bn) goes to state pensioners. The triple lock drives most of the increase. Pensioners paid in their whole lives. This isn't "waste" — it's the largest fiscal commitment the state makes.
>
> **2. Nominal figures don't account for inflation.**
> All figures on this site are in nominal (cash) terms. Some of the increase since 2015 is simply prices going up. In real terms the increase is smaller — but still enormous.
>
> **3. You can't just throw money at shipyards.**
> UK shipbuilding capacity is constrained. BAE's Clyde yards can build ~1 frigate per year. Barrow can build ~1 submarine at a time. Even with unlimited budget, you'd need to expand yard capacity first, which takes 5+ years.
>
> **4. Crew is harder than steel.**
> The Royal Navy is 3,000+ personnel short. Recruitment has dropped 22% year-on-year. You can build ships faster than you can train sailors. Any naval expansion needs a recruitment revolution.
>
> **5. The comparison is illustrative, not prescriptive.**
> This site does not advocate cutting benefits. It advocates understanding scale. If you understand the scale and still think the current allocation is correct, that is a perfectly legitimate position.
>
> *"A ship that cannot be honest about her defects will eventually sink. We prefer to stay afloat."*

### 8. Footer: Sources & Ship's Log

```
SHIP'S LOG — DATA SOURCES

Welfare expenditure:     GOV.UK Benefit Expenditure & Caseload Tables (Dec 2024)
                         DWP Stat-Xplore (constituency-level data)
                         OBR Economic & Fiscal Outlook (March 2025)
                         HM Treasury PESA 2025

Defence expenditure:     House of Commons Library CBP-8175 (Oct 2025)
                         MOD Defence Departmental Resources 2024
                         NAO Equipment Plan Reports 2023-2024

Fleet status:            MOD Parliamentary Answers (Jan 2026
