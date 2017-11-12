#
#
#

import urllib2
import json

def printResults(data):
	theJSON = json.loads(data)
	weather = []
#	print theJSON
	if "all" in theJSON["clouds"]:
		print theJSON["clouds"]["all"]
		weather[clouds] = theJSON["clouds"]["all"]
	
#	count = theJSON["metadata"]["count"]
#	print str(count) + " events recorded"

#	for i in theJSON["features"]:
#		print i["properties"]["place"]
	
#	for i in theJSON["features"]:
#		if i["properties"]["mag"] >= 4.0:
#			print "%2.1f" % i["properties"]["mag"], i["properties"]["place"]

def main():
	urlData = "http://api.openweathermap.org/data/2.5/weather?q=Fremont,us&APPID=045abf5acd3743fea70364c802347e30"
	webUrl = urllib2.urlopen(urlData)
	code = webUrl.getcode()
	print code
	if (code == 200):
		data = webUrl.read()
		printResults(data)
	else:
		print "Received an error from server, cannot retrieve results " + str(code)

if __name__ == "__main__":
	main()
