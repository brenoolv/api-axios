const api = axios.create({
    baseURL: 'https://api-axios-z4u8.onrender.com/'
})

let section = "users";
let records = [];

const $ = (selector) => document.querySelector(selector);

async function listar(endpoint = `/${section}`) {
    try {
        const { data } = await api.get(endpoint);
        return data;
   } catch (erro) {
       console.log("Error na consulta: ", erro.message)
   }
}

function render() {
    $(`#page-title`).textContent = isUser ? "Usuarios" : "Produtos";
    $(`#table-head`).innerHTML = isUsers
    ? "<tr><th>Id</th><th>Nome</th><th>Email</th></tr>"
    : "<tr><th>Id</th><th>Produtos</th><th>Preço</th></tr>";
    $(`#table-body`).innerHTML = records.map(item => ´
        <tr>
            <td>${item.id ?? "_ "}</td>
            <td>${isUsers ?? "_ "}</td>
        </tr>
        );

}


async function carregar() {
    records = await listar();
    console.log(records);
    
}

carregar();