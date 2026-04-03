type Props = {
    skills: string[];
};

export default function SkillList({skills}: Props) {
    if (!skills.length) {
        return null;
    }

    return (
        <section className="border-t border-card-border">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h2 className="text-xl font-medium text-foreground mb-8">
                    Tools &amp; Technologies
                </h2>
                <div className="rounded-2xl border border-card-border bg-section-alt px-6 py-6 md:px-8">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted mb-4">
                        Core stack
                    </p>
                    <ul className="flex flex-wrap gap-x-2 gap-y-3 text-base leading-relaxed md:text-lg">
                        {skills.map((skill, index) => (
                            <li key={skill+'-'+index} className="text-foreground">
                                <span className="font-medium">{skill}</span>
                                {index < skills.length - 1 && (
                                    <span className="ml-2 text-muted" aria-hidden="true">,</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

    );
}
