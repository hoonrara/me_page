import Section from "./Section";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "운동일지 앱",
      description: "React + Spring Boot로 만든 개인 운동 기록 앱입니다.",
      link: "https://github.com/yourname/fitness-app",
    },
    {
      title: "링크트리 클론",
      description: "JWT 인증과 사용자 링크 커스터마이징 기능이 있는 클론 프로젝트입니다.",
      link: "https://github.com/yourname/linktree-clone",
    },
    {
      title: "ToDo 앱",
      description: "할 일 관리 기능과 로그인 기능이 있는 간단한 프로젝트입니다.",
      link: "https://github.com/yourname/todo-app",
    },
  ];

  return (
    <Section id="projects" bgColor="bg-orange-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">📁 Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Projects;
