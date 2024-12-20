import { LayoutPage, TabPanel, Tabs } from '@components/common'
import { LogsDownload } from '@modules/gestion/components/LogsDownload'
import { LogsProcess } from '@modules/gestion/components/LogsProcess'
import { useState } from 'react'

const Logs = () => {
    const [tabControl, setTabControl] = useState(0)
    const handleSelectedChange = (index: any) => {
        setTabControl(index)
    }

    return (
        <LayoutPage operator='OPERADORADM' section='Logs PKI'>
            <Tabs tablist={['PROCESAR', 'DESCARGAR']} selectedIndex={tabControl} onSelect={handleSelectedChange}>
                <TabPanel>
                    <LogsProcess />
                </TabPanel>
                <TabPanel>
                    <LogsDownload />
                </TabPanel>
            </Tabs>
        </LayoutPage>
    )
}

export default Logs
