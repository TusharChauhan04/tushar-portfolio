import { useInView } from '@/hooks/useInView';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  const { ref, isVisible } = useInView();

  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium text-center">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 text-center">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about some engaging ideas and topics.
          </p>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <a
              href="mailto:chauhantushar554@gmail.com"
              className="group bg-card rounded-2xl p-6 border border-border hover-lift flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground font-medium text-sm break-words">chauhantushar554@gmail.com</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
            </a>

            <a
              href="https://www.linkedin.com/in/tushar-chauhan-32a63427a"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl p-6 border border-border hover-lift flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                <Linkedin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <p className="text-foreground font-medium text-sm break-words">Tushar Chauhan</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
