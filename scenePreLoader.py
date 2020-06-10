import os, json

dir = "/Users/tiagomachado/Documents/Research Activities/StudyCrafter/BotsJS/sc_projects/"


allProjecFolders = []
for root, dirs, files in os.walk(dir):
    for d in dirs:
        allProjecFolders.append(d)

content = os.listdir(dir + allProjecFolders[0])
content.sort()
for c in content:
    if c.endswith(".png"):
        content.remove(c)
del content[0]
print(dir + allProjecFolders[0] + "/" + content[0])
with open(dir + allProjecFolders[0] + "/" + content[0]) as f:
  data = json.load(f)
  dictNodes = data['dictNodes']
  for key in dictNodes.keys():
      dictNodes[key]['idx'] = dictNodes[key]['index']

print(data['dictNodes'])