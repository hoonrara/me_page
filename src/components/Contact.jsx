import Section from "./Section";

function Contact() {
  return (
    <Section id="contact" bgColor="bg-pink-100">
      <div className="max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-6">📬 Contact</h2>

        <p className="text-lg mb-2">이메일: <a href="mailto:your.email@example.com" className="text-blue-600 underline">your.email@example.com</a></p>

        <div className="flex justify-center gap-6 mt-4 mb-6 text-lg">
          <a href="https://github.com/yourusername" target="_blank" className="text-gray-700 hover:text-black underline">GitHub</a>
          <a href="https://yourblog.com" target="_blank" className="text-gray-700 hover:text-black underline">Blog</a>
        </div>

        {/* <a
          href="/resume.pdf" // public 폴더에 이력서 파일 넣으면 됨
          download
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          📄 이력서 다운로드
        </a> */}
      </div>
    </Section>
  );
}

export default Contact;
