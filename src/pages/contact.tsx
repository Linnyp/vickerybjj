export default function Contact() {
  return (
    <div className="contactpage-container">
      <h1 className="contact-head">Contact Us</h1>
      <p style={{ fontSize: "1rem", margin: "0" }}>
        Please feel free to email us and send us your questions! <br /> Whether
        it about the arts of Jiu-Jitsu, Muay Thai, MMA, or our plans and rates,{" "}
        <br /> we are happy to reply promptly to you and are excited to see you!
      </p>
      <main className="contact-card">
        <div className="contact-info">
          <i className="fa fa-phone-square" aria-hidden="true"></i>
          <span> (239) 313-0756</span>
        </div>
        <div className="contact-info">
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <p> vickerybjj@gmail.com</p>
        </div>
      </main>
    </div>
  );
}
