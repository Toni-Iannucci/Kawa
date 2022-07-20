function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getData() {
  // console.log('test');

  //Get API
  fetch("https://randomuser.me/api/?results=9")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      let author = data.results;
      // console.log(author);

      //Get Data Value
      let output = "";
      let profilPage = "./descriptionsenior.html";
      //Get Data Loop Through
      author.forEach(function (lists) {
        output += `
                	
				<div class="card">
					<div class="card-image">
					</div>
					<div class="profile-image">
					<a href="${profilPage}"> <img src="${lists.picture.medium}" alt="photoDeProfil"> </a>
					</div>
					<div class="card-content">
					  <h3>${lists.name.first} ${lists.name.last}</h3>
					  <p>Ux designer</p>
					</div>
					<div class="icons">
						<div class="right">
							<img src="../assets/images/etoile.svg" alt="iconeEtoile"> 
					 <p>${randomNumber}</p>
						</div>
					 
					  <img src="../assets/images/coeur.svg" alt="iconeCoeur">
					</div>
					<p class="lieu">Paris</p>
				  </div>

			  `;
      });

      //Show On Our Screen All Data
      document.getElementById("output").innerHTML = output;
    });
}
const randomNumber = randomIntFromInterval(1, 5);
getData();
