# Chefmade SE – Carrd build sheet (Malmö/Skåne demand test)
Source: https://www.chefmade.dk homepage (fetched 2026-10-23; the subpages /how-it-works, /chefs, /menus, /prices, /faq return 404 – all content lives on the homepage). Template: blank, one page. Fonts: Playfair Display (headings), Poppins (body). Colors: green #006838 (buttons/accents), beige #F6F5F2 (alternating sections), text #1C1C1C, Trustpilot green #00B67A.
Page settings: Language = sv; Title "Chefmade – Privatkock i Malmö och Skåne"; Settings → Head code: `<meta name="robots" content="noindex">` while testing (remove for launch if wanted).
Images: hosted on Chefmade's own DigitalOcean CDN (fra1.digitaloceanspaces.com/chefspace) — download them and upload into Carrd instead of hot-linking.

## 1. Hero — Container (Full width, bg image https://fra1.digitaloceanspaces.com/chefspace/static/images/home_page_12.jpg, dark overlay ~50%)
- Text: "Trustpilot ★★★★★ 5.0 · Utmärkt" (Trustpilot 5.0 · Excellent)
- Text H1: "Michelinerfarna kockar för både små och stora tillfällen – nu i Malmö och Skåne." (Michelin-experienced chefs for small and big moments – now in Malmö and Skåne)
- Text: "Private dining på högsta nivå, omsorgsfullt komponerad och fulländad in i minsta detalj." (Private dining at the highest level, carefully composed and perfected to the last detail)
- List: "Förfrågan utan förpliktelser" (No-obligation request) / "Personligt erbjudande inom 24 timmar" (Personal offer within 24 hours) / "Över 100 verifierade kockar" (Over 100 verified chefs)
- Button: "Skicka förfrågan" (Send request) → link `#forfragan`

## 2. How it works — Container (beige), H2 + Columns ×3 (Text)
- H2 "Så skapar vi er middag" (How we create your dinner)
- 1 "Hitta rätt kock" – "Utforska våra kockprofiler, eller låt oss matcha er med den profil som passar ert tillfälle." (Find the right chef – explore profiles or let us match you)
- 2 "Anpassa upplevelsen" – "Vi sätter ihop menyn efter era önskemål och tar hänsyn till allergier och kostpreferenser." (Tailor the experience – menu to your wishes, allergies, diets)
- 3 "Njut av kvällen" – "Kocken står för inköp, tillagning, servering och disk, så att ni kan vara närvarande med era gäster." (Enjoy the evening – chef handles shopping, cooking, serving, cleanup)

## 3. Featured chefs — Container, H2 + Columns ×3 (Image + Text)
- H2 "Utvalda kockar" (Featured chefs)
- Nikolaj — img https://fra1.digitaloceanspaces.com/chefspace/static/images/nikolaj_dish.jpg — "Michelinupplevelse – inklusive Noma" / "Modern nordisk" / "Från 1 200 DKK/person" / "Arrangemang för 6–15 personer" (Michelin experience incl. Noma / modern Nordic / from DKK 1,200 pp / events for 6–15)
- Gabriele — img https://fra1.digitaloceanspaces.com/chefspace/static/images/gabriele_dish.jpg — "Michelinupplevelse – inkl. Geranium" / "Asiatisk fusion" / "Från 1 100 DKK/person" / same
- Giovanni — img https://fra1.digitaloceanspaces.com/chefspace/static/images/giovanni_dish.webp — "Michelinupplevelse – inkl. Jordnær" / "Modernt italienskt" / "Från 700 DKK/person" / same
- (Also on chefmade.dk: Niklas – French, from 700; Oliver – modern, from 600; Matheu – international, from 750. Swap in if those cover Skåne.)

## 4. Prices — Container (beige), H2, Text, Columns ×3
- H2 "Kockkonst värd sitt pris" (Culinary art worth its price); Text "Våra kockar är mästare i sitt hantverk och förvandlar utvalda råvaror till minnesvärda menyer." (Our chefs are masters of their craft…)
- Casual: "Det essentiella" / "Instegspriset för att uppleva fine dining" / "Från 650 DKK/gäst" / "3–5 rätter · Fina detaljer" → Button "Förfråga nu" (Inquire now) → `#forfragan`
- Gourmet: "Signaturen" / "Din privata Michelinstjärnerestaurang" / "Från 1 200 DKK/gäst" / "4–7 rätter · Exklusiva råvaror · Raffinerade förberedelser · Kockar på Michelinnivå" → same button
- Michelin: "Apex" / "Hela spektrumet av din kocks kök, rätt för rätt." / "Från 2 000 DKK/gäst" / "7+ rätter (avsmakningsmeny) · Kurerad kulinarisk resa · Handplockade toppkockar" → same button
- Small text: "Priserna gäller för grupper på 6–15 personer. Alltid ingår: grundläggande bordsservering, försäkring, utsökta råvaror, skinande rent kök efteråt, hänsyn till intoleranser, personlig omsorg, råd om vin och dryck, certifierade professionella kockar." (Prices for groups of 6–15. Always included: …)
- Prices stay in DKK. [PRIS I SEK] only if Konrad sets SEK prices himself.

