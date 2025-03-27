function ProjectCard({ title, description, link }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          🔗 GitHub 보기
        </a>
      </div>
    );
  }
  
  export default ProjectCard;
  