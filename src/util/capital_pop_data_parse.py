import csv
import json

if __name__ == '__main__':
  csvfile = open('worldcities.csv', 'r')
  jsonfile = open('capitals_data.json', 'w')

  fieldnames = ("Capital_city","Country","Population","Population_rank","Continent")
  reader = csv.DictReader( csvfile, fieldnames)
  for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')