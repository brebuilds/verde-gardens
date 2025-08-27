export const Footer = () => {
  return (
    <footer className="bg-verde-navigation text-white py-12">
      <div className="verde-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary-light mb-4">
              Verde Gardens Community
            </h3>
            <p className="text-white/80 mb-2">
              Premium student housing for SEU Arizona students
            </p>
            <p className="text-white/80">
              13230 N 22nd St, Phoenix, AZ 85022
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-light mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="#pricing"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Pricing
              </a>
              <a
                href="#amenities"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Amenities
              </a>
              <a
                href="#property"
                className="block text-white/80 hover:text-white transition-colors"
              >
                Property Details
              </a>
              <a
                href="https://seuarizona.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-white transition-colors"
              >
                SEU Arizona
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary-light mb-4">
              Housing Options
            </h3>
            <p className="text-white/80 mb-2">Private Room - $800/month</p>
            <p className="text-white/80 mb-2">Shared Room - $500/month</p>
            <p className="text-white/80">All utilities & amenities included</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            &copy; 2025 Verde Gardens Community. All rights reserved. | Designed
            for SEU Arizona Students
          </p>
        </div>
      </div>
    </footer>
  );
};