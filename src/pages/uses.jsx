import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses | adolfo l.h.</title>
        <meta
          name="description"
          content="My favorite gadgets, software, and other recommendations."
        />
      </Head>
      <SimpleLayout
        title="My favorite gadgets, software, and other recommendations."
        intro="The tools I use to create software, maintain productivity, or that I purchase to deceive myself into believing that I am productive when, in reality, I am simply delaying my work. Here is a comprehensive list of everything I love."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Air (2016)">
              I have been using my laptop pretty much since the beginning of my
              programming journey and still going strong! After some time I
              definitely prefer a unix environment for my workstation.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, the extensions marketplace makes up for
              all that. It just feels less bloated.
            </Tool>
            <Tool title="Google Colab">
              I don't usually run Jupyter Notebooks on my machine, I prefer when
              it's on the cloud because my laptop fans go wild after I run a
              simple regression model.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Databases">
            <Tool title="MongoDB">
              It just works. Most of the time that's all you want. It also
              integrated nicely into many other apps and the python and
              javascript adapters are quite stable.
            </Tool>
            <Tool title="Firebase (Firestore)">
              Very intuitive and provides a free user authentication method. A
              solid solution if you want a simple setup.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Frameworks">
            <Tool title="Next.js">
              Server-side rendering, that's it. Though not the smallest bundle
              size out of the box, if you are aiming your project to be a
              fullstack web app, this is probably the safest bet.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
