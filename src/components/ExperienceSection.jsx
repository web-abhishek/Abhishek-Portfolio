import React from 'react'

const ExperienceSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-15 py-20 md:py-30">
        <div className="py-8 sm:py-10 md:py-12 px-6 sm:px-7 md:px-9 flex-1 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-bold font-display mb-4 animate-fade-in color-primary">Experiences</h1>
          <div className="py-7 border-b border-gray-900">
            <div className="mb-5">
              <h1 className="color-reddish text-lg sm:text-xl md:text-2xl font-medium mb-4">
                Senior Frontend Developer
              </h1>
              <span className="color-primary text-sm sm:text-base font-medium mb-5">
                CodeClouds IT Solutions Pvt Ltd (August, 2021 - Present)
              </span>
            </div>
            <ul className="color-secondary text-sm sm:text-base tracking-wide leading-6 sm:leading-7 list-disc pl-5 space-y-2">
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
        <div className="py-8 sm:py-10 md:py-12 px-6 sm:px-7 md:px-9 flex-1 rounded-2xl sm:rounded-3xl md:rounded-4xl bg-[linear-gradient(145deg,#1e2024,#23272b)] hover:bg-[linear-gradient(to_right_bottom,#212428,#16181c)] transition-all duration-300 shadow-[10px_10px_19px_#1c1e22,-10px_-10px_19px_#262a2e]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-primary font-bold font-display mb-4 animate-fade-in color-primary">Education</h1>
          <div className="py-7 border-b border-gray-800">
            <div className="mb-5">
              <h1 className="color-reddish text-lg sm:text-xl md:text-2xl font-medium mb-4">
                Master of Computer Applications
              </h1>
              <span className="color-primary text-sm sm:text-base font-medium mb-5">
                Amity University (2025 - 2027)
              </span>
            </div>
            <p className="color-secondary text-sm sm:text-base tracking-wide leading-6 sm:leading-7 list-disc pl-5 space-y-2">
              Focused on advanced software development, data structures, system design, and modern web technologies. Strengthening expertise in full-stack development, scalable application architecture, and performance optimization while working on practical industry-oriented projects.{" "}
            </p>
          </div>
          <div className="py-7 border-b border-gray-800">
            <div className="mb-5">
              <h1 className="color-reddish text-lg sm:text-xl md:text-2xl font-medium mb-4">
                Bachelor of Arts
              </h1>
              <span className="color-primary text-sm sm:text-base font-medium mb-5">
                BBMKU (2021 - 2024)
              </span>
            </div>
            <p className="color-secondary text-sm sm:text-base tracking-wide leading-6 sm:leading-7 list-disc pl-5 space-y-2">
              Studied a wide range of subjects including literature in English. Developed strong communication skills and critical thinking abilities through interdisciplinary learning.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
