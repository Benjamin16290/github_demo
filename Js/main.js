
 






const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmFiY2RiZDExNjZmZWJkN2NjODI2ZGUwYmU2NDBlZiIsIm5iZiI6MTcyMjk1NDA4MS43ODUwNywic3ViIjoiNjZiMjJlNmFiZmI4MTE0ODRlZmMxZmUyIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Sgl6CPT-E2t3aQ3cTtrm-_wOmoE-sZTVPBBYnCn7cdE'
    }
  };
  
  const List_movie= document.querySelector ('ul');
  const article = document.querySelector ('article');
  const inputmovie = document.querySelector ('inputmovie');
  
  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then(response => response.json())
    .then(response => { 
      for (const movie of response.results) {
          const li = document.createElement('li');
          const img = document.createElement('img');
          li.textContent = movie.original_title;
          img.src = "https://image.tmdb.org/t/p/original" + movie.poster_path;
          List_movie.append(li, img); 
          
           
   const title = document.createElement ('h2');
   const vote = document.createElement ('p');
   const date = document.createElement ('p');
   title.textContent = movie.title;
   vote.textContent = movie.overview;
   date.textContent = movie.release_date;
   List_movie.append(title,vote,date,);

   img.addEventListener('click', () => {
    if (vote.style.display === 'none') {
    vote.style.display = 'block';
    date.style.display = 'block';
   }

    else {
      vote.style.display = 'none';
      date.style.display = 'none';
    }



    
});

  
     } })
     
     

  
    .catch(err => console.error(err));



 


  
   
    
