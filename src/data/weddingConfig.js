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
    weddingDate: "Sunday, August 15, 2027",
    ceremonyTime: "4:00 PM PST",
    // Countdown target ISO string
    countdownTarget: "2027-08-15T16:00:00-07:00",
    tagline: "We can't wait to celebrate our next chapter with our closest family and friends.",
  },

  // Hero Section
  hero: {
    eyebrow: "Together with their families",
    title: "Ben & Cristalyn",
    subtitle: "Request the pleasure of your company at their wedding celebration",
    dateDisplay: "August 15, 2027 • Chula Vista, California",
    rsvpButtonText: "RSVP Now",
    detailsButtonText: "View Event Details",
    // Warm, elegant landscape couple image
    backgroundImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
  },

  // Our Story / Walk Down Memory Lane
  story: {
    sectionTitle: "Walk Down Memory Lane",
    sectionSubtitle: "From studying God's word in Santa Cruz to our forever in San Diego.",
    milestones: [
      {
        id: "milestone-1",
        date: "September 2024",
        title: "Where We First Met",
        description: "Our paths first crossed at Vintage Faith Church's Young Adults group at The Abbey in Santa Cruz. Gathering to study God's word together, an effortless friendship quickly took root anchored in faith, laughter, deep conversations, and an unmistakable connection.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
        location: "The Abbey • Santa Cruz, CA",
      },
      {
        id: "milestone-2",
        date: "January 5, 2025",
        title: "Officially Dating",
        description: "After months of growing closer, spending time together, and shared laughter, we stepped into the new year knowing our hearts were completely aligned. On January 5th, we made it official and embarked on a new season full of joy, intentionality, and steadfast love.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
        location: "Santa Cruz, California",
      },
      {
        id: "milestone-3",
        date: "May 2026",
        title: "Navigating Long Distance",
        description: "As our chapter in Santa Cruz came to a close, our next chapter of long distance began with confidence that we would be reunited one day for good. Though separated by miles, our bond only grew stronger through nightly phone calls, airport reunions, and the constant reassurance that true love bridges any distance.",
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        location: "California",
      },
      {
        id: "milestone-4",
        date: "September 5, 2026",
        title: "The Proposal at West Cliff",
        description: "We reunited in Santa Cruz for a walk along West Cliff—a place that brought us peace and so many cherished memories during our time dating in college. Overlooking the ocean, Ben dropped to one knee to ask for a lifetime together, sealing the deal on our forever.",
        image: "/proposal.jpg",
        location: "Santa Cruz, California",
      },
      {
        id: "milestone-5",
        date: "August 15, 2027",
        title: "The Beginning of Forever",
        description: "Surrounded by our dearest friends and family, we will exchange vows, celebrate, and start this beautiful lifelong adventure as husband and wife.",
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        location: "Factory of Dreams • Chula Vista, CA",
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
        name: "Alex",
        role: "Best Woman",
        relation: "Best Woman",
        blurb: "Cristalyn's best woman and lifelong confidante. Alex has been there through every milestone with unwavering support, boundless laughter, and the best playlist recommendations.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-2",
        name: "Helen",
        role: "Bridesmaid",
        relation: "Bridesmaid",
        blurb: "One of Cristalyn's dearest friends. Helen brings steadfast warmth, thoughtful wisdom, and an infectious joy to every gathering.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-3",
        name: "Alexis",
        role: "Bridesmaid",
        relation: "Bridesmaid",
        blurb: "A cherished friend and kindred spirit. Alexis brings infectious energy, spontaneous joy, and unconditional loyalty everywhere she goes.",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-4",
        name: "Katie",
        role: "Bridesmaid",
        relation: "Bridesmaid",
        blurb: "A wonderful and faithful friend who always lights up the room. Katie's kindness, humor, and steadfast friendship have enriched Cristalyn's life immensely.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "bm-5",
        name: "Teresa",
        role: "Bridesmaid",
        relation: "Bridesmaid",
        blurb: "A deeply valued friend and constant source of encouragement. Teresa's gentle spirit, open arms, and loyal friendship are such a blessing.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      },
    ],
    groomsmen: [
      {
        id: "gm-1",
        name: "Philip",
        role: "Best Man",
        relation: "Best Man",
        blurb: "Ben's best man and closest brother in life. Philip is always there with steadfast loyalty, wise counsel, and laughs that can fill any room.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-2",
        name: "Zach",
        role: "Groomsman",
        relation: "Groomsman",
        blurb: "A trusted friend and longtime brother. Zach is the steady, dependable brother who brings great humor and always shows up when it matters most.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-3",
        name: "Milan",
        role: "Groomsman",
        relation: "Groomsman",
        blurb: "A loyal friend and constant companion. Milan is the kind of friend who always shows up with encouragement and a great spirit.",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-4",
        name: "Landon",
        role: "Groomsman",
        relation: "Groomsman",
        blurb: "A faithful friend and kindred brother. Landon brings steady dependability, genuine warmth, and wonderful perspective to every season.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "gm-5",
        name: "Caelan",
        role: "Groomsman",
        relation: "Groomsman",
        blurb: "A treasured friend with infectious positivity. Caelan's enthusiasm, loyalty, and heart for others make him a true brother in arms.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },

  // Venue & Schedule Logistics
  logistics: {
    sectionTitle: "Logistics & Venue",
    sectionSubtitle: "All the details you need for a seamless and memorable celebration.",
    venue: {
      name: "Factory of Dreams",
      address: "261 3rd Ave",
      city: "Chula Vista, CA 91910",
      cityDisplay: "Chula Vista, California",
      googleMapsUrl: "https://maps.google.com/?q=Factory+of+Dreams+261+3rd+Ave+Chula+Vista+CA+91910",
      parkingInfo: "Convenient parking is located along 3rd Ave and in adjacent parking areas. Rideshare drop-off (Uber and Lyft) is readily accessible directly in front of the venue.",
      note: "The ceremony and reception will be held indoors. Cocktail or formal attire is welcomed.",
    },
    schedule: [
      {
        time: "3:30 PM",
        event: "Guest Arrival & Welcome Drink",
        location: "The Foyer",
        description: "Arrive, grab a glass of chilled sparkling wine or artisanal refreshment, and take your seat in the hall.",
      },
      {
        time: "4:00 PM",
        event: "The Wedding Ceremony",
        location: "The Grand Hall",
        description: "Ben & Cristalyn exchange vows in the presence of God, family, and dearest friends.",
      },
      {
        time: "5:00 PM",
        event: "Cocktail Hour & Hors d'oeuvres",
        location: "The Lounge",
        description: "Enjoy signature cocktails, California wines, and seasonal passed canapés to acoustic music.",
      },
      {
        time: "6:30 PM",
        event: "Dinner & Toasts",
        location: "The Grand Ballroom",
        description: "A seated dinner featuring delicious cuisine, heartfelt toasts, and shared memories.",
      },
      {
        time: "8:30 PM",
        event: "Dancing & Celebration",
        location: "The Main Ballroom",
        description: "Cake cutting, first dance, and a full evening of music and celebration on the dance floor!",
      },
      {
        time: "11:00 PM",
        event: "Sparkler Send-Off",
        location: "The Grand Entrance",
        description: "Send off the newlyweds under a canopy of sparklers before the evening concludes.",
      }
    ],
    calendarEvent: {
      title: "Ben & Cristalyn's Wedding",
      description: "Celebrating the wedding of Ben and Cristalyn at Factory of Dreams in Chula Vista, California.",
      location: "261 3rd Ave, Chula Vista, CA 91910",
      startDate: "20270815T230000Z", // UTC
      endDate: "20270816T060000Z",   // UTC
    }
  },

  // Hotel Block Information
  hotelBlock: {
    sectionTitle: "Accommodations",
    sectionSubtitle: "We have reserved a preferred room block for our guests traveling from out of town.",
    hotelName: "Ayres Hotel San Diego South - Chula Vista",
    address: "1710 Millenia Ave, Chula Vista, CA 91915",
    rate: "$219 / night (Standard King or Double Queen)",
    groupCode: "BENCRISTALYN27",
    cutoffDate: "July 15, 2027",
    bookingUrl: "https://example.com/chula-vista-hotel-booking",
    phone: "(619) 342-7000",
    shuttleInfo: "A complimentary private guest shuttle will run continuous round-trips between the hotel partner and the wedding venue from 3:00 PM to midnight.",
    instructions: "To secure the discounted group rate, please book online using the code BENCRISTALYN27 or call the reservation desk and mention the Ben & Cristalyn Wedding Block prior to July 15, 2027.",
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
        answer: "The dress code is Formal / Cocktail Attire. We warmly invite our guests to wear warm beige, neutral earth tones, terracotta, sage, navy, or classic black.",
      },
      {
        id: "faq-4",
        question: "Is there parking at the venue?",
        answer: "Yes, convenient parking is available along 3rd Ave and in adjacent parking areas. If you choose to celebrate with drinks, we strongly encourage taking the guest shuttle from the hotel block or using local Uber/Lyft services.",
      },
      {
        id: "faq-5",
        question: "What if I have dietary restrictions or allergies?",
        answer: "Our caterer is exceptional and will gladly accommodate vegetarian, vegan, gluten-free, dairy-free, and nut-free diets. Please indicate your dietary requirements when completing your RSVP below.",
      },
      {
        id: "faq-6",
        question: "By when should I submit my RSVP?",
        answer: "Please kindly submit your RSVP by July 15, 2027 so we can provide final seating and dining counts to our venue and culinary team.",
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
    sectionSubtitle: "Please enter your name to find your invitation and confirm your attendance by July 15, 2027.",
    formName: "wedding-rsvp",
    // Optional Google Sheets Webhook URL (leave empty or set in .env/config)
    googleSheetWebhookUrl: "",
    deadline: "July 15, 2027",
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
