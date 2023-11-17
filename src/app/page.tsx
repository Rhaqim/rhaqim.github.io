import Section from '@/components/Section'
import { Inter } from 'next/font/google'
import { workExperiences } from '@/constant/WorkExperience'
import { personalProjects } from '@/constant/PersonalProjects'
import WorkItem from '@/components/Work/WorkItem'
import Projects from '@/components/Work/Projects'

const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <div>
      <div className="h-[70px] flex items-center">
        <h3
          className={`font-[400px] text-[26px] leading-[28px] ${inter.className}`}
        >
          Meet Rhaqim.
        </h3>
      </div>
      <div className="h-full w-full">
        <Section
          delay={0.2}
          title="About Me"
          description="Software developer based in Lagos, Nigeria."
          id="about"
        >
          <p>
            Hey there, I'm Anusiem John-Franklin better known as Rhaqim, I am
            passionate full-stack developer with a knack for crafting robust
            APIs, streamlining DevOps processes and all round development. I've
            honed my skills in leading teams, deciphering complex business
            requirements, and consistently delivering projects on time.
          </p>

          <p>
            In my journey, I've ventured into a lot of exciting fields in tech
            from machine learning, to backend development, frontend development,
            database management and a little bit of devops. I've worked with a
            lot of technologies, but I'm most comfortable with JavaScript,
            TypeScript, Python, Golang, and Rust. I'm also proficient with
            frameworks like React, Next.js, Django, and FastAPI. I'm always
            looking to learn new things and I'm currently exploring the world of
            assembly programming.
          </p>
          <p>
            Outside of coding, I love being immersed in gaming, exploring
            virtual worlds and tackling strategic challenges. I'm also a food
            enthusiast, always on the lookout for new culinary experiences and
            diverse cuisines. Fueling my insatiable curiosity, I love diving
            into emerging technologies, picking up new books, and acquiring
            fresh skills to broaden my perspective.
          </p>
          <p>
            Always ready to contribute my skills to a challenging role in an
            innovative organization, I thrive in dynamic environments. Let's
            build something awesome together!
          </p>
        </Section>
        <Section
          delay={0.4}
          title="Experience"
          description="I owe a lot of my experince to these companies"
          id="experience"
        >
          {workExperiences.map((experience, index) => (
            <WorkItem key={index} {...experience} />
          ))}
        </Section>
        <Section
          delay={0.6}
          title="Projects"
          description="When I'm not working on client projects, I'm working on my own"
          id="projects"
        >
          {personalProjects.map((project, index) => (
            <Projects key={index} {...project} />
          ))}
        </Section>
      </div>
    </div>
  )
}
