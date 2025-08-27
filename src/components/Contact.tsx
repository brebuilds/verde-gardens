export const Contact = () => {
  const handleScheduleCall = () => {
    alert('This will open your scheduling system (like Calendly). Please provide the actual scheduling URL to replace this placeholder.');
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:info@verdegardens.com";
  };

  return (
    <section id="contact" className="verde-section">
      <div className="verde-container">
        <div className="verde-cta-bg text-white rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Ready to learn more or schedule a tour? We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">📍 Address</h3>
              <p className="text-lg">
                13230 N 22nd St<br />
                Phoenix, AZ 85022
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">🏠 Property Info</h3>
              <p className="text-lg">
                18 Fully Furnished Units<br />
                3BR/2BA Apartments
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-3">⛪ Church Partnership</h3>
              <p className="text-lg">
                Located across from<br />
                SEU Arizona Campus
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleScheduleCall} className="verde-button">
              Schedule a Call
            </button>
            <button onClick={handleSendEmail} className="verde-button-outline">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};