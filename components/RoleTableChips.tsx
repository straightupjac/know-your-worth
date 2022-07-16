import { Box } from "@chakra-ui/react"

export const IdentityChip = ({ label }: { label: string }) => {
  switch (label) {
    case "LGBTQ+":
      return (
        <Box color="gray.700"
          background="linear-gradient(180deg, rgba(248, 220, 220, 0.94) 0%, rgba(245, 239, 220, 0.7025) 22.4%, rgba(224, 248, 220, 0.49) 39.58%, rgba(230, 220, 248, 0.47) 55.21%, rgba(242, 220, 248, 0.81) 70.31%, rgba(248, 220, 233, 0.81) 85.42%, #F8DCDF 96.35%);"
          padding={2}
          borderRadius={10}
        >
          {label}
        </Box>)
    case "Male":
      return (
        <Box color="gray.700" background="#E2E8FA" padding={2} borderRadius={10}>
          {label}
        </Box>)
    case "Female":
      return (
        <Box color="gray.700" background="#F6E2FA" padding={2} borderRadius={10}>
          {label}
        </Box>)
    case "Non-binary":
      return (
        <Box color="gray.700" background="#EEEAF5" padding={2} borderRadius={10}>
          {label}
        </Box>)
    default:
      return <></>
  }
}

export const RaceChip = ({ label }: { label: string }) => {
  switch (label) {
    case "White/Caucasian":
      return (
        <Box color="gray.700"
          background='#EAF5EA'
          padding={2}
          borderRadius={10}
        >
          {label}
        </Box>)
    case "Southeast Asian":
      return (
        <Box color="gray.700" background="#F9EDDF" padding={2} borderRadius={10}>
          {label}
        </Box>)
    case "East Asian":
      return (
        <Box color="gray.700" background="#F9F3DF" padding={2} borderRadius={10}>
          {label}
        </Box>)
    case "Native American":
      return (
        <Box color="gray.700" background="#F9E3DF" padding={2} borderRadius={10}>
          {label}
        </Box>)
    default:
      return (
        <Box color="gray.700" background="#DFDFF9" padding={2} borderRadius={10}>
          {label}
        </Box>)
  }
}

export const HasKidsChip = () => {
  return (
    <Box color="gray.700" background="#F6E2FA" padding={2} borderRadius={10}>
      Has kids
    </Box>)
}