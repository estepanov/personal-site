import React from 'react'
/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading } from 'theme-ui'
import { Link } from 'gatsby'
import { lighten, darken, alpha } from '@theme-ui/color'

import TechLogo from './TechLogo'
import ListImages from './ListImages'

import { Project } from '../../interfaces/Project'

interface Props {
  project: Project
}

const ProjectListItem: React.FC<Props> = ({ project }) => {
  return (
    <Link
      to={project.fields.slug}
      sx={{
        padding: [2, 3],
        my: 2,
        color: 'listContent',
        textDecoration: 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        overflow: 'hidden',
        transition: 'ease-in-out 0.3s',
        backgroundColor: 'background',
        '&:hover': {
          transform: 'scale(1.02)',
          backgroundColor: t => lighten('listBg', 0.01)(t),
          backgroundImage: t => `linear-gradient(to bottom right, ${lighten('listBg', 0.01)(t)}, ${darken('listBg', 0.1)(t)})`,
          // boxShadow: t => `0px 0px 20px ${lighten('gray', 0.1)(t)}`
          h1: {
            //   color: 'secondary'
            textDecoration: 'underline'
          }
        }
      }}
    >
      <Flex
        sx={{
          minWidth: 200,
          flex: 2,
          flexShrink: 0,
          flexDirection: 'column'
        }}
      >
        <Heading
          as="h1"
          my={2}
          sx={{
            fontSize: 3,
            color: 'listHeader',
            transition: 'ease-in-out 0.3s'
            // textDecoration: 'none'
          }}
        >
          {project.frontmatter.title}
        </Heading>
        <Text sx={{ fontSize: 1, color: 'text' }}>{project.excerpt}</Text>
        <Flex my={2} sx={{ flexDirection: 'row' }}>
          {project.frontmatter.date && <TechLogo tag={new Date(project.frontmatter.date).getFullYear()} />}

          {project.frontmatter.tech.map(tag => {
            return <TechLogo tag={tag} key={tag} />
          })}
        </Flex>
      </Flex>
      <Flex
        sx={{
          flexDirection: 'row',
          // flexWrap: 'wrap',
          flexShrink: 0,
          alignItems: 'center',
          overflowX: 'scroll',
          flex: 3,
          paddingY: 2,
          '::-webkit-scrollbar': {
            cursor: 'all-scroll',
            height: 3
          },
          /* Arrow buttons */
          '::-webkit-scrollbar-button': {
            display: 'none'
          },
          /* Track */
          '::-webkit-scrollbar-track': {
            background: 'none'
          },
          /* Handle */
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'listBg'
          },
          /* Handle on hover */
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'listBgAlt'
          }
        }}
      >
        <ListImages items={project.frontmatter.images} />
      </Flex>
    </Link>
  )
}

export default ProjectListItem
