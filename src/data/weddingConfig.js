/**
 * Wedding Invitation Website Configuration
 * Central source of truth for all wedding details, content, and settings.
 * Edit this file to customize names, dates, photos, venue, and funds.
 */

export const weddingConfig = {
  // Couple Information
  couple: {
    bride: "Cristalyn",
    groom: "Ben",
    monogram: "B & C",
    hashtag: "#BenAndCristalyn",
    weddingDate: "Saturday, August 14, 2027",
    ceremonyTime: "4:00 PM PST",
    // Countdown target ISO string
    countdownTarget: "2027-08-14T16:00:00-07:00",
    tagline: "We can't wait to celebrate our next chapter with our closest family and friends.",
  },

  // Hero Section
  hero: {
    eyebrow: "Together with their families",
    title: "Ben & Cristalyn",
    subtitle: "Request the pleasure of your company at their wedding celebration",
    dateDisplay: "August 14, 2027 • San Diego, California",
    rsvpButtonText: "RSVP Now",
    detailsButtonText: "View Event Details",
    // Warm, elegant landscape couple image
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
  },

  // Our Story / Walk Down Memory Lane
  story: {
    sectionTitle: "Walk Down Memory Lane",
    sectionSubtitle: "From our first coffee to the beginning of our forever.",
    milestones: [
      {
        id: "milestone-1",
        date: "September 2020",
        title: "The First Coffee",
        description: "What was meant to be a 30-minute coffee break turned into four hours of talking about music, favorite travel spots, and family recipes. We both knew right then that something truly special was beginning.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        location: "Brooklyn, New York",
      },
      {
        id: "milestone-2",
        date: "November 2021",
        title: "Moving In & Adopting Milo",
        description: "We signed our first lease together and brought home Milo, our spirited golden retriever mix. Between DIY furniture projects and puppy training, our home quickly became our favorite sanctuary.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        location: "San Francisco, CA",
      },
      {
        id: "milestone-3",
        date: "June 2023",
        title: "Sunset on the Amalfi Coast",
        description: "Our first major international journey together. From renting a vintage Vespa along coastal cliffs to cooking pasta with a local family in Ravello, we made memories that cemented our dream of a lifetime of adventures together.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        location: "Amalfi, Italy",
      },
      {
        id: "milestone-4",
        date: "December 2025",
        title: "The Sunset Proposal",
        description: "On a quiet, foggy evening on the Northern California coast, Ben asked Cristalyn to take a scenic cliffside walk. As the clouds parted into golden hour over the Pacific, he dropped to one knee. An easy and joyful 'YES!'",
        image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
        location: "Point Reyes, California",
      },
      {
        id: "milestone-5",
        date: "August 14, 2027",
        title: "The Beginning of Forever",
        description: "Surrounded by our dearest friends and family, we exchange vows, celebrate, and start this beautiful lifelong adventure as husband and wife.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        location: "San Diego, California",
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
        relation: "Cristalyn's Sister",
        blurb: "Sister, confidante, and Cristalyn's lifelong best friend. Maya has been there for every milestone with unwavering support, boundless laughter, and the best playlist recommendations.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-2",
        name: "Claire Bennett",
        role: "Bridesmaid",
        relation: "College Roommate",
        blurb: "Cristalyn and Claire shared a college dorm and became inseparable. From late-night study sessions to exploring new cities, Claire is the anchor of warmth in every group.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-3",
        name: "Elena Vance",
        role: "Bridesmaid",
        relation: "Childhood Friend",
        blurb: "Friends since summer soccer camp in 4th grade. Elena has witnessed every era of Cristalyn's life and brings infectious energy, spontaneous joy, and unconditional loyalty everywhere she goes.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-4",
        name: "Chloe Robinson",
        role: "Bridesmaid",
        relation: "Close Confidante",
        blurb: "Bonded over weekend hikes, coffee runs, and creative projects. Chloe's eye for beauty and steadfast friendship have enriched Cristalyn's life immensely.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-5",
        name: "Hannah Davis",
        role: "Bridesmaid",
        relation: "Ben's Sister",
        blurb: "Ben's sister and now one of Cristalyn's dearest friends. Hannah welcomed Cristalyn into the family from day one with open arms and unbeatable humor.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      },
    ],
    groomsmen: [
      {
        id: "gm-1",
        name: "Julian Vance",
        role: "Best Man",
        relation: "Ben's Brother",
        blurb: "Ben's brother and best friend since childhood. Julian has been his teammate in sports, gaming, and life, and will undoubtedly deliver a speech to remember.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-2",
        name: "David Kim",
        role: "Groomsman",
        relation: "High School Best Friend",
        blurb: "Met in freshman year and bonded over a shared passion for cars and golf. David is the steady, dependable friend who always shows up when it matters most.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-3",
        name: "Marcus Sterling",
        role: "Groomsman",
        relation: "College Friend",
        blurb: "College teammate and longtime friend. Marcus brings contagious positivity, great laughs, and is always the life of the celebration.",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-4",
        name: "Liam Chen",
        role: "Groomsman",
        relation: "The Matchmaker",
        blurb: "The friend who hosted the fateful rooftop gathering where Ben and Cristalyn first crossed paths. Forever credited with sparking this love story!",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-5",
        name: "Ethan Martinez",
        role: "Groomsman",
        relation: "Cristalyn's Brother",
        blurb: "Cristalyn's brother. Ethan and Ben quickly bonded over outdoor adventures, good drinks, and cheering for each other's dreams.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  // Venue & Schedule Logistics
  logistics: {
    sectionTitle: "Logistics & Venue",
    sectionSubtitle: "All the details you need for a seamless and memorable celebration.",
    venue: {
      name: "The Darlington Coastal Estate & Gardens",
      address: "7441 Olivetas Avenue",
      city: "La Jolla, San Diego, CA 92037",
      cityDisplay: "San Diego, California",
      googleMapsUrl: "https://maps.google.com/?q=Darlington+House+La+Jolla+CA",
      parkingInfo: "Complimentary valet parking is provided upon arrival at the estate gates. For guests planning to celebrate with drinks, rideshare services (Uber and Lyft) are readily available.",
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
        description: "Ben & Cristalyn exchange vows beneath the hundred-year-old olive trees.",
      },
      {
        time: "5:00 PM",
        event: "Cocktail Hour & Hors d'oeuvres",
        location: "The Stone Terrace",
        description: "Enjoy signature cocktails, California wines, and seasonal passed canapés to acoustic jazz.",
      },
      {
        time: "6:30 PM",
        event: "Dinner & Toasts",
        location: "The Glass Conservatory",
        description: "A seated farm-to-table dinner featuring fresh California produce and heartfelt toasts.",
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
      title: "Ben & Cristalyn's Wedding",
      description: "Celebrating the wedding of Ben and Cristalyn in San Diego, California.",
      location: "7441 Olivetas Avenue, San Diego, CA 92037",
      startDate: "20270814T230000Z", // UTC
      endDate: "20270815T060000Z",   // UTC
    }
  },

  // Hotel Block Information
  hotelBlock: {
    sectionTitle: "Accommodations",
    sectionSubtitle: "We have reserved a preferred room block for our guests traveling from out of town.",
    hotelName: "The San Diego Coastal Lodge & Suites",
    address: "7955 La Jolla Shores Dr, San Diego, CA 92037",
    rate: "$219 / night (Standard King or Double Queen)",
    groupCode: "BENCRISTALYN27",
    cutoffDate: "July 14, 2027",
    bookingUrl: "https://example.com/san-diego-hotel-booking",
    phone: "(858) 555-0182",
    shuttleInfo: "A complimentary private guest shuttle will run continuous round-trips between the hotel partner and the wedding estate from 3:00 PM to midnight.",
    instructions: "To secure the discounted group rate, please book online using the code BENCRISTALYN27 or call the reservation desk and mention the Ben & Cristalyn Wedding Block prior to July 14, 2027.",
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
        answer: "Please kindly submit your RSVP by July 10, 2027 so we can provide final seating and dining counts to our venue and culinary team.",
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
        venmoHandle: "@Ben-Cristalyn-Wedding",
        zelleInfo: "ben.cristalyn.wedding@gmail.com",
        venmoDeepLink: "https://venmo.com/Ben-Cristalyn-Wedding",
        zelleLink: "https://www.zellepay.com",
        qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://venmo.com/Ben-Cristalyn-Wedding&bgcolor=FAF7F2&color=4A3F35",
      },
      {
        id: "honeymoon-fund",
        title: "Honeymoon Adventure Fund",
        tagline: "Supporting our dream journey exploring the coast of Japan and the mountains of Switzerland.",
        icon: "Plane",
        venmoHandle: "@Ben-Cristalyn-Honeymoon",
        zelleInfo: "ben.cristalyn.honeymoon@gmail.com",
        venmoDeepLink: "https://venmo.com/Ben-Cristalyn-Honeymoon",
        zelleLink: "https://www.zellepay.com",
        qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://venmo.com/Ben-Cristalyn-Honeymoon&bgcolor=FAF7F2&color=4A3F35",
      },
      {
        id: "house-fund",
        title: "New Home & Future Fund",
        tagline: "Contributing toward our first home together, backyard garden, and Milo's new yard.",
        icon: "Home",
        venmoHandle: "@Ben-Cristalyn-NewHome",
        zelleInfo: "ben.cristalyn.home@gmail.com",
        venmoDeepLink: "https://venmo.com/Ben-Cristalyn-NewHome",
        zelleLink: "https://www.zellepay.com",
        qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://venmo.com/Ben-Cristalyn-NewHome&bgcolor=FAF7F2&color=4A3F35",
      },
    ],
  },

  // RSVP Form & Submission Settings
  rsvp: {
    sectionTitle: "RSVP",
    sectionSubtitle: "Please enter your name to find your invitation and confirm your attendance by July 10, 2027.",
    formName: "wedding-rsvp",
    // Optional Google Sheets Webhook URL (leave empty or set in .env/config)
    googleSheetWebhookUrl: "",
    deadline: "July 10, 2027",
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
