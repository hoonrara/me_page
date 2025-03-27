function SkillCard({ emoji, name }) {
    return (
      <div className="bg-white shadow-md rounded-xl py-6 flex flex-col items-center hover:scale-105 transition-transform duration-200">
        <span className="text-4xl mb-2">{emoji}</span>
        <span className="text-lg font-medium">{name}</span>
      </div>
    );
  }
  
  export default SkillCard;
  