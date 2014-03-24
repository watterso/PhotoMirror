import gdata.photos.service
import gdata.media
import gdata.geo

pws = gdata.photos.service.PhotosService()
pws.ClientLogin("USERNAME","PASSWORD")
albums = pws.GetUserFeed().entry
albums.sort(key=lambda album: int(album.numphotos.text),reverse=True)
for album in albums:
	print '%s : %s : %d' % (album.title.text,album.numphotos.text,int(album.numphotos.text))
print 'num albums: %d' % (len(albums))
