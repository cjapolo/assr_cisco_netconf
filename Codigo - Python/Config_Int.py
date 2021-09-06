import sys
from ncclient import manager
import xml.dom.minidom

m = manager.connect(host='192.168.122.239',
                    port=830,
                    username='admin',
                    password='cisco',
                    device_params={'name': "csr"})

CONFIGURATION="""
<config>
<interfaces
    xmlns="urn:ietf:params:cml:ns:yang:ietf-interfaces">
    <interface>
        <name>GigabitEhternet2</name>
        <type
            xmlns:ianaift="urn:ietf:xml:ns:yang:iana-if-type">ianaift:ethernetCsmacd

        </type>
        <enabled>true</enabled>
        <ipv4
            xmlns="urn:ietf:params:xml:ns:yang:ietf-ip">
            <address>
                <ip>1.1.1.1</ip>
                <netmask>255.255.255.0</netmask>
            </address>
        </ipv4>
        <ipv6>
    </interface>
</interfaces>
</config>"""

DATA=m.edit_config(CONFIGURATION, target='running')
print(DATA)
m.close_session()
