import React, { useState } from 'react'
import Head from 'next/head'
import { Page, Spacer, useTheme } from '@zeit-ui/react'
import { ProjectsList } from '../components/ProjectsList'
import { Filters } from '../components/Filters'
import { data } from '../data'

export default function Projects() {
  const { filters, projects } = data
  const [filteredProjects, setFilteredProjects] = useState(projects)

  const handleChangeFilters = (event) => {
    const filtered = projects.filter(project => project.tags.some(v => event.indexOf(v) !== -1) ? project : null)
    setFilteredProjects(event.length ? filtered : projects)
  }

  return (
    <Page>
      <Head>
        <title>Juan Helbert | Projects</title>
        <meta name="description" content="A multidisciplinary Software Engineer with a solid knowledge in frontend. I aim to build apps that put user experience and accessibility to the forefront." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer y={1.5} />
      <Filters data={data} filteredAmount={filteredProjects.length} parentCallback={handleChangeFilters} />
      <ProjectsList data={filteredProjects} />
      <Spacer y={5} />
    </Page>
  )
}