import * as React from "react";

export default function UserlistForm() {
  return (
    <form action="/api/userlist" method="POST">
      <h2 style={{ marginBottom: `16px` }}>Add persons email to userlist</h2>
      <div style={{ marginBottom: `8px` }}>
        <label style={{ display: `block`, marginBottom: `4px` }} htmlFor="name">
          Name:
        </label>
        <input name="name" id="name" />
      </div>
      <div style={{ marginBottom: `8px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="email"
        >
          Email:
        </label>
        <input name="email" id="email" type="email" />
      </div>
      <div style={{ marginBottom: `24px` }}>
        <label
          style={{ display: `block`, marginBottom: `4px` }}
          htmlFor="message"
        >
          Message:
        </label>
        <textarea name="message" id="message" />
      </div>
      <div>
        <button>Submit new person</button>
      </div>
    </form>
  );
}
