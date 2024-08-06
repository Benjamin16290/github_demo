
 
 
/*const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmFiY2RiZDExNjZmZWJkN2NjODI2ZGUwYmU2NDBlZiIsIm5iZiI6MTcyMjk1NDA4MS43ODUwNywic3ViIjoiNjZiMjJlNmFiZmI4MTE0ODRlZmMxZmUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Sgl6CPT-E2t3aQ3cTtrm-_wOmoE-sZTVPBBYnCn7cdE'
    }
  };

  const List_movie= document.querySelector ('ul');
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => {
        for (const movie of response.results) {
          const li = document.createElement ('li');
          const img = document.createElement ('img');
          li.textcontent = movie.original_title;
          img.src = "https://image.tmdb.org/t/p/original" + movie.poster_path;
          List_movie.append (li,img);
          

        }
    })
    .catch(err => console.error(err));*/

;

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmFiY2RiZDExNjZmZWJkN2NjODI2ZGUwYmU2NDBlZiIsIm5iZiI6MTcyMjk1NDA4MS43ODUwNywic3ViIjoiNjZiMjJlNmFiZmI4MTE0ODRlZmMxZmUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Sgl6CPT-E2t3aQ3cTtrm-_wOmoE-sZTVPBBYnCn7cdE'
    }
  };
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));