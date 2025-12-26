import { useInView } from '@/hooks/useInView';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Python Data Analysis',
    description:
      'Comprehensive data analysis projects using Python for data cleaning, visualization, and statistical analysis.',
    tags: ['Python', 'Data Analysis'],
    icon: '🐍',
    githubUrl: 'https://github.com/TusharChauhan04/python-project',
  },
  {
    title: 'Power BI Dashboards',
    description:
      'Interactive business intelligence dashboards for data visualization and business insights.',
    tags: ['Power BI', 'Power Query', 'DAX'],
    icon: '📊',
    githubUrl: 'https://github.com/TusharChauhan04/power-bi---projects',
  },
  {
    title: 'AI Agent Solutions',
    description:
      'Automated workflows and AI-powered solutions for business process optimization.',
    tags: ['AI Agents', 'Automation', 'Integration'],
    icon: '🤖',
    projectUrl: '#',
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium text-center">
            Portfolio
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-secondary/30 rounded-2xl overflow-hidden border border-border hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Project Icon Header */}
                <div className="h-40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github size={18} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                        <span>View Project</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
