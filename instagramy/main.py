from instagramy import InstagramUser
import os
import json
import requests

folderPath = os.path.join(os.path.realpath(__file__), '../../src/assets/instagram')

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

url = 'https://instagram.fhyd14-1.fna.fbcdn.net/v/t51.2885-15/322322322_1010390713682338_7672465270543721211_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.fhyd14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=WfeQUwMuLMMAX-gO2IO&edm=ABfd0MgBAAAA&ccb=7-5&oh=00_AfCUiUSUR1l1jGeZ_Z9b9_Ez6pNu607GeLrJ-lNkXjnnBw&oe=63BBCA5C&_nc_sid=7bff83'
response = requests.get(url)


filePath = os.path.join(folderPath, 'data.json')
f = open(filePath, 'w')
f.write(str(data))
f.close()
