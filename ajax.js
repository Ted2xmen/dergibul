let xhr = new XMLHttpRequest();
xhr.open('GET', 'dergiler.json', true);


    xhr.onload = function() {
        let list = document.getElementById('list');

        if (xhr.status === 200) {


            const employes = JSON.parse(xhr.responseText);
            console.log(employes);
            employes.forEach(function(employe) {
                    
                list.innerHTML += `
                    <tr>
                            <td><img src="${employe.image}" alt="${employe.name}" width="40%;"></td>
                            <td class="p-4">${employe.publisher}</td>
                            <td class="p-4"><a href="${employe.url}" target="_blank">${employe.name}🖱️</a></td>
                           
                            <td class="p-2"><span class="badge bg-primary">${employe.dipnot[0]}</span> <br> 
                            <span class="badge bg-info">${employe.dipnot[1]}</span> </td>
                            <td class="p-4">${employe.number}    </td>
                            <td class="p-2"><span class="badge bg-primary">${employe.index[0]}</span> <br>
                            <span class="badge bg-success">${employe.index[1]}</span> <br>
                            <span class="badge bg-dark">${employe.index[2]}</span> <br>
                                             </td>
                           
                    </tr>   
                    
                    `; 
              
            });  
        };           
                
    };

xhr.send(); 