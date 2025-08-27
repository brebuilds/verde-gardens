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
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-center mb-6">
            Let's Connect
          </h2>
          <p className="font-sans text-lg text-center mb-12 max-w-3xl mx-auto font-light opacity-95">
            Ready to discover your new home or arrange a personal tour? We're here to guide your journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium mb-3">Address</h3>
              <p className="font-sans text-base font-light opacity-95">
                13230 N 22nd St<br />
                Phoenix, AZ 85022
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium mb-3">Residence Info</h3>
              <p className="font-sans text-base font-light opacity-95">
                18 Fully Furnished Units<br />
                3BR/2BA Apartments
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl font-medium mb-3">Campus Partnership</h3>
              <p className="font-sans text-base font-light opacity-95">
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