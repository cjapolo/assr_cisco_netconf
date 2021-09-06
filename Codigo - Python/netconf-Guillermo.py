import sys
from ncclient import manager
import xml.dom.minidom


m = manager.connect(host='192.168.122.239',
                    port=830,
                    username='admin',
                    password='cisco',
                    device_params={'name': "csr"})

get_config = '''
                <filter xmlns="urn:ietf:params:xml:ns:netconf:base:1.0">
                    <native xmlns="http://cisco.com/ns/yang/Cisco-IOS-XE-native">
                    </native>
                </filter>
            '''

post_config = '''

post

'''


if sys.argv[1] == 'get_config':
    xmlDom = xml.dom.minidom.parseString(
        str(m.get_config('running', get_config)))
    print(xmlDom.toprettyxml(indent="  "))
elif sys.argv[1] == 'post_config':
    print(post_config)