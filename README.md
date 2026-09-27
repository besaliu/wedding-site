# Ben & Cristalyn — Wedding Invitation Website

A wedding invitation website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons**. Designed with a warm beige aesthetic, clean sans-serif typography, soft card borders, and subtle shadows.

---

## Features

- **Hero & Live Countdown**: Landscape hero photo, couple names, date and location badges, and a live countdown (Days, Hours, Minutes, Seconds).
- **Walk Down Memory Lane (Our Story)**: Alternating vertical timeline on desktop (streamlined on mobile) with photo modal lightbox.
- **The Wedding Party (10-Person Carousel)**: Segmented tab toggle for **Bridesmaids (5)** and **Groomsmen (5)** with swipeable and clickable carousel controls (touch swipe, arrows, pagination dots).
- **Logistics & Venue Info**:
  - Venue details with **1-Click Google Maps directions** and address copy button.
  - **"Add to Calendar"** button supporting **Google Calendar** web link and **.ics universal calendar file download** (for Apple Calendar & Outlook).
  - Day-of itinerary flow (Ceremony, Cocktail Hour, Dinner, Toasts, Dancing, Send-off).
  - Parking and valet instructions.
- **Hotel Block**: Accommodations card with room block rate, cutoff date, shuttle details, and **1-click discount code copy** (`BENCRISTALYN27`).
- **3 Cash Funds & QR Codes**:
  - Wedding Celebration Fund
  - Honeymoon Adventure Fund
  - New Home & Future Fund
  - Interactive QR codes for Venmo / Zelle, 1-click handle copying, and mobile deep-link buttons.
- **FAQ Accordion**: Upfront answers for plus-ones (strictly named guests), children policy (adults-only), dress code, and parking.
- **Strict Guest List RSVP System**:
  - Auto-complete search against guest database (`guestsData.js`).
  - Household/Party grouping (e.g. couples/families can RSVP together).
  - Individual attendance status (Attending / Declining) for each party member.
  - Dietary restrictions selector and custom note field.
  - Celebration confetti burst on submission.
  - Dual backend support: **Netlify Forms (native CSV export)** + optional **Google Sheets Webhook**.

---

## Project Structure

```text
wedding-site/
├── index.html                 # Entry HTML with Google Fonts & Netlify hidden form
├── netlify.toml               # Netlify build configuration & SPA redirects
├── package.json               # Dependencies and build scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom warm-beige palette & luxury styling
├── vite.config.js             # Vite configuration
├── src/
│   ├── main.jsx               # React DOM entry point
│   ├── App.jsx                # Main page layout
│   ├── index.css              # Tailwind imports & custom glassmorphism styles
│   ├── data/
│   │   ├── weddingConfig.js   # ⭐️ All wedding content, dates, party, & funds
│   │   └── guestsData.js      # ⭐️ Guest list for strict RSVP search & verification
│   └── components/
│       ├── Navbar.jsx         # Sticky glass navigation & mobile menu
│       ├── Hero.jsx           # Hero section with couple photo & RSVP button
│       ├── Countdown.jsx      # Live countdown timer
│       ├── OurStory.jsx       # Vertical timeline
│       ├── PhotoModal.jsx     # Lightbox modal for enlarged photos
│       ├── WeddingParty.jsx   # 10-person bridal party carousel with tabs
│       ├── Logistics.jsx      # Venue, calendar sync, & schedule flow
│       ├── HotelBlock.jsx     # Hotel partner & discount code
│       ├── Registry.jsx       # 3 Cash funds, QR codes, & deep links
│       ├── FAQ.jsx            # Accordion FAQ
│       ├── RSVP.jsx           # Strict guest lookup & RSVP submission
│       └── Footer.jsx         # Sign-off, hashtag, & back-to-top
```

---

## Quick Start (Local Development)

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## How to Customize

### 1. Wedding Details & Content
Open `src/data/weddingConfig.js` to change:
- Couple names, wedding date, countdown target date
- Venue name, address, Google Maps URL
- Story milestones (dates, photos, descriptions)
- Wedding party members (photos, roles, blurbs)
- Hotel block name, group code, rate, booking URL
- Cash fund Venmo handles, Zelle emails, and QR code links
- FAQ questions and answers

### 2. Guest List
Open `src/data/guestsData.js` to add your invited guests:
```javascript
{
  id: "guest-1",
  primaryName: "Jane Smith",
  partyMembers: ["Jane Smith", "John Smith"],
  partySize: 2,
  group: "Family"
}
```

---

## Deploying to Netlify

### Option A: Via GitHub (Recommended)
1. Commit and push your changes to your GitHub repository:
   ```bash
   git add .
   git commit -m "Build wedding website"
   git push origin main
   ```
2. Go to [Netlify](https://app.netlify.com) and click **"Add new site"** &rarr; **"Import an existing project"**.
3. Select your repository `besaliu/wedding-site`.
4. Netlify will automatically detect settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy Site**.

### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

---

## Managing RSVPs & Exporting to CSV

### 1. Native Netlify Forms (Zero Setup)
When guests submit the RSVP form on your live Netlify site:
1. Log in to [app.netlify.com](https://app.netlify.com).
2. Click your wedding site and navigate to the **Forms** tab.
3. You will see all submissions under the form name `wedding-rsvp`.
4. Click **"Download CSV"** to export all attendee responses, party members, and dietary needs directly into Excel / Google Sheets!

### 2. (Optional) Live Google Sheets Webhook
If you want submissions to instantly append rows directly into a Google Sheet in real-time:
1. Open a new Google Sheet.
2. Go to **Extensions** &rarr; **Apps Script**.
3. Paste the following script:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var data = JSON.parse(e.postData.contents);
     sheet.appendRow([
       new Date(),
       data.guest_name,
       data.party_members,
       data.attendance,
       data.dietary_restrictions,
       data.notes
     ]);
     return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
4. Click **Deploy** &rarr; **New deployment** &rarr; Select type **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Copy the generated Web App URL and paste it into `googleSheetWebhookUrl` inside `src/data/weddingConfig.js`:
   ```javascript
   rsvp: {
     googleSheetWebhookUrl: "https://script.google.com/macros/s/.../exec",
     ...
   }
   ```
