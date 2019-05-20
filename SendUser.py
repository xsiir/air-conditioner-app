#!/usr/bin/env python

import RPi.GPIO as GPIO
import requests
import json
import urllib2
from mfrc522 import SimpleMFRC522

reader = SimpleMFRC522()


url = 'https://funkcja1.azurewebsites.net/api/HttpTrigger1?code=aHoMxKb/Uuuz53cpypSVOfX8kY/qCs1E/W8S3rNOkuz1Etgd5sBr0A=='
payload = {"name": 'Maciej', 'surname': 'Sienkiewicz', 'cardCode': '1234567', 'isAdmin': '1'}

r = requests.post(url, data=json.dumps(payload))
print(r.json())