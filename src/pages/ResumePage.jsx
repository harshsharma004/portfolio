export default function ResumePage(){
    return(
      <div className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center p-6">
  
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
          My Resume
        </h1>
  
        <div className="w-full max-w-4xl h-[80vh] border rounded-xl overflow-hidden">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
          />
        </div>
  
        <a
          href="/resume.pdf"
          download
          className="mt-6 px-6 py-3 rounded-full bg-primary text-white"
        >
          Download Resume
        </a>
  
      </div>
    )
  }