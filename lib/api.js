const API_URL = "https://octet-v2.saturnwp.link/graphql/";

async function fetchAPI(query, { variables } = {}) {
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(API_URL, {
        method: "POST",
        headers,
        body: JSON.stringify({
            query,
            variables:{},
        }),
    });

    const json = await res.json();
    return json.data;
}

export async function getAllMenuItemsLabel() {
    const data = await fetchAPI(`
    {
        menuItems {
            nodes {
              label,
              url
               }
          }
    }
    `);
    return {data : data.menuItems.nodes};
}



// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");


// var graphql = JSON.stringify({
//   query: "{\r\n        menuItems {\r\n        nodes {\r\n          label,\r\n          url\r\n           }\r\n      }\r\n    }",
//   variables: {}
// })
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: graphql,
//   redirect: 'follow'
// };

// fetch("https://octet-v2.saturnwp.link/graphql/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));


