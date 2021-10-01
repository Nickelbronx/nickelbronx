/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import { useStaticQuery, graphql } from 'gatsby'

import { LocationIcon, PhoneIcon, MailIcon } from './Icons'

const CONTACT_QUERY = graphql`
  query {
    wp {
      themeOptions {
        info {
          address
          mail
          phone
        }
      }
    }
  }
`

export default (props) => {
  const data = useStaticQuery(CONTACT_QUERY)
  const { address, mail, phone } = data.wp.themeOptions.info
  return (
    <div sx={{ ...styles }} {...props}>
      <Flex className="contactItem">
        <PhoneIcon className="text-xl text-white" />
        <a href={`tel:${phone}`}>{phone}</a>
      </Flex>
      <Flex className="contactItem">
        <MailIcon />
        <a href={`mailto:${mail}`}>{mail}</a>
      </Flex>
      {/* <Flex className="contactItem">
        <LocationIcon />
        <Box dangerouslySetInnerHTML={{ __html: address }} />
      </Flex> */}
    </div>
  )
}

const styles = {
  '.contactItem': {
    mb: 20,
    a: {
      color: 'white',
    },
    svg: {
      mr: 15,
      color: 'white',
    },
    lineHeight: 1.2,
  },
}
