import sys
from ncclient import manager
import xml.dom.minidom

m = manager.connect(host='192.168.122.239',
                    port=830,
                    username='admin',
                    password='cisco',
                    device_params={'name': "csr"})

CONFIGURATION= """
<config>
    <native
        xmlns="http://cisco.com/ns/yang/Cisco-IOS-XE-native">
        <hostname>nombre</hostname>
    </native>
</config>"""

DATA= m.edit_config(CONFIGURATION, target= 'running')
print(DATA)
m.close_session()
