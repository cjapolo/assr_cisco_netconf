import sys
from ncclient import manager
import xml.dom.minidom

m = manager.connect(host='192.168.122.239',
                    port=830,
                    username='admin',
                    password='cisco',
                    device_params={'name': "csr"})

print (m.get_config('running'))
m.close_session()
