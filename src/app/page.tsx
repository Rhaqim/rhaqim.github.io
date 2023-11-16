import ProgLogos from '@/components/ProgLogos'
import Section from '@/components/Section'
import { Inter } from 'next/font/google'
import { workExperiences } from '@/constant/WorkExperience'
import WorkItem from '@/components/Work/WorkItem'

const inter = Inter({
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <>
      <div className="h-[70px] flex items-center mb-4">
        <h3
          className={`font-[400px] text-[26px] leading-[28px] ${inter.className}`}
        >
          Welcome, I'm Rhaqim.
        </h3>
      </div>
      <div className="h-full w-full">
        <Section
          delay={0.2}
          title="About Me"
          description="I'm a software engineer based in Lagos, Nigeria."
        >
          <p>
            Passionate full stack developer with a diverse skill set
            encompassing backend technologies, frontend technologies, and
            database management. I have a strong foundation in languages like;
          </p>
          <ul className="my-2">
            <li className="flex flex-row space-x-2 w-full items-center my-4">
              <ProgLogos lang="java-script" /> <div>JavaScript</div>
            </li>
            <li className="flex flex-row space-x-2 w-full items-center my-4">
              <ProgLogos lang="python" /> <div>Python</div>
            </li>
            <li className="flex flex-row space-x-2 w-full items-center my-4">
              <ProgLogos lang="go" /> <div>Golang</div>
            </li>
            <li className="flex flex-row space-x-2 w-full items-center my-4">
              {' '}
              <ProgLogos lang="rust" /> <div>Rust</div>
            </li>
          </ul>
          <p>
            My expertise lies in crafting robust APIs, streamlining DevOps
            processes, and exploring the exciting realm of machine learning.
            Over the years, I've honed my abilities to lead teams, decipher
            intricate business requirements, and consistently deliver projects
            on time. I thrive in dynamic environments and am eager to contribute
            my skills to a challenging role in an innovative organization.
          </p>
          <p>
            When I'm not immersed in the world of code, you'll find me pursuing
            my hobbies. I have a deep passion for gaming, where I explore
            virtual worlds and engage in strategic challenges. Exploring new
            restaurants is another avenue where I find joy, savoring different
            cuisines and experiencing diverse culinary cultures. Additionally, I
            have an insatiable curiosity for learning new things, whether it's
            delving into emerging technologies, diving into a new book, or
            acquiring fresh skills to broaden my perspective.
          </p>
        </Section>
        <Section
          delay={0.4}
          title="Experience"
          description="I owe a lot of my experince to these companies"
        >
          {workExperiences.map((experience, index) => (
            <WorkItem key={index} {...experience} />
          ))}
        </Section>
        <Section
          delay={0.6}
          title="Projects"
          description="When I'm not working on client projects, I'm working on my own"
        >
          <p className="">I'm a software engineer based in Nigeria.</p>
        </Section>
        <Section
          delay={0.8}
          title="Contact"
          description="I'm a software engineer based in Nigeria."
        >
          <p className="">I'm a software engineer based in Nigeria.</p>
        </Section>
      </div>
    </>
  )
}
