const express = require('express')
const app = express()
const port = 3000

app.get('/restaurants', (req, res) => {
	res.json([
    {id: 1 , name: 'Ratke Group', address: '00 Londonderry Terrace', image: 'img-pic-res1.png', rating: 5},
    {id: 2 , name: 'Beatty and Sons', address: '209 Duke Alley', image: 'imgPicRes2.png', rating: 3.5},
    {id: 3 , name: 'Becker Inc', address: '2247 Green Ridge Terrace', image: 'imgPicRes3.png', rating: 4},
    {id: 4 , name: 'Jacobs Group', address: '72753 Waxwing Plaza', image: 'imgPicRes4.png', rating: 3},
    {id: 5 , name: 'Hartmann, Wolf and Dietrich', address: '35 Westridge Plaza', image: 'imgPicRes5.png', rating: 2.5},
    {id: 6 , name: 'Boyer-Corkery', address: '638 Continental Center', image: 'imgPicRes6.png', rating: 4.5},
    {id: 7 , name: 'Littel, Goyette and Hansen', address: '2079 Cherokee Circle', image: 'imgPicRes7.png', rating: 2},
    {id: 8 , name: 'Greenholt, Strosin and Volkman', address: '1560 Loftsgordon Crossing', image: 'imgPicRes8.png', rating: 2 },
    {id: 9 , name: 'Hamill Group', address: '321 Carpenter Pass', image: 'imgPicRes9.png', rating: 4.5 },
    {id: 10 , name: 'Ortiz, Goodwin and Anderson', address: '4 Tony Parkway', image: 'imgPicRes10.png', rating: 4},
    {id: 11 , name: 'Bernier, Rath and Homenick', address: '36630 West Junction', image: 'imgPicRes11.png', rating: 3},
    {id: 12 , name: 'Swaniawski Inc', address: '8847 Nelson Pass', image: 'imgPicRes12.png', rating: 3.5},
    {id: 13 , name: 'Walker LLC', address: '283 Pankratz Pass', image: 'imgPicRes13.png', rating: 2.5},
    {id: 14 , name: 'Prohaska-Howe', address: '3538 Hallows Avenue', image: 'imgPicRes14.png', rating: 2},
    {id: 15 , name: 'Gulgowski-Bechtelar', address: '09537 Sunbrook Junction', image: 'imgPicRes15.png', rating: 2.5},
    {id: 16 , name: 'Durgan-Koss', address: '9 Farwell Crossing', image: 'imgPicRes16.png', rating: 5},
    {id: 17 , name: 'Ernser-Turner', address: '635 Spohn Pass', image: 'imgPicRes17.png', rating: 1.5},
    {id: 18 , name: 'Schinner Inc', address: '0 Toban Trail', image: 'imgPicRes18.png', rating: 4},
    {id: 19 , name: 'Kulas-Mraz', address: '11 Fallview Drive', image: 'imgPicRes19.png', rating: 4.5},
    {id: 20 , name: 'Aufderhar Group', address: '01246 Farragut Drive', image: 'imgPicRes20.png', rating: 3},
	])
})

app.get('/images/:image', (req, res) => {
  res.sendFile(__dirname + "/restarurants/" + req.params.image)
})

app.post('/review', (req, res) => {
  setTimeout(() => {
    res.json({ success: "OK" })
  }, 2000)
})

app.listen(port, () => (console.log(`listening on port ${port}!`)))

