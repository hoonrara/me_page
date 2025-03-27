function Section({ id, bgColor, children }) {
    return (
      <section
        id={id}
        className={`min-h-screen flex items-center justify-center px-4 py-20 ${bgColor}`}
      >
        {children}
      </section>
    );
  }
  
  export default Section;
  