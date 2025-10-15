import React, { useState } from "react";

const BookingForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [date, setDate]           = useState("");
  const [time, setTime]           = useState("");
  const [guests, setGuests]       = useState("1");
  const [occasion, setOccasion]   = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.submitForm) props.submitForm(e);
  };

  const handleDateChange = (value) => {
    setDate(value);
    if (props.dispatch) props.dispatch(value);
  };

  return (
    <main aria-label="Main Content" className="keepFootOnBottom">
      <section aria-label="Booking Section" className="bookingSection">
        <h2>Book Your Reservation</h2>

        <form
          aria-label="Booking Reservation Form"
          className="bookingForm"
          onSubmit={handleSubmit}
        >
          {/* First/Last Name row */}
          <div>
            <div aria-label="First Name Container" className="container firstNameContainer">
              <label htmlFor="firstName">
                First Name<span aria-label="Required" className="required">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                aria-label="First Name Input"
                aria-required="true"
                autoComplete="off"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div aria-label="Last Name Container" className="container lastNameContainer">
              <label htmlFor="lastName">
                Last Name<span aria-label="Required" className="required">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                aria-label="Last Name Input"
                aria-required="true"
                autoComplete="off"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Date */}
          <div aria-label="Date Container" className="container dateContainer">
            <label htmlFor="date">
              Choose Date<span aria-label="Required" className="required">*</span>
            </label>
            <input
              id="date"
              name="date"
              type="date"
              aria-label="Date Input"
              aria-required="true"
              required
              value={date}
              onChange={(e) => handleDateChange(e.target.value)}
            />
          </div>

          {/* Time */}
          <div aria-label="Time Container" className="container timeContainer">
            <label htmlFor="time">
              Choose Time<span aria-label="Required" className="required">*</span>
            </label>
            <select
              id="time"
              name="time"
              aria-label="Select Time"
              aria-required="true"
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              <option value="">Select a Time</option>
              {props?.availableTimes?.availableTimes?.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Guests */}
          <div aria-label="Guest Container" className="container guestsContainer">
            <label htmlFor="guests">
              Number of Guests<span aria-label="Required" className="required">*</span>
            </label>
            <input
              id="guests"
              name="guests"
              type="number"
              min="1"
              max="10"
              placeholder="1"
              aria-label="Guests Input"
              aria-required="true"
              required
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          {/* Occasion */}
          <div aria-label="Occasion Container" className="container occasionContainer">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              aria-label="Select Occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option value="">None</option>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Anniversary</option>
            </select>
          </div>

          {/* Submit */}
          <button className="primaryBtn" type="submit">
            Create Reservation
          </button>
        </form>
      </section>
    </main>
  );
};

export default BookingForm;
