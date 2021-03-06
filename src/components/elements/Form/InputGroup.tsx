import React from 'react'
import { Box, Label } from 'theme-ui'
import { Error } from './Error'

interface InputGroupProps {
  name: string
  label: string
  disabled: boolean
  Component: React.FC
  register: any // eslint-disable-line @typescript-eslint/no-explicit-any
  errors: object
}

export const InputGroup: React.FC<InputGroupProps> = ({ name, disabled, label, Component, register, errors }) => {
  const hasError = errors[name]
  return (
    <Box mb={3}>
      <Label
        htmlFor={name}
        sx={{
          marginBottom: 1
          // color: hasError ? 'red' : undefined
        }}
      >
        {label}
      </Label>
      <Component
        disabled={disabled}
        sx={{
          borderColor: hasError ? 'red' : undefined
        }}
        name={name}
        id={name}
        ref={register}
      />
      <Error errors={errors} name={name} />
    </Box>
  )
}