## 5. Testimonials — Container, H2, Columns ×2 (Text), quotes translated from chefmade.dk
- H2 "Det här älskar våra gäster" (What our guests love); sub "Trustpilot 5.0 – Utmärkt. Över 100 000 gäster."
- "Sublimt" – ”Min kväll var fantastisk, Oliver Bendi var sublim som kock, han lagade det bästa jag har smakat på många, många år. Mina gäster höll med mig. Kan bara ge Oliver de bästa rekommendationer.” – Om kocken Oliver Bendi
- "Fantastisk upplevelse!" – ”En helt igenom professionellt genomförd meny skapad av Alex och co. Råvarorna var färska, smakerna fylliga och intensiva och utseendet verkligen inbjudande och en fröjd för ögat. […] Köket var helt rent och fläckfritt när Alex och co lämnade oss igen!” – Om kocken Alex
- "Fantastiskt" – ”Vi hade besök av Rafael som var otroligt trevlig. Vi fick den mest fantastiska maten och allt var undanplockat när han gick.” – Om kocken Rafael
- "Middag med Bastian som kock" – ”Det var supergott – helt som önskat.” – Om kocken Bastian Ganjavi

## 6. FAQ — Container (beige), H2 + Text pairs (Carrd has no accordion; use bold question + text)
- "Vanliga frågor" (FAQ)
- Hur bokar jag en privatkock? – Du väljer tillfälle, datum, antal gäster och plats – sedan får du menyförslag från relevanta kockar och kan boka direkt. (How to book)
- Hur kort varsel kan jag boka med? – Vi rekommenderar att boka minst 5–7 dagar i förväg. Vissa kockar kan även ta emot brådskande förfrågningar. (Notice)
- Hur många rätter består en meny av? – Det beror på vilken kock och meny du väljer. De flesta av våra private dining-upplevelser består vanligtvis av 4–8 serveringar, men vissa kockar erbjuder både kortare och mer omfattande avsmakningsmenyer. (Courses)
- Kan upplevelsen anpassas efter särskilda önskemål? – Självklart – vi erbjuder allt från vinmeny och show cooking till specialmenyer. Berätta vad du drömmer om. (Custom wishes)
- Hur säkerställs hög hygien? – Alla kockar arbetar enligt professionella hygienstandarder och tar med egen, ren utrustning. (Hygiene)
- När dras betalningen? – Först när kocken har accepterat din bokning. (Payment)
- Vad händer om kocken lämnar återbud? – Vi hittar en ny kock så snabbt som möjligt – annars får du förstås pengarna tillbaka. (Chef cancels)

## 7. Request form — Container, ID `forfragan`, H2 + Text + Form element
- H2 "Berätta om ert arrangemang" (Tell us about your event); Text "Från intima middagar till stora evenemang sätter vi ihop kock, meny och service efter era önskemål."
| Label (sv) | Gloss | Carrd field type | Required |
|---|---|---|---|
| Datum | Date | Date | yes |
| Antal gäster | Number of guests | Number | yes |
| Ort/område i Skåne | City/area in Skåne | Text (placeholder "t.ex. Malmö, Lund, Helsingborg") | yes |
| Tillfälle | Occasion | Select: Middagsbjudning, Företag, Födelsedag, Bröllop, Julfest, Annat | yes |
| Budget per person (valfritt) | Budget pp, optional | Text | no |
| Namn | Name | Name | yes |
| E-post | Email | Email | yes |
| Telefon | Phone | Text (Carrd has no tel type; or Phone if available) | no |
| Meddelande | Message | Textarea | no |
- Text under form: "Förfrågan är utan förpliktelser. Observera: vårt team svarar på engelska." (No obligation. Note: our team replies in English.)
- Submit label: "Skicka förfrågan". Form type/Action: **Send to Email** → recipient = Chefmade request inbox (Konrad to set); requires Carrd Pro Standard+.
- On Success: **Redirect** to a URL like `https://<site>/#tack` (a hidden "Tack" section) or show Message: "Tack! Vi har tagit emot din förfrågan och återkommer inom 24 timmar (på engelska)." (Thanks! We've received your request and will reply within 24 hours, in English.)

## Google Ads conversion
- Preferred: On Success → Redirect to `#tack` section / separate thank-you page; in Google Ads create a "Submit lead form" conversion triggered on page URL containing `#tack` (or use GTM). Carrd Pro: paste the gtag base tag in Settings → Head, and put the event snippet `gtag('event','conversion',{send_to:'AW-XXXX/XXXX'})` in an Embed (Code, hidden) inside the thank-you section/page.
- If using "Message" instead of redirect, there's no URL change → conversion can't fire by URL; use redirect.
- Respect consent: Swedish/EU traffic needs a cookie-consent banner (Consent Mode v2) before Ads tags fire.
