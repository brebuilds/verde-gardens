export const Header = () => {
  return <header className="py-4 shadow-lg" style={{ backgroundColor: '#758367' }}>
      <div className="verde-container">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="text-left" style={{ paddingLeft: '20px' }}>
            <h1 className="font-serif text-3xl lg:text-4xl font-medium mb-2 tracking-tight" style={{ color: 'rgba(241, 240, 232, 1)', paddingLeft: '20px', font: '300 36px/30px "Crimson Pro", "Playfair display", serif' }}>
              Verde Gardens Community
            </h1>
            <p className="font-sans text-base font-light text-right" style={{ color: 'rgb(241, 240, 232)', paddingLeft: '20px', marginRight: 'auto', lineHeight: '14px' }}>
              Thoughtfully Curated Student Living for SEU Arizona
            </p>
          </div>
          <div className="text-right" style={{ paddingRight: '20px' }}>
            <p className="font-sans font-light mb-1 text-sm" style={{ color: 'rgba(241, 240, 232, 1)' }}>
              13230 N 22nd St, Phoenix, AZ 85022
            </p>
            <p className="font-sans font-light text-sm" style={{ color: 'rgba(241, 240, 232, 1)' }}>
              &nbsp;18 Thoughtfully Curated Residences Available
            </p>
          </div>
        </div>
      </div>
    </header>;
};
