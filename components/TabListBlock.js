import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react'
import { Week, Today } from './OneCall'

const TabListBlock = ({ data }) => {
  return (
    <Tabs isLazy>
      <TabList>
        <Tab>Today</Tab>
        <Tab>Week</Tab>
      </TabList>
      <TabPanels>
        <TabPanel pt={6} px={0} pb={6}>
          {data && <Today data={data} />}
        </TabPanel>
        <TabPanel pt={6} px={0} pb={6}>
          {data && <Week data={data} />}
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
export default TabListBlock
