import { createTeleporter } from "react-teleporter";
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

const Title = createTeleporter();

export function HeaderTitleTarget (props: ComponentPropsWithoutRef<'h1'>) {
  return <Title.Target as="h1" {...props} />
}

export function HeaderTitle ({ children }: PropsWithChildren) {
  return <Title.Source>{children}</Title.Source>
}
