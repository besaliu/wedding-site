/**
 * Wedding Invitation Website Configuration
 * Central source of truth for all wedding details, content, and settings.
 * Edit this file to customize names, dates, photos, venue, and funds.
 */

export const weddingConfig = {
  // Couple Information
  couple: {
    bride: "Sophia Martinez",
    groom: "Alexander Hayes",
    monogram: "S & A",
    hashtag: "#SophiaAndAlexSayIDo",
    weddingDate: "Saturday, October 24, 2026",
    ceremonyTime: "4:00 PM PST",
    // Countdown target ISO string
    countdownTarget: "2026-10-24T16:00:00-07:00",
    tagline: "We can't wait to celebrate our next chapter with our closest family and friends.",
  },

  // Hero Section
  hero: {
    eyebrow: "Together with their families",
    title: "Sophia & Alexander",
    subtitle: "Request the pleasure of your company at their wedding celebration",
    dateDisplay: "October 24, 2026 • Napa Valley, California",
    rsvpButtonText: "RSVP Now",
    detailsButtonText: "View Event Details",
    // Warm, elegant landscape couple image
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
  },

  // Our Story / Walk Down Memory Lane
  story: {
    sectionTitle: "Walk Down Memory Lane",
    sectionSubtitle: "From a rainy morning in Brooklyn to forever in Napa Valley.",
    milestones: [
      {
        id: "milestone-1",
        date: "September 2020",
        title: "The First Coffee in Brooklyn",
        description: "What was meant to be a 30-minute coffee break at a sunlit cafe in Dumbo turned into four hours of talking about music, favorite travel spots, and family recipes. We both knew right then that something special was beginning.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        location: "Brooklyn, New York",
      },
      {
        id: "milestone-2",
        date: "November 2021",
        title: "Moving In & Adopting Milo",
        description: "We signed our first lease together and within three weeks brought home Milo, our spirited golden retriever mix. Between DIY furniture projects and puppy training, our apartment quickly became our favorite place on earth.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        location: "New York, NY",
      },
      {
        id: "milestone-3",
        date: "June 2023",
        title: "Sunset over the Amalfi Coast",
        description: "Our first major international journey together. From renting a vintage Vespa along coastal cliffs to cooking pasta with a local family in Ravello, we made memories that cemented our dream of a lifetime of adventures together.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        location: "Amalfi, Italy",
      },
      {
        id: "milestone-4",
        date: "December 2025",
        title: "The Sunset Proposal at Point Reyes",
        description: "On a quiet, foggy evening on the Northern California coast, Alexander convinced Sophia to take a scenic cliffside walk. As the clouds parted to golden hour over the Pacific, he dropped to one knee. An easy and joyful 'YES!'",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
        location: "Point Reyes, California",
      },
      {
        id: "milestone-5",
        date: "October 24, 2026",
        title: "The Beginning of Forever",
        description: "Surrounded by our dearest friends and family, we exchange vows, celebrate, and start this beautiful lifelong adventure as husband and wife.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        location: "Napa Valley, California",
      }
    ],
  },

  // The Wedding Party (5 Bridesmaids & 5 Groomsmen)
  weddingParty: {
    sectionTitle: "The Wedding Party",
    sectionSubtitle: "Meet the wonderful people standing beside us on our special day.",
    bridesmaids: [
      {
        id: "bm-1",
        name: "Maya Lin",
        role: "Maid of Honor",
        relation: "Sophia's Sister",
        blurb: "Sister, confidante, and Sophia's lifelong best friend. Maya has been there for every milestone with unwavering support, boundless laughter, and the best playlist recommendations.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-2",
        name: "Claire Bennett",
        role: "Bridesmaid",
        relation: "College Roommate",
        blurb: "Sophia and Claire shared a tiny dorm room at NYU and became inseparable. From late-night study sessions to exploring new cities, Claire is the anchor of warmth in every group.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-3",
        name: "Elena Vance",
        role: "Bridesmaid",
        relation: "Childhood Friend",
        blurb: "Friends since summer soccer camp in 4th grade. Elena has witnessed every era of Sophia's life and brings infectious energy, spontaneous joy, and unconditional loyalty everywhere she goes.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-4",
        name: "Chloe Robinson",
        role: "Bridesmaid",
        relation: "Architecture Studio Partner",
        blurb: "Bonded over architecture charrettes, endless coffee runs, and weekend hikes. Chloe's eye for beauty and steadfast friendship have enriched Sophia's life immensely.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-5",
        name: "Hannah Davis",
        role: "Bridesmaid",
        relation: "Groom's Sister",
        blurb: "Alexander's sister and now one of Sophia's dearest friends. Hannah welcomed Sophia into the family from day one with open arms and unbeatable dry humor.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      },
    ],
    groomsmen: [
      {
        id: "gm-1",
        name: "Julian Vance",
        role: "Best Man",
        relation: "Alexander's Brother",
        blurb: "Alexander's younger brother and best friend since childhood. Julian has been his teammate in sports, gaming, and life, and will undoubtedly deliver a speech to remember.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-2",
        name: "David Kim",
        role: "Groomsman",
        relation: "High School Best Friend",
        blurb: "Met in freshman year debate club and bonded over a shared passion for classic cars and golf. David is the steady, dependable friend who always shows up when it matters most.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-3",
        name: "Marcus Sterling",
        role: "Groomsman",
        relation: "College Track Teammate",
        blurb: "Ran track together at Columbia and navigated early post-grad careers as roommates. Marcus brings contagious positivity and is always the life of the celebration.",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-4",
        name: "Liam Chen",
        role: "Groomsman",
        relation: "The Matchmaker",
        blurb: "The culinary wizard who hosted the fateful rooftop brunch in Brooklyn where Sophia and Alexander first crossed paths. Forever credited with sparking this love story!",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-5",
        name: "Ethan Martinez",
        role: "Groomsman",
        relation: "Bride's Brother",
        blurb: "Sophia's older brother. Ethan and Alexander quickly bonded over snowboarding trips, good whiskey, and cheering for each other's dreams.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  // Venue & Schedule Logistics
  logistics: {
    sectionTitle: "Logistics & Venue",
    sectionSubtitle: "All the details you need for a seamless and memorable celebration.",
    venue: {
      name: "The Glasshouse Estate & Gardens",
      address: "1420 Olive Hill Lane",
      city: "Napa Valley, CA 94558",
      googleMapsUrl: "https://maps.google.com/?q=The+Glasshouse+Estate+Napa+Valley+CA",
      parkingInfo: "Complimentary valet parking is provided upon arrival at the estate gates. For guests planning to celebrate with wine, rideshare services (Uber and Lyft) are readily available.",
      note: "The ceremony and cocktail hour will take place outdoors on manicured lawn areas. Block heels or wedges are recommended.",
    },
    schedule: [
      {
        time: "3:30 PM",
        event: "Guest Arrival & Welcome Drink",
        location: "The Courtyard",
        description: "Arrive, grab a glass of chilled sparkling wine or artisanal lemonade, and take your seat in the garden.",
      },
      {
        time: "4:00 PM",
        event: "The Wedding Ceremony",
        location: "The Rose Garden Lawn",
        description: "Sophia & Alexander exchange vows beneath the hundred-year-old olive trees.",
      },
      {
        time: "5:00 PM",
        event: "Cocktail Hour & Hors d'oeuvres",
        location: "The Stone Terrace",
        description: "Enjoy signature cocktails, local Napa Valley wines, and seasonal passed canapés to acoustic jazz.",
      },
      {
        time: "6:30 PM",
        event: "Dinner & Toasts",
        location: "The Glass Conservatory",
        description: "A seated farm-to-table dinner featuring fresh Northern California produce and heartfelt toasts.",
      },
      {
        time: "8:30 PM",
        event: "Dancing & Celebration",
        location: "The Ballroom & Terrace",
        description: "Cake cutting, first dance, and a full evening on the dance floor!",
      },
      {
        time: "11:00 PM",
        event: "Sparkler Send-Off",
        location: "Grand Estate Driveway",
        description: "Send off the newlyweds under a canopy of sparklers before the evening concludes.",
      }
    ],
    calendarEvent: {
      title: "Sophia & Alexander's Wedding",
      description: "Celebrating the wedding of Sophia Martinez and Alexander Hayes at The Glasshouse Estate in Napa Valley.",
      location: "1420 Olive Hill Lane, Napa Valley, CA 94558",
      startDate: "20261024T230000Z", // UTC
      endDate: "20261025T060000Z",   // UTC
    }
  },

  // Hotel Block Information
  hotelBlock: {
    sectionTitle: "Accommodations",
    sectionSubtitle: "We have reserved a preferred room block for our guests traveling from out of town.",
    hotelName: "The Napa Valley Lodge & Suites",
    address: "2230 Vineyard Way, Yountville, CA 94599",
    rate: "$219 / night (Standard King or Double Queen)",
    groupCode: "SOPHIAALEX26",
    cutoffDate: "September 20, 2026",
    bookingUrl: "https://example.com/napa-lodge-booking",
    phone: "(707) 555-0182",
    shuttleInfo: "A complimentary private guest shuttle will run continuous round-trips between The Napa Valley Lodge and the wedding estate from 3:00 PM to midnight.",
    instructions: "To secure the discounted group rate, please book online using the code SOPHIAALEX26 or call the reservation desk and mention the Martinez-Hayes Wedding Block prior to September 20, 2026.",
  },

  // FAQ Section
  faq: {
    sectionTitle: "Frequently Asked Questions",
    sectionSubtitle: "Helpful details to make your visit easy and enjoyable.",
    items: [
      {
        id: "faq-1",
        question: "Are plus-ones allowed?",
        answer: "To keep our celebration intimate and meaningful, our invitations and reserved seats are strictly for the named guests on your invitation envelope and online RSVP lookup. If your reservation includes a spouse or partner, their name will appear when you search your name in the RSVP form.",
      },
      {
        id: "faq-2",
        question: "Are children allowed?",
        answer: "While we adore your little ones, this will be an adults-only celebration (with the exception of our immediate wedding party flower girl and ring bearer). We hope you can take the evening to relax, celebrate, and enjoy a night out with us!",
      },
      {
        id: "faq-3",
        question: "What is the dress code?",
        answer: "The dress code is Formal / Cocktail Attire. We warmly invite our guests to wear warm beige, neutral earth tones, terracotta, sage, navy, or classic black. Since our ceremony and cocktail hour will be held on the garden lawn, we kindly recommend block heels or wedges over stilettos.",
      },
      {
        id: "faq-4",
        question: "Is there parking at the venue?",
        answer: "Yes, complimentary valet parking is provided upon arrival at the estate gates. If you choose to celebrate with drinks, we strongly encourage taking the guest shuttle from the hotel block or using local Uber/Lyft services.",
      },
      {
        id: "faq-5",
        question: "What if I have dietary restrictions or allergies?",
        answer: "Our caterer is exceptional and will gladly accommodate vegetarian, vegan, gluten-free, dairy-free, and nut-free diets. Please indicate your dietary requirements when completing your RSVP below.",
      },
      {
        id: "faq-6",
        question: "By when should I submit my RSVP?",
        answer: "Please kindly submit your RSVP by September 15, 2026 so we can provide final seating and dining counts to our venue and culinary team.",
      },
    ],
  },

  // Registry & 3 Cash Funds
  registry: {
    sectionTitle: "Registry & Gift Funds",
    sectionSubtitle: "Your presence at our celebration is the greatest gift of all. For those who have asked about gifts, we have created three dedicated funds as we begin our life together.",
    funds: [
      {
        id: "wedding-fund",
        title: "Wedding Celebration Fund",
        tagline: "Helping us create an unforgettable day of celebration with our loved ones.",
        icon: "Heart",
        venmoHandle: "@Sophia-Alex-Wedding",
        zelleInfo: "alexander.hayes@example.com",
        // Venmo deep link (mobile will open app, desktop falls back to web)
        venmoDeepLink: "https://venmo.com/Sophia-Alex-Wedding",
        zelleLink: "https://www.zellepay.com",
        qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://venmo.com/Sophia-Alex-Wedding&bgcolor=FAF7F2&color=4A3F35",
      },
      {
        id: "honeymoon-fund",
        title: "Honeymoon Adventure Fund",
        tagline: "Supporting our dream journey exploring the coast of Japan and the mountains of Switzerland.",
        icon: "Plane",
        venmoHandle: "@Sophia-Alex-Honeymoon",
        zelleInfo: "sophia.martinez@example.com",
        venmoDeepLink: "https://venmo.com/Sophia-Alex-Honeymoon",
        zelleLink: "https://www.zellepay.com",
        qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://venmo.com/Sophia-Alex-Honeymoon&bgcolor=FAF7F2&color=4A3F35",
      },
      {
        id: "house-fund",
        title: "New Home & Future Fund",
        tagline: "Contributing toward our first home together, backyard garden, and Milo's new yard.",
        icon: "Home",
        venmoHandle: "@Sophia-Alex-NewHome",
        zelleInfo: "hayes.homefund@example.com",
        venmoDeepLink: "https://venmo.com/Sophia-Alex-NewHome",
        zelleLink: "https://www.zellepay.com",
        qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://venmo.com/Sophia-Alex-NewHome&bgcolor=FAF7F2&color=4A3F35",
      },
    ],
  },

  // RSVP Form & Submission Settings
  rsvp: {
    sectionTitle: "RSVP",
    sectionSubtitle: "Please enter your name to find your invitation and confirm your attendance by September 15, 2026.",
    formName: "wedding-rsvp",
    // Optional Google Sheets Webhook URL (leave empty or set in .env/config)
    googleSheetWebhookUrl: "",
    deadline: "September 15, 2026",
    dietaryOptions: [
      "No Restrictions",
      "Vegetarian",
      "Vegan",
      "Gluten-Free",
      "Dairy-Free",
      "Nut Allergy",
      "Other (Specify Below)",
    ],
  },
};
