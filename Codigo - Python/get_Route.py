import sys
from ncclient import manager
import xml.dom.minidom

m = manager.connect(host='192.168.122.239',
                    port=830,
                    username='admin',
                    password='cisco',
                    device_params={'name': "csr"})

FILTER="""
<filter>
    <native
        xmlns="http://cisco.com/ns/yang/Cisco-IOS-XE-native">
        <ip>
            <route>
                <ip-route-interface-forwarding-list></ip-route-interface-forwarding-list>
            </route>
        </ip>
    </native>
</filter>"""
        
print (m.get_config('running', FILTER))
m.close_session()