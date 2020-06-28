import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Page, Spacer, useTheme } from '@zeit-ui/react'
import { ProjectsList } from '../components/ProjectsList'
import { Filters } from '../components/Filters'
import { data } from '../data'

export default function Projects() {
  const { projects } = data
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [selectedType, setSelectedType] = useState('All')
  const [selectedTechnology, setSelectedTechnology] = useState('All')

  const handleChangeType = (event) => setSelectedType(event)
  const handleChangeTechnology = (event) => setSelectedTechnology(event)

  useEffect(() => {
    const filtered = projects.filter(project =>
      project.type.some(v => selectedType.indexOf(v) !== -1)
      && project.tags.some(v => selectedTechnology.indexOf(v) !== -1))
    setFilteredProjects(filtered)
  }, [selectedType, selectedTechnology])

  return (
    <Page>
      <Head>
        <title>Juan Helbert | Projects</title>
        <meta name="description" content="A multidisciplinary Software Engineer with a solid knowledge in frontend. I aim to build apps that put user experience and accessibility to the forefront." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Spacer y={1.5} />
      <Filters data={data} filteredAmount={filteredProjects.length} technologyChanged={handleChangeTechnology} typeChanged={handleChangeType} />
      <ProjectsList data={filteredProjects} selectedType={selectedType} selectedTechnology={selectedTechnology} />
      <Spacer y={5} />
    </Page>
  )
}