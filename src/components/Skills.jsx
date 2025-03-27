import Section from "./Section";
import SkillCard from "./SkillCard";

function Skills() {
  const skills = [
    { name: "Java", emoji: "☕️" },
    { name: "Spring Boot", emoji: "🌱" },
    { name: "React", emoji: "⚛️" },
    { name: "MySQL", emoji: "🐬" },
    { name: "Git", emoji: "🔧" },
    { name: "Docker", emoji: "🐳" },
  ];

  return (
    <Section id="skills" bgColor="bg-blue-100">
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-bold mb-8">🛠️ Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={i} emoji={skill.emoji} name={skill.name} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Skills;
