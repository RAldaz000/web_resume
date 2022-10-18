window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionAPI = 'https://getcounttest.azurewebsites.net/api/getCount?code=uzN9vUhQGNN0tL-oXBqWYz-QEUFhgJxQAACt1bnfP9p_AzFug8p9wg==';

const getVisitCount = () => { 
    let count = 0;
    fetch(functionAPI).then(response => {
        return response.json()
    }).then(response =>{
        console.log("website called function API");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}