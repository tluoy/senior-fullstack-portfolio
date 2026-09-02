import Hero from '../components/sections/Hero'
import ProfessionalSummary from '../components/sections/ProfessionalSummary'
import CoreSkills from '../components/sections/CoreSkills'
import FeaturedProjects from '../components/sections/FeaturedProjects'
import ExperienceSnapshot from '../components/sections/ExperienceSnapshot'
import ContactCTA from '../components/sections/ContactCTA'

function HomePage() {
  return (
    <main>
      <Hero />
      <ProfessionalSummary />
      <CoreSkills />
      <FeaturedProjects />
      <ExperienceSnapshot />
      <ContactCTA />
    </main>
  )
}

export default HomePage