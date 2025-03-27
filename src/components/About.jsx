import Section from "./Section";

function About() {
  return (
    <Section id="about" bgColor="bg-green-100">
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">🙋‍♂️ About Me</h2>
        <p className="text-lg mb-2">저는 백엔드 개발자 준비생입니다.</p>
        <p className="text-lg mb-2">Spring Boot, React, MySQL을 공부 중이며,</p>
        <p className="text-lg mb-2">개인 프로젝트와 포트폴리오를 통해 실력을 키우고 있습니다.</p>
        <p className="text-lg">지속적으로 성장하며 좋은 팀원으로 일하고 싶습니다.</p>
      </div>
    </Section>
  );
}

export default About;
