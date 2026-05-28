# Handoff — Level 4 Diploma detail page

**New page** for the existing Julie Lam site. Reuse the current design system, components, fonts, palette, and section patterns (`.hero` + wave divider, `.espresso` dark sections, `SectionHead`, `Reveal`, `.btn`/`.btn-light`, `.wrap`, `.row`/cols). Match the style of the existing Courses/About pages. This is the dedicated detail page behind Courses item #04 (the Crossfields diploma) — link "Enquire/Discover more" on that card to this page, and add it under the nav Courses dropdown.

- **Route/file:** `page-diploma.jsx` (component `PageDiploma`), register in `app.jsx` router as `diploma`, add to `bundle.jsx`.
- **Page title:** CFI Level 4 Diploma in Integrative Early Childhood Pedagogy (EYE): Steiner Waldorf Pathway

## Assets (already in /assets)
- `assets/tutor-delia.webp` — Delia Sesiu (older woman, glasses, beige cardigan, hibiscus)
- `assets/tutor-rowena.webp` — Rowena Markies (blonde, glasses, tweed jacket, agapanthus)
- `assets/tutor-amy.webp` — Amy Punton (younger, long brown hair, white sweater)
- `assets/crossfields.webp` — Crossfields Institute logo (existing)
- Reuse existing photos for hero/atmosphere (e.g. `child-tree.webp`, `tea-still.webp`, `window-warm.webp`) — no new hero photo provided; pick one that fits.

---

## Sections (in order)

### 1. Hero (espresso/dark, like other interior heroes)
- Eyebrow: `Teacher Training Qualification`
- H1: **CFI Level 4 Diploma in Integrative Early Childhood Pedagogy (EYE)** — with *Steiner Waldorf Pathway* as italic accent line
- Sub: "Crossfields Institute, UK, is the awarding body for this Diploma. It is also registered with the International Association of Steiner Waldorf Early Childhood Education (IASWECE)."
- Small line: "The extended units were co-created by Julie Lam, founder of Highgate House School and Crossfields Institute, UK." (link "Highgate House School" → /about)
- Wave divider into cream.

### 2. Intro + IASWECE (cream; two-col, logo left / text right)
- Left: IASWECE wordmark/logo. *(No IASWECE asset supplied — use a text lockup "IASWECE — International Association for Steiner/Waldorf Early Childhood Education" in brand red/gold, or ask client for the logo.)* Crossfields logo may sit here too.
- Right copy:
  > This Diploma empowers adults to profoundly impact children's wellbeing through deeper understanding of human development. Building on 20+ years of success as a UK Steiner Waldorf qualification, our program uniquely addresses the evolving needs of today's children, parents, and educators.
  >
  > This transformative journey awakens your capacity to:
  - Understand children's developmental needs at each stage
  - Create nurturing environments that support natural growth
  - Develop authentic presence in your work with children
  - Build meaningful connections with families and colleagues
  - Transform challenges into opportunities for growth
  >
  > Our experienced tutors bring this time-tested wisdom to life, making it relevant and accessible for modern educational settings while maintaining the depth of Waldorf principles.

### 3. "Who is this course for?" (espresso dark, big left heading + photo right)
Intro: "The course is suitable whether you wish to qualify in Waldorf early years education or you wish to understand the early years from a Waldorf perspective. It is for:"
- Parents and professionals wishing to support children holistically in the family and other settings
- Anyone working in mainstream education but wishing to understand Waldorf principles and practice in the early years
- Parents and professionals wishing to take up early childhood work in the future
- Anyone wanting to qualify as a recognised Early Years Educator in UK and become a group leader in a kindergarten

### 4. "Flexibility & Options" (can share section 3's column or be its own block)
- The whole course is part time over 2 years for full UK Diploma
- Certificate of Attendance (without assignments)
- Individual units of specialisation
- Online, recorded, live and self-study
- Individual Units can be taken by interested parents wishing to understand children better and can also count towards CPD hours in other areas of work (link "View our CPD Courses" → mini courses)
- **CTA button:** `Apply Now` → Connect page

