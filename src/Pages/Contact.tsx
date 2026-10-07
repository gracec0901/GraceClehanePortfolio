import { useSelector, useDispatch } from 'react-redux';
import type { ChangeEvent, FormEvent } from 'react';
import type { RootState } from '../store';
import './CSS/Contact.css';

export default function Contact() {
  const dispatch = useDispatch();
  const { name, email, message } = useSelector((state: RootState) => state.contactForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { field: e.target.name as 'name' | 'email' | 'message', value: e.target.value },
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    dispatch({ type: 'RESET_FORM' });
  };

  return (
    <main className="contact-page">
      <div className="contact-container">
        
        {/* Header Section */}
        <header className="contact-header">
          <h1 className="contact-title">LETS CHAT.</h1>
        </header>

        {/* Content Grid: Socials & Form */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Links */}
          <div className="contact-info-col">
            <p className="contact-intro">
              I am currently available for design projects, collaborations, and inquiries. Drop a message or reach out through the links below.
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

                <button type="submit" className="zine-submit-btn">
                  SEND MESSAGE →
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}