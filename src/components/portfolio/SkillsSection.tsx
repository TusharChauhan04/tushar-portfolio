import { useInView } from '@/hooks/useInView';
import { BarChart3, Users, Workflow, Mail, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const skills = [
  {
    icon: BarChart3,
    title: 'Data Analysis & BI Tools',
    items: [
      'Power BI (Power Query, Interactive Dashboards)',
      'Excel (Advanced functions, Data Cleaning, Data Modeling)',
      'SQL',
      'Python',
    ],
  },
  {
    icon: Users,
    title: 'CRM Platforms',
    items: [
      'Zoho One',
    ],
  },
  {
    icon: Workflow,
    title: 'Integration / Workflow',
    items: ['Zapier', 'Zoho Flow', 'Make'],
  },
  {
    icon: Mail,
    title: 'Marketing Tools',
    items: [
      'WhatsApp Broadcasting Tools',
      'Campaign Performance Tracking',
      'Email Marketing',
    ],
  },
];

const SkillsSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="skills" className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium text-center">
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-16 text-center">
            Skills & Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="bg-card rounded-2xl p-8 border border-border hover-lift relative overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <skill.icon className="w-32 h-32 text-primary rotate-12" />
                </div>

                <div className="flex items-center gap-4 mb-4 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-foreground">
                    {skill.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="group"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