### 5. Official recognition (cream, centered narrow text)
- "This teacher training qualification is on the official registered list of recognized qualifications in UK (known as **Ofqual**) granting **EYE (Early Years Educator)** status in the UK."
- "The full specification of course content and description can be found at the following links:"
- Link: **Official Qualification Specification** (placeholder href — client to supply URL)
- "It is a matter of discretion for individual employers to recognize any qualification to which this course may lead."

### 6. Meet our tutors
- Heading: **Meet our tutors.** Sub: "Childhood experts and specialists (link → /about) with over 30 years of experience are here to support you every step of the way."
- Three alternating photo/bio rows (like a profile band; alternate image side per tutor). Name as serif heading + small role label.

**Delia Sesiu** — `assets/tutor-delia.webp`
> With over 26 years as a Steiner Waldorf Early Years practitioner, Delia brings profound insight into nurturing childhood's sacred potential. Invited by Julie Lam to strengthen the anthroposophical foundations at Highgate House School, she joined as a core tutor for the Conscious Teaching Diploma after 18 years pioneering kindergarten programs and teacher training in South Africa.
>
> Working closely with Julie, Delia helps adults deepen their understanding of early childhood's transformative nature. Their collaborative work creates powerful online learning experiences that illuminate the essential needs of young children. Her expertise spans anthroposophy, eurythmy, and extensive experience in Camphill communities.
>
> *'Early childhood is where we lay the foundation for authentic selfhood, inner freedom, and the capacity to love,' Delia shares. 'In these rapidly changing times, understanding what it truly means to be human becomes our most essential task in supporting our children's future.'*

**Amy Punton** — `assets/tutor-amy.webp`
> Amy combines over 20 years of Steiner Waldorf early years expertise with a deep connection to Hong Kong, where she was raised and now raises her own two daughters. After UK training in mainstream education, she joined Highgate House in 2003, becoming one of the first graduates of the IASWECE-qualified Waldorf educator training brought to Hong Kong by founder Julie Lam.
>
> Under Julie's mentorship, Amy deepened her work with the birth-to-three phase, gradually taking leadership of the parent-child programs Julie had established. Her approach weaves together Waldorf wisdom with holistic practices including infant massage, reiki, and sound therapy. Her weekend family adventures in nature inform her belief that we thrive through active exploration and open-hearted learning.
>
> *'Children flourish when adults bring gentle presence and genuine curiosity to their relationships,' Amy shares.* Through her continued collaboration with Julie, she creates spaces where both children and adults can discover their natural vitality and wisdom.

**Rowena Markies** — `assets/tutor-rowena.webp`
> Rowena and Julie's friendship began over 18 years ago when their sons attended the same Waldorf School class. They share a deep commitment to authentic parenting, supporting both children and parents in their learning journey.
>
> With over three decades in education, Rowena's path from primary teacher to neurodevelopment therapist was inspired by her own children's learning challenges. Her expertise in sensory and reflex integration brings a unique perspective on movement as a child's first language.
>
> Rowena brings a unique, holistic approach to child development that emphasizes the critical importance of the early years in helping children reach their full potential.
>
> Drawing from her experience across Mainstream, Independent, and Steiner schools, Rowena now dedicates herself to empowering parents through consultations and workshops. She helps families understand and navigate their children's learning challenges, sharing insights about developmental foundations that impact learning. Her work is enriched by compelling real-world examples that illuminate this vital field of child development, offering practical guidance and building confidence.

### 7. Closing CTA band (espresso)
Reuse the footer's "another way to lead" tone — short line + `Apply Now` (→ Connect) and `Back to all courses` (→ Courses).

---

## Notes / open items (flag to client)
- **IASWECE logo** not supplied — placeholder text lockup used; request asset.
- **Official Qualification Specification** + **Apply** links are placeholders — need real URLs.
- Tutor "logo" name-graphics from the old site (RELAX/DELIAS etc.) were decorative Squarespace assets — omitted; name set in the brand serif instead.
