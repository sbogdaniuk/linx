import { createTeleporter } from 'react-teleporter'
import { PropsWithChildren } from 'react'

const Toolbar = createTeleporter()

export function HeaderToolbarTarget() {
  return (
    <Toolbar.Target
      role="toolbar"
      aria-orientation="horizontal"
      aria-label="Toolbar"
    />
)
}

export function HeaderToolbar({ children }: PropsWithChildren) {
  return <Toolbar.Source>{children}</Toolbar.Source>
}
