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

Fleet status:            MOD Parliamentary Answers (Jan 2026)
                         Navy Lookout
                         19FortyFive fleet analysis (Feb 2026)
                         Wikipedia (Royal Navy, QE-class, Type 26)

Ship costs:              BAE Systems Type 26 contract (Nov 2022: £4.2bn/5 ships)
                         BAE Systems Type 26 batch 1 (Jul 2017: £3.7bn/3 ships)
                         Type 31 programme (£1.25bn/5 ships)
                         NAO Equipment Plan 2023-2033 (Astute, Dreadnought)
                         QE-class outturn (~£7bn for 2 ships)

Constituency data:       DWP Stat-Xplore (quarterly, by parliamentary constituency)
                         NOMIS labour market statistics
                         ONS mid-year population estimates

MP contact details:      TheyWorkForYou API (members.parliament.uk fallback)

Historical fleet size:   Navy Command / MOD annual reports
                         IISS Military Balance (various years)
                         Hansard records

All welfare figures are nominal (not inflation-adjusted).
Ship costs are approximate and based on most recent contract values.
This site is not affiliated with the Ministry of Defence, DWP, or any political party.

Built by [name]. Last updated: [date]. Data refresh: annually after PESA publication.

"A ship without a logbook is just floating. We keep ours up to date."
```

---

## Section 9: The Vanishing Fleet (Timeline)

A horizontal scrolling timeline showing the collapse of Royal Navy ship numbers from the end of the Cold War to today. This is designed to be screenshotted on its own — it should work as a standalone image.

**Design:** A single horizontal band, dark background, ship silhouettes arranged in formation for each year. As you scroll right (or swipe on mobile), ships disappear. The formations get thinner and sadder. The silhouettes that vanish should briefly flash red before fading out.

**Data points:**

```
1990    ~150 escorts, submarines & major combatants
        "Options for Change" review begins post-Cold War cuts

1997    ~100 vessels
        Strategic Defence Review

2005    ~85 vessels
        "Delivering Security in a Changing World" cuts

2010    ~70 vessels
        SDSR 2010: carriers cancelled then un-cancelled,
        Harriers scrapped, Ark Royal decommissioned

2015    ~63 vessels
        SDSR 2015: Type 26 cut from 13 to 8

2020    ~60 vessels
        "Global Britain" announced. Fleet continues shrinking.

2025    ~55 commissioned vessels (including those not operational)
        Albion-class retired. No amphibious capability.
        Both carriers in dock simultaneously.

2026    ~50 available on paper. ~30 operational.
        "The Royal Navy has more admirals than ships."
```

**End of timeline annotation:**

> *"In 1990, the Royal Navy had enough escorts to run three carrier groups, patrol the Atlantic, and maintain a permanent presence in five theatres simultaneously. In 2026, it cannot crew a single carrier strike group. The welfare budget increased by £117 billion annually in the same period. These two facts are not unrelated."*

**Technical note:** This should use CSS scroll-snap on mobile for clean decade stops. Each decade is a "page" you swipe through. On desktop, it's a smooth horizontal scroll within a fixed-height container with arrow key navigation.

---

## Section 10: Send to Your MP

Appears immediately after the postcode lookup result. The user has just seen their constituency's HMS card. Now give them something to do with it.

**Header:**

> **SIGNAL YOUR MP**
> *Your Member of Parliament represents [Constituency Name]. Let them know you've read the briefing.*

**Mechanic:** One-tap button that opens the user's default email client with a pre-filled email. Uses `mailto:` link with TheyWorkForYou API to resolve MP name and email from the constituency.

**Pre-filled email:**

```
To:      [mp.name]@parliament.uk
Subject: HMS [Constituency Name] — a question about spending priorities

Dear [MP Name],

