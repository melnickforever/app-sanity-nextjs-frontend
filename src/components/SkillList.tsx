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
                <p className="text-muted leading-relaxed">
                    {skills.join(", ")}
                </p>
            </div>
        </section>

    );
}
