import React from 'react'

const ExperienceSection = () => {
  return (
    <div>
      <div className="flex gap-15 py-30">
        <div className="py-12 px-9 flex-1 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
          <h1 className="text-4xl md:text-5xl font-primary font-bold font-display mb-4 animate-fade-in color-primary">Experiences</h1>
          <div className="py-7 border-b border-gray-900">
            <div className="mb-5">
              <h1 className="color-reddish text-2xl font-medium mb-4">
                Senior Frontend Developer
              </h1>
              <span className="color-primary text-md font-medium mb-5">
                CodeClouds IT Solutions Pvt Ltd (August, 2021 - Present)
              </span>
            </div>
            <ul className="color-secondary text-base tracking-wide leading-7 list-disc pl-5 space-y-2">
              <li>
                Designed and developed scalable React applications with TypeScript and Redux, improving performance and user experience.
              </li>

              <li>
                Built a reusable component library to accelerate feature delivery and maintain UI consistency across projects.
              </li>

              <li>
                Implemented performance optimizations (lazy loading, memoization, virtualization), reducing load times by up to 40%. Ensured responsive and accessible designs (a11y compliance, cross-browser support).
              </li>

              <li>
                Collaborated with backend and product teams to deliver features aligned with business needs.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-12 px-9 flex-1 rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
          <h1 className="text-4xl md:text-5xl font-primary font-bold font-display mb-4 animate-fade-in color-primary">Education</h1>
          <div className="py-7 border-b border-gray-800">
            <div className="mb-5">
              <h1 className="color-reddish text-2xl font-medium mb-4">
                Master of Computer Applications
              </h1>
              <span className="color-primary text-md font-medium mb-5">
                Amity University (2025 - 2027)
              </span>
            </div>
            <p className="color-secondary text-base tracking-wide leading-7 list-disc pl-5 space-y-2">
              Focused on advanced software development, data structures, system design, and modern web technologies. Strengthening expertise in full-stack development, scalable application architecture, and performance optimization while working on practical industry-oriented projects.{" "}
            </p>
          </div>
          <div className="py-7 border-b border-gray-800">
            <div className="mb-5">
              <h1 className="color-reddish text-2xl font-medium mb-4">
                Diploma in Mechanical Engineering
              </h1>
              <span className="color-primary text-md font-medium mb-5">
                K.K Polytechnic (2014 - 2017)
              </span>
            </div>
            <p className="color-secondary text-base tracking-wide leading-7 list-disc pl-5 space-y-2">
              Built a strong analytical and problem-solving foundation through engineering principles and technical training. Developed structured thinking, technical documentation skills, and a disciplined approach to system design.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
