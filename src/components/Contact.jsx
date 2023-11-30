import React from "react";

const ContactUs = () => {
  const professorEmail = "jerry.gao@sjsu.edu";
  const yourEmail1 = "shravani.parsi@sjsu.edu";
  const yourEmail2 = "anurag.gajam@sjsu.edu";
  const yourEmail3 = "shreyansh.upadhyay@sjsu.edu";
  const yourEmail4 = "vineet.kiragi@sjsu.edu";

  return (
    <div
      className="container mt-5"
      style={{
        color: "white",
        backgroundColor: "#282c34",
        padding: "20px",
        borderRadius: "8px",
        marginLeft: "80px",
      }}
    >
      <h1 className="mb-4">Contact Us</h1>
      <p>
        If you have any questions, feedback, or inquiries, feel free to reach
        out to us using the contact information below.
      </p>
      <div className="mt-4">
        <h2>Professor's Email</h2>
        <p>
          For academic-related inquiries, please contact Professor Smith at{" "}
          <a href={`mailto:${professorEmail}`} style={{ color: "#61dafb" }}>
            {professorEmail}
          </a>
          .
        </p>
      </div>
      <div className="mt-4">
        <h2>Email</h2>
        <p>
          If you have project-specific questions, you can reach out to us at{" "}
          <br />
          <a href={`mailto:${yourEmail1}`} style={{ color: "#61dafb" }}>
            {yourEmail1}
          </a>
          <br />
          <a href={`mailto:${yourEmail2}`} style={{ color: "#61dafb" }}>
            {yourEmail2}
          </a>
          <br />
          <a href={`mailto:${yourEmail3}`} style={{ color: "#61dafb" }}>
            {yourEmail3}
          </a>
          <br />
          <a href={`mailto:${yourEmail4}`} style={{ color: "#61dafb" }}>
            {yourEmail4}
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
