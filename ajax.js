let xhr = new XMLHttpRequest();
xhr.open('GET', 'dergiler.json', true);


    xhr.onload = function() {
        let list = document.getElementById('list');

        if (xhr.status === 200) {


            const dergiler = JSON.parse(xhr.responseText);
           
            dergiler.forEach(function(dergi) {
                    
                list.innerHTML += `
                    <tr >
                            <td ROWSPAN="1" width="10%"><img src="${dergi.image}" alt="${dergi.name}" width="40%;" class="hover"></td>
                            <td class="p-4">${dergi.true}</td>
                            <td class="p-4">${dergi.publisher}</td>
                            <td class="p-4"><button type="button" class="btn btn-outline-dark"><a href="${dergi.url}" target="_blank">${dergi.name}🖱️</a></button></td>
                           
                            <td class="p-2"><span class="badge bg-primary">${dergi.dipnot[0]}</span> <br> 
                            <span class="badge bg-info">${dergi.dipnot[1]}</span> </td>
                            <td class="p-4">${dergi.number}</td>
                            <td class="p-2"><span class="badge bg-primary">${dergi.index[0]}</span> <br>
                            <span class="badge bg-success">${dergi.index[1]}</span> <br>
                            <span class="badge bg-dark">${dergi.index[2]}</span> <br>
                                             </td>
                           
                    </tr>   
                    
                    `; 


                    let sum = document.getElementById('sum');
                    let number = dergiler.length;
                    console.log(number);
                    sum.innerHTML = `
                    <button type="button" class="btn btn-warning">
                       Toplam Dergi Sayısı <span class="badge bg-primary">${number}</span>
                        </button>
                    `;


            });  
        };           
                
    };
    

xhr.send(); 