I recently came across data showing that [Constituency Name] receives
approximately £[X]m per year in working-age benefits — equivalent to
the cost of [naval comparison, e.g. "one Type 26 anti-submarine frigate
every 2.4 years"].

Meanwhile, the Royal Navy currently has both aircraft carriers in dock,
only 3 of 6 destroyers operational, and 1 of 5 attack submarines
available for service.

I'm not writing to argue for benefit cuts. I'm writing to ask: does the
current balance between welfare spending (£334bn/year) and naval
capability (£15.5bn/year) reflect the UK's strategic needs, given the
current global security environment?

I'd welcome your thoughts.

Yours sincerely,
[Name]

Data source: hmsbenefitstate.co.uk/[constituency-slug]
```

**Fallback:** If TheyWorkForYou API is down or MP email unavailable, link to `writetothem.com` with the postcode pre-filled. Always works.

**Privacy:** No data stored. The email is composed entirely client-side. The site never sees the user's name or email address. Display this clearly.

---

## Section 11: Join the Crew (Email Capture)

Positioned after the MP section, before the footer. Styled as a naval recruitment notice.

```
╔══════════════════════════════════════════════════╗
║  JOIN THE CREW                                    ║
║                                                   ║
║  Receive dispatches from the Admiralty when        ║
║  new data is published.                           ║
║                                                   ║
║  We update annually when HM Treasury releases      ║
║  PESA figures. One email per year. No spam.        ║
║  We are not a political campaign.                  ║
║                                                   ║
║  [_______your@email.com_______] [ENLIST]          ║
║                                                   ║
║  Current crew strength: [X] subscribers            ║
╚══════════════════════════════════════════════════╝
```

**Technical:** Use Buttondown, Loops, or Resend for the email list. All are free at low volumes, have good APIs, and don't require a full marketing platform. Store nothing beyond email address. GDPR-compliant unsubscribe in every email.

**Confirmation message after signup:**

> *"You have been commissioned into the crew of HMS Benefit State. Your service number is #[sequential number]. Stand by for dispatches. Sincerely, The Admiralty."*

---

## OG Image Specifications

Three templates, all rendered server-side via Next.js `ImageResponse` (or `@vercel/og`). All 1200×630px for Twitter/LinkedIn/WhatsApp unfurling.

### Template 1: Homepage (static)

```
Background:  #0a0e17 (dark navy)
Layout:      Ship silhouette in profile, top third, thin cyan lines (blueprint style)
             Below: registry card text

Text:
  HMS BENEFIT STATE                    [large, monospace, off-white]
  Displacement: £334,000,000,000       [monospace, cyan]
  Crew: 5.5m claimants + 12.7m pensioners
  Speed: +£117bn/year
  Armament: None
  Status: Permanently alongside

  hmsbenefitstate.co.uk                [bottom right, small, grey]

Font:        JetBrains Mono or IBM Plex Mono (both available via Google Fonts,
             both render well in og:image)
```

### Template 2: Constituency (dynamic, one per postcode result)

```
Background:  #0a0e17
Layout:      Smaller ship silhouette, upper left
             Registry card text, centre

Text:
  HMS [CONSTITUENCY NAME]              [large, monospace, off-white, ALL CAPS]
  Annual Displacement: £[X]m           [cyan]
  Crew: [Y] working-age claimants
  Could Build: [Z]× Type 26 Frigates every decade
  Actually Builds: 0 warships

  "What's your HMS?"                   [italic, small, grey]
  hmsbenefitstate.co.uk                [bottom right]
```

### Template 3: Slider share (dynamic, based on slider percentage)

```
Background:  #0a0e17
Layout:      Split — left side shows fleet silhouettes, right shows text

Text:
  REFIT ORDER                          [small, grey, uppercase]
  REDIRECT [X]% OF THE WELFARE INCREASE [large, off-white]

  Fleet gains: [description]           [cyan]
  Welfare still up [Y]% since 2015     [red/coral]

  hmsbenefitstate.co.uk                [bottom right]
```

**Image generation notes:**
- Use `@vercel/og` with Satori — it supports a subset of CSS and renders to PNG at edge
- Embed font files directly (JetBrains Mono woff2 is ~50KB)
- Cache aggressively — constituency images won't change until data refresh
- Test rendering on Twitter Card Validator, LinkedIn Post Inspector, and WhatsApp (they all handle og:image slightly differently)

---

## Pre-Written Social Copy (Launch Kit)

Ready-to-copy posts for launch day. Provide these to early supporters, defence Twitter accounts, and anyone who helps spread the word.

### Twitter/X

**Post 1 (the hook):**
```
The UK spends £10,594 per second on welfare.

It spends £491 per second on the Royal Navy.

Both aircraft carriers are currently in dock.
Half the fleet is broken.

Enter your postcode. Find your HMS.

hmsbenefitstate.co.uk
```

**Post 2 (the stat):**
```
The annual increase in UK welfare spending since 2015
could buy 139 Type 26 frigates.

Every year.

The Royal Navy has ordered 8. Total.

hmsbenefitstate.co.uk
```

**Post 3 (the slider):**
```
Redirect 3% of the welfare spending increase to the Navy.

Result:
→ Full fleet rebuild in 15 years
→ 4 carriers, 12 submarines, 24 escorts
→ Welfare still up 52% since 2015

The welfare bar barely moves. The fleet transforms.

hmsbenefitstate.co.uk
```

**Post 4 (the postcode hook):**
```
Every UK constituency has its own HMS.

Mine is HMS [Constituency].
Annual displacement: £[X]m.
Could build one warship every [Y] years.
Builds zero.

What's yours?

hmsbenefitstate.co.uk
```

**Post 5 (the timeline):**
```
Royal Navy ship count:

1990: ~150
2000: ~100
2010:  ~70
2020:  ~60
2026:  ~30 operational

Welfare spending in the same period:
£150bn → £334bn

hmsbenefitstate.co.uk
```

### WhatsApp / iMessage (shorter, more casual)

```
Have you seen this — you put your postcode in and it shows
how much your area spends on benefits as if it were a warship.

Mine is "HMS [Constituency]" 😂

hmsbenefitstate.co.uk
```

```
The UK spends £10,594 per second on welfare and £491
on the entire Royal Navy. Both carriers are in dock.
This site is mad: hmsbenefitstate.co.uk
```

---

## Mobile-Specific Implementation Notes

The site will be viewed primarily on phones (80%+ of viral social traffic). Every section must be designed mobile-first.

### Postcode Tool
- Input field uses `inputmode="text"` and `autocomplete="postal-code"` to trigger the right keyboard
- Auto-focus the input on scroll-into-view (use Intersection Observer, not on page load — don't hijack focus before the user gets there)
- Result card must fit in a single viewport without scrolling — no card taller than ~500px
- Share buttons use the Web Share API (`navigator.share()`) on supported devices, falling back to copy-to-clipboard with a toast confirmation

### Infinite Scroll (Shipyard)
- Do NOT render all ship silhouettes on mount. Use Intersection Observer to progressively reveal rows as the user scrolls
- Each "row" of ships is a single SVG with repeated `<use>` elements, not individual DOM nodes
- Running counter is `position: sticky` at bottom of viewport
- On slow connections, show a placeholder grid that fills in progressively

### Slider Tool
- Use a native `<input type="range">` with custom styling (not a JS-only slider) for best mobile touch behaviour
- Fleet and welfare panels stack vertically on mobile (fleet on top, welfare below)
- Ship silhouettes animate in/out with `will-change: transform` for GPU acceleration
- Haptic feedback on snap points (1%, 3%, 5%, 10%) using `navigator.vibrate(10)` where supported

### Fleet Timeline
- Horizontal scroll with CSS `scroll-snap-type: x mandatory` and `scroll-snap-align: center` on each decade
- Swipe indicator (animated chevron) on first visit, hidden after first interaction
- Each decade is exactly `100vw` wide on mobile for clean snap stops
- Dot indicators below show current decade position

### General
- All text must be readable at default mobile font size — no text smaller than 13px
- Tap targets minimum 44×44px (Apple HIG)
- Dark theme means OLED screens save battery — mention this nowhere but appreciate it silently
- Test on: iPhone SE (small), iPhone 15 (standard), Samsung Galaxy S24 (Android), iPad Mini (tablet edge case)

---

## Data Pipeline & Refresh Process

### Initial Build
1. Export constituency-level benefit data from DWP Stat-Xplore (Housing Benefit, UC, PIP, ESA, JSA, Carer's Allowance — by parliamentary constituency)
2. Process into `constituencies.json`: ~650 entries, each with `{ slug, name, total_benefits_annual, uc_claimants, pip_claimants, working_age_claimants, population }`
3. Merge with TheyWorkForYou constituency → MP mapping
4. Bundle as static JSON, served from CDN

### Annual Refresh (post-PESA, typically July)
1. Update welfare and defence time series from PESA tables
2. Re-export DWP Stat-Xplore data
3. Update fleet status from MOD sources
4. Update ship costs if new contracts announced
5. Redeploy. Send "dispatch" email to crew list.

### Data Integrity
- All constituency calculations should be reproducible from raw DWP exports
- Include a `/methodology` page (linked from footer) with downloadable CSV of all data used
- Version the data: display "Data vintage: PESA 2025 / DWP Q4 2024" in the footer

---

## Legal & Compliance

- **Not a political campaign.** No party affiliation. No calls to vote for anyone. No lobbying registration required (UK threshold: paid lobbying of ministers/permanent secretaries).
- **Crown Copyright data.** DWP and PESA data are published under the Open Government Licence v3.0. Attribute correctly. Ship photographs: use only MOD images released under OGL or Creative Commons.
- **GDPR.** Email list requires explicit opt-in, unsubscribe in every email, data stored in EU/UK. Postcode tool processes data client-side only — no server-side storage of user postcodes.
- **Defamation.** Every factual claim must be sourced. Sarcastic commentary is opinion and clearly presented as such. Don't name individual benefit claimants or imply fraud.
- **Domain.** `.co.uk` is fine. No risk of confusion with a real government site (those use `.gov.uk`).
