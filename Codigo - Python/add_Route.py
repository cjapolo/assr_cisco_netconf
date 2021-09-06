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
        <ip>
            <route>
                <ip-route-interface-forwarding-list>
                    <prefix>10.10.10.10</prefix>
                    <mask>255.255.255.0</mask>
                    <fwd-list>
                        <fwd>192.168.0.1</fwd>
                    </fwd-list>
                </ip-route-interface-forwarding-list>
            </route>
        </ip>
    </native>
</config>"""

DATA= m.edit_config(CONFIGURATION, target= 'running')
print(DATA)
m.close_session()
