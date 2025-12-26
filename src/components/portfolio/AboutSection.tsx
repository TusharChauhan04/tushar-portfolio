import { useInView } from '@/hooks/useInView';
import { Briefcase, FolderGit2, Award, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium text-center">
            About Me
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-12 text-center">
            Building Intelligent Systems That Drive Results
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              As an <span className="text-foreground font-medium">AI-Driven Tech Executive</span>, I bridge the gap between economic theory and technical execution. Currently based at Digital Next Technologies in Dubai, I focus on designing intelligent system integrations and optimized data processes that drive strategic decision-making. My background includes a <span className="text-foreground font-medium">B.A. (Hons.) in Economics</span> and over a year of hands-on experience in CRM management and marketing analytics.
            </p>

            <p>
              I specialize in building <span className="text-foreground font-medium">real-time dashboards and automated workflows</span> that reduce manual effort and improve accuracy. Skilled in Analysis, data handling, and integration platforms, I turn complex datasets into business impact. I am driven by the challenge of solving operational problems and utilizing AI to deliver high-impact, scalable solutions for modern enterprises that help businesses operate faster, smarter, and more efficiently.
            </p>
          </div>

          {/* Stats */}

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border">
            {[
              { icon: Briefcase, value: "1+", label: "Years Experience", desc: "Delivering Business Impact" },
              { icon: FolderGit2, value: "10+", label: "Projects Completed", desc: "Across various domains" },
              { icon: Award, value: "5+", label: "Certifications", desc: "Professional credentials" },
              { icon: BookOpen, value: "15+", label: "Tools Mastered", desc: "Tech-Agnostic Problem Solving" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-secondary/50 rounded-2xl hover:bg-secondary/70 transition-colors duration-300 group">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-serif font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutSection;
