/**
 * Sample Guest List for Invitation Matching
 * Each party entry represents an invited household or individual.
 * Edit or extend this list with your actual guest list.
 */

export const guestList = [
  {
    id: "guest-1",
    primaryName: "Maya Lin",
    partyMembers: ["Maya Lin", "Jonathan Wu"],
    partySize: 2,
    group: "Wedding Party & Family",
  },
  {
    id: "guest-2",
    primaryName: "Claire Bennett",
    partyMembers: ["Claire Bennett"],
    partySize: 1,
    group: "Bridesmaid",
  },
  {
    id: "guest-3",
    primaryName: "Elena Vance",
    partyMembers: ["Elena Vance", "Lucas Rossi"],
    partySize: 2,
    group: "Bridesmaid & Partner",
  },
  {
    id: "guest-4",
    primaryName: "Chloe Robinson",
    partyMembers: ["Chloe Robinson"],
    partySize: 1,
    group: "Bridesmaid",
  },
  {
    id: "guest-5",
    primaryName: "Hannah Davis",
    partyMembers: ["Hannah Davis", "Samuel Green"],
    partySize: 2,
    group: "Family",
  },
  {
    id: "guest-6",
    primaryName: "Julian Vance",
    partyMembers: ["Julian Vance"],
    partySize: 1,
    group: "Best Man",
  },
  {
    id: "guest-7",
    primaryName: "David Kim",
    partyMembers: ["David Kim", "Grace Park"],
    partySize: 2,
    group: "Groomsman & Partner",
  },
  {
    id: "guest-8",
    primaryName: "Marcus Sterling",
    partyMembers: ["Marcus Sterling"],
    partySize: 1,
    group: "Groomsman",
  },
  {
    id: "guest-9",
    primaryName: "Liam Chen",
    partyMembers: ["Liam Chen", "Evelyn Taylor"],
    partySize: 2,
    group: "Groomsman & Partner",
  },
  {
    id: "guest-10",
    primaryName: "Ethan Martinez",
    partyMembers: ["Ethan Martinez", "Camila Silva"],
    partySize: 2,
    group: "Family",
  },
  {
    id: "guest-11",
    primaryName: "Eleanor & Robert Martinez",
    partyMembers: ["Eleanor Martinez", "Robert Martinez"],
    partySize: 2,
    group: "Parents of the Bride",
  },
  {
    id: "guest-12",
    primaryName: "Margaret & William Hayes",
    partyMembers: ["Margaret Hayes", "William Hayes"],
    partySize: 2,
    group: "Parents of the Groom",
  },
  {
    id: "guest-13",
    primaryName: "Sarah Jenkins",
    partyMembers: ["Sarah Jenkins"],
    partySize: 1,
    group: "Friend",
  },
  {
    id: "guest-14",
    primaryName: "Michael & Emily Clark",
    partyMembers: ["Michael Clark", "Emily Clark"],
    partySize: 2,
    group: "Friends",
  },
  {
    id: "guest-15",
    primaryName: "Daniel & Jessica Lee",
    partyMembers: ["Daniel Lee", "Jessica Lee"],
    partySize: 2,
    group: "Friends",
  },
];

/**
 * Searches the guest list for matching entries.
 * Checks primary name as well as individual party members.
 * Supports partial and case-insensitive matching.
 */
export function searchGuests(query) {
  if (!query || query.trim().length < 2) return [];

  const cleanQuery = query.toLowerCase().trim();

  return guestList.filter((guest) => {
    // Check primary name
    if (guest.primaryName.toLowerCase().includes(cleanQuery)) {
      return true;
    }
    // Check individual members in the party
    const memberMatch = guest.partyMembers.some((member) =>
      member.toLowerCase().includes(cleanQuery)
    );
    return memberMatch;
  });
}
