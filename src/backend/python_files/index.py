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
    text_uol = ''
    text_cctb = ''
    text_blue_wave = ''
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
        elif 'UOL' in module:
          text_uol += f', ("{name}", "{description}", "{link}", "{src}")'
        elif 'CCTB' in module:
          text_cctb += f', ("{name}", "{description}", "{link}", "{src}")'
        elif 'BlueWave Labs':
          text_blue_wave += f', ("{name}", "{description}", "{link}", "{src}")'
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
  with open('uol_query.txt', 'w') as file:
    file.write(text_uol)
  with open('cctb_query.txt', 'w') as file:
    file.write(text_cctb)
  with open('blue_wave_query.txt', 'w') as file:
    file.write(text_blue_wave)

get_list('./list.json')
