import { Heading, Box, Wrap, Button } from '@chakra-ui/react'

import { motion } from 'framer-motion'
import { BsArrowUpRightCircle } from 'react-icons/bs'
import CertificatesList from './CertificatesList'

const certificates = [
  {
    title: 'Pan',
    desc: 'Personal Area Network',
    image: '/images/pan.jpg'
  },
  {
    title: 'Lan',
    desc: 'Local Area Network',
    image: '/images/lan.jpg'
  },
  {
    title: 'Wan',
    desc: 'Local Area Network',
    image: '/images/wan.jpg'
  },
  {
    title: 'Man',
    desc: 'Metropolitan Area Network',
    image: '/images/man.jpg'
  },
  
]


const Certificates = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Box fontFamily="Inter" mt={12} mx={-6}>
        <motion.div
          initial={{ opacity: 0, y: '-5vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading fontFamily="Inter" as="h3" size="lg" mb={12}>
            Gambar
          </Heading>
        </motion.div>
        <Wrap flexDirection="row" justify="center">
          {certificates.map((certificate, index) => (
            <CertificatesList certificate={certificate} key={index} />
          ))}
        </Wrap>
        <Button colorScheme="blue" mt={12}>
          More 
          <Box ml={2}>
            <BsArrowUpRightCircle />
          </Box>
        </Button>
      </Box>
    </motion.div>
  )
}

export default Certificates
