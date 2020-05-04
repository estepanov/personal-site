import React from 'react'
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { lighten, darken } from '@theme-ui/color'

interface LinkProps {
  href: string
  name: string
  icon: string
}
const Link: React.FC<LinkProps> = ({ href, name, icon }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        borderColor: 'primary',
        borderStyle: 'solid',
        borderWidth: 1,
        color: 'primary',
        textDecoration: 'none',
        paddingY: 1,
        paddingX: 2,
        transition: 'ease-in-out 0.3s',
        '&:hover': {
          backgroundImage: t => `linear-gradient(to top left, ${lighten('primary', 0.1)(t)}, ${darken('primary', 0.01)(t)})`,
          color: 'white'
        }
      }}
    >
      {icon && <i sx={{ marginRight: 2 }} className={icon} />}
      {name}
    </a>
  )
}

interface ProjectLinksProps {
  repo: string
  website: string
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ repo, website }) => {
  return (
    <Flex sx={{ flexWrap: 'wrap', marginY: 2 }}>
      {repo && <Link href={repo} name="Repository" icon="fab fa-git" />}
      {website && <Link href={website} name="Website" icon="fad fa-browser" />}
    </Flex>
  )
}

export default ProjectLinks