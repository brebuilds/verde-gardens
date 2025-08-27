export const Header = () => {
  return (
    <header className="verde-header-bg py-4 shadow-lg">
      <div className="verde-container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-2">
              Verde Gardens Community
            </h1>
            <p className="text-lg text-primary/80">
              Premium Student Housing for SEU Arizona
            </p>
          </div>
          <div className="text-center lg:text-right">
            <p className="text-primary font-semibold mb-1">
              📍 13230 N 22nd St, Phoenix, AZ 85022
            </p>
            <p className="text-primary font-semibold">
              🏠 18 Fully Furnished Units Available
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};