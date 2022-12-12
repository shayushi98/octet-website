
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
    console.log(json)
    return json.data;
}

export async function getAllMenuItemsLabel() {
    const data = await fetchAPI(`
    {
        menuItems(where: {location: FOOTER}) {
            nodes {
              label
              uri
              childItems {
                nodes {
                  label
                  uri
                  childItems {
                    nodes {
                      label
                    }
                  }
                }
              }
            }
          }
    }
    `);
   
    let x=  data.menuItems.nodes;
    let  dataArr =  [];
    x.forEach(navs => {
  
    if(navs.label=='Home' || navs.label=='Process' || navs.label== 'Work'|| navs.label=='About' || navs.label=='More')
    dataArr.push(navs);
    
    });
  
    return {data : dataArr};
}






