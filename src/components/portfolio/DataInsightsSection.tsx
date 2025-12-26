import { useInView } from '@/hooks/useInView';
import { BarChart2, BrainCircuit, Cog } from 'lucide-react';

const services = [
    {
        icon: BarChart2,
        title: "Data Storytelling",
        description: "Transforming complex raw data into compelling visual narratives that drive clarity and action."
    },
    {
        icon: BrainCircuit,
        title: "Strategic Insights",
        description: "Uncovering hidden trends and opportunities to support evidence-based business decision making."
    },
    {
        icon: Cog,
        title: "Process Automation",
        description: "Streamlining workflows with AI and integration tools to maximize efficiency and reduce manual effort."
    }
];

const DataInsightsSection = () => {
    const { ref, isVisible } = useInView();

    return (
        <section id="insights" className="py-24 bg-card">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-medium text-center">
                        Value Proposition
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-16 text-center">
                        What I Bring to the Table
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-secondary/50 border border-border rounded-2xl p-8 hover-lift group relative overflow-hidden"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                                    <service.icon className="w-32 h-32 text-primary rotate-12" />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-14 h-14 mb-6 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                                        <service.icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DataInsightsSection;
