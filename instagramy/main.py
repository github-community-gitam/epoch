from instagramy import InstagramUser
import os
import json
import requests

folderPath = os.path.join(os.path.realpath(__file__), '../assets')

posts = InstagramUser("github.gitam").posts
lst = []
for index, post in enumerate(posts):
    dic = {}
    dic['name'] = 'post_'+str(index)+'.png'
    dic['is_video'] = post.is_video
    dic['post_url'] = post.post_url
    dic['taken_at_timestamp'] = post.taken_at_timestamp
    response = requests.get(post.display_url)
    if response.status_code:
        f = open(os.path.join(folderPath, dic['name']), 'wb')
        f.write(response.content)
        f.close()
    print(dic)
    lst.append(dic)
data = json.dumps(lst, default=str)


filePath = os.path.join(folderPath, 'data.json')
f = open(filePath, 'w')
f.write(str(data))
f.close()
