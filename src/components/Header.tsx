export const Header = () => {
  return <header className="py-6 shadow-lg bg-primary">
      <div className="verde-container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-left px-5">
            <h1 className="font-sans text-3xl lg:text-4xl font-bold mb-2 tracking-tight text-primary-foreground">
              Verde Gardens Community
            </h1>
            <p className="font-sans text-base font-medium text-primary-foreground opacity-90">
              Official Student Housing Partner for SEU Arizona
            </p>
          </div>
          <div className="text-right px-5">
            <p className="font-sans font-medium mb-1 text-sm text-primary-foreground">
              13230 N 22nd St, Phoenix, AZ 85022
            </p>
            <p className="font-sans font-medium text-sm text-primary-foreground">
              18 Premium Residences Available
            </p>
          </div>
        </div>
      </div>
    </header>;
};
