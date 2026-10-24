/**
 * Sample Guest List for Invitation Matching
 * Each party entry represents an invited household or individual.
 * Edit or extend this list with your actual guest list.
 */

export const guestList = [
  {
    id: "guest-1",
    primaryName: "Alex",
    partyMembers: ["Alex"],
    partySize: 1,
    group: "Best Woman",
  },
  {
    id: "guest-2",
    primaryName: "Helen",
    partyMembers: ["Helen"],
    partySize: 1,
    group: "Bridesmaid",
  },
  {
    id: "guest-3",
    primaryName: "Alexis",
    partyMembers: ["Alexis"],
    partySize: 1,
    group: "Bridesmaid",
  },
  {
    id: "guest-4",
    primaryName: "Katie",
    partyMembers: ["Katie"],
    partySize: 1,
    group: "Bridesmaid",
  },
  {
    id: "guest-5",
    primaryName: "Teresa",
    partyMembers: ["Teresa"],
    partySize: 1,
    group: "Bridesmaid",
  },
  {
    id: "guest-6",
    primaryName: "Philip",
    partyMembers: ["Philip"],
    partySize: 1,
    group: "Best Man",
  },
  {
    id: "guest-7",
    primaryName: "Zach",
    partyMembers: ["Zach"],
    partySize: 1,
    group: "Groomsman",
  },
  {
    id: "guest-8",
    primaryName: "Milan",
    partyMembers: ["Milan"],
    partySize: 1,
    group: "Groomsman",
  },
  {
    id: "guest-9",
    primaryName: "Landon",
    partyMembers: ["Landon"],
    partySize: 1,
    group: "Groomsman",
  },
  {
    id: "guest-10",
    primaryName: "Caelan",
    partyMembers: ["Caelan"],
    partySize: 1,
    group: "Groomsman",
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
