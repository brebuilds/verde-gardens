export const Header = () => {
  return (
    <header className="verde-header-bg py-4 shadow-lg">
      <div className="verde-container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-center lg:text-left">
            <h1 className="font-serif text-3xl lg:text-4xl font-medium text-primary mb-2 tracking-tight">
              Verde Gardens Community
            </h1>
            <p className="font-sans text-base text-primary/80 font-light">
              Thoughtfully Curated Student Living for SEU Arizona
            </p>
          </div>
          <div className="text-center lg:text-right">
            <p className="font-sans text-primary font-medium mb-1 text-sm">
              📍 13230 N 22nd St, Phoenix, AZ 85022
            </p>
            <p className="font-sans text-primary font-medium text-sm">
              🏠 18 Thoughtfully Curated Residences Available
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};