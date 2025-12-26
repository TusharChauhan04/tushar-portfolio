import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [textStep, setTextStep] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const textSegments = [
    { text: "Hi, I'm ", color: "text-foreground" },
    { text: "Tushar", color: "text-primary" },
    { text: " Chauhan", color: "text-primary" }
  ];

  useEffect(() => {
    const currentSegment = textSegments[textStep];
    if (!currentSegment) return;

    if (displayText.length < currentSegment.text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentSegment.text.slice(0, displayText.length + 1));
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Move to next segment after a short pause
      const timeout = setTimeout(() => {
        if (textStep < textSegments.length) {
          setTextStep(prev => prev + 1);
          setDisplayText('');
        }
      }, 300); // 300ms pause between words
      return () => clearTimeout(timeout);
    }
  }, [displayText, textStep]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: 'var(--hero-bg)',
      }}
    >


      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e40af' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl px-6">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-up font-medium">
          Welcome to my portfolio
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight whitespace-nowrap min-h-[1.2em]">
          {/* Step 0: "Hi, I'm " */}
          {textStep > 0 ? "Hi, I'm " : (textStep === 0 ? displayText : "")}

          {/* Step 1: "Tushar" */}
          {textStep > 1 ? <span className="text-primary">Tushar</span> : (textStep === 1 ? <span className="text-primary">{displayText}</span> : null)}

          {/* Step 2: " Chauhan" */}
          {textStep > 2 ? <span className="text-primary"> Chauhan</span> : (textStep === 2 ? <span className="text-primary">{displayText}</span> : null)}

          <span className="animate-pulse inline-block align-middle h-[1em] w-[3px] bg-foreground ml-1"></span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-10 animate-fade-up-delay-2 font-light tracking-wide">
          Analyst · Strategist · Economics Enthusiast
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-sm tracking-wide hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border border-border text-foreground rounded-full font-medium text-sm tracking-wide hover:bg-card hover:border-primary/30 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
