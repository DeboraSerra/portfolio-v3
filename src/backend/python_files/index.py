import json

def get_list(path):
  with open(path) as file:
    raw = json.load(file)
    content = [item for item in raw]
    text_back = ''
    text_cs = ''
    text_fund = ''
    text_front = ''
    text_personal = ''
    for item in content:
      if item['name'] not in text_back:
        module = item['module']
        name = item['name']
        description = item['description']
        link = item['link']
        src = item['src']
        if 'Back' in module:
          text_back += f', ("{name}", "{description}", "{link}", "{src}")'
        elif 'Comp' in module:
          text_cs += f', ("{name}", "{description}", "{link}", "{src}")'
        elif 'Fund' in module:
          text_fund += f', ("{name}", "{description}", "{link}", "{src}")'
        elif 'Front' in module:
          text_front += f', ("{name}", "{description}", "{link}", "{src}")'
        elif 'Pers' in module:
          text_personal += f', ("{name}", "{description}", "{link}", "{src}")'
  with open('back_query.txt', 'w') as file:
    file.write(text_back)
  with open('cs_query.txt', 'w') as file:
    file.write(text_cs)
  with open('front_query.txt', 'w') as file:
    file.write(text_front)
  with open('fund_query.txt', 'w') as file:
    file.write(text_fund)
  with open('pers_query.txt', 'w') as file:
    file.write(text_personal)

get_list('./list.json')
