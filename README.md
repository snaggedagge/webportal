# Webportal

This module is used for keeping track of all my IoT applications.

Whenever a standalone application with an changing/unknown IP adress is connected, 
it should connect to this webportal to let it know where it is.

Application originally built on spring-boot, migrated to S3 with a static Angular application for cost reasons

Webportal can be accessed on [dkarlsso.com](http://dkarlsso.com)

## Improvement ideas

Originally site was intended to be used with OAuth2 and issuing JWT access tokens granting access to all other applications though a single login.
Could be introduced once again?

IoT applications could also have a Route53 SDK integration, putting up their IP dynamically to correct records, Eg. hottub.dkarlsso.com etc.

![alt text](https://github.com/snaggedagge/webportal/blob/main/img.webp?raw=true)