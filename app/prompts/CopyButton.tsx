
import { Clipboard, IconButton } from "@chakra-ui/react"

const CopyButton = ({value}: {value: string}) => {
  return (
    <Clipboard.Root value={value}>
      <Clipboard.Trigger asChild>
        <IconButton variant="surface" size="xs">
          <Clipboard.Indicator />
        </IconButton>
      </Clipboard.Trigger>
    </Clipboard.Root>
  )
}

export default CopyButton