import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const dataSkills = [
  {
    title: '1. Personal Area Network (PAN)',
    desc: 'PAN adalah jenis jaringan komputer yang paling pribadi dan kecil. Biasanya, PAN mencakup perangkat yang terhubung dalam jarak dekat, seperti smartphone, tablet, laptop, dan perangkat Bluetooth. PAN adalah cara yang bagus untuk berbagi file atau menghubungkan perangkat ke speaker Bluetooth atau headset nirkabel. PAN biasanya memiliki jangkauan hingga beberapa meter.',
   /* image: '/images/pan.svg' */
  },
  {
    title: '2. Local Area Network (LAN)',
    desc: 'LAN adalah jaringan komputer yang lebih besar daripada PAN dan biasanya ditemukan di lingkungan kantor, rumah, atau sekolah. LAN menghubungkan sejumlah perangkat dalam area yang relatif kecil, seperti satu gedung atau lokasi fisik tertentu. Penggunaan umum LAN adalah berbagi printer, bermain game bersama, dan berbagi file di dalam organisasi atau rumah.',
   /* image: '/images/lan.svg' */
  },
  {
    title: '3. Wide Area Network (WAN)',
    desc: 'WAN adalah jenis jaringan yang lebih besar dan mencakup area geografis yang lebih luas. Ini dapat mencakup kota, negara, atau bahkan lebih luas lagi. Internet adalah contoh utama dari WAN yang melibatkan jutaan jaringan yang terhubung secara global. WAN memungkinkan kita untuk mengakses sumber daya yang jauh di seluruh dunia, seperti situs web, email, dan aplikasi online.',
   /* image: '/images/wan.svg' */
  },
  {
    title: '4. Metropolitan Area Network (MAN)',
    desc: 'MAN adalah jenis jaringan yang berada di antara LAN dan WAN dalam hal ukuran dan cakupan. Ini biasanya mencakup area perkotaan atau metropolitan, seperti kota besar. MAN digunakan oleh perusahaan atau lembaga yang memiliki beberapa cabang atau lokasi di dalam kota yang sama. Ini memungkinkan mereka untuk berbagi data dan sumber daya dengan cepat antara lokasi yang berbeda.vaScript library for building user interfaces',
   /* image: '/images/man.svg' */
  },
  
 
 
  {
  
  }
]

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginTop: -40 }}
        animate={{ opacity: 1, marginTop: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, y: '-5vh' }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading fontSize="3xl" my={6} fontFamily="Inter">
            Pengenalan
          </Heading>
        </motion.div>

        <Flex
          direction="row"
          wrap="wrap"
          fontFamily="Inter"
          justify="center"
          align="center"
        >
          {dataSkills.map((skill, index) => (
            <Card
              key={index}
              direction={{ base: 'column', sm: 'row' }}
              overflow="hidden"
              variant="outline"
              w={330}
              border="none"
              justify="center"
            >
              <Image
                src={skill.image}
                maxW={{ base: '60px', sm: '50px' }}
                alignSelf="center"
              ></Image>
              <Stack>
                <CardBody textAlign="start">
                  <Heading size="md">{skill.title}</Heading>
                  <Text fontSize="md">{skill.desc}</Text>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Flex>
      </motion.div>
    </>
  )
}

export default Skills
