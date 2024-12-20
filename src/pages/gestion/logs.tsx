import { LayoutPage, TabPanel, Tabs } from '@components/common'
import { useState } from 'react'

const Logs = () => {
    const [tabControl, setTabControl] = useState(0)
    const handleSelectedChange = (index: any) => {
        setTabControl(index)
    }

    return (
        <LayoutPage operator='OPERADORADM' section='Logs PKI'>
            <Tabs tablist={['PROCESAR', 'DESCARGAR']} selectedIndex={tabControl} onSelect={handleSelectedChange}>
                <TabPanel>1</TabPanel>
                <TabPanel>2</TabPanel>
            </Tabs>
        </LayoutPage>
    )
}

export default Logs
