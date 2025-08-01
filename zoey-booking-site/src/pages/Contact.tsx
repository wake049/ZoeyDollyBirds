import NavBar from "./NavBar";
import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <NavBar />

      <section className="contact">
        <div className="contact-container">
          <h2>Contact Zoey</h2>
          <p>Get in touch for appointments, questions, or consultations.</p>

          <div className="contact-details">
            <p>
              <strong>📍 Address:</strong>
              <br />
              Society Salons at McCaleb
              <br />
              2114 McCaleb Rd., Building B 500
              <br />
              Montgomery, TX 77316
            </p>
            <p>
              <strong>📧 Email:</strong>{" "}
              <a href="mailto:anzuetozoey@gmail.com">anzuetozoey@gmail.com</a>
            </p>
            <p>
              <strong>📞 Phone:</strong>{" "}
              <a href="tel:9366971516">936-697-1516</a>
            </p>
            <p>
              <strong>📸 Instagram:</strong>{" "}
              <a
                href="https://instagram.com/zoeysdollybirds"
                target="_blank"
                rel="noreferrer"
              >
                zoeysdollybirds
              </a>
            </p>
          </div>

          <div className="contact-hours">
            <h3>Hours</h3>
            <ul>
              <li>
                <strong>Sunday:</strong> Closed
              </li>
              <li>
                <strong>Monday:</strong> 9:00 AM – 5:00 PM
              </li>
              <li>
                <strong>Tuesday:</strong> 9:00 AM – 3:00 PM
              </li>
              <li>
                <strong>Wednesday:</strong> Closed
              </li>
              <li>
                <strong>Thursday:</strong> 9:00 AM – 3:00 PM
              </li>
              <li>
                <strong>Friday:</strong> 9:00 AM – 2:00 PM
              </li>
              <li>
                <strong>Saturday:</strong> 9:00 AM – 2:00 PM
              </li>
            </ul>
          </div>

          <div className="map-container">
            <iframe
              title="Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.1126224224625!2d-95.64551592386602!3d30.348296574756634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864729b6f15ba3b7%3A0xb83c8a2583555a64!2s2114%20McCaleb%20Rd%2C%20Montgomery%2C%20TX%2077316!5e0!3m2!1sen!2sus!4v1722447352629!5m2!1sen!2sus"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, borderRadius: "8px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
