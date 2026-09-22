import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Search,
  CheckCircle2,
  XCircle,
  Users,
  Utensils,
  MessageSquare,
  Sparkles,
  Send,
  AlertCircle,
  RotateCcw,
  Check,
} from 'lucide-react';
import { weddingConfig } from '../data/weddingConfig';
import { searchGuests, guestList } from '../data/guestsData';

export default function RSVP() {
  const { rsvp, couple } = weddingConfig;

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedParty, setSelectedParty] = useState(null);
  const [searchError, setSearchError] = useState(false);

  // Form responses state: Map of { [guestName]: { attending: boolean, dietary: string } }
  const [attendance, setAttendance] = useState({});
  const [dietary, setDietary] = useState({});
  const [generalDietary, setGeneralDietary] = useState('');
  const [notes, setNotes] = useState('');

  // Submission lifecycle state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Handle typing in guest name input
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSearchError(false);

    if (query.trim().length >= 2) {
      const matches = searchGuests(query);
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  // Select a party from the search results
  const handleSelectParty = (party) => {
    setSelectedParty(party);
    setSuggestions([]);
    setSearchQuery(party.primaryName);
    setSearchError(false);

    // Initialize attendance for each member to attending by default
    const initialAttendance = {};
    const initialDietary = {};
    party.partyMembers.forEach((member) => {
      initialAttendance[member] = true;
      initialDietary[member] = 'No Restrictions';
    });
    setAttendance(initialAttendance);
    setDietary(initialDietary);
  };

  // Execute search button / Enter key
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const matches = searchGuests(searchQuery);
    if (matches.length > 0) {
      handleSelectParty(matches[0]);
    } else {
      setSearchError(true);
      setSelectedParty(null);
    }
  };

  // Toggle attending status for a member
  const setMemberAttendance = (member, isAttending) => {
    setAttendance((prev) => ({
      ...prev,
      [member]: isAttending,
    }));
  };

  // Set dietary restriction for a member
  const setMemberDietary = (member, restriction) => {
    setDietary((prev) => ({
      ...prev,
      [member]: restriction,
    }));
  };

  // Trigger confetti burst
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#C5A880', '#FAF7F2', '#4A3F35', '#DFD1BD', '#7C8A76'],
      });
    } catch (e) {
      // Graceful fallback if canvas is restricted
    }
  };

  // Helper to encode form data for Netlify Forms
  const encodeFormData = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  // Handle final RSVP submission
  const handleSubmitRSVP = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    // Format submission payload
    const attendanceSummary = selectedParty.partyMembers
      .map((member) => `${member}: ${attendance[member] ? 'Attending' : 'Declined'}`)
      .join(' | ');

    const dietarySummary = selectedParty.partyMembers
      .map((member) => `${member}: ${dietary[member] || 'None'}`)
      .join(' | ') + (generalDietary ? ` (Note: ${generalDietary})` : '');

    const submissionData = {
      'form-name': rsvp.formName,
      guest_name: selectedParty.primaryName,
      party_members: selectedParty.partyMembers.join(', '),
      attendance: attendanceSummary,
      dietary_restrictions: dietarySummary,
      notes: notes.trim(),
      submitted_at: new Date().toISOString(),
    };

    try {
      // 1. Submit to Netlify Forms (standard URL-encoded POST)
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData(submissionData),
      });

      // 2. If Google Sheets Webhook is configured, post in background
      if (rsvp.googleSheetWebhookUrl) {
        fetch(rsvp.googleSheetWebhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData),
        }).catch((err) => {
          console.warn('Google Sheets Webhook submission error (handled gracefully):', err);
        });
      }

      setIsSubmitted(true);
      triggerConfetti();
    } catch (err) {
      console.error('RSVP submission error:', err);
      // Even if network glitches, mark submitted if Netlify bot captured or show retry
      setSubmitError('There was a temporary issue submitting your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form to search again
  const handleReset = () => {
    setSelectedParty(null);
    setSearchQuery('');
    setSuggestions([]);
    setIsSubmitted(false);
    setAttendance({});
    setDietary({});
    setGeneralDietary('');
    setNotes('');
    setSubmitError(null);
  };

  return (
    <section id="rsvp" className="py-20 lg:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-[#8C7A6B] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>Celebrate With Us</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#4A3F35] font-normal tracking-wide">
            {rsvp.sectionTitle}
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A880] mx-auto my-4" />
          <p className="text-[#6C5840] text-sm sm:text-base font-light leading-relaxed">
            {rsvp.sectionSubtitle}
          </p>
        </div>

        {/* RSVP Card Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8DFD1] shadow-card">
          {/* STEP 3: Submitted Confirmation State */}
          {isSubmitted ? (
            <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 text-green-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#4A3F35] font-normal">
                  Thank You, {selectedParty.primaryName}!
                </h3>
                <p className="text-[#6C5840] text-sm sm:text-base font-light mt-2 max-w-md mx-auto">
                  Your RSVP response has been successfully recorded. We are so grateful for your presence in our lives!
                </p>
              </div>

              {/* Response Summary Box */}
              <div className="bg-[#FAF7F2] rounded-2xl p-6 max-w-lg mx-auto text-left border border-[#E8DFD1] space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold border-b border-[#E8DFD1]/60 pb-2">
                  RSVP Summary
                </h4>
                {selectedParty.partyMembers.map((member) => (
                  <div key={member} className="flex items-center justify-between text-sm">
                    <span className="font-medium text-[#4A3F35]">{member}</span>
                    <span
                      className={`px-3 py-0.5 rounded-full text-xs font-semibold ${
                        attendance[member]
                          ? 'bg-green-100 text-green-800'
                          : 'bg-[#EDE3D5] text-[#7A644A]'
                      }`}
                    >
                      {attendance[member] ? 'Attending' : 'Declined'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#logistics"
                  className="px-6 py-2.5 rounded-full bg-[#4A3F35] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#32281D] transition-colors"
                >
                  View Schedule & Logistics
                </a>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-full border border-[#E8DFD1] text-[#6C5840] text-xs uppercase tracking-wider font-medium hover:bg-[#FAF7F2] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Update Response or Search Another</span>
                </button>
              </div>
            </div>
          ) : !selectedParty ? (
            /* STEP 1: Guest Search & Verification */
            <div className="max-w-xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3F35] font-normal">
                  Find Your Invitation
                </h3>
                <p className="text-[#8C7A6B] text-xs sm:text-sm font-light">
                  Type your first and last name as written on your invitation envelope.
                </p>
              </div>

              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="e.g. Maya Lin, David Kim..."
                    className="w-full pl-11 pr-28 py-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD1] text-[#4A3F35] text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A880]/50 focus:border-[#C5A880] transition-all"
                  />
                  <Search className="w-5 h-5 text-[#8C7A6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-[#4A3F35] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold hover:bg-[#32281D] transition-colors"
                  >
                    Find
                  </button>
                </div>

                {/* Auto-complete Suggestions Dropdown */}
                {suggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#E8DFD1] divide-y divide-[#E8DFD1]/60 z-20 overflow-hidden animate-in fade-in slide-in-from-top-2">
                    {suggestions.map((party) => (
                      <button
                        key={party.id}
                        type="button"
                        onClick={() => handleSelectParty(party)}
                        className="w-full p-4 text-left hover:bg-[#FAF7F2] transition-colors flex items-center justify-between"
                      >
                        <div>
                          <div className="font-serif text-lg text-[#4A3F35]">{party.primaryName}</div>
                          <div className="text-xs text-[#8C7A6B] font-light">
                            Party of {party.partySize} ({party.partyMembers.join(', ')})
                          </div>
                        </div>
                        <span className="text-xs text-[#C5A880] uppercase tracking-wider font-semibold">
                          Select &rarr;
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </form>

              {/* No match error alert */}
              {searchError && (
                <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E8DFD1] flex items-start space-x-3 text-xs text-[#6C5840] leading-relaxed animate-in fade-in">
                  <AlertCircle className="w-4 h-4 text-[#8C7A6B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#4A3F35] block mb-0.5">
                      Invitation Not Found
                    </span>
                    We could not find an invitation under &quot;{searchQuery}&quot;. To keep our celebration intimate, our guest list is strictly reserved for named invitees. If there might be a spelling discrepancy, please try searching with just your last name or contact {couple.bride} & {couple.groom}.
                  </div>
                </div>
              )}

              {/* Helpful Sample Hint for Testing */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD1]/60 text-center space-y-1.5">
                <span className="text-[11px] uppercase tracking-widest text-[#8C7A6B] font-semibold block">
                  Quick Demo Guests to Try:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
                  {['Maya Lin', 'David Kim', 'Claire Bennett', 'Ethan Martinez'].map((sample) => (
                    <button
                      key={sample}
                      type="button"
                      onClick={() => {
                        const match = guestList.find((g) => g.primaryName.includes(sample));
                        if (match) handleSelectParty(match);
                      }}
                      className="px-2.5 py-1 rounded-full bg-white border border-[#E8DFD1] text-xs text-[#4A3F35] hover:bg-[#E8DFD1]/40 transition-colors"
                    >
                      {sample}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* STEP 2: Attendance & Details Form */
            <form onSubmit={handleSubmitRSVP} className="space-y-8 animate-in fade-in duration-200">
              {/* Party Header Banner */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#C5A880] font-semibold mb-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>Reserved Reservation</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#4A3F35] font-normal">
                    {selectedParty.primaryName}
                  </h3>
                  <p className="text-xs text-[#8C7A6B] font-light mt-0.5">
                    We have reserved <strong className="font-semibold text-[#4A3F35]">{selectedParty.partySize} seat{selectedParty.partySize > 1 ? 's' : ''}</strong> in your honor.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedParty(null)}
                  className="text-xs uppercase tracking-wider text-[#8C7A6B] hover:text-[#4A3F35] underline"
                >
                  Not your party?
                </button>
              </div>

              {/* Per-Guest Attendance & Dietary Selection */}
              <div className="space-y-6">
                <h4 className="font-serif text-xl text-[#4A3F35] font-normal border-b border-[#E8DFD1]/60 pb-2">
                  Guest Responses
                </h4>

                {selectedParty.partyMembers.map((member, idx) => (
                  <div
                    key={member}
                    className="p-5 rounded-2xl bg-[#FAF7F2]/60 border border-[#E8DFD1] space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#8C7A6B] font-medium block">
                          Guest {idx + 1}
                        </span>
                        <div className="font-serif text-xl text-[#4A3F35] font-normal">
                          {member}
                        </div>
                      </div>

                      {/* Attendance Buttons */}
                      <div className="inline-flex rounded-xl bg-white p-1 border border-[#E8DFD1] shadow-xs">
                        <button
                          type="button"
                          onClick={() => setMemberAttendance(member, true)}
                          className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                            attendance[member]
                              ? 'bg-[#4A3F35] text-[#FAF7F2] shadow-sm'
                              : 'text-[#8C7A6B] hover:text-[#4A3F35]'
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Attending</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setMemberAttendance(member, false)}
                          className={`flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                            !attendance[member]
                              ? 'bg-[#8C7A6B] text-[#FAF7F2] shadow-sm'
                              : 'text-[#8C7A6B] hover:text-[#4A3F35]'
                          }`}
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Declining</span>
                        </button>
                      </div>
                    </div>

                    {/* Dietary Restrictions (shown if attending) */}
                    {attendance[member] && (
                      <div className="pt-3 border-t border-[#E8DFD1]/60 flex flex-col sm:flex-row sm:items-center gap-3 animate-in fade-in">
                        <span className="text-xs text-[#8C7A6B] font-medium flex items-center space-x-1.5 flex-shrink-0">
                          <Utensils className="w-3.5 h-3.5 text-[#C5A880]" />
                          <span>Dietary Needs:</span>
                        </span>
                        <select
                          value={dietary[member] || 'No Restrictions'}
                          onChange={(e) => setMemberDietary(member, e.target.value)}
                          className="w-full sm:w-auto px-3 py-1.5 rounded-lg bg-white border border-[#E8DFD1] text-xs text-[#4A3F35] focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
                        >
                          {rsvp.dietaryOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Dietary & Notes */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-1">
                    Special Dietary Instructions / Severe Allergies (Optional)
                  </label>
                  <input
                    type="text"
                    value={generalDietary}
                    onChange={(e) => setGeneralDietary(e.target.value)}
                    placeholder="e.g. Severe peanut allergy, celiac gluten-free..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] text-xs text-[#4A3F35] focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#8C7A6B] font-semibold mb-1">
                    A Note For {couple.bride} & {couple.groom} (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Share a favorite memory, well wishes, or song recommendation..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD1] text-xs text-[#4A3F35] focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
                  />
                </div>
              </div>

              {/* Error warning if submit fails */}
              {submitError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
                  {submitError}
                </div>
              )}

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8DFD1]/80">
                <button
                  type="button"
                  onClick={() => setSelectedParty(null)}
                  className="text-xs uppercase tracking-wider text-[#8C7A6B] hover:text-[#4A3F35] transition-colors"
                >
                  &larr; Back to Search
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-full bg-[#4A3F35] text-[#FAF7F2] text-xs uppercase tracking-widest font-semibold hover:bg-[#32281D] active:scale-95 transition-all shadow-md disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Submitting RSVP...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm & Submit RSVP</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
