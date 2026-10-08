import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import './CSS/Contact.css'; // Adjust this if your CSS file is in a different folder

export default function Contact() {
  const dispatch = useDispatch();
  const { name, email, message } = useSelector((state: RootState) => state.contactForm);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field: e.target.name as 'name' | 'email' | 'message', value: e.target.value },
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "534179ac-5016-4248-8877-bbd11a651694",
          name: name,
          email: email,
          message: message,
          subject: `New portfolio message from ${name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("SUCCESS");
        dispatch({ type: 'RESET_FORM' });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.error(error);
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        
        {/* Header Section */}
        <header className="contact-header">
          <h1 className="contact-title">LETS CHAT!</h1>
        </header>

        {/* Content Grid: Socials & Form */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Links */}
          <div className="contact-info-col">
            <p className="contact-intro">
              I am currently available for design projects, collaborations, and inquiries. Drop a message or reach out directly through the links below.
            </p>
            
            <ul className="contact-social-list">
              <li>
                <a href="mailto:graceclehanemedia@gmail.com" target="_blank" rel="noreferrer">
                  [EMAIL]
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/grace-clehane-85a66922b/" target="_blank" rel="noreferrer">
                  [LINKEDIN]
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ggracedesignn/" target="_blank" rel="noreferrer">
                  [INSTAGRAM]
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Post-it / Zine Form Card */}
          <div className="contact-form-col">
            <div className="postit-form-card">
              <form onSubmit={handleSubmit} className="zine-form">
                
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    type="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>

                <button type="submit" className="zine-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "SENDING..." : "SEND MESSAGE →"}
                </button>

                {status === "SUCCESS" && (
                  <p className="form-feedback success">Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === "ERROR" && (
                  <p className="form-feedback error">Something went wrong. Please try emailing me directly.</p>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}