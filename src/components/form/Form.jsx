import React from "react";

const Form = () => {
  return (
    <form action="post">
      <h2>Reach out!</h2>
      <fieldset className="your-name">
        <legend>Your Name</legend>
        <label htmlFor="f-name">First Name</label>
        <input type="text" id="f-name" name="f-name" placeholder="First Name" />
        <label htmlFor="l-name">Last Name</label>
        <input type="text" name="l-name" id="l-name" placeholder="Last Name" />
      </fieldset>
      <fieldset className="your-message">
        <legend>Your Message</legend>
        <label htmlFor="phone">Phone</label>

        <input type="number" name="phone" id="phone" placeholder="Phone No." />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" placeholder="Email" />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Message here"
        ></textarea>
      </fieldset>
      <button className="submit">Submit</button>
    </form>
  );
};

export default Form;
