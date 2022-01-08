const cont = document.createElement('div');
cont.classList.add("container-fluid");
const row = document.createElement('div');
row.classList.add("row", "mt-2");
cont.append(row);

(async function test() {
    try {
        const response = await fetch("https://api.openbrewerydb.org/breweries");
        if (response.status !== 200) throw new Error("something error occured");
        const data = await response.json();
        console.log(data);
        for (let i = 0; i < data.length; i++) {

            row.innerHTML += `
             <div class="col-lg-4 col-md-6 col-sm-12">   
                     <div class="card border  mb-3"  style="max-width: 26rem;">
                     <div class="card-header  text-white text-center  h4" id="name"> Brewery Data</div>
                     <div class="bg">
                     <div class="card-body text-white card-contect">
                     <div class=" p-2">
                     <p id="name">Name: ${data[i].name}</p>
                     <p id="brewery_type">Type: ${data[i].brewery_type}</p>
                     <p id="address_2">Address 1: ${data[i].address_2}</p>
                     <p id="address_3">Address 2: ${data[i].address_3}</p>
                     <a id="website_url">Website: ${data[i].website_url}</a>
                     <p id="phone">Phone: ${data[i].phone}</p>
              </div>
           </div>
         </div>
        </div>`

            document.body.append(cont)

        };
    } catch (err) {
        console.log(err.message)
    }
})();