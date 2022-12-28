import json

def get_list(path):
  with open(path) as file:
    raw = json.load(file)
    content = [item for item in raw]
    text_back = ''
    text_cs = ''
    for item in content:
      if item['name'] not in text_back or id not in text_cs:
        module = item['module']
        name = item['name']
        description = item['description']
        link = item['link']
        src = item['src']
        if 'Back' in module:
          text_back += f', ("{name}", "{description}", "{link}", "{src}")'
        elif 'Comp' in module:
          text_cs += f', ("{name}", "{description}", "{link}", "{src}")'
  with open('back_query.txt', 'w') as file:
    file.write(text_back)
  with open('cs_query.txt', 'w') as file:
    file.write(text_cs)

get_list('./list.json')
